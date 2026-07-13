"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-banner.gif')",
          backgroundColor: "#005F02",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-4 md:px-16 lg:px-24 w-full">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-accent font-semibold tracking-widest uppercase mb-4 text-sm md:text-base"
          >
            BuktransPLANt
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Modernizing Rice
            <br />
            <span className="text-accent font-bold">Transplanting Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-8"
          >
            Connecting farmers with modern mechanized transplanting solutions across Bukidnon.
            Book online, track in real-time, and harvest more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/booking"
              className="inline-block bg-primary text-white font-semibold px-8 py-3 hover:bg-white hover:text-primary transition-colors text-center"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-3 hover:bg-white hover:text-primary transition-colors text-center"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </div>

      
    </section>
  );
}