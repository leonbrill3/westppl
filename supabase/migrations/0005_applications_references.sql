-- Applicants provide up to two references (name + email). The first reference
-- is required in the form; columns are nullable so legacy rows remain valid.
ALTER TABLE applications
  ADD COLUMN IF NOT EXISTS reference1_name TEXT,
  ADD COLUMN IF NOT EXISTS reference1_email TEXT,
  ADD COLUMN IF NOT EXISTS reference2_name TEXT,
  ADD COLUMN IF NOT EXISTS reference2_email TEXT;
