"use client";

import { motion } from "framer-motion";
import {
  type LucideIcon,
  Tractor,
  UserCheck,
  Brain,
  MapPin,
  Smartphone,
  Globe,
} from "lucide-react";
import { whyUsItems } from "@/constants/whyUs";

const iconMap: Record<string, LucideIcon> = {
  Tractor,
  UserCheck,
  Brain,
  MapPin,
  Smartphone,
  Globe,
};

const accentColors = [
  "bg-primary",
  "bg-accent",
  "bg-secondary",
  "bg-accent",
  "bg-secondary",
  "bg-primary",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-section-bg">
      <div className="mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
            Why Choose <span className="text-primary">Us</span>
          </h2>
          <p className="text-gray mx-auto">
            We combine modern technology with agricultural expertise to deliver unmatched service.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsItems.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white flex items-start gap-5 p-6 hover:shadow-md transition-shadow duration-300"
              >
                {Icon && (
                  <div className={`w-14 h-14 shrink-0 flex items-center justify-center ${accentColors[i]}`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold text-dark-text mb-1.5">{item.title}</h3>
                  <p className="text-gray text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}