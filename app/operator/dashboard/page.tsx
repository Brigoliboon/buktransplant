"use client";

import { motion } from "framer-motion";
import { ClipboardList, CheckCircle, Tractor, MapPin } from "lucide-react";
import Link from "next/link";
import { operatorStats, operatorJobs } from "@/constants/operator";

const statusColors: Record<string, string> = {
  assigned: "text-warning bg-warning/10",
  "in-progress": "text-accent bg-accent/10",
  completed: "text-success bg-success/10",
};

export default function OperatorDashboardPage() {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Dashboard</motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Assigned Jobs", value: operatorStats.assigned, icon: ClipboardList, color: "text-warning bg-warning/10" },
          { label: "In Progress", value: operatorStats.inProgress, icon: Tractor, color: "text-accent bg-accent/10" },
          { label: "Completed This Month", value: operatorStats.completedThisMonth, icon: CheckCircle, color: "text-success bg-success/10" },
          { label: "Total Hectares", value: `${operatorStats.totalHectares}ha`, icon: MapPin, color: "text-primary bg-primary/10" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white p-5">
              <div className={`w-10 h-10 ${stat.color} flex items-center justify-center mb-3`}>
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <p className="text-2xl font-bold text-dark-text">{stat.value}</p>
              <p className="text-sm text-gray">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-dark-text">My Jobs</h2>
          <Link href="/operator/jobs" className="text-sm text-primary font-semibold hover:underline">View All</Link>
        </div>
        <div className="space-y-3">
          {operatorJobs.slice(0, 3).map((job) => (
            <div key={job.id} className="flex items-center justify-between border-b border-gray-50 pb-3">
              <div>
                <p className="font-semibold text-dark-text text-sm">{job.refNo}</p>
                <p className="text-xs text-gray">{job.farmer} &middot; {job.location}</p>
              </div>
              <span className={`text-xs font-semibold px-2 py-1 ${statusColors[job.status]}`}>{job.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}