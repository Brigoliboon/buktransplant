"use client";

import { motion } from "framer-motion";
import {
  type LucideIcon,
  Lightbulb,
  ShieldCheck,
  Leaf,
  Scale,
  Users,
} from "lucide-react";
import { mission, vision, coreValues } from "@/constants/about";

function highlight(text: string, words: string[]) {
  const regex = new RegExp(`(${words.join("|")})`, "gi");
  return text.split(regex).map((part, i) =>
    words.some((w) => w.toLowerCase() === part.toLowerCase())
      ? <span key={i} className="text-accent font-semibold">{part}</span>
      : part
  );
}

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  ShieldCheck,
  Leaf,
  Scale,
  Users,
};

const borderColors = [
  "border-t-primary",
  "border-t-accent",
  "border-t-secondary",
  "border-t-accent",
  "border-t-primary",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-light-bg">
      <div className="mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
            About <span className="text-primary">BuktransPLANt</span>
          </h2>
          <p className="text-gray mx-auto">
            Transforming agricultural service delivery through technology and innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-cover bg-top bg-no-repeat min-h-[700px] mb-24"
          style={{
            backgroundImage: "url('/mission-banner.jpeg')",
            backgroundColor: "#EDF6EC",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 p-10 md:p-16 w-full flex justify-end">
            <div className="md:w-2/5 space-y-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4">Our Mission</h3>
                <p className="text-white/95 text-2xl leading-[1.8]">{highlight(mission, ["accessible", "technology-driven", "increase productivity", "sustainable agriculture"])}</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4">Our Vision</h3>
                <p className="text-white/95 text-2xl leading-[1.8]">{highlight(vision, ["leading agricultural service platform", "precision farming", "innovation", "reliability", "farmer-centric"])}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center text-dark-text mb-12"
          >
            Our Core Values
          </motion.h3>
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
      </div>
    </section>
  );
}