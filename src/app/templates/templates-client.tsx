"use client";

import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, ArrowUpDown, ChevronLeft, ChevronRight, X, AlertCircle } from "lucide-react";
import { TemplateCard } from "@/components/templates/template-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Template, Category } from "@/lib/types";

interface TemplatesClientProps {
  initialTemplates: Template[];
  categories: Category[];
  total: number;
  currentPage: number;
  perPage: number;
}

export function TemplatesClient({
  initialTemplates,
  categories,
  total,
  currentPage,
  perPage,
}: TemplatesClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const activeCategory = searchParams.get("category") || "";
  const activeSort = searchParams.get("sort") || "popular";

  const totalPages = Math.ceil(total / perPage);

  const updateFilters = (updates: Record<string, string | number | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    
    // Page reset when search or category changes
    if (updates.search !== undefined || updates.category !== undefined) {
      params.set("page", "1");
    }

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    });

    startTransition(() => {
      router.push(`/templates?${params.toString()}`);
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters({ search });
  };

  const handleClearAll = () => {
    setSearch("");
    startTransition(() => {
      router.push("/templates");
    });
  };

  return (
    <div>
      {/* Top Title & Search bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#E8E4DC]">
        <div>
          <h1 className="text-3xl font-bold text-[#111] mb-2">Legal Templates</h1>
          <p className="text-sm text-[#666]">
            Showing {total} professionally drafted legal documents
          </p>
        </div>

        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search documents..."
            className="w-full h-11 pl-11 pr-10 text-sm bg-white border border-[#E8E4DC] focus:border-[#C89A4B] focus:ring-1 focus:ring-[#C89A4B]/20 outline-none rounded-xl transition-all"
          />
          {search && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                updateFilters({ search: "" });
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-[#F5F3EF]"
            >
              <X className="w-3.5 h-3.5 text-[#888]" />
            </button>
          )}
        </form>
      </div>

      {/* Main Grid with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Sidebar Filters */}
        <div className="space-y-6 bg-white p-6 rounded-2xl border border-[#E8E4DC]">
          <div className="flex items-center justify-between pb-4 border-b border-[#F0EBE1]">
            <span className="font-semibold text-sm text-[#111] flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#C89A4B]" />
              Filter Options
            </span>
            {(search || activeCategory || activeSort !== "popular") && (
              <button
                onClick={handleClearAll}
                className="text-xs text-[#C89A4B] hover:underline"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-semibold text-[#888] uppercase tracking-wider mb-3">
              Categories
            </h3>
            <div className="flex flex-col gap-1.5">
              <button
                onClick={() => updateFilters({ category: "" })}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                  !activeCategory
                    ? "bg-[#FBF7F0] text-[#C89A4B] font-medium"
                    : "text-[#555] hover:bg-[#F5F3EF]"
                }`}
              >
                <span>All Categories</span>
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => updateFilters({ category: cat.slug })}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                    activeCategory === cat.slug
                      ? "bg-[#FBF7F0] text-[#C89A4B] font-medium"
                      : "text-[#555] hover:bg-[#F5F3EF]"
                  }`}
                >
                  <span className="truncate">{cat.name}</span>
                  <Badge variant="secondary" className="ml-2 bg-[#F5F3EF] text-[#666] border-none font-normal text-[10px]">
                    {cat.template_count}
                  </Badge>
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="pt-4 border-t border-[#F0EBE1]">
            <h3 className="text-xs font-semibold text-[#888] uppercase tracking-wider mb-3">
              Sort By
            </h3>
            <div className="relative">
              <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#888]" />
              <select
                value={activeSort}
                onChange={(e) => updateFilters({ sort: e.target.value })}
                className="w-full h-10 pl-9 pr-4 text-sm bg-white border border-[#E8E4DC] focus:border-[#C89A4B] outline-none rounded-lg cursor-pointer appearance-none"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest First</option>
                <option value="alphabetical">Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Templates Listing Grid */}
        <div className="lg:col-span-3 space-y-8">
          {initialTemplates.length === 0 ? (
            <div className="bg-white border border-[#E8E4DC] rounded-2xl p-12 text-center">
              <AlertCircle className="w-12 h-12 text-[#C89A4B] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#111] mb-2">No templates found</h3>
              <p className="text-sm text-[#666] max-w-sm mx-auto mb-6">
                We couldn't find any templates matching your search criteria. Try removing filters or changing your query.
              </p>
              <Button onClick={handleClearAll} variant="outline" className="rounded-xl border-[#E8E4DC] hover:border-[#111]">
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initialTemplates.map((template, idx) => (
                <TemplateCard key={template.id} template={template} index={idx} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-6 border-t border-[#E8E4DC]">
              <Button
                variant="outline"
                disabled={currentPage <= 1 || isPending}
                onClick={() => updateFilters({ page: currentPage - 1 })}
                className="rounded-xl border-[#E8E4DC] flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              <span className="text-sm text-[#666]">
                Page {currentPage} of {totalPages}
              </span>

              <Button
                variant="outline"
                disabled={currentPage >= totalPages || isPending}
                onClick={() => updateFilters({ page: currentPage + 1 })}
                className="rounded-xl border-[#E8E4DC] flex items-center gap-1.5"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
