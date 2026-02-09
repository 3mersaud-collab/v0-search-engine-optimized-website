-- Conversations table: stores chat history for website and WhatsApp
CREATE TABLE IF NOT EXISTS public.conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source TEXT NOT NULL CHECK (source IN ('website', 'whatsapp')),
  phone TEXT,
  session_id TEXT,
  customer_name TEXT,
  messages JSONB NOT NULL DEFAULT '[]'::jsonb,
  last_message TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'closed', 'converted')),
  order_id UUID REFERENCES public.orders(id) ON DELETE SET NULL,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Notifications table: admin notifications for new conversations/orders
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL CHECK (type IN ('new_conversation', 'new_order', 'order_update', 'new_message')),
  title TEXT NOT NULL,
  body TEXT,
  is_read BOOLEAN NOT NULL DEFAULT false,
  reference_id UUID,
  reference_type TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_conversations_phone ON public.conversations(phone);
CREATE INDEX IF NOT EXISTS idx_conversations_session ON public.conversations(session_id);
CREATE INDEX IF NOT EXISTS idx_conversations_source ON public.conversations(source);
CREATE INDEX IF NOT EXISTS idx_conversations_status ON public.conversations(status);
CREATE INDEX IF NOT EXISTS idx_conversations_updated ON public.conversations(updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_notifications_unread ON public.notifications(is_read, created_at DESC);

-- RLS policies
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Conversations: anyone can insert (for WhatsApp webhook), auth users can read/update
CREATE POLICY "anyone_insert_conversations" ON public.conversations FOR INSERT WITH CHECK (true);
CREATE POLICY "anyone_select_conversations" ON public.conversations FOR SELECT USING (true);
CREATE POLICY "anyone_update_conversations" ON public.conversations FOR UPDATE USING (true);

-- Notifications: anyone can insert, auth can read/update
CREATE POLICY "anyone_insert_notifications" ON public.notifications FOR INSERT WITH CHECK (true);
CREATE POLICY "anyone_select_notifications" ON public.notifications FOR SELECT USING (true);
CREATE POLICY "anyone_update_notifications" ON public.notifications FOR UPDATE USING (true);

-- Auto-update updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS conversations_updated_at ON public.conversations;
CREATE TRIGGER conversations_updated_at
  BEFORE UPDATE ON public.conversations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();
