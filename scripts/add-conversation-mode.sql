-- Add mode column to conversations table for bot/manual toggle
ALTER TABLE conversations ADD COLUMN IF NOT EXISTS mode text DEFAULT 'bot';
-- mode values: 'bot' (matar responds automatically), 'manual' (admin responds manually)
