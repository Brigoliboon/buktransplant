"use client";

import { motion } from "framer-motion";
import { Globe, Edit3, Eye } from "lucide-react";

const pages = [
  { name: "Home Page", lastEdited: "Jun 12, 2026", status: "published" },
  { name: "About Page", lastEdited: "Jun 10, 2026", status: "published" },
  { name: "Services Page", lastEdited: "Jun 08, 2026", status: "published" },
  { name: "Fleet Page", lastEdited: "Jun 05, 2026", status: "published" },
  { name: "FAQs Page", lastEdited: "May 28, 2026", status: "published" },
  { name: "Contact Page", lastEdited: "May 25, 2026", status: "published" },
];

export default function ContentPage() {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Website Content</motion.h1>

      <div className="bg-white">
        {pages.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center justify-between p-4 border-b border-gray-50 last:border-0"
          >
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <div>
                <p className="font-semibold text-dark-text text-sm">{p.name}</p>
                <p className="text-xs text-gray">Last edited: {p.lastEdited}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-success bg-success/10 px-2 py-1 font-semibold">{p.status}</span>
              <button className="text-gray hover:text-primary transition-colors"><Edit3 className="w-4 h-4" strokeWidth={1.5} /></button>
              <button className="text-gray hover:text-primary transition-colors"><Eye className="w-4 h-4" strokeWidth={1.5} /></button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}