-- New application question: "How would you like to contribute to the community?"
ALTER TABLE applications ADD COLUMN IF NOT EXISTS contribution TEXT;
