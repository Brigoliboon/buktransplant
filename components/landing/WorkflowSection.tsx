"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { workflowSteps } from "@/constants/workflow";

export default function WorkflowSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24 bg-light-bg">
      <div className="mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-gray mx-auto">
            From booking to digital report, we handle everything for a seamless experience.
          </p>
        </motion.div>

        <div className="flex gap-1 h-[420px]">
          {workflowSteps.map((step, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={step.title}
                layout
                animate={{ flex: isActive ? 3 : 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="relative overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `url('${step.bg}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "left center",
                  backgroundColor: "#1A1A1A",
                }}
              >
                <div className="absolute inset-0 bg-black/60" />


                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary text-white flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight">{step.title}</h3>
                  </div>

                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/80 text-sm leading-relaxed mt-1"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}