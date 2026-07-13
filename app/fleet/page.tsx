"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/shared/PageHeader";
import { featuredMachines } from "@/constants/fleet";

export default function FleetPage() {
  return (
    <>
      <PageHeader title="Our Fleet" subtitle="Modern rice transplanters ready for your farm." />

      <section className="py-20 bg-light-bg">
        <div className="px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {featuredMachines.map((machine, i) => (
              <motion.div
                key={machine.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white"
              >
                <div
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url('${machine.image}')`, backgroundColor: "#EDF6EC" }}
                />
                <div className="p-6">
                  <p className="text-xs text-accent font-semibold tracking-widest mb-1">{machine.model}</p>
                  <h3 className="text-lg font-bold text-dark-text mb-2">{machine.name}</h3>
                  <p className="text-gray text-sm leading-relaxed">{machine.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}