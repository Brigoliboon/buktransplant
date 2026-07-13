"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await login(email, password);
    setLoading(false);
    if (!res.success) {
      setError(res.error!);
    } else {
      router.push("/");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-light-bg px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-white p-8 md:p-12"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark-text">Welcome Back</h1>
          <p className="text-gray text-sm mt-2">Sign in to your BuktransPLANt account.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-dark-text mb-1">Email</label>
            <div className="flex border border-gray/20">
              <span className="bg-light-bg px-3 flex items-center"><Mail className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2.5 text-sm outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-text mb-1">Password</label>
            <div className="flex border border-gray/20">
              <span className="bg-light-bg px-3 flex items-center"><Lock className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2.5 text-sm outline-none"
                placeholder="********"
              />
            </div>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-primary" />
              <span className="text-gray">Remember me</span>
            </label>
            <Link href="/forgot-password" className="text-primary hover:underline">Forgot password?</Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Sign In <ArrowRight className="w-4 h-4" strokeWidth={2} /></>}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray/10">
          <p className="text-xs text-gray text-center mb-3">Demo accounts</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              { role: "Farmer", email: "farmer@buktransplant.com", pw: "farmer123" },
              { role: "Operator", email: "operator@buktransplant.com", pw: "operator123" },
              { role: "Branch", email: "branch@buktransplant.com", pw: "branch123" },
              { role: "Admin", email: "admin@buktransplant.com", pw: "admin123" },
            ].map((a) => (
              <button
                key={a.role}
                type="button"
                onClick={() => { setEmail(a.email); setPassword(a.pw); setError(""); }}
                className="text-left px-3 py-2 border border-gray/10 hover:border-primary/30 transition-colors"
              >
                <span className="font-semibold text-dark-text">{a.role}</span>
                <br />
                <span className="text-gray">{a.email}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-gray mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary font-semibold hover:underline">Register here</Link>
        </p>
      </motion.div>
    </section>
  );
}
