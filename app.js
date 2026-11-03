// Logic điều khiển chính cho ứng dụng Giải Tích Hunter (PWA)
(function () {
  const STATE_KEY = 'gth_user_state_v1';
  const CUSTOM_Q_KEY = 'gth_custom_questions_v1';

  const RANKS = [
    { minXp: 0, title: '🌱 Tân binh Giải tích' },
    { minXp: 50, title: '🔍 Người soi công thức' },
    { minXp: 150, title: '🏹 Thợ săn bẫy đạo hàm' },
    { minXp: 300, title: '🛡️ Kỵ sĩ Tích phân' },
    { minXp: 500, title: '👑 Trùm Giải Tích' }
  ];

  const BADGES = [
    { id: 'first_win', icon: '🎯', title: 'Phát bắn đầu tiên', desc: 'Chọn đúng bài giải đầu tiên', check: (s) => s.solvedIds.length >= 1 },
    { id: 'five_wins', icon: '🔥', title: 'Bắt bài 5 câu', desc: 'Vượt qua 5 bài toán Giải tích', check: (s) => s.solvedIds.length >= 5 },
    { id: 'sharp_eye', icon: '🦅', title: 'Mắt đại bàng', desc: 'Đạt từ 100 XP trở lên', check: (s) => s.xp >= 100 },
    { id: 'ai_explorer', icon: '🤖', title: 'Nhà sáng tạo AI', desc: 'Tạo ít nhất 1 đề bài bằng AI', check: (_, cq) => cq.length >= 1 }
  ];

  // State mặc định
  let userState = loadState();
  let customQuestions = loadCustomQuestions();
  let cloudQuestions = [];

  // Bộ lọc hiện tại
  let currentTopic = 'all';
  let currentDifficulty = 'all';
  let isReviewMistakesMode = false;
  let filteredQuestions = [];
  let currentQuestionIndex = 0;
  let currentShuffledSolutions = [];
  let hasAnsweredCurrent = false;
  let deferredInstallPrompt = null;

  function loadState() {
    try {
      const raw = localStorage.getItem(STATE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (_) {}
    return {
      xp: 0,
      streak: 0,
      lastStudyDate: null,
      totalAttempts: 0,
      correctAttempts: 0,
      solvedIds: [],
      mistakeIds: [],
      errorCounts: {}
    };
  }

  function saveState() {
    localStorage.setItem(STATE_KEY, JSON.stringify(userState));
  }

  function loadCustomQuestions() {
    try {
      const raw = localStorage.getItem(CUSTOM_Q_KEY);
      if (raw) return JSON.parse(raw);
    } catch (_) {}
    return [];
  }

  function saveCustomQuestions() {
    localStorage.setItem(CUSTOM_Q_KEY, JSON.stringify(customQuestions));
  }

  function getAllQuestions() {
    const combined = [...cloudQuestions, ...customQuestions, ...window.BUILTIN_QUESTIONS];
    const seen = new Set();
    return combined.filter((q) => {
      if (!q || !q.id || seen.has(q.id)) return false;
      seen.add(q.id);
      return true;
    });
  }

  // Đồng bộ câu hỏi và tiến độ với Supabase Cloud
  async function syncWithSupabaseCloud(silent = false) {
    if (!window.SupabaseCloud || !window.SupabaseCloud.isConfigured()) return;
    try {
      const fetched = await window.SupabaseCloud.fetchQuestions();
      if (Array.isArray(fetched) && fetched.length > 0) {
        cloudQuestions = fetched;
      }

      if (window.SupabaseCloud.getSyncCode()) {
        const remote = await window.SupabaseCloud.pullProgress();
        if (remote) {
          userState.xp = Math.max(userState.xp || 0, remote.xp || 0);
          userState.streak = Math.max(userState.streak || 0, remote.streak || 0);
          userState.totalAttempts = Math.max(userState.totalAttempts || 0, remote.totalAttempts || 0);
          userState.correctAttempts = Math.max(userState.correctAttempts || 0, remote.correctAttempts || 0);
          userState.solvedIds = Array.from(new Set([...(userState.solvedIds || []), ...(remote.solvedIds || [])]));
          const remoteMistakes = (remote.mistakeIds || []).filter((id) => !userState.solvedIds.includes(id));
          userState.mistakeIds = Array.from(new Set([...(userState.mistakeIds || []), ...remoteMistakes]));
          userState.errorCounts = { ...(remote.errorCounts || {}), ...(userState.errorCounts || {}) };
          saveState();
        }
        await window.SupabaseCloud.pushProgress(userState);
      }

      updateHeaderUI();
      refreshQuestionPool();
      if (!silent) {
        showToast('☁️ Đã đồng bộ dữ liệu với Supabase Cloud!');
      }
    } catch (err) {
      if (!silent) {
        showToast(`⚠️ Lỗi đồng bộ Cloud: ${err.message}`);
      }
    }
  }

  // Cập nhật chuỗi ngày học (Daily Streak)
  function updateDailyStreak() {
    const today = new Date().toISOString().slice(0, 10);
    if (userState.lastStudyDate === today) return;

    if (!userState.lastStudyDate) {
      userState.streak = 1;
    } else {
      const last = new Date(userState.lastStudyDate);
      const curr = new Date(today);
      const diffDays = Math.round((curr - last) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        userState.streak += 1;
      } else if (diffDays > 1) {
        userState.streak = 1;
      }
    }
    userState.lastStudyDate = today;
    saveState();
  }

  // Render công thức Toán bằng KaTeX
  function renderMath(el) {
    if (!el || typeof window.renderMathInElement !== 'function') return;
    try {
      window.renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false
      });
    } catch (_) {}
  }

  function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.remove('hidden');
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => {
      toast.classList.add('hidden');
    }, 2800);
  }

  // Cập nhật thanh Header (XP, Streak, Rank, Badge lỗi sai)
  function updateHeaderUI() {
    document.getElementById('streak-count').textContent = userState.streak;
    document.getElementById('xp-count').textContent = userState.xp;

    let currentRank = RANKS[0].title;
    for (const r of RANKS) {
      if (userState.xp >= r.minXp) currentRank = r.title;
    }
    document.getElementById('user-rank-label').textContent = currentRank;

    const mistakeBadge = document.getElementById('nav-mistake-badge');
    if (userState.mistakeIds.length > 0) {
      mistakeBadge.textContent = userState.mistakeIds.length;
      mistakeBadge.classList.remove('hidden');
    } else {
      mistakeBadge.classList.add('hidden');
    }
  }

  // Render danh sách chip chủ đề
  function renderTopicChips() {
    const container = document.getElementById('topic-chips-container');
    container.innerHTML = '';
    window.TOPICS.forEach((t) => {
      const btn = document.createElement('button');
      btn.className = 'topic-chip' + (currentTopic === t.id ? ' active' : '');
      btn.textContent = `${t.icon} ${t.name}`;
      btn.addEventListener('click', () => {
        isReviewMistakesMode = false;
        currentTopic = t.id;
        currentQuestionIndex = 0;
        renderTopicChips();
        refreshQuestionPool();
      });
      container.appendChild(btn);
    });
  }

  // Lọc danh sách câu hỏi theo bộ lọc
  function refreshQuestionPool() {
    const allQ = getAllQuestions();
    const reviewBanner = document.getElementById('review-mode-banner');

    if (isReviewMistakesMode) {
      reviewBanner.classList.remove('hidden');
      filteredQuestions = allQ.filter((q) => userState.mistakeIds.includes(q.id));
      if (filteredQuestions.length === 0) {
        isReviewMistakesMode = false;
        reviewBanner.classList.add('hidden');
        showToast('🎉 Bạn đã xử lý hết toàn bộ câu sai!');
      }
    } else {
      reviewBanner.classList.add('hidden');
    }

    if (!isReviewMistakesMode) {
      filteredQuestions = allQ.filter((q) => {
        const matchTopic = currentTopic === 'all' || q.topic === currentTopic;
        const matchDiff = currentDifficulty === 'all' || q.difficulty === currentDifficulty;
        return matchTopic && matchDiff;
      });
    }

    if (filteredQuestions.length === 0) {
      filteredQuestions = allQ;
    }

    if (currentQuestionIndex >= filteredQuestions.length) {
      currentQuestionIndex = 0;
    }

    renderCurrentQuestion();
  }

  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // Hiển thị câu hỏi hiện tại và 3 lời giải
  function renderCurrentQuestion() {
    const q = filteredQuestions[currentQuestionIndex];
    if (!q) return;

    hasAnsweredCurrent = false;
    document.getElementById('feedback-panel').classList.add('hidden');
    document.getElementById('hint-box').classList.add('hidden');

    // Meta badges
    const topicBadge = document.getElementById('q-topic-badge');
    topicBadge.textContent = (q.isCustomAI ? '✨ AI • ' : '') + (q.topicName || 'Giải tích');

    const diffBadge = document.getElementById('q-diff-badge');
    diffBadge.textContent = q.difficulty || 'Trung bình';
    diffBadge.className = 'badge badge-diff ' + (
      q.difficulty === 'Dễ' ? 'diff-easy' : q.difficulty === 'Khó' ? 'diff-hard' : 'diff-medium'
    );

    const solvedMark = userState.solvedIds.includes(q.id) ? ' ✅' : '';
    document.getElementById('q-progress-text').textContent =
      `Câu ${currentQuestionIndex + 1}/${filteredQuestions.length}${solvedMark}`;

    document.getElementById('q-title').textContent = q.title;
    const problemEl = document.getElementById('q-problem');
    problemEl.innerHTML = q.problem.replace(/\n/g, '<br/>');

    const hintBox = document.getElementById('hint-box');
    hintBox.innerHTML = `<strong>Gợi ý:</strong> ${q.hint || 'Hãy kiểm tra kỹ từng bước biến đổi!'}`;

    // Trộn thứ tự các lời giải để người học không đoán mò theo vị trí
    currentShuffledSolutions = shuffleArray(q.solutions);

    const solutionsList = document.getElementById('solutions-list');
    solutionsList.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    currentShuffledSolutions.forEach((sol, idx) => {
      const card = document.createElement('div');
      card.className = 'solution-card';
      card.dataset.idx = idx;

      const stepsHtml = (sol.steps || [])
        .map((stepText, sIdx) => {
          return `<div class="sol-step math-content" data-step="${sIdx + 1}">${stepText}</div>`;
        })
        .join('');

      card.innerHTML = `
        <div class="sol-header">
          <div class="sol-label">
            <span class="sol-letter">${letters[idx]}</span>
            <span>Lời giải ${letters[idx]}</span>
          </div>
          <div class="sol-final-badge math-content">Đáp số: ${sol.finalAnswer || ''}</div>
        </div>
        <div class="sol-steps">${stepsHtml}</div>
        <div class="sol-explanation hidden math-content"></div>
      `;

      card.addEventListener('click', () => handleSelectSolution(idx));
      solutionsList.appendChild(card);
    });

    renderMath(document.getElementById('view-practice'));
  }

  // Xử lý khi người dùng chọn 1 bài giải
  function handleSelectSolution(chosenIdx) {
    if (hasAnsweredCurrent) return;
    hasAnsweredCurrent = true;

    const q = filteredQuestions[currentQuestionIndex];
    const chosenSol = currentShuffledSolutions[chosenIdx];
    const isCorrect = Boolean(chosenSol.isCorrect);

    updateDailyStreak();
    userState.totalAttempts += 1;

    if (isCorrect) {
      userState.correctAttempts += 1;
      const gainedXp = userState.solvedIds.includes(q.id) ? 5 : 20;
      userState.xp += gainedXp;

      if (!userState.solvedIds.includes(q.id)) {
        userState.solvedIds.push(q.id);
      }
      // Nếu câu này nằm trong sổ lỗi sai thì xóa khỏi danh sách cần ôn lại
      userState.mistakeIds = userState.mistakeIds.filter((id) => id !== q.id);
      showToast(`🎉 Chuẩn xác! +${gainedXp} XP`);
    } else {
      // Ghi nhận vào sổ tay lỗi sai
      if (!userState.mistakeIds.includes(q.id)) {
        userState.mistakeIds.push(q.id);
      }
      if (q.errorCategory) {
        userState.errorCounts[q.errorCategory] = (userState.errorCounts[q.errorCategory] || 0) + 1;
      }
      showToast('💥 Sập bẫy rồi! Xem ngay bước bị sai bên dưới nhé.');
    }

    saveState();
    updateHeaderUI();
    if (window.SupabaseCloud && window.SupabaseCloud.isConfigured() && window.SupabaseCloud.getSyncCode()) {
      window.SupabaseCloud.pushProgress(userState).catch(() => {});
    }

    // Hiển thị chi tiết đúng/sai trên từng thẻ lời giải
    const cards = document.querySelectorAll('#solutions-list .solution-card');
    cards.forEach((card, idx) => {
      card.classList.add('locked');
      const sol = currentShuffledSolutions[idx];
      const expEl = card.querySelector('.sol-explanation');
      expEl.classList.remove('hidden');

      if (sol.isCorrect) {
        card.classList.add(idx === chosenIdx ? 'correct-choice' : 'revealed-correct');
        expEl.className = 'sol-explanation exp-correct math-content';
        expEl.innerHTML = `✅ <strong>BÀI GIẢI ĐÚNG:</strong> ${sol.explanation}`;
        card.querySelectorAll('.sol-step').forEach((st) => st.classList.add('step-ok'));
      } else {
        if (idx === chosenIdx) {
          card.classList.add('wrong-choice');
        }
        expEl.className = 'sol-explanation exp-wrong math-content';
        expEl.innerHTML = `❌ <strong>BÀI GIẢI CÓ BẪY:</strong> ${sol.explanation}`;

        // Tô đỏ đúng bước bị sai
        if (sol.wrongStep) {
          const stepEl = card.querySelector(`.sol-step[data-step="${sol.wrongStep}"]`);
          if (stepEl) {
            stepEl.classList.add('step-error');
            stepEl.insertAdjacentHTML('beforeend', `<span class="step-trap-tag">⚠️ Sai ở bước này</span>`);
          }
        }
      }
    });

    // Hiển thị bảng tổng kết & Mẹo 1 câu cho người lười
    const feedbackPanel = document.getElementById('feedback-panel');
    const feedbackHeader = document.getElementById('feedback-header');
    const feedbackTakeaway = document.getElementById('feedback-takeaway');

    if (isCorrect) {
      feedbackHeader.innerHTML = '🎯 <span style="color:#34d399">Tuyệt vời! Bạn đã nhìn thấu các lời giải bẫy.</span>';
    } else {
      feedbackHeader.innerHTML = '🧐 <span style="color:#f87171">Bạn vừa chọn nhầm một lời giải cài bẫy!</span>';
    }
    feedbackTakeaway.textContent = q.keyTakeaway || q.hint || 'Hãy luôn kiểm tra điều kiện áp dụng công thức ở từng bước!';
    feedbackPanel.classList.remove('hidden');

    renderMath(document.getElementById('view-practice'));
    feedbackPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Render trang Sổ Tay Lỗi Sai
  function renderMistakesView() {
    document.getElementById('stat-solved-total').textContent = userState.solvedIds.length;
    document.getElementById('stat-mistakes-count').textContent = userState.mistakeIds.length;

    const acc = userState.totalAttempts > 0
      ? Math.round((userState.correctAttempts / userState.totalAttempts) * 100)
      : 0;
    document.getElementById('stat-accuracy').textContent = `${acc}%`;

    // Danh sách loại bẫy hay mắc
    const catContainer = document.getElementById('error-categories-list');
    const entries = Object.entries(userState.errorCounts).sort((a, b) => b[1] - a[1]);
    if (entries.length === 0) {
      catContainer.innerHTML = `<p class="helper-text">Chưa có dữ liệu lỗi sai. Hãy bắt đầu săn bài giải ở tab <strong>Săn Bài Đúng</strong>!</p>`;
    } else {
      catContainer.innerHTML = entries
        .map(([cat, count]) => `
          <div class="error-tag-item">
            <span>⚠️ ${cat}</span>
            <span class="badge badge-warn">Mắc ${count} lần</span>
          </div>
        `)
        .join('');
    }

    // Danh sách câu hỏi cần ôn lại
    const mistakeListEl = document.getElementById('mistake-questions-list');
    const allQ = getAllQuestions();
    const mistakeQuestions = allQ.filter((q) => userState.mistakeIds.includes(q.id));

    if (mistakeQuestions.length === 0) {
      mistakeListEl.innerHTML = `<p class="helper-text">🎉 Tuyệt vời! Hiện tại bạn không có câu hỏi nào tồn đọng trong sổ lỗi sai.</p>`;
    } else {
      mistakeListEl.innerHTML = '';
      mistakeQuestions.forEach((q) => {
        const item = document.createElement('div');
        item.className = 'mistake-item';
        item.innerHTML = `
          <div>
            <strong>${q.title}</strong>
            <div style="font-size:0.78rem;color:#94a3b8">${q.topicName} • ${q.difficulty}</div>
          </div>
          <button class="btn-primary-sm">Làm lại</button>
        `;
        item.querySelector('button').addEventListener('click', () => {
          isReviewMistakesMode = true;
          switchView('view-practice');
          refreshQuestionPool();
          const idx = filteredQuestions.findIndex((fq) => fq.id === q.id);
          if (idx >= 0) {
            currentQuestionIndex = idx;
            renderCurrentQuestion();
          }
        });
        mistakeListEl.appendChild(item);
      });
    }
  }

  // Render trang AI Tạo Đề
  function renderAIView() {
    const keyInput = document.getElementById('input-api-key');
    const statusBadge = document.getElementById('api-key-status');
    const modelSelect = document.getElementById('select-ai-model');

    const savedKey = window.AIGenerator.getApiKey();
    keyInput.value = savedKey;
    modelSelect.value = window.AIGenerator.getModel();

    if (window.AIGenerator.hasApiKey()) {
      statusBadge.textContent = 'Đã lưu Key';
      statusBadge.className = 'badge badge-ok';
    } else {
      statusBadge.textContent = 'Chưa có Key';
      statusBadge.className = 'badge badge-warn';
    }

    document.getElementById('ai-saved-count').textContent = customQuestions.length;
    const savedListEl = document.getElementById('ai-saved-list');

    if (customQuestions.length === 0) {
      savedListEl.innerHTML = `<p class="helper-text">Chưa có câu hỏi AI nào. Hãy nhập Gemini API Key và bấm tạo câu hỏi ở trên!</p>`;
    } else {
      savedListEl.innerHTML = '';
      customQuestions.forEach((q) => {
        const item = document.createElement('div');
        item.className = 'mistake-item';
        item.innerHTML = `
          <div>
            <strong>✨ ${q.title}</strong>
            <div style="font-size:0.78rem;color:#94a3b8">${q.topicName || 'Giải tích'} • ${q.difficulty || 'Trung bình'}</div>
          </div>
          <div style="display:flex;gap:6px">
            <button class="btn-primary-sm btn-play-ai">Thử sức</button>
            <button class="btn-outline-danger btn-del-ai" style="padding:6px 10px">Xóa</button>
          </div>
        `;
        item.querySelector('.btn-play-ai').addEventListener('click', () => {
          isReviewMistakesMode = false;
          currentTopic = 'all';
          currentDifficulty = 'all';
          switchView('view-practice');
          renderTopicChips();
          refreshQuestionPool();
          const idx = filteredQuestions.findIndex((fq) => fq.id === q.id);
          if (idx >= 0) {
            currentQuestionIndex = idx;
            renderCurrentQuestion();
          }
        });
        item.querySelector('.btn-del-ai').addEventListener('click', () => {
          customQuestions = customQuestions.filter((itemQ) => itemQ.id !== q.id);
          saveCustomQuestions();
          renderAIView();
          refreshQuestionPool();
          showToast('Đã xóa câu hỏi AI.');
        });
        savedListEl.appendChild(item);
      });
    }
  }

  // Render trang Hồ Sơ & Huy Hiệu + Cấu hình Supabase
  function renderProfileView() {
    if (window.SupabaseCloud) {
      document.getElementById('input-sb-url').value = window.SupabaseCloud.getUrl();
      document.getElementById('input-sb-key').value = window.SupabaseCloud.getAnonKey();
      document.getElementById('input-sync-code').value = window.SupabaseCloud.getSyncCode();

      const sbBadge = document.getElementById('supabase-status-badge');
      if (window.SupabaseCloud.isConfigured()) {
        sbBadge.textContent = window.SupabaseCloud.getSyncCode()
          ? `Đã kết nối (${window.SupabaseCloud.getSyncCode()})`
          : 'Đã kết nối DB';
        sbBadge.className = 'badge badge-ok';
      } else {
        sbBadge.textContent = 'Chế độ Offline';
        sbBadge.className = 'badge badge-warn';
      }
    }

    const badgesGrid = document.getElementById('badges-grid');
    badgesGrid.innerHTML = BADGES.map((b) => {
      const unlocked = b.check(userState, customQuestions);
      return `
        <div class="badge-card ${unlocked ? 'unlocked' : ''}">
          <div class="badge-card-icon">${b.icon}</div>
          <div>
            <div class="badge-card-title">${b.title}</div>
            <div class="badge-card-desc">${b.desc}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Chuyển đổi giữa 4 tab màn hình
  function switchView(targetId) {
    document.querySelectorAll('.view-section').forEach((sec) => {
      sec.classList.toggle('active', sec.id === targetId);
    });
    document.querySelectorAll('.bottom-nav .nav-item').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.target === targetId);
    });

    if (targetId === 'view-mistakes') renderMistakesView();
    if (targetId === 'view-ai') renderAIView();
    if (targetId === 'view-profile') renderProfileView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Gắn sự kiện tương tác
  function bindEvents() {
    // Điều hướng Bottom Nav
    document.querySelectorAll('.bottom-nav .nav-item').forEach((btn) => {
      btn.addEventListener('click', () => switchView(btn.dataset.target));
    });

    // Bộ lọc độ khó
    document.getElementById('difficulty-select').addEventListener('change', (e) => {
      currentDifficulty = e.target.value;
      currentQuestionIndex = 0;
      refreshQuestionPool();
    });

    // Nút chuyển nhanh sang tab AI
    document.getElementById('btn-QuickAI').addEventListener('click', () => {
      switchView('view-ai');
    });

    // Nút bật/tắt gợi ý
    document.getElementById('btn-toggle-hint').addEventListener('click', () => {
      const hintBox = document.getElementById('hint-box');
      hintBox.classList.toggle('hidden');
      renderMath(hintBox);
    });

    // Nút Câu tiếp theo / Câu trước / Ngẫu nhiên
    const goNext = () => {
      currentQuestionIndex = (currentQuestionIndex + 1) % filteredQuestions.length;
      renderCurrentQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    document.getElementById('btn-next-question').addEventListener('click', goNext);
    document.getElementById('btn-skip-q').addEventListener('click', goNext);

    document.getElementById('btn-prev-q').addEventListener('click', () => {
      currentQuestionIndex =
        (currentQuestionIndex - 1 + filteredQuestions.length) % filteredQuestions.length;
      renderCurrentQuestion();
    });

    document.getElementById('btn-random-q').addEventListener('click', () => {
      if (filteredQuestions.length <= 1) return;
      let nextIdx = currentQuestionIndex;
      while (nextIdx === currentQuestionIndex) {
        nextIdx = Math.floor(Math.random() * filteredQuestions.length);
      }
      currentQuestionIndex = nextIdx;
      renderCurrentQuestion();
    });

    // Thoát chế độ ôn tập lỗi sai
    document.getElementById('btn-exit-review').addEventListener('click', () => {
      isReviewMistakesMode = false;
      currentQuestionIndex = 0;
      refreshQuestionPool();
    });

    // Nút Ôn tất cả câu sai
    document.getElementById('btn-practice-all-mistakes').addEventListener('click', () => {
      if (userState.mistakeIds.length === 0) {
        showToast('Bạn chưa có câu sai nào cần ôn lại!');
        return;
      }
      isReviewMistakesMode = true;
      currentQuestionIndex = 0;
      switchView('view-practice');
      refreshQuestionPool();
    });

    // Lưu / Xóa Gemini API Key
    document.getElementById('btn-save-key').addEventListener('click', () => {
      const keyVal = document.getElementById('input-api-key').value;
      window.AIGenerator.setApiKey(keyVal);
      renderAIView();
      showToast(window.AIGenerator.hasApiKey() ? '✅ Đã lưu Gemini API Key trên máy!' : 'Đã xóa API Key');
    });

    document.getElementById('select-ai-model').addEventListener('change', (e) => {
      window.AIGenerator.setModel(e.target.value);
      showToast(`Đã chọn mô hình ${e.target.value}`);
    });

    document.getElementById('btn-clear-key').addEventListener('click', () => {
      window.AIGenerator.setApiKey('');
      renderAIView();
      showToast('🗑️ Đã xóa API Key khỏi trình duyệt.');
    });

    // Chuyển đổi sub-tab trong AI
    const tabAuto = document.getElementById('tab-ai-auto');
    const tabCustom = document.getElementById('tab-ai-custom');
    const paneAuto = document.getElementById('ai-mode-auto');
    const paneCustom = document.getElementById('ai-mode-custom');

    tabAuto.addEventListener('click', () => {
      tabAuto.classList.add('active');
      tabCustom.classList.remove('active');
      paneAuto.classList.remove('hidden');
      paneCustom.classList.add('hidden');
    });

    tabCustom.addEventListener('click', () => {
      tabCustom.classList.add('active');
      tabAuto.classList.remove('active');
      paneCustom.classList.remove('hidden');
      paneAuto.classList.add('hidden');
    });

    // Gọi AI tạo câu hỏi mới
    async function triggerAIGeneration(mode) {
      const statusBox = document.getElementById('ai-status-msg');
      const btnAuto = document.getElementById('btn-generate-auto');
      const btnCustom = document.getElementById('btn-generate-custom');

      const topic = document.getElementById('ai-topic-select').value;
      const difficulty = document.getElementById('ai-diff-select').value;
      const customProblem = document.getElementById('ai-custom-input').value;

      if (mode === 'custom' && (!customProblem || !customProblem.trim())) {
        showToast('⚠️ Vui lòng nhập đề bài Giải tích của bạn trước!');
        return;
      }

      statusBox.classList.remove('hidden');
      statusBox.textContent = '⏳ Gemini AI đang biên soạn 3 lời giải (1 đúng, 2 bẫy)... Vui lòng đợi khoảng 5-10 giây.';
      btnAuto.disabled = true;
      btnCustom.disabled = true;

      try {
        const newQ = await window.AIGenerator.generateQuestion({
          mode,
          topic,
          difficulty,
          customProblem
        });

        customQuestions.unshift(newQ);
        saveCustomQuestions();

        if (window.SupabaseCloud && window.SupabaseCloud.isConfigured()) {
          window.SupabaseCloud.upsertQuestion(newQ).catch(() => {});
        }

        statusBox.textContent = `✅ Đã tạo thành công: "${newQ.title}"! Đang mở câu hỏi...`;
        showToast('✨ Đã tạo bài tập mới bằng AI!');

        setTimeout(() => {
          statusBox.classList.add('hidden');
          isReviewMistakesMode = false;
          currentTopic = 'all';
          currentDifficulty = 'all';
          switchView('view-practice');
          renderTopicChips();
          refreshQuestionPool();
          currentQuestionIndex = 0;
          renderCurrentQuestion();
        }, 700);
      } catch (err) {
        statusBox.textContent = `❌ ${err.message}`;
      } finally {
        btnAuto.disabled = false;
        btnCustom.disabled = false;
      }
    }

    document.getElementById('btn-generate-auto').addEventListener('click', () => triggerAIGeneration('auto'));
    document.getElementById('btn-generate-custom').addEventListener('click', () => triggerAIGeneration('custom'));

    // Lưu cấu hình Supabase & Đồng bộ ngay
    const btnSaveSb = document.getElementById('btn-save-supabase');
    const btnSeedSb = document.getElementById('btn-seed-supabase');
    const sbMsgBox = document.getElementById('supabase-msg-box');

    if (btnSaveSb) {
      btnSaveSb.addEventListener('click', async () => {
        const url = document.getElementById('input-sb-url').value;
        const anonKey = document.getElementById('input-sb-key').value;
        const syncCode = document.getElementById('input-sync-code').value;

        window.SupabaseCloud.setConfig({ url, anonKey, syncCode });
        renderProfileView();

        if (!window.SupabaseCloud.isConfigured()) {
          sbMsgBox.classList.remove('hidden');
          sbMsgBox.textContent = 'ℹ️ Đã xóa cấu hình hoặc chưa điền đủ URL/Key. Ứng dụng đang chạy chế độ Offline.';
          return;
        }

        btnSaveSb.disabled = true;
        sbMsgBox.classList.remove('hidden');
        sbMsgBox.textContent = '⏳ Đang kết nối và đồng bộ dữ liệu với Supabase...';
        try {
          await syncWithSupabaseCloud(false);
          sbMsgBox.textContent = `✅ Đã kết nối Supabase thành công! Đang có tổng cộng ${getAllQuestions().length} câu hỏi.`;
        } catch (err) {
          sbMsgBox.textContent = `❌ ${err.message}`;
        } finally {
          btnSaveSb.disabled = false;
        }
      });
    }

    if (btnSeedSb) {
      btnSeedSb.addEventListener('click', async () => {
        const url = document.getElementById('input-sb-url').value;
        const anonKey = document.getElementById('input-sb-key').value;
        const syncCode = document.getElementById('input-sync-code').value;
        window.SupabaseCloud.setConfig({ url, anonKey, syncCode });

        if (!window.SupabaseCloud.isConfigured()) {
          showToast('⚠️ Hãy nhập Supabase URL và Anon Key trước!');
          return;
        }

        btnSeedSb.disabled = true;
        sbMsgBox.classList.remove('hidden');
        sbMsgBox.textContent = `⏳ Đang đẩy ${window.BUILTIN_QUESTIONS.length} câu hỏi Giải tích gốc lên bảng questions của Supabase...`;
        try {
          const count = await window.SupabaseCloud.seedQuestions(window.BUILTIN_QUESTIONS);
          sbMsgBox.textContent = `🎉 Thành công! Đã nạp ${count} câu hỏi Giải tích vào Database Supabase của bạn.`;
          showToast(`✅ Đã nạp ${count} câu hỏi lên Supabase!`);
        } catch (err) {
          sbMsgBox.textContent = `❌ ${err.message}`;
        } finally {
          btnSeedSb.disabled = false;
        }
      });
    }

    // Đặt lại dữ liệu học tập
    document.getElementById('btn-reset-progress').addEventListener('click', () => {
      if (confirm('Bạn có chắc muốn xóa toàn bộ điểm XP, chuỗi ngày học và lịch sử lỗi sai không?')) {
        localStorage.removeItem(STATE_KEY);
        userState = loadState();
        updateHeaderUI();
        renderProfileView();
        refreshQuestionPool();
        showToast('Đã đặt lại tiến độ học tập.');
      }
    });

    // Cài đặt PWA trên Android
    const installBtn = document.getElementById('btn-install-pwa');
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredInstallPrompt = e;
      installBtn.classList.remove('hidden');
    });

    installBtn.addEventListener('click', async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      installBtn.classList.add('hidden');
    });
  }

  // Khởi tạo ứng dụng sau khi DOM và KaTeX tải xong
  window.addEventListener('DOMContentLoaded', () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }

    updateHeaderUI();
    renderTopicChips();
    bindEvents();
    refreshQuestionPool();
    syncWithSupabaseCloud(true);

    // Đợi KaTeX sẵn sàng nếu tải bất đồng bộ
    setTimeout(() => {
      renderMath(document.body);
    }, 350);
  });
})();
