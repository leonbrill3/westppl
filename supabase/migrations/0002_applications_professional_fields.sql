-- Capture the professional-background fields collected by the /apply form.
-- These are optional; the membership committee uses them when reviewing.
ALTER TABLE applications
  ADD COLUMN IF NOT EXISTS industry TEXT,
  ADD COLUMN IF NOT EXISTS title TEXT,
  ADD COLUMN IF NOT EXISTS company TEXT;
