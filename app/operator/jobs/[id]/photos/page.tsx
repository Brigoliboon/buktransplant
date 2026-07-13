"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Camera, Upload } from "lucide-react";
import Link from "next/link";
import { operatorJobs } from "@/constants/operator";

export default function UploadPhotosPage() {
  const { id } = useParams();
  const job = operatorJobs.find((j) => j.id === id);

  if (!job) return <div className="p-6 text-center text-gray">Job not found.</div>;

  return (
    <div>
      <Link href="/operator/jobs" className="inline-flex items-center gap-2 text-gray hover:text-primary mb-4 transition-colors text-sm">
        <ArrowLeft className="w-4 h-4" /> Back to Jobs
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-xl font-bold text-dark-text mb-1">Upload Photos</h1>
        <p className="text-sm text-gray mb-6">{job.refNo} - {job.farmer}</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <label key={i} className="border-2 border-dashed border-gray/20 bg-white p-8 flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors h-40">
              <Camera className="w-8 h-8 text-gray mb-2" strokeWidth={1.5} />
              <span className="text-xs text-gray">Photo {i}</span>
              <input type="file" accept="image/*" className="hidden" />
            </label>
          ))}
        </div>

        <button className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors">
          <Upload className="w-4 h-4" strokeWidth={1.5} /> Upload All
        </button>
      </motion.div>
    </div>
  );
}