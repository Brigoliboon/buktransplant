"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Eye, Wrench, Package } from "lucide-react";
import { featuredMachines } from "@/constants/fleet";
import SceneView from "@/components/models/SceneView";

const tabs = [
  { key: "overview", label: "Overview", icon: Eye },
  { key: "specs", label: "Specifications", icon: Wrench },
  { key: "packages", label: "Packages", icon: Package },
];

export default function FleetPreview() {
  const [current, setCurrent] = useState(0);
  const [hoveredTab, setHoveredTab] = useState("overview");

  const machine = featuredMachines[current];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-dark-text">
      <AnimatePresence mode="wait">
        <motion.div
          key={machine.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className={`absolute inset-0 transition-transform duration-500 ${
            hoveredTab === "packages" ? "-translate-x-[15%]" : "translate-x-0"
          }`}
        >
          {machine.modelPath ? (
            <SceneView />
          ) : (
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${machine.image}')` }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-black/60 pointer-events-none" />

      <div className="absolute inset-0 grid grid-cols-12 h-full pointer-events-none">
        <div className="col-span-6 flex flex-col items-start pt-20 px-8 md:px-16 relative z-10 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={machine.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p className="text-accent text-sm font-semibold tracking-widest mb-2">
                {machine.model}
              </p>
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                {machine.name}
              </h2>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-3 pointer-events-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = hoveredTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onMouseEnter={() => setHoveredTab(tab.key)}
                  className={`flex items-center gap-2 px-4 py-3 border text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-accent text-dark-text border-accent font-semibold"
                      : "border-white/20 text-white/60 hover:border-white/50 hover:text-white/80"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" strokeWidth={2} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="col-span-6 flex items-start justify-end pt-28 relative z-10 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${machine.id}-${hoveredTab}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="mr-8 md:mr-16"
            >
              <div className="min-w-[320px]">
                {hoveredTab === "overview" && (
                  <>
                    <p className="text-white text-xl leading-relaxed mb-4">
                      {machine.shortDesc}
                    </p>
                    <p className="text-white/70 text-lg leading-relaxed">
                      {machine.description}
                    </p>
                  </>
                )}

                {hoveredTab === "specs" && (
                  <div className="space-y-5">
                    {machine.specs.map((spec) => (
                      <div key={spec.label}>
                        <div className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-accent shrink-0" strokeWidth={2.5} />
                          <span className="text-white font-bold text-lg">{spec.label}</span>
                        </div>
                        <p className="text-white/70 text-base mt-0.5 ml-7">{spec.detail}</p>
                      </div>
                    ))}
                    {machine.brochureUrl && (
                      <a
                        href={machine.brochureUrl}
                        download
                        className="inline-flex items-center gap-2 mt-4 border border-accent text-accent px-5 py-2.5 text-sm font-semibold hover:bg-accent hover:text-dark-text transition-colors"
                      >
                        Download Brochure
                      </a>
                    )}
                  </div>
                )}

                {hoveredTab === "packages" && (
                  <div className="space-y-4 min-w-[340px]">
                    {machine.packages.map((pkg) => (
                      <div
                        key={pkg.name}
                        className={`border ${
                          pkg.highlighted
                            ? "border-accent bg-accent/10"
                            : "border-white/20"
                        } p-4`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-white font-bold text-lg">{pkg.name}</h4>
                            <p className="text-white/60 text-sm">{pkg.description}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-accent font-bold text-2xl">₱{pkg.price.toLocaleString()}</p>
                            <p className="text-white/50 text-xs">{pkg.unit}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                          {pkg.features.map((f) => (
                            <div key={f} className="flex items-center gap-1.5">
                              <Check className="w-3.5 h-3.5 text-accent shrink-0" strokeWidth={2.5} />
                              <span className="text-white/70 text-xs">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Link
                      href="/booking"
                      className="block w-full text-center bg-accent text-dark-text font-semibold py-3 text-sm hover:bg-accent/90 transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-5 pointer-events-auto">
        {featuredMachines.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`text-base font-bold transition-all duration-300 ${
              i === current
                ? "text-accent border-b-2 border-accent pb-1"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
    </section>
  );
}
