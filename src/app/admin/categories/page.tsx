import { FolderOpen, Plus, Search, Edit, Eye, Scale } from "lucide-react";
import { getAllCategories } from "@/lib/data/templates";
import { Button } from "@/components/ui/button";

export default async function AdminCategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111]">Categories Management</h1>
          <p className="text-xs text-[#888]">Organize template topics, icons, and display sorting</p>
        </div>

        <Button className="h-10 bg-[#111] hover:bg-[#C89A4B] text-white rounded-xl font-semibold flex items-center gap-1.5 shrink-0">
          <Plus className="w-4 h-4" />
          Add Category
        </Button>
      </div>

      {/* Grid Table */}
      <div className="bg-white rounded-2xl border border-[#E8E4DC] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#F0EBE1] bg-[#FAFAF8] text-[#888]">
                <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider">Category</th>
                <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider">Icon Name</th>
                <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider text-center">Active Templates</th>
                <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider text-center">Sort Order</th>
                <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EBE1] text-[#333]">
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-[#FAFAF8]/50">
                  <td className="py-4 px-6 font-semibold text-[#111] flex items-center gap-3">
                    <Scale className="w-4 h-4 text-[#C89A4B]" />
                    {category.name}
                  </td>
                  <td className="py-4 px-6 font-mono text-xs text-[#666]">
                    {category.icon}
                  </td>
                  <td className="py-4 px-6 text-center font-medium">
                    {category.template_count}
                  </td>
                  <td className="py-4 px-6 text-center text-xs font-semibold">
                    {category.sort_order}
                  </td>
                  <td className="py-4 px-6 text-right space-x-2">
                    <button className="p-1.5 hover:bg-[#F5F3EF] rounded-lg text-[#888] hover:text-[#C89A4B] transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
