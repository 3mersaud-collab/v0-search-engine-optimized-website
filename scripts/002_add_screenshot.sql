-- Add screenshot_url column to orders table
ALTER TABLE orders ADD COLUMN IF NOT EXISTS screenshot_url TEXT;
-- Add net_requested column (the amount customer wants to receive)
ALTER TABLE orders ADD COLUMN IF NOT EXISTS net_requested NUMERIC;
-- Add store_name column
ALTER TABLE orders ADD COLUMN IF NOT EXISTS store_name TEXT;
