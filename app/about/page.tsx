"use client";

import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Leaf, Scale, Users } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import { mission, vision, coreValues } from "@/constants/about";

const iconMap: Record<string, LucideIcon> = {
  Lightbulb, ShieldCheck, Leaf, Scale, Users,
};

const borderColors = [
  "border-t-primary", "border-t-accent", "border-t-secondary",
  "border-t-accent", "border-t-primary",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" subtitle="Learn more about BuktransPLANt and our mission." />

      <section className="py-20 bg-light-bg">
        <div className="px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-l-4 border-primary p-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-gray leading-relaxed">{mission}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-l-4 border-accent p-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-gray leading-relaxed">{vision}</p>
            </motion.div>
          </div>

          <h3 className="text-2xl font-bold text-center text-dark-text mb-12">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {coreValues.map((value, i) => {
              const Icon = iconMap[value.icon];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`bg-white border-t-4 ${borderColors[i]} p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                >
                  {Icon && (
                    <div className="w-12 h-12 bg-light-bg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                  )}
                  <h4 className="font-bold text-primary text-lg mb-2">{value.title}</h4>
                  <p className="text-gray text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}