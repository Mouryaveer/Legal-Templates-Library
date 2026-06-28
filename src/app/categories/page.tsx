import { Metadata } from "next";
import Link from "next/link";
import { Rocket, Briefcase, Building2, Scale, Users, Globe, ShieldCheck, Landmark, Lightbulb, IndianRupee, Receipt, Home } from "lucide-react";
import { getAllCategories } from "@/lib/data/templates";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/shared/scroll-reveal";

const iconMap: Record<string, React.ElementType> = {
  Rocket, Briefcase, Building2, Scale, Users, Globe,
  ShieldCheck, Landmark, Lightbulb, IndianRupee, Receipt, Home,
};

export const metadata: Metadata = {
  title: "Legal Template Categories",
  description: "Browse legal templates by category. Find documents for Startup, Employment, Business, compliance, HR, Real Estate and more.",
};

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div className="bg-[#FAFAF8] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-medium text-[#C89A4B] uppercase tracking-wider mb-3 block">
            Browse by Topic
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] mb-4">
            Legal Template Categories
          </h1>
          <p className="text-[#666] max-w-2xl mx-auto">
            Find exactly what you need with our structured legal resources library.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Scale;
            return (
              <StaggerItem key={category.slug}>
                <Link href={`/categories/${category.slug}`}>
                  <div className="group relative overflow-hidden rounded-2xl border border-[#E8E4DC] bg-white p-8 h-full flex flex-col justify-between transition-all duration-300 hover:border-[#C89A4B]/40 hover:shadow-[0_8px_30px_rgba(200,154,75,0.06)]">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FBF7F0] to-[#F0EBE1] flex items-center justify-center mb-6 group-hover:from-[#C89A4B]/10 group-hover:to-[#C89A4B]/5 transition-all duration-300">
                        <Icon className="w-6 h-6 text-[#C89A4B]" />
                      </div>
                      <h2 className="text-lg font-bold text-[#111] mb-2 group-hover:text-[#C89A4B] transition-colors duration-300">
                        {category.name}
                      </h2>
                      <p className="text-sm text-[#666] leading-relaxed mb-6">
                        {category.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#F0EBE1] mt-auto">
                      <span className="text-xs text-[#888]">
                        {category.template_count} {category.template_count === 1 ? "template" : "templates"}
                      </span>
                      <span className="text-xs font-semibold text-[#C89A4B] group-hover:underline flex items-center gap-1">
                        Browse Category
                        <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                      </span>
                    </div>

                    {/* Accent border bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C89A4B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </div>
  );
}
