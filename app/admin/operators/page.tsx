"use client";

import { motion } from "framer-motion";
import { branchOperators } from "@/constants/branch";

export default function AdminOperatorsPage() {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Operators</motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {branchOperators.map((op, i) => (
          <motion.div key={op.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-white p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-dark-text">{op.name}</h3>
              <span className={`text-xs font-semibold px-2 py-1 ${op.status === "on-job" ? "text-accent bg-accent/10" : "text-success bg-success/10"}`}>{op.status}</span>
            </div>
            <p className="text-xs text-gray">{op.specialization}</p>
            <p className="text-xs text-gray">Jobs this month: {op.jobs}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}