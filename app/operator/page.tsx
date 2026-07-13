"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LayoutDashboard, ClipboardList, FileText, User, ArrowRight } from "lucide-react";

const links = [
  { label: "Dashboard", href: "/operator/dashboard", icon: LayoutDashboard, desc: "View your performance and upcoming jobs." },
  { label: "Assigned Jobs", href: "/operator/jobs", icon: ClipboardList, desc: "Manage your assigned transplanting jobs." },
  { label: "Reports", href: "/operator/reports", icon: FileText, desc: "View your completed job reports." },
  { label: "Profile", href: "/operator/profile", icon: User, desc: "Manage your personal information." },
];

export default function OperatorIndexPage() {
  return (
    <div className="pt-24 pb-20 px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-dark-text">Operator Panel</h1>
        <p className="text-gray mt-2">Manage your jobs, navigation, and reports.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {links.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.href} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <Link href={item.href} className="block bg-white p-6 h-full hover:shadow-md transition-shadow group">
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