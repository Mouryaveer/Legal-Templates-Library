"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TemplateCard } from "@/components/templates/template-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import type { Template } from "@/lib/types";

export function FeaturedTemplatesClient({ templates }: { templates: Template[] }) {
  return (
    <>
      {/* Header */}
      <ScrollReveal className="text-center mb-12">
        <span className="text-sm font-medium text-[#C89A4B] uppercase tracking-wider mb-3 block">
          Featured Templates
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111] mb-4">
          Most Popular Downloads
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto">
          Our most downloaded legal templates, professionally drafted and ready to use.
        </p>
      </ScrollReveal>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.slice(0, 6).map((template, i) => (
          <TemplateCard key={template.slug} template={template} index={i} />
        ))}
      </div>

      {/* View All */}
      <ScrollReveal className="text-center mt-10">
        <Link
          href="/templates"
          className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#111] border-2 border-[#E8E4DC] rounded-full hover:border-[#C89A4B] hover:text-[#C89A4B] transition-all duration-300"
        >
          View All Templates
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </ScrollReveal>
    </>
  );
}
