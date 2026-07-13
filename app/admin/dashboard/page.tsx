"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Users, UserPlus, Building2, Tractor, Wrench, CreditCard, TrendingUp } from "lucide-react";
import { adminStats } from "@/constants/admin";

export default function AdminDashboardPage() {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Dashboard</motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Users", value: adminStats.totalUsers, icon: Users, color: "text-primary bg-primary/10" },
          { label: "Total Farmers", value: adminStats.totalFarmers, icon: UserPlus, color: "text-accent bg-accent/10" },
          { label: "Branches", value: adminStats.activeBranches, icon: Building2, color: "text-primary bg-primary/10" },
          { label: "Fleet", value: adminStats.totalFleet, icon: Tractor, color: "text-accent bg-accent/10" },
          { label: "Operators", value: adminStats.activeOperators, icon: Wrench, color: "text-primary bg-primary/10" },
          { label: "Monthly Bookings", value: adminStats.monthlyBookings, icon: CalendarCheck, color: "text-warning bg-warning/10" },
          { label: "Monthly Revenue", value: `₱${(adminStats.monthlyRevenue / 1000).toFixed(0)}k`, icon: TrendingUp, color: "text-success bg-success/10" },
          { label: "Pending Payments", value: `₱${(adminStats.pendingPayments / 1000).toFixed(0)}k`, icon: CreditCard, color: "text-warning bg-warning/10" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-white p-5">
              <div className={`w-10 h-10 ${stat.color} flex items-center justify-center mb-3`}>
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <p className="text-2xl font-bold text-dark-text">{stat.value}</p>
              <p className="text-sm text-gray">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}