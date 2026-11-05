// Ngân hàng 40 câu hỏi Giải tích với các lời giải bẫy kinh điển (120 lời giải chi tiết)
window.TOPICS = [
  {
    id: 'all',
    name: 'Tất cả chủ đề',
    icon: '🎯',
    desc: 'Tổng hợp toàn bộ câu hỏi Giải tích và Phiếu bài tập'
  },
  {
    id: 'buoi_2_bt',
    name: 'Phiếu BT Buổi 2 (GT1)',
    icon: '📝',
    desc: 'Trọn bộ bài tập từ file Buoi 2 - BT.pdf (Bài 1 đến Bài 25)'
  },
  {
    id: 'limits',
    name: 'Giới hạn & Liên tục',
    icon: '🔍',
    desc: 'Dạng vô định 0/0, ∞/∞, ∞-∞, 1^∞, quy tắc L\'Hôpital, hàm liên tục'
  },
  {
    id: 'derivatives',
    name: 'Đạo hàm & Vi phân',
    icon: '📈',
    desc: 'Đạo hàm hàm hợp, hàm ẩn, khai triển Taylor, cực trị và tiếp tuyến'
  },
  {
    id: 'integrals',
    name: 'Nguyên hàm & Tích phân',
    icon: '∫',
    desc: 'Đổi biến số, tích phân từng phần, phân thức hữu tỉ, tích phân suy rộng'
  },
  {
    id: 'multivariable_series',
    name: 'Chuỗi & Hàm nhiều biến',
    icon: '🌐',
    desc: 'Đạo hàm riêng, cực trị 2 biến, tích phân kép, chuỗi số và chuỗi lũy thừa'
  }
];

window.BUILTIN_QUESTIONS = [
  // ==================== CHƯƠNG 1: GIỚI HẠN & LIÊN TỤC (10 CÂU) ====================
  {
    id: 'lim-01',
    topic: 'limits',
    topicName: 'Giới hạn & Liên tục',
    difficulty: 'Dễ',
    title: 'Bẫy lạm dụng quy tắc L\'Hôpital',
    problem: 'Tìm giới hạn sau:\n$$L = \\lim_{x \\to 1} \\frac{x^2 + 2x + 1}{x + 1}$$',
    hint: 'Trước khi đạo hàm tử và mẫu (L\'Hôpital), hãy kiểm tra xem biểu thức có thực sự ở dạng vô định $\\frac{0}{0}$ hay $\\frac{\\infty}{\\infty}$ không!',
    errorCategory: 'Lạm dụng quy tắc L\'Hôpital khi không phải dạng vô định',
    keyTakeaway: 'Chỉ được dùng quy tắc L\'Hôpital khi thay số vào ra dạng vô định 0/0 hoặc ∞/∞. Bước đầu tiên LUÔN LUÔN là thay thử số vào!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Thay trực tiếp $x = 1$ vào tử số và mẫu số để kiểm tra dạng của giới hạn.',
          'Bước 2: Tử số là $1^2 + 2(1) + 1 = 4$. Mẫu số là $1 + 1 = 2 \\neq 0$.',
          'Bước 3: Vì biểu thức xác định tại $x = 1$, ta tính được ngay $L = \\frac{4}{2} = 2$.'
        ],
        finalAnswer: '$L = 2$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Hàm phân thức liên tục tại $x=1$ (mẫu khác 0) nên chỉ cần thay số trực tiếp.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Áp dụng quy tắc L\'Hôpital bằng cách lấy đạo hàm tử số và đạo hàm mẫu số.',
          'Bước 2: Ta có $L = \\lim_{x \\to 1} \\frac{(x^2 + 2x + 1)\'}{(x + 1)\'} = \\lim_{x \\to 1} \\frac{2x + 2}{1}$.',
          'Bước 3: Thay $x = 1$ vào biểu thức sau đạo hàm, ta được $L = 2(1) + 2 = 4$.'
        ],
        finalAnswer: '$L = 4$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Khi $x \\to 1$, tử tiến tới $4$ và mẫu tiến tới $2$, KHÔNG phải dạng vô định $\\frac{0}{0}$ nên tuyệt đối không được dùng L\'Hôpital.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Phân tích tử số thành hằng đẳng thức: $x^2 + 2x + 1 = (x - 1)^2$.',
          'Bước 2: Thay $x = 1$ vào biểu thức $\\lim_{x \\to 1} \\frac{(x - 1)^2}{x + 1}$.',
          'Bước 3: Tử số bằng $(1 - 1)^2 = 0$, mẫu bằng $2$, suy ra $L = 0$.'
        ],
        finalAnswer: '$L = 0$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Hằng đẳng thức đúng phải là $x^2 + 2x + 1 = (x + 1)^2$ chứ không phải $(x - 1)^2$.'
      }
    ]
  },
  {
    id: 'lim-02',
    topic: 'limits',
    topicName: 'Giới hạn & Liên tục',
    difficulty: 'Trung bình',
    title: 'Bẫy giới hạn lượng giác tại vô cùng',
    problem: 'Tính giới hạn:\n$$L = \\lim_{x \\to +\\infty} \\frac{\\sin x}{x}$$',
    hint: 'Công thức $\\lim \\frac{\\sin x}{x} = 1$ chỉ đúng khi $x \\to 0$. Còn ở đây $x \\to +\\infty$!',
    errorCategory: 'Nhầm lẫn giới hạn lượng giác tại x -> 0 và x -> ∞',
    keyTakeaway: 'Khi x → 0 thì sin(x)/x → 1. Nhưng khi x → ∞, vì sin(x) bị chặn trong [-1, 1] chia cho số cực lớn (∞) nên kết quả bằng 0!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Ta biết với mọi $x > 0$ thì hàm $\\sin x$ luôn bị chặn: $-1 \\le \\sin x \\le 1$.',
          'Bước 2: Chia cả 3 vế cho $x > 0$, ta có: $-\\frac{1}{x} \\le \\frac{\\sin x}{x} \\le \\frac{1}{x}$.',
          'Bước 3: Khi $x \\to +\\infty$, cả $-\\frac{1}{x} \\to 0$ và $\\frac{1}{x} \\to 0$. Theo nguyên lý kẹp, suy ra $L = 0$.'
        ],
        finalAnswer: '$L = 0$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Hoàn hảo! Một hàm bị chặn ($\\sin x \\in [-1,1]$) nhân với một đại lượng tiến về $0$ ($\\frac{1}{x}$) thì giới hạn luôn bằng $0$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Nhận dạng đây là giới hạn lượng giác cơ bản của hàm $\\frac{\\sin x}{x}$.',
          'Bước 2: Áp dụng công thức giới hạn cơ bản $\\lim \\frac{\\sin u}{u} = 1$.',
          'Bước 3: Kết luận ngay $L = 1$.'
        ],
        finalAnswer: '$L = 1$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Công thức $\\lim \\frac{\\sin x}{x} = 1$ chỉ đúng khi $x \\to 0$. Đề bài đang hỏi $x \\to +\\infty$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Áp dụng quy tắc L\'Hôpital cho phân thức $\\frac{\\sin x}{x}$ khi $x \\to +\\infty$.',
          'Bước 2: Đạo hàm tử và mẫu ta được $L = \\lim_{x \\to +\\infty} \\frac{\\cos x}{1} = \\lim_{x \\to +\\infty} \\cos x$.',
          'Bước 3: Vì $\\cos x$ dao động không ngừng khi $x \\to +\\infty$ nên giới hạn $L$ không tồn tại.'
        ],
        finalAnswer: 'Không tồn tại giới hạn',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Khi $x \\to +\\infty$, tử số $\\sin x$ không tiến tới $\\infty$ cũng không tiến tới $0$, nên không được dùng L\'Hôpital.'
      }
    ]
  },
  {
    id: 'lim-03',
    topic: 'limits',
    topicName: 'Giới hạn & Liên tục',
    difficulty: 'Khó',
    title: 'Bẫy thay thế tương đương trong phép trừ',
    problem: 'Tính giới hạn:\n$$L = \\lim_{x \\to 0} \\frac{\\sin x - x}{x^3}$$',
    hint: 'Cẩn thận khi thay $\\sin x \\sim x$ vào hiệu hai số hạng bằng nhau! Nếu tử số triệt tiêu ra $0$, bạn đã làm mất vô cùng bé bậc cao hơn.',
    errorCategory: 'Dùng vô cùng bé tương đương trong phép cộng/trừ làm triệt tiêu bậc chính',
    keyTakeaway: 'TUYỆT ĐỐI không thay thế vô cùng bé tương đương (như sin x ≈ x) trong phép cộng/trừ nếu chúng làm triệt tiêu nhau thành 0. Hãy dùng L\'Hôpital hoặc khai triển Taylor!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Khi $x \\to 0$, ta có $\\sin x \\sim x$ (hai vô cùng bé tương đương).',
          'Bước 2: Thay $\\sin x$ bằng $x$ vào tử số, ta được $L = \\lim_{x \\to 0} \\frac{x - x}{x^3} = \\lim_{x \\to 0} \\frac{0}{x^3}$.',
          'Bước 3: Vì tử số bằng $0$ với mọi $x \\neq 0$, suy ra giới hạn $L = 0$.'
        ],
        finalAnswer: '$L = 0$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai kinh điển ở Bước 2! Không được thay vô cùng bé tương đương $\\sin x \\sim x$ vào phép trừ khi hai số hạng triệt tiêu nhau ($x - x = 0$).'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Đây là dạng vô định $\\frac{0}{0}$. Áp dụng quy tắc L\'Hôpital lần 1: $L = \\lim_{x \\to 0} \\frac{\\cos x - 1}{3x^2}$.',
          'Bước 2: Vẫn là dạng $\\frac{0}{0}$, áp dụng L\'Hôpital lần 2: $L = \\lim_{x \\to 0} \\frac{-\\sin x}{6x}$.',
          'Bước 3: Vì $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$, ta thu được $L = -\\frac{1}{6}$.'
        ],
        finalAnswer: '$L = -\\frac{1}{6}$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Dùng L\'Hôpital liên tiếp (hoặc khai triển Maclaurin $\\sin x = x - \\frac{x^3}{6} + o(x^3)$) cho kết quả đúng là $-\\frac{1}{6}$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Áp dụng quy tắc L\'Hôpital lần 1 cho dạng $\\frac{0}{0}$: $L = \\lim_{x \\to 0} \\frac{\\cos x - 1}{3x^2}$.',
          'Bước 2: Áp dụng L\'Hôpital lần 2: đạo hàm của $\\cos x - 1$ là $\\sin x$, đạo hàm của $3x^2$ là $6x$.',
          'Bước 3: Suy ra $L = \\lim_{x \\to 0} \\frac{\\sin x}{6x} = \\frac{1}{6}$.'
        ],
        finalAnswer: '$L = \\frac{1}{6}$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai dấu ở Bước 2! Đạo hàm của $\\cos x$ là $-\\sin x$ chứ không phải $+\\sin x$.'
      }
    ]
  },
  {
    id: 'lim-04',
    topic: 'limits',
    topicName: 'Giới hạn & Liên tục',
    difficulty: 'Trung bình',
    title: 'Bẫy căn thức $\\sqrt{x^2} = |x|$ khi $x \\to -\\infty$',
    problem: 'Tính giới hạn khi $x$ tiến tới âm vô cùng:\n$$L = \\lim_{x \\to -\\infty} \\frac{\\sqrt{4x^2 + 1}}{x - 2}$$',
    hint: 'Khi đưa $x^2$ ra khỏi dấu căn bậc hai: $\\sqrt{x^2} = |x|$. Vì $x \\to -\\infty$ ($x < 0$) nên $|x| = -x$!',
    errorCategory: 'Quên trị tuyệt đối khi đưa x^2 ra khỏi căn với x -> -∞',
    keyTakeaway: 'Khi x → -∞ (x âm), nhớ nằm lòng: √(x²) = |x| = -x (có dấu trừ đằng trước)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Đưa $x^2$ ra ngoài căn ở tử số: $\\sqrt{4x^2 + 1} = |x|\\sqrt{4 + \\frac{1}{x^2}}$.',
          'Bước 2: Vì $x \\to -\\infty$ nên $x < 0 \\Rightarrow |x| = -x$. Biểu thức trở thành $\\lim_{x \\to -\\infty} \\frac{-x\\sqrt{4 + \\frac{1}{x^2}}}{x(1 - \\frac{2}{x})}$.',
          'Bước 3: Rút gọn $x$ ở tử và mẫu, khi $x \\to -\\infty$ thì $\\frac{1}{x^2} \\to 0, \\frac{2}{x} \\to 0$, ta được $L = \\frac{-\\sqrt{4}}{1} = -2$.'
        ],
        finalAnswer: '$L = -2$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Bạn đã xử lý cực chuẩn dấu của $|x| = -x$ khi $x \\to -\\infty$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Đưa $x^2$ ra khỏi căn ở tử số: $\\sqrt{4x^2 + 1} = x\\sqrt{4 + \\frac{1}{x^2}}$.',
          'Bước 2: Chia cả tử và mẫu cho $x$: $L = \\lim_{x \\to -\\infty} \\frac{\\sqrt{4 + \\frac{1}{x^2}}}{1 - \\frac{2}{x}}$.',
          'Bước 3: Khi $x \\to -\\infty$, các phân số có mẫu $x$ tiến về $0$, suy ra $L = \\sqrt{4} = 2$.'
        ],
        finalAnswer: '$L = 2$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Với $x < 0$, $\\sqrt{x^2} = |x| = -x$ chứ không phải $x$. Tử số luôn dương mà mẫu số âm thì kết quả phải âm!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Giữ nguyên bậc cao nhất ở tử và mẫu: $\\sqrt{4x^2} = -2x$, ở mẫu giữ lại $-2$.',
          'Bước 2: Ta có $L = \\lim_{x \\to -\\infty} \\frac{-2x}{-2}$.',
          'Bước 3: Rút gọn được $L = \\lim_{x \\to -\\infty} x = -\\infty$.'
        ],
        finalAnswer: '$L = -\\infty$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Ở mẫu số, bậc cao nhất của $x - 2$ là $x$ chứ không phải hằng số $-2$.'
      }
    ]
  },
  {
    id: 'lim-05',
    topic: 'limits',
    topicName: 'Giới hạn & Liên tục',
    difficulty: 'Trung bình',
    title: 'Bẫy dạng vô định $1^\\infty$ và số $e$',
    problem: 'Tính giới hạn:\n$$L = \\lim_{x \\to +\\infty} \\left(1 + \\frac{3}{x}\\right)^x$$',
    hint: 'Đừng thấy $\\frac{3}{x} \\to 0$ rồi kết luận $1^\\infty = 1$! Hãy nhớ công thức $\\lim_{u \\to \\infty} (1 + \\frac{a}{u})^u = e^a$.',
    errorCategory: 'Ngộ nhận dạng vô định 1^∞ luôn bằng 1',
    keyTakeaway: 'Dạng 1^∞ KHÔNG PHẢI bằng 1! Công thức thần tốc: lim(x→∞) (1 + a/x)^(bx) = e^(a·b).',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Khi $x \\to +\\infty$, ta có $\\frac{3}{x} \\to 0$ nên biểu thức trong ngoặc tiến tới $1 + 0 = 1$.',
          'Bước 2: Vì $1$ lũy thừa bao nhiêu cũng bằng $1$ ($1^x = 1$).',
          'Bước 3: Kết luận ngay $L = 1$.'
        ],
        finalAnswer: '$L = 1$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Cơ số chỉ TIẾN TỚI 1 chứ không bằng 1 tuyệt đối, khi mũ tiến ra $\\infty$ sẽ tạo thành dạng vô định $1^\\infty$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Đây là giới hạn dạng vô định $1^\\infty$ liên quan đến hằng số Euler $e = \\lim_{t \\to \\infty} (1 + \\frac{1}{t})^t$.',
          'Bước 2: Biến đổi số mũ để xuất hiện $\\frac{x}{3}$: $L = \\lim_{x \\to +\\infty} \\left[ \\left(1 + \\frac{3}{x}\\right)^{\\frac{x}{3}} \\right]^3$.',
          'Bước 3: Vì biểu thức trong ngoặc vuông tiến tới $e$, ta được $L = e^3$.'
        ],
        finalAnswer: '$L = e^3$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Áp dụng đúng giới hạn cơ bản $\\lim_{x \\to \\infty} (1 + \\frac{a}{x})^x = e^a$ với $a = 3$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Biến đổi theo giới hạn cơ bản của số $e$: $\\lim_{x \\to \\infty} (1 + \\frac{1}{x})^x = e$.',
          'Bước 2: Do có hệ số $3$ ở tử số trong ngoặc nên ta nhân $3$ ra ngoài: $L = 3 \\cdot \\lim_{x \\to \\infty} (1 + \\frac{1}{x})^x$.',
          'Bước 3: Suy ra $L = 3e$.'
        ],
        finalAnswer: '$L = 3e$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Hệ số $3$ nằm bên trong lũy thừa bậc $x$ nên khi đưa ra ngoài phải nằm ở số mũ của $e$ ($e^3$) chứ không phải nhân $3e$.'
      }
    ]
  },
  {
    id: 'lim-06',
    topic: 'limits',
    topicName: 'Giới hạn & Liên tục',
    difficulty: 'Trung bình',
    title: 'Bẫy liên hợp dạng $\\infty - \\infty$',
    problem: 'Tính giới hạn:\n$$L = \\lim_{x \\to +\\infty} \\left(\\sqrt{x^2 + 4x} - x\\right)$$',
    hint: 'Khi gặp $\\sqrt{x^2 + ax} - x$ với $x \\to +\\infty$, không được tách thành $\\sqrt{x^2} - x = 0$. Hãy nhân lượng liên hợp!',
    errorCategory: 'Bỏ sót số hạng bậc nhất dưới căn trong dạng vô định ∞ - ∞',
    keyTakeaway: 'Với dạng √(x² + ax) - x khi x → +∞, hãy nhân liên hợp (hoặc dùng mẹo nhẩm nhanh: kết quả luôn bằng a/2)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Khi $x \\to +\\infty$, trong căn $x^2 + 4x \\sim x^2$ nên $\\sqrt{x^2 + 4x} \\sim \\sqrt{x^2} = x$.',
          'Bước 2: Thay vào biểu thức ban đầu: $L = \\lim_{x \\to +\\infty} (x - x)$.',
          'Bước 3: Kết luận $L = 0$.'
        ],
        finalAnswer: '$L = 0$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Đây là dạng vô định $\\infty - \\infty$, không được bỏ $4x$ dưới căn vì sau khi $x^2$ triệt tiêu thì $4x$ mới là bậc chính quyết định kết quả.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Nhân và chia với lượng liên hợp $\\sqrt{x^2 + 4x} + x$: $L = \\lim_{x \\to +\\infty} \\frac{(x^2 + 4x) - x^2}{\\sqrt{x^2 + 4x} + x}$.',
          'Bước 2: Rút gọn tử số còn $4x$, chia cả tử và mẫu cho $x > 0$: $L = \\lim_{x \\to +\\infty} \\frac{4}{\\sqrt{1 + \\frac{4}{x}} + 1}$.',
          'Bước 3: Khi $x \\to +\\infty$, $\\frac{4}{x} \\to 0$, suy ra $L = \\frac{4}{\\sqrt{1} + 1} = \\frac{4}{2} = 2$.'
        ],
        finalAnswer: '$L = 2$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chuẩn xác! Nhân lượng liên hợp giúp khử hoàn toàn dạng $\\infty - \\infty$ và cho kết quả đúng bằng $2$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Nhân lượng liên hợp ta được $L = \\lim_{x \\to +\\infty} \\frac{4x}{\\sqrt{x^2 + 4x} + x}$.',
          'Bước 2: Chia cả tử và mẫu cho $x$: ở mẫu $\\sqrt{1 + \\frac{4}{x}}$ tiến tới $1$, phần $+x$ đã rút gọn hết.',
          'Bước 3: Do đó $L = \\frac{4}{1} = 4$.'
        ],
        finalAnswer: '$L = 4$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Khi chia mẫu số $\\sqrt{x^2+4x} + x$ cho $x$, số hạng thứ hai $\\frac{x}{x} = 1$ chứ không mất đi, nên mẫu số phải là $1 + 1 = 2$.'
      }
    ]
  },
  {
    id: 'lim-07',
    topic: 'limits',
    topicName: 'Giới hạn & Liên tục',
    difficulty: 'Dễ',
    title: 'Bẫy vô cùng bé $1 - \\cos x$',
    problem: 'Tính giới hạn:\n$$L = \\lim_{x \\to 0} \\frac{1 - \\cos 2x}{x^2}$$',
    hint: 'Khi $u \\to 0$, công thức vô cùng bé tương đương là $1 - \\cos u \\sim \\frac{u^2}{2}$. Ở đây $u = 2x$!',
    errorCategory: 'Quên bình phương hệ số góc trong 1 - cos(ax) ~ (ax)^2 / 2',
    keyTakeaway: 'Khi u → 0 thì 1 - cos(u) ≈ u²/2. Nếu u = 2x thì phải bình phương cả số 2 lên thành (2x)²/2 = 2x²!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Áp dụng vô cùng bé tương đương khi $x \\to 0$: $1 - \\cos u \\sim \\frac{u^2}{2}$ với $u = 2x$.',
          'Bước 2: Ta có $1 - \\cos 2x \\sim \\frac{(2x)^2}{2} = \\frac{4x^2}{2} = 2x^2$.',
          'Bước 3: Thay vào giới hạn: $L = \\lim_{x \\to 0} \\frac{2x^2}{x^2} = 2$.'
        ],
        finalAnswer: '$L = 2$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Bạn đã bình phương cả cụm $(2x)^2 = 4x^2$ rất cẩn thận.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Áp dụng công thức $1 - \\cos x \\sim \\frac{x^2}{2}$ khi $x \\to 0$.',
          'Bước 2: Vì có hệ số $2$ trong $\\cos 2x$ nên $1 - \\cos 2x \\sim \\frac{2x^2}{2} = x^2$.',
          'Bước 3: Thay vào giới hạn được $L = \\lim_{x \\to 0} \\frac{x^2}{x^2} = 1$.'
        ],
        finalAnswer: '$L = 1$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Phải thay $u = 2x$ vào $\\frac{u^2}{2}$ tức là $\\frac{(2x)^2}{2} = 2x^2$, bạn quên bình phương số $2$ rồi!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Dùng quy tắc L\'Hôpital cho dạng $\\frac{0}{0}$: đạo hàm của $1 - \\cos 2x$ là $-2\\sin 2x$, đạo hàm của $x^2$ là $2x$.',
          'Bước 2: Ta được $L = \\lim_{x \\to 0} \\frac{-2\\sin 2x}{2x}$.',
          'Bước 3: Vì $\\frac{\\sin 2x}{2x} \\to 1$, suy ra $L = -2$.'
        ],
        finalAnswer: '$L = -2$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai dấu ở Bước 1! Đạo hàm của $\\cos 2x$ là $-2\\sin 2x$, nên đạo hàm của $1 - \\cos 2x$ phải là $+2\\sin 2x$.'
      }
    ]
  },
  {
    id: 'lim-08',
    topic: 'limits',
    topicName: 'Giới hạn & Liên tục',
    difficulty: 'Trung bình',
    title: 'Bẫy điều kiện hàm số liên tục tại một điểm',
    problem: 'Tìm tham số $m$ để hàm số sau liên tục tại $x = 0$:\n$$f(x) = \\begin{cases} \\frac{\\ln(1 + 3x)}{x} & \\text{khi } x \\neq 0 \\\\ 2m + 1 & \\text{khi } x = 0 \\end{cases}$$',
    hint: 'Khi $u \\to 0$ thì $\\ln(1 + u) \\sim u$. Để hàm liên tục tại $x=0$, giới hạn khi $x \\to 0$ phải bằng đúng $f(0) = 2m + 1$.',
    errorCategory: 'Quên hệ số khi tính giới hạn ln(1+ax)/x hoặc nhầm điều kiện liên tục',
    keyTakeaway: 'Hàm số liên tục tại x₀ khi và chỉ khi: Giới hạn tại x₀ BẰNG Giá trị hàm tại x₀ (lim f(x) = f(x₀)). Nhớ thêm: ln(1 + ax) ≈ ax khi x → 0!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Tính giới hạn khi $x \\to 0$: vì $\\ln(1 + 3x) \\sim 3x$ khi $x \\to 0$, nên $\\lim_{x \\to 0} f(x) = \\lim_{x \\to 0} \\frac{3x}{x} = 3$.',
          'Bước 2: Giá trị của hàm số tại $x = 0$ theo đề bài là $f(0) = 2m + 1$.',
          'Bước 3: Để hàm số liên tục tại $x = 0$ thì $\\lim_{x \\to 0} f(x) = f(0) \\Leftrightarrow 2m + 1 = 3 \\Leftrightarrow m = 1$.'
        ],
        finalAnswer: '$m = 1$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Áp dụng chuẩn $\\ln(1+3x) \\sim 3x$ và cho bằng $f(0) = 2m+1$ tìm ra $m = 1$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Thay $x = 0$ vào nhánh trên $\\frac{\\ln(1+3x)}{x}$, vì $\\ln(1) = 0$ nên giới hạn khi $x \\to 0$ bằng $0$.',
          'Bước 2: Cho giới hạn bằng giá trị hàm số tại $x = 0$: $2m + 1 = 0$.',
          'Bước 3: Giải phương trình thu được $m = -\\frac{1}{2}$.'
        ],
        finalAnswer: '$m = -\\frac{1}{2}$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Khi $x \\to 0$, cả tử $\\ln(1+3x)$ và mẫu $x$ đều tiến về $0$ (dạng vô định $\\frac{0}{0}$), không được kết luận phân thức bằng $0$!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Áp dụng công thức $\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1$, suy ra $\\lim_{x \\to 0} \\frac{\\ln(1+3x)}{x} = 1$.',
          'Bước 2: Để hàm liên tục tại $x = 0$ thì $f(0) = 2m + 1 = 1$.',
          'Bước 3: Suy ra $m = 0$.'
        ],
        finalAnswer: '$m = 0$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Vì trong ngoặc là $1 + 3x$ nên $\\ln(1+3x) \\sim 3x$, chia cho $x$ phải ra giới hạn bằng $3$ chứ không phải $1$.'
      }
    ]
  },
  {
    id: 'lim-09',
    topic: 'limits',
    topicName: 'Giới hạn & Liên tục',
    difficulty: 'Dễ',
    title: 'Bẫy giới hạn hàm mũ $e^x - 1$',
    problem: 'Tính giới hạn:\n$$L = \\lim_{x \\to 0} \\frac{e^{4x} - 1}{\\sin 2x}$$',
    hint: 'Khi $u \\to 0$, ta có bộ đôi vô cùng bé tương đương cực mạnh: $e^u - 1 \\sim u$ và $\\sin v \\sim v$.',
    errorCategory: 'Nhầm công thức vô cùng bé tương đương của e^(ax) - 1',
    keyTakeaway: 'Khi u → 0 thì e^u - 1 ≈ u và sin(v) ≈ v. Cứ thế thay thẳng vào tỉ số là ra đáp án trong 3 giây!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Khi $x \\to 0$, sử dụng các vô cùng bé tương đương: $e^{4x} - 1 \\sim 4x$ và $\\sin 2x \\sim 2x$.',
          'Bước 2: Vì đây là phép chia (tỉ số) nên ta được phép thay tương đương trực tiếp: $L = \\lim_{x \\to 0} \\frac{4x}{2x}$.',
          'Bước 3: Rút gọn $x$ ở tử và mẫu, ta được $L = 2$.'
        ],
        finalAnswer: '$L = 2$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chuẩn xác! Trong tích hoặc thương, việc thay thế vô cùng bé tương đương $e^{4x}-1 \\sim 4x$ và $\\sin 2x \\sim 2x$ là hoàn toàn hợp lệ và nhanh nhất.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Áp dụng quy tắc L\'Hôpital cho dạng $\\frac{0}{0}$: đạo hàm của $e^{4x} - 1$ là $e^{4x}$, đạo hàm của $\\sin 2x$ là $2\\cos 2x$.',
          'Bước 2: Ta được $L = \\lim_{x \\to 0} \\frac{e^{4x}}{2\\cos 2x}$.',
          'Bước 3: Thay $x = 0$ vào ($e^0 = 1, \\cos 0 = 1$), suy ra $L = \\frac{1}{2}$.'
        ],
        finalAnswer: '$L = \\frac{1}{2}$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Đạo hàm của hàm hợp $e^{4x}$ phải là $4e^{4x}$ chứ không phải $e^{4x}$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Khi $x \\to 0$, $e^{4x}$ tiến tới $1$, nên $e^{4x} - 1 \\sim x$.',
          'Bước 2: Mẫu số $\\sin 2x \\sim 2x$.',
          'Bước 3: Do đó $L = \\lim_{x \\to 0} \\frac{x}{2x} = \\frac{1}{2}$.'
        ],
        finalAnswer: '$L = \\frac{1}{2}$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Công thức đúng là $e^u - 1 \\sim u$, với $u = 4x$ thì $e^{4x} - 1 \\sim 4x$ chứ không phải $x$.'
      }
    ]
  },
  {
    id: 'lim-10',
    topic: 'limits',
    topicName: 'Giới hạn & Liên tục',
    difficulty: 'Khó',
    title: 'Bẫy giới hạn một phía (Trái & Phải khác nhau)',
    problem: 'Xét sự tồn tại và tìm giới hạn:\n$$L = \\lim_{x \\to 2} \\frac{|x - 2|}{x - 2}$$',
    hint: 'Khi gặp trị tuyệt đối $|x - 2|$ tại điểm $x \\to 2$, bạn bắt buộc phải tách thành giới hạn bên phải ($x \\to 2^+$) và giới hạn bên trái ($x \\to 2^-$)!',
    errorCategory: 'Quên xét giới hạn trái và giới hạn phải khi phá trị tuyệt đối',
    keyTakeaway: 'Giới hạn tại x₀ chỉ tồn tại khi Giới hạn Trái BẰNG Giới hạn Phải. Gặp |x - x₀|/(x - x₀) tại x₀ thì bên phải ra +1, bên trái ra -1 nên KHÔNG tồn tại giới hạn!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Phá dấu giá trị tuyệt đối $|x - 2| = x - 2$.',
          'Bước 2: Thay vào phân thức: $L = \\lim_{x \\to 2} \\frac{x - 2}{x - 2}$.',
          'Bước 3: Rút gọn tử và mẫu cho $(x - 2)$, ta được $L = 1$.'
        ],
        finalAnswer: '$L = 1$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! $|x - 2| = x - 2$ chỉ đúng khi $x > 2$. Khi $x < 2$ thì $|x - 2| = -(x - 2)$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Xét giới hạn phải ($x \\to 2^+$): vì $x > 2$ nên $|x - 2| = x - 2 \\Rightarrow \\lim_{x \\to 2^+} \\frac{x - 2}{x - 2} = 1$.',
          'Bước 2: Xét giới hạn trái ($x \\to 2^-$): vì $x < 2$ nên $|x - 2| = -(x - 2) \\Rightarrow \\lim_{x \\to 2^-} \\frac{-(x - 2)}{x - 2} = -1$.',
          'Bước 3: Do giới hạn phải ($1$) khác giới hạn trái ($-1$), nên giới hạn $L$ khi $x \\to 2$ KHÔNG TỒN TẠI.'
        ],
        finalAnswer: 'Không tồn tại giới hạn',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Đồ thị hàm số bị nhảy bậc từ $-1$ lên $+1$ tại $x = 2$, nên không tồn tại giới hạn chung tại $x = 2$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Giới hạn bên phải bằng $1$ và giới hạn bên trái bằng $-1$.',
          'Bước 2: Lấy trung bình cộng của giới hạn trái và giới hạn phải tại $x = 2$.',
          'Bước 3: Suy ra $L = \\frac{1 + (-1)}{2} = 0$.'
        ],
        finalAnswer: '$L = 0$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Không có định lý nào lấy trung bình cộng hai giới hạn một phía. Nếu hai phía khác nhau thì giới hạn không tồn tại.'
      }
    ]
  },

  // ==================== CHƯƠNG 2: ĐẠO HÀM & VI PHÂN (10 CÂU) ====================
  {
    id: 'der-01',
    topic: 'derivatives',
    topicName: 'Đạo hàm & Vi phân',
    difficulty: 'Dễ',
    title: 'Bẫy quên nhân u\' khi đạo hàm hàm hợp',
    problem: 'Tính đạo hàm của hàm số:\n$$f(x) = \\sin(x^2 + 1)$$',
    hint: 'Đây là hàm hợp $\\sin(u)$ với $u = x^2 + 1$. Đạo hàm của $\\sin(u)$ là $\\cos(u) \\cdot u\'$!',
    errorCategory: 'Quên nhân đạo hàm hàm bên trong u\' (Quy tắc dây chuyền / Chain Rule)',
    keyTakeaway: 'Đạo hàm hàm hợp giống như bóc vỏ hành từ ngoài vào trong: Đạo hàm lớp vỏ ngoài (giữ nguyên ruột), rồi NHÂN với đạo hàm lớp ruột bên trong!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Áp dụng công thức đạo hàm của hàm $\\sin$: $(\\sin u)\' = \\cos u$.',
          'Bước 2: Giữ nguyên biểu thức bên trong ngoặc là $u = x^2 + 1$.',
          'Bước 3: Kết luận $f\'(x) = \\cos(x^2 + 1)$.'
        ],
        finalAnswer: '$f\'(x) = \\cos(x^2 + 1)$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Với hàm hợp $u(x) = x^2 + 1$, công thức đúng phải là $(\\sin u)\' = u\' \\cdot \\cos u$. Bạn đã quên nhân với $(x^2+1)\' = 2x$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Xác định đây là hàm hợp $f(x) = \\sin(u)$ với hàm trong là $u(x) = x^2 + 1$.',
          'Bước 2: Theo quy tắc hàm hợp (Chain Rule): $f\'(x) = \\cos(u) \\cdot u\'(x) = \\cos(x^2 + 1) \\cdot (x^2 + 1)\'$.',
          'Bước 3: Vì $(x^2 + 1)\' = 2x$, ta có $f\'(x) = 2x \\cos(x^2 + 1)$.'
        ],
        finalAnswer: '$f\'(x) = 2x \\cos(x^2 + 1)$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chuẩn xác! Bạn đã áp dụng đúng quy tắc dây chuyền (Chain Rule): đạo hàm lớp ngoài $\\cos(x^2+1)$ nhân với đạo hàm lớp trong $2x$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Đạo hàm hàm $\\sin$ thành $\\cos$, đồng thời đạo hàm luôn phần bên trong ngoặc.',
          'Bước 2: Đạo hàm của $x^2 + 1$ là $2x$.',
          'Bước 3: Ghép lại ta được $f\'(x) = \\cos(2x)$.'
        ],
        finalAnswer: '$f\'(x) = \\cos(2x)$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Khi đạo hàm lớp vỏ ngoài ($\\sin \\to \\cos$), phần ruột bên trong ngoặc phải được GIỮ NGUYÊN là $(x^2+1)$, sau đó mới nhân $2x$ ở bên ngoài.'
      }
    ]
  },
  {
    id: 'der-02',
    topic: 'derivatives',
    topicName: 'Đạo hàm & Vi phân',
    difficulty: 'Trung bình',
    title: 'Bẫy đạo hàm tích hai hàm số',
    problem: 'Tính đạo hàm của hàm số:\n$$y = x^2 \\cdot e^x$$',
    hint: 'Đạo hàm của một tích $(u \\cdot v)\'$ KHÔNG bằng $u\' \\cdot v\'$. Hãy nhớ công thức $(uv)\' = u\'v + uv\'$!',
    errorCategory: 'Ngộ nhận đạo hàm của tích (u.v)\' = u\'.v\'',
    keyTakeaway: 'Đạo hàm của tích KHÔNG bằng tích các đạo hàm! Công thức bất di bất dịch: (u·v)\' = u\'v + u·v\'.',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Xác định hàm số có dạng tích $y = u \\cdot v$ với $u = x^2$ và $v = e^x$.',
          'Bước 2: Áp dụng quy tắc đạo hàm của tích: $y\' = u\'v + uv\' = (x^2)\' e^x + x^2 (e^x)\'$.',
          'Bước 3: Thay $(x^2)\' = 2x$ và $(e^x)\' = e^x$, rút nhân tử chung được $y\' = (x^2 + 2x)e^x$.'
        ],
        finalAnswer: '$y\' = (x^2 + 2x)e^x$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Áp dụng đúng công thức $(uv)\' = u\'v + uv\'$ và đặt $e^x$ làm nhân tử chung.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Tính đạo hàm của từng thừa số trong tích: $(x^2)\' = 2x$ và $(e^x)\' = e^x$.',
          'Bước 2: Nhân hai đạo hàm vừa tìm được với nhau: $y\' = (x^2)\' \\cdot (e^x)\'$.',
          'Bước 3: Kết quả là $y\' = 2x \\cdot e^x$.'
        ],
        finalAnswer: '$y\' = 2x e^x$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai nặng ở Bước 2! Đạo hàm của một tích $(u \\cdot v)\'$ KHÔNG BAO GIỜ bằng $u\' \\cdot v\'$. Phải dùng $(uv)\' = u\'v + uv\'$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Áp dụng quy tắc đạo hàm của tích $y = u \\cdot v$ với $u = x^2, v = e^x$.',
          'Bước 2: Tính $(x^2)\' = 2x$ và $(e^x)\' = x e^{x-1}$ (áp dụng công thức lũy thừa).',
          'Bước 3: Suy ra $y\' = 2x e^x + x^2 (x e^{x-1})$.'
        ],
        finalAnswer: '$y\' = 2x e^x + x^3 e^{x-1}$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! $e^x$ là hàm số mũ, đạo hàm của $e^x$ là chính nó ($e^x$), không được dùng công thức $(x^n)\' = n x^{n-1}$.'
      }
    ]
  },
  {
    id: 'der-03',
    topic: 'derivatives',
    topicName: 'Đạo hàm & Vi phân',
    difficulty: 'Khó',
    title: 'Bẫy hàm vừa lũy thừa vừa mũ $y = x^x$',
    problem: 'Tìm đạo hàm của hàm số $y = x^x$ (với $x > 0$).',
    hint: 'Biến $x$ nằm ở cả cơ số lẫn số mũ! Không thể dùng riêng công thức $(x^n)\'$ hay $(a^x)\'$. Hãy viết $x^x = e^{x \\ln x}$.',
    errorCategory: 'Nhầm lẫn hàm x^x với hàm lũy thừa x^n hoặc hàm mũ a^x',
    keyTakeaway: 'Khi biến x nằm ở cả đáy lẫn mũ (như x^x), hãy đổi về cơ số e: x^x = e^(x·ln x) hoặc lấy ln hai vế trước khi đạo hàm!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Coi số mũ $x$ như hằng số $n$, áp dụng công thức đạo hàm hàm lũy thừa $(x^n)\' = n \\cdot x^{n-1}$.',
          'Bước 2: Hạ số mũ $x$ xuống và giảm bậc mũ đi 1 đơn vị: $y\' = x \\cdot x^{x-1}$.',
          'Bước 3: Rút gọn $x^1 \\cdot x^{x-1} = x^x$. Vậy $y\' = x^x$.'
        ],
        finalAnswer: '$y\' = x^x$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Công thức $(x^n)\' = n x^{n-1}$ chỉ đúng khi số mũ $n$ là hằng số.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Coi cơ số $x$ như hằng số $a$, áp dụng công thức đạo hàm hàm số mũ $(a^x)\' = a^x \\ln a$.',
          'Bước 2: Thay $a$ bởi $x$, ta nhận được ngay $y\' = x^x \\ln x$.',
          'Bước 3: Kết luận đạo hàm cần tìm là $y\' = x^x \\ln x$.'
        ],
        finalAnswer: '$y\' = x^x \\ln x$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Công thức $(a^x)\' = a^x \\ln a$ chỉ đúng khi cơ số $a$ là hằng số cố định.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Biến đổi hàm số về cơ số $e$: $y = x^x = e^{\\ln(x^x)} = e^{x \\ln x}$.',
          'Bước 2: Đạo hàm hàm hợp $(e^u)\' = u\' \\cdot e^u$ với $u = x \\ln x$. Ta tính $u\' = (x)\' \\ln x + x (\\ln x)\' = \\ln x + 1$.',
          'Bước 3: Nhân lại ta được $y\' = (\\ln x + 1) e^{x \\ln x} = x^x (\\ln x + 1)$.'
        ],
        finalAnswer: '$y\' = x^x (\\ln x + 1)$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Tuyệt vời! Đưa về $e^{x \\ln x}$ là cách chuẩn xác và an toàn nhất cho dạng $u(x)^{v(x)}$.'
      }
    ]
  },
  {
    id: 'der-04',
    topic: 'derivatives',
    topicName: 'Đạo hàm & Vi phân',
    difficulty: 'Dễ',
    title: 'Bẫy ngược thứ tự tử số trong đạo hàm thương',
    problem: 'Tính đạo hàm của hàm phân thức:\n$$y = \\frac{\\ln x}{x} \\quad (x > 0)$$',
    hint: 'Trong công thức $\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}$, số hạng đầu tiên trên tử BẮT BUỘC phải là $u\'v$ (đạo hàm tử nhân mẫu)!',
    errorCategory: 'Nhầm thứ tự u\'v - uv\' trong công thức đạo hàm của một thương',
    keyTakeaway: 'Đạo hàm của thương (u/v)\' = (u\'v - u·v\') / v². Nhớ câu: "ĐạoTử·Mẫu trừ Tử·ĐạoMẫu chia Mẫu bình"!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Áp dụng công thức đạo hàm một thương $\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}$ với $u = \\ln x, v = x$.',
          'Bước 2: Tính $u\' = \\frac{1}{x}$ và $v\' = 1$. Thay vào tử số: $\\left(\\frac{1}{x}\\right) \\cdot x - (\\ln x) \\cdot 1 = 1 - \\ln x$.',
          'Bước 3: Chia cho mẫu bình phương $x^2$, ta được $y\' = \\frac{1 - \\ln x}{x^2}$.'
        ],
        finalAnswer: '$y\' = \\frac{1 - \\ln x}{x^2}$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Thứ tự $u\'v - uv\'$ được áp dụng hoàn toàn chuẩn xác.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Áp dụng công thức đạo hàm thương với $u = \\ln x$ và $v = x$.',
          'Bước 2: Trên tử số ta lấy $uv\' - u\'v = (\\ln x) \\cdot 1 - \\left(\\frac{1}{x}\\right) \\cdot x = \\ln x - 1$.',
          'Bước 3: Thu được $y\' = \\frac{\\ln x - 1}{x^2}$.'
        ],
        finalAnswer: '$y\' = \\frac{\\ln x - 1}{x^2}$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai dấu ở Bước 2! Tử số của đạo hàm thương phải là $u\'v - uv\'$ chứ không phải $uv\' - u\'v$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Đạo hàm tử số $(\\ln x)\' = \\frac{1}{x}$ và đạo hàm mẫu số $(x)\' = 1$.',
          'Bước 2: Chia đạo hàm tử cho đạo hàm mẫu: $y\' = \\frac{1/x}{1}$.',
          'Bước 3: Kết luận $y\' = \\frac{1}{x}$.'
        ],
        finalAnswer: '$y\' = \\frac{1}{x}$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai nặng ở Bước 2! Đạo hàm của thương $\\left(\\frac{u}{v}\\right)\'$ không bao giờ bằng $\\frac{u\'}{v\'}$ (bạn đang nhầm với L\'Hôpital trong giới hạn).'
      }
    ]
  },
  {
    id: 'der-05',
    topic: 'derivatives',
    topicName: 'Đạo hàm & Vi phân',
    difficulty: 'Trung bình',
    title: 'Bẫy đạo hàm hàm logarit hợp $\\ln(u)$',
    problem: 'Tính đạo hàm của hàm số:\n$$f(x) = \\ln(x^2 + 4)$$',
    hint: 'Đạo hàm của $\\ln(u)$ là $\\frac{u\'}{u}$. Rất nhiều người viết $\\frac{1}{x^2+4}$ xong rồi quên nhân $u\' = 2x$ trên tử!',
    errorCategory: 'Quên nhân u\' trên tử khi đạo hàm ln(u)',
    keyTakeaway: 'Công thức vàng: (ln u)\' = u\' / u ("Lấy ruột phẩy chia chính ruột").',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Hàm số có dạng $\\ln(u)$ với $u = x^2 + 4$.',
          'Bước 2: Áp dụng công thức $(\\ln u)\' = \\frac{u\'}{u}$, trong đó $u\' = (x^2 + 4)\' = 2x$.',
          'Bước 3: Suy ra $f\'(x) = \\frac{2x}{x^2 + 4}$.'
        ],
        finalAnswer: '$f\'(x) = \\frac{2x}{x^2 + 4}$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Áp dụng $(\\ln u)\' = \\frac{u\'}{u}$ rất gọn gàng.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Áp dụng công thức đạo hàm của hàm logarit tự nhiên $(\\ln t)\' = \\frac{1}{t}$.',
          'Bước 2: Thay $t = x^2 + 4$ vào mẫu số.',
          'Bước 3: Thu được $f\'(x) = \\frac{1}{x^2 + 4}$.'
        ],
        finalAnswer: '$f\'(x) = \\frac{1}{x^2 + 4}$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Vì $u = x^2 + 4$ là hàm hợp nên bạn phải nhân thêm $u\' = 2x$ trên tử số.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Đạo hàm lớp ngoài của $\\ln$ là $\\frac{1}{u}$, đạo hàm lớp trong là $(x^2+4)\' = 2x$.',
          'Bước 2: Đặt đạo hàm lớp trong xuống dưới mẫu số cùng với $u$.',
          'Bước 3: Ta được $f\'(x) = \\frac{1}{2x(x^2 + 4)}$.'
        ],
        finalAnswer: '$f\'(x) = \\frac{1}{2x(x^2 + 4)}$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! $u\' = 2x$ là phép NHÂN với $\\frac{1}{u}$ nên phải nằm ở TỬ SỐ chứ không phải mẫu số.'
      }
    ]
  },
  {
    id: 'der-06',
    topic: 'derivatives',
    topicName: 'Đạo hàm & Vi phân',
    difficulty: 'Trung bình',
    title: 'Bẫy điều kiện đủ của Cực trị ($f\'(x_0) = 0$ chưa chắc là cực trị!)',
    problem: 'Tìm số điểm cực trị của hàm số:\n$$y = x^3$$',
    hint: 'Đạo hàm bằng $0$ tại $x = 0$, nhưng đạo hàm $y\' = 3x^2$ có ĐỔI DẤU khi đi qua $x = 0$ hay không?',
    errorCategory: 'Ngộ nhận cứ đạo hàm bằng 0 là điểm cực trị mà không kiểm tra đổi dấu',
    keyTakeaway: 'f\'(x₀) = 0 chỉ là điều kiện CẦN! Muốn là cực trị thì f\'(x) BẮT BUỘC phải ĐỔI DẤU (từ + sang - hoặc ngược lại) khi qua x₀ (nghiệm bội lẻ)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Tính đạo hàm $y\' = 3x^2$. Giải phương trình $y\' = 0 \\Leftrightarrow 3x^2 = 0 \\Leftrightarrow x = 0$.',
          'Bước 2: Vì phương trình $y\' = 0$ có 1 nghiệm duy nhất là $x = 0$.',
          'Bước 3: Kết luận hàm số có 1 điểm cực trị tại $x = 0$.'
        ],
        finalAnswer: 'Có 1 điểm cực trị',
        isCorrect: false,
        wrongStep: 3,
        explanation: 'Sai ở Bước 3! $x = 0$ là nghiệm kép (bội chẵn) của $y\' = 3x^2 = 0$. Vì $3x^2 \\ge 0$ với mọi $x$, đạo hàm KHÔNG đổi dấu qua $0$ nên $x=0$ chỉ là điểm uốn, không phải cực trị!'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Tính đạo hàm $y\' = 3x^2$. Cho $y\' = 0 \\Leftrightarrow x = 0$.',
          'Bước 2: Xét dấu $y\' = 3x^2$: ta thấy $y\' > 0$ với mọi $x \\neq 0$ (cả bên trái và bên phải số $0$ đều mang dấu $+$).',
          'Bước 3: Vì $y\'$ không đổi dấu khi đi qua $x = 0$, hàm số luôn đồng biến trên $\\mathbb{R}$ và KHÔNG có điểm cực trị nào.'
        ],
        finalAnswer: '0 điểm cực trị (Không có cực trị)',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Điểm cực trị đòi hỏi đạo hàm phải đổi dấu khi đi qua điểm đó.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Tính $y\' = 3x^2$ và đạo hàm cấp hai $y\'\' = 6x$.',
          'Bước 2: Tại nghiệm $x = 0$, ta có $y\'\'(0) = 0$.',
          'Bước 3: Theo quy tắc đạo hàm cấp hai, khi $y\'\'(x_0) = 0$ thì hàm số đạt cực tiểu tại $x_0 = 0$.'
        ],
        finalAnswer: 'Đạt cực tiểu tại $x = 0$',
        isCorrect: false,
        wrongStep: 3,
        explanation: 'Sai ở Bước 3! Khi $y\'\'(x_0) = 0$, quy tắc đạo hàm cấp 2 chưa kết luận được (phải xét dấu $y\'$), và thực tế $x=0$ không phải cực trị.'
      }
    ]
  },
  {
    id: 'der-07',
    topic: 'derivatives',
    topicName: 'Đạo hàm & Vi phân',
    difficulty: 'Trung bình',
    title: 'Bẫy đạo hàm hàm ngược lượng giác $\\arctan u$',
    problem: 'Tính đạo hàm của hàm số:\n$$y = \\arctan(3x)$$',
    hint: 'Công thức $(\\arctan u)\' = \\frac{u\'}{1 + u^2}$. Chú ý dưới mẫu là $1 + (3x)^2 = 1 + 9x^2$!',
    errorCategory: 'Quên bình phương hệ số trong mẫu số 1 + u^2 của đạo hàm arctan(u)',
    keyTakeaway: 'Đạo hàm (arctan u)\' = u\' / (1 + u²). Nhớ đóng ngoặc bình phương toàn bộ u ở dưới mẫu!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Nhận dạng hàm hợp $y = \\arctan(u)$ với $u = 3x \\Rightarrow u\' = 3$.',
          'Bước 2: Áp dụng công thức $(\\arctan u)\' = \\frac{u\'}{1 + u^2} = \\frac{3}{1 + (3x)^2}$.',
          'Bước 3: Khai triển $(3x)^2 = 9x^2$, ta được $y\' = \\frac{3}{1 + 9x^2}$.'
        ],
        finalAnswer: '$y\' = \\frac{3}{1 + 9x^2}$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Cả tử số $u\' = 3$ và mẫu số $1 + (3x)^2 = 1 + 9x^2$ đều chuẩn xác.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Áp dụng công thức đạo hàm hàm hợp cho $\\arctan(3x)$ với $(3x)\' = 3$.',
          'Bước 2: Thay vào mẫu số dạng $1 + x^2$ kèm hệ số $3$: $y\' = \\frac{3}{1 + 3x^2}$.',
          'Bước 3: Kết luận $y\' = \\frac{3}{1 + 3x^2}$.'
        ],
        finalAnswer: '$y\' = \\frac{3}{1 + 3x^2}$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Dưới mẫu phải là $1 + u^2 = 1 + (3x)^2 = 1 + 9x^2$ chứ không phải $1 + 3x^2$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Nhớ công thức đạo hàm hàm lượng giác ngược có chứa căn ở mẫu.',
          'Bước 2: Ta viết $y\' = \\frac{(3x)\'}{\\sqrt{1 - (3x)^2}}$.',
          'Bước 3: Suy ra $y\' = \\frac{3}{\\sqrt{1 - 9x^2}}$.'
        ],
        finalAnswer: '$y\' = \\frac{3}{\\sqrt{1 - 9x^2}}$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai công thức ở Bước 2! $\\frac{u\'}{\\sqrt{1 - u^2}}$ là đạo hàm của hàm $\\arcsin(u)$, còn $\\arctan(u)$ có mẫu là $1 + u^2$ (không có căn).'
      }
    ]
  },
  {
    id: 'der-08',
    topic: 'derivatives',
    topicName: 'Đạo hàm & Vi phân',
    difficulty: 'Trung bình',
    title: 'Bẫy quên giai thừa trong Khai triển Maclaurin (Taylor tại 0)',
    problem: 'Viết khai triển Maclaurin của hàm số $f(x) = \\cos x$ đến cấp $4$ (tức là đến $x^4$).',
    hint: 'Trong công thức Taylor/Maclaurin, mẫu số của số hạng bậc $n$ là $n!$ (giai thừa: $2! = 2$, $4! = 24$), không phải số $n$!',
    errorCategory: 'Viết số n thay vì n! (n giai thừa) ở mẫu số trong khai triển Taylor/Maclaurin',
    keyTakeaway: 'Mẫu số của khai triển Taylor luôn là GIAI THỪA (n!): cos x = 1 - x²/2! + x⁴/4! - ... (với 4! = 24 chứ không phải 4)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Hàm $\\cos x$ là hàm chẵn nên khai triển Maclaurin chỉ chứa các số mũ chẵn đan dấu.',
          'Bước 2: Công thức tổng quát là $\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} + o(x^4)$.',
          'Bước 3: Vì $2! = 2$ và $4! = 1 \\cdot 2 \\cdot 3 \\cdot 4 = 24$, ta có $\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$.'
        ],
        finalAnswer: '$1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Bạn đã tính đúng $4! = 24$ ở mẫu số của $x^4$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Khai triển hàm $\\cos x$ gồm các lũy thừa chẵn đan dấu.',
          'Bước 2: Chia mỗi lũy thừa $x^n$ cho đúng số mũ $n$ của nó.',
          'Bước 3: Ta được $\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{4} + o(x^4)$.'
        ],
        finalAnswer: '$1 - \\frac{x^2}{2} + \\frac{x^4}{4} + o(x^4)$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Mẫu số trong công thức Taylor phải là $n!$ ($4! = 24$) chứ không phải chia cho $4$ (chia cho $n$ là khai triển của $\\ln(1+x)$).'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Áp dụng công thức khai triển Maclaurin với tất cả các dấu đều là dấu cộng.',
          'Bước 2: Thay $2! = 2$ và $4! = 24$.',
          'Bước 3: Ta có $\\cos x = 1 + \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$.'
        ],
        finalAnswer: '$1 + \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai dấu ở Bước 1! Vì $\\cos x \\le 1$ nên số hạng bậc 2 bắt buộc phải mang dấu trừ ($1 - \\frac{x^2}{2!} + \\frac{x^4}{4!}$).'
      }
    ]
  },
  {
    id: 'der-09',
    topic: 'derivatives',
    topicName: 'Đạo hàm & Vi phân',
    difficulty: 'Dễ',
    title: 'Bẫy phương trình tiếp tuyến của đồ thị hàm số',
    problem: 'Viết phương trình tiếp tuyến của đồ thị hàm số $y = x^2 + 1$ tại điểm có hoành độ $x_0 = 2$.',
    hint: 'Hệ số góc tiếp tuyến là một CON SỐ cố định $k = f\'(x_0)$, không phải là biểu thức chứa biến $x$ là $f\'(x)$!',
    errorCategory: 'Thay cả biểu thức f\'(x) thay vì giá trị số f\'(x_0) vào phương trình tiếp tuyến',
    keyTakeaway: 'Phương trình tiếp tuyến là đường thẳng bậc nhất: y = f\'(x₀)·(x - x₀) + y₀. Nhớ thay số x₀ vào f\'(x₀) để ra một con số cố định!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Tính tung độ tiếp điểm: $y_0 = f(2) = 2^2 + 1 = 5$. Tính đạo hàm $f\'(x) = 2x$.',
          'Bước 2: Hệ số góc của tiếp tuyến tại $x_0 = 2$ là $k = f\'(2) = 2(2) = 4$.',
          'Bước 3: Phương trình tiếp tuyến là $y = k(x - x_0) + y_0 = 4(x - 2) + 5 \\Leftrightarrow y = 4x - 3$.'
        ],
        finalAnswer: '$y = 4x - 3$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Tiếp tuyến là đường thẳng bậc nhất có hệ số góc $k = f\'(2) = 4$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Ta có $y_0 = f(2) = 5$ và đạo hàm $f\'(x) = 2x$.',
          'Bước 2: Lập phương trình tiếp tuyến bằng cách nhân trực tiếp $f\'(x)$ với $(x - 2)$: $y = 2x(x - 2) + 5$.',
          'Bước 3: Khai triển ra được phương trình tiếp tuyến là $y = 2x^2 - 4x + 5$.'
        ],
        finalAnswer: '$y = 2x^2 - 4x + 5$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Hệ số góc phải là giá trị số $f\'(2) = 4$, nếu để nguyên $2x$ thì nhân vào sẽ thành parabol bậc 2 chứ không phải đường thẳng tiếp tuyến!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Tính $y_0 = 5$ và hệ số góc $k = f\'(2) = 4$.',
          'Bước 2: Áp dụng công thức tiếp tuyến $y = k(x + x_0) - y_0 = 4(x + 2) - 5$.',
          'Bước 3: Thu gọn được $y = 4x + 3$.'
        ],
        finalAnswer: '$y = 4x + 3$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai công thức ở Bước 2! Công thức đúng là $y = k(x - x_0) + y_0$ chứ không phải $k(x + x_0) - y_0$.'
      }
    ]
  },
  {
    id: 'der-10',
    topic: 'derivatives',
    topicName: 'Đạo hàm & Vi phân',
    difficulty: 'Khó',
    title: 'Bẫy đạo hàm của hàm ẩn',
    problem: 'Cho hàm ẩn $y = y(x)$ xác định bởi phương trình đường tròn $x^2 + y^2 = 25$. Tính đạo hàm $y\'(x)$ (với $y \\neq 0$).',
    hint: 'Khi đạo hàm hai vế theo biến $x$, nhớ rằng $y$ là một hàm theo $x$ nên đạo hàm của $y^2$ theo $x$ là $2y \\cdot y\'$ (quy tắc hàm hợp), và đạo hàm của hằng số $25$ bằng $0$!',
    errorCategory: 'Quên nhân y\' khi đạo hàm y^2 theo x hoặc quên đạo hàm hằng số vế phải bằng 0',
    keyTakeaway: 'Khi đạo hàm hàm ẩn theo x: đạo hàm của y² là 2y·y\', và đạo hàm của hằng số bên vế phải LUÔN BẰNG 0!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Lấy đạo hàm hai vế của phương trình $x^2 + y^2 = 25$ theo biến $x$.',
          'Bước 2: Vế trái: $(x^2)\' + (y^2)\' = 2x + 2y \\cdot y\'$. Vế phải: $(25)\' = 0$. Ta có $2x + 2y y\' = 0$.',
          'Bước 3: Chuyển vế và chia cho $2y \\neq 0$, ta tìm được $y\' = -\\frac{x}{y}$.'
        ],
        finalAnswer: '$y\' = -\\frac{x}{y}$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Cả quy tắc hàm hợp $(y^2)\'_x = 2y y\'$ lẫn đạo hàm hằng số $(25)\' = 0$ đều được thực hiện hoàn hảo.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Đạo hàm vế trái theo $x$ được $2x + 2y y\'$.',
          'Bước 2: Giữ nguyên số $25$ ở vế phải, ta có phương trình $2x + 2y y\' = 25$.',
          'Bước 3: Giải ra được $y\' = \\frac{25 - 2x}{2y}$.'
        ],
        finalAnswer: '$y\' = \\frac{25 - 2x}{2y}$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Khi lấy đạo hàm hai vế, đạo hàm của hằng số $25$ phải bằng $0$, rất nhiều bạn hay quên mà chép lại nguyên số $25$!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Chuyển vế $y^2 = 25 - x^2$, suy ra $y = 5 - x$ (khai căn từng số hạng).',
          'Bước 2: Lấy đạo hàm hai vế theo $x$.',
          'Bước 3: Kết luận $y\' = -1$.'
        ],
        finalAnswer: '$y\' = -1$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai căn bản đại số ở Bước 1! $\\sqrt{25 - x^2}$ TUYỆT ĐỐI không bằng $5 - x$!'
      }
    ]
  }
];

window.BUILTIN_QUESTIONS.push(
  // ==================== CHƯƠNG 3: NGUYÊN HÀM & TÍCH PHÂN (10 CÂU) ====================
  {
    id: 'int-01',
    topic: 'integrals',
    topicName: 'Nguyên hàm & Tích phân',
    difficulty: 'Dễ',
    title: 'Bẫy quên đổi cận khi đổi biến tích phân',
    problem: 'Tính tích phân xác định:\n$$I = \\int_0^1 2x (x^2 + 1)^3 \\, dx$$',
    hint: 'Khi đặt $u = x^2 + 1$ trong tích phân xác định (có cận), câu thần chú là: "Đổi biến thì PHẢI đổi cận!"',
    errorCategory: 'Quên đổi cận khi đổi biến tích phân xác định',
    keyTakeaway: 'Trong tích phân xác định, hễ đặt biến mới u(x) là phải lập tức thay cận cũ của x vào để tìm cận mới của u!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Đặt $u = x^2 + 1 \\Rightarrow du = 2x \\, dx$.',
          'Bước 2: Thay vào tích phân và giữ nguyên cận từ $0$ đến $1$: $I = \\int_0^1 u^3 \\, du$.',
          'Bước 3: Tính nguyên hàm: $I = \\left. \\frac{u^4}{4} \\right|_0^1 = \\frac{1^4}{4} - \\frac{0^4}{4} = \\frac{1}{4}$.'
        ],
        finalAnswer: '$I = \\frac{1}{4}$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Cận $0$ và $1$ là giá trị của biến $x$, không phải của biến $u$. Khi chuyển sang $du$, cận phải đổi thành $u(0)=1$ và $u(1)=2$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Đặt $u = x^2 + 1 \\Rightarrow du = 2x \\, dx$.',
          'Bước 2: Đổi cận: Với $x = 0 \\Rightarrow u = 1$; với $x = 1 \\Rightarrow u = 2$. Khi đó $I = \\int_1^2 u^3 \\, du$.',
          'Bước 3: Tính giá trị: $I = \\left. \\frac{u^4}{4} \\right|_1^2 = \\frac{2^4}{4} - \\frac{1^4}{4} = \\frac{15}{4}$.'
        ],
        finalAnswer: '$I = \\frac{15}{4}$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Bạn đã thực hiện đầy đủ bước đổi biến kèm đổi cận từ $[0, 1]$ sang $[1, 2]$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Đặt $u = x^2 + 1 \\Rightarrow du = 2x \\, dx$. Đổi cận: $x=0 \\Rightarrow u=1$, $x=1 \\Rightarrow u=2$.',
          'Bước 2: Khi đó $I = \\int_1^2 u^3 \\, du = \\left. 3u^2 \\right|_1^2$.',
          'Bước 3: Thay cận vào ta được $I = 3(2^2) - 3(1^2) = 9$.'
        ],
        finalAnswer: '$I = 9$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Bạn đã nhầm công thức nguyên hàm sang công thức đạo hàm. Nguyên hàm của $u^3$ phải là $\\frac{u^4}{4}$.'
      }
    ]
  },
  {
    id: 'int-02',
    topic: 'integrals',
    topicName: 'Nguyên hàm & Tích phân',
    difficulty: 'Trung bình',
    title: 'Bẫy dấu và hệ số trong Tích phân từng phần',
    problem: 'Tìm nguyên hàm:\n$$I = \\int x e^{2x} \\, dx$$',
    hint: 'Công thức tích phân từng phần là $\\int u \\, dv = u v - \\int v \\, du$. Chú ý khi lấy nguyên hàm của $dv = e^{2x}dx$ thì phải chia cho hệ số $2$!',
    errorCategory: 'Nhầm hệ số 1/a khi lấy nguyên hàm e^(ax) hoặc nhầm dấu tích phân từng phần',
    keyTakeaway: 'Đạo hàm của e^(ax) thì NHÂN a, còn nguyên hàm của e^(ax) thì phải CHIA cho a: ∫e^(ax)dx = (1/a)e^(ax)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Đặt $u = x \\Rightarrow du = dx$; và $dv = e^{2x} dx \\Rightarrow v = \\frac{1}{2} e^{2x}$.',
          'Bước 2: Áp dụng công thức $\\int u \\, dv = uv - \\int v \\, du$: $I = \\frac{1}{2} x e^{2x} - \\int \\frac{1}{2} e^{2x} \\, dx$.',
          'Bước 3: Tính tiếp nguyên hàm còn lại: $I = \\frac{1}{2} x e^{2x} - \\frac{1}{4} e^{2x} + C$.'
        ],
        finalAnswer: '$I = \\frac{1}{2} x e^{2x} - \\frac{1}{4} e^{2x} + C$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Cả hai lần lấy nguyên hàm của $e^{2x}$ đều được chia cho hệ số $2$ rất cẩn thận.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Đặt $u = x \\Rightarrow du = dx$; và $dv = e^{2x} dx \\Rightarrow v = 2 e^{2x}$.',
          'Bước 2: Áp dụng công thức từng phần: $I = 2x e^{2x} - \\int 2 e^{2x} \\, dx$.',
          'Bước 3: Tính nguyên hàm còn lại được $I = 2x e^{2x} - 4 e^{2x} + C$.'
        ],
        finalAnswer: '$I = 2x e^{2x} - 4 e^{2x} + C$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Từ $dv = e^{2x}dx$ tìm $v$ là lấy NGUYÊN HÀM nên phải chia cho 2 ($v = \\frac{1}{2}e^{2x}$).'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Đặt $u = x \\Rightarrow du = dx$; và $dv = e^{2x} dx \\Rightarrow v = \\frac{1}{2} e^{2x}$.',
          'Bước 2: Áp dụng công thức tích phân từng phần: $I = uv + \\int v \\, du = \\frac{1}{2} x e^{2x} + \\int \\frac{1}{2} e^{2x} \\, dx$.',
          'Bước 3: Thu được kết quả $I = \\frac{1}{2} x e^{2x} + \\frac{1}{4} e^{2x} + C$.'
        ],
        finalAnswer: '$I = \\frac{1}{2} x e^{2x} + \\frac{1}{4} e^{2x} + C$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai dấu ở Bước 2! Công thức tích phân từng phần là $uv - \\int v \\, du$ (dấu TRỪ), không phải dấu cộng.'
      }
    ]
  },
  {
    id: 'int-03',
    topic: 'integrals',
    topicName: 'Nguyên hàm & Tích phân',
    difficulty: 'Dễ',
    title: 'Bẫy áp dụng công thức $x^n$ cho trường hợp $n = -1$',
    problem: 'Tìm họ nguyên hàm:\n$$I = \\int \\frac{1}{x} \\, dx \\quad (x \\neq 0)$$',
    hint: 'Công thức $\\int x^n dx = \\frac{x^{n+1}}{n+1}$ KHÔNG áp dụng được khi $n = -1$ vì mẫu số $n + 1 = 0$!',
    errorCategory: 'Dùng nhầm công thức x^(n+1)/(n+1) cho 1/x hoặc quên trị tuyệt đối trong ln|x|',
    keyTakeaway: 'Nguyên hàm của 1/x là ln|x| + C (nhớ có dấu giá trị tuyệt đối |x| vì x có thể âm)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Nhận dạng $\\frac{1}{x}$ là đạo hàm của hàm $\\ln|x|$ trên từng khoảng xác định $x > 0$ và $x < 0$.',
          'Bước 2: Vì đề bài cho $x \\neq 0$ (có thể âm hoặc dương) nên phải có dấu giá trị tuyệt đối.',
          'Bước 3: Kết luận $I = \\ln|x| + C$.'
        ],
        finalAnswer: '$I = \\ln|x| + C$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! $\\int \\frac{1}{x} dx = \\ln|x| + C$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Viết $\\frac{1}{x} = x^{-1}$.',
          'Bước 2: Áp dụng công thức đạo hàm $(x^{-1})\' = -x^{-2} = -\\frac{1}{x^2}$.',
          'Bước 3: Kết luận $I = -\\frac{1}{x^2} + C$.'
        ],
        finalAnswer: '$I = -\\frac{1}{x^2} + C$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! $-\\frac{1}{x^2}$ là ĐẠO HÀM của $\\frac{1}{x}$, còn đề bài yêu cầu tìm NGUYÊN HÀM!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Biến đổi $\\frac{1}{x} = x^{-1}$.',
          'Bước 2: Áp dụng công thức $\\int x^n dx$: tăng số mũ lên 1 thành $x^0 = 1$.',
          'Bước 3: Suy ra $I = x^0 + C = 1 + C$.'
        ],
        finalAnswer: '$I = 1 + C$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Công thức $\\frac{x^{n+1}}{n+1}$ chỉ đúng khi $n \\neq -1$ (vì $n = -1$ làm mẫu số $n+1 = 0$).'
      }
    ]
  },
  {
    id: 'int-04',
    topic: 'integrals',
    topicName: 'Nguyên hàm & Tích phân',
    difficulty: 'Dễ',
    title: 'Bẫy dấu khi lấy nguyên hàm $\\sin x$ và $\\cos x$',
    problem: 'Tính tích phân:\n$$I = \\int_0^{\\pi/2} \\sin x \\, dx$$',
    hint: 'Đạo hàm của $\\sin x$ là $+\\cos x$, nhưng NGUYÊN HÀM của $\\sin x$ phải là $-\\cos x$ (vì $(-\\cos x)\' = \\sin x$)!',
    errorCategory: 'Nhầm dấu giữa đạo hàm và nguyên hàm của hàm lượng giác sin x, cos x',
    keyTakeaway: 'Đạo hàm của sin là +cos, nhưng NGUYÊN HÀM của sin là -cos! (Muốn kiểm tra, hãy đạo hàm ngược lại kết quả).',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Nguyên hàm của $\\sin x$ là $-\\cos x$ (do $(-\\cos x)\' = \\sin x$).',
          'Bước 2: Áp dụng công thức Newton-Leibniz: $I = \\left. (-\\cos x) \\right|_0^{\\pi/2} = (-\\cos \\frac{\\pi}{2}) - (-\\cos 0)$.',
          'Bước 3: Thay $\\cos \\frac{\\pi}{2} = 0$ và $\\cos 0 = 1$, ta được $I = 0 - (-1) = 1$.'
        ],
        finalAnswer: '$I = 1$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Trên đoạn $[0, \\pi/2]$, $\\sin x \\ge 0$ nên tích phân chắc chắn phải ra số dương $+1$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Nguyên hàm của $\\sin x$ là $\\cos x$.',
          'Bước 2: Thay cận từ $0$ đến $\\frac{\\pi}{2}$: $I = \\left. \\cos x \\right|_0^{\\pi/2} = \\cos \\frac{\\pi}{2} - \\cos 0$.',
          'Bước 3: Ta tính được $I = 0 - 1 = -1$.'
        ],
        finalAnswer: '$I = -1$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai dấu ở Bước 1! Nguyên hàm của $\\sin x$ là $-\\cos x$ chứ không phải $+\\cos x$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Nguyên hàm của $\\sin x$ là $-\\cos x$.',
          'Bước 2: Thay cận trên và cận dưới: $\\cos \\frac{\\pi}{2} = 0$ và $\\cos 0 = 0$.',
          'Bước 3: Suy ra $I = 0 - 0 = 0$.'
        ],
        finalAnswer: '$I = 0$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai giá trị lượng giác ở Bước 2! $\\cos 0 = 1$ chứ không phải $0$ ($\\sin 0$ mới bằng $0$).'
      }
    ]
  },
  {
    id: 'int-05',
    topic: 'integrals',
    topicName: 'Nguyên hàm & Tích phân',
    difficulty: 'Trung bình',
    title: 'Bẫy chọn sai $u$ và $dv$ khi tính $\\int \\ln x \\, dx$',
    problem: 'Tìm nguyên hàm:\n$$I = \\int \\ln x \\, dx$$',
    hint: 'Quy tắc chọn $u$ trong tích phân từng phần là "Nhất Lô - Nhì Đa - Tam Lượng - Tứ Mũ": gặp hàm Logarit ($\\ln x$) thì BẮT BUỘC đặt $u = \\ln x$ và $dv = dx$!',
    errorCategory: 'Quên quy tắc Nhất Lô Nhì Đa hoặc ngộ nhận nguyên hàm của ln x là 1/x',
    keyTakeaway: 'Nguyên hàm của ln(x) KHÔNG PHẢI 1/x! Hãy dùng tích phân từng phần (u = ln x, dv = dx) hoặc nhớ luôn kết quả: ∫ln(x)dx = x·ln(x) - x + C.',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Áp dụng tích phân từng phần: đặt $u = \\ln x \\Rightarrow du = \\frac{1}{x} dx$, và $dv = dx \\Rightarrow v = x$.',
          'Bước 2: Theo công thức $uv - \\int v \\, du$: $I = x \\ln x - \\int x \\cdot \\frac{1}{x} \\, dx = x \\ln x - \\int 1 \\, dx$.',
          'Bước 3: Tính nguyên hàm còn lại ta được $I = x \\ln x - x + C$.'
        ],
        finalAnswer: '$I = x \\ln x - x + C$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Hoàn hảo! Đặt $u = \\ln x$ giúp $du = \\frac{1}{x}dx$ triệt tiêu gọn đẹp với $v = x$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Nhớ công thức cơ bản liên quan đến hàm $\\ln x$ và $\\frac{1}{x}$.',
          'Bước 2: Áp dụng trực tiếp nguyên hàm của $\\ln x$ là $\\frac{1}{x}$.',
          'Bước 3: Kết luận $I = \\frac{1}{x} + C$.'
        ],
        finalAnswer: '$I = \\frac{1}{x} + C$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! $\\frac{1}{x}$ là ĐẠO HÀM của $\\ln x$, không phải nguyên hàm của $\\ln x$!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Đặt $u = \\ln x \\Rightarrow du = \\frac{1}{x}dx$, $dv = dx \\Rightarrow v = x$.',
          'Bước 2: Khi đó $I = x \\ln x - \\int x \\cdot \\frac{1}{x} dx = x \\ln x - \\int 0 \\, dx$.',
          'Bước 3: Suy ra $I = x \\ln x + C$.'
        ],
        finalAnswer: '$I = x \\ln x + C$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! $x \\cdot \\frac{1}{x}$ rút gọn bằng $1$ chứ không phải bằng $0$, nên còn phải trừ đi $\\int 1 \\, dx = x$.'
      }
    ]
  },
  {
    id: 'int-06',
    topic: 'integrals',
    topicName: 'Nguyên hàm & Tích phân',
    difficulty: 'Trung bình',
    title: 'Bẫy thiếu hệ số vi phân khi đổi biến số',
    problem: 'Tìm nguyên hàm:\n$$I = \\int x e^{x^2} \\, dx$$',
    hint: 'Khi đặt $u = x^2$, ta có $du = 2x \\, dx \\Rightarrow x \\, dx = \\frac{1}{2} du$. Đừng quên hệ số $\\frac{1}{2}$!',
    errorCategory: 'Quên chia hệ số vi phân khi đổi biến u = x^2 (du = 2x dx)',
    keyTakeaway: 'Khi đặt u = x² thì du = 2x·dx, nghĩa là x·dx = (1/2)du. Luôn kiểm tra hệ số cân bằng trước khi thay du!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Đặt $u = x^2 \\Rightarrow du = 2x \\, dx \\Rightarrow x \\, dx = \\frac{1}{2} du$.',
          'Bước 2: Thay vào nguyên hàm: $I = \\int e^u \\cdot \\frac{1}{2} du = \\frac{1}{2} e^u + C$.',
          'Bước 3: Trả lại biến $x$: $I = \\frac{1}{2} e^{x^2} + C$.'
        ],
        finalAnswer: '$I = \\frac{1}{2} e^{x^2} + C$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Khi đạo hàm lại $\\left(\\frac{1}{2}e^{x^2}\\right)\' = \\frac{1}{2} \\cdot 2x e^{x^2} = x e^{x^2}$ khớp hoàn toàn với đề bài.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Đặt $u = x^2 \\Rightarrow du = x \\, dx$.',
          'Bước 2: Thay vào tích phân ta được $I = \\int e^u \\, du = e^u + C$.',
          'Bước 3: Trả lại biến $x$: $I = e^{x^2} + C$.'
        ],
        finalAnswer: '$I = e^{x^2} + C$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Vi phân của $u = x^2$ phải là $du = 2x \\, dx$ chứ không phải $x \\, dx$ (thiếu hệ số $\\frac{1}{2}$).'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Coi $e^{x^2}$ có nguyên hàm là $\\frac{e^{x^2}}{2x}$, còn $x$ có nguyên hàm là $\\frac{x^2}{2}$.',
          'Bước 2: Nhân hai nguyên hàm lại với nhau.',
          'Bước 3: Thu được $I = \\frac{x^2}{2} \\cdot \\frac{e^{x^2}}{2x} + C = \\frac{x}{4} e^{x^2} + C$.'
        ],
        finalAnswer: '$I = \\frac{x}{4} e^{x^2} + C$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai nặng ở Bước 1 và 2! Nguyên hàm của một tích KHÔNG BAO GIỜ bằng tích các nguyên hàm.'
      }
    ]
  },
  {
    id: 'int-07',
    topic: 'integrals',
    topicName: 'Nguyên hàm & Tích phân',
    difficulty: 'Trung bình',
    title: 'Bẫy quên trị tuyệt đối khi tính diện tích hình phẳng',
    problem: 'Tính diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = \\sin x$, trục hoành $Ox$ ($y = 0$) và hai đường thẳng $x = 0, x = 2\\pi$.',
    hint: 'Tích phân $\\int_0^{2\\pi} \\sin x \\, dx = 0$ vì phần dương bù trừ phần âm, nhưng DIỆN TÍCH thì luôn là $\\int_0^{2\\pi} |\\sin x| \\, dx > 0$!',
    errorCategory: 'Quên dấu giá trị tuyệt đối |f(x)| khi tính diện tích hình phẳng làm phần âm triệt tiêu phần dương',
    keyTakeaway: 'Diện tích KHÔNG BAO GIỜ bằng 0 hay âm! Công thức diện tích luôn có trị tuyệt đối: S = ∫|f(x)|dx (phải tách tại nghiệm để đổi dấu phần âm thành dương)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Áp dụng công thức diện tích hình phẳng $S = \\int_0^{2\\pi} \\sin x \\, dx$.',
          'Bước 2: Tính nguyên hàm: $S = \\left. (-\\cos x) \\right|_0^{2\\pi} = -\\cos(2\\pi) - (-\\cos 0)$.',
          'Bước 3: Vì $\\cos(2\\pi) = 1$ và $\\cos 0 = 1$, suy ra $S = -1 + 1 = 0$.'
        ],
        finalAnswer: '$S = 0$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Công thức diện tích phải có trị tuyệt đối $S = \\int_0^{2\\pi} |\\sin x| \\, dx$. Nếu không có trị tuyệt đối, phần phía dưới trục $Ox$ sẽ trừ mất phần phía trên!'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Diện tích được tính bởi $S = \\int_0^{2\\pi} |\\sin x| \\, dx$. Trên $[0, \\pi]$ thì $\\sin x \\ge 0$; trên $[\\pi, 2\\pi]$ thì $\\sin x \\le 0$.',
          'Bước 2: Tách tích phân: $S = \\int_0^\\pi \\sin x \\, dx - \\int_\\pi^{2\\pi} \\sin x \\, dx$.',
          'Bước 3: Tính từng phần: $\\left.(-\\cos x)\\right|_0^\\pi - \\left.(-\\cos x)\\right|_\\pi^{2\\pi} = (1 - (-1)) - (-1 - 1) = 2 + 2 = 4$.'
        ],
        finalAnswer: '$S = 4$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Mỗi nửa chu kỳ của $\\sin x$ có diện tích bằng $2$, nên hai nửa từ $0$ đến $2\\pi$ có tổng diện tích là $2 + 2 = 4$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Viết $S = \\left| \\int_0^{2\\pi} \\sin x \\, dx \\right|$ (đặt trị tuyệt đối ra bên ngoài dấu tích phân).',
          'Bước 2: Tính tích phân bên trong bằng $0$.',
          'Bước 3: Lấy trị tuyệt đối $|0| = 0$.'
        ],
        finalAnswer: '$S = 0$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Dấu giá trị tuyệt đối phải nằm BÊN TRONG tích phân ($\\int |\\sin x| dx$) chứ không phải đặt ở bên ngoài!'
      }
    ]
  },
  {
    id: 'int-08',
    topic: 'integrals',
    topicName: 'Nguyên hàm & Tích phân',
    difficulty: 'Trung bình',
    title: 'Bẫy công thức nguyên hàm hạ bậc $\\cos^2 x$',
    problem: 'Tính tích phân:\n$$I = \\int_0^{\\pi/2} \\cos^2 x \\, dx$$',
    hint: 'Khi gặp $\\cos^2 x$ hay $\\sin^2 x$ trong tích phân, BẮT BUỘC phải hạ bậc: $\\cos^2 x = \\frac{1 + \\cos 2x}{2}$!',
    errorCategory: 'Tăng bậc trực tiếp cos^2(x) thành cos^3(x)/3 hoặc nhầm dấu công thức hạ bậc',
    keyTakeaway: 'Gặp ∫cos²x dx hoặc ∫sin²x dx là phải HẠ BẬC ngay: cos²x = (1 + cos 2x)/2, sin²x = (1 - cos 2x)/2!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Áp dụng công thức lũy thừa $\\int u^2 du = \\frac{u^3}{3}$ cho $u = \\cos x$.',
          'Bước 2: Ta có $I = \\left. \\frac{\\cos^3 x}{3} \\right|_0^{\\pi/2}$.',
          'Bước 3: Thay cận vào được $I = 0 - \\frac{1}{3} = -\\frac{1}{3}$.'
        ],
        finalAnswer: '$I = -\\frac{1}{3}$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Trong tích phân không có $\\sin x \\, dx$ đi kèm nên không thể coi $\\cos x$ như biến độc lập $u$. Hơn nữa $\\cos^2 x \\ge 0$ không thể có tích phân âm!'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Dùng công thức hạ bậc: $\\cos^2 x = \\frac{1 + \\cos 2x}{2}$.',
          'Bước 2: Khi đó $I = \\int_0^{\\pi/2} \\frac{1}{2}(1 + \\cos 2x) \\, dx = \\frac{1}{2} \\left. \\left(x + \\frac{\\sin 2x}{2}\\right) \\right|_0^{\\pi/2}$.',
          'Bước 3: Thay cận $x = \\frac{\\pi}{2}$ (với $\\sin \\pi = 0$) và $x = 0$, ta được $I = \\frac{1}{2}\\left(\\frac{\\pi}{2} + 0 - 0\\right) = \\frac{\\pi}{4}$.'
        ],
        finalAnswer: '$I = \\frac{\\pi}{4}$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Hạ bậc $\\cos^2 x = \\frac{1 + \\cos 2x}{2}$ là con đường chuẩn nhất.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Hạ bậc $\\cos^2 x = 1 + \\cos 2x$ (quên chia $2$).',
          'Bước 2: Lấy nguyên hàm $I = \\left. \\left(x + \\frac{\\sin 2x}{2}\\right) \\right|_0^{\\pi/2}$.',
          'Bước 3: Thay cận thu được $I = \\frac{\\pi}{2}$.'
        ],
        finalAnswer: '$I = \\frac{\\pi}{2}$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai công thức ở Bước 1! Công thức hạ bậc phải chia cho 2: $\\cos^2 x = \\frac{1 + \\cos 2x}{2}$.'
      }
    ]
  },
  {
    id: 'int-09',
    topic: 'integrals',
    topicName: 'Nguyên hàm & Tích phân',
    difficulty: 'Trung bình',
    title: 'Bẫy nguyên hàm $\\frac{1}{x^2 + a^2}$ ra $\\arctan$',
    problem: 'Tính tích phân:\n$$I = \\int_0^2 \\frac{1}{x^2 + 4} \\, dx$$',
    hint: 'Công thức chuẩn: $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a} \\arctan\\left(\\frac{x}{a}\\right) + C$. Ở đây $a^2 = 4 \\Rightarrow a = 2$, đừng quên nhân $\\frac{1}{a} = \\frac{1}{2}$ ở đằng trước!',
    errorCategory: 'Quên hệ số 1/a đằng trước arctan(x/a) trong nguyên hàm 1/(x^2 + a^2)',
    keyTakeaway: 'Công thức: ∫dx/(x² + a²) = (1/a)·arctan(x/a) + C. Rất nhiều người nhớ x/a bên trong nhưng lại quên 1/a ở bên ngoài!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Nhận dạng mẫu số $x^2 + 4 = x^2 + 2^2$ (với $a = 2$).',
          'Bước 2: Áp dụng công thức $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a} \\arctan\\left(\\frac{x}{a}\\right)$: $I = \\left. \\frac{1}{2} \\arctan\\left(\\frac{x}{2}\\right) \\right|_0^2$.',
          'Bước 3: Thay cận: $I = \\frac{1}{2}(\\arctan 1 - \\arctan 0) = \\frac{1}{2}\\left(\\frac{\\pi}{4} - 0\\right) = \\frac{\\pi}{8}$.'
        ],
        finalAnswer: '$I = \\frac{\\pi}{8}$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Cả hệ số $\\frac{1}{2}$ bên ngoài và $\\frac{x}{2}$ bên trong $\\arctan$ đều đầy đủ.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Ta có $x^2 + 4 = x^2 + 2^2$ nên áp dụng nguyên hàm $\\arctan$.',
          'Bước 2: Viết $I = \\left. \\arctan\\left(\\frac{x}{2}\\right) \\right|_0^2$ (quên hệ số $\\frac{1}{2}$ phía trước).',
          'Bước 3: Thay cận vào được $I = \\arctan 1 - \\arctan 0 = \\frac{\\pi}{4}$.'
        ],
        finalAnswer: '$I = \\frac{\\pi}{4}$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Bạn đã quên hệ số $\\frac{1}{a} = \\frac{1}{2}$ đứng trước $\\arctan\\left(\\frac{x}{2}\\right)$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Coi mẫu số là hàm $u = x^2 + 4$, áp dụng công thức $\\ln|u|$.',
          'Bước 2: Viết $I = \\left. \\ln(x^2 + 4) \\right|_0^2$.',
          'Bước 3: Thay cận được $I = \\ln 8 - \\ln 4 = \\ln 2$.'
        ],
        finalAnswer: '$I = \\ln 2$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Muốn ra $\\ln(x^2+4)$ thì trên tử phải có đạo hàm của mẫu là $2x$. Khi tử số là hằng số $1$, nguyên hàm của $\\frac{1}{x^2+a^2}$ là hàm $\\arctan$!'
      }
    ]
  },
  {
    id: 'int-10',
    topic: 'integrals',
    topicName: 'Nguyên hàm & Tích phân',
    difficulty: 'Khó',
    title: 'Bẫy tích phân suy rộng loại 1 ($\\int_1^{+\\infty} \\frac{dx}{x^p}$)',
    problem: 'Tính tích phân suy rộng:\n$$I = \\int_1^{+\\infty} \\frac{1}{x^2} \\, dx$$',
    hint: 'Nguyên hàm của $\\frac{1}{x^2} = x^{-2}$ là $-\\frac{1}{x}$. Khi cận trên tiến ra $+\\infty$, $-\\frac{1}{x}$ tiến về $0$!',
    errorCategory: 'Nhầm sự hội tụ của tích phân suy rộng ∫(1/x^p)dx trên [1, +∞)',
    keyTakeaway: 'Tích phân suy rộng ∫(từ 1 đến +∞) của dx/x^p HỘI TỤ khi p > 1 (giá trị = 1/(p-1)) và PHÂN KỲ khi p ≤ 1!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Theo định nghĩa tích phân suy rộng: $I = \\lim_{b \\to +\\infty} \\int_1^b x^{-2} \\, dx$.',
          'Bước 2: Nguyên hàm của $x^{-2}$ là $-x^{-1} = -\\frac{1}{x}$. Ta có $I = \\lim_{b \\to +\\infty} \\left. \\left(-\\frac{1}{x}\\right) \\right|_1^b = \\lim_{b \\to +\\infty} \\left(-\\frac{1}{b} - (-1)\\right)$.',
          'Bước 3: Khi $b \\to +\\infty$ thì $\\frac{1}{b} \\to 0$, suy ra $I = 0 + 1 = 1$ (tích phân hội tụ).'
        ],
        finalAnswer: '$I = 1$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Với $p = 2 > 1$, tích phân suy rộng hội tụ và có giá trị bằng $\\frac{1}{p-1} = 1$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Nguyên hàm của $\\frac{1}{x^2}$ là $\\ln(x^2)$.',
          'Bước 2: Thay cận từ $1$ đến $+\\infty$: $I = \\lim_{b \\to +\\infty} (\\ln b^2 - \\ln 1)$.',
          'Bước 3: Vì $\\ln b^2 \\to +\\infty$ nên tích phân phân kỳ ($I = +\\infty$).'
        ],
        finalAnswer: 'Phân kỳ ($+\\infty$)',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Nguyên hàm của $\\frac{1}{x^2} = x^{-2}$ là $-\\frac{1}{x}$ chứ không phải $\\ln(x^2)$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Nguyên hàm của $x^{-2}$ là $-\\frac{1}{x}$.',
          'Bước 2: Thay cận trên và cận dưới (lấy cận dưới trừ cận trên): $I = -\\frac{1}{1} - \\lim_{b \\to +\\infty}\\left(-\\frac{1}{b}\\right)$.',
          'Bước 3: Kết quả thu được $I = -1$.'
        ],
        finalAnswer: '$I = -1$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai thứ tự thay cận ở Bước 2! Công thức Newton-Leibniz luôn là $F(\\text{cận trên}) - F(\\text{cận dưới})$, không được lấy cận dưới trừ cận trên.'
      }
    ]
  },

  // ==================== CHƯƠNG 4: CHUỖI & HÀM NHIỀU BIẾN (10 CÂU) ====================
  {
    id: 'mul-01',
    topic: 'multivariable_series',
    topicName: 'Chuỗi & Hàm nhiều biến',
    difficulty: 'Dễ',
    title: 'Bẫy đạo hàm riêng của hàm 2 biến',
    problem: 'Cho hàm hai biến $f(x, y) = x^2 y^3 + 5y^2 + 2x$. Tính đạo hàm riêng theo biến $x$ là $f\'_x(x, y)$ (hay $\\frac{\\partial f}{\\partial x}$).',
    hint: 'Khi tính đạo hàm riêng theo biến $x$, hãy coi chữ $y$ y hệt như một con số hằng số (ví dụ số $3$ hay số $5$)!',
    errorCategory: 'Quên coi biến còn lại là hằng số khi tính đạo hàm riêng',
    keyTakeaway: 'Đạo hàm riêng theo x nghĩa là: Chỉ có x là biến, mọi chữ y đứng riêng một mình đều là hằng số (đạo hàm bằng 0), còn y nhân với x thì giữ nguyên như hệ số!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Khi tính $\\frac{\\partial f}{\\partial x}$, ta xem $y$ là hằng số.',
          'Bước 2: Đạo hàm từng hạng tử theo $x$: $(x^2 y^3)\'_x = 2x \\cdot y^3$; hạng tử $(5y^2)\'_x = 0$ (vì không chứa $x$); hạng tử $(2x)\'_x = 2$.',
          'Bước 3: Cộng lại ta được $f\'_x(x, y) = 2x y^3 + 2$.'
        ],
        finalAnswer: '$f\'_x(x, y) = 2x y^3 + 2$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Hoàn toàn chính xác! Vì $y$ được giữ cố định như hằng số nên $y^3$ là hệ số đi kèm $x^2$, còn $5y^2$ là hằng số thuần túy nên đạo hàm theo $x$ bằng $0$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Coi $y$ là hằng số khi đạo hàm theo biến $x$.',
          'Bước 2: Với hạng tử đầu $x^2 y^3$, đạo hàm theo $x$ được $2x y^3$. Với hạng tử $5y^2$, giữ nguyên vì là hằng số; đạo hàm $2x$ được $2$.',
          'Bước 3: Kết quả là $f\'_x(x, y) = 2x y^3 + 5y^2 + 2$.'
        ],
        finalAnswer: '$f\'_x(x, y) = 2x y^3 + 5y^2 + 2$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! $5y^2$ đứng cộng riêng lẻ (hằng số cộng thêm) nên đạo hàm của hằng số phải bằng $0$, không được giữ nguyên $5y^2$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Đạo hàm đồng thời cả $x$ và $y$ trong từng hạng tử.',
          'Bước 2: Hạng tử đầu $(x^2)\' \\cdot (y^3)\' = 2x \\cdot 3y^2 = 6xy^2$. Hạng tử hai $(5y^2)\' = 10y$, hạng tử ba $(2x)\' = 2$.',
          'Bước 3: Thu được $f\'_x(x, y) = 6xy^2 + 10y + 2$.'
        ],
        finalAnswer: '$f\'_x(x, y) = 6xy^2 + 10y + 2$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ngay từ Bước 1! Khi tính đạo hàm riêng theo $x$, tuyệt đối không được lấy đạo hàm theo biến $y$.'
      }
    ]
  },
  {
    id: 'mul-02',
    topic: 'multivariable_series',
    topicName: 'Chuỗi & Hàm nhiều biến',
    difficulty: 'Trung bình',
    title: 'Bẫy điều kiện cần và đủ của Chuỗi số hội tụ',
    problem: 'Xét sự hội tụ hay phân kỳ của chuỗi số điều hòa:\n$$S = \\sum_{n=1}^{\\infty} \\frac{1}{n} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\dots$$',
    hint: 'Số hạng tổng quát $u_n = \\frac{1}{n} \\to 0$ chỉ là ĐIỀU KIỆN CẦN, không phải điều kiện đủ để chuỗi hội tụ! Hãy nhớ định lý chuỗi Riemann $\\sum \\frac{1}{n^p}$.',
    errorCategory: 'Ngộ nhận lim u_n = 0 thì chuỗi số chắc chắn hội tụ',
    keyTakeaway: 'Nếu lim u_n ≠ 0 thì chuỗi chắc chắn PHÂN KỲ. Nhưng nếu lim u_n = 0 thì CHƯA BIẾT! Đặc biệt chuỗi điều hòa ∑(1/n) luôn PHÂN KỲ!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Xét số hạng tổng quát của chuỗi là $u_n = \\frac{1}{n}$.',
          'Bước 2: Tính giới hạn khi $n \\to +\\infty$: $\\lim_{n \\to \\infty} u_n = \\lim_{n \\to \\infty} \\frac{1}{n} = 0$.',
          'Bước 3: Vì số hạng tổng quát tiến về $0$ nên chuỗi số đã cho HỘI TỤ.'
        ],
        finalAnswer: 'Chuỗi hội tụ',
        isCorrect: false,
        wrongStep: 3,
        explanation: 'Sai lầm kinh điển nhất chương Chuỗi ở Bước 3! $\\lim u_n = 0$ chỉ là điều kiện CẦN, không đủ để kết luận chuỗi hội tụ.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Nhận dạng đây là chuỗi Riemann (hay $p$-series) có dạng $\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$ với $p = 1$.',
          'Bước 2: Kiểm chứng bằng tiêu chuẩn tích phân Cauchy: $\\int_1^{+\\infty} \\frac{1}{x} \\, dx = \\lim_{b \\to +\\infty} \\ln b = +\\infty$.',
          'Bước 3: Vì tích phân suy rộng phân kỳ (hoặc vì $p = 1 \\le 1$), nên chuỗi điều hòa $\\sum_{n=1}^{\\infty} \\frac{1}{n}$ PHÂN KỲ.'
        ],
        finalAnswer: 'Chuỗi phân kỳ',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Chuỗi $\\sum \\frac{1}{n^p}$ chỉ hội tụ khi $p > 1$, và phân kỳ khi $p \\le 1$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Áp dụng tiêu chuẩn D\'Alembert (tỉ số): xét $D = \\lim_{n \\to \\infty} \\frac{u_{n+1}}{u_n} = \\lim_{n \\to \\infty} \\frac{n}{n+1} = 1$.',
          'Bước 2: Vì giới hạn tỉ số $D = 1 \\le 1$, theo tiêu chuẩn D\'Alembert chuỗi sẽ hội tụ.',
          'Bước 3: Kết luận chuỗi hội tụ.'
        ],
        finalAnswer: 'Chuỗi hội tụ',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Trong tiêu chuẩn D\'Alembert hay Cauchy, khi $D = 1$ thì tiêu chuẩn KHÔNG KẾT LUẬN ĐƯỢC!'
      }
    ]
  },
  {
    id: 'mul-03',
    topic: 'multivariable_series',
    topicName: 'Chuỗi & Hàm nhiều biến',
    difficulty: 'Dễ',
    title: 'Bẫy vi phân toàn phần của hàm 2 biến',
    problem: 'Tìm vi phân toàn phần $dz$ của hàm hai biến:\n$$z = x^2 y + 3y$$',
    hint: 'Công thức vi phân toàn phần: $dz = z\'_x \\, dx + z\'_y \\, dy$. Nhớ gắn đúng $dx$ với đạo hàm theo $x$, và $dy$ với đạo hàm theo $y$!',
    errorCategory: 'Cộng gộp đạo hàm riêng mà quên nhân dx, dy hoặc gắn ngược dx, dy',
    keyTakeaway: 'Vi phân toàn phần dz = f\'_x·dx + f\'_y·dy (Đạo hàm theo biến nào thì đi kèm vi phân d của biến đó)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Tính đạo hàm riêng theo $x$ (coi $y$ là hằng): $z\'_x = 2xy$.',
          'Bước 2: Tính đạo hàm riêng theo $y$ (coi $x$ là hằng): $z\'_y = x^2 + 3$.',
          'Bước 3: Áp dụng công thức $dz = z\'_x \\, dx + z\'_y \\, dy$, ta được $dz = 2xy \\, dx + (x^2 + 3) \\, dy$.'
        ],
        finalAnswer: '$dz = 2xy \\, dx + (x^2 + 3) \\, dy$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Cả hai đạo hàm riêng và vi phân $dx, dy$ đi kèm đều chuẩn xác.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Tính $z\'_x = 2xy$ và $z\'_y = x^2 + 3$.',
          'Bước 2: Cộng hai đạo hàm riêng lại và nhân chung với $dx$: $dz = (z\'_x + z\'_y) dx$.',
          'Bước 3: Thu được $dz = (2xy + x^2 + 3) dx$.'
        ],
        finalAnswer: '$dz = (2xy + x^2 + 3) dx$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! $x$ và $y$ là hai biến độc lập nên $z\'_x$ nhân với $dx$, còn $z\'_y$ phải nhân với $dy$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Tính $z\'_x = 2xy$ và $z\'_y = x^2 + 3$.',
          'Bước 2: Ghép chéo $dz = z\'_x \\, dy + z\'_y \\, dx$.',
          'Bước 3: Suy ra $dz = 2xy \\, dy + (x^2 + 3) \\, dx$.'
        ],
        finalAnswer: '$dz = 2xy \\, dy + (x^2 + 3) \\, dx$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Bạn đã ghép ngược $dx$ và $dy$ cho hai đạo hàm riêng.'
      }
    ]
  },
  {
    id: 'mul-04',
    topic: 'multivariable_series',
    topicName: 'Chuỗi & Hàm nhiều biến',
    difficulty: 'Trung bình',
    title: 'Bẫy đạo hàm riêng cấp hai hỗn hợp $f\'\'_{xy}$ (Định lý Schwarz)',
    problem: 'Cho hàm hai biến $f(x, y) = e^x \\sin y$. Tính đạo hàm riêng hỗn hợp cấp hai $f\'\'_{xy}(x, y) = \\frac{\\partial^2 f}{\\partial x \\partial y}$.',
    hint: 'Tính $f\'_x$ trước (giữ $y$ cố định), sau đó lấy kết quả đó đạo hàm tiếp theo biến $y$ (giữ $x$ cố định)!',
    errorCategory: 'Lấy đạo hàm theo cùng một biến 2 lần thay vì lần lượt theo x rồi theo y',
    keyTakeaway: 'Để tính f\'\'_xy: Bước 1 đạo hàm theo x, Bước 2 lấy kết quả đó đạo hàm theo y (Theo định lý Schwarz thì f\'\'_xy = f\'\'_yx)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Tính đạo hàm riêng cấp 1 theo $x$ (coi $\\sin y$ là hằng số): $f\'_x = (e^x)\' \\sin y = e^x \\sin y$.',
          'Bước 2: Lấy $f\'_x$ đạo hàm tiếp theo biến $y$ (coi $e^x$ là hằng số): $f\'\'_{xy} = e^x (\\sin y)\'_y$.',
          'Bước 3: Vì $(\\sin y)\' = \\cos y$, ta được $f\'\'_{xy}(x, y) = e^x \\cos y$.'
        ],
        finalAnswer: '$f\'\'_{xy} = e^x \\cos y$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Đạo hàm theo $x$ giữ nguyên $e^x$, đạo hàm theo $y$ biến $\\sin y$ thành $\\cos y$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Tính đạo hàm riêng theo $x$ lần 1: $f\'_x = e^x \\sin y$.',
          'Bước 2: Tiếp tục đạo hàm theo $x$ lần 2: $f\'\'_{xy} = (e^x)\' \\sin y = e^x \\sin y$.',
          'Bước 3: Kết luận $f\'\'_{xy} = e^x \\sin y$.'
        ],
        finalAnswer: '$f\'\'_{xy} = e^x \\sin y$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Bạn vừa tính $f\'\'_{xx}$ (đạo hàm 2 lần theo $x$), trong khi đề bài hỏi đạo hàm hỗn hợp $f\'\'_{xy}$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Đạo hàm theo $y$ được $-e^x \\cos y$ (nhầm dấu đạo hàm của $\\sin y$).',
          'Bước 2: Đạo hàm tiếp theo $x$ giữ nguyên hệ số.',
          'Bước 3: Suy ra $f\'\'_{xy} = -e^x \\cos y$.'
        ],
        finalAnswer: '$f\'\'_{xy} = -e^x \\cos y$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai dấu ở Bước 1! Đạo hàm của $\\sin y$ là $+\\cos y$ chứ không phải $-\\cos y$.'
      }
    ]
  },
  {
    id: 'mul-05',
    topic: 'multivariable_series',
    topicName: 'Chuỗi & Hàm nhiều biến',
    difficulty: 'Khó',
    title: 'Bẫy điểm yên ngựa trong Cực trị hàm 2 biến ($AC - B^2$)',
    problem: 'Khảo sát điểm dừng $M(0, 0)$ của hàm hai biến $z = x^2 - y^2$. Điểm $M(0, 0)$ có phải là điểm cực trị không?',
    hint: 'Sau khi giải $z\'_x = 0, z\'_y = 0$, phải tính $A = z\'\'_{xx}, B = z\'\'_{xy}, C = z\'\'_{yy}$ và xét dấu $\\Delta = AC - B^2$. Nếu $AC - B^2 < 0$ thì KHÔNG có cực trị!',
    errorCategory: 'Kết luận điểm dừng là cực trị hàm 2 biến mà quên kiểm tra điều kiện AC - B^2 > 0',
    keyTakeaway: 'Với hàm 2 biến: Tính Δ = A·C - B² tại điểm dừng. Nếu Δ > 0 thì CÓ cực trị (A > 0 cực tiểu, A < 0 cực đại). Nếu Δ < 0 thì là ĐIỂM YÊN NGỰA (không phải cực trị)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Tính đạo hàm cấp 1: $z\'_x = 2x = 0, z\'_y = -2y = 0 \\Rightarrow M(0, 0)$ là điểm dừng duy nhất.',
          'Bước 2: Tính đạo hàm cấp 2 tại $M(0,0)$: $A = z\'\'_{xx} = 2$, $B = z\'\'_{xy} = 0$, $C = z\'\'_{yy} = -2$.',
          'Bước 3: Xét biệt thức $\\Delta = AC - B^2 = 2(-2) - 0^2 = -4 < 0$. Do $\\Delta < 0$ nên $M(0, 0)$ là điểm yên ngựa, hàm số KHÔNG đạt cực trị tại $M(0, 0)$.'
        ],
        finalAnswer: 'Không phải cực trị (Điểm yên ngựa)',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Đồ thị $z = x^2 - y^2$ cong lên theo hướng trục $Ox$ nhưng lại cong xuống theo hướng trục $Oy$ (hình yên ngựa) nên không đạt cực trị tại $(0,0)$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Điểm dừng là $M(0, 0)$. Tính $A = z\'\'_{xx} = 2 > 0$.',
          'Bước 2: Vì đạo hàm cấp hai theo $x$ là $A = 2 > 0$.',
          'Bước 3: Kết luận ngay hàm số đạt cực tiểu tại $M(0, 0)$.'
        ],
        finalAnswer: 'Đạt cực tiểu tại $M(0, 0)$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Chỉ xét dấu của $A$ khi đã có $\\Delta = AC - B^2 > 0$. Ở đây $AC - B^2 = -4 < 0$ nên không có cực trị.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Ta có $A = 2, B = 0, C = -2$.',
          'Bước 2: Tính $\\Delta = B^2 - AC = 0 - (-4) = 4 > 0$.',
          'Bước 3: Vì $\\Delta > 0$ và $A = 2 > 0$ nên hàm số đạt cực tiểu tại $M(0, 0)$.'
        ],
        finalAnswer: 'Đạt cực tiểu tại $M(0, 0)$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai công thức ở Bước 2! Trong quy ước $\\Delta = AC - B^2$, phải lấy $A \\cdot C$ trừ đi $B^2$ chứ không phải $B^2 - AC$.'
      }
    ]
  },
  {
    id: 'mul-06',
    topic: 'multivariable_series',
    topicName: 'Chuỗi & Hàm nhiều biến',
    difficulty: 'Trung bình',
    title: 'Bẫy thứ tự lấy tích phân trong Tích phân lặp (Tích phân kép)',
    problem: 'Tính tích phân lặp:\n$$I = \\int_0^1 dx \\int_0^2 x y^2 \\, dy$$',
    hint: 'Tích phân viết dạng $\\int_0^1 dx \\int_0^2 xy^2 dy$ nghĩa là: tính tích phân bên trong theo biến $y$ (cận từ $0$ đến $2$, coi $x$ là hằng số) trước, rồi mới tính theo $x$ từ $0$ đến $1$!',
    errorCategory: 'Thay nhầm cận của biến y vào biến x trong tích phân kép',
    keyTakeaway: 'Trong tích phân lặp: Vi phân nào đứng trong (dy) thì tính theo biến đó trước và thay đúng cận của nó, biến còn lại (x) giữ nguyên như hằng số!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Tính tích phân bên trong theo biến $y$ (coi $x$ là hằng số): $\\int_0^2 x y^2 \\, dy = x \\left. \\frac{y^3}{3} \\right|_0^2 = \\frac{8}{3} x$.',
          'Bước 2: Thay kết quả vào tích phân bên ngoài theo biến $x$: $I = \\int_0^1 \\frac{8}{3} x \\, dx$.',
          'Bước 3: Tính nguyên hàm theo $x$: $I = \\frac{8}{3} \\left. \\frac{x^2}{2} \\right|_0^1 = \\frac{8}{3} \\cdot \\frac{1}{2} = \\frac{4}{3}$.'
        ],
        finalAnswer: '$I = \\frac{4}{3}$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Tách biến rõ ràng và thay đúng cận của $y \\in [0,2]$, $x \\in [0,1]$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Lấy nguyên hàm theo $x$ trước với cận từ $0$ đến $2$: $\\int_0^2 x \\, dx = \\left. \\frac{x^2}{2} \\right|_0^2 = 2$.',
          'Bước 2: Sau đó tính tích phân theo $y$ với cận từ $0$ đến $1$: $I = \\int_0^1 2 y^2 \\, dy$.',
          'Bước 3: Kết quả là $I = \\left. \\frac{2y^3}{3} \\right|_0^1 = \\frac{2}{3}$.'
        ],
        finalAnswer: '$I = \\frac{2}{3}$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Cận $[0, 2]$ đi liền với $\\int_0^2 \\dots dy$ nên là cận của biến $y$, còn $[0, 1]$ là cận của biến $x$. Bạn đã tráo cận của hai biến!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Tính tích phân bên trong theo $y$: $\\int_0^2 (xy^2) dy = \\left. \\frac{x^2 y^3}{6} \\right|_0^2$ (lấy nguyên hàm cả $x$ lẫn $y$ cùng lúc).',
          'Bước 2: Thay $y = 2$ được $\\frac{8}{6}x^2 = \\frac{4}{3}x^2$.',
          'Bước 3: Tích phân lần nữa theo $x$ từ $0$ đến $1$ được $\\frac{4}{9}$.'
        ],
        finalAnswer: '$I = \\frac{4}{9}$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Khi tính tích phân theo $dy$, biến $x$ là hằng số giữ nguyên, không được lấy nguyên hàm của $x$ thành $\\frac{x^2}{2}$ ngay ở bước trong!'
      }
    ]
  },
  {
    id: 'mul-07',
    topic: 'multivariable_series',
    topicName: 'Chuỗi & Hàm nhiều biến',
    difficulty: 'Trung bình',
    title: 'Bẫy thiếu nhân tử Jacobi $r$ khi đổi sang Tọa độ cực',
    problem: 'Chuyển tích phân kép $I = \\iint_D (x^2 + y^2) \\, dx\\,dy$ trên hình tròn $D: x^2 + y^2 \\le 4$ sang tọa độ cực $(r, \\varphi)$.',
    hint: 'Khi đổi biến sang tọa độ cực $x = r\\cos\\varphi, y = r\\sin\\varphi$, diện tích nguyên tố là $dx\\,dy = r \\, dr\\,d\\varphi$ (CÓ nhân thêm $r$)!',
    errorCategory: 'Quên nhân thêm Jacobi r khi đổi vi phân dx dy = r dr dφ trong tọa độ cực',
    keyTakeaway: 'Thần chú tọa độ cực: x² + y² = r², và dx·dy = r·dr·dφ. Quên chữ r trong r·dr·dφ là sai toàn bộ bài toán!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Đặt $x = r\\cos\\varphi, y = r\\sin\\varphi \\Rightarrow x^2 + y^2 = r^2$. Miền hình tròn bán kính $R = 2$ có $0 \\le \\varphi \\le 2\\pi$ và $0 \\le r \\le 2$.',
          'Bước 2: Thay vi phân diện tích $dx\\,dy = r \\, dr\\,d\\varphi$, hàm dưới dấu tích phân trở thành $r^2 \\cdot r = r^3$.',
          'Bước 3: Ta được $I = \\int_0^{2\\pi} d\\varphi \\int_0^2 r^3 \\, dr = 2\\pi \\left. \\frac{r^4}{4} \\right|_0^2 = 2\\pi \\cdot 4 = 8\\pi$.'
        ],
        finalAnswer: '$I = 8\\pi$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Nhờ nhớ nhân tử Jacobi $r$ trong $dx\\,dy = r\\,dr\\,d\\varphi$, biểu thức dưới dấu tích phân là $r^2 \\cdot r = r^3$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Trên hình tròn $x^2 + y^2 \\le 4$, ta có $0 \\le \\varphi \\le 2\\pi, 0 \\le r \\le 2$ và $x^2 + y^2 = r^2$.',
          'Bước 2: Thay trực tiếp $dx\\,dy = dr\\,d\\varphi$, ta có $I = \\int_0^{2\\pi} d\\varphi \\int_0^2 r^2 \\, dr$.',
          'Bước 3: Tính tích phân thu được $I = 2\\pi \\cdot \\frac{8}{3} = \\frac{16\\pi}{3}$.'
        ],
        finalAnswer: '$I = \\frac{16\\pi}{3}$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai kinh điển ở Bước 2! Khi chuyển sang tọa độ cực, $dx\\,dy = r \\, dr\\,d\\varphi$ chứ không phải $dr\\,d\\varphi$ (bạn đã quên nhân thêm Jacobi $r$).'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Từ $x^2 + y^2 \\le 4$, giữ nguyên cận bán kính $0 \\le r \\le 4$.',
          'Bước 2: Thay $x^2 + y^2 = r^2$ và $dx\\,dy = r\\,dr\\,d\\varphi$, được $I = \\int_0^{2\\pi} d\\varphi \\int_0^4 r^3 \\, dr$.',
          'Bước 3: Kết quả là $I = 2\\pi \\cdot 64 = 128\\pi$.'
        ],
        finalAnswer: '$I = 128\\pi$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai bán kính ở Bước 1! Phương trình hình tròn là $x^2 + y^2 \\le R^2 = 4$ nên bán kính $R = \\sqrt{4} = 2$ chứ không phải $4$!'
      }
    ]
  },
  {
    id: 'mul-08',
    topic: 'multivariable_series',
    topicName: 'Chuỗi & Hàm nhiều biến',
    difficulty: 'Dễ',
    title: 'Bẫy tổng của Chuỗi cấp số nhân lùi vô hạn',
    problem: 'Tính tổng của chuỗi số hội tụ:\n$$S = \\sum_{n=0}^{\\infty} \\left(\\frac{1}{3}\\right)^n = 1 + \\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27} + \\dots$$',
    hint: 'Tổng cấp số nhân lùi vô hạn có công bội $|q| < 1$ và số hạng đầu $u_0$ là: $S = \\frac{u_0}{1 - q}$. Chú ý chuỗi bắt đầu từ $n = 0$ nên số hạng đầu là $u_0 = (\\frac{1}{3})^0 = 1$!',
    errorCategory: 'Nhầm số hạng đầu tiên khi chuỗi bắt đầu từ n = 0 hoặc nhầm mẫu số 1 - q',
    keyTakeaway: 'Tổng cấp số nhân vô hạn (|q| < 1): S = (Số hạng đầu tiên) / (1 - q). Luôn thay thử giá trị n đầu tiên để biết chính xác số hạng đầu!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Đây là chuỗi cấp số nhân có công bội $q = \\frac{1}{3}$ (thỏa mãn $|q| < 1$) và số hạng đầu ứng với $n = 0$ là $u_0 = \\left(\\frac{1}{3}\\right)^0 = 1$.',
          'Bước 2: Áp dụng công thức tổng $S = \\frac{u_0}{1 - q} = \\frac{1}{1 - \\frac{1}{3}}$.',
          'Bước 3: Vì $1 - \\frac{1}{3} = \\frac{2}{3}$, ta có $S = \\frac{1}{2/3} = \\frac{3}{2}$.'
        ],
        finalAnswer: '$S = \\frac{3}{2}$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Xác định đúng số hạng đầu $u_0 = 1$ và chia cho $1 - q = \\frac{2}{3}$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Công bội là $q = \\frac{1}{3}$, lấy số hạng đầu là $\\frac{1}{3}$.',
          'Bước 2: Áp dụng công thức $S = \\frac{1/3}{1 - 1/3} = \\frac{1/3}{2/3}$.',
          'Bước 3: Suy ra $S = \\frac{1}{2}$.'
        ],
        finalAnswer: '$S = \\frac{1}{2}$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Chuỗi chạy từ $n = 0$ nên số hạng đầu tiên là $(\\frac{1}{3})^0 = 1$ chứ không phải $\\frac{1}{3}$ (bạn đã bỏ sót số hạng $1$ đầu tiên).'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Số hạng đầu là $u_0 = 1$, công bội $q = \\frac{1}{3}$.',
          'Bước 2: Áp dụng công thức $S = \\frac{u_0}{1 + q} = \\frac{1}{1 + 1/3}$.',
          'Bước 3: Thu được $S = \\frac{3}{4}$.'
        ],
        finalAnswer: '$S = \\frac{3}{4}$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai mẫu số ở Bước 2! Công thức đúng là $\\frac{u_0}{1 - q}$ (dấu trừ ở mẫu) chứ không phải $1 + q$.'
      }
    ]
  },
  {
    id: 'mul-09',
    topic: 'multivariable_series',
    topicName: 'Chuỗi & Hàm nhiều biến',
    difficulty: 'Trung bình',
    title: 'Bẫy chiều bất đẳng thức trong Tiêu chuẩn D\'Alembert (Tỉ số)',
    problem: 'Xét sự hội tụ của chuỗi số dương:\n$$\\sum_{n=1}^{\\infty} \\frac{2^n}{n!}$$',
    hint: 'Xét $D = \\lim_{n \\to \\infty} \\frac{u_{n+1}}{u_n}$. Lưu ý $(n+1)! = (n+1) \\cdot n!$. Khi $D < 1$ thì chuỗi HỘI TỤ, khi $D > 1$ thì chuỗi PHÂN KỲ!',
    errorCategory: 'Rút gọn sai giai thừa (n+1)!/n! hoặc nhớ ngược điều kiện hội tụ D < 1 của D\'Alembert',
    keyTakeaway: 'Gặp giai thừa n! trong chuỗi số là dùng ngay D\'Alembert: u_(n+1)/u_n. Nhớ: (n+1)! / n! = n + 1, và nếu giới hạn D < 1 thì chuỗi HỘI TỤ!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Xét tỉ số D\'Alembert: $\\frac{u_{n+1}}{u_n} = \\frac{2^{n+1}}{(n+1)!} \\cdot \\frac{n!}{2^n}$.',
          'Bước 2: Vì $2^{n+1} = 2 \\cdot 2^n$ và $(n+1)! = (n+1) \\cdot n!$, rút gọn ta được $\\frac{u_{n+1}}{u_n} = \\frac{2}{n + 1}$.',
          'Bước 3: Khi $n \\to +\\infty$, $D = \\lim_{n \\to \\infty} \\frac{2}{n + 1} = 0 < 1$. Theo tiêu chuẩn D\'Alembert, chuỗi số HỘI TỤ.'
        ],
        finalAnswer: 'Chuỗi hội tụ ($D = 0 < 1$)',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Giai thừa $n!$ ở mẫu tăng nhanh hơn hàm mũ $2^n$ rất nhiều nên tỉ số tiến về $0 < 1$, chuỗi hội tụ rất nhanh.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Tính tỉ số $\\frac{u_{n+1}}{u_n} = \\frac{2}{n + 1}$.',
          'Bước 2: Lấy giới hạn khi $n \\to \\infty$ được $D = 0$.',
          'Bước 3: Vì $D = 0 < 1$ nên theo tiêu chuẩn D\'Alembert chuỗi số PHÂN KỲ.'
        ],
        finalAnswer: 'Chuỗi phân kỳ',
        isCorrect: false,
        wrongStep: 3,
        explanation: 'Sai kết luận ở Bước 3! Trong tiêu chuẩn D\'Alembert (và Cauchy), $D < 1$ nghĩa là số hạng sau nhỏ hơn số hạng trước theo cấp số nhân nên chuỗi HỘI TỤ, còn $D > 1$ mới phân kỳ!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Tính $\\frac{u_{n+1}}{u_n} = \\frac{2^{n+1}}{(n+1)!} \\cdot \\frac{n!}{2^n}$.',
          'Bước 2: Rút gọn $\\frac{n!}{(n+1)!} = 1$, còn lại $\\frac{2^{n+1}}{2^n} = 2$.',
          'Bước 3: Vì $D = 2 > 1$ nên chuỗi phân kỳ.'
        ],
        finalAnswer: 'Chuỗi phân kỳ ($D = 2$)',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai rút gọn giai thừa ở Bước 2! $(n+1)! = (n+1) \\cdot n!$ nên $\\frac{n!}{(n+1)!} = \\frac{1}{n+1}$ chứ không phải bằng $1$!'
      }
    ]
  },
  {
    id: 'mul-10',
    topic: 'multivariable_series',
    topicName: 'Chuỗi & Hàm nhiều biến',
    difficulty: 'Khó',
    title: 'Bẫy công thức Bán kính hội tụ của Chuỗi lũy thừa',
    problem: 'Tìm bán kính hội tụ $R$ của chuỗi lũy thừa:\n$$\\sum_{n=1}^{\\infty} \\frac{x^n}{n \\cdot 5^n}$$',
    hint: 'Với chuỗi $\\sum a_n x^n$, nếu đặt $\\rho = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|$ thì bán kính hội tụ là $R = \\frac{1}{\\rho}$ (nghịch đảo của $\\rho$), tức là $R = \\lim_{n \\to \\infty} \\left|\\frac{a_n}{a_{n+1}}\\right|$!',
    errorCategory: 'Quên nghịch đảo R = 1/ρ khi tìm bán kính hội tụ của chuỗi lũy thừa',
    keyTakeaway: 'Cực kỳ cẩn thận: Hệ số giới hạn ρ = lim|a_(n+1) / a_n|, nhưng BÁN KÍNH HỘI TỤ phải là nghịch đảo R = 1/ρ = lim|a_n / a_(n+1)|!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Xác định hệ số của chuỗi lũy thừa là $a_n = \\frac{1}{n \\cdot 5^n}$.',
          'Bước 2: Tính $\\rho = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\lim_{n \\to \\infty} \\frac{n \\cdot 5^n}{(n+1) \\cdot 5^{n+1}} = \\lim_{n \\to \\infty} \\frac{n}{n+1} \\cdot \\frac{1}{5} = \\frac{1}{5}$.',
          'Bước 3: Bán kính hội tụ của chuỗi là $R = \\frac{1}{\\rho} = \\frac{1}{1/5} = 5$.'
        ],
        finalAnswer: '$R = 5$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Bạn đã lấy nghịch đảo $R = \\frac{1}{\\rho} = 5$ rất chuẩn xác.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Hệ số tổng quát là $a_n = \\frac{1}{n \\cdot 5^n}$.',
          'Bước 2: Tính giới hạn tỉ số $\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{1}{5}$.',
          'Bước 3: Kết luận bán kính hội tụ là $R = \\frac{1}{5}$.'
        ],
        finalAnswer: '$R = \\frac{1}{5}$',
        isCorrect: false,
        wrongStep: 3,
        explanation: 'Sai ở Bước 3! $\\frac{1}{5}$ là giá trị của $\\rho = \\lim |\\frac{a_{n+1}}{a_n}|$, còn bán kính hội tụ phải là nghịch đảo $R = \\frac{1}{\\rho} = 5$!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Xét $\\lim_{n \\to \\infty} a_n = \\lim_{n \\to \\infty} \\frac{1}{n \\cdot 5^n} = 0$.',
          'Bước 2: Vì hệ số $a_n \\to 0$ nên bán kính hội tụ bằng $0$.',
          'Bước 3: Kết luận $R = 0$.'
        ],
        finalAnswer: '$R = 0$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai công thức ở Bước 2! Bán kính hội tụ được tính bằng tỉ số $\\lim |\\frac{a_n}{a_{n+1}}|$ hoặc căn bậc $n$ ($\\frac{1}{\\lim \\sqrt[n]{|a_n|}}$), không phải bằng $\\lim a_n$.'
      }
    ]
  }
);

// ============================================================================
// TRỌN BỘ CÂU HỎI & LỜI GIẢI TỪ FILE "Buoi 2 - BT.pdf" (PHIẾU BÀI TẬP GIẢI TÍCH 1 - BUỔI 2)
// ============================================================================
window.BUILTIN_QUESTIONS.push(
  {
    id: 'b2-01',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Dễ',
    title: 'Bài 1 (Buổi 2): Tìm số δ từ đồ thị của hàm số f',
    problem: 'Sử dụng đồ thị đã cho của hàm $f$, hãy tìm một số $\\delta > 0$ sao cho:\n$$\\text{nếu } |x - 1| < \\delta \\quad \\text{thì} \\quad |f(x) - 1| < 0.2$$<img src="./images/bai1.png" alt="Đồ thị Bài 1" class="problem-graph-img" />',
    hint: 'Bất đẳng thức $|f(x) - 1| < 0.2$ tương đương $0.8 < f(x) < 1.2$. Từ đồ thị, điều này xảy ra khi $x \\in (0.7, 1.1)$. Khoảng đối xứng quanh $x=1$ phải chọn bán kính nhỏ hơn trong hai bên!',
    errorCategory: 'Chọn bán kính lân cận δ lớn hơn thay vì nhỏ hơn khi khoảng quanh x_0 không đối xứng',
    keyTakeaway: 'Khi khoảng (a, b) chứa x₀ không đối xứng, muốn |x - x₀| < δ nằm gọn trong (a, b) thì phải chọn δ = min(x₀ - a, b - x₀) (khoảng cách gần hơn)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Ta có $|f(x) - 1| < 0.2 \\Leftrightarrow 0.8 < f(x) < 1.2$. Nhìn đồ thị hàm nghịch biến trên lân cận $x=1$, điều này ứng với $0.7 < x < 1.1$.',
          'Bước 2: Khoảng cách từ tâm $x_0 = 1$ tới đầu mút trái $0.7$ là $1 - 0.7 = 0.3$; tới đầu mút phải $1.1$ là $1.1 - 1 = 0.1$.',
          'Bước 3: Để khoảng đối xứng $(1 - \\delta, 1 + \\delta)$ nằm trọn trong $(0.7, 1.1)$, ta phải chọn $\\delta = \\min(0.3, 0.1) = 0.1$ (hoặc bất kỳ số dương nào $\\le 0.1$).'
        ],
        finalAnswer: '$\\delta = 0.1$ (hoặc $0 < \\delta \\le 0.1$)',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Khi $|x - 1| < 0.1 \\Rightarrow 0.9 < x < 1.1 \\subset (0.7, 1.1)$, đảm bảo chắc chắn $|f(x) - 1| < 0.2$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Từ $|f(x) - 1| < 0.2 \\Leftrightarrow 0.8 < f(x) < 1.2$, nhìn đồ thị ta được $0.7 < x < 1.1$.',
          'Bước 2: Khoảng cách từ $1$ đến $0.7$ là $0.3$ và từ $1$ đến $1.1$ là $0.1$.',
          'Bước 3: Chọn giá trị lớn hơn là $\\delta = \\max(0.3, 0.1) = 0.3$.'
        ],
        finalAnswer: '$\\delta = 0.3$',
        isCorrect: false,
        wrongStep: 3,
        explanation: 'Sai ở Bước 3! Nếu lấy $\\delta = 0.3$ thì khoảng $(0.7, 1.3)$ sẽ bị lố sang bên phải của $1.1$ (ví dụ tại $x = 1.2$, $|f(x)-1| > 0.2$). Phải lấy $\\min$ chứ không phải $\\max$!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Trên trục hoành có hai mốc $0.7$ và $1.1$.',
          'Bước 2: Tính độ dài đoạn thẳng nối hai mốc này là $1.1 - 0.7 = 0.4$.',
          'Bước 3: Chia đôi độ dài đoạn này ta được $\\delta = \\frac{0.4}{2} = 0.2$.'
        ],
        finalAnswer: '$\\delta = 0.2$',
        isCorrect: false,
        wrongStep: 3,
        explanation: 'Sai ở Bước 3! Tâm đang xét là $x_0 = 1$ không nằm chính giữa $0.7$ và $1.1$. Với $\\delta = 0.2$, $(0.8, 1.2)$ vẫn vượt quá $1.1$.'
      }
    ]
  },
  {
    id: 'b2-02',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Trung bình',
    title: 'Bài 2 (Buổi 2): Tìm số δ cho hàm f(x) = x² từ đồ thị',
    problem: 'Sử dụng đồ thị đã cho của $f(x) = x^2$, hãy tìm một số $\\delta > 0$ sao cho:\n$$\\text{nếu } |x - 1| < \\delta \\quad \\text{thì} \\quad |x^2 - 1| < 0.5$$<img src="./images/bai2.png" alt="Đồ thị Bài 2" class="problem-graph-img" />',
    hint: 'Giải $0.5 < x^2 < 1.5$ với $x > 0$ để tìm hai dấu chấm hỏi $?$ trên trục hoành là $\\sqrt{0.5}$ và $\\sqrt{1.5}$, sau đó lấy khoảng cách nhỏ hơn tới $1$.',
    errorCategory: 'Chọn nhầm khoảng cách lớn hơn khi tìm δ cho định nghĩa giới hạn',
    keyTakeaway: 'Từ 0.5 < x² < 1.5 suy ra √0.5 < x < √1.5. Vì hàm x² dốc hơn ở bên phải x=1 nên nhánh phải hẹp hơn: δ = √1.5 - 1 ≈ 0.224!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Ta có $|x^2 - 1| < 0.5 \\Leftrightarrow 0.5 < x^2 < 1.5$. Với $x > 0$, lấy căn bậc hai các vế ta được $\\sqrt{0.5} < x < \\sqrt{1.5}$ (hai mốc $?$ trên trục $Ox$).',
          'Bước 2: Khoảng cách từ $x = 1$ đến hai mút là $d_1 = 1 - \\sqrt{0.5} \\approx 1 - 0.707 = 0.293$ và $d_2 = \\sqrt{1.5} - 1 \\approx 1.2247 - 1 = 0.2247$.',
          'Bước 3: Chọn $\\delta = \\min(1 - \\sqrt{0.5}, \\sqrt{1.5} - 1) = \\sqrt{1.5} - 1 \\approx 0.224$ (hoặc $\\delta = 0.22$).'
        ],
        finalAnswer: '$\\delta = \\sqrt{1.5} - 1 \\approx 0.224$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Đồ thị $y=x^2$ đi lên ngày càng dốc nên khoảng cách bên phải $\\sqrt{1.5} - 1 \\approx 0.224$ nhỏ hơn bên trái $1 - \\sqrt{0.5} \\approx 0.293$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Từ $0.5 < x^2 < 1.5 \\Rightarrow \\sqrt{0.5} < x < \\sqrt{1.5}$.',
          'Bước 2: Tính khoảng cách bên trái $1 - \\sqrt{0.5} \\approx 0.293$ và bên phải $\\sqrt{1.5} - 1 \\approx 0.224$.',
          'Bước 3: Chọn $\\delta = 1 - \\sqrt{0.5} \\approx 0.293$.'
        ],
        finalAnswer: '$\\delta = 1 - \\sqrt{0.5} \\approx 0.293$',
        isCorrect: false,
        wrongStep: 3,
        explanation: 'Sai ở Bước 3! Nếu lấy $\\delta = 0.293$ thì khi $x = 1.28 \\in (1 - \\delta, 1 + \\delta)$, ta có $x^2 = 1.6384 > 1.5$, vi phạm điều kiện $|x^2 - 1| < 0.5$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Ta có $|x^2 - 1| < 0.5$.',
          'Bước 2: Lấy căn bậc hai trực tiếp bất đẳng thức: $|x - 1| < \\sqrt{0.5}$.',
          'Bước 3: Suy ra $\\delta = \\sqrt{0.5} \\approx 0.707$.'
        ],
        finalAnswer: '$\\delta = \\sqrt{0.5} \\approx 0.707$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai đại số ở Bước 2! $\\sqrt{|x^2 - 1|}$ KHÔNG bằng $|x - 1|$.'
      }
    ]
  },
  {
    id: 'b2-03',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Trung bình',
    isProof: true,
    title: 'Bài 3 (Buổi 2): Chứng minh lim(x→2) (1/x) = 1/2 bằng định nghĩa ε - δ',
    problem: 'Chứng minh bằng định nghĩa $\\varepsilon - \\delta$ rằng:\n$$\\lim_{x \\to 2} \\frac{1}{x} = \\frac{1}{2}$$',
    hint: 'Biến đổi $|\\frac{1}{x} - \\frac{1}{2}| = \\frac{|x - 2|}{2|x|}$. Để chặn mẫu số $2|x|$ từ dưới, trước tiên hãy giả sử $|x - 2| < 1 \\Rightarrow 1 < x < 3 \\Rightarrow 2|x| > 2$!',
    errorCategory: 'Quên chặn biến x trong lân cận bán kính 1 hoặc chọn δ phụ thuộc vào biến x khi chứng minh ε - δ',
    keyTakeaway: 'Khi chứng minh giới hạn phân thức bằng ε-δ, số δ tuyệt đối không được chứa biến x! Luôn giả sử trước |x - x₀| < 1 để chặn mẫu số từ dưới, rồi chọn δ = min(1, ...)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Với mọi $\\varepsilon > 0$, ta cần tìm $\\delta > 0$ sao cho nếu $0 < |x - 2| < \\delta$ thì $\\left|\\frac{1}{x} - \\frac{1}{2}\\right| = \\frac{|x - 2|}{2|x|} < \\varepsilon$.',
          'Bước 2: Trước hết, giả sử $|x - 2| < 1 \\Rightarrow 1 < x < 3 \\Rightarrow |x| > 1 \\Rightarrow \\frac{1}{2|x|} < \\frac{1}{2}$. Khi đó $\\frac{|x - 2|}{2|x|} < \\frac{|x - 2|}{2}$.',
          'Bước 3: Chọn $\\delta = \\min(1, 2\\varepsilon) > 0$. Khi $0 < |x - 2| < \\delta$, ta có đồng thời $|x - 2| < 1$ và $|x - 2| < 2\\varepsilon$, suy ra $\\left|\\frac{1}{x} - \\frac{1}{2}\\right| < \\frac{2\\varepsilon}{2} = \\varepsilon$ (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Bước chặn phụ $|x - 2| < 1 \\Rightarrow |x| > 1$ giúp làm mất biến $x$ ở mẫu một cách hợp lệ và $\\delta = \\min(1, 2\\varepsilon)$ chỉ phụ thuộc vào $\\varepsilon$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Với mọi $\\varepsilon > 0$, biến đổi $\\left|\\frac{1}{x} - \\frac{1}{2}\\right| = \\frac{|2 - x|}{2|x|} = \\frac{|x - 2|}{2|x|}$.',
          'Bước 2: Để $\\frac{|x - 2|}{2|x|} < \\varepsilon$, nhân chéo $2|x| > 0$ sang vế phải ta được điều kiện tương đương $|x - 2| < 2|x|\\varepsilon$.',
          'Bước 3: Vậy ta chọn $\\delta = 2|x|\\varepsilon > 0$. Khi đó nếu $0 < |x - 2| < \\delta$ thì $\\left|\\frac{1}{x} - \\frac{1}{2}\\right| = \\frac{|x - 2|}{2|x|} < \\frac{2|x|\\varepsilon}{2|x|} = \\varepsilon$ (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: false,
        wrongStep: 3,
        explanation: 'Sai bản chất ở Bước 3! Số $\\delta$ phải là một hằng số cố định chỉ phụ thuộc vào $\\varepsilon$, TUYỆT ĐỐI không được chứa biến chạy $x$ trong biểu thức của $\\delta$!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Với mọi $\\varepsilon > 0$, ta có $\\left|\\frac{1}{x} - \\frac{1}{2}\\right| = \\frac{|x - 2|}{2|x|}$. Giả sử trước $|x - 2| < 1 \\Leftrightarrow 1 < x < 3$.',
          'Bước 2: Thay giá trị lớn nhất $x = 3$ vào mẫu số để đánh giá: $\\frac{|x - 2|}{2|x|} \\le \\frac{|x - 2|}{2 \\cdot 3} = \\frac{|x - 2|}{6}$.',
          'Bước 3: Chọn $\\delta = \\min(1, 6\\varepsilon)$. Khi $0 < |x - 2| < \\delta$ thì $\\left|\\frac{1}{x} - \\frac{1}{2}\\right| \\le \\frac{|x - 2|}{6} < \\frac{6\\varepsilon}{6} = \\varepsilon$ (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai chiều bất đẳng thức ở Bước 2! Vì $x < 3$ nằm ở MẪU SỐ nên $\\frac{1}{2|x|} > \\frac{1}{6}$ chứ không phải $\\le \\frac{1}{6}$. Muốn phân số nhỏ hơn thì phải thay cận dưới $x > 1$ vào mẫu số!'
      }
    ]
  },
  {
    id: 'b2-04',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Trung bình',
    isProof: true,
    title: 'Bài 4 (Buổi 2): Chứng minh lim(x→a) √x = √a với a > 0',
    problem: 'Chứng minh bằng định nghĩa $\\varepsilon - \\delta$ rằng:\n$$\\lim_{x \\to a} \\sqrt{x} = \\sqrt{a} \\quad (\\text{nếu } a > 0)$$\n*(Gợi ý: Sử dụng $|\\sqrt{x} - \\sqrt{a}| = \\frac{|x - a|}{\\sqrt{x} + \\sqrt{a}}$).*',
    hint: 'Vì $x \\ge 0$ nên ở mẫu số ta luôn có $\\sqrt{x} + \\sqrt{a} \\ge \\sqrt{a}$, suy ra $\\frac{|x - a|}{\\sqrt{x} + \\sqrt{a}} \\le \\frac{|x - a|}{\\sqrt{a}}$!',
    errorCategory: 'Đánh giá sai chiều bất đẳng thức mẫu số √x + √a ≥ √a',
    keyTakeaway: 'Vì √x ≥ 0 nên mẫu số √x + √a ≥ √a, do đó |√x - √a| ≤ |x - a| / √a. Chỉ cần chọn δ = min(a, √a · ε) là xong!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Với mọi $\\varepsilon > 0$, xét $x > 0$ (bằng cách chặn $|x - a| < a$), nhân lượng liên hợp ta có $|\\sqrt{x} - \\sqrt{a}| = \\frac{|x - a|}{\\sqrt{x} + \\sqrt{a}}$.',
          'Bước 2: Vì $\\sqrt{x} > 0$ nên mẫu số $\\sqrt{x} + \\sqrt{a} > \\sqrt{a} \\Rightarrow \\frac{|x - a|}{\\sqrt{x} + \\sqrt{a}} < \\frac{|x - a|}{\\sqrt{a}}$.',
          'Bước 3: Chọn $\\delta = \\min(a, \\sqrt{a}\\,\\varepsilon) > 0$. Khi $0 < |x - a| < \\delta$, ta có $x > 0$ và $|\\sqrt{x} - \\sqrt{a}| < \\frac{|x - a|}{\\sqrt{a}} < \\frac{\\sqrt{a}\\,\\varepsilon}{\\sqrt{a}} = \\varepsilon$ (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Hoàn hảo! Đánh giá $\\sqrt{x} + \\sqrt{a} > \\sqrt{a}$ giúp làm mất $\\sqrt{x}$ ở mẫu và giữ đúng chiều bất đẳng thức $< \\varepsilon$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Với mọi $\\varepsilon > 0$, nhân lượng liên hợp ta có $|\\sqrt{x} - \\sqrt{a}| = \\frac{|x - a|}{\\sqrt{x} + \\sqrt{a}}$.',
          'Bước 2: Khi $x$ ở lân cận của $a$, đánh giá mẫu số $\\sqrt{x} + \\sqrt{a} \\ge \\sqrt{a} + \\sqrt{a} = 2\\sqrt{a}$, suy ra $|\\sqrt{x} - \\sqrt{a}| \\le \\frac{|x - a|}{2\\sqrt{a}}$.',
          'Bước 3: Chọn $\\delta = \\min(a, 2\\sqrt{a}\\,\\varepsilon)$. Khi $0 < |x - a| < \\delta$, ta suy ra $|\\sqrt{x} - \\sqrt{a}| \\le \\frac{|x - a|}{2\\sqrt{a}} < \\varepsilon$ (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Với những điểm $x < a$ trong lân cận của $a$, ta có $\\sqrt{x} < \\sqrt{a}$ nên $\\sqrt{x} + \\sqrt{a} < 2\\sqrt{a}$, do đó $\\frac{|x - a|}{\\sqrt{x} + \\sqrt{a}} > \\frac{|x - a|}{2\\sqrt{a}}$ (ngược chiều bất đẳng thức!).'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Với mọi $\\varepsilon > 0$, xét biểu thức bình phương $|\\sqrt{x} - \\sqrt{a}|^2 = (\\sqrt{x} - \\sqrt{a})^2$.',
          'Bước 2: Khai triển bình phương hiệu hai căn thức ta được $(\\sqrt{x} - \\sqrt{a})^2 = |x - a| \\Rightarrow |\\sqrt{x} - \\sqrt{a}| = \\sqrt{|x - a|}$.',
          'Bước 3: Chọn $\\delta = \\varepsilon^2 > 0$. Khi $0 < |x - a| < \\delta$, ta có $|\\sqrt{x} - \\sqrt{a}| = \\sqrt{|x - a|} < \\sqrt{\\varepsilon^2} = \\varepsilon$ (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai hằng đẳng thức ở Bước 2! $(\\sqrt{x} - \\sqrt{a})^2 = x - 2\\sqrt{ax} + a$ chứ KHÔNG bằng $|x - a|$!'
      }
    ]
  },
  {
    id: 'b2-05',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Khó',
    isProof: true,
    title: 'Bài 5 (Buổi 2): Chứng minh hàm Heaviside không có giới hạn tại 0',
    problem: 'Cho hàm Heaviside $H(t) = \\begin{cases} 0 & \\text{nếu } t < 0 \\\\ 1 & \\text{nếu } t \\ge 0 \\end{cases}$. Hãy dùng định nghĩa giới hạn (phản chứng với $\\varepsilon = \\frac{1}{2}$) để chứng minh:\n$$\\lim_{t \\to 0} H(t) \\text{ không tồn tại.}$$',
    hint: 'Giả sử tồn tại giới hạn $L$. Với $\\varepsilon = \\frac{1}{2}$, trong mọi khoảng $(-\\delta, \\delta)$ luôn có cả số $t_1 < 0$ ($H(t_1)=0$) và số $t_2 > 0$ ($H(t_2)=1$). Áp dụng bất đẳng thức tam giác cho $1 = |1 - 0|$!',
    errorCategory: 'Chọn điểm cố định nằm ngoài khoảng (-δ, δ) hoặc gán trước giá trị của L khi chứng minh phản chứng',
    keyTakeaway: 'Khi phản chứng lim H(t) = L với ε = 1/2: Phải lấy t₁ = -δ/2 ∈ (-δ, 0) và t₂ = δ/2 ∈ (0, δ) để suy ra |L| < 1/2 và |1 - L| < 1/2 với MỌI số thực L, dẫn tới 1 < 1 (vô lý)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Giả sử phản chứng rằng $\\lim_{t \\to 0} H(t) = L$ ($L \\in \\mathbb{R}$). Chọn $\\varepsilon = \\frac{1}{2} > 0$, theo định nghĩa phải tồn tại $\\delta > 0$ sao cho nếu $0 < |t| < \\delta$ thì $|H(t) - L| < \\frac{1}{2}$.',
          'Bước 2: Lấy $t_1 = -\\frac{\\delta}{2} \\in (-\\delta, 0) \\Rightarrow H(t_1) = 0$, suy ra $|0 - L| = |L| < \\frac{1}{2}$. Lấy $t_2 = \\frac{\\delta}{2} \\in (0, \\delta) \\Rightarrow H(t_2) = 1$, suy ra $|1 - L| < \\frac{1}{2}$.',
          'Bước 3: Áp dụng bất đẳng thức tam giác: $1 = |1 - 0| = |(1 - L) + L| \\le |1 - L| + |L| < \\frac{1}{2} + \\frac{1}{2} = 1 \\Rightarrow 1 < 1$ (mâu thuẫn!). Vậy $\\lim_{t \\to 0} H(t)$ không tồn tại (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Xuất sắc! Đây là cách chứng minh phản chứng hoàn chỉnh và chặt chẽ nhất theo định nghĩa $\\varepsilon - \\delta$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Giả sử phản chứng $\\lim_{t \\to 0} H(t) = L$. Với $\\varepsilon = \\frac{1}{2}$, theo định nghĩa tồn tại $\\delta > 0$ sao cho $0 < |t| < \\delta \\Rightarrow |H(t) - L| < \\frac{1}{2}$.',
          'Bước 2: Thay hai giá trị cụ thể $t_1 = -1$ ($H(-1) = 0$) và $t_2 = 1$ ($H(1) = 1$) vào bất đẳng thức trên, ta được $|0 - L| < \\frac{1}{2}$ và $|1 - L| < \\frac{1}{2}$.',
          'Bước 3: Cộng hai bất đẳng thức suy ra $1 \\le |1 - L| + |L| < 1$ (mâu thuẫn!). Vậy $\\lim_{t \\to 0} H(t)$ không tồn tại (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Định nghĩa giới hạn chỉ đảm bảo $|H(t) - L| < \\frac{1}{2}$ khi $0 < |t| < \\delta$ (với $\\delta$ có thể rất nhỏ như $0.001$). Bạn không được phép thay cố định $t = \\pm 1$ vì $\\pm 1$ có thể nằm ngoài khoảng $(-\\delta, \\delta)$!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Giả sử phản chứng tồn tại $\\lim_{t \\to 0} H(t) = L$. Vì tại $t = 0$ hàm số có giá trị $H(0) = 1$, nên giới hạn $L$ nếu tồn tại thì bắt buộc phải bằng $H(0) = 1$.',
          'Bước 2: Chọn $\\varepsilon = \\frac{1}{2}$, với mọi $\\delta > 0$, lấy $t = -\\frac{\\delta}{2} \\in (-\\delta, 0)$ thì $H(t) = 0$.',
          'Bước 3: Khi đó $|H(t) - L| = |0 - 1| = 1 > \\frac{1}{2} = \\varepsilon$ (mâu thuẫn với định nghĩa giới hạn!). Vậy $\\lim_{t \\to 0} H(t)$ không tồn tại (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ngụy biện ở Bước 1! Định nghĩa giới hạn $\\lim_{t \\to 0} H(t) = L$ KHÔNG hề đòi hỏi $L$ phải bằng $H(0) = 1$ (chỉ khi hàm liên tục mới có $L = H(0)$). Bạn mới chỉ bác bỏ được $L = 1$ chứ chưa bác bỏ mọi số thực $L$ khác!'
      }
    ]
  },
  {
    id: 'b2-06',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Khó',
    isProof: true,
    title: 'Bài 6 (Buổi 2): Chứng minh giới hạn của hàm Dirichlet tại x = 0 không tồn tại',
    problem: 'Cho hàm số Dirichlet:\n$$f(x) = \\begin{cases} 0 & \\text{nếu } x \\text{ hữu tỉ} \\\\ 1 & \\text{nếu } x \\text{ vô tỉ} \\end{cases}$$\nHãy chứng minh rằng $\\lim_{x \\to 0} f(x)$ không tồn tại.',
    hint: 'Do tính trù mật của số hữu tỉ và số vô tỉ, trong MỌI khoảng $(-\\delta, \\delta)$ quanh $0$ đều chứa vô số số hữu tỉ ($f(x)=0$) và vô số số vô tỉ ($f(x)=1$).',
    errorCategory: 'Nhầm giới hạn trái/phải với nhánh hữu tỉ/vô tỉ hoặc chọn dãy số không hội tụ về 0',
    keyTakeaway: 'Có 2 cách chuẩn để chứng minh hàm Dirichlet không có giới hạn tại 0: (1) Phản chứng ε = 1/2 dùng tính trù mật trên (0, δ), hoặc (2) Dùng tiêu chuẩn Heine với dãy hữu tỉ x_n = 1/n → 0 và dãy vô tỉ y_n = √2/n → 0!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Giả sử phản chứng $\\lim_{x \\to 0} f(x) = L$. Với $\\varepsilon = \\frac{1}{2}$, tồn tại $\\delta > 0$ sao cho mọi $x \\in (-\\delta, \\delta) \\setminus \\{0\\}$ đều thỏa $|f(x) - L| < \\frac{1}{2}$.',
          'Bước 2: Vì tập số hữu tỉ $\\mathbb{Q}$ và vô tỉ $\\mathbb{R}\\setminus\\mathbb{Q}$ đều trù mật trên $\\mathbb{R}$, trong khoảng $(0, \\delta)$ luôn tồn tại số hữu tỉ $x_1 \\in \\mathbb{Q}$ ($f(x_1) = 0 \\Rightarrow |L| < \\frac{1}{2}$) và số vô tỉ $x_2 \\notin \\mathbb{Q}$ ($f(x_2) = 1 \\Rightarrow |1 - L| < \\frac{1}{2}$).',
          'Bước 3: Suy ra $1 = |1 - L + L| \\le |1 - L| + |L| < \\frac{1}{2} + \\frac{1}{2} = 1$ (mâu thuẫn!). (Hoặc chọn hai dãy $x_n = \\frac{1}{n} \\to 0 \\Rightarrow f(x_n) = 0 \\to 0$ và $y_n = \\frac{\\sqrt{2}}{n} \\to 0 \\Rightarrow f(y_n) = 1 \\to 1 \\neq 0$). Vậy $\\lim_{x \\to 0} f(x)$ không tồn tại (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Lập luận dựa trên tính trù mật trong khoảng $(0, \\delta)$ (hoặc 2 dãy cùng tiến về $0$) hoàn toàn chặt chẽ.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Để xét sự tồn tại của $\\lim_{x \\to 0} f(x)$, ta xét giới hạn một phía khi $x \\to 0^-$ và khi $x \\to 0^+$.',
          'Bước 2: Áp dụng nhánh thứ nhất cho giới hạn bên trái: $\\lim_{x \\to 0^-} f(x) = \\lim_{x \\to 0^-} 0 = 0$; áp dụng nhánh thứ hai cho giới hạn bên phải: $\\lim_{x \\to 0^+} f(x) = \\lim_{x \\to 0^+} 1 = 1$.',
          'Bước 3: Vì giới hạn trái ($0$) khác giới hạn phải ($1$), nên $\\lim_{x \\to 0} f(x)$ không tồn tại (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai nặng ở Bước 2! Hai nhánh của hàm số phân chia theo "hữu tỉ / vô tỉ" chứ KHÔNG phải theo "$x < 0$ / $x > 0$". Ở cả bên trái lẫn bên phải số $0$ đều có vô số số hữu tỉ và vô tỉ!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Áp dụng định nghĩa giới hạn theo dãy số (Heine): chọn một dãy số hữu tỉ $x_n$ và một dãy số vô tỉ $y_n$.',
          'Bước 2: Chọn dãy hữu tỉ hằng $x_n = 1 \\in \\mathbb{Q}$ thì $\\lim_{n \\to \\infty} f(x_n) = 0$; chọn dãy vô tỉ hằng $y_n = \\sqrt{2} \\notin \\mathbb{Q}$ thì $\\lim_{n \\to \\infty} f(y_n) = 1$.',
          'Bước 3: Vì $\\lim f(x_n) \\neq \\lim f(y_n)$ nên $\\lim_{x \\to 0} f(x)$ không tồn tại (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai điều kiện ở Bước 2! Muốn dùng tiêu chuẩn dãy số để xét giới hạn tại $x = 0$, cả hai dãy $x_n$ và $y_n$ BẮT BUỘC phải tiến về $0$ khi $n \\to \\infty$ (ví dụ $x_n = \\frac{1}{n}, y_n = \\frac{\\sqrt{2}}{n}$), chứ không được chọn $x_n = 1, y_n = \\sqrt{2}$!'
      }
    ]
  },
  {
    id: 'b2-07',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Trung bình',
    isProof: true,
    title: 'Bài 7 (Buổi 2): Chứng minh lim(x→-3) 1/(x+3)² = ∞',
    problem: 'Chứng minh bằng định nghĩa giới hạn vô cực rằng:\n$$\\lim_{x \\to -3} \\frac{1}{(x + 3)^2} = \\infty$$',
    hint: 'Theo định nghĩa giới hạn bằng $+\\infty$: Với mọi số dương lớn $M > 0$, ta cần tìm $\\delta > 0$ sao cho nếu $0 < |x - (-3)| < \\delta$ thì $\\frac{1}{(x+3)^2} > M$.',
    errorCategory: 'Quên dấu giá trị tuyệt đối khi khai căn (x+3)^2 < 1/M trong chứng minh giới hạn vô cực',
    keyTakeaway: 'Để chứng minh lim f(x) = +∞: Cho f(x) > M (với M > 0 bất kỳ). Từ 1/(x+3)² > M ⇔ (x+3)² < 1/M ⇔ |x + 3| < 1/√M, chọn ngay δ = 1/√M!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Với mọi số $M > 0$ lớn tùy ý, ta cần chỉ ra $\\delta > 0$ sao cho nếu $0 < |x - (-3)| = |x + 3| < \\delta$ thì $\\frac{1}{(x + 3)^2} > M$.',
          'Bước 2: Biến đổi tương đương với $x \\neq -3, M > 0$: $\\frac{1}{(x + 3)^2} > M \\Leftrightarrow (x + 3)^2 < \\frac{1}{M} \\Leftrightarrow |x + 3| < \\frac{1}{\\sqrt{M}}$.',
          'Bước 3: Chọn $\\delta = \\frac{1}{\\sqrt{M}} > 0$. Khi đó với mọi $x$ thỏa $0 < |x + 3| < \\delta$, ta suy ra $(x + 3)^2 < \\delta^2 = \\frac{1}{M} \\Rightarrow \\frac{1}{(x + 3)^2} > M$, vậy $\\lim_{x \\to -3} \\frac{1}{(x + 3)^2} = \\infty$ (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Phép biến đổi tương đương có dấu giá trị tuyệt đối $|x + 3| < \\frac{1}{\\sqrt{M}}$ hoàn toàn chuẩn mực.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Với mọi $M > 0$, xét bất đẳng thức $\\frac{1}{(x + 3)^2} > M \\Leftrightarrow (x + 3)^2 < \\frac{1}{M}$.',
          'Bước 2: Lấy căn bậc hai cả hai vế của bất đẳng thức, ta được $x + 3 < \\frac{1}{\\sqrt{M}} \\Leftrightarrow x < -3 + \\frac{1}{\\sqrt{M}}$.',
          'Bước 3: Chọn $\\delta = \\frac{1}{\\sqrt{M}}$, khi đó mọi $x < -3 + \\delta$ đều thỏa mãn $\\frac{1}{(x+3)^2} > M$, suy ra $\\lim_{x \\to -3} \\frac{1}{(x + 3)^2} = \\infty$ (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Khi lấy căn bậc hai của $(x + 3)^2 < \\frac{1}{M}$, bắt buộc phải có dấu giá trị tuyệt đối $|x + 3| < \\frac{1}{\\sqrt{M}}$ (tức $-3 - \\delta < x < -3 + \\delta$). Nếu chỉ viết $x < -3 + \\delta$ thì với $x = -100$ bất đẳng thức sẽ sai!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Xét giới hạn $\\lim_{x \\to -3} \\frac{1}{(x + 3)^2}$, áp dụng quy tắc L\'Hôpital bằng cách lấy đạo hàm tử số và mẫu số.',
          'Bước 2: Đạo hàm của $(x + 3)^2$ là $2(x + 3)$, khi thay $x = -3$ vào thì mẫu số tiến về $0$ và luôn không âm.',
          'Bước 3: Một phân thức có mẫu tiến về $0^+$ thì giới hạn tiến ra $+\\infty$, suy ra $\\lim_{x \\to -3} \\frac{1}{(x + 3)^2} = \\infty$ (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Khi $x \\to -3$, tử số bằng $1 \\neq 0$ nên biểu thức có dạng $\\frac{1}{0^+}$ chứ KHÔNG phải dạng vô định $\\frac{0}{0}$ hay $\\frac{\\infty}{\\infty}$, tuyệt đối không được áp dụng quy tắc L\'Hôpital!'
      }
    ]
  },
  {
    id: 'b2-08',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Dễ',
    title: 'Bài 8 (Buổi 2): Nhìn đồ thị tìm các điểm gián đoạn (không liên tục)',
    problem: 'Từ đồ thị dưới đây, hãy chỉ ra các điểm mà hàm số không liên tục và giải thích lý do:<img src="./images/bai8.png" alt="Đồ thị Bài 8" class="problem-graph-img" />',
    hint: 'Hàm số không liên tục tại nơi đồ thị bị: (1) Đứt lỗ thủng (không xác định), (2) Nhảy bậc (giới hạn trái $\\neq$ giới hạn phải), hoặc (3) Tiến ra vô cùng (tiệm cận đứng).',
    errorCategory: 'Bỏ sót điểm gián đoạn loại khử được (lỗ thủng) hoặc điểm tiệm cận đứng',
    keyTakeaway: 'Trên đồ thị, hàm số gián đoạn tại mọi hoành độ x mà ta phải "nhấc bút lên" khi vẽ: lỗ thủng (x = -4), bước nhảy (x = -2 và x = 2), tiệm cận đứng (x = 4)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Tại $x = -4$, đồ thị có một lỗ tròn rỗng và không có chấm đặc nào trên đường thẳng $x = -4$, nghĩa là $f(-4)$ không xác định $\\Rightarrow$ gián đoạn tại $x = -4$.',
          'Bước 2: Tại $x = -2$ và $x = 2$, đồ thị bị đứt thành hai nhánh cao thấp khác nhau: $\\lim_{x \\to -2^-} f(x) \\neq \\lim_{x \\to -2^+} f(x)$ và $\\lim_{x \\to 2^-} f(x) \\neq \\lim_{x \\to 2^+} f(x)$ $\\Rightarrow$ gián đoạn bước nhảy tại $x = -2$ và $x = 2$.',
          'Bước 3: Tại $x = 4$, đồ thị vọt lên $+\\infty$ dọc theo đường tiệm cận đứng ($\\lim_{x \\to 4} f(x) = +\\infty$) $\\Rightarrow$ gián đoạn vô cực tại $x = 4$. Vậy các điểm gián đoạn là $x \\in \\{-4, -2, 2, 4\\}$.'
        ],
        finalAnswer: 'Gián đoạn tại $x = -4, -2, 2, 4$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Bạn đã phân loại đầy đủ cả 4 điểm gián đoạn trên đồ thị kèm lý do chuẩn xác.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Tại $x = -2$ và $x = 2$ đều có một đầu mút là dấu chấm tròn đặc (tức là $f(-2)$ và $f(2)$ có xác định).',
          'Bước 2: Vì hàm số vẫn xác định tại $x = -2$ và $x = 2$ nên hàm liên tục tại hai điểm này.',
          'Bước 3: Hàm số chỉ gián đoạn tại $x = -4$ và $x = 4$.'
        ],
        finalAnswer: 'Chỉ gián đoạn tại $x = -4$ và $x = 4$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Có xác định $f(a)$ mới chỉ là 1 điều kiện; tại $x = -2$ và $x = 2$ giới hạn trái khác giới hạn phải nên giới hạn không tồn tại, hàm bị gián đoạn bước nhảy!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Quan sát gốc tọa độ $x = 0$, đồ thị đi qua đỉnh nhọn trên trục tung.',
          'Bước 2: Kết luận hàm số không liên tục tại $x = 0$.',
          'Bước 3: Các điểm gián đoạn là $x = -2, 0, 2$.'
        ],
        finalAnswer: 'Gián đoạn tại $x = -2, 0, 2$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Tại $x = 0$ nét vẽ đồ thị hoàn toàn liền mạch (không bị đứt), nên hàm số LIÊN TỤC tại $x = 0$.'
      }
    ]
  },
  {
    id: 'b2-09',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Dễ',
    title: 'Bài 9 (Buổi 2): Vẽ đồ thị và giải thích vì sao hàm số không liên tục tại x = -2',
    problem: 'Vẽ đồ thị và giải thích vì sao hai hàm số sau không liên tục tại $x = -2$:\n(a) $f(x) = \\frac{1}{x + 2}$\n(b) $f(x) = \\begin{cases} \\frac{1}{x + 2} & \\text{nếu } x \\neq -2 \\\\ 1 & \\text{nếu } x = -2 \\end{cases}$<img src="./images/bai9_sol.svg" alt="Đồ thị Bài 9" class="problem-graph-img" />',
    hint: 'Ba điều kiện để $f$ liên tục tại $a$: (1) $f(a)$ xác định, (2) $\\lim_{x \\to a} f(x)$ tồn tại hữu hạn, (3) $\\lim_{x \\to a} f(x) = f(a)$. Hãy xem câu (a) và (b) vi phạm điều kiện nào!',
    errorCategory: 'Nhầm lẫn giữa không xác định f(a) và không tồn tại giới hạn hữu hạn khi giải thích sự gián đoạn',
    keyTakeaway: 'Ở câu (a), f(-2) không xác định (mẫu bằng 0). Ở câu (b), dù đã gán thêm f(-2) = 1 nhưng lim(x→-2) 1/(x+2) tiến ra ±∞ (không tồn tại giới hạn hữu hạn) nên vẫn gián đoạn vô cực!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Với câu (a), tại $x = -2$ mẫu số $x + 2 = 0$ nên $f(-2)$ không xác định (vi phạm ngay điều kiện 1 của tính liên tục).',
          'Bước 2: Với câu (b), mặc dù $f(-2) = 1$ đã xác định, nhưng khi xét giới hạn tại $x = -2$: $\\lim_{x \\to -2^-} \\frac{1}{x+2} = -\\infty$ và $\\lim_{x \\to -2^+} \\frac{1}{x+2} = +\\infty$.',
          'Bước 3: Do đó $\\lim_{x \\to -2} f(x)$ không tồn tại (và không thể bằng $f(-2) = 1$). Vì vậy cả hai hàm đều gián đoạn vô cực (có tiệm cận đứng $x = -2$).'
        ],
        finalAnswer: '(a) $f(-2)$ không xác định; (b) $\\lim_{x \\to -2} f(x)$ không tồn tại (tiến ra $\\pm\\infty$)',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Ngay cả khi định nghĩa thêm $f(-2) = 1$ ở câu (b), ta vẫn không thể "vá" được tiệm cận đứng của $\\frac{1}{x+2}$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Ở câu (a), $f(-2)$ không xác định nên hàm số không liên tục tại $x = -2$.',
          'Bước 2: Ở câu (b), người ta đã bổ sung giá trị $f(-2) = 1$ nên hàm số đã xác định trên toàn $\\mathbb{R}$.',
          'Bước 3: Suy ra hàm ở câu (b) đã trở thành hàm liên tục tại $x = -2$.'
        ],
        finalAnswer: '(a) gián đoạn, còn (b) liên tục tại $x = -2$',
        isCorrect: false,
        wrongStep: 3,
        explanation: 'Sai ở Bước 3! Gán thêm giá trị $f(-2) = 1$ không làm cho $\\lim_{x \\to -2} \\frac{1}{x+2}$ bằng $1$, vì đồ thị hai bên vẫn vọt ra $\\pm\\infty$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Xét giới hạn $\\lim_{x \\to -2} \\frac{1}{x+2} = 0$.',
          'Bước 2: Ở câu (b), $f(-2) = 1 \\neq 0$.',
          'Bước 3: Nếu sửa $f(-2) = 0$ thì hàm số sẽ liên tục tại $x = -2$.'
        ],
        finalAnswer: 'Do $\\lim_{x \\to -2} \\frac{1}{x+2} = 0 \\neq 1$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Khi $x \\to -2$, mẫu số $x + 2 \\to 0$ nên $\\frac{1}{x+2}$ tiến ra $\\pm\\infty$ chứ không phải tiến về $0$ ($x \\to \\infty$ mới tiến về $0$).'
      }
    ]
  },
  {
    id: 'b2-10',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Dễ',
    title: 'Bài 10 (Buổi 2): Tính liên tục của hàm Lực hấp dẫn Trái Đất F(r)',
    problem: 'Lực hấp dẫn do Trái Đất tác dụng lên một đơn vị khối lượng tại khoảng cách $r$ từ tâm Trái Đất được cho bởi:\n$$F(r) = \\begin{cases} \\frac{GMr}{R^3} & \\text{nếu } r < R \\\\ \\frac{GM}{r^2} & \\text{nếu } r \\ge R \\end{cases}$$\ntrong đó $M, R, G$ là các hằng số dương. Hỏi $F$ có phải là một hàm liên tục theo $r$ ($r \\ge 0$) hay không?',
    hint: 'Trên khoảng $(0, R)$ hàm là đa thức bậc nhất theo $r$, trên $(R, \\infty)$ hàm là phân thức có mẫu $r^2 > 0$. Điểm ghép nối duy nhất cần kiểm tra là tại bề mặt Trái Đất $r = R$!',
    errorCategory: 'Nhầm biến r với hằng số R khi tính giới hạn trái và giới hạn phải tại r = R',
    keyTakeaway: 'Để kiểm tra hàm ghép nhánh liên tục tại điểm nối r = R, chỉ cần thay r = R vào nhánh trái (GMr/R³) và nhánh phải (GM/r²) xem hai kết quả có bằng nhau không!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Khi $0 \\le r < R$, $F(r) = \\frac{GM}{R^3}r$ là hàm đa thức theo $r$ nên liên tục. Khi $r > R$, $F(r) = \\frac{GM}{r^2}$ là hàm hữu tỉ có mẫu $r^2 > 0$ nên liên tục.',
          'Bước 2: Xét tại điểm nối $r = R$: Giới hạn trái là $\\lim_{r \\to R^-} F(r) = \\lim_{r \\to R^-} \\frac{GMr}{R^3} = \\frac{GM \\cdot R}{R^3} = \\frac{GM}{R^2}$.',
          'Bước 3: Giới hạn phải và giá trị tại $R$ là $\\lim_{r \\to R^+} \\frac{GM}{r^2} = F(R) = \\frac{GM}{R^2}$. Vì $\\lim_{r \\to R^-} F(r) = \\lim_{r \\to R^+} F(r) = F(R) = \\frac{GM}{R^2}$, nên $F(r)$ là hàm LIÊN TỤC với mọi $r \\ge 0$.'
        ],
        finalAnswer: 'Có, $F(r)$ liên tục tại mọi $r$ (tại $r = R$ giá trị chung là $\\frac{GM}{R^2}$)',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Tại bề mặt Trái Đất ($r = R$), công thức lực hấp dẫn bên trong và bên ngoài khớp nhau hoàn hảo tại giá trị $\\frac{GM}{R^2}$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Xét tại $r = R$, nhánh trên có mẫu số là $R^3$, nhánh dưới có mẫu số là $r^2 = R^2$.',
          'Bước 2: Vì $R^3 \\neq R^2$ nên giới hạn trái khác giới hạn phải tại $r = R$.',
          'Bước 3: Kết luận hàm $F(r)$ không liên tục tại $r = R$.'
        ],
        finalAnswer: 'Không liên tục tại $r = R$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Ở nhánh trên tử số có nhân với $r$, khi $r \\to R$ thì $\\frac{GMr}{R^3} = \\frac{GMR}{R^3}$ rút gọn $R$ đi sẽ còn đúng $\\frac{GM}{R^2}$ bằng nhánh dưới!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Đạo hàm nhánh trái theo $r$ được $\\frac{GM}{R^3}$, đạo hàm nhánh phải theo $r$ được $-\\frac{2GM}{R^3}$.',
          'Bước 2: Vì hai giá trị này khác nhau tại $r = R$.',
          'Bước 3: Nên hàm $F(r)$ không liên tục tại $r = R$.'
        ],
        finalAnswer: 'Không liên tục vì đạo hàm hai bên khác nhau',
        isCorrect: false,
        wrongStep: 3,
        explanation: 'Sai khái niệm ở Bước 3! Đạo hàm trái khác đạo hàm phải nghĩa là hàm không KHẢ VI (đồ thị bị gấp khúc tại $r=R$), nhưng đồ thị vẫn nối liền nhau nên hàm vẫn LIÊN TỤC!'
      }
    ]
  },
  {
    id: 'b2-11',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Trung bình',
    title: 'Bài 11 (Buổi 2): Tìm a và b để hàm 3 nhánh liên tục trên toàn trục số',
    problem: 'Tìm các giá trị $a$ và $b$ để hàm số $f$ liên tục trên toàn bộ trục số $(-\\infty, \\infty)$:\n$$f(x) = \\begin{cases} \\frac{x^2 - 4}{x - 2} & \\text{nếu } x < 2 \\\\ ax^2 - bx + 3 & \\text{nếu } 2 \\le x < 3 \\\\ 2x - a + b & \\text{nếu } x \\ge 3 \\end{cases}$$',
    hint: 'Khử dạng $\\frac{0}{0}$ ở nhánh đầu khi $x \\to 2^-$: $\\frac{x^2-4}{x-2} = x + 2 \\to 4$. Sau đó lập hệ 2 phương trình của $a, b$ tại hai điểm nối $x = 2$ và $x = 3$!',
    errorCategory: 'Rút gọn sai giới hạn (x^2-4)/(x-2) khi x -> 2 hoặc giải sai hệ phương trình tại x=2 và x=3',
    keyTakeaway: 'Hàm 3 nhánh liên tục trên R khi nó nối khít tại cả 2 mối ghép x = 2 và x = 3: lim(x→2⁻) = f(2) và lim(x→3⁻) = f(3)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Xét tính liên tục tại $x = 2$: $\\lim_{x \\to 2^-} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2^-} (x + 2) = 4$. Giá trị $f(2) = a(2^2) - b(2) + 3 = 4a - 2b + 3$. Cho bằng nhau: $4a - 2b + 3 = 4 \\Leftrightarrow 4a - 2b = 1$ (1).',
          'Bước 2: Xét tính liên tục tại $x = 3$: $\\lim_{x \\to 3^-} (ax^2 - bx + 3) = 9a - 3b + 3$, và $f(3) = 2(3) - a + b = 6 - a + b$. Cho bằng nhau: $9a - 3b + 3 = 6 - a + b \\Leftrightarrow 10a - 4b = 3$ (2).',
          'Bước 3: Giải hệ (1) và (2): Nhân (1) với $2$ được $8a - 4b = 2$, lấy (2) trừ đi ta có $2a = 1 \\Rightarrow a = \\frac{1}{2}$. Thay vào (1): $4(\\frac{1}{2}) - 2b = 1 \\Rightarrow 2b = 1 \\Rightarrow b = \\frac{1}{2}$.'
        ],
        finalAnswer: '$a = \\frac{1}{2}, \\; b = \\frac{1}{2}$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Cả hai điều kiện nối tại $x = 2$ ($4a - 2b = 1$) và tại $x = 3$ ($10a - 4b = 3$) đều cho nghiệm duy nhất $a = \\frac{1}{2}, b = \\frac{1}{2}$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Tại $x = 2$, thay $x = 2$ vào tử số $x^2 - 4$ được $0$, nên $\\lim_{x \\to 2^-} f(x) = 0 \\Rightarrow 4a - 2b + 3 = 0$.',
          'Bước 2: Tại $x = 3$, ta có phương trình $9a - 3b + 3 = 6 - a + b \\Leftrightarrow 10a - 4b = 3$.',
          'Bước 3: Giải hệ thu được $a = \\frac{9}{2}, b = \\frac{21}{2}$.'
        ],
        finalAnswer: '$a = \\frac{9}{2}, \\; b = \\frac{21}{2}$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Khi $x \\to 2^-$, $\\frac{x^2-4}{x-2} = \\frac{(x-2)(x+2)}{x-2} = x + 2 \\to 4$ chứ không phải bằng $0$!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Tại $x = 2$, ta có phương trình $4a - 2b = 1$.',
          'Bước 2: Tại $x = 3$, chuyển vế $9a - 3b + 3 = 6 - a + b \\Leftrightarrow 8a - 2b = 3$ (cộng nhầm dấu của $a$ và $b$).',
          'Bước 3: Giải hệ được $a = \\frac{1}{2}, b = \\frac{1}{2}$.'
        ],
        finalAnswer: 'Phương trình (2) là $8a - 2b = 3$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai biến đổi đại số ở Bước 2! Chuyển $-a$ từ vế phải sang vế trái phải thành $+a$ ($9a + a = 10a$), chuyển $+b$ sang trái phải thành $-b$ ($-3b - b = -4b$).'
      }
    ]
  },
  {
    id: 'b2-12',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Trung bình',
    title: 'Bài 12 (Buổi 2): Xét tính liên tục của hàm Dirichlet trên R',
    problem: 'Với những giá trị nào của $x$ thì hàm số sau liên tục?\n$$f(x) = \\begin{cases} 0 & \\text{nếu } x \\text{ hữu tỉ} \\\\ 1 & \\text{nếu } x \\text{ vô tỉ} \\end{cases}$$',
    hint: 'Tương tự Bài 6, với bất kỳ số thực $a \\in \\mathbb{R}$ nào, trong mọi lân cận của $a$ luôn có cả số hữu tỉ ($f=0$) và số vô tỉ ($f=1$).',
    errorCategory: 'Ngộ nhận hàm Dirichlet liên tục tại các điểm hữu tỉ hoặc tại x = 0',
    keyTakeaway: 'Hàm Dirichlet (0 tại hữu tỉ, 1 tại vô tỉ) là ví dụ kinh điển về một hàm số GIÁN ĐOẠN TẠI MỌI ĐIỂM trên R (không liên tục tại bất kỳ x nào)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Lấy $a \\in \\mathbb{R}$ bất kỳ. Do tập số hữu tỉ $\\mathbb{Q}$ và tập số vô tỉ $\\mathbb{R} \\setminus \\mathbb{Q}$ đều trù mật trên $\\mathbb{R}$, trong mọi khoảng $(a - \\delta, a + \\delta)$ luôn có các điểm $x_1 \\in \\mathbb{Q}$ ($f(x_1) = 0$) và $x_2 \\notin \\mathbb{Q}$ ($f(x_2) = 1$).',
          'Bước 2: Vì hàm số luôn nhảy qua lại giữa $0$ và $1$ trong mọi lân cận của $a$, nên $\\lim_{x \\to a} f(x)$ không tồn tại với mọi $a \\in \\mathbb{R}$.',
          'Bước 3: Kết luận: Hàm số $f(x)$ KHÔNG liên tục tại bất kỳ giá trị nào của $x$ (gián đoạn tại mọi điểm trên $\\mathbb{R}$).'
        ],
        finalAnswer: 'Không có giá trị nào của $x$ (Gián đoạn tại mọi $x \\in \\mathbb{R}$)',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Không tồn tại bất kỳ điểm $x$ nào mà hàm Dirichlet liên tục.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Trên tập số hữu tỉ $\\mathbb{Q}$, hàm số là hàm hằng $f(x) = 0$.',
          'Bước 2: Trên tập số vô tỉ, hàm số là hàm hằng $f(x) = 1$.',
          'Bước 3: Vì hàm hằng luôn liên tục nên $f(x)$ liên tục tại mọi $x \\in \\mathbb{R}$.'
        ],
        finalAnswer: 'Liên tục tại mọi $x \\in \\mathbb{R}$',
        isCorrect: false,
        wrongStep: 3,
        explanation: 'Sai ở Bước 3! Khi xét giới hạn $x \\to a$ trên $\\mathbb{R}$, biến $x$ phải chạy qua TẤT CẢ các số thực gần $a$ (gồm cả hữu tỉ lẫn vô tỉ), chứ không được tách riêng!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Cho hai nhánh bằng nhau: $0 = 1$ (vô nghiệm), nhưng tại gốc tọa độ $x = 0$ thì $f(0) = 0$.',
          'Bước 2: Do đó hàm số liên tục tại duy nhất điểm $x = 0$.',
          'Bước 3: Kết luận $x = 0$.'
        ],
        finalAnswer: 'Chỉ liên tục tại $x = 0$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Như đã chứng minh ở Bài 6, ngay cả tại $x = 0$ thì $\\lim_{x \\to 0} f(x)$ cũng không tồn tại (bạn đang nhầm với hàm $g(x)$ ở Bài 13).'
      }
    ]
  },
  {
    id: 'b2-13',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Khó',
    title: 'Bài 13 (Buổi 2): Với giá trị nào của x thì g(x) = (0 nếu x hữu tỉ, x nếu x vô tỉ) liên tục?',
    problem: 'Với những giá trị nào của $x$ thì hàm số $g$ liên tục?\n$$g(x) = \\begin{cases} 0 & \\text{nếu } x \\text{ hữu tỉ} \\\\ x & \\text{nếu } x \\text{ vô tỉ} \\end{cases}$$',
    hint: 'Hai đường $y = 0$ (nhánh hữu tỉ) và $y = x$ (nhánh vô tỉ) cắt nhau tại đúng một điểm duy nhất là $x = 0$! Hãy dùng định lý kẹp $0 \\le |g(x)| \\le |x|$ tại $x = 0$.',
    errorCategory: 'Kết luận hàm g(x) gián đoạn tại mọi điểm giống hàm Dirichlet mà quên điểm giao nhau x = 0',
    keyTakeaway: 'Khi hai nhánh hữu tỉ f₁(x) và vô tỉ f₂(x) đều liên tục, hàm ghép chỉ liên tục tại đúng những điểm x₀ làm cho hai nhánh BẰNG NHAU: f₁(x₀) = f₂(x₀) (ở đây là x = 0)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Xét tại $x = 0$: Ta luôn có $|g(x) - g(0)| = |g(x)| \\le |x|$ với mọi $x \\in \\mathbb{R}$ (vì $g(x)$ chỉ nhận giá trị $0$ hoặc $x$). Do $\\lim_{x \\to 0} |x| = 0$, theo định lý kẹp $\\lim_{x \\to 0} g(x) = 0 = g(0)$, nên $g$ liên tục tại $x = 0$.',
          'Bước 2: Xét tại $a \\neq 0$: Chọn dãy số hữu tỉ $r_n \\to a$ thì $g(r_n) = 0 \\to 0$, còn chọn dãy số vô tỉ $s_n \\to a$ thì $g(s_n) = s_n \\to a \\neq 0$. Do đó $\\lim_{x \\to a} g(x)$ không tồn tại khi $a \\neq 0$.',
          'Bước 3: Kết luận: Hàm số $g(x)$ chỉ liên tục tại duy nhất một điểm là $x = 0$.'
        ],
        finalAnswer: 'Chỉ liên tục tại duy nhất $x = 0$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Tuyệt vời! Tại $x = 0$, hai nhánh $y = 0$ và $y = x$ ép sát vào nhau tại gốc tọa độ nên hàm liên tục tại đúng $x = 0$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Giống như hàm Dirichlet ở Bài 12, hàm $g(x)$ được định nghĩa tách biệt trên tập hữu tỉ và vô tỉ.',
          'Bước 2: Vì tập hữu tỉ và vô tỉ trù mật nên giới hạn không tồn tại ở bất kỳ điểm nào.',
          'Bước 3: Kết luận hàm $g(x)$ không liên tục tại bất kỳ giá trị nào của $x$.'
        ],
        finalAnswer: 'Không liên tục tại bất kỳ $x$ nào',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Tại $x = 0$, nhánh vô tỉ $y = x$ cũng tiến về $0$ trùng khít với nhánh hữu tỉ $y = 0$, nên giới hạn tại $x = 0$ tồn tại và bằng $0$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Hàm $y = 0$ liên tục trên $\\mathbb{R}$ và hàm $y = x$ cũng liên tục trên $\\mathbb{R}$.',
          'Bước 2: Vì cả hai nhánh thành phần đều là hàm đa thức liên tục.',
          'Bước 3: Suy ra $g(x)$ liên tục với mọi $x \\in \\mathbb{R}$.'
        ],
        finalAnswer: 'Liên tục với mọi $x \\in \\mathbb{R}$',
        isCorrect: false,
        wrongStep: 3,
        explanation: 'Sai ở Bước 3! Tại mọi điểm $a \\neq 0$, các điểm hữu tỉ quanh $a$ có tung độ bằng $0$, còn các điểm vô tỉ quanh $a$ có tung độ gần $a \\neq 0$ nên đồ thị bị xé làm đôi.'
      }
    ]
  },
  {
    id: 'b2-14',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Trung bình',
    isProof: true,
    title: 'Bài 14 (Buổi 2): Chứng minh hàm f(x) = x⁴ sin(1/x) liên tục trên (-∞, ∞)',
    problem: 'Chứng minh rằng hàm số:\n$$f(x) = \\begin{cases} x^4 \\sin\\left(\\frac{1}{x}\\right) & \\text{nếu } x \\neq 0 \\\\ 0 & \\text{nếu } x = 0 \\end{cases}$$\nliên tục trên $(-\\infty, \\infty)$.',
    hint: 'Với $x \\neq 0$, hàm là tích/hợp của các hàm sơ cấp nên liên tục. Tại $x = 0$, dùng Định lý kẹp (Squeeze Theorem) với $-x^4 \\le x^4 \\sin(1/x) \\le x^4$!',
    errorCategory: 'Tách giới hạn tích khi một thừa số không có giới hạn hoặc áp dụng sai vô cùng bé tương đương sin(1/x) ~ 1/x khi x -> 0',
    keyTakeaway: 'Khi chứng minh tính liên tục của x⁴·sin(1/x) tại x = 0: tuyệt đối không được tách lim(x⁴)·lim(sin(1/x)) (vì lim sin(1/x) không tồn tại) và không được dùng sin(1/x) ~ 1/x (vì 1/x → ∞). Bắt buộc phải dùng Định lý Kẹp: -x⁴ ≤ x⁴·sin(1/x) ≤ x⁴!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Với mọi $x \\neq 0$, $f(x) = x^4 \\sin\\left(\\frac{1}{x}\\right)$ là tích và hàm hợp của các hàm sơ cấp (đa thức $x^4$, phân thức $1/x$ và hàm lượng giác $\\sin$) xác định trên $\\mathbb{R} \\setminus \\{0\\}$ nên liên tục tại mọi $x \\neq 0$.',
          'Bước 2: Xét tại $x = 0$: Với mọi $x \\neq 0$, ta luôn có $-1 \\le \\sin\\left(\\frac{1}{x}\\right) \\le 1$. Nhân cả 3 vế với $x^4 > 0$, ta thu được bất đẳng thức kẹp: $-x^4 \\le x^4 \\sin\\left(\\frac{1}{x}\\right) \\le x^4$.',
          'Bước 3: Vì $\\lim_{x \\to 0} (-x^4) = 0$ và $\\lim_{x \\to 0} x^4 = 0$, theo Định lý Kẹp (Squeeze Theorem) suy ra $\\lim_{x \\to 0} f(x) = 0 = f(0)$, nên $f$ liên tục tại $x = 0$. Vậy $f$ liên tục trên $(-\\infty, \\infty)$ (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Trình bày đầy đủ cả hai miền: $x \\neq 0$ (hàm sơ cấp) và điểm ghép $x = 0$ bằng Định lý Kẹp.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Với mọi $x \\neq 0$, hàm số $f(x) = x^4 \\sin\\left(\\frac{1}{x}\\right)$ là hàm sơ cấp xác định nên liên tục trên $(-\\infty, 0) \\cup (0, \\infty)$.',
          'Bước 2: Tại $x = 0$, áp dụng quy tắc giới hạn của một tích: $\\lim_{x \\to 0} f(x) = \\left(\\lim_{x \\to 0} x^4\\right) \\cdot \\left(\\lim_{x \\to 0} \\sin\\left(\\frac{1}{x}\\right)\\right) = 0 \\cdot \\left(\\lim_{x \\to 0} \\sin\\left(\\frac{1}{x}\\right)\\right) = 0$.',
          'Bước 3: Vì $\\lim_{x \\to 0} f(x) = 0 = f(0)$ nên hàm số liên tục tại $x = 0$. Vậy $f(x)$ liên tục trên $(-\\infty, \\infty)$ (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai quy tắc giới hạn ở Bước 2! Định lý $\\lim(u \\cdot v) = \\lim u \\cdot \\lim v$ chỉ được phép áp dụng khi CẢ HAI giới hạn thành phần đều tồn tại hữu hạn. Ở đây $\\lim_{x \\to 0} \\sin(1/x)$ không tồn tại nên cách tách tích này không hợp lệ, bắt buộc phải dùng Định lý Kẹp!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Với mọi $x \\neq 0$, hàm số $f(x) = x^4 \\sin\\left(\\frac{1}{x}\\right)$ liên tục vì là tích và hợp của các hàm sơ cấp.',
          'Bước 2: Tại $x = 0$, khi $x \\to 0$ ta áp dụng công thức vô cùng bé tương đương $\\sin u \\sim u$ cho $u = \\frac{1}{x}$: $\\lim_{x \\to 0} x^4 \\sin\\left(\\frac{1}{x}\\right) = \\lim_{x \\to 0} x^4 \\cdot \\frac{1}{x} = \\lim_{x \\to 0} x^3 = 0$.',
          'Bước 3: Suy ra $\\lim_{x \\to 0} f(x) = 0 = f(0)$, tức hàm số liên tục tại $x = 0$. Vậy $f$ liên tục trên $(-\\infty, \\infty)$ (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai nặng ở Bước 2! Công thức vô cùng bé tương đương $\\sin u \\sim u$ chỉ đúng khi $u \\to 0$. Khi $x \\to 0$ thì $u = \\frac{1}{x} \\to \\pm\\infty$ chứ không tiến về $0$!'
      }
    ]
  },
  {
    id: 'b2-15',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Khó',
    isProof: true,
    title: 'Bài 15 (Buổi 2): Chứng minh phương trình có nghiệm bằng Định lý Giá trị Trung gian',
    problem: 'Nếu $a$ và $b$ là các số dương ($a > 0, b > 0$), hãy chứng minh rằng phương trình:\n$$\\frac{a}{x^3 + 2x^2 - 1} + \\frac{b}{x^3 + x - 2} = 0$$\ncó ít nhất một nghiệm trong khoảng $(-1, 1)$.',
    hint: 'Quy đồng mẫu số để đưa về đa thức liên tục $P(x) = a(x^3 + x - 2) + b(x^3 + 2x^2 - 1) = 0$ (hoặc xét trên khoảng con giữa hai nghiệm mẫu số), chú ý mẫu $x^3 + 2x^2 - 1 = (x+1)(x^2+x-1)$ có nghiệm $x_0 = \\frac{\\sqrt{5}-1}{2} \\in (-1, 1)$!',
    errorCategory: 'Áp dụng Định lý Giá trị Trung gian trực tiếp trên đoạn chứa điểm gián đoạn của mẫu số hoặc xét sai dấu hai đầu mút',
    keyTakeaway: 'Không được áp dụng trực tiếp Định lý Giá trị Trung gian cho phân thức f(x) trên [-1, 1] hay [0, 1] vì mẫu x³+2x²-1 = 0 tại x = -1 và x = (√5-1)/2 ≈ 0.618 ∈ (0, 1)! Cách chuẩn nhất: Quy đồng về đa thức P(x) = a(x³+x-2) + b(x³+2x²-1) tại x = (√5-1)/2 và x = 1 (hoặc x = -1 và x = 1 kèm kiểm tra nghiệm ngoại lai)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Quy đồng mẫu số, với $x \\neq -1, 1, \\frac{\\sqrt{5}-1}{2}$ phương trình tương đương với đa thức $P(x) = a(x^3 + x - 2) + b(x^3 + 2x^2 - 1) = 0$. Hàm đa thức $P(x)$ liên tục trên toàn bộ đoạn $[-1, 1]$.',
          'Bước 2: Xét trên đoạn con $[x_0, 1] \\subset (-1, 1]$ với $x_0 = \\frac{\\sqrt{5}-1}{2} \\approx 0.618$ (là nghiệm của $x^3+2x^2-1=0$): Tại $x = x_0$, $P(x_0) = a(x_0^3 + x_0 - 2) + 0 < 0$ (do $x_0 < 1$ và $a > 0$). Tại $x = 1$, $P(1) = a(0) + b(1 + 2 - 1) = 2b > 0$ (do $b > 0$). (Hoặc xét $P(-1) = -4a < 0$ và $P(1) = 2b > 0$).',
          'Bước 3: Vì $P(x_0) \\cdot P(1) < 0$ và $P(x)$ liên tục trên $[x_0, 1]$, theo Định lý Giá trị Trung gian tồn tại $c \\in (x_0, 1) \\subset (-1, 1)$ sao cho $P(c) = 0$. Trên khoảng $(x_0, 1)$ cả hai mẫu số đều khác $0$, nên $c$ là nghiệm của phương trình đã cho trong $(-1, 1)$ (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác và vô cùng chặt chẽ! Chuyển về đa thức $P(x)$ (và kiểm tra nghiệm không trùng với nghiệm của mẫu $x_0 = \\frac{\\sqrt{5}-1}{2}$) đảm bảo Định lý Giá trị Trung gian hoàn toàn hợp lệ.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Đặt $f(x) = \\frac{a}{x^3 + 2x^2 - 1} + \\frac{b}{x^3 + x - 2}$. Để tránh hai đầu mút $x = \\pm 1$ làm mẫu bằng $0$, ta xét hàm $f(x)$ trên đoạn con $\\left[0, \\frac{1}{2}\\right] \\subset (-1, 1)$. Khi đó $f(x)$ liên tục trên $\\left[0, \\frac{1}{2}\\right]$.',
          'Bước 2: Tính giá trị tại hai đầu mút: Tại $x = 0$, $f(0) = -a - \\frac{b}{2} < 0$. Tại $x = \\frac{1}{2}$, ta có $\\left(\\frac{1}{2}\\right)^3 + 2\\left(\\frac{1}{2}\\right)^2 - 1 = \\frac{1}{8} + \\frac{1}{2} - 1 = \\frac{5}{8} > 0$ nên với $a$ đủ lớn thì $f(1/2) > 0$.',
          'Bước 3: Do $f(0) \\cdot f(1/2) < 0$, theo Định lý Giá trị Trung gian phương trình $f(x) = 0$ có ít nhất một nghiệm trong $\\left(0, \\frac{1}{2}\\right) \\subset (-1, 1)$ (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai tính toán và lập luận ở Bước 2! Tại $x = \\frac{1}{2}$, $\\frac{1}{8} + \\frac{1}{2} - 1 = -\\frac{3}{8} < 0$ (cả hai mẫu đều âm trên $(-1, \\frac{\\sqrt{5}-1}{2})$), nên $f(x) < 0$ với mọi $x \\in (0, 1/2)$ và không hề đổi dấu trên đoạn này!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Đặt $f(x) = \\frac{a}{x^3 + 2x^2 - 1} + \\frac{b}{x^3 + x - 2}$ và xét trên đoạn con $[-0.5, 0.8] \\subset (-1, 1)$ để không chạm vào hai nghiệm mẫu $x = -1$ và $x = 1$.',
          'Bước 2: Tại $x = -0.5$, cả hai mẫu số đều âm nên $f(-0.5) < 0$. Tại $x = 0.8$, mẫu đầu $0.8^3 + 2(0.8)^2 - 1 = 0.792 > 0$, nên khi $x$ tiến sát từ bên phải điểm làm mẫu đầu dương thì $f(x) > 0$.',
          'Bước 3: Vì $f(x)$ đổi dấu trên đoạn $[-0.5, 0.8]$, áp dụng trực tiếp Định lý Giá trị Trung gian cho $f(x)$ trên $[-0.5, 0.8]$ suy ra tồn tại $c \\in (-0.5, 0.8) \\subset (-1, 1)$ sao cho $f(c) = 0$ (đpcm).'
        ],
        finalAnswer: '',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai điều kiện liên tục ở Bước 1 và 3! Đa thức mẫu $x^3 + 2x^2 - 1 = (x+1)(x^2+x-1)$ có nghiệm $x_0 = \\frac{\\sqrt{5}-1}{2} \\approx 0.618 \\in [-0.5, 0.8]$, nên hàm phân thức $f(x)$ bị GIÁN ĐOẠN (tiến ra $\\pm\\infty$) tại $x_0 \\approx 0.618$ và không thể áp dụng Định lý Giá trị Trung gian trực tiếp trên $[-0.5, 0.8]$!'
      }
    ]
  }
);

window.BUILTIN_QUESTIONS.push(
  {
    id: 'b2-16a',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Dễ',
    title: 'Bài 16 a, b, c, d, e, f (Buổi 2): Giới hạn phân thức hữu tỉ tại vô cực',
    problem: 'Tìm các giới hạn tại vô cực sau (từ Bài 16a đến 16f):\n(a) $\\lim_{x \\to \\infty} \\frac{4x + 3}{5x - 1}$ $\\quad$ (b) $\\lim_{x \\to \\infty} \\frac{-2}{3x + 7}$ $\\quad$ (c) $\\lim_{t \\to \\infty} \\frac{3t^2 + t}{t^3 - 4t + 1}$\n(d) $\\lim_{t \\to -\\infty} \\frac{6t^2 + t - 5}{9 - 2t^2}$ $\\quad$ (e) $\\lim_{r \\to \\infty} \\frac{r - r^3}{2 - r^2 + 3r^3}$ $\\quad$ (f) $\\lim_{x \\to \\infty} \\frac{3x^3 - 8x + 2}{4x^3 - 5x^2 - 2}$',
    hint: 'Quy tắc bậc của tử và mẫu khi $x \\to \\pm\\infty$: Nếu bậc tử < bậc mẫu thì giới hạn = 0; nếu bậc tử = bậc mẫu thì giới hạn = tỉ số hệ số của lũy thừa bậc cao nhất (cẩn thận khi đa thức viết ngược thứ tự như $9 - 2t^2$ hay $r - r^3$)!',
    errorCategory: 'Lấy nhầm hệ số đứng đầu thay vì hệ số của bậc cao nhất khi đa thức sắp xếp không theo thứ tự giảm dần',
    keyTakeaway: 'Ở (d) 9 - 2t² có bậc cao nhất là -2t², ở (e) r - r³ có bậc cao nhất là -r³. Luôn nhìn vào SỐ MŨ CAO NHẤT chứ đừng nhìn số đứng đầu tiên!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Với (a) cùng bậc 1: $\\frac{4}{5}$; với (b) bậc tử $0 <$ bậc mẫu $1$: $0$; với (c) bậc tử $2 <$ bậc mẫu $3$: chia cho $t^3$ được $\\lim_{t \\to \\infty} \\frac{3/t + 1/t^2}{1 - 4/t^2 + 1/t^3} = 0$.',
          'Bước 2: Với (d) cùng bậc 2: hệ số của $t^2$ ở tử là $6$, ở mẫu là $-2$ (trong $9 - 2t^2$), nên giới hạn bằng $\\frac{6}{-2} = -3$.',
          'Bước 3: Với (e) cùng bậc 3: hệ số của $r^3$ ở tử là $-1$, ở mẫu là $3$, nên giới hạn bằng $-\\frac{1}{3}$. Với (f) cùng bậc 3: tỉ số hệ số bậc 3 là $\\frac{3}{4}$.'
        ],
        finalAnswer: '(a) $\\frac{4}{5}$; (b) $0$; (c) $0$; (d) $-3$; (e) $-\\frac{1}{3}$; (f) $\\frac{3}{4}$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Bạn đã không bị lừa bởi thứ tự viết ngược của $9 - 2t^2$ ở câu (d) và $r - r^3$ ở câu (e).'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: (a) ra $\\frac{4}{5}$, (b) ra $0$, (c) lấy tỉ số hệ số đầu là $\\frac{3}{1} = 3$.',
          'Bước 2: Ở (d), lấy hệ số đứng đầu của tử và mẫu là $\\frac{6}{9} = \\frac{2}{3}$.',
          'Bước 3: Ở (e) lấy $\\frac{1}{2}$ và ở (f) lấy $\\frac{3}{4}$.'
        ],
        finalAnswer: '(a) $\\frac{4}{5}$; (b) $0$; (c) $3$; (d) $\\frac{2}{3}$; (e) $\\frac{1}{2}$; (f) $\\frac{3}{4}$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1, 2, 3! Câu (c) bậc tử nhỏ hơn bậc mẫu nên bằng $0$; câu (d) và (e) mẫu số viết bậc cao nhất ở phía sau ($-2t^2$ và $3r^3$), không được lấy số đứng đầu!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: (a) $\\frac{4}{5}$, (b) $0$, (c) $0$.',
          'Bước 2: Ở câu (d), vì $t \\to -\\infty$ (âm vô cùng) nên $t^2$ mang dấu âm, suy ra $\\frac{6t^2}{-2t^2} = +3$.',
          'Bước 3: (e) $-\\frac{1}{3}$, (f) $\\frac{3}{4}$.'
        ],
        finalAnswer: '(a) $\\frac{4}{5}$; (b) $0$; (c) $0$; (d) $+3$; (e) $-\\frac{1}{3}$; (f) $\\frac{3}{4}$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Dù $t \\to -\\infty$ thì $t^2$ ở tử và $t^2$ ở mẫu vẫn rút gọn trực tiếp cho nhau ($\\frac{6t^2}{-2t^2} = -3$), không bị đổi dấu!'
      }
    ]
  },
  {
    id: 'b2-16b',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Trung bình',
    title: 'Bài 16 g, h, i, j, k, l (Buổi 2): Giới hạn chứa căn thức tại +∞ và -∞',
    problem: 'Tìm các giới hạn sau (từ Bài 16g đến 16l):\n(g) $\\lim_{x \\to \\infty} \\frac{4 - \\sqrt{x}}{2 + \\sqrt{x}}$ $\\quad$ (h) $\\lim_{u \\to -\\infty} \\frac{(u^2 + 1)(2u^2 - 1)}{(u^2 + 2)^2}$ $\\quad$ (i) $\\lim_{x \\to \\infty} \\frac{\\sqrt{x + 3x^2}}{4x - 1}$\n(j) $\\lim_{t \\to \\infty} \\frac{t + 3}{\\sqrt{2t^2 - 1}}$ $\\quad$ (k) $\\lim_{x \\to \\infty} \\frac{\\sqrt{1 + 4x^6}}{2 - x^3}$ $\\quad$ (l) $\\lim_{x \\to -\\infty} \\frac{\\sqrt{1 + 4x^6}}{2 - x^3}$',
    hint: 'Chú ý hai câu cực kỳ dễ sập bẫy là (k) và (l): $\\sqrt{x^6} = |x^3|$. Khi $x \\to +\\infty$ thì $|x^3| = x^3$; nhưng khi $x \\to -\\infty$ ($x < 0$) thì $x^3 < 0$ nên $\\sqrt{x^6} = |x^3| = -x^3$!',
    errorCategory: 'Quên √(x^6) = |x^3| = -x^3 khi x -> -∞ ở câu 16(l)',
    keyTakeaway: 'Siêu bẫy ở 16(k) và 16(l): √(1 + 4x⁶) / (2 - x³). Khi x → +∞ thì tử dương, mẫu âm nên ra -2. Khi x → -∞ thì x³ < 0 nên mẫu (2 - x³) > 0 và tử cũng > 0, kết quả phải ra +2!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: (g) Chia tử và mẫu cho $\\sqrt{x}$: $\\lim_{x \\to \\infty} \\frac{4/\\sqrt{x} - 1}{2/\\sqrt{x} + 1} = -1$. (h) Bậc cao nhất ở tử là $2u^4$, ở mẫu là $u^4$, nên giới hạn bằng $2$.',
          'Bước 2: (i) Với $x > 0$, chia cho $x = \\sqrt{x^2}$: $\\lim_{x \\to \\infty} \\frac{\\sqrt{1/x + 3}}{4 - 1/x} = \\frac{\\sqrt{3}}{4}$. (j) Với $t > 0$, chia cho $t = \\sqrt{t^2}$: $\\lim_{t \\to \\infty} \\frac{1 + 3/t}{\\sqrt{2 - 1/t^2}} = \\frac{1}{\\sqrt{2}}$.',
          'Bước 3: Ta có $\\sqrt{1 + 4x^6} = |x^3|\\sqrt{\\frac{1}{x^6} + 4}$. Ở (k) khi $x \\to +\\infty$, $|x^3| = x^3 \\Rightarrow \\lim \\frac{x^3\\sqrt{1/x^6+4}}{x^3(2/x^3 - 1)} = -2$. Ở (l) khi $x \\to -\\infty$, vì $x < 0$ nên $x^3 < 0 \\Rightarrow |x^3| = -x^3$, suy ra $\\lim \\frac{-x^3\\sqrt{1/x^6+4}}{x^3(2/x^3 - 1)} = \\frac{-2}{-1} = +2$.'
        ],
        finalAnswer: '(g) $-1$; (h) $2$; (i) $\\frac{\\sqrt{3}}{4}$; (j) $\\frac{1}{\\sqrt{2}}$; (k) $-2$; (l) $+2$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Quá xuất sắc! Ở câu (l), vì $x^6$ mũ chẵn còn $x^3$ mũ lẻ, khi $x < 0$ thì $\\sqrt{4x^6} = 2|x^3| = -2x^3$, chia cho $-x^3$ ở mẫu cho ra $+2$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: (g) ra $-1$, (h) ra $2$, (i) ra $\\frac{\\sqrt{3}}{4}$, (j) ra $\\frac{1}{\\sqrt{2}}$.',
          'Bước 2: Ở cả (k) và (l), vì $\\sqrt{4x^6} = 2x^3$ với mọi $x$ (do mũ 6 là mũ chẵn).',
          'Bước 3: Nên cả câu (k) và câu (l) đều có cùng kết quả là $\\frac{2}{-1} = -2$.'
        ],
        finalAnswer: '(g) $-1$; (h) $2$; (i) $\\frac{\\sqrt{3}}{4}$; (j) $\\frac{1}{\\sqrt{2}}$; (k) $-2$; (l) $-2$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sập bẫy ở Bước 2! $\\sqrt{x^6} = |x^3|$ chứ không phải $x^3$. Vì số mũ sau khi khai căn là số lẻ ($3$), nên khi $x < 0$ thì $x^3 < 0 \\Rightarrow |x^3| = -x^3$, làm câu (l) đổi dấu thành $+2$!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: (g) ra $-1$, (h) ra $2$.',
          'Bước 2: Ở (i), đưa $3x^2$ ra khỏi căn thành $3x$, chia cho $4x$ được $\\frac{3}{4}$. Ở (j) đưa $2t^2$ ra khỏi căn thành $2t$, được $\\frac{1}{2}$.',
          'Bước 3: (k) ra $-2$, (l) ra $+2$.'
        ],
        finalAnswer: '(g) $-1$; (h) $2$; (i) $\\frac{3}{4}$; (j) $\\frac{1}{2}$; (k) $-2$; (l) $+2$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Khi đưa hệ số $3$ và $2$ ra khỏi dấu căn bậc hai thì phải lấy căn thành $\\sqrt{3}$ và $\\sqrt{2}$ chứ không phải giữ nguyên $3$ và $2$.'
      }
    ]
  },
  {
    id: 'b2-17',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Dễ',
    title: 'Bài 17 (Buổi 2): Bài toán thực tế Nồng độ nước muối C(t) khi t → ∞',
    problem: 'Một bể chứa $5000\\text{ L}$ nước tinh khiết. Nước muối có nồng độ $30\\text{ g muối/1 lít}$ được bơm vào bể với tốc độ $25\\text{ L/phút}$.\n(a) Chứng minh rằng nồng độ muối trong bể sau $t$ phút (tính bằng gam/lít) là $C(t) = \\frac{30t}{200 + t}$.\n(b) Khi $t \\to \\infty$, nồng độ sẽ tiến đến giá trị nào?',
    hint: 'Sau $t$ phút: lượng nước muối bơm vào là $25t$ (lít), mang theo $30 \\cdot 25t = 750t$ (gam muối). Tổng thể tích trong bể là $5000 + 25t$ (lít). Lấy khối lượng muối chia tổng thể tích!',
    errorCategory: 'Quên cộng thể tích nước ban đầu 5000 L hoặc tính sai giới hạn khi t -> ∞',
    keyTakeaway: 'Nồng độ C(t) = (Tổng khối lượng muối) / (Tổng thể tích dung dịch) = (750t) / (5000 + 25t) = 30t / (200 + t). Khi t → ∞, nồng độ trong bể tiến về đúng nồng độ nước bơm vào (30 g/L)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: (a) Sau $t$ phút, thể tích nước muối bơm vào là $25t$ (lít), nên tổng thể tích dung dịch trong bể là $V(t) = 5000 + 25t$ (lít). Khối lượng muối được bơm vào là $m(t) = 30 \\cdot 25t = 750t$ (gam).',
          'Bước 2: Nồng độ muối sau $t$ phút là $C(t) = \\frac{m(t)}{V(t)} = \\frac{750t}{5000 + 25t}$. Chia cả tử và mẫu cho $25$, ta được $C(t) = \\frac{30t}{200 + t}\\text{ (g/L)}$ (đpcm).',
          'Bước 3: (b) Khi $t \\to \\infty$: $\\lim_{t \\to \\infty} C(t) = \\lim_{t \\to \\infty} \\frac{30t}{200 + t} = \\lim_{t \\to \\infty} \\frac{30}{200/t + 1} = 30\\text{ (g/L)}$.'
        ],
        finalAnswer: '(a) $C(t) = \\frac{750t}{5000+25t} = \\frac{30t}{200+t}$; (b) Tiến tới $30\\text{ g/L}$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Về mặt vật lý, khi bơm nước muối $30\\text{ g/L}$ mãi mãi ($t \\to \\infty$), lượng nước tinh khiết ban đầu trở nên không đáng kể nên nồng độ tiến về $30\\text{ g/L}$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: (a) Rút gọn $\\frac{750t}{5000 + 25t} = \\frac{30t}{200 + t}$.',
          'Bước 2: (b) Khi $t \\to \\infty$, mẫu số $200 + t \\to \\infty$.',
          'Bước 3: Suy ra nồng độ $C(t)$ tiến về $0\\text{ g/L}$.'
        ],
        finalAnswer: '(b) Tiến tới $0\\text{ g/L}$',
        isCorrect: false,
        wrongStep: 3,
        explanation: 'Sai ở Bước 3! Cả tử số $30t$ và mẫu số $200 + t$ đều bậc 1 theo $t$, nên giới hạn khi $t \\to \\infty$ bằng tỉ số hệ số bậc nhất là $\\frac{30}{1} = 30$ chứ không phải $0$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: (a) Ta có $C(t) = \\frac{30t}{200 + t}$.',
          'Bước 2: (b) Khi $t \\to \\infty$, lấy tỉ số hệ số đầu của tử và mẫu là $\\frac{30}{200}$.',
          'Bước 3: Vậy nồng độ tiến tới $\\frac{3}{20} = 0.15\\text{ g/L}$.'
        ],
        finalAnswer: '(b) Tiến tới $0.15\\text{ g/L}$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Ở mẫu số $200 + t$, hệ số của bậc cao nhất ($t^1$) là $1$ chứ không phải hằng số $200$.'
      }
    ]
  },
  {
    id: 'b2-18',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Dễ',
    title: 'Bài 18 (Buổi 2): Vận tốc hòn đá ném trên bề mặt Sao Hỏa',
    problem: 'Một hòn đá được ném thẳng đứng lên trên bề mặt sao Hỏa với vận tốc ban đầu $10\\text{ m/s}$. Độ cao sau $t$ giây được cho bởi $H(t) = 10t - 1.86t^2$.\n(a) Tìm vận tốc của hòn đá sau $1$ giây.\n(b) Tìm vận tốc của hòn đá tại thời điểm $t = a$.\n(c) Hòn đá sẽ rơi xuống mặt đất sau bao lâu?\n(d) Vận tốc của hòn đá khi chạm đất là bao nhiêu?',
    hint: 'Vận tốc tức thời là đạo hàm của độ cao theo thời gian: $v(t) = H\'(t) = 10 - 3.72t$. Hòn đá chạm đất khi độ cao $H(t) = 0$ (với $t > 0$).',
    errorCategory: 'Quên nhân 2 khi đạo hàm -1.86t^2 hoặc lấy vận tốc trung bình thay vì vận tốc tức thời',
    keyTakeaway: 'Vận tốc tức thời v(t) = H\'(t) = 10 - 3.72t. Khi chạm đất, vận tốc có cùng độ lớn với vận tốc ném lên nhưng ngược chiều: v = -10 m/s!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: (a & b) Vận tốc tại thời điểm $t = a$ là $v(a) = H\'(a) = \\lim_{h \\to 0} \\frac{H(a+h) - H(a)}{h} = 10 - 2(1.86)a = 10 - 3.72a\\text{ (m/s)}$. Tại $t = 1\\text{ s}$, vận tốc là $v(1) = 10 - 3.72(1) = 6.28\\text{ m/s}$.',
          'Bước 2: (c) Hòn đá chạm đất khi $H(t) = 0$ ($t > 0$) $\\Leftrightarrow t(10 - 1.86t) = 0 \\Rightarrow t = \\frac{10}{1.86} = \\frac{500}{93} \\approx 5.38\\text{ giây}$.',
          'Bước 3: (d) Thay thời điểm chạm đất $t = \\frac{10}{1.86}$ vào công thức vận tốc: $v\\left(\\frac{10}{1.86}\\right) = 10 - 3.72 \\cdot \\frac{10}{1.86} = 10 - 20 = -10\\text{ m/s}$.'
        ],
        finalAnswer: '(a) $6.28\\text{ m/s}$; (b) $10 - 3.72a\\text{ m/s}$; (c) $\\approx 5.38\\text{ s}$; (d) $-10\\text{ m/s}$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Dấu trừ trong $-10\\text{ m/s}$ ở câu (d) thể hiện lúc chạm đất hòn đá đang chuyển động đi xuống.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: (a) Tính độ cao tại $t = 1$: $H(1) = 10(1) - 1.86(1)^2 = 8.14\\text{ m/s}$.',
          'Bước 2: (b) $v(a) = 10 - 1.86a$.',
          'Bước 3: (c) $t \\approx 5.38\\text{ s}$ và (d) vận tốc khi chạm đất bằng $0\\text{ m/s}$.'
        ],
        finalAnswer: '(a) $8.14\\text{ m/s}$; (b) $10 - 1.86a$; (c) $5.38\\text{ s}$; (d) $0\\text{ m/s}$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở cả 3 bước! $H(1) = 8.14\\text{ m}$ là độ cao (hay vận tốc trung bình trên $[0,1]$), không phải vận tốc tức thời; và ngay khoảnh khắc chạm đất vận tốc là $-10\\text{ m/s}$ (tại đỉnh cao nhất vận tốc mới bằng $0$).'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: (a) $v(1) = 6.28\\text{ m/s}$; (b) $v(a) = 10 - 3.72a\\text{ m/s}$.',
          'Bước 2: (c) Cho $v(t) = 0 \\Leftrightarrow 10 - 3.72t = 0 \\Rightarrow t = \\frac{10}{3.72} \\approx 2.69\\text{ s}$ là lúc chạm đất.',
          'Bước 3: (d) Thay vào được vận tốc chạm đất bằng $0$.'
        ],
        finalAnswer: '(c) Chạm đất sau $2.69\\text{ s}$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! $v(t) = 0$ ($t \\approx 2.69\\text{ s}$) là thời điểm hòn đá lên tới ĐỈNH CAO NHẤT. Thời điểm rơi chạm đất phải gấp đôi thời gian lên đỉnh: $H(t) = 0 \\Rightarrow t \\approx 5.38\\text{ s}$!'
      }
    ]
  },
  {
    id: 'b2-19',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Dễ',
    title: 'Bài 19 (Buổi 2): Tốc độ tăng trưởng trung bình và tức thời của chuỗi cà phê',
    problem: 'Số lượng $N$ của các cửa hàng trong một chuỗi cà phê nổi tiếng được cho trong bảng sau (tính đến ngày 1 tháng 10):<table class="data-table"><thead><tr><th>Năm</th><th>Số cửa hàng $N$</th></tr></thead><tbody><tr><td>2008</td><td>16,680</td></tr><tr><td>2010</td><td>16,858</td></tr><tr><td>2012</td><td>18,066</td></tr><tr><td>2014</td><td>21,366</td></tr><tr><td>2016</td><td>25,085</td></tr></tbody></table>(a) Tính tốc độ tăng trưởng trung bình: (i) từ 2008 đến 2010, (ii) từ 2010 đến 2012 (nêu đơn vị).\n(b) Ước lượng tốc độ tăng trưởng tức thời vào năm 2010 bằng trung bình cộng hai tốc độ trên.',
    hint: 'Tốc độ thay đổi trung bình trên $[t_1, t_2]$ là $\\frac{\\Delta N}{\\Delta t} = \\frac{N(t_2) - N(t_1)}{t_2 - t_1}$. Chú ý khoảng thời gian từ 2008 đến 2010 là $2$ năm!',
    errorCategory: 'Quên chia cho khoảng thời gian Δt = 2 năm khi tính tốc độ tăng trưởng trung bình',
    keyTakeaway: 'Tốc độ thay đổi trung bình = ΔN / Δt (đơn vị: cửa hàng/năm). Để ước lượng đạo hàm N\'(2010) từ bảng số liệu rời rạc, ta lấy trung bình cộng tốc độ đoạn liền trước và đoạn liền sau!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: (a)(i) Từ 2008 đến 2010: $\\frac{N(2010) - N(2008)}{2010 - 2008} = \\frac{16858 - 16680}{2} = \\frac{178}{2} = 89$ (cửa hàng/năm).',
          'Bước 2: (a)(ii) Từ 2010 đến 2012: $\\frac{N(2012) - N(2010)}{2012 - 2010} = \\frac{18066 - 16858}{2} = \\frac{1208}{2} = 604$ (cửa hàng/năm). Kết luận: Giai đoạn 2010–2012 chuỗi mở rộng nhanh gấp gần 7 lần giai đoạn 2008–2010.',
          'Bước 3: (b) Ước lượng tốc độ tăng trưởng tức thời năm 2010: $N\'(2010) \\approx \\frac{89 + 604}{2} = 346.5$ (cửa hàng/năm) (xấp xỉ hệ số góc cát tuyến nối 2008 và 2012).'
        ],
        finalAnswer: '(a)(i) $89$ cửa hàng/năm; (ii) $604$ cửa hàng/năm; (b) $346.5$ cửa hàng/năm',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Cả con số lẫn đơn vị "cửa hàng/năm" đều chuẩn xác.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: (a)(i) Lấy $16858 - 16680 = 178$ cửa hàng/năm.',
          'Bước 2: (a)(ii) Lấy $18066 - 16858 = 1208$ cửa hàng/năm.',
          'Bước 3: (b) Trung bình cộng là $\\frac{178 + 1208}{2} = 693$ cửa hàng/năm.'
        ],
        finalAnswer: '(a)(i) $178$; (ii) $1208$; (b) $693$ cửa hàng/năm',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1 và 2! Khoảng cách giữa các mốc năm trong bảng là $\\Delta t = 2010 - 2008 = 2$ năm, bạn quên chia cho $2$ rồi!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: (a)(i) $89$ cửa hàng/năm; (ii) $604$ cửa hàng/năm.',
          'Bước 2: (b) Lấy hiệu hai tốc độ $\\frac{604 - 89}{2} = 257.5$ cửa hàng/năm.',
          'Bước 3: Kết luận $257.5$ cửa hàng/năm.'
        ],
        finalAnswer: '(b) $257.5$ cửa hàng/năm',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Để lấy trung bình cộng hai tốc độ trung bình, ta phải CỘNG lại chia đôi: $\\frac{89 + 604}{2} = 346.5$.'
      }
    ]
  },
  {
    id: 'b2-20',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Trung bình',
    title: 'Bài 20 (Buổi 2): Kiểm tra đạo hàm f\'(0) có tồn tại không với f(x) = x sin(1/x)',
    problem: 'Kiểm tra xem $f\'(0)$ có tồn tại hay không đối với hàm số:\n$$f(x) = \\begin{cases} x \\sin\\left(\\frac{1}{x}\\right) & \\text{nếu } x \\neq 0 \\\\ 0 & \\text{nếu } x = 0 \\end{cases}$$',
    hint: 'Tại điểm ghép $x = 0$, BẮT BUỘC phải dùng định nghĩa đạo hàm: $f\'(0) = \\lim_{h \\to 0} \\frac{f(0+h) - f(0)}{h} = \\lim_{h \\to 0} \\frac{h \\sin(1/h)}{h} = \\lim_{h \\to 0} \\sin\\left(\\frac{1}{h}\\right)$.',
    errorCategory: 'Nhầm lẫn giữa tính liên tục của x sin(1/x) và tính khả vi tại x = 0',
    keyTakeaway: 'Hàm f(x) = x·sin(1/x) LIÊN TỤC tại x = 0, nhưng KHÔNG CÓ ĐẠO HÀM tại x = 0 vì tỉ số sai phân f(h)/h = sin(1/h) dao động liên tục giữa -1 và 1 khi h → 0! (Muốn khả vi tại 0 thì phải là x²·sin(1/x)).',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Áp dụng định nghĩa đạo hàm tại $x = 0$: $f\'(0) = \\lim_{h \\to 0} \\frac{f(0 + h) - f(0)}{h} = \\lim_{h \\to 0} \\frac{h \\sin(1/h) - 0}{h}$.',
          'Bước 2: Rút gọn $h \\neq 0$ ở tử và mẫu, ta được $f\'(0) = \\lim_{h \\to 0} \\sin\\left(\\frac{1}{h}\\right)$.',
          'Bước 3: Khi $h \\to 0$, $\\frac{1}{h} \\to \\pm\\infty$ làm $\\sin(1/h)$ dao động vô hạn lần giữa $-1$ và $1$ mà không tiến về một số cố định nào. Vậy $f\'(0)$ KHÔNG TỒN TẠI.'
        ],
        finalAnswer: '$f\'(0)$ không tồn tại (vì $\\lim_{h \\to 0} \\sin(1/h)$ không tồn tại)',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Đây là ví dụ kinh điển về một hàm số liên tục tại $x = 0$ nhưng không khả vi tại $x = 0$.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Ta có $-|x| \\le x \\sin(1/x) \\le |x|$, theo định lý kẹp $\\lim_{x \\to 0} f(x) = 0 = f(0)$.',
          'Bước 2: Vì hàm số liên tục tại $x = 0$ và nhận giá trị $f(0) = 0$.',
          'Bước 3: Đạo hàm của $0$ bằng $0$, nên $f\'(0) = 0$.'
        ],
        finalAnswer: '$f\'(0) = 0$',
        isCorrect: false,
        wrongStep: 3,
        explanation: 'Sai ở Bước 3! Liên tục tại $x = 0$ không suy ra khả vi tại $x = 0$, và không được lấy đạo hàm của giá trị điểm $f(0) = 0$!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Theo định nghĩa đạo hàm: $f\'(0) = \\lim_{h \\to 0} \\frac{h \\sin(1/h)}{h} = \\lim_{h \\to 0} \\sin\\left(\\frac{1}{h}\\right)$.',
          'Bước 2: Áp dụng công thức giới hạn lượng giác cơ bản $\\lim \\frac{\\sin u}{u} = 1$.',
          'Bước 3: Kết luận $f\'(0) = 1$.'
        ],
        finalAnswer: '$f\'(0) = 1$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Biểu thức còn lại chỉ là $\\sin(1/h)$ chứ không phải $\\frac{\\sin u}{u}$, và $\\frac{1}{h} \\to \\infty$ chứ không tiến về $0$.'
      }
    ]
  },
  {
    id: 'b2-21',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Dễ',
    title: 'Bài 21 (Buổi 2): Đọc đạo hàm f\'(x) và phác thảo đồ thị f\' từ đồ thị y = f(x)',
    problem: 'Dựa vào đồ thị sau của hàm số $y = f(x)$ để tính (ước lượng) các đạo hàm $f\'(0), f\'(1), f\'(2), \\dots, f\'(7)$ và vẽ đồ thị của $f\'$:<img src="./images/bai21.png" alt="Đồ thị Bài 21" class="problem-graph-img" />',
    hint: '$f\'(x)$ chính là HỆ SỐ GÓC (độ dốc) của tiếp tuyến với đồ thị $y = f(x)$ tại hoành độ $x$: tại đỉnh/đáy nằm ngang thì $f\'(x) = 0$; đồ thị đi lên thì $f\'(x) > 0$; đồ thị đi xuống thì $f\'(x) < 0$!',
    errorCategory: 'Đọc tung độ f(x) thay vì đọc độ dốc tiếp tuyến f\'(x) trên đồ thị',
    keyTakeaway: 'Khi nhìn đồ thị f(x) để tìm f\'(x): Đỉnh cực đại & Đáy cực tiểu luôn có tiếp tuyến nằm ngang (f\' = 0); nhánh đi lên có f\' > 0; nhánh đi xuống có f\' < 0!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Tại $x = 1$ (đỉnh cực đại) và $x = 5$ (đáy cực tiểu), tiếp tuyến nằm ngang nên chắc chắn $f\'(1) = 0$ và $f\'(5) = 0$.',
          'Bước 2: Tại $x = 0$, đồ thị đang đi lên với độ dốc khoảng $f\'(0) \\approx 0.5$. Trên khoảng $(1, 5)$, đồ thị đi xuống nên đạo hàm âm: $f\'(2) \\approx -1$, $f\'(3) \\approx -1.8$ (dốc nhất), $f\'(4) \\approx -1$.',
          'Bước 3: Với $x > 5$, đồ thị đi lên trở lại nên đạo hàm dương: $f\'(6) \\approx 1$, $f\'(7) \\approx 0.8$. Phác thảo đồ thị $y = f\'(x)$:<img src="./images/bai21_sol.svg" alt="Đồ thị đạo hàm f\'" class="problem-graph-img" />'
        ],
        finalAnswer: '$f\'(1) = 0, f\'(5) = 0$; $f\'(x) < 0$ trên $(1, 5)$ (thấp nhất tại $x=3$); $f\'(x) > 0$ tại $x=0, 6, 7$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Nắm vững mối liên hệ giữa chiều biến thiên của $f(x)$ và dấu của $f\'(x)$ giúp phác thảo đồ thị $f\'$ ngay lập tức.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Đọc trực tiếp tung độ $y$ của đồ thị tại các điểm $x = 1$ và $x = 5$.',
          'Bước 2: Tại $x = 1$ đồ thị cao nhất nên $f\'(1) \\approx 2.2$ đạt giá trị lớn nhất; tại $x = 3$ đồ thị cắt trục hoành nên $f\'(3) = 0$.',
          'Bước 3: Tại $x = 5$ đồ thị thấp nhất nên $f\'(5) \\approx -1.5$.'
        ],
        finalAnswer: '$f\'(1) \\approx 2.2, \\; f\'(3) = 0, \\; f\'(5) \\approx -1.5$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai căn bản ở Bước 1 và 2! Bạn đang đọc giá trị hàm số $f(x)$ chứ không phải đạo hàm $f\'(x)$. Tại đỉnh $x = 1$ tiếp tuyến nằm ngang nên $f\'(1) = 0$, còn tại $x = 3$ đồ thị đang lao xuống dốc nhất nên $f\'(3) < 0$ đạt cực tiểu!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Tại $x = 1$ và $x = 5$ có tiếp tuyến ngang nên $f\'(1) = 0, f\'(5) = 0$.',
          'Bước 2: Trên khoảng $(1, 5)$ đồ thị đi xuống nên $f\'(x) > 0$.',
          'Bước 3: Trên khoảng $(5, 7)$ đồ thị đi lên nên $f\'(x) < 0$.'
        ],
        finalAnswer: '$f\'(x) > 0$ trên $(1, 5)$ và $f\'(x) < 0$ trên $(5, 7)$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ngược dấu ở Bước 2 và 3! Đồ thị đi xuống (hàm nghịch biến) thì hệ số góc tiếp tuyến $f\'(x) < 0$, còn đi lên (đồng biến) thì $f\'(x) > 0$.'
      }
    ]
  },
  {
    id: 'b2-22a',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Dễ',
    title: 'Bài 22 a, b, c, d, e, f, j (Buổi 2): Đạo hàm và miền xác định của các hàm đa thức',
    problem: 'Tính đạo hàm và tìm miền xác định của hàm số lẫn đạo hàm (Bài 22a–f, j):\n(a) $f(x) = 3x - 8$ $\\quad$ (b) $f(x) = mx + b$ $\\quad$ (c) $f(t) = 2.5t^2 + 6t$\n(d) $f(x) = 4 + 8x - 5x^2$ $\\quad$ (e) $A(p) = 4p^3 + 3p$ $\\quad$ (f) $F(t) = t^3 - 5t + 1$ $\\quad$ (j) $f(x) = x^4$',
    hint: 'Mọi hàm đa thức đều có miền xác định là toàn bộ trục số thực $\\mathbb{R} = (-\\infty, \\infty)$, và đạo hàm của chúng cũng có miền xác định là $\\mathbb{R}$!',
    errorCategory: 'Đạo hàm sai hệ số bậc 2, bậc 3 hoặc quên đạo hàm hằng số bằng 0',
    keyTakeaway: 'Với hàm đa thức bất kỳ: Miền xác định của f và của f\' đều là R = (-∞, ∞). Công thức: (x^n)\' = n·x^(n-1), hằng số đạo hàm bằng 0!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Các hàm bậc nhất (a) $f\'(x) = 3$; (b) $f\'(x) = m$. Các hàm bậc hai (c) $f\'(t) = 5t + 6$; (d) $f\'(x) = 8 - 10x$.',
          'Bước 2: Các hàm bậc ba và bậc bốn: (e) $A\'(p) = 12p^2 + 3$; (f) $F\'(t) = 3t^2 - 5$; (j) $f\'(x) = 4x^3$.',
          'Bước 3: Vì tất cả đều là hàm đa thức nên miền xác định của mọi hàm số trên và miền xác định của các đạo hàm của chúng đều là $(-\\infty, \\infty)$ (tức $\\mathbb{R}$).'
        ],
        finalAnswer: '(a) $3$; (b) $m$; (c) $5t+6$; (d) $8-10x$; (e) $12p^2+3$; (f) $3t^2-5$; (j) $4x^3$. MXĐ đều là $\\mathbb{R}$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Cả 7 đạo hàm và miền xác định $\\mathbb{R}$ đều hoàn toàn chuẩn xác.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: (a) $f\'(x) = 3 - 8 = -5$; (b) $f\'(x) = m + b$.',
          'Bước 2: (c) $f\'(t) = 5t + 6$; (d) $f\'(x) = 4 + 8 - 10x = 12 - 10x$.',
          'Bước 3: (e) $12p^2 + 3$; (f) $3t^2 - 5 + 1$; (j) $4x^3$.'
        ],
        finalAnswer: '(a) $-5$; (b) $m+b$; (d) $12-10x$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1 và 2! Đạo hàm của các hằng số tự do ($-8, b, 4, 1$) phải bằng $0$ chứ không được giữ nguyên!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Tính đúng đạo hàm các câu (a) $3$, (b) $m$, (c) $5t+6$, (d) $8-10x$, (e) $12p^2+3$, (f) $3t^2-5$, (j) $4x^3$.',
          'Bước 2: Ở câu (f), vì $F\'(t) = 3t^2 - 5 = 0$ tại $t = \\pm\\sqrt{5/3}$.',
          'Bước 3: Nên miền xác định của $F\'(t)$ là $\\mathbb{R} \\setminus \\{\\pm\\sqrt{5/3}\\}$.'
        ],
        finalAnswer: 'MXĐ của $F\'(t)$ ở câu (f) là $\\mathbb{R} \\setminus \\{\\pm\\sqrt{5/3}\\}$',
        isCorrect: false,
        wrongStep: 3,
        explanation: 'Sai ở Bước 3! Đạo hàm bằng $0$ vẫn là một giá trị thực hoàn toàn xác định, không phải mẫu số bằng $0$, nên miền xác định của $F\'(t)$ vẫn là toàn bộ $\\mathbb{R}$.'
      }
    ]
  },
  {
    id: 'b2-22b',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Trung bình',
    title: 'Bài 22 g, h, i (Buổi 2): Đạo hàm và miền xác định của các hàm phân thức',
    problem: 'Tính đạo hàm và tìm miền xác định của hàm số và của đạo hàm (Bài 22g, h, i):\n(g) $f(x) = \\frac{1}{x^2 - 4}$ $\\quad$ (h) $F(v) = \\frac{v}{v + 2}$ $\\quad$ (i) $g(u) = \\frac{u + 1}{4u - 1}$',
    hint: 'Áp dụng $\\left(\\frac{1}{v}\\right)\' = -\\frac{v\'}{v^2}$ và $\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}$ (hoặc định nghĩa giới hạn). Miền xác định là tập hợp mọi giá trị làm cho mẫu số khác $0$!',
    errorCategory: 'Sai dấu trên tử số khi tính đạo hàm hàm phân thức hoặc quên loại nghiệm của mẫu khỏi miền xác định',
    keyTakeaway: 'Mẹo nhẩm nhanh đạo hàm bậc nhất trên bậc nhất: ((ax+b)/(cx+d))\' = (a·d - b·c) / (cx+d)². Miền xác định của cả hàm và đạo hàm là mẫu khác 0!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: (g) $f\'(x) = \\lim_{h \\to 0} \\frac{\\frac{1}{(x+h)^2-4} - \\frac{1}{x^2-4}}{h} = \\frac{-(x^2 - 4)\'}{(x^2 - 4)^2} = \\frac{-2x}{(x^2 - 4)^2}$. Miền xác định của $f$ và $f\'$ đều là $x \\neq \\pm 2$, tức $(-\\infty, -2) \\cup (-2, 2) \\cup (2, \\infty)$.',
          'Bước 2: (h) $F\'(v) = \\frac{1(v + 2) - v(1)}{(v + 2)^2} = \\frac{2}{(v + 2)^2}$. Miền xác định của $F$ và $F\'$ đều là $v \\neq -2$, tức $(-\\infty, -2) \\cup (-2, \\infty)$.',
          'Bước 3: (i) $g\'(u) = \\frac{1(4u - 1) - (u + 1)(4)}{(4u - 1)^2} = \\frac{4u - 1 - 4u - 4}{(4u - 1)^2} = \\frac{-5}{(4u - 1)^2}$. Miền xác định của $g$ và $g\'$ đều là $u \\neq \\frac{1}{4}$.'
        ],
        finalAnswer: '(g) $\\frac{-2x}{(x^2-4)^2}$ ($x \\neq \\pm 2$); (h) $\\frac{2}{(v+2)^2}$ ($v \\neq -2$); (i) $\\frac{-5}{(4u-1)^2}$ ($u \\neq \\frac{1}{4}$)',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Cả 3 đạo hàm và điều kiện mẫu khác $0$ đều được tính rất cẩn thận.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: (g) $f\'(x) = \\frac{2x}{(x^2 - 4)^2}$ (quên dấu trừ của công thức $(-1/v^2)v\'$).',
          'Bước 2: (h) $F\'(v) = \\frac{v - (v + 2)}{(v + 2)^2} = \\frac{-2}{(v + 2)^2}$.',
          'Bước 3: (i) $g\'(u) = \\frac{4u - 1 - 4u + 4}{(4u - 1)^2} = \\frac{3}{(4u - 1)^2}$.'
        ],
        finalAnswer: '(g) $\\frac{2x}{(x^2-4)^2}$; (h) $\\frac{-2}{(v+2)^2}$; (i) $\\frac{3}{(4u-1)^2}$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai dấu ở cả 3 câu! Ở (g) thiếu dấu trừ; ở (h) lấy ngược $uv\' - u\'v$; ở (i) khi phá ngoặc $-(u+1)\\cdot 4 = -4u - 4$ chứ không phải $-4u + 4$.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Tính đúng đạo hàm (g) $\\frac{-2x}{(x^2-4)^2}$, (h) $\\frac{2}{(v+2)^2}$, (i) $\\frac{-5}{(4u-1)^2}$.',
          'Bước 2: Ở câu (g), mẫu số $x^2 - 4 \\neq 0 \\Rightarrow x \\neq 2$.',
          'Bước 3: Kết luận miền xác định của câu (g) là $\\mathbb{R} \\setminus \\{2\\}$.'
        ],
        finalAnswer: 'Câu (g) có MXĐ là $\\mathbb{R} \\setminus \\{2\\}$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Phương trình $x^2 - 4 = 0$ có HAI nghiệm là $x = 2$ và $x = -2$, bạn đã bỏ sót điểm $x = -2$!'
      }
    ]
  },
  {
    id: 'b2-22c',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Khó',
    title: 'Bài 22 k, l (Buổi 2): Bẫy miền xác định bị thu hẹp khi lấy đạo hàm hàm căn thức!',
    problem: 'Tính đạo hàm và xác định miền xác định của hàm số và của đạo hàm (Bài 22k, l):\n(k) $f(x) = \\frac{1}{\\sqrt{1 + x}}$ $\\qquad$ (l) $g(x) = \\frac{1}{1 + \\sqrt{x}}$',
    hint: 'Cẩn thận câu (l): Hàm $g(x) = \\frac{1}{1 + \\sqrt{x}}$ xác định tại $x = 0$ (vì $g(0) = 1$), tức $D_g = [0, \\infty)$. Nhưng trong đạo hàm $g\'(x)$ xuất hiện $\\sqrt{x}$ ở mẫu số nên tại $x = 0$ đạo hàm KHÔNG xác định ($D_{g\'} = (0, \\infty)$)!',
    errorCategory: 'Quên loại bỏ điểm đầu mút x = 0 khỏi miền xác định của đạo hàm g\'(x) khi có √x ở mẫu',
    keyTakeaway: 'Siêu bẫy ở câu 22(l): g(x) = 1/(1 + √x) có MXĐ là [0, +∞) (lấy cả số 0), nhưng đạo hàm g\'(x) = -1 / [2√x(1 + √x)²] có √x dưới mẫu nên MXĐ của g\' chỉ là (0, +∞) (không lấy số 0)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: (k) Viết $f(x) = (1 + x)^{-1/2}$. Đạo hàm $f\'(x) = -\\frac{1}{2}(1 + x)^{-3/2} = -\\frac{1}{2(1 + x)\\sqrt{1 + x}}$. Vì $\\sqrt{1+x}$ nằm ở mẫu nên cả $f$ và $f\'$ đều có cùng miền xác định là $1 + x > 0 \\Leftrightarrow x \\in (-1, \\infty)$.',
          'Bước 2: (l) Với $g(x) = \\frac{1}{1 + \\sqrt{x}}$, vì $1 + \\sqrt{x} \\ge 1 > 0$ nên $g(x)$ xác định khi $x \\ge 0 \\Rightarrow$ Miền xác định của $g$ là $[0, \\infty)$.',
          'Bước 3: Đạo hàm $g\'(x) = -\\frac{(1 + \\sqrt{x})\'}{(1 + \\sqrt{x})^2} = -\\frac{1}{2\\sqrt{x}(1 + \\sqrt{x})^2}$. Do có $\\sqrt{x}$ ở mẫu số nên $g\'(x)$ đòi hỏi $x > 0 \\Rightarrow$ Miền xác định của $g\'$ là $(0, \\infty)$ (bị mất điểm $x = 0$).'
        ],
        finalAnswer: '(k) $f\'(x) = -\\frac{1}{2(1+x)^{3/2}}$, MXĐ $f, f\'$: $(-1, \\infty)$; (l) $g\'(x) = -\\frac{1}{2\\sqrt{x}(1+\\sqrt{x})^2}$, MXĐ $g$: $[0, \\infty)$, MXĐ $g\'$: $(0, \\infty)$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Tuyệt vời! Phát hiện ra sự khác biệt giữa $[0, \\infty)$ của $g$ và $(0, \\infty)$ của $g\'$ ở câu (l) là điểm ăn tiền tuyệt đối.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: (k) $f\'(x) = -\\frac{1}{2(1+x)^{3/2}}$, miền xác định của $f$ và $f\'$ là $[-1, \\infty)$.',
          'Bước 2: (l) $g\'(x) = -\\frac{1}{2\\sqrt{x}(1+\\sqrt{x})^2}$.',
          'Bước 3: Miền xác định của cả $g$ và $g\'$ đều là $[0, \\infty)$.'
        ],
        finalAnswer: 'MXĐ của (k) là $[-1, \\infty)$, MXĐ của $g\'$ ở (l) là $[0, \\infty)$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1 và 3! Ở câu (k), tại $x = -1$ mẫu số $\\sqrt{1+x} = 0$ nên không lấy đầu mút $-1$. Ở câu (l), tại $x = 0$ mẫu số của $g\'(x)$ chứa $2\\sqrt{x} = 0$ nên $g\'(0)$ không tồn tại!'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: (k) Đạo hàm của $\\sqrt{1+x}$ là $\\frac{1}{2\\sqrt{1+x}}$, nên đạo hàm của $\\frac{1}{\\sqrt{1+x}}$ là $\\frac{1}{\\frac{1}{2\\sqrt{1+x}}} = 2\\sqrt{1+x}$.',
          'Bước 2: (l) Đạo hàm từng số hạng dưới mẫu: $g\'(x) = \\frac{1}{0 + \\frac{1}{2\\sqrt{x}}} = 2\\sqrt{x}$.',
          'Bước 3: Miền xác định là $(0, \\infty)$.'
        ],
        finalAnswer: '(k) $2\\sqrt{1+x}$; (l) $2\\sqrt{x}$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai nặng công thức ở Bước 1 và 2! Đạo hàm của $\\frac{1}{v}$ là $-\\frac{v\'}{v^2}$ chứ tuyệt đối không phải $\\frac{1}{v\'}$!'
      }
    ]
  },
  {
    id: 'b2-23',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Dễ',
    title: 'Bài 23 (Buổi 2): Ý nghĩa đạo hàm N\'(t), bảng ước lượng và đồ thị ca phẫu thuật thẩm mỹ',
    problem: 'Bảng sau cho biết số lượng $N(t)$, tính bằng nghìn, của các ca phẫu thuật thẩm mỹ xâm lấn tối thiểu tại Hoa Kỳ:<table class="data-table"><thead><tr><th>Năm $t$</th><th>$N(t)$ (nghìn)</th></tr></thead><tbody><tr><td>2000</td><td>5,500</td></tr><tr><td>2002</td><td>4,897</td></tr><tr><td>2004</td><td>7,470</td></tr><tr><td>2006</td><td>9,138</td></tr><tr><td>2008</td><td>10,897</td></tr><tr><td>2010</td><td>11,561</td></tr><tr><td>2012</td><td>13,035</td></tr><tr><td>2014</td><td>13,945</td></tr></tbody></table>(a) Ý nghĩa của $N\'(t)$ là gì? Đơn vị của nó là gì?\n(b) Lập bảng giá trị ước lượng cho $N\'(t)$.\n(c) Vẽ đồ thị $N$ và $N\'$.\n(d) Làm thế nào để có được các giá trị chính xác hơn cho $N\'(t)$?',
    hint: 'Đơn vị của đạo hàm $N\'(t) = \\frac{dN}{dt}$ là đơn vị của $N$ chia cho đơn vị của $t$: "nghìn ca phẫu thuật / năm". Để ước lượng chính xác hơn, ta cần thu thập dữ liệu với khoảng thời gian $\\Delta t$ nhỏ hơn (hàng năm, hàng quý, hàng tháng)!',
    errorCategory: 'Nêu thiếu chữ "nghìn" trong đơn vị của N\'(t) hoặc tính sai tỉ số sai phân',
    keyTakeaway: 'Đơn vị của đạo hàm y\'(t) luôn là (Đơn vị của y) / (Đơn vị của t). Muốn ước lượng đạo hàm từ bảng số liệu chính xác hơn, ta phải đo số liệu ở các mốc thời gian dày hơn (Δt → 0)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: (a) $N\'(t)$ biểu thị tốc độ thay đổi tức thời của số ca phẫu thuật theo thời gian $t$. Đơn vị là: nghìn ca phẫu thuật / năm.',
          'Bước 2: (b) Dùng tỉ số sai phân: $N\'(2000) \\approx \\frac{4897 - 5500}{2} = -301.5$; tại các năm giữa dùng trung bình hai phía $\\frac{N(t+2) - N(t-2)}{4}$: $N\'(2002) \\approx 492.5$; $N\'(2004) \\approx 1060.25$; $N\'(2006) \\approx 856.75$; $N\'(2008) \\approx 605.75$; $N\'(2010) \\approx 534.5$; $N\'(2012) \\approx 596$; $N\'(2014) \\approx 455$.',
          'Bước 3: (c) Đồ thị $N(t)$ và $N\'(t)$ như hình dưới. (d) Để có giá trị chính xác hơn cho $N\'(t)$, cần thu thập số liệu thống kê trong các khoảng thời gian nhỏ hơn (ví dụ từng năm một, từng quý hoặc từng tháng).<img src="./images/bai23_sol.svg" alt="Đồ thị N(t) và N\'(t)" class="problem-graph-img" />'
        ],
        finalAnswer: '(a) Tốc độ tăng (nghìn ca/năm); (b) $-301.5; 492.5; 1060.25; \\dots$; (d) Đo dữ liệu với khoảng thời gian $\\Delta t$ nhỏ hơn',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Sử dụng sai phân đối xứng $\\frac{N(t+2)-N(t-2)}{4}$ cho các điểm ở giữa là cách ước lượng chuẩn xác nhất.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: (a) $N\'(t)$ là tổng số ca phẫu thuật đã thực hiện, đơn vị là nghìn ca.',
          'Bước 2: (b) Lấy hiệu số giữa hai năm liên tiếp mà không chia cho khoảng cách năm.',
          'Bước 3: (d) Khảo sát thêm các năm sau 2014 như 2016, 2018.'
        ],
        finalAnswer: '(a) Tổng số ca; (d) Lấy thêm các năm 2016, 2018',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở cả 3 bước! $N\'(t)$ là tốc độ thay đổi (nghìn ca/năm) chứ không phải tổng số ca; và muốn chính xác hơn tại các năm 2000–2014 thì phải chia nhỏ khoảng đo $\\Delta t$ chứ không phải đo năm 2018.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: (a) Đơn vị là năm / nghìn ca.',
          'Bước 2: (b) Tại năm 2002, lấy $\\frac{7470 - 5500}{2} = 985$ (chia cho $2$ thay vì khoảng cách từ 2000 đến 2004 là $4$ năm).',
          'Bước 3: (d) Đo dữ liệu hàng năm.'
        ],
        finalAnswer: '(a) Đơn vị năm/nghìn ca; (b) $N\'(2002) \\approx 985$',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1 và 2! Đơn vị phải là (nghìn ca / năm), và khoảng cách từ năm 2000 đến 2004 là $2004 - 2000 = 4$ năm chứ không phải $2$ năm.'
      }
    ]
  },
  {
    id: 'b2-24',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Trung bình',
    title: 'Bài 24 a, b (Buổi 2): Đạo hàm trái f\'_-(0), đạo hàm phải f\'_+(0) và tính khả vi',
    problem: 'Tìm đạo hàm trái $f\'_-(0)$ và đạo hàm phải $f\'_+(0)$ cho các hàm số sau. Hàm số $f$ có khả vi tại $x = 0$ không?\n(a) $f(x) = \\begin{cases} 0 & \\text{nếu } x \\le 0 \\\\ x & \\text{nếu } x > 0 \\end{cases}$ $\\qquad$ (b) $f(x) = \\begin{cases} 0 & \\text{nếu } x \\le 0 \\\\ x^2 & \\text{nếu } x > 0 \\end{cases}$',
    hint: 'Hàm số khả vi tại $x = 0$ khi và chỉ khi đạo hàm trái BẰNG đạo hàm phải: $f\'_-(0) = f\'_+(0)$. Ở câu (a) đồ thị bị gãy góc tại $0$, còn ở câu (b) nhánh parabol $x^2$ tiếp xúc êm với trục hoành tại $0$!',
    errorCategory: 'Kết luận hàm ghép khả vi tại điểm nối khi chưa kiểm tra đạo hàm trái bằng đạo hàm phải',
    keyTakeaway: 'Muốn có đạo hàm tại x₀ thì đồ thị phải TRƠN (không gãy góc), tức là Đạo hàm Trái = Đạo hàm Phải: ở (a) f\'_-(0) = 0 ≠ f\'_+(0) = 1 (không khả vi); ở (b) f\'_-(0) = 0 = f\'_+(0) (khả vi, f\'(0) = 0)!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: Với cả hai câu (a) và (b), khi $h \\to 0^-$ ($h < 0$) thì $f(h) = 0$ và $f(0) = 0$, nên đạo hàm trái là $f\'_-(0) = \\lim_{h \\to 0^-} \\frac{f(h) - f(0)}{h} = \\lim_{h \\to 0^-} \\frac{0}{h} = 0$.',
          'Bước 2: Ở câu (a), khi $h \\to 0^+$ ($h > 0$) thì $f(h) = h$, nên $f\'_+(0) = \\lim_{h \\to 0^+} \\frac{h - 0}{h} = 1$. Do $f\'_-(0) = 0 \\neq 1 = f\'_+(0)$, hàm (a) KHÔNG khả vi tại $x = 0$.',
          'Bước 3: Ở câu (b), khi $h \\to 0^+$ thì $f(h) = h^2$, nên $f\'_+(0) = \\lim_{h \\to 0^+} \\frac{h^2 - 0}{h} = \\lim_{h \\to 0^+} h = 0$. Do $f\'_-(0) = f\'_+(0) = 0$, hàm (b) KHẢ VI tại $x = 0$ và $f\'(0) = 0$.'
        ],
        finalAnswer: '(a) $f\'_-(0) = 0, f\'_+(0) = 1 \\Rightarrow$ Không khả vi; (b) $f\'_-(0) = f\'_+(0) = 0 \\Rightarrow$ Khả vi ($f\'(0) = 0$)',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Câu (a) có điểm gãy góc tại $(0,0)$ với độ dốc nhảy từ $0$ lên $1$, còn câu (b) có độ dốc hai bên cùng bằng $0$ nên nối trơn tru.'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Cả câu (a) và câu (b) đều liên tục tại $x = 0$ vì $\\lim_{x \\to 0^-} f(x) = \\lim_{x \\to 0^+} f(x) = 0$.',
          'Bước 2: Vì hàm số đã liên tục tại $x = 0$.',
          'Bước 3: Nên cả hai hàm (a) và (b) đều khả vi tại $x = 0$.'
        ],
        finalAnswer: 'Cả (a) và (b) đều khả vi tại $x = 0$',
        isCorrect: false,
        wrongStep: 3,
        explanation: 'Sai ở Bước 3! Liên tục chỉ là điều kiện CẦN, không phải điều kiện đủ để khả vi. Câu (a) liên tục nhưng bị gãy góc tại $x = 0$ nên không khả vi.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Ở câu (b), đạo hàm của $x^2$ là $2x$, hệ số đầu là $1$ nên $f\'_+(0) = 1$.',
          'Bước 2: Đạo hàm trái $f\'_-(0) = 0$.',
          'Bước 3: Vậy cả (a) và (b) đều không khả vi tại $x = 0$.'
        ],
        finalAnswer: 'Ở câu (b), $f\'_+(0) = 1$ nên không khả vi',
        isCorrect: false,
        wrongStep: 1,
        explanation: 'Sai ở Bước 1! Đạo hàm của $x^2$ là $2x$, khi thay $x = 0$ vào thì $2(0) = 0$ chứ không phải $1$.'
      }
    ]
  },
  {
    id: 'b2-25',
    topic: 'buoi_2_bt',
    topicName: 'Phiếu BT Buổi 2 (GT1)',
    difficulty: 'Dễ',
    title: 'Bài 25 (Buổi 2): Phác thảo đồ thị quãng đường s(t) và vận tốc ds/dt của Nick',
    problem: 'Nick bắt đầu chạy chậm rồi nhanh dần trong $3$ phút, sau đó anh đi bộ trong $5$ phút. Anh dừng lại tại một ngã tư trong $2$ phút, rồi chạy khá nhanh trong $5$ phút, sau đó đi bộ trong $4$ phút.\n(a) Mô tả đồ thị của quãng đường $s(t)$ theo thời gian $t$ (từ $t = 0$ đến $t = 19$ phút).\n(b) Mô tả đồ thị vận tốc $v(t) = \\frac{ds}{dt}$.',
    hint: 'Quãng đường đã đi $s(t)$ không bao giờ giảm! Khi chạy nhanh dần thì $s(t)$ cong lên; đi bộ đều thì $s(t)$ là đoạn thẳng dốc vừa; ĐỨNG YÊN thì $s(t)$ NẰM NGANG ($v = 0$); chạy nhanh thì $s(t)$ rất dốc!',
    errorCategory: 'Vẽ đồ thị quãng đường s(t) chạm xuống trục hoành (bằng 0) khi Nick dừng lại tại ngã tư',
    keyTakeaway: 'Bẫy cực hay gặp: Khi Nick DỪNG LẠI ở ngã tư (từ phút 8 đến phút 10), vận tốc ds/dt = 0 (chạm trục hoành), nhưng quãng đường s(t) phải là ĐOẠN THẲNG NẰM NGANG ở độ cao hiện tại chứ không phải rơi về 0!',
    solutions: [
      {
        id: 'sol-1',
        steps: [
          'Bước 1: (a) Đồ thị quãng đường $s(t)$ luôn không giảm trên $[0, 19]$: Từ $t \\in [0, 3]$ (chạy nhanh dần) đồ thị đi lên và ngày càng dốc (lõm lên); từ $t \\in [3, 8]$ (đi bộ 5p) là đoạn thẳng đi lên với độ dốc nhỏ.',
          'Bước 2: Từ $t \\in [8, 10]$ (dừng lại 2p ở ngã tư) quãng đường không đổi nên $s(t)$ là ĐOẠN THẲNG NẰM NGANG; từ $t \\in [10, 15]$ (chạy nhanh 5p) là đoạn thẳng đi lên rất dốc; từ $t \\in [15, 19]$ (đi bộ 4p) là đoạn thẳng đi lên dốc nhẹ.',
          'Bước 3: (b) Đồ thị vận tốc $\\frac{ds}{dt}$: Trên $[0, 3]$ tăng dần từ $0$ lên cao; trên $[3, 8]$ hạ xuống mức thấp dương (tốc độ đi bộ); trên $[8, 10]$ nằm trùng trên trục hoành ($\\frac{ds}{dt} = 0$); trên $[10, 15]$ ở mức cao dương (chạy nhanh); trên $[15, 19]$ hạ về mức thấp dương (đi bộ).<img src="./images/bai25_sol.svg" alt="Đồ thị quãng đường s(t) và vận tốc ds/dt của Nick" class="problem-graph-img" />'
        ],
        finalAnswer: 'Khi dừng lại ($t \\in [8, 10]$): $s(t)$ nằm ngang giữ nguyên độ cao, còn $\\frac{ds}{dt} = 0$',
        isCorrect: true,
        wrongStep: null,
        explanation: 'Chính xác! Phân biệt rõ ràng giữa quãng đường tích lũy $s(t)$ (nằm ngang khi dừng) và vận tốc $\\frac{ds}{dt}$ (bằng $0$ khi dừng).'
      },
      {
        id: 'sol-2',
        steps: [
          'Bước 1: Từ $t = 0$ đến $t = 8$, đồ thị quãng đường $s(t)$ tăng lên.',
          'Bước 2: Từ $t = 8$ đến $t = 10$, vì Nick dừng lại tại ngã tư nên đồ thị quãng đường $s(t)$ tụt thẳng về $0$ trên trục hoành.',
          'Bước 3: Từ $t = 10$ đến $t = 19$ đồ thị lại tăng lên.'
        ],
        finalAnswer: 'Trên $[8, 10]$ đồ thị quãng đường $s(t)$ rơi về $0$',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Nếu $s(t)$ rơi về $0$ nghĩa là Nick chạy lùi tức thời về vạch xuất phát! Khi đứng yên, quãng đường đã đi được giữ nguyên nên $s(t)$ phải nằm ngang.'
      },
      {
        id: 'sol-3',
        steps: [
          'Bước 1: Trên $[10, 15]$ Nick chạy khá nhanh, trên $[15, 19]$ Nick chuyển sang đi bộ chậm hơn.',
          'Bước 2: Vì đi bộ chậm hơn chạy nên trên $[15, 19]$ vận tốc $\\frac{ds}{dt}$ mang dấu âm ($< 0$) và quãng đường $s(t)$ đi xuống.',
          'Bước 3: Phác thảo $s(t)$ đi xuống trên $[15, 19]$.'
        ],
        finalAnswer: 'Trên $[15, 19]$ vận tốc $\\frac{ds}{dt} < 0$ và $s(t)$ đi xuống',
        isCorrect: false,
        wrongStep: 2,
        explanation: 'Sai ở Bước 2! Đi bộ chậm hơn nghĩa là vận tốc $\\frac{ds}{dt}$ nhỏ hơn nhưng VẪN DƯƠNG ($> 0$), quãng đường $s(t)$ vẫn tiếp tục tăng lên nhưng ít dốc hơn!'
      }
    ]
  }
);
