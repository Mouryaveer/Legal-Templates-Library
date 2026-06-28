"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ArrowRight } from "lucide-react";
import { Logo } from "./logo";

const navLinks = [
  { href: "/templates", label: "Templates" },
  { href: "/categories", label: "Categories" },
  { href: "/templates?sort=popular", label: "Popular" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== "undefined") {
    // Using a simple check instead of useEffect for SSR safety
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className={`mx-auto transition-all duration-300 ${
            isScrolled
              ? "bg-white/80 backdrop-blur-xl border-b border-[#E8E4DC] shadow-sm"
              : "bg-white/60 backdrop-blur-md"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-18">
              {/* Logo */}
              <Logo size="sm" />

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-[#555] hover:text-[#111] transition-colors duration-200 rounded-lg hover:bg-[#F5F3EF]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Desktop Right */}
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href="/templates?search="
                  className="p-2.5 text-[#777] hover:text-[#111] transition-colors rounded-lg hover:bg-[#F5F3EF]"
                  aria-label="Search templates"
                >
                  <Search className="w-4.5 h-4.5" />
                </Link>
                <div className="w-px h-5 bg-[#E8E4DC]" />
                <Link
                  href="/templates"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#111] text-white text-sm font-medium rounded-full hover:bg-[#C89A4B] transition-all duration-300"
                >
                  Browse Templates
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-[#111] rounded-lg hover:bg-[#F5F3EF] transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              className="absolute top-16 left-0 right-0 bg-white border-b border-[#E8E4DC] shadow-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-[#333] hover:text-[#111] hover:bg-[#F5F3EF] rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-3 border-t border-[#E8E4DC]">
                  <Link
                    href="/templates"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-4 py-3 bg-[#111] text-white text-sm font-medium rounded-full hover:bg-[#C89A4B] transition-colors"
                  >
                    Browse Templates
                  </Link>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll detector */}
      <NavScrollDetector onScrollChange={setIsScrolled} />
    </>
  );
}

function NavScrollDetector({ onScrollChange }: { onScrollChange: (scrolled: boolean) => void }) {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useState(() => {
      const handleScroll = () => {
        onScrollChange(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    });
  }
  return null;
}
