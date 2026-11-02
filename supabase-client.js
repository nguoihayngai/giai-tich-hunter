// Module kết nối Cơ sở dữ liệu Đám mây Supabase (REST API chuẩn, không cần thư viện nặng)
window.SupabaseCloud = {
  // Bạn có thể điền cố định URL và Anon Key vào 2 biến DEFAULT dưới đây trước khi đẩy web lên mạng
  // hoặc nhập trực tiếp trong giao diện tab "App & Hồ Sơ" của ứng dụng!
  DEFAULT_URL: '',
  DEFAULT_ANON_KEY: '',

  URL_STORAGE_KEY: 'gth_supabase_url',
  KEY_STORAGE_KEY: 'gth_supabase_anon_key',
  SYNC_CODE_KEY: 'gth_sync_code',

  getUrl() {
    const raw = localStorage.getItem(this.URL_STORAGE_KEY) || this.DEFAULT_URL || '';
    return raw.trim().replace(/\/+$/, '');
  },

  getAnonKey() {
    return (localStorage.getItem(this.KEY_STORAGE_KEY) || this.DEFAULT_ANON_KEY || '').trim();
  },

  getSyncCode() {
    return (localStorage.getItem(this.SYNC_CODE_KEY) || '').trim();
  },

  setConfig({ url, anonKey, syncCode }) {
    if (typeof url === 'string') {
      localStorage.setItem(this.URL_STORAGE_KEY, url.trim().replace(/\/+$/, ''));
    }
    if (typeof anonKey === 'string') {
      localStorage.setItem(this.KEY_STORAGE_KEY, anonKey.trim());
    }
    if (typeof syncCode === 'string') {
      localStorage.setItem(this.SYNC_CODE_KEY, syncCode.trim().toLowerCase());
    }
  },

  isConfigured() {
    return this.getUrl().startsWith('https://') && this.getAnonKey().length > 20;
  },

  getHeaders(extra = {}) {
    const key = this.getAnonKey();
    return {
      'Content-Type': 'application/json',
      apikey: key,
      Authorization: `Bearer ${key}`,
      ...extra
    };
  },

  // Chuyển đổi định dạng câu hỏi giữa JS object và bảng PostgreSQL
  toDbRow(q) {
    return {
      id: q.id,
      topic: q.topic || 'derivatives',
      topic_name: q.topicName || 'Giải tích',
      difficulty: q.difficulty || 'Trung bình',
      title: q.title,
      problem: q.problem,
      hint: q.hint || '',
      error_category: q.errorCategory || '',
      key_takeaway: q.keyTakeaway || '',
      solutions: q.solutions || [],
      is_custom_ai: Boolean(q.isCustomAI)
    };
  },

  fromDbRow(row) {
    return {
      id: row.id,
      topic: row.topic,
      topicName: row.topic_name,
      difficulty: row.difficulty,
      title: row.title,
      problem: row.problem,
      hint: row.hint,
      errorCategory: row.error_category,
      keyTakeaway: row.key_takeaway,
      solutions: row.solutions,
      isCustomAI: row.is_custom_ai
    };
  },

  // 1. Lấy toàn bộ câu hỏi từ bảng public.questions trên Supabase
  async fetchQuestions() {
    if (!this.isConfigured()) return [];
    const endpoint = `${this.getUrl()}/rest/v1/questions?select=*&order=created_at.desc`;
    const res = await fetch(endpoint, {
      method: 'GET',
      headers: this.getHeaders()
    });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Lỗi tải câu hỏi từ Supabase (${res.status}): ${errText}`);
    }
    const rows = await res.json();
    return Array.isArray(rows) ? rows.map((r) => this.fromDbRow(r)) : [];
  },

  // 2. Lưu 1 câu hỏi mới (ví dụ câu hỏi AI vừa tạo) lên kho chung Supabase
  async upsertQuestion(q) {
    if (!this.isConfigured()) return false;
    const endpoint = `${this.getUrl()}/rest/v1/questions`;
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: this.getHeaders({
        Prefer: 'resolution=merge-duplicates'
      }),
      body: JSON.stringify(this.toDbRow(q))
    });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Lỗi lưu câu hỏi lên Supabase (${res.status}): ${errText}`);
    }
    return true;
  },

  // 3. Nạp hàng loạt 40 câu hỏi có sẵn lên bảng questions trên Supabase
  async seedQuestions(questionsList) {
    if (!this.isConfigured()) {
      throw new Error('Vui lòng nhập Supabase Project URL và Anon Key trước!');
    }
    const endpoint = `${this.getUrl()}/rest/v1/questions`;
    const payload = questionsList.map((q) => this.toDbRow(q));
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: this.getHeaders({
        Prefer: 'resolution=merge-duplicates'
      }),
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Không thể nạp câu hỏi (${res.status}). Bạn đã chạy file supabase_setup.sql trong SQL Editor chưa? Chi tiết: ${errText}`);
    }
    return payload.length;
  },

  // 4. Đẩy tiến độ học tập (XP, Streak, Câu đã giải, Lỗi sai) lên Cloud
  async pushProgress(userState) {
    const syncCode = this.getSyncCode();
    if (!this.isConfigured() || !syncCode) return false;

    const endpoint = `${this.getUrl()}/rest/v1/user_progress`;
    const row = {
      sync_code: syncCode,
      xp: userState.xp || 0,
      streak: userState.streak || 0,
      last_study_date: userState.lastStudyDate || null,
      total_attempts: userState.totalAttempts || 0,
      correct_attempts: userState.correctAttempts || 0,
      solved_ids: userState.solvedIds || [],
      mistake_ids: userState.mistakeIds || [],
      error_counts: userState.errorCounts || {},
      updated_at: new Date().toISOString()
    };

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: this.getHeaders({
        Prefer: 'resolution=merge-duplicates'
      }),
      body: JSON.stringify(row)
    });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Lỗi đồng bộ tiến độ lên Supabase (${res.status}): ${errText}`);
    }
    return true;
  },

  // 5. Tải tiến độ học tập từ Cloud về thiết bị
  async pullProgress() {
    const syncCode = this.getSyncCode();
    if (!this.isConfigured() || !syncCode) {
      throw new Error('Vui lòng cấu hình Supabase và nhập Mã đồng bộ (Sync ID)!');
    }

    const endpoint = `${this.getUrl()}/rest/v1/user_progress?sync_code=eq.${encodeURIComponent(syncCode)}&select=*`;
    const res = await fetch(endpoint, {
      method: 'GET',
      headers: this.getHeaders()
    });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Lỗi tải tiến độ từ Supabase (${res.status}): ${errText}`);
    }
    const rows = await res.json();
    if (!Array.isArray(rows) || rows.length === 0) {
      return null;
    }
    const r = rows[0];
    return {
      xp: r.xp || 0,
      streak: r.streak || 0,
      lastStudyDate: r.last_study_date || null,
      totalAttempts: r.total_attempts || 0,
      correctAttempts: r.correct_attempts || 0,
      solvedIds: Array.isArray(r.solved_ids) ? r.solved_ids : [],
      mistakeIds: Array.isArray(r.mistake_ids) ? r.mistake_ids : [],
      errorCounts: r.error_counts || {}
    };
  }
};
