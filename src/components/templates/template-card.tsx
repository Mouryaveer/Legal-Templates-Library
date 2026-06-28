"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Download, ArrowUpRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Template } from "@/lib/types";
import { useRef, useState } from "react";

interface TemplateCardProps {
  template: Template;
  index?: number;
}

export function TemplateCard({ template, index = 0 }: TemplateCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link href={`/templates/${template.slug}`}>
        <div
          ref={cardRef}
          className="group relative overflow-hidden rounded-2xl border border-[#E8E4DC] bg-white transition-all duration-500 hover:border-[#C89A4B]/40 hover:shadow-[0_8px_40px_rgba(200,154,75,0.08)]"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Spotlight effect */}
          {isHovered && (
            <div
              className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
              style={{
                background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(200, 154, 75, 0.06), transparent 60%)`,
              }}
            />
          )}

          {/* Card Content */}
          <div className="relative z-20 p-6">
            {/* Top Row */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FBF7F0] to-[#F0EBE1] flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#C89A4B]" />
                </div>
                {template.category && (
                  <Badge
                    variant="secondary"
                    className="bg-[#FBF7F0] text-[#A67D3D] border-[#E8D5B0] hover:bg-[#F0EBE1] text-xs font-medium"
                  >
                    {template.category.name}
                  </Badge>
                )}
              </div>
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
              </motion.div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#111] mb-2 group-hover:text-[#C89A4B] transition-colors duration-300 line-clamp-2">
              {template.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#666] leading-relaxed mb-4 line-clamp-2">
              {template.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {template.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#888] bg-[#F5F3EF] px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="flex items-center justify-between pt-4 border-t border-[#F0EBE1]">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-xs text-[#888]">
                  <Download className="w-3.5 h-3.5" />
                  <span>{template.download_count.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#888]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{template.estimated_reading_time} min read</span>
                </div>
              </div>
              {template.is_featured && (
                <span className="text-xs font-medium text-[#C89A4B]">Featured</span>
              )}
            </div>
          </div>

          {/* Bottom gold accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C89A4B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </Link>
    </motion.div>
  );
}
