import Link from "next/link";
import { FileText, Download, Plus, Search, Edit, Eye, ToggleLeft, ToggleRight, Trash2 } from "lucide-react";
import { getAllTemplates } from "@/lib/data/templates";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default async function AdminTemplatesPage() {
  const result = await getAllTemplates({ sort: "alphabetical" });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111]">Templates Management</h1>
          <p className="text-xs text-[#888]">Browse, edit, publish, and delete templates in the catalog</p>
        </div>

        <Button className="h-10 bg-[#111] hover:bg-[#C89A4B] text-white rounded-xl font-semibold flex items-center gap-1.5 shrink-0">
          <Plus className="w-4 h-4" />
          Add Template
        </Button>
      </div>

      {/* Filters & Search controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white border border-[#E8E4DC] p-4 rounded-xl shadow-sm">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888]" />
          <input
            type="text"
            placeholder="Search templates..."
            className="w-full h-9 pl-9 pr-4 text-xs bg-white border border-[#E8E4DC] rounded-lg outline-none focus:border-[#C89A4B] transition-all"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <select className="h-9 px-3 text-xs bg-white border border-[#E8E4DC] rounded-lg outline-none">
            <option value="all">All Categories</option>
            <option value="startup">Startup</option>
            <option value="employment">Employment</option>
          </select>
          <select className="h-9 px-3 text-xs bg-white border border-[#E8E4DC] rounded-lg outline-none">
            <option value="all">All Statuses</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Grid List Table */}
      <div className="bg-white rounded-2xl border border-[#E8E4DC] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#F0EBE1] bg-[#FAFAF8] text-[#888]">
                <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider">Title</th>
                <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider">Category</th>
                <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider text-center">Downloads</th>
                <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider text-center">Est. Time</th>
                <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider text-center">Status</th>
                <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EBE1] text-[#333]">
              {result.templates.map((template) => (
                <tr key={template.id} className="hover:bg-[#FAFAF8]/50">
                  <td className="py-4 px-6 font-semibold text-[#111] max-w-xs truncate">
                    {template.title}
                  </td>
                  <td className="py-4 px-6">
                    {template.category && (
                      <Badge variant="secondary" className="bg-[#F5F3EF] text-[#666] border-none font-normal text-xs">
                        {template.category.name}
                      </Badge>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center font-medium">
                    {template.download_count.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-center text-xs text-[#666]">
                    {template.estimated_reading_time} mins
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                      Published
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right space-x-2">
                    <Link href={`/templates/${template.slug}`} target="_blank">
                      <button className="p-1.5 hover:bg-[#F5F3EF] rounded-lg text-[#888] hover:text-[#111] transition-colors" title="View details">
                        <Eye className="w-4 h-4" />
                      </button>
                    </Link>
                    <button className="p-1.5 hover:bg-[#F5F3EF] rounded-lg text-[#888] hover:text-[#C89A4B] transition-colors" title="Edit properties">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 hover:bg-red-50 rounded-lg text-[#888] hover:text-red-600 transition-colors" title="Delete template">
                      <Trash2 className="w-4 h-4" />
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
