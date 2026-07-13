"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  LayoutDashboard, CalendarCheck, Users, UserPlus, Building2, Tractor, Wrench,
  Sprout, CreditCard, FileText, BarChart3, Megaphone, Globe, Settings, ArrowRight,
} from "lucide-react";

const links = [
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

export default function AdminIndexPage() {
  return (
    <div className="pt-24 pb-20 px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-dark-text">Admin Panel</h1>
        <p className="text-gray mt-2">Full system management and configuration.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {links.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
              <Link href={item.href} className="block bg-white p-5 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                  <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-dark-text text-sm">{item.label}</h3>
                <span className="text-xs text-primary group-hover:underline inline-flex items-center gap-1 mt-1">
                  Go <ArrowRight className="w-3 h-3" strokeWidth={2} />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}