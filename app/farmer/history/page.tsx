"use client";

import { motion } from "framer-motion";
import { farmerBookings } from "@/constants/farmer";

export default function BookingHistoryPage() {
  const completed = farmerBookings.filter((b) => b.status === "completed");

  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Booking History</motion.h1>

      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left">
                <th className="p-4 font-semibold text-gray">Reference</th>
                <th className="p-4 font-semibold text-gray">Package</th>
                <th className="p-4 font-semibold text-gray">Date</th>
                <th className="p-4 font-semibold text-gray">Location</th>
                <th className="p-4 font-semibold text-gray">Amount</th>
              </tr>
            </thead>
            <tbody>
              {completed.map((b, i) => (
                <motion.tr
                  key={b.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-gray-50"
                >
                  <td className="p-4 font-medium text-dark-text">{b.refNo}</td>
                  <td className="p-4 text-gray">{b.package}</td>
                  <td className="p-4 text-gray">{b.date}</td>
                  <td className="p-4 text-gray">{b.location}</td>
                  <td className="p-4 text-dark-text">₱{b.amount.toLocaleString()}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        {completed.length === 0 && <p className="p-4 text-gray text-sm">No completed bookings yet.</p>}
      </div>
    </div>
  );
}