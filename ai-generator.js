// Module tích hợp AI (BYOK - Người dùng tự nhập Gemini API Key)
window.AIGenerator = {
  STORAGE_KEY: 'gth_gemini_api_key',
  MODEL_KEY: 'gth_gemini_model',

  getApiKey() {
    return localStorage.getItem(this.STORAGE_KEY) || '';
  },

  setApiKey(key) {
    if (!key || !key.trim()) {
      localStorage.removeItem(this.STORAGE_KEY);
    } else {
      localStorage.setItem(this.STORAGE_KEY, key.trim());
    }
  },

  getModel() {
    return localStorage.getItem(this.MODEL_KEY) || 'gemini-2.5-flash';
  },

  setModel(model) {
    localStorage.setItem(this.MODEL_KEY, model);
  },

  hasApiKey() {
    return this.getApiKey().length > 10;
  },

  async generateQuestion({ mode, topic, difficulty, customProblem }) {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error('Vui lòng nhập Gemini API Key của bạn trước khi sử dụng tính năng AI.');
    }

    const model = this.getModel();
    const topicMap = {
      limits: 'Giới hạn & Liên tục',
      derivatives: 'Đạo hàm & Vi phân',
      integrals: 'Nguyên hàm & Tích phân',
      multivariable_series: 'Chuỗi & Hàm nhiều biến'
    };
    const topicName = topicMap[topic] || 'Giải tích';

    const systemInstruction = `Bạn là một giảng viên Giải tích xuất sắc, chuyên thiết kế bài tập trắc nghiệm dạng "Đọc nhiều lời giải chi tiết - Chọn bài giải đúng" dành cho sinh viên.
Nhiệm vụ của bạn là trả về DUY NHẤT một đối tượng JSON hợp lệ (không bọc trong markdown hay giải thích ngoài JSON) theo đúng cấu trúc sau:
{
  "title": "Tên ngắn gọn chỉ ra cái bẫy của bài toán",
  "topic": "${topic || 'derivatives'}",
  "topicName": "${topicName}",
  "difficulty": "${difficulty || 'Trung bình'}",
  "problem": "Đề bài rõ ràng, dùng ký hiệu LaTeX chuẩn đặt trong $...$ hoặc $$...$$",
  "hint": "Gợi ý ngắn gọn 1-2 câu giúp người học nhận ra mấu chốt",
  "errorCategory": "Tên lỗi sai phổ biến được kiểm tra trong bài này",
  "keyTakeaway": "Quy tắc cốt lõi 1 câu thật dễ nhớ cho người lười",
  "solutions": [
    {
      "id": "sol-1",
      "steps": [
        "Bước 1: ...",
        "Bước 2: ...",
        "Bước 3: ..."
      ],
      "finalAnswer": "Kết quả cuối cùng có LaTeX $...$",
      "isCorrect": true,
      "wrongStep": null,
      "explanation": "Giải thích ngắn gọn vì sao lời giải này hoàn toàn đúng"
    },
    {
      "id": "sol-2",
      "steps": [
        "Bước 1: ...",
        "Bước 2: ...",
        "Bước 3: ..."
      ],
      "finalAnswer": "Kết quả sai do bẫy 1",
      "isCorrect": false,
      "wrongStep": 2,
      "explanation": "Chỉ rõ sai ở Bước mấy và giải thích vì sao bước đó bị nhầm"
    },
    {
      "id": "sol-3",
      "steps": [
        "Bước 1: ...",
        "Bước 2: ...",
        "Bước 3: ..."
      ],
      "finalAnswer": "Kết quả sai do bẫy 2",
      "isCorrect": false,
      "wrongStep": 1,
      "explanation": "Chỉ rõ sai ở Bước mấy và giải thích vì sao bước đó bị nhầm"
    }
  ]
}
Lưu ý quan trọng:
- Phải có ĐÚNG 3 lời giải trong mảng "solutions": 1 lời giải có "isCorrect": true, và 2 lời giải có "isCorrect": false.
- Nếu đề bài là câu hỏi yêu cầu CHỨNG MINH ("Chứng minh rằng..."): hãy đặt thêm trường "isProof": true ở cấp ngoài, đặt "finalAnswer": "" (rỗng) cho cả 3 lời giải, và cả 3 lời giải đều phải trình bày như 3 cách chứng minh đi đến đúng kết luận cần chứng minh (đpcm), nhưng 2 cách chứng minh sai mắc lỗi lập luận ngụy biện hoặc áp dụng sai định lý ở bước trung gian.
- Các lời giải sai phải mắc những lỗi sinh viên cực kỳ hay nhầm (như quên đạo hàm hàm hợp, quên đổi cận tích phân, sai dấu tích phân từng phần, lạm dụng L'Hôpital, ngụy biện khi chứng minh...), trông rất hợp lý nếu đọc lướt qua.
- Mọi công thức toán phải bọc trong dấu $...$ hoặc $$...$$.`;

    let userPrompt = '';
    if (mode === 'custom' && customProblem && customProblem.trim()) {
      userPrompt = `Người học vừa nhập đề bài Giải tích sau đây:\n"${customProblem.trim()}"\nHãy tạo 1 bài tập hoàn chỉnh cho đề bài này gồm: đề bài chuẩn hóa LaTeX, 1 lời giải đúng từng bước (3 bước), và 2 lời giải sai chứa các bẫy biến đổi mà sinh viên hay mắc phải nhất khi giải chính bài này.`;
    } else {
      userPrompt = `Hãy sáng tạo 1 câu hỏi Giải tích mới thuộc chủ đề "${topicName}" ở mức độ "${difficulty || 'Trung bình'}". Hãy chọn một bài toán kinh điển hay thi và thiết kế 3 lời giải từng bước (1 đúng, 2 sai có bẫy tinh tế).`;
    }

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: systemInstruction }]
        },
        contents: [
          {
            role: 'user',
            parts: [{ text: userPrompt }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          responseMimeType: 'application/json'
        }
      })
    });

    if (!response.ok) {
      let errMsg = `Lỗi kết nối Gemini API (HTTP ${response.status})`;
      try {
        const errData = await response.json();
        if (errData?.error?.message) {
          errMsg = `Gemini API báo lỗi: ${errData.error.message}`;
        }
      } catch (_) {}
      throw new Error(errMsg);
    }

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) {
      throw new Error('Không nhận được dữ liệu hợp lệ từ Gemini API.');
    }

    // Làm sạch nếu model trả về khối ```json
    const cleaned = rawText.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
    const parsed = JSON.parse(cleaned);

    if (!parsed.problem || !Array.isArray(parsed.solutions) || parsed.solutions.length < 2) {
      throw new Error('Cấu trúc câu hỏi do AI sinh ra chưa đầy đủ. Vui lòng thử lại.');
    }

    return {
      ...parsed,
      id: 'ai-' + Date.now(),
      isCustomAI: true
    };
  }
};
