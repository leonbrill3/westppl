-- West/PPL Database Schema
-- Run this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enums
CREATE TYPE chapter AS ENUM ('miami', 'la', 'nyc');
CREATE TYPE member_status AS ENUM ('pending', 'active', 'suspended');
CREATE TYPE rsvp_status AS ENUM ('confirmed', 'waitlist', 'cancelled');
CREATE TYPE application_status AS ENUM ('pending', 'approved', 'rejected');
CREATE TYPE event_category AS ENUM ('party', 'dinner', 'wellness', 'art', 'music', 'fashion', 'networking', 'other');
CREATE TYPE article_category AS ENUM ('events', 'culture', 'west-nights', 'lifestyle', 'interviews');

-- Members table (linked to auth.users)
CREATE TABLE members (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  name TEXT NOT NULL,
  chapter chapter NOT NULL,
  status member_status DEFAULT 'pending' NOT NULL,
  card_number TEXT UNIQUE,
  instagram TEXT,
  avatar_url TEXT,
  is_admin BOOLEAN DEFAULT false,
  joined_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Applications table
CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  chapter chapter NOT NULL,
  instagram TEXT,
  referral TEXT,
  why TEXT NOT NULL,
  status application_status DEFAULT 'pending' NOT NULL,
  reviewed_by UUID REFERENCES members(id),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Events table
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date TIMESTAMPTZ NOT NULL,
  end_date TIMESTAMPTZ,
  location TEXT NOT NULL,
  address TEXT,
  chapter chapter NOT NULL,
  capacity INTEGER,
  is_members_only BOOLEAN DEFAULT true,
  is_public BOOLEAN DEFAULT false,
  image_url TEXT,
  category event_category NOT NULL,
  created_by UUID REFERENCES members(id) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- RSVPs table
CREATE TABLE rsvps (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_id UUID REFERENCES events(id) ON DELETE CASCADE NOT NULL,
  member_id UUID REFERENCES members(id) ON DELETE CASCADE NOT NULL,
  status rsvp_status DEFAULT 'confirmed' NOT NULL,
  plus_one BOOLEAN DEFAULT false,
  plus_one_name TEXT,
  checked_in_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  UNIQUE(event_id, member_id)
);

-- Articles table (for WEST MAG)
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category article_category NOT NULL,
  image_url TEXT,
  author_id UUID REFERENCES members(id),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Indexes
CREATE INDEX idx_members_chapter ON members(chapter);
CREATE INDEX idx_members_status ON members(status);
CREATE INDEX idx_events_chapter ON events(chapter);
CREATE INDEX idx_events_date ON events(date);
CREATE INDEX idx_events_category ON events(category);
CREATE INDEX idx_rsvps_event_id ON rsvps(event_id);
CREATE INDEX idx_rsvps_member_id ON rsvps(member_id);
CREATE INDEX idx_applications_status ON applications(status);
CREATE INDEX idx_articles_category ON articles(category);
CREATE INDEX idx_articles_published_at ON articles(published_at);

-- Row Level Security (RLS)
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Members policies
CREATE POLICY "Members can view their own profile"
  ON members FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Admins can view all members"
  ON members FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM members WHERE id = auth.uid() AND is_admin = true
    )
  );

CREATE POLICY "Members can update their own profile"
  ON members FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Admins can update any member"
  ON members FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM members WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Events policies
CREATE POLICY "Anyone can view public events"
  ON events FOR SELECT
  USING (is_public = true);

CREATE POLICY "Members can view all events"
  ON events FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM members WHERE id = auth.uid() AND status = 'active'
    )
  );

CREATE POLICY "Admins can manage events"
  ON events FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM members WHERE id = auth.uid() AND is_admin = true
    )
  );

-- RSVPs policies
CREATE POLICY "Members can view their own RSVPs"
  ON rsvps FOR SELECT
  USING (member_id = auth.uid());

CREATE POLICY "Admins can view all RSVPs"
  ON rsvps FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM members WHERE id = auth.uid() AND is_admin = true
    )
  );

CREATE POLICY "Active members can create RSVPs"
  ON rsvps FOR INSERT
  WITH CHECK (
    member_id = auth.uid() AND
    EXISTS (
      SELECT 1 FROM members WHERE id = auth.uid() AND status = 'active'
    )
  );

CREATE POLICY "Members can update their own RSVPs"
  ON rsvps FOR UPDATE
  USING (member_id = auth.uid());

CREATE POLICY "Members can delete their own RSVPs"
  ON rsvps FOR DELETE
  USING (member_id = auth.uid());

-- Applications policies
CREATE POLICY "Anyone can create applications"
  ON applications FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can view applications"
  ON applications FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM members WHERE id = auth.uid() AND is_admin = true
    )
  );

CREATE POLICY "Admins can update applications"
  ON applications FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM members WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Articles policies
CREATE POLICY "Anyone can view published articles"
  ON articles FOR SELECT
  USING (published_at IS NOT NULL AND published_at <= NOW());

CREATE POLICY "Admins can manage articles"
  ON articles FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM members WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Function to generate unique card numbers
CREATE OR REPLACE FUNCTION generate_card_number()
RETURNS TEXT AS $$
DECLARE
  new_number TEXT;
  prefix TEXT;
BEGIN
  -- Get chapter prefix
  prefix := 'WP';

  -- Generate random 6-digit number
  new_number := prefix || LPAD(FLOOR(RANDOM() * 1000000)::TEXT, 6, '0');

  -- Check uniqueness and regenerate if needed
  WHILE EXISTS (SELECT 1 FROM members WHERE card_number = new_number) LOOP
    new_number := prefix || LPAD(FLOOR(RANDOM() * 1000000)::TEXT, 6, '0');
  END LOOP;

  RETURN new_number;
END;
$$ LANGUAGE plpgsql;

-- Function to automatically assign card number when member is activated
CREATE OR REPLACE FUNCTION assign_card_number()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.status = 'active' AND OLD.status != 'active' AND NEW.card_number IS NULL THEN
    NEW.card_number := generate_card_number();
    NEW.joined_at := NOW();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_assign_card_number
  BEFORE UPDATE ON members
  FOR EACH ROW
  EXECUTE FUNCTION assign_card_number();

-- Function to check event capacity and manage waitlist
CREATE OR REPLACE FUNCTION check_event_capacity()
RETURNS TRIGGER AS $$
DECLARE
  current_count INTEGER;
  event_capacity INTEGER;
BEGIN
  -- Get event capacity
  SELECT capacity INTO event_capacity FROM events WHERE id = NEW.event_id;

  -- If no capacity limit, confirm RSVP
  IF event_capacity IS NULL THEN
    NEW.status := 'confirmed';
    RETURN NEW;
  END IF;

  -- Count current confirmed RSVPs (including plus ones)
  SELECT COALESCE(SUM(CASE WHEN plus_one THEN 2 ELSE 1 END), 0)
  INTO current_count
  FROM rsvps
  WHERE event_id = NEW.event_id AND status = 'confirmed';

  -- Check if there's room
  IF current_count + (CASE WHEN NEW.plus_one THEN 2 ELSE 1 END) <= event_capacity THEN
    NEW.status := 'confirmed';
  ELSE
    NEW.status := 'waitlist';
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_check_event_capacity
  BEFORE INSERT ON rsvps
  FOR EACH ROW
  EXECUTE FUNCTION check_event_capacity();

-- Function to promote from waitlist when spots open
CREATE OR REPLACE FUNCTION promote_from_waitlist()
RETURNS TRIGGER AS $$
DECLARE
  event_capacity INTEGER;
  current_count INTEGER;
  available_spots INTEGER;
  waitlist_rsvp RECORD;
BEGIN
  -- Only run when an RSVP is cancelled
  IF OLD.status = 'confirmed' AND NEW.status = 'cancelled' THEN
    -- Get event capacity
    SELECT capacity INTO event_capacity FROM events WHERE id = OLD.event_id;

    IF event_capacity IS NOT NULL THEN
      -- Count current confirmed RSVPs
      SELECT COALESCE(SUM(CASE WHEN plus_one THEN 2 ELSE 1 END), 0)
      INTO current_count
      FROM rsvps
      WHERE event_id = OLD.event_id AND status = 'confirmed';

      available_spots := event_capacity - current_count;

      -- Promote waitlisted RSVPs
      FOR waitlist_rsvp IN
        SELECT * FROM rsvps
        WHERE event_id = OLD.event_id AND status = 'waitlist'
        ORDER BY created_at ASC
      LOOP
        IF (CASE WHEN waitlist_rsvp.plus_one THEN 2 ELSE 1 END) <= available_spots THEN
          UPDATE rsvps SET status = 'confirmed' WHERE id = waitlist_rsvp.id;
          available_spots := available_spots - (CASE WHEN waitlist_rsvp.plus_one THEN 2 ELSE 1 END);
        END IF;

        EXIT WHEN available_spots <= 0;
      END LOOP;
    END IF;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_promote_from_waitlist
  AFTER UPDATE ON rsvps
  FOR EACH ROW
  EXECUTE FUNCTION promote_from_waitlist();
