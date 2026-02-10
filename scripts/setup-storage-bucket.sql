-- Create uploads bucket for WhatsApp images
INSERT INTO storage.buckets (id, name, public)
VALUES ('uploads', 'uploads', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access
DROP POLICY IF EXISTS "Public read uploads" ON storage.objects;
CREATE POLICY "Public read uploads" ON storage.objects
  FOR SELECT USING (bucket_id = 'uploads');

-- Allow service role to upload
DROP POLICY IF EXISTS "Service upload" ON storage.objects;
CREATE POLICY "Service upload" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'uploads');
