"use client";

import { motion } from "framer-motion";
import { farmerPayments } from "@/constants/farmer";

const statusColors: Record<string, string> = {
  paid: "text-success bg-success/10",
  pending: "text-warning bg-warning/10",
  failed: "text-error bg-error/10",
};

export default function PaymentsPage() {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Payments</motion.h1>

      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left">
                <th className="p-4 font-semibold text-gray">Reference</th>
                <th className="p-4 font-semibold text-gray">Amount</th>
                <th className="p-4 font-semibold text-gray">Method</th>
                <th className="p-4 font-semibold text-gray">Date</th>
                <th className="p-4 font-semibold text-gray">Status</th>
              </tr>
            </thead>
            <tbody>
              {farmerPayments.map((p, i) => (
                <motion.tr
                  key={p.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-gray-50"
                >
                  <td className="p-4 font-medium text-dark-text">{p.refNo}</td>
                  <td className="p-4 text-dark-text">₱{p.amount.toLocaleString()}</td>
                  <td className="p-4 text-gray">{p.method}</td>
                  <td className="p-4 text-gray">{p.date}</td>
                  <td className="p-4">
                    <span className={`text-xs font-semibold px-2 py-1 ${statusColors[p.status]}`}>{p.status}</span>
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