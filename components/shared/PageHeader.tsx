"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-20 bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
        {subtitle && <p className="text-white/70 text-lg mt-3">{subtitle}</p>}
      </motion.div>
    </section>
  );
}