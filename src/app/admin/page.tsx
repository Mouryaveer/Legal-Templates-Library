import Link from "next/link";
import { FileText, Download, Mail, ArrowUpRight, BarChart3 } from "lucide-react";
import { getSiteStats, getPopularTemplates } from "@/lib/data/templates";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AdminDashboardPage() {
  const stats = await getSiteStats();
  const popularTemplates = await getPopularTemplates(5);

  const mockRecentLeads = [
    { email: "subham@turn2law.com", template: "Co-Founder Agreement", date: "Just now" },
    { email: "preeti.singh@startup.in", template: "Employment Offer Letter", date: "5 mins ago" },
    { email: "aditya.k@fintechlabs.co", template: "SAFE Note Agreement", date: "20 mins ago" },
    { email: "meera.r@freelance.org", template: "Consulting Agreement", date: "1 hour ago" },
    { email: "rahul.sharma@corp.co.in", template: "General NDA", date: "2 hours ago" },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#111]">Dashboard Overview</h1>
        <p className="text-xs text-[#888]">Analytics, leads, and catalog statistics</p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-[#E8E4DC] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold text-[#888] uppercase tracking-wider">
              Total Templates
            </CardTitle>
            <FileText className="w-4 h-4 text-[#C89A4B]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total_templates}</div>
            <p className="text-[10px] text-green-600 mt-1 font-medium">Active in catalog</p>
          </CardContent>
        </Card>

        <Card className="border-[#E8E4DC] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold text-[#888] uppercase tracking-wider">
              Total Downloads
            </CardTitle>
            <Download className="w-4 h-4 text-[#C89A4B]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total_downloads.toLocaleString()}</div>
            <p className="text-[10px] text-green-600 mt-1 font-medium">+14.2% from last week</p>
          </CardContent>
        </Card>

        <Card className="border-[#E8E4DC] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold text-[#888] uppercase tracking-wider">
              Email Leads
            </CardTitle>
            <Mail className="w-4 h-4 text-[#C89A4B]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total_leads.toLocaleString()}</div>
            <p className="text-[10px] text-green-600 mt-1 font-medium">+28 new today</p>
          </CardContent>
        </Card>

        <Card className="border-[#E8E4DC] shadow-sm bg-[#111] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold text-[#888] uppercase tracking-wider">
              Premium DocEngine
            </CardTitle>
            <BarChart3 className="w-4 h-4 text-[#C89A4B]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Active</div>
            <p className="text-[10px] text-[#888] mt-1 font-medium">AI Customizer Integration</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Sections (Split Column) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Leads */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#E8E4DC] p-6 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-[#F0EBE1] mb-4">
            <h2 className="text-base font-bold text-[#111]">Recent Email Leads</h2>
            <Link
              href="/admin/leads"
              className="text-xs text-[#C89A4B] font-semibold hover:underline flex items-center gap-0.5"
            >
              View all leads
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#F0EBE1] text-[#888]">
                  <th className="pb-3 font-semibold text-xs uppercase tracking-wider">Email</th>
                  <th className="pb-3 font-semibold text-xs uppercase tracking-wider">Requested Template</th>
                  <th className="pb-3 font-semibold text-xs uppercase tracking-wider text-right">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0EBE1] text-[#333]">
                {mockRecentLeads.map((lead, i) => (
                  <tr key={i} className="hover:bg-[#FAFAF8]">
                    <td className="py-3.5 font-medium">{lead.email}</td>
                    <td className="py-3.5 text-[#555]">{lead.template}</td>
                    <td className="py-3.5 text-[#888] text-right text-xs">{lead.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Popular Downloads Summary */}
        <div className="bg-white rounded-2xl border border-[#E8E4DC] p-6 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-[#F0EBE1] mb-4">
            <h2 className="text-base font-bold text-[#111]">Popular Templates</h2>
            <Link
              href="/admin/templates"
              className="text-xs text-[#C89A4B] font-semibold hover:underline"
            >
              Manage catalog
            </Link>
          </div>
          <div className="space-y-4">
            {popularTemplates.map((template, idx) => (
              <div key={template.id} className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#111] truncate">{template.title}</p>
                  <p className="text-[10px] text-[#888]">{template.category?.name || "General"}</p>
                </div>
                <div className="text-right ml-4">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#111]">
                    <Download className="w-3 h-3 text-[#C89A4B]" />
                    {template.download_count.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
