"use client";

import { motion } from "framer-motion";
import { adminBookings } from "@/constants/admin";

const statusColors: Record<string, string> = {
  completed: "text-success bg-success/10",
  "in-progress": "text-accent bg-accent/10",
  scheduled: "text-primary bg-primary/10",
  pending: "text-warning bg-warning/10",
};

export default function AdminBookingsPage() {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">All Bookings</motion.h1>

      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left">
                <th className="p-4 font-semibold text-gray">Ref</th>
                <th className="p-4 font-semibold text-gray">Farmer</th>
                <th className="p-4 font-semibold text-gray">Branch</th>
                <th className="p-4 font-semibold text-gray">Package</th>
                <th className="p-4 font-semibold text-gray">Date</th>
                <th className="p-4 font-semibold text-gray">Status</th>
                <th className="p-4 font-semibold text-gray">Amount</th>
              </tr>
            </thead>
            <tbody>
              {adminBookings.map((b, i) => (
                <motion.tr key={b.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="p-4 font-medium text-dark-text">{b.refNo}</td>
                  <td className="p-4 text-gray">{b.farmer}</td>
                  <td className="p-4 text-gray">{b.branch}</td>
                  <td className="p-4 text-gray">{b.package}</td>
                  <td className="p-4 text-gray">{b.date}</td>
                  <td className="p-4"><span className={`text-xs font-semibold px-2 py-1 ${statusColors[b.status]}`}>{b.status}</span></td>
                  <td className="p-4 text-dark-text">₱{b.amount.toLocaleString()}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}