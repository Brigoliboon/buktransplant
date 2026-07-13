"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useBookings } from "@/lib/bookings";
import { useAuth } from "@/lib/auth";

const statusColors: Record<string, string> = {
  completed: "text-success bg-success/10",
  "in-progress": "text-accent bg-accent/10",
  scheduled: "text-primary bg-primary/10",
  pending: "text-warning bg-warning/10",
  cancelled: "text-error bg-error/10",
};

export default function MyBookingsPage() {
  const { bookings } = useBookings();
  const { user } = useAuth();
  const myBookings = bookings.filter((b) => b.farmer === user?.name);

  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">My Bookings</motion.h1>

      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left">
                <th className="p-4 font-semibold text-gray">Reference</th>
                <th className="p-4 font-semibold text-gray">Package</th>
                <th className="p-4 font-semibold text-gray">Date</th>
                <th className="p-4 font-semibold text-gray">Location</th>
                <th className="p-4 font-semibold text-gray">Status</th>
                <th className="p-4 font-semibold text-gray">Amount</th>
                <th className="p-4 font-semibold text-gray">Action</th>
              </tr>
            </thead>
            <tbody>
              {myBookings.map((b, i) => (
                <motion.tr
                  key={b.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4 font-medium text-dark-text">{b.refNo}</td>
                  <td className="p-4 text-gray">{b.packageName}</td>
                  <td className="p-4 text-gray">{b.date}</td>
                  <td className="p-4 text-gray">{b.location}</td>
                  <td className="p-4">
                    <span className={`text-xs font-semibold px-2 py-1 ${statusColors[b.status]}`}>{b.status}</span>
                  </td>
                  <td className="p-4 text-dark-text">₱{b.amount.toLocaleString()}</td>
                  <td className="p-4">
                    <Link href={`/farmer/bookings/${b.id}`} className="text-primary font-semibold text-xs hover:underline">View</Link>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        {myBookings.length === 0 && <p className="p-4 text-gray text-sm">No bookings found.</p>}
      </div>
    </div>
  );
}