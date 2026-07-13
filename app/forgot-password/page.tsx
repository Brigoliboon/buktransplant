"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-light-bg px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-white p-8 md:p-12"
      >
        {!sent ? (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-dark-text">Forgot Password</h1>
              <p className="text-gray text-sm mt-2">Enter your email and we&apos;ll send you a reset link.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-dark-text mb-1">Email</label>
                <div className="flex border border-gray/20">
                  <span className="bg-light-bg px-3 flex items-center"><Mail className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
                  <input type="email" required className="w-full px-3 py-2.5 text-sm outline-none" placeholder="you@example.com" />
                </div>
              </div>

              <button type="submit" className="w-full bg-primary text-white py-3 font-semibold hover:bg-primary/90 transition-colors">
                Send Reset Link
              </button>
            </form>

            <p className="text-center text-sm text-gray mt-6">
              <Link href="/login" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" /> Back to Sign In
              </Link>
            </p>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-accent" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold text-dark-text mb-2">Check Your Email</h2>
            <p className="text-gray text-sm mb-6">We&apos;ve sent a password reset link to your email address.</p>
            <Link href="/login" className="text-primary font-semibold hover:underline">Back to Sign In</Link>
          </div>
        )}
      </motion.div>
    </section>
  );
}