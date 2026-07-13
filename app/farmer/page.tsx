"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  LayoutDashboard,
  CalendarCheck,
  CreditCard,
  FileText,
  Clock,
  Bell,
  Settings,
  User,
  ArrowRight,
} from "lucide-react";

const links = [
  { label: "Dashboard", href: "/farmer/dashboard", icon: LayoutDashboard, desc: "View your farm activity at a glance." },
  { label: "My Bookings", href: "/farmer/bookings", icon: CalendarCheck, desc: "Manage and monitor your service bookings." },
  { label: "Payments", href: "/farmer/payments", icon: CreditCard, desc: "View payment history and receipts." },
  { label: "Reports", href: "/farmer/reports", icon: FileText, desc: "Download service completion reports." },
  { label: "Booking History", href: "/farmer/history", icon: Clock, desc: "Browse your past completed bookings." },
  { label: "Notifications", href: "/farmer/notifications", icon: Bell, desc: "Stay updated with alerts and notices." },
  { label: "Settings", href: "/farmer/settings", icon: Settings, desc: "Customize your preferences." },
  { label: "Profile", href: "/farmer/profile", icon: User, desc: "Manage your personal information." },
];

export default function FarmerIndexPage() {
  return (
    <div className="pt-24 pb-20 px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-dark-text">Farmer Portal</h1>
        <p className="text-gray mt-2">Manage your bookings, payments, and account settings.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {links.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={item.href}
                className="block bg-white p-6 h-full hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-dark-text mb-1">{item.label}</h3>
                <p className="text-sm text-gray mb-3">{item.desc}</p>
                <span className="text-sm font-semibold text-primary group-hover:underline inline-flex items-center gap-1">
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