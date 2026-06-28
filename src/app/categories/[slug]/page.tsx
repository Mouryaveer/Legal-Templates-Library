import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";
import { getCategoryBySlug, getTemplatesByCategory } from "@/lib/data/templates";
import { TemplateCard } from "@/components/templates/template-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = await getCategoryBySlug(resolvedParams.slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} Legal Templates`,
    description: category.description,
  };
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const category = await getCategoryBySlug(resolvedParams.slug);

  if (!category) {
    notFound();
  }

  const templates = await getTemplatesByCategory(category.slug);

  return (
    <div className="bg-[#FAFAF8] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link / Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link
            href="/categories"
            className="inline-flex items-center gap-1.5 text-sm text-[#666] hover:text-[#111] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Categories
          </Link>
          <span className="text-[#CCC] text-sm">/</span>
          <span className="text-sm text-[#888]">{category.name}</span>
        </div>

        {/* Category Header */}
        <ScrollReveal className="bg-white border border-[#E8E4DC] p-6 sm:p-10 rounded-2xl mb-12 shadow-sm relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C89A4B] rounded-full blur-[100px] opacity-5 -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111] mb-4 flex items-center gap-3">
              <Scale className="w-8 h-8 text-[#C89A4B]" />
              {category.name} Templates
            </h1>
            <p className="text-base text-[#555] leading-relaxed mb-4">
              {category.description}
            </p>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F5F3EF] text-xs font-semibold text-[#666]">
              {templates.length} {templates.length === 1 ? "template" : "templates"} available
            </span>
          </div>
        </ScrollReveal>

        {/* Templates Grid */}
        {templates.length === 0 ? (
          <div className="bg-white border border-[#E8E4DC] rounded-2xl p-12 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-[#111] mb-2">No templates yet</h3>
            <p className="text-sm text-[#666] max-w-sm mx-auto mb-6">
              We are currently drafting templates for this category. Check back soon or request a custom draft.
            </p>
            <Link
              href="https://turn2law.com/docengine"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#111] hover:bg-[#C89A4B] text-white text-sm font-semibold rounded-full transition-colors duration-200"
            >
              Request Custom Draft
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, idx) => (
              <TemplateCard key={template.id} template={template} index={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
