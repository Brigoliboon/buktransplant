"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const reports = [
  { title: "Service Completion Report - BKT-2026-001", date: "Jun 10, 2026", type: "PDF" },
  { title: "Payment Receipt - BKT-2026-001", date: "Jun 08, 2026", type: "PDF" },
  { title: "Service Completion Report - BKT-2025-012", date: "May 20, 2026", type: "PDF" },
];

export default function ReportsPage() {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Reports</motion.h1>

      <div className="space-y-3">
        {reports.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white p-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-semibold text-dark-text text-sm">{r.title}</p>
                <p className="text-xs text-gray">{r.date} &middot; {r.type}</p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-primary text-sm font-semibold hover:underline">
              <Download className="w-4 h-4" strokeWidth={1.5} /> Download
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}