"use client";

import { Search, Mail, Download, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Browse & Search",
    description: "Search our extensive library or filter by category to find the exact template matching your legal or compliance needs.",
  },
  {
    step: "02",
    icon: Mail,
    title: "Provide Email",
    description: "Enter your email address to authenticate. This registers you to receive critical legal updates when agreements change.",
  },
  {
    step: "03",
    icon: InstantDownload,
    title: "Download Instantly",
    description: "Get your customizable DOCX/Word file instantly. Ready to customize with your details or pass to your counsel.",
  },
];

function InstantDownload({ className }: { className?: string }) {
  return <Download className={className} />;
}

export function HowItWorks() {
  return (
    <section className="section-padding bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-medium text-[#C89A4B] uppercase tracking-wider mb-3 block">
            Simplifying Legal
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] mb-4">
            How It Works
          </h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            Get professional legal documentation ready for your business in three simple steps.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-[#F0EBE1] -translate-y-12 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.title} delay={i * 0.15} className="text-center group">
                  <div className="flex flex-col items-center">
                    {/* Step Icon Wrapper */}
                    <div className="relative mb-6">
                      {/* Step Number Badge */}
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#111] text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm z-10">
                        {step.step}
                      </span>
                      {/* Main Icon */}
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FBF7F0] to-[#F0EBE1] flex items-center justify-center border border-[#E8E4DC] transition-all duration-500 group-hover:scale-105 group-hover:border-[#C89A4B]/40 group-hover:shadow-[0_8px_30px_rgba(200,154,75,0.08)]">
                        <Icon className="w-8 h-8 text-[#C89A4B] transition-transform duration-500 group-hover:rotate-6" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-[#111] mb-3 group-hover:text-[#C89A4B] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#666] leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
