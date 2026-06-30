"use client";

import { Shield, Clock, FileText, Users, Star, CheckCircle } from "lucide-react";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/shared/scroll-reveal";

const benefits = [
  {
    icon: Shield,
    title: "Professionally Drafted",
    description: "Every template is meticulously drafted by legal experts to ensure compliance with current laws and standards.",
  },
  {
    icon: Clock,
    title: "Time & Cost Efficient",
    description: "Skip expensive lawyer consultation fees and hours of drafting. Get started with a high-quality baseline in seconds.",
  },
  {
    icon: FileText,
    title: "Comprehensive Coverage",
    description: "From startup co-founder agreements to employee handbooks, we cover all your personal and corporate legal needs.",
  },
  {
    icon: Users,
    title: "Business Focused",
    description: "Tailored specifically for modern startups, SMEs, freelancers, and HR managers who need clear, commercial-grade terms.",
  },
  {
    icon: Star,
    title: "Highly Customizable",
    description: "Delivered in standard formats (DOCX/PDF) with clean formatting, making them extremely easy to modify and brand.",
  },
  {
    icon: CheckCircle,
    title: "Always Up-to-Date",
    description: "We constantly review and update our templates to reflect the latest legal precedents and regulatory updates.",
  },
];

export function BenefitsSection() {
  return (
    <section className="section-padding bg-[#FAFAF8]" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-medium text-[#C89A4B] uppercase tracking-wider mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] mb-4">
            Designed for Modern Businesses
          </h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            Our template library is engineered to give you the protection you need, without the traditional legal overhead.
          </p>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <StaggerItem key={benefit.title}>
                <div className="group relative overflow-hidden rounded-2xl border border-[#E8E4DC] bg-white p-4 md:p-8 transition-all duration-300 hover:border-[#C89A4B]/40 hover:shadow-[0_8px_30px_rgba(200,154,75,0.06)]">
                  <div className="flex items-start gap-3 md:block mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#FBF7F0] to-[#F0EBE1] flex items-center justify-center shrink-0 group-hover:from-[#C89A4B]/10 group-hover:to-[#C89A4B]/5 transition-all duration-300">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#C89A4B]" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-[#111] group-hover:text-[#C89A4B] transition-colors duration-300">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-[#666] leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  {/* Subtle corner highlight */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C89A4B]/5 to-transparent rounded-bl-full transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
