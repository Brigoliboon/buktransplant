"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Tractor, Users, TrendingUp, Sprout } from "lucide-react";
import { useBookings } from "@/lib/bookings";
import { branchStats } from "@/constants/branch";

const statusColors: Record<string, string> = {
  completed: "text-success bg-success/10",
  "in-progress": "text-accent bg-accent/10",
  scheduled: "text-primary bg-primary/10",
  pending: "text-warning bg-warning/10",
};

export default function BranchDashboardPage() {
  const { bookings } = useBookings();
  const totalBookings = bookings.length;

  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Branch Dashboard</motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {[
          { label: "Total Bookings", value: totalBookings, icon: CalendarCheck, color: "text-primary bg-primary/10" },
          { label: "Today", value: branchStats.todayBookings, icon: CalendarCheck, color: "text-warning bg-warning/10" },
          { label: "Active Machines", value: branchStats.activeMachines, icon: Tractor, color: "text-accent bg-accent/10" },
          { label: "Active Operators", value: branchStats.activeOperators, icon: Users, color: "text-primary bg-primary/10" },
          { label: "Revenue (Month)", value: `₱${(branchStats.monthlyRevenue / 1000).toFixed(0)}k`, icon: TrendingUp, color: "text-success bg-success/10" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-white p-5">
              <div className={`w-10 h-10 ${stat.color} flex items-center justify-center mb-3`}>
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <p className="text-2xl font-bold text-dark-text">{stat.value}</p>
              <p className="text-sm text-gray">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-6">
          <h2 className="text-lg font-bold text-dark-text mb-4">Recent Bookings</h2>
          <div className="space-y-3">
            {bookings.slice(0, 4).map((b) => (
              <div key={b.id} className="flex items-center justify-between border-b border-gray-50 pb-2">
                <div>
                  <p className="font-semibold text-dark-text text-sm">{b.refNo}</p>
                  <p className="text-xs text-gray">{b.farmer}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 ${statusColors[b.status]}`}>{b.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6">
          <h2 className="text-lg font-bold text-dark-text mb-4">Nursery Summary</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-accent/10 flex items-center justify-center">
              <Sprout className="w-7 h-7 text-accent" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-3xl font-bold text-dark-text">{branchStats.nurserySeedlings.toLocaleString()}</p>
              <p className="text-sm text-gray">Seedlings Available</p>
            </div>
          </div>
          <div className="w-full bg-gray/10 h-2">
            <div className="bg-accent h-2 w-[65%]" />
          </div>
          <p className="text-xs text-gray mt-2">65% of monthly target</p>
        </div>
      </div>
    </div>
  );
}