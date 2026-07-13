"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarCheck,
  Users,
  UserPlus,
  Building2,
  Tractor,
  Wrench,
  Sprout,
  CreditCard,
  FileText,
  BarChart3,
  Megaphone,
  Globe,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Bookings", href: "/admin/bookings", icon: CalendarCheck },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Farmers", href: "/admin/farmers", icon: UserPlus },
  { label: "Branches", href: "/admin/branches", icon: Building2 },
  { label: "Fleet", href: "/admin/fleet", icon: Tractor },
  { label: "Operators", href: "/admin/operators", icon: Wrench },
  { label: "Nurseries", href: "/admin/nurseries", icon: Sprout },
  { label: "Payments", href: "/admin/payments", icon: CreditCard },
  { label: "Reports", href: "/admin/reports", icon: FileText },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Promotions", href: "/admin/promotions", icon: Megaphone },
  { label: "Website Content", href: "/admin/content", icon: Globe },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-light-bg pt-16">
      <aside className={`fixed md:sticky top-16 left-0 z-30 h-[calc(100vh-4rem)] bg-white border-r border-gray-100 overflow-y-auto transition-all duration-300 ${sidebarOpen ? "w-64" : "w-0 md:w-64 overflow-hidden md:overflow-visible"}`}>
        <div className="p-4">
          <p className="text-xs text-gray uppercase tracking-wider font-semibold mb-4">Admin Panel</p>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors ${
                    active ? "bg-primary text-white" : "text-gray hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="p-4 border-t border-gray-100">
          <Link href="/login" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray hover:text-error transition-colors">
            <LogOut className="w-4 h-4" strokeWidth={1.5} />
            Sign Out
          </Link>
        </div>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 bg-black/40 z-20 md:hidden" onClick={() => setSidebarOpen(false)} />}

      <main className="flex-1 p-4 md:p-8">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden flex items-center gap-2 text-gray mb-4 hover:text-primary transition-colors">
          <Menu className="w-5 h-5" strokeWidth={1.5} />
          <span className="text-sm font-medium">Menu</span>
        </button>
        {children}
      </main>
    </div>
  );
}