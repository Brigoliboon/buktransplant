"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Navigation, Camera } from "lucide-react";
import { useBookings } from "@/lib/bookings";
import { useAuth } from "@/lib/auth";

const operatorStatusMap: Record<string, "assigned" | "in-progress" | "completed"> = {
  scheduled: "assigned",
  "in-progress": "in-progress",
  completed: "completed",
};

const statusColors: Record<string, string> = {
  assigned: "text-warning bg-warning/10",
  "in-progress": "text-accent bg-accent/10",
  completed: "text-success bg-success/10",
};

export default function AssignedJobsPage() {
  const { bookings } = useBookings();
  const { user } = useAuth();
  const jobs = bookings.filter((b) => b.operator === user?.name && operatorStatusMap[b.status]);

  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Assigned Jobs</motion.h1>

      <div className="grid md:grid-cols-2 gap-4">
        {jobs.map((job, i) => {
          const displayStatus = operatorStatusMap[job.status] || job.status;
          return (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-dark-text">{job.refNo}</span>
                <span className={`text-xs font-semibold px-2 py-1 ${statusColors[displayStatus]}`}>{displayStatus}</span>
              </div>
              <p className="text-sm font-medium text-dark-text">{job.farmer}</p>
              <p className="text-xs text-gray flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3" strokeWidth={1.5} /> {job.location}
              </p>
              <p className="text-xs text-gray mt-1">{job.date} &middot; {job.machine || "—"} &middot; {job.hectares || 0}ha</p>
              <div className="flex gap-2 mt-4">
                <Link
                  href={`/operator/jobs/${job.id}/navigation`}
                  className="flex-1 text-center border border-primary text-primary py-2 text-xs font-semibold hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-1"
                >
                  <Navigation className="w-3 h-3" strokeWidth={1.5} /> Navigate
                </Link>
                <Link
                  href={`/operator/jobs/${job.id}/photos`}
                  className="flex-1 text-center border border-primary text-primary py-2 text-xs font-semibold hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-1"
                >
                  <Camera className="w-3 h-3" strokeWidth={1.5} /> Photos
                </Link>
                <Link
                  href={`/operator/jobs/${job.id}/status`}
                  className="flex-1 text-center bg-primary text-white py-2 text-xs font-semibold hover:bg-primary/90 transition-colors"
                >
                  Update
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}