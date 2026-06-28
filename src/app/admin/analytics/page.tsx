import { BarChart3, Download, TrendingUp, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminAnalyticsPage() {
  const topDownloaded = [
    { title: "General Non-Disclosure Agreement (NDA)", count: 4521, percent: "24.5%" },
    { title: "Terms of Service", count: 3456, percent: "18.7%" },
    { title: "Employment Contract (Full-Time)", count: 3102, percent: "16.8%" },
    { title: "Employee Handbook", count: 2876, percent: "15.6%" },
    { title: "Freelancer Service Agreement", count: 2654, percent: "14.4%" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#111]">Library Analytics</h1>
        <p className="text-xs text-[#888]">Monitor catalog traffic, popular documents, and user acquisition metrics</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-[#E8E4DC] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold text-[#888] uppercase tracking-wider">
              Total Traffic
            </CardTitle>
            <TrendingUp className="w-4 h-4 text-[#C89A4B]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14,284</div>
            <p className="text-[10px] text-green-600 mt-1 font-medium">+18.5% page views this month</p>
          </CardContent>
        </Card>

        <Card className="border-[#E8E4DC] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold text-[#888] uppercase tracking-wider">
              Conversion Rate
            </CardTitle>
            <Users className="w-4 h-4 text-[#C89A4B]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">19.8%</div>
            <p className="text-[10px] text-green-600 mt-1 font-medium">Visitor to lead conversion</p>
          </CardContent>
        </Card>

        <Card className="border-[#E8E4DC] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-semibold text-[#888] uppercase tracking-wider">
              Downloads logged
            </CardTitle>
            <Download className="w-4 h-4 text-[#C89A4B]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-[10px] text-[#888] mt-1 font-medium">Logged downloads this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Top Downloaded Items */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#E8E4DC] p-6 shadow-sm">
          <h2 className="text-base font-bold text-[#111] pb-4 border-b border-[#F0EBE1] mb-6">
            Top Downloaded Templates
          </h2>
          <div className="space-y-6">
            {topDownloaded.map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-[#111] truncate max-w-md">{item.title}</span>
                  <span className="text-xs font-bold text-[#555]">{item.count.toLocaleString()} ({item.percent})</span>
                </div>
                {/* Visual bar graph representation */}
                <div className="w-full bg-[#F5F3EF] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#C89A4B] h-full rounded-full"
                    style={{ width: `${80 - i * 12}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Share */}
        <div className="bg-white rounded-2xl border border-[#E8E4DC] p-6 shadow-sm">
          <h2 className="text-base font-bold text-[#111] pb-4 border-b border-[#F0EBE1] mb-6">
            Categories Share
          </h2>
          <div className="space-y-4">
            {[
              { name: "Startup", pct: "32%" },
              { name: "Website", pct: "25%" },
              { name: "Employment", pct: "18%" },
              { name: "Legal", pct: "15%" },
              { name: "HR", pct: "10%" },
            ].map((cat, i) => (
              <div key={i} className="flex items-center justify-between text-xs font-semibold">
                <span className="text-[#555]">{cat.name}</span>
                <span className="text-[#C89A4B] bg-[#FBF7F0] px-2 py-0.5 rounded-md">{cat.pct}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
