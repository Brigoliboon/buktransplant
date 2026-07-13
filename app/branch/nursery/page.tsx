"use client";

import { motion } from "framer-motion";
import { Sprout } from "lucide-react";

const seedlingData = [
  { variety: "NSIC Rc160", trays: 2500, ready: "Jun 25", status: "growing" },
  { variety: "NSIC Rc222", trays: 3000, ready: "Jun 28", status: "growing" },
  { variety: "NSIC Rc300", trays: 2000, ready: "Jul 02", status: "seeding" },
  { variety: "NSIC Rc400", trays: 3500, ready: "Ready", status: "available" },
  { variety: "Traditional", trays: 1500, ready: "Jul 05", status: "seeding" },
];

export default function NurseryPage() {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Nursery</motion.h1>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-accent/10 flex items-center justify-center">
              <Sprout className="w-7 h-7 text-accent" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-3xl font-bold text-dark-text">12,500</p>
              <p className="text-sm text-gray">Total Seedling Trays</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-success/10 flex items-center justify-center">
              <Sprout className="w-7 h-7 text-success" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-3xl font-bold text-dark-text">3,500</p>
              <p className="text-sm text-gray">Ready for Transplant</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left">
                <th className="p-4 font-semibold text-gray">Rice Variety</th>
                <th className="p-4 font-semibold text-gray">Trays</th>
                <th className="p-4 font-semibold text-gray">Ready Date</th>
                <th className="p-4 font-semibold text-gray">Status</th>
              </tr>
            </thead>
            <tbody>
              {seedlingData.map((s, i) => (
                <motion.tr
                  key={s.variety}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-gray-50"
                >
                  <td className="p-4 font-medium text-dark-text">{s.variety}</td>
                  <td className="p-4 text-gray">{s.trays.toLocaleString()}</td>
                  <td className="p-4 text-gray">{s.ready}</td>
                  <td className="p-4">
                    <span className={`text-xs font-semibold px-2 py-1 ${
                      s.status === "available" ? "text-success bg-success/10" :
                      s.status === "growing" ? "text-accent bg-accent/10" : "text-warning bg-warning/10"
                    }`}>{s.status}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}