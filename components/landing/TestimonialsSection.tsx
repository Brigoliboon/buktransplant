"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/constants/testimonials";

const allCards = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-light-bg overflow-hidden">
      <div className="mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
            What Farmers <span className="text-primary">Say</span>
          </h2>
          <p className="text-gray mx-auto">
            Hear from the farmers we&apos;ve served across Bukidnon.
          </p>
        </motion.div>
      </div>

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
        className="flex gap-10 w-max"
      >
        {allCards.map((t, i) => (
          <div
            key={i}
            className="w-[380px] bg-white border-t-4 border-primary p-8 shrink-0 flex flex-col"
          >
            <Quote className="w-8 h-8 text-primary/20 mb-3" strokeWidth={1.5} />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="w-4 h-4 text-warning fill-warning" />
              ))}
            </div>
            <p className="text-gray leading-relaxed mb-6 flex-1">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="font-semibold text-dark-text text-sm">{t.name}</div>
                <div className="text-gray text-xs">{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}