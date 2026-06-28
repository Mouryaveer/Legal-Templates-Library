"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Briefcase, Building2, Scale, Users, Globe, ShieldCheck, Landmark, Lightbulb, IndianRupee, Receipt, Home } from "lucide-react";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/shared/scroll-reveal";
import { CATEGORIES } from "@/lib/constants/categories";

const iconMap: Record<string, React.ElementType> = {
  Rocket, Briefcase, Building2, Scale, Users, Globe,
  ShieldCheck, Landmark, Lightbulb, IndianRupee, Receipt, Home,
};

export function CategoriesGrid() {
  return (
    <section className="section-padding bg-[#FAFAF8]" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-medium text-[#C89A4B] uppercase tracking-wider mb-3 block">
            Browse by Category
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] mb-4">
            Find What You Need
          </h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            Browse our comprehensive library organized across 12 legal categories.
          </p>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon] || Scale;
            return (
              <StaggerItem key={category.slug}>
                <Link href={`/categories/${category.slug}`}>
                  <motion.div
                    className="group relative overflow-hidden rounded-2xl border border-[#E8E4DC] bg-white p-6 transition-all duration-300 hover:border-[#C89A4B]/40 hover:shadow-[0_4px_24px_rgba(200,154,75,0.08)]"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FBF7F0] to-[#F0EBE1] flex items-center justify-center mb-4 group-hover:from-[#C89A4B]/10 group-hover:to-[#C89A4B]/5 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#C89A4B]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#111] mb-1 group-hover:text-[#C89A4B] transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-xs text-[#999] line-clamp-2">
                      {category.description}
                    </p>
                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C89A4B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
