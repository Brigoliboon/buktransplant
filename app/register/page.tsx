"use client";

import { motion } from "framer-motion";
import { User, Mail, Lock, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-light-bg px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-white p-8 md:p-12"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark-text">Create Account</h1>
          <p className="text-gray text-sm mt-2">Join BuktransPLANt and start booking services.</p>
        </div>

        <form className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-dark-text mb-1">First Name</label>
              <div className="flex border border-gray/20">
                <span className="bg-light-bg px-3 flex items-center"><User className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
                <input type="text" required className="w-full px-3 py-2.5 text-sm outline-none" placeholder="Juan" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-text mb-1">Last Name</label>
              <div className="flex border border-gray/20">
                <span className="bg-light-bg px-3 flex items-center"><User className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
                <input type="text" required className="w-full px-3 py-2.5 text-sm outline-none" placeholder="Dela Cruz" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-text mb-1">Email</label>
            <div className="flex border border-gray/20">
              <span className="bg-light-bg px-3 flex items-center"><Mail className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
              <input type="email" required className="w-full px-3 py-2.5 text-sm outline-none" placeholder="you@example.com" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-text mb-1">Phone Number</label>
            <div className="flex border border-gray/20">
              <span className="bg-light-bg px-3 flex items-center"><Phone className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
              <input type="tel" required className="w-full px-3 py-2.5 text-sm outline-none" placeholder="09XX XXX XXXX" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-text mb-1">Password</label>
            <div className="flex border border-gray/20">
              <span className="bg-light-bg px-3 flex items-center"><Lock className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
              <input type="password" required className="w-full px-3 py-2.5 text-sm outline-none" placeholder="Min. 8 characters" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-text mb-1">Confirm Password</label>
            <div className="flex border border-gray/20">
              <span className="bg-light-bg px-3 flex items-center"><Lock className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
              <input type="password" required className="w-full px-3 py-2.5 text-sm outline-none" placeholder="********" />
            </div>
          </div>

          <button type="submit" className="w-full bg-primary text-white py-3 font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
            Create Account <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </form>

        <p className="text-center text-sm text-gray mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold hover:underline">Sign in</Link>
        </p>
      </motion.div>
    </section>
  );
}