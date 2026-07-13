"use client";

import { motion } from "framer-motion";
import { adminFarmers } from "@/constants/admin";

export default function AdminFarmersPage() {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Farmers</motion.h1>

      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left">
                <th className="p-4 font-semibold text-gray">Name</th>
                <th className="p-4 font-semibold text-gray">Farm</th>
                <th className="p-4 font-semibold text-gray">Hectares</th>
                <th className="p-4 font-semibold text-gray">Branch</th>
                <th className="p-4 font-semibold text-gray">Bookings</th>
                <th className="p-4 font-semibold text-gray">Status</th>
              </tr>
            </thead>
            <tbody>
              {adminFarmers.map((f, i) => (
                <motion.tr key={f.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="border-b border-gray-50">
                  <td className="p-4 font-medium text-dark-text">{f.name}</td>
                  <td className="p-4 text-gray">{f.farm}</td>
                  <td className="p-4 text-gray">{f.hectares}ha</td>
                  <td className="p-4 text-gray">{f.branch}</td>
                  <td className="p-4 text-gray">{f.bookings}</td>
                  <td className="p-4"><span className={`text-xs font-semibold px-2 py-1 ${f.status === "active" ? "text-success bg-success/10" : "text-gray bg-gray/10"}`}>{f.status}</span></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}