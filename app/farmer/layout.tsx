"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarCheck,
  CreditCard,
  FileText,
  Clock,
  Bell,
  Settings,
  User,
  Menu,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/farmer/dashboard", icon: LayoutDashboard },
  { label: "My Bookings", href: "/farmer/bookings", icon: CalendarCheck },
  { label: "Payments", href: "/farmer/payments", icon: CreditCard },
  { label: "Reports", href: "/farmer/reports", icon: FileText },
  { label: "Booking History", href: "/farmer/history", icon: Clock },
  { label: "Notifications", href: "/farmer/notifications", icon: Bell },
  { label: "Settings", href: "/farmer/settings", icon: Settings },
  { label: "Profile", href: "/farmer/profile", icon: User },
];

export default function FarmerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-light-bg pt-16">
      <aside className={`fixed md:sticky top-16 left-0 z-30 h-[calc(100vh-4rem)] bg-white border-r border-gray-100 transition-all duration-300 ${sidebarOpen ? "w-64" : "w-0 md:w-64 overflow-hidden md:overflow-visible"}`}>
        <div className="p-4">
          <p className="text-xs text-gray uppercase tracking-wider font-semibold mb-4">Farmer Menu</p>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors ${
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
        <div className="absolute bottom-4 left-4 right-4">
          <Link href="/login" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray hover:text-error transition-colors">
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