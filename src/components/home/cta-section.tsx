"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-20 lg:py-24 text-white">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C89A4B] rounded-full blur-[120px] opacity-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A67D3D] rounded-full blur-[120px] opacity-10 translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Sparkles Icon */}
        <ScrollReveal className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 mb-8">
          <Sparkles className="w-5 h-5 text-[#C89A4B]" />
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={0.1} className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            Need a Customized Legal Agreement?
          </h2>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={0.2} className="max-w-xl mx-auto">
          <p className="text-[#888] text-base sm:text-lg mb-10 leading-relaxed">
            Standard templates are a great starting point, but business is rarely standard. Use our premium AI-driven{" "}
            <span className="text-[#C89A4B] font-medium">DocEngine</span> to generate customized agreements tailored to your specific parameters in minutes.
          </p>
        </ScrollReveal>

        {/* Buttons */}
        <ScrollReveal delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/templates"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#C89A4B] hover:bg-[#D4AD6A] text-white text-base font-semibold rounded-full transition-colors duration-300 shadow-lg shadow-[#C89A4B]/20"
          >
            Browse Free Templates
          </Link>
          <a
            href="https://turn2law.com/docengine"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white text-base font-semibold rounded-full border border-white/10 transition-colors duration-300"
          >
            Try DocEngine
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
