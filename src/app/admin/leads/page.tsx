import { Mail, Download, Search, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockLeads = [
  { id: "1", email: "subham@turn2law.com", template: "Co-Founder Agreement", date: "June 28, 2026", source: "download" },
  { id: "2", email: "preeti.singh@startup.in", template: "Employment Offer Letter", date: "June 28, 2026", source: "download" },
  { id: "3", email: "aditya.k@fintechlabs.co", template: "SAFE Note Agreement", date: "June 28, 2026", source: "download" },
  { id: "4", email: "meera.r@freelance.org", template: "Consulting Agreement", date: "June 28, 2026", source: "download" },
  { id: "5", email: "rahul.sharma@corp.co.in", template: "General NDA", date: "June 28, 2026", source: "download" },
  { id: "6", email: "priya.n@gmail.com", template: "Employee Handbook", date: "June 27, 2026", source: "download" },
  { id: "7", email: "karan.m@gmail.com", template: "Terms of Service", date: "June 27, 2026", source: "download" },
  { id: "8", email: "vivek.gupta@hryou.com", template: "Performance Review Form", date: "June 26, 2026", source: "download" },
  { id: "9", email: "sneha.patel@gmail.com", template: "General NDA", date: "June 26, 2026", source: "newsletter" },
  { id: "10", email: "arjun.das@lawcorp.com", template: "SAFE Note Agreement", date: "June 25, 2026", source: "download" },
];

export default function AdminLeadsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111]">Email Leads</h1>
          <p className="text-xs text-[#888]">Captured user emails for legal templates and marketing</p>
        </div>

        <Button className="h-10 bg-[#111] hover:bg-[#C89A4B] text-white rounded-xl font-semibold flex items-center gap-1.5 shrink-0">
          <FileDown className="w-4 h-4" />
          Export CSV
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white border border-[#E8E4DC] p-4 rounded-xl shadow-sm">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888]" />
          <input
            type="text"
            placeholder="Search leads by email..."
            className="w-full h-9 pl-9 pr-4 text-xs bg-white border border-[#E8E4DC] rounded-lg outline-none focus:border-[#C89A4B] transition-all"
          />
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-2xl border border-[#E8E4DC] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#F0EBE1] bg-[#FAFAF8] text-[#888]">
                <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider">Email Address</th>
                <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider">Acquired Via</th>
                <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider">Source Type</th>
                <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider text-right">Date Captured</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EBE1] text-[#333]">
              {mockLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-[#FAFAF8]/50">
                  <td className="py-4 px-6 font-medium text-[#111]">
                    {lead.email}
                  </td>
                  <td className="py-4 px-6 text-[#555]">
                    {lead.template}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      lead.source === "download" ? "bg-[#FBF7F0] text-[#A67D3D]" : "bg-blue-50 text-blue-700"
                    }`}>
                      {lead.source}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right text-xs text-[#888]">
                    {lead.date}
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
