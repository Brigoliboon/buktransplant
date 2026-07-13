"use client";

import { motion } from "framer-motion";
import { CalendarCheck, CheckCircle, CreditCard, Clock } from "lucide-react";
import Link from "next/link";
import { useBookings } from "@/lib/bookings";
import { useAuth } from "@/lib/auth";

const statusColors: Record<string, string> = {
  completed: "text-success bg-success/10",
  "in-progress": "text-accent bg-accent/10",
  scheduled: "text-primary bg-primary/10",
  pending: "text-warning bg-warning/10",
};

export default function FarmerDashboardPage() {
  const { bookings } = useBookings();
  const { user } = useAuth();
  const myBookings = bookings.filter((b) => b.farmer === user?.name);
  const totalBookings = myBookings.length;
  const completedBookings = myBookings.filter((b) => b.status === "completed").length;
  const pendingBookings = myBookings.filter((b) => b.status === "pending").length;
  const totalSpent = myBookings.reduce((sum, b) => sum + b.amount, 0);

  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Dashboard</motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Bookings", value: totalBookings, icon: CalendarCheck, color: "text-primary bg-primary/10" },
          { label: "Completed", value: completedBookings, icon: CheckCircle, color: "text-success bg-success/10" },
          { label: "Total Spent", value: `₱${totalSpent.toLocaleString()}`, icon: CreditCard, color: "text-accent bg-accent/10" },
          { label: "Pending", value: pendingBookings, icon: Clock, color: "text-warning bg-warning/10" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
              </div>
              <p className="text-2xl font-bold text-dark-text">{stat.value}</p>
              <p className="text-sm text-gray">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-dark-text">Recent Bookings</h2>
          <Link href="/farmer/bookings" className="text-sm text-primary font-semibold hover:underline">View All</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left">
                <th className="pb-3 font-semibold text-gray">Reference</th>
                <th className="pb-3 font-semibold text-gray">Package</th>
                <th className="pb-3 font-semibold text-gray">Date</th>
                <th className="pb-3 font-semibold text-gray">Status</th>
                <th className="pb-3 font-semibold text-gray">Amount</th>
              </tr>
            </thead>
            <tbody>
              {myBookings.slice(0, 3).map((b) => (
                <tr key={b.id} className="border-b border-gray-50">
                  <td className="py-3 font-medium text-dark-text">{b.refNo}</td>
                  <td className="py-3 text-gray">{b.packageName}</td>
                  <td className="py-3 text-gray">{b.date}</td>
                  <td className="py-3">
                    <span className={`text-xs font-semibold px-2 py-1 ${statusColors[b.status]}`}>{b.status}</span>
                  </td>
                  <td className="py-3 text-dark-text">₱{b.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}