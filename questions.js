// Ngân hàng 40 câu hỏi Giải tích với các lời giải bẫy kinh điển (120 lời giải chi tiết)
window.TOPICS = [
  {
    id: 'all',
    name: 'Tất cả chủ đề',
    icon: '🎯',
    desc: 'Tổng hợp 40 dạng bẫy Giải tích hay gặp nhất'
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
