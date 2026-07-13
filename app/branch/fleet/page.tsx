"use client";

import { motion } from "framer-motion";
import { branchFleet } from "@/constants/branch";

const statusColors: Record<string, string> = {
  active: "text-success bg-success/10",
  maintenance: "text-warning bg-warning/10",
  idle: "text-gray bg-gray/10",
};

export default function BranchFleetPage() {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Fleet</motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {branchFleet.map((m, i) => (
          <motion.div
            key={m.plate}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white p-5"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-dark-text">{m.name}</h3>
              <span className={`text-xs font-semibold px-2 py-1 ${statusColors[m.status]}`}>{m.status}</span>
            </div>
            <p className="text-xs text-gray">Plate: {m.plate}</p>
            <p className="text-xs text-gray">Operator: {m.operator}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}