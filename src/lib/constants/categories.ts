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
    name: "Business",
    slug: "business",
    description: "Core business agreements for partnerships, operations, and commercial transactions.",
    icon: "Building2",
    template_count: 0,
    sort_order: 3,
  },
  {
    name: "Legal",
    slug: "legal",
    description: "General-purpose legal documents including NDAs, powers of attorney, and releases.",
    icon: "Scale",
    template_count: 0,
    sort_order: 4,
  },
  {
    name: "HR",
    slug: "hr",
    description: "Human resources templates for onboarding, performance management, and compliance.",
    icon: "Users",
    template_count: 0,
    sort_order: 5,
  },
  {
    name: "Website",
    slug: "website",
    description: "Website legal pages including terms of service, privacy policies, and cookie notices.",
    icon: "Globe",
    template_count: 0,
    sort_order: 6,
  },
  {
    name: "Compliance",
    slug: "compliance",
    description: "Regulatory compliance documents for GDPR, data protection, and industry standards.",
    icon: "ShieldCheck",
    template_count: 0,
    sort_order: 7,
  },
  {
    name: "Corporate",
    slug: "corporate",
    description: "Corporate governance documents including board resolutions and shareholder agreements.",
    icon: "Landmark",
    template_count: 0,
    sort_order: 8,
  },
  {
    name: "Intellectual Property",
    slug: "intellectual-property",
    description: "Protect your innovations with IP assignment, licensing, and trademark agreements.",
    icon: "Lightbulb",
    template_count: 0,
    sort_order: 9,
  },
  {
    name: "Finance",
    slug: "finance",
    description: "Financial agreements including loan documents, invoices, and investment terms.",
    icon: "IndianRupee",
    template_count: 0,
    sort_order: 10,
  },
  {
    name: "Taxation",
    slug: "taxation",
    description: "Tax-related documents, declarations, and GST compliance templates.",
    icon: "Receipt",
    template_count: 0,
    sort_order: 11,
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    description: "Property-related agreements for leases, rentals, sales, and construction.",
    icon: "Home",
    template_count: 0,
    sort_order: 12,
  },
];

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getCategoryIcon(iconName: string) {
  return iconName;
}
