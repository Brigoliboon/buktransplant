"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Package, Calendar, User, CheckCircle, Clock } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";

const statusSteps = [
  { label: "Confirmed", icon: CheckCircle },
  { label: "Scheduling", icon: Calendar },
  { label: "Operator Assigned", icon: User },
  { label: "In Progress", icon: Package },
  { label: "Completed", icon: CheckCircle },
];

export default function BookingTrackerPage() {
  const [refNo, setRefNo] = useState("");
  const [tracked, setTracked] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (refNo.trim()) setTracked(true);
  };

  return (
    <>
      <PageHeader title="Track Booking" subtitle="Enter your booking reference number to track your service." />

      <section className="py-20 bg-light-bg">
        <div className="px-6">
          {!tracked ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg mx-auto">
              <form onSubmit={handleTrack} className="bg-white p-8">
                <label className="block text-sm font-medium text-dark-text mb-2">Booking Reference Number</label>
                <div className="flex border border-gray/20">
                  <span className="bg-light-bg px-3 flex items-center"><Search className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
                  <input
                    type="text"
                    required
                    value={refNo}
                    onChange={(e) => setRefNo(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm outline-none"
                    placeholder="e.g. BKT-2026-XXXX"
                  />
                </div>
                <button type="submit" className="w-full bg-primary text-white py-3 font-semibold mt-5 hover:bg-primary/90 transition-colors">
                  Track Booking
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto">
              <div className="bg-white p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray">Reference #{refNo}</p>
                    <h3 className="text-xl font-bold text-dark-text">Status: In Progress</h3>
                  </div>
                  <div className="bg-accent/10 p-3">
                    <Clock className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="relative">
                  {statusSteps.map((step, i) => {
                    const Icon = step.icon;
                    const isActive = i <= 3;
                    return (
                      <div key={step.label} className="flex items-start gap-4 pb-8 last:pb-0 relative">
                        <div className={`w-10 h-10 shrink-0 flex items-center justify-center ${isActive ? "bg-primary" : "bg-gray/20"}`}>
                          <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray"}`} strokeWidth={1.5} />
                        </div>
                        <div className="pt-2">
                          <p className={`font-semibold ${isActive ? "text-dark-text" : "text-gray"}`}>{step.label}</p>
                          {isActive && <p className="text-sm text-gray mt-1">Completed</p>}
                        </div>
                        {i < statusSteps.length - 1 && (
                          <div className={`absolute left-5 top-10 w-0.5 h-8 ${isActive ? "bg-primary" : "bg-gray/20"}`} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <button onClick={() => setTracked(false)} className="text-primary font-semibold hover:underline">
                Track Another Booking
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}