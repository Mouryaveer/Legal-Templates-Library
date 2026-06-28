-- ============================================================
-- Turn2Law Legal Templates Library — Database Schema
-- Run this in the Supabase SQL Editor
-- ============================================================

-- ── Custom ENUM Types ──
CREATE TYPE admin_role AS ENUM ('admin', 'editor');

-- ============================================================
-- CATEGORIES
-- ============================================================
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT DEFAULT '',
  icon TEXT DEFAULT 'FileText',
  template_count INTEGER NOT NULL DEFAULT 0,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- TEMPLATES
-- ============================================================
CREATE TABLE templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL DEFAULT '',
  purpose TEXT DEFAULT '',
  who_should_use TEXT DEFAULT '',
  when_to_use TEXT DEFAULT '',
  benefits TEXT[] DEFAULT '{}',
  key_clauses TEXT[] DEFAULT '{}',
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  tags TEXT[] DEFAULT '{}',
  file_url TEXT DEFAULT '',
  preview_image_url TEXT DEFAULT '',
  download_count INTEGER NOT NULL DEFAULT 0,
  estimated_reading_time INTEGER NOT NULL DEFAULT 5,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  is_published BOOLEAN NOT NULL DEFAULT false,
  seo_title TEXT DEFAULT '',
  seo_description TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- LEADS (email captures)
-- ============================================================
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  template_id UUID REFERENCES templates(id) ON DELETE SET NULL,
  ip_address TEXT DEFAULT '',
  user_agent TEXT DEFAULT '',
  source TEXT DEFAULT 'download',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- DOWNLOADS (analytics)
-- ============================================================
CREATE TABLE downloads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id UUID NOT NULL REFERENCES templates(id) ON DELETE CASCADE,
  lead_id UUID REFERENCES leads(id) ON DELETE SET NULL,
  ip_address TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- ADMIN USERS
-- ============================================================
CREATE TABLE admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  role admin_role NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- INDEXES
-- ============================================================
CREATE INDEX idx_templates_slug ON templates(slug);
CREATE INDEX idx_templates_category ON templates(category_id);
CREATE INDEX idx_templates_featured ON templates(is_featured) WHERE is_published = true;
CREATE INDEX idx_templates_published ON templates(is_published);
CREATE INDEX idx_templates_download_count ON templates(download_count DESC);
CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_categories_sort ON categories(sort_order);
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created ON leads(created_at DESC);
CREATE INDEX idx_downloads_template ON downloads(template_id);
CREATE INDEX idx_downloads_created ON downloads(created_at DESC);

-- Full-text search index
ALTER TABLE templates ADD COLUMN search_vector tsvector
  GENERATED ALWAYS AS (
    setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(description, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(array_to_string(tags, ' '), '')), 'C')
  ) STORED;

CREATE INDEX idx_templates_search ON templates USING GIN(search_vector);

-- ============================================================
-- FUNCTIONS
-- ============================================================

-- Increment download count atomically
CREATE OR REPLACE FUNCTION increment_download_count(t_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE templates SET download_count = download_count + 1, updated_at = now()
  WHERE id = t_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Full-text search
CREATE OR REPLACE FUNCTION search_templates(search_query TEXT, result_limit INTEGER DEFAULT 20)
RETURNS SETOF templates AS $$
BEGIN
  RETURN QUERY
  SELECT *
  FROM templates
  WHERE is_published = true
    AND search_vector @@ plainto_tsquery('english', search_query)
  ORDER BY ts_rank(search_vector, plainto_tsquery('english', search_query)) DESC
  LIMIT result_limit;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_templates_updated
  BEFORE UPDATE ON templates
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Auto-update category template counts
CREATE OR REPLACE FUNCTION update_category_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' OR TG_OP = 'UPDATE' THEN
    UPDATE categories SET template_count = (
      SELECT COUNT(*) FROM templates WHERE category_id = NEW.category_id AND is_published = true
    ) WHERE id = NEW.category_id;
  END IF;
  IF TG_OP = 'DELETE' OR (TG_OP = 'UPDATE' AND OLD.category_id != NEW.category_id) THEN
    UPDATE categories SET template_count = (
      SELECT COUNT(*) FROM templates WHERE category_id = OLD.category_id AND is_published = true
    ) WHERE id = OLD.category_id;
  END IF;
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER trigger_template_category_count
  AFTER INSERT OR UPDATE OR DELETE ON templates
  FOR EACH ROW
  EXECUTE FUNCTION update_category_count();

-- ============================================================
-- ENABLE ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- RLS POLICIES
-- ============================================================

-- Categories: Public read
CREATE POLICY "Categories are publicly readable"
  ON categories FOR SELECT
  USING (true);

-- Templates: Public read for published
CREATE POLICY "Published templates are publicly readable"
  ON templates FOR SELECT
  USING (is_published = true);

-- Leads: Public insert (for email capture)
CREATE POLICY "Anyone can submit leads"
  ON leads FOR INSERT
  WITH CHECK (true);

-- Downloads: Public insert (for tracking)
CREATE POLICY "Anyone can log downloads"
  ON downloads FOR INSERT
  WITH CHECK (true);

-- Admin full access via service role key (bypasses RLS)
