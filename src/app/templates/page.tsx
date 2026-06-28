import { Metadata } from "next";
import { getAllCategories, getAllTemplates } from "@/lib/data/templates";
import { TemplatesClient } from "./templates-client";

export const metadata: Metadata = {
  title: "Browse Legal Templates",
  description: "Explore our collection of professionally drafted, fully customizable legal templates. Free downloads for businesses, startups, and HR.",
};

type SearchParams = Promise<{
  search?: string;
  category?: string;
  sort?: string;
  page?: string;
}>;

export default async function TemplatesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const resolvedParams = await searchParams;
  const categories = await getAllCategories();

  const search = resolvedParams.search || "";
  const category = resolvedParams.category || "";
  const sort = (resolvedParams.sort as any) || "popular";
  const page = parseInt(resolvedParams.page || "1", 10);

  const result = await getAllTemplates({
    search,
    category,
    sort,
    page,
  });

  return (
    <div className="bg-[#FAFAF8] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TemplatesClient
          initialTemplates={result.templates}
          categories={categories}
          total={result.total}
          currentPage={page}
          perPage={result.per_page}
        />
      </div>
    </div>
  );
}
