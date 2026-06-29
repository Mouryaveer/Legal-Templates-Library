// ============================================================
// Turn2Law Legal Templates — TypeScript Types
// ============================================================

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  template_count: number;
  sort_order: number;
  created_at: string;
}

export interface TemplateFAQ {
  question: string;
  answer: string;
}

export interface Template {
  id: string;
  title: string;
  slug: string;
  description: string;
  purpose: string;
  who_should_use: string;
  when_to_use: string;
  benefits: string[];
  key_clauses: string[];
  category_id: string;
  category?: Category;
  tags: string[];
  file_url: string;
  preview_image_url: string;
  download_count: number;
  estimated_reading_time: number;
  is_featured: boolean;
  is_published: boolean;
  seo_title: string;
  seo_description: string;
  created_at: string;
  updated_at: string;
  // Production-grade metadata
  version: string;
  template_number: string;
  revision_date: string;
  applicable_laws: string[];
  required_information: string[];
  estimated_completion_time: string;
  faqs: TemplateFAQ[];
  related_template_slugs: string[];
  page_count: number;
}

export interface Lead {
  id: string;
  email: string;
  template_id: string | null;
  template?: Template;
  ip_address: string;
  user_agent: string;
  source: string;
  created_at: string;
}

export interface Download {
  id: string;
  template_id: string;
  template?: Template;
  lead_id: string | null;
  ip_address: string;
  created_at: string;
}

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'editor';
  created_at: string;
}

// API Types
export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
}

export interface SearchResult {
  templates: Template[];
  total: number;
  page: number;
  per_page: number;
}

export interface TemplateFilters {
  category?: string;
  search?: string;
  sort?: 'popular' | 'newest' | 'alphabetical';
  tags?: string[];
  page?: number;
}

export interface SiteStats {
  total_templates: number;
  total_downloads: number;
  total_categories: number;
  total_leads: number;
}

export interface CategoryWithTemplates extends Category {
  templates: Template[];
}
