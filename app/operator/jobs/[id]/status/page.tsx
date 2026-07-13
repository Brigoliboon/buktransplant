"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { operatorJobs } from "@/constants/operator";

export default function StatusUpdatePage() {
  const { id } = useParams();
  const job = operatorJobs.find((j) => j.id === id);
  const [updated, setUpdated] = useState(false);

  if (!job) return <div className="p-6 text-center text-gray">Job not found.</div>;

  if (updated) {
    return (
      <div className="text-center py-20">
        <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" strokeWidth={1.5} />
        <h2 className="text-2xl font-bold text-dark-text mb-2">Status Updated</h2>
        <p className="text-gray mb-6">Job {job.refNo} status has been updated successfully.</p>
        <Link href="/operator/jobs" className="text-primary font-semibold hover:underline">&larr; Back to Jobs</Link>
      </div>
    );
  }

  return (
    <div>
      <Link href="/operator/jobs" className="inline-flex items-center gap-2 text-gray hover:text-primary mb-4 transition-colors text-sm">
        <ArrowLeft className="w-4 h-4" /> Back to Jobs
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 md:p-8">
        <h1 className="text-xl font-bold text-dark-text mb-1">Update Status</h1>
        <p className="text-sm text-gray mb-6">{job.refNo} - {job.farmer}</p>

        <div className="space-y-4 mb-8">
          {[
            { value: "arrived", label: "Arrived at Location" },
            { value: "started", label: "Started Transplanting" },
            { value: "progress", label: "In Progress" },
            { value: "completed", label: "Completed" },
            { value: "issue", label: "Report Issue" },
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-3 p-3 border border-gray/20 cursor-pointer hover:border-primary transition-colors">
              <input type="radio" name="status" value={option.value} className="accent-primary" />
              <span className="text-sm text-dark-text">{option.label}</span>
            </label>
          ))}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-dark-text mb-2">Remarks (optional)</label>
          <textarea rows={3} className="w-full border border-gray/20 px-3 py-2.5 text-sm outline-none resize-none" placeholder="Add notes about this job..." />
        </div>

        <button onClick={() => setUpdated(true)} className="bg-primary text-white px-8 py-2.5 font-semibold text-sm hover:bg-primary/90 transition-colors">
          Update Status
        </button>
      </motion.div>
    </div>
  );
}