import { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard, FileText, FolderOpen, Mail, BarChart3, Settings, LogOut, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Panel | Turn2Law",
  robots: "noindex, nofollow",
};

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const sidebarLinks = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/templates", label: "Templates", icon: FileText },
    { href: "/admin/categories", label: "Categories", icon: FolderOpen },
    { href: "/admin/leads", label: "Leads", icon: Mail },
    { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-white border-r border-[#E8E4DC] flex flex-col justify-between shrink-0 fixed inset-y-0 left-0 z-30">
        <div>
          {/* Logo & Header */}
          <div className="h-16 border-b border-[#E8E4DC] flex items-center justify-between px-6">
            <Link href="/" className="flex items-center gap-1">
              <span className="font-bold text-sm tracking-tight text-[#111]">
                TURN<span className="text-[#C89A4B]">2LAW</span>
              </span>
              <span className="text-[10px] bg-[#F5F3EF] text-[#666] px-1.5 py-0.5 rounded font-mono font-bold">
                ADMIN
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-[#555] hover:text-[#111] hover:bg-[#F5F3EF] rounded-xl transition-all"
                >
                  <Icon className="w-4 h-4 text-[#888]" />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-[#E8E4DC] space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-[#555] hover:text-[#111] hover:bg-[#F5F3EF] rounded-xl transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-[#888]" />
            Back to Site
          </Link>
          <a
            href="/api/admin/logout"
            className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-all"
          >
            <LogOut className="w-4 h-4 text-red-500" />
            Logout
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 pl-64">
        {/* Top Header Bar */}
        <header className="h-16 bg-white border-b border-[#E8E4DC] flex items-center justify-between px-8 sticky top-0 z-20">
          <div className="text-sm font-semibold text-[#555]">
            Welcome back, System Admin
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C89A4B] to-[#A67D3D] text-white flex items-center justify-center font-bold text-sm shadow-sm">
              A
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8 max-w-7xl mx-auto">{children}</main>
      </div>
    </div>
  );
}
