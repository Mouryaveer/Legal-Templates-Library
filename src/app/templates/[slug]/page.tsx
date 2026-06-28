import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getTemplateBySlug, getRelatedTemplates } from "@/lib/data/templates";
import { generateTemplateMetadata, generateArticleSchema } from "@/lib/constants/seo";
import { TemplateDetailClient } from "./detail-client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const template = await getTemplateBySlug(resolvedParams.slug);
  
  if (!template) {
    return {
      title: "Template Not Found",
    };
  }

  return generateTemplateMetadata(template) as Metadata;
}

export default async function TemplateDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const template = await getTemplateBySlug(resolvedParams.slug);

  if (!template) {
    notFound();
  }

  const relatedTemplates = await getRelatedTemplates(template.slug, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema(template)),
        }}
      />
      <TemplateDetailClient template={template} relatedTemplates={relatedTemplates} />
    </>
  );
}
