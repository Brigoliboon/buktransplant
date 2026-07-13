"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowUp, ArrowDown } from "lucide-react";
import { branchStats, branchBookings } from "@/constants/branch";

const monthlyData = [
  { month: "Jan", revenue: 180000 },
  { month: "Feb", revenue: 210000 },
  { month: "Mar", revenue: 245000 },
  { month: "Apr", revenue: 268000 },
  { month: "May", revenue: 275000 },
  { month: "Jun", revenue: 285000 },
];

export default function RevenuePage() {
  const total = branchBookings.reduce((sum, b) => sum + b.amount, 0);

  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Revenue</motion.h1>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6">
          <p className="text-3xl font-bold text-dark-text">₱{branchStats.monthlyRevenue.toLocaleString()}</p>
          <p className="text-sm text-gray">Monthly Revenue</p>
          <span className="text-xs text-success flex items-center gap-1 mt-1"><ArrowUp className="w-3 h-3" strokeWidth={2} /> +12% from last month</span>
        </div>
        <div className="bg-white p-6">
          <p className="text-3xl font-bold text-dark-text">₱{total.toLocaleString()}</p>
          <p className="text-sm text-gray">Pending Collections</p>
          <span className="text-xs text-warning flex items-center gap-1 mt-1"><ArrowDown className="w-3 h-3" strokeWidth={2} /> 3 unpaid bookings</span>
        </div>
        <div className="bg-white p-6">
          <p className="text-3xl font-bold text-dark-text">₱8,500</p>
          <p className="text-sm text-gray">Avg. per Booking</p>
          <span className="text-xs text-accent flex items-center gap-1 mt-1"><ArrowUp className="w-3 h-3" strokeWidth={2} /> Premium segment growing</span>
        </div>
      </div>

      <div className="bg-white p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-primary" strokeWidth={1.5} />
          <h2 className="text-lg font-bold text-dark-text">Monthly Trend</h2>
        </div>
        <div className="flex items-end gap-3 h-40">
          {monthlyData.map((m) => {
            const max = Math.max(...monthlyData.map((d) => d.revenue));
            const height = (m.revenue / max) * 100;
            return (
              <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs text-gray">₱{(m.revenue / 1000).toFixed(0)}k</span>
                <div className="w-full bg-primary/10 relative" style={{ height: `${height}%` }}>
                  <div className="absolute bottom-0 left-0 right-0 bg-primary h-full opacity-60" style={{ height: `${height}%` }} />
                </div>
                <span className="text-xs text-gray font-medium">{m.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}