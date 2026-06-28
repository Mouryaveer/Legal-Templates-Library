import { getFeaturedTemplatesList } from "@/lib/data/templates";
import { FeaturedTemplatesClient } from "./featured-templates-client";

export async function FeaturedTemplates() {
  const templates = await getFeaturedTemplatesList();

  return (
    <section className="section-padding bg-white" id="featured">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedTemplatesClient templates={templates} />
      </div>
    </section>
  );
}
