// ============================================================
// Turn2Law Legal Templates — Category Definitions
// ============================================================

import type { Category } from "@/lib/types";

export const CATEGORIES: Omit<Category, "id" | "created_at">[] = [
  {
    name: "Startup",
    slug: "startup",
    description: "Essential documents for launching and scaling your startup, from incorporation to fundraising.",
    icon: "Rocket",
    template_count: 0,
    sort_order: 1,
  },
  {
    name: "Employment",
    slug: "employment",
    description: "Comprehensive employment agreements, offer letters, and workplace policies.",
    icon: "Briefcase",
    template_count: 0,
    sort_order: 2,
  },
  {
    name: "Legal",
    slug: "legal",
    description: "General-purpose legal documents including NDAs, powers of attorney, and releases.",
    icon: "Scale",
    template_count: 0,
    sort_order: 3,
  },
  {
    name: "Intellectual Property",
    slug: "intellectual-property",
    description: "Protect your innovations with IP assignment, licensing, and trademark agreements.",
    icon: "Lightbulb",
    template_count: 0,
    sort_order: 4,
  },
];

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getCategoryIcon(iconName: string) {
  return iconName;
}
