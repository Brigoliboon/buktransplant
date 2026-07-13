"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Navigation } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { operatorJobs } from "@/constants/operator";

const MapView = dynamic(() => import("@/components/shared/MapView"), { ssr: false });

export default function JobNavigationPage() {
  const { id } = useParams();
  const job = operatorJobs.find((j) => j.id === id);

  if (!job) return <div className="p-6 text-center text-gray">Job not found.</div>;

  return (
    <div>
      <Link href="/operator/jobs" className="inline-flex items-center gap-2 text-gray hover:text-primary mb-4 transition-colors text-sm">
        <ArrowLeft className="w-4 h-4" /> Back to Jobs
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="bg-white p-4 mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-dark-text">{job.refNo}</h1>
            <p className="text-sm text-gray flex items-center gap-1"><MapPin className="w-4 h-4" strokeWidth={1.5} /> {job.location}</p>
          </div>
          <div className="flex items-center gap-2">
            <Navigation className="w-5 h-5 text-accent" strokeWidth={1.5} />
            <span className="text-sm font-semibold text-accent">GPS Active</span>
          </div>
        </div>

        <div className="bg-white">
          <MapView
            center={job.coordinates}
            zoom={14}
            marker={{ lng: job.coordinates[0], lat: job.coordinates[1], label: job.location }}
            height="h-[500px]"
          />
        </div>

        <div className="bg-white p-4 mt-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray">Farmer</p>
            <p className="font-semibold text-dark-text text-sm">{job.farmer}</p>
          </div>
          <div>
            <p className="text-xs text-gray">Hectares</p>
            <p className="font-semibold text-dark-text text-sm">{job.hectares}ha</p>
          </div>
          <div>
            <p className="text-xs text-gray">Machine</p>
            <p className="font-semibold text-dark-text text-sm">{job.machine}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}