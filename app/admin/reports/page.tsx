"use client";

import { motion } from "framer-motion";
import { Download, BarChart3, Users, Tractor, TrendingUp, Building2 } from "lucide-react";

const reports = [
  { title: "Company Performance Report", period: "Q2 2026", icon: BarChart3 },
  { title: "Branch Comparison Report", period: "May 2026", icon: Building2 },
  { title: "Operator Productivity Report", period: "May 2026", icon: Users },
  { title: "Fleet Utilization Report", period: "May 2026", icon: Tractor },
  { title: "Revenue & Financial Report", period: "May 2026", icon: TrendingUp },
  { title: "Farmer Growth Report", period: "May 2026", icon: Users },
];

export default function AdminReportsPage() {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Reports</motion.h1>

      <div className="grid md:grid-cols-2 gap-4">
        {reports.map((r, i) => {
          const Icon = r.icon;
          return (
            <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} className="bg-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-dark-text">{r.title}</p>
                  <p className="text-xs text-gray">{r.period}</p>
                </div>
              </div>
              <button className="text-primary hover:underline"><Download className="w-5 h-5" strokeWidth={1.5} /></button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}