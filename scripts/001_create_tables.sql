-- جدول طلبات السيولة
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number TEXT UNIQUE NOT NULL,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  app_type TEXT NOT NULL CHECK (app_type IN ('tabby', 'tamara', 'madfu')),
  purchase_amount NUMERIC(10,2) NOT NULL,
  sale_amount NUMERIC(10,2) NOT NULL DEFAULT 0,
  admin_fee NUMERIC(10,2) NOT NULL DEFAULT 0,
  first_payment NUMERIC(10,2) NOT NULL DEFAULT 0,
  final_amount NUMERIC(10,2) NOT NULL DEFAULT 0,
  remaining_installment NUMERIC(10,2) NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'payment_sent', 'completed', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- جدول آراء العملاء
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  app_used TEXT NOT NULL,
  amount NUMERIC(10,2),
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- تفعيل RLS
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- سياسات الطلبات
CREATE POLICY "anyone_insert_orders" ON orders FOR INSERT WITH CHECK (true);
CREATE POLICY "anyone_select_orders" ON orders FOR SELECT USING (true);
CREATE POLICY "auth_update_orders" ON orders FOR UPDATE USING (auth.uid() IS NOT NULL);
CREATE POLICY "auth_delete_orders" ON orders FOR DELETE USING (auth.uid() IS NOT NULL);

-- سياسات الآراء
CREATE POLICY "anyone_view_approved_reviews" ON reviews FOR SELECT USING (is_approved = true);
CREATE POLICY "anyone_insert_reviews" ON reviews FOR INSERT WITH CHECK (true);
CREATE POLICY "auth_update_reviews" ON reviews FOR UPDATE USING (auth.uid() IS NOT NULL);

-- فهارس
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_number ON orders(order_number);
CREATE INDEX IF NOT EXISTS idx_orders_created ON orders(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_phone ON orders(customer_phone);
CREATE INDEX IF NOT EXISTS idx_reviews_approved ON reviews(is_approved);

-- تحديث تلقائي لـ updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS orders_updated_at ON orders;
CREATE TRIGGER orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
