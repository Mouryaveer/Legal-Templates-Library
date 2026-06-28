// ============================================================
// Turn2Law Legal Templates — SEO Constants & Helpers
// ============================================================

export const SITE_CONFIG = {
  name: "Turn2Law",
  tagline: "Professional Legal Templates for Modern Businesses",
  description: "Browse, preview, and download professionally drafted legal templates. Free templates for startups, businesses, HR, and professionals.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://templates.turn2law.com",
  ogImage: "/og-image.png",
  twitterHandle: "@turn2law",
  email: "hello@turn2law.com",
};

export const DEFAULT_SEO = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  openGraph: {
    type: "website" as const,
    locale: "en_IN",
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image" as const,
    creator: SITE_CONFIG.twitterHandle,
  },
};

export function generateTemplateMetadata(template: {
  title: string;
  seo_title: string;
  seo_description: string;
  slug: string;
  category?: { name: string };
}) {
  return {
    title: template.seo_title || `${template.title} | ${SITE_CONFIG.name}`,
    description: template.seo_description,
    openGraph: {
      title: template.seo_title || template.title,
      description: template.seo_description,
      url: `${SITE_CONFIG.url}/templates/${template.slug}`,
      type: "article" as const,
      siteName: SITE_CONFIG.name,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: template.seo_title || template.title,
      description: template.seo_description,
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/templates/${template.slug}`,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_CONFIG.email,
      contactType: "customer service",
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.url}/templates?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}

export function generateArticleSchema(template: {
  title: string;
  description: string;
  slug: string;
  created_at: string;
  updated_at: string;
  category?: { name: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: template.title,
    description: template.description,
    url: `${SITE_CONFIG.url}/templates/${template.slug}`,
    datePublished: template.created_at,
    dateModified: template.updated_at,
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
    articleSection: template.category?.name || "Legal Templates",
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
