"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, navLinks } from "@/constants/site";
import { useAuth, getDashboardPath } from "@/lib/auth";
import { LogOut, LayoutDashboard } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY === 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-100 transition-all duration-300 ${
        atTop
          ? "bg-white"
          : "bg-white/70 backdrop-blur-xl"
      }`}
    >
      <div className="px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-primary">
          {siteConfig.name}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray">{user.name}</span>
              <Link
                href={getDashboardPath(user.role)}
                className="flex items-center gap-1.5 bg-primary text-white px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                <LayoutDashboard className="w-4 h-4" strokeWidth={2} />
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="flex items-center gap-1.5 border-2 border-red-500 text-red-500 px-4 py-2 text-sm font-semibold hover:bg-red-500 hover:text-white transition-colors"
              >
                <LogOut className="w-4 h-4" strokeWidth={2} />
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="bg-primary text-white px-5 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="border-2 border-primary text-primary px-5 py-2 text-sm font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-primary transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-gray-100"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray hover:text-primary py-2"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-2 border-t border-gray-100">
                {user ? (
                  <>
                    <span className="flex-1 text-center text-sm text-gray py-2">{user.name}</span>
                    <Link href={getDashboardPath(user.role)} className="flex-1 text-center bg-primary text-white px-4 py-2 text-sm font-semibold" onClick={() => setOpen(false)}>
                      Dashboard
                    </Link>
                    <button onClick={() => { logout(); setOpen(false); }} className="flex-1 text-center border-2 border-red-500 text-red-500 px-4 py-2 text-sm font-semibold">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="flex-1 text-center bg-primary text-white px-4 py-2 text-sm font-semibold" onClick={() => setOpen(false)}>
                      Login
                    </Link>
                    <Link href="/register" className="flex-1 text-center border-2 border-primary text-primary px-4 py-2 text-sm font-semibold" onClick={() => setOpen(false)}>
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}