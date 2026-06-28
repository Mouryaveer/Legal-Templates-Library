"use client";

import { FileText, Download, FolderOpen, Star } from "lucide-react";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const stats = [
  { icon: FileText, value: 500, suffix: "+", label: "Legal Templates", color: "#C89A4B" },
  { icon: Download, value: 50000, suffix: "+", label: "Downloads", color: "#A67D3D" },
  { icon: FolderOpen, value: 12, suffix: "", label: "Categories", color: "#D4AD6A" },
  { icon: Star, value: 99, suffix: "%", label: "Satisfaction Rate", color: "#C89A4B" },
];

export function StatsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center">
                <div className="flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${stat.color}10` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: stat.color }} />
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2} />
                  </div>
                  <p className="text-sm text-[#888] font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
