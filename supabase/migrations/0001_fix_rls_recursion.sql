-- Fix: "infinite recursion detected in policy for relation members"
--
-- The original policies checked admin/active status with
--   EXISTS (SELECT 1 FROM members WHERE id = auth.uid() AND ...)
-- Referencing `members` from inside a `members` policy re-triggers that same
-- policy, causing infinite recursion (Postgres error 42P17). The fix is to move
-- those checks into SECURITY DEFINER functions, which run with the function
-- owner's privileges and therefore bypass RLS, breaking the cycle.

-- Helper functions ----------------------------------------------------------

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM members WHERE id = auth.uid() AND is_admin = true
  );
$$;

CREATE OR REPLACE FUNCTION public.is_active_member()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM members WHERE id = auth.uid() AND status = 'active'
  );
$$;

-- Members -------------------------------------------------------------------

DROP POLICY IF EXISTS "Admins can view all members" ON members;
CREATE POLICY "Admins can view all members"
  ON members FOR SELECT
  USING (public.is_admin());

DROP POLICY IF EXISTS "Admins can update any member" ON members;
CREATE POLICY "Admins can update any member"
  ON members FOR UPDATE
  USING (public.is_admin());

-- Events --------------------------------------------------------------------

DROP POLICY IF EXISTS "Members can view all events" ON events;
CREATE POLICY "Members can view all events"
  ON events FOR SELECT
  USING (public.is_active_member());

DROP POLICY IF EXISTS "Admins can manage events" ON events;
CREATE POLICY "Admins can manage events"
  ON events FOR ALL
  USING (public.is_admin());

-- RSVPs ---------------------------------------------------------------------

DROP POLICY IF EXISTS "Admins can view all RSVPs" ON rsvps;
CREATE POLICY "Admins can view all RSVPs"
  ON rsvps FOR SELECT
  USING (public.is_admin());

DROP POLICY IF EXISTS "Active members can create RSVPs" ON rsvps;
CREATE POLICY "Active members can create RSVPs"
  ON rsvps FOR INSERT
  WITH CHECK (member_id = auth.uid() AND public.is_active_member());

-- Applications --------------------------------------------------------------

DROP POLICY IF EXISTS "Admins can view applications" ON applications;
CREATE POLICY "Admins can view applications"
  ON applications FOR SELECT
  USING (public.is_admin());

DROP POLICY IF EXISTS "Admins can update applications" ON applications;
CREATE POLICY "Admins can update applications"
  ON applications FOR UPDATE
  USING (public.is_admin());

-- Articles ------------------------------------------------------------------

DROP POLICY IF EXISTS "Admins can manage articles" ON articles;
CREATE POLICY "Admins can manage articles"
  ON articles FOR ALL
  USING (public.is_admin());
