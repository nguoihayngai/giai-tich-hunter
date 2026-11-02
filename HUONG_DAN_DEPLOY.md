# 🚀 HƯỚNG DẪN TẠO DATABASE SUPABASE & ĐẨY WEB LÊN MẠNG MIỄN PHÍ 100%

Bạn không cần thẻ tín dụng hay kiến thức server phức tạp. Chỉ cần làm theo **2 phần** dưới đây (mất khoảng 5 phút):

---

## PHẦN 1: Tạo Cơ Sở Dữ Liệu Supabase (Miễn phí)

### Bước 1: Tạo tài khoản và Project trên Supabase
1. Truy cập **[https://supabase.com](https://supabase.com)** $\rightarrow$ Nhấn **Start your project** (có thể đăng nhập nhanh bằng tài khoản GitHub hoặc Google).
2. Nhấn **New Project**:
   - **Name**: `giai-tich-hunter`
   - **Database Password**: Tự đặt mật khẩu bất kỳ (ví dụ: `GiaiTich123456!`)
   - **Region**: Chọn `Singapore (Southeast Asia)` để tốc độ tại Việt Nam nhanh nhất.
   - Nhấn **Create new project** và đợi khoảng 1 phút để Supabase khởi tạo xong.

### Bước 2: Tạo bảng dữ liệu bằng 1 cú click
1. Ở thanh menu bên trái của Supabase, chọn mục **SQL Editor** (biểu tượng `>_`).
2. Nhấn **+ New query**.
3. Mở file [`supabase_setup.sql`](./supabase_setup.sql) trong thư mục dự án này, **Copy toàn bộ nội dung** và dán vào khung SQL Editor của Supabase.
4. Nhấn nút **Run** (góc dưới bên phải). Khi thấy thông báo `Success. No rows returned` là hai bảng `questions` và `user_progress` đã được tạo xong!

### Bước 3: Lấy URL và Key kết nối vào App
1. Ở thanh menu bên trái của Supabase, vào **Project Settings** (biểu tượng bánh răng ⚙️ ở dưới cùng) $\rightarrow$ chọn mục **API** (hoặc **Data API**).
2. Bạn sẽ thấy 2 thông số:
   - **Project URL**: dạng `https://xxxxxxxxxxxx.supabase.co` $\rightarrow$ Nhấn **Copy**.
   - **Project API Keys (`anon` `public`)**: chuỗi dài bắt đầu bằng `eyJhbGci...` $\rightarrow$ Nhấn **Copy**.
3. Mở ứng dụng **Giải Tích Hunter** $\rightarrow$ Vào tab **📱 App & Hồ Sơ**:
   - Dán **Project URL** và **Anon Public Key** vào 2 ô tương ứng.
   - Nhập **Mã đồng bộ cá nhân** (tự đặt tên bất kỳ, ví dụ: `nguoihayngai`).
   - Nhấn nút **📤 Nạp 40 câu gốc lên DB** để đẩy toàn bộ 40 câu hỏi Giải tích lên đám mây.
   - Nhấn nút **💾 Lưu & Đồng bộ ngay**.

*(Mẹo: Nếu bạn muốn gắn cố định URL và Key vào code trước khi đưa web lên mạng để điện thoại mở ra là tự kết nối luôn không cần nhập lại, hãy dán chúng vào 2 dòng `DEFAULT_URL` và `DEFAULT_ANON_KEY` ở đầu file [`supabase-client.js`](./supabase-client.js)).*

---

## PHẦN 2: Đẩy Web Lên Mạng Internet (Có sẵn HTTPS cài App Android)

Có **2 cách miễn phí 100%**, bạn chọn cách nào thấy tiện nhất:

### Cách A (Dễ nhất – Kéo thả thư mục trong 30 giây với Netlify Drop)
Không cần gõ lệnh hay cài phần mềm:
1. Truy cập **[https://app.netlify.com/drop](https://app.netlify.com/drop)** và đăng ký/đăng nhập miễn phí (bằng Google hoặc Email).
2. Mở trình quản lý file trên máy tính của bạn, tìm đến thư mục `/home/nguoihayngai/Projects/giai-tich-hunter`.
3. **Kéo nguyên thư mục `giai-tich-hunter` thả vào khung trên trang Netlify Drop**.
4. Ngay lập tức, Netlify sẽ cấp cho bạn một đường link HTTPS vĩnh viễn (ví dụ: `https://giaitich-hunter.netlify.app`).
5. Mở link đó bằng Chrome trên điện thoại Android $\rightarrow$ Chọn **Cài đặt ứng dụng (Thêm vào màn hình chính)** là xong!

### Cách B (Đẩy qua GitHub Pages hoặc Vercel để dễ cập nhật)
1. Tạo tài khoản tại **[https://github.com](https://github.com)** $\rightarrow$ Tạo một Repository mới tên là `giai-tich-hunter` (để chế độ Public).
2. Mở Terminal tại thư mục dự án và chạy:
   ```bash
   cd /home/nguoihayngai/Projects/giai-tich-hunter
   git init
   git add .
   git commit -m "Initial commit Giai Tich Hunter PWA"
   git branch -M main
   git remote add origin https://github.com/<TEN_GITHUB_CUA_BAN>/giai-tich-hunter.git
   git push -u origin main
   ```
3. Trên trang GitHub của repo $\rightarrow$ vào mục **Settings** $\rightarrow$ **Pages** $\rightarrow$ tại mục **Branch** chọn `main` rồi nhấn **Save**.
4. Sau 1 phút, web của bạn sẽ chạy tại: `https://<TEN_GITHUB_CUA_BAN>.github.io/giai-tich-hunter/`.
