"use client";

import { motion } from "framer-motion";
import { Megaphone, Plus, Calendar, Users } from "lucide-react";

const promos = [
  { title: "Early Bird Discount", desc: "15% off for bookings made 7 days in advance", active: true, starts: "Jun 01, 2026", ends: "Aug 31, 2026", redemptions: 23 },
  { title: "Refer a Farmer", desc: "Get ₱500 off when you refer another farmer", active: true, starts: "Jan 01, 2026", ends: "Dec 31, 2026", redemptions: 45 },
  { title: "Bulk Booking Bonus", desc: "Free seedling tray for bookings over 3 hectares", active: false, starts: "Mar 01, 2026", ends: "May 31, 2026", redemptions: 12 },
];

export default function PromotionsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text">Promotions</motion.h1>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors">
          <Plus className="w-4 h-4" strokeWidth={1.5} /> Add Promotion
        </button>
      </div>

      <div className="space-y-4">
        {promos.map((p, i) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-white p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                  <Megaphone className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-dark-text">{p.title}</h3>
                  <p className="text-sm text-gray">{p.desc}</p>
                </div>
              </div>
              <span className={`text-xs font-semibold px-2 py-1 ${p.active ? "text-success bg-success/10" : "text-gray bg-gray/10"}`}>{p.active ? "Active" : "Expired"}</span>
            </div>
            <div className="flex gap-6 text-xs text-gray ml-13">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" strokeWidth={1.5} /> {p.starts} - {p.ends}</span>
              <span className="flex items-center gap-1"><Users className="w-3 h-3" strokeWidth={1.5} /> {p.redemptions} redemptions</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}