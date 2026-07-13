"use client";

import { motion } from "framer-motion";
import { Sprout } from "lucide-react";

const nurseries = [
  { branch: "Malaybalay City", trays: 3500, varieties: 4, ready: 1200, status: "active" },
  { branch: "Valencia City", trays: 4200, varieties: 5, ready: 1800, status: "active" },
  { branch: "Quezon", trays: 2800, varieties: 3, ready: 800, status: "active" },
  { branch: "Maramag", trays: 2000, varieties: 3, ready: 700, status: "active" },
];

export default function AdminNurseriesPage() {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Nurseries</motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {nurseries.map((n, i) => (
          <motion.div key={n.branch} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-white p-5">
            <div className="flex items-center gap-3 mb-3">
              <Sprout className="w-6 h-6 text-accent" strokeWidth={1.5} />
              <h3 className="font-bold text-dark-text">{n.branch}</h3>
            </div>
            <p className="text-sm text-gray">{n.trays.toLocaleString()} trays</p>
            <p className="text-sm text-gray">{n.varieties} varieties</p>
            <p className="text-sm text-success font-semibold">{n.ready.toLocaleString()} ready</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white p-6">
        <h2 className="text-lg font-bold text-dark-text mb-2">Seedling Summary</h2>
        <div className="flex gap-8">
          <div><p className="text-2xl font-bold text-dark-text">12,500</p><p className="text-xs text-gray">Total Trays</p></div>
          <div><p className="text-2xl font-bold text-dark-text">4,500</p><p className="text-xs text-gray">Ready for Transplant</p></div>
          <div><p className="text-2xl font-bold text-dark-text">5</p><p className="text-xs text-gray">Rice Varieties</p></div>
        </div>
      </div>
    </div>
  );
}