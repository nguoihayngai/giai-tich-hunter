-- ============================================================================
-- KỊCH BẢN KHỞI TẠO CƠ SỞ DỮ LIỆU SUPABASE CHO "GIẢI TÍCH HUNTER"
-- Cách dùng: Copy toàn bộ nội dung file này -> Dán vào mục "SQL Editor" trên
-- trang quản trị Supabase (https://supabase.com/dashboard) -> Nhấn nút "Run".
-- ============================================================================

-- 1. Bảng lưu Kho Câu Hỏi Chung (questions)
CREATE TABLE IF NOT EXISTS public.questions (
  id TEXT PRIMARY KEY,
  topic TEXT NOT NULL,
  topic_name TEXT NOT NULL,
  difficulty TEXT NOT NULL DEFAULT 'Trung bình',
  title TEXT NOT NULL,
  problem TEXT NOT NULL,
  hint TEXT,
  error_category TEXT,
  key_takeaway TEXT,
  solutions JSONB NOT NULL,
  is_custom_ai BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Bảng lưu Tiến Độ Học Tập Đồng Bộ Đa Thiết Bị (user_progress)
CREATE TABLE IF NOT EXISTS public.user_progress (
  sync_code TEXT PRIMARY KEY,
  xp INTEGER NOT NULL DEFAULT 0,
  streak INTEGER NOT NULL DEFAULT 0,
  last_study_date TEXT,
  total_attempts INTEGER NOT NULL DEFAULT 0,
  correct_attempts INTEGER NOT NULL DEFAULT 0,
  solved_ids JSONB NOT NULL DEFAULT '[]'::jsonb,
  mistake_ids JSONB NOT NULL DEFAULT '[]'::jsonb,
  error_counts JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Bật Row Level Security (RLS) và cấp quyền truy cập qua Anon Key cho Web/Mobile App
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Cho phep doc cau hoi cong khai" ON public.questions;
CREATE POLICY "Cho phep doc cau hoi cong khai"
  ON public.questions FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Cho phep them va cap nhat cau hoi" ON public.questions;
CREATE POLICY "Cho phep them va cap nhat cau hoi"
  ON public.questions FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Cho phep update cau hoi" ON public.questions;
CREATE POLICY "Cho phep update cau hoi"
  ON public.questions FOR UPDATE
  USING (true);

DROP POLICY IF EXISTS "Cho phep doc tien do hoc tap" ON public.user_progress;
CREATE POLICY "Cho phep doc tien do hoc tap"
  ON public.user_progress FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Cho phep luu tien do hoc tap" ON public.user_progress;
CREATE POLICY "Cho phep luu tien do hoc tap"
  ON public.user_progress FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Cho phep cap nhat tien do hoc tap" ON public.user_progress;
CREATE POLICY "Cho phep cap nhat tien do hoc tap"
  ON public.user_progress FOR UPDATE
  USING (true);
