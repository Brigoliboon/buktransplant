"use client";

import { motion } from "framer-motion";
import { branchFleet } from "@/constants/branch";

const statusColors: Record<string, string> = {
  active: "text-success bg-success/10",
  maintenance: "text-warning bg-warning/10",
  idle: "text-gray bg-gray/10",
};

export default function AdminFleetPage() {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Fleet</motion.h1>

      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left">
                <th className="p-4 font-semibold text-gray">Machine</th>
                <th className="p-4 font-semibold text-gray">Plate</th>
                <th className="p-4 font-semibold text-gray">Operator</th>
                <th className="p-4 font-semibold text-gray">Status</th>
              </tr>
            </thead>
            <tbody>
              {branchFleet.map((m, i) => (
                <motion.tr key={m.plate} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} className="border-b border-gray-50">
                  <td className="p-4 font-medium text-dark-text">{m.name}</td>
                  <td className="p-4 text-gray">{m.plate}</td>
                  <td className="p-4 text-gray">{m.operator}</td>
                  <td className="p-4"><span className={`text-xs font-semibold px-2 py-1 ${statusColors[m.status]}`}>{m.status}</span></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}