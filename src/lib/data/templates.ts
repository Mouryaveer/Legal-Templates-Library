// ============================================================
// Turn2Law Legal Templates — Data Access Layer
// Uses static seed data with Supabase-ready interface
// ============================================================

import { CATEGORIES } from "@/lib/constants/categories";
import { SEED_TEMPLATES, getFeaturedTemplates, getPopularTemplates as getPopularSeed } from "@/lib/constants/templates-seed";
import type { Template, Category, TemplateFilters, SearchResult, SiteStats } from "@/lib/types";

// Generate stable IDs from slugs
function generateId(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    const char = slug.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(16).padStart(8, '0') + '-0000-0000-0000-' + slug.slice(0, 12).padEnd(12, '0');
}

// Convert seed categories to full Category objects
function getCategories(): Category[] {
  return CATEGORIES.map((c) => ({
    ...c,
    id: generateId(c.slug),
    created_at: new Date().toISOString(),
  }));
}

// Convert seed templates to full Template objects with category references
function getTemplates(): Template[] {
  const categories = getCategories();
  return SEED_TEMPLATES.map((t) => {
    const category = categories.find((c) => c.slug === t.category_slug);
    return {
      ...t,
      id: generateId(t.slug),
      category_id: category?.id || '',
      category,
      file_url: '',
      preview_image_url: '',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
  });
}

// ── Public API ──

export async function getAllCategories(): Promise<Category[]> {
  const cats = getCategories();
  const templates = getTemplates();
  return cats.map(c => ({
    ...c,
    template_count: templates.filter(t => t.category_id === c.id && t.is_published).length,
  }));
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const cats = await getAllCategories();
  return cats.find((c) => c.slug === slug) || null;
}

export async function getAllTemplates(filters?: TemplateFilters): Promise<SearchResult> {
  let templates = getTemplates().filter(t => t.is_published);
  const page = filters?.page || 1;
  const perPage = 12;

  // Category filter
  if (filters?.category) {
    const cat = getCategories().find(c => c.slug === filters.category);
    if (cat) {
      templates = templates.filter(t => t.category_id === cat.id);
    }
  }

  // Search filter
  if (filters?.search) {
    const query = filters.search.toLowerCase();
    templates = templates.filter(t =>
      t.title.toLowerCase().includes(query) ||
      t.description.toLowerCase().includes(query) ||
      t.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  // Sort
  switch (filters?.sort) {
    case 'popular':
      templates.sort((a, b) => b.download_count - a.download_count);
      break;
    case 'newest':
      templates.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      break;
    case 'alphabetical':
      templates.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      templates.sort((a, b) => b.download_count - a.download_count);
  }

  const total = templates.length;
  const paginated = templates.slice((page - 1) * perPage, page * perPage);

  return {
    templates: paginated,
    total,
    page,
    per_page: perPage,
  };
}

export async function getTemplateBySlug(slug: string): Promise<Template | null> {
  const templates = getTemplates();
  return templates.find(t => t.slug === slug && t.is_published) || null;
}

export async function getFeaturedTemplatesList(): Promise<Template[]> {
  const featured = getFeaturedTemplates();
  const categories = getCategories();
  return featured.map(t => {
    const category = categories.find(c => c.slug === t.category_slug);
    return {
      ...t,
      id: generateId(t.slug),
      category_id: category?.id || '',
      category,
      file_url: '',
      preview_image_url: '',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
  });
}

export async function getPopularTemplates(limit: number = 8): Promise<Template[]> {
  const popular = getPopularSeed(limit);
  const categories = getCategories();
  return popular.map(t => {
    const category = categories.find(c => c.slug === t.category_slug);
    return {
      ...t,
      id: generateId(t.slug),
      category_id: category?.id || '',
      category,
      file_url: '',
      preview_image_url: '',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
  });
}

export async function getRelatedTemplates(slug: string, limit: number = 4): Promise<Template[]> {
  const template = await getTemplateBySlug(slug);
  if (!template) return [];
  
  const allTemplates = getTemplates().filter(t => 
    t.is_published && t.slug !== slug && t.category_id === template.category_id
  );
  
  return allTemplates.slice(0, limit);
}

export async function getTemplatesByCategory(categorySlug: string): Promise<Template[]> {
  const cat = getCategories().find(c => c.slug === categorySlug);
  if (!cat) return [];
  return getTemplates().filter(t => t.category_id === cat.id && t.is_published);
}

export async function getSiteStats(): Promise<SiteStats> {
  const templates = getTemplates().filter(t => t.is_published);
  const categories = getCategories();
  return {
    total_templates: templates.length,
    total_downloads: templates.reduce((sum, t) => sum + t.download_count, 0),
    total_categories: categories.length,
    total_leads: 2847, // Placeholder
  };
}

export async function searchTemplates(query: string): Promise<Template[]> {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  return getTemplates()
    .filter(t => t.is_published && (
      t.title.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.tags.some(tag => tag.toLowerCase().includes(q)) ||
      t.category?.name.toLowerCase().includes(q)
    ))
    .slice(0, 10);
}
