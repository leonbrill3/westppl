-- Applicants must provide a social profile (Instagram or LinkedIn), plus
-- address and birthday.
ALTER TABLE applications
  ADD COLUMN IF NOT EXISTS social_platform TEXT,
  ADD COLUMN IF NOT EXISTS social_handle TEXT,
  ADD COLUMN IF NOT EXISTS address TEXT,
  ADD COLUMN IF NOT EXISTS birthday DATE;
