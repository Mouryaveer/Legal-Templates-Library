import { MetadataRoute } from "next";
import { getAllCategories, getAllTemplates } from "@/lib/data/templates";
import { SITE_CONFIG } from "@/lib/constants/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;

  // 1. Static pages
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  // 2. Categories
  const categories = await getAllCategories();
  const categoryUrls = categories.map((cat) => ({
    url: `${baseUrl}/categories/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 3. Templates (all of them)
  const result = await getAllTemplates({ sort: "newest" });
  const templateUrls = result.templates.map((tpl) => ({
    url: `${baseUrl}/templates/${tpl.slug}`,
    lastModified: new Date(tpl.updated_at || new Date()),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticUrls, ...categoryUrls, ...templateUrls];
}
