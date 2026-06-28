"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { ParticleBackground } from "./particles";

const popularSearches = ["NDA", "Employment Contract", "Privacy Policy", "Lease Agreement", "Invoice"];

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/templates?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FAFAF8] via-white to-white">
      {/* Particle Background */}
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,154,75,0.04)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-[#FBF7F0] border border-[#E8D5B0] text-sm text-[#A67D3D]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span className="font-medium">500+ Professionally Drafted Templates</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#111] leading-[1.1] tracking-tight mb-6"
        >
          Professional Legal Templates
          <br />
          <span className="gold-gradient-text">for Modern Businesses</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg sm:text-xl text-[#666] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Browse, preview, and download professionally drafted legal documents.
          Built for startups, founders, HR teams, and professionals.
        </motion.p>

        {/* Search Bar */}
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="relative max-w-xl mx-auto mb-6"
        >
          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#AAA] group-focus-within:text-[#C89A4B] transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search templates... (e.g., NDA, Employment Contract)"
              className="w-full h-14 pl-13 pr-14 text-base bg-white border-2 border-[#E8E4DC] rounded-2xl outline-none transition-all duration-300 focus:border-[#C89A4B] focus:shadow-[0_0_0_4px_rgba(200,154,75,0.1)] placeholder:text-[#BBB]"
              id="hero-search"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#111] hover:bg-[#C89A4B] text-white rounded-xl flex items-center justify-center transition-all duration-300"
              aria-label="Search"
            >
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </motion.form>

        {/* Popular Searches */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          <span className="text-xs text-[#AAA] mr-1">Popular:</span>
          {popularSearches.map((term) => (
            <button
              key={term}
              onClick={() => router.push(`/templates?search=${encodeURIComponent(term)}`)}
              className="px-3 py-1 text-xs text-[#777] bg-[#F5F3EF] hover:bg-[#C89A4B]/10 hover:text-[#C89A4B] rounded-full transition-all duration-200 border border-transparent hover:border-[#C89A4B]/20"
            >
              {term}
            </button>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-[#D4CFC3] flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-[#C89A4B]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
