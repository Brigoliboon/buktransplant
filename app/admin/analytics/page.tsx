"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, CalendarCheck, DollarSign } from "lucide-react";
import { adminStats } from "@/constants/admin";

const monthlyData = [
  { month: "Jan", bookings: 85, revenue: 1250000 },
  { month: "Feb", bookings: 92, revenue: 1380000 },
  { month: "Mar", bookings: 105, revenue: 1520000 },
  { month: "Apr", bookings: 110, revenue: 1650000 },
  { month: "May", bookings: 118, revenue: 1780000 },
  { month: "Jun", bookings: 120, revenue: 1850000 },
];

export default function AnalyticsPage() {
  const maxRevenue = Math.max(...monthlyData.map((d) => d.revenue));
  const maxBookings = Math.max(...monthlyData.map((d) => d.bookings));

  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Analytics</motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Avg Bookings/Month", value: Math.round(adminStats.monthlyBookings / 1), icon: CalendarCheck, color: "text-primary bg-primary/10" },
          { label: "Avg Revenue/Month", value: `₱${(adminStats.monthlyRevenue / 1000).toFixed(0)}k`, icon: DollarSign, color: "text-success bg-success/10" },
          { label: "Growth Rate", value: "+15%", icon: TrendingUp, color: "text-accent bg-accent/10" },
          { label: "Active Users", value: adminStats.totalUsers, icon: Users, color: "text-primary bg-primary/10" },
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

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6">
          <h2 className="text-lg font-bold text-dark-text mb-4">Revenue Trend</h2>
          <div className="flex items-end gap-2 h-32">
            {monthlyData.map((m) => (
              <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs text-gray">₱{(m.revenue / 1000000).toFixed(1)}M</span>
                <div className="w-full bg-primary/10 relative" style={{ height: `${(m.revenue / maxRevenue) * 100}%` }}>
                  <div className="absolute bottom-0 left-0 right-0 bg-primary" style={{ height: `${(m.revenue / maxRevenue) * 100}%` }} />
                </div>
                <span className="text-xs text-gray">{m.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6">
          <h2 className="text-lg font-bold text-dark-text mb-4">Booking Trend</h2>
          <div className="flex items-end gap-2 h-32">
            {monthlyData.map((m) => (
              <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs text-gray">{m.bookings}</span>
                <div className="w-full bg-accent/10 relative" style={{ height: `${(m.bookings / maxBookings) * 100}%` }}>
                  <div className="absolute bottom-0 left-0 right-0 bg-accent" style={{ height: `${(m.bookings / maxBookings) * 100}%` }} />
                </div>
                <span className="text-xs text-gray">{m.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}