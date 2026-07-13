"use client";

import { motion } from "framer-motion";
import { CheckCircle, Calendar, User, Package, ClipboardCheck } from "lucide-react";
import Link from "next/link";

const steps = [
  { label: "Booking Confirmed", date: "Jun 12, 2026", icon: CheckCircle, done: true },
  { label: "Scheduling", date: "Jun 13, 2026", icon: Calendar, done: true },
  { label: "Operator Assigned", date: "Jun 14, 2026", icon: User, done: true },
  { label: "In Progress", date: "Jun 15, 2026", icon: Package, done: true },
  { label: "Completed", date: "Pending", icon: ClipboardCheck, done: false },
];

export default function FarmerTrackPage() {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-dark-text mb-2">Track Booking</h1>
        <p className="text-gray text-sm mb-6">Reference: <span className="font-semibold text-dark-text">BKT-2026-002</span></p>
      </motion.div>

      <div className="bg-white p-6 md:p-8">
        <div className="relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex items-start gap-4 pb-8 last:pb-0 relative">
                <div className={`w-10 h-10 shrink-0 flex items-center justify-center ${step.done ? "bg-primary" : "bg-gray/20"}`}>
                  <Icon className={`w-5 h-5 ${step.done ? "text-white" : "text-gray"}`} strokeWidth={1.5} />
                </div>
                <div className="pt-2">
                  <p className={`font-semibold ${step.done ? "text-dark-text" : "text-gray"}`}>{step.label}</p>
                  <p className={`text-sm ${step.done ? "text-gray" : "text-gray/50"}`}>{step.date}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className={`absolute left-5 top-10 w-0.5 h-8 ${step.done ? "bg-primary" : "bg-gray/20"}`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <Link href="/farmer/bookings" className="text-primary font-semibold text-sm hover:underline">&larr; Back to Bookings</Link>
      </div>
    </div>
  );
}