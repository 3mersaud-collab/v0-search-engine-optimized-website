-- Create uploads bucket for WhatsApp images if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('uploads', 'uploads', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access
CREATE POLICY IF NOT EXISTS "Public read uploads" ON storage.objects
  FOR SELECT USING (bucket_id = 'uploads');

-- Allow service role to upload
CREATE POLICY IF NOT EXISTS "Service upload" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'uploads');
