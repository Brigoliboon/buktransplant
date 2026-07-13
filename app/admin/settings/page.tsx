"use client";

import { motion } from "framer-motion";
import { Settings, Shield, Bell, Globe, DollarSign } from "lucide-react";

const sections = [
  {
    title: "General", icon: Settings,
    fields: [
      { label: "Company Name", value: "BuktransPLANt" },
      { label: "System Email", value: "admin@buktransplant.com" },
      { label: "Timezone", value: "Asia/Manila (UTC+8)" },
    ],
  },
  {
    title: "Security", icon: Shield,
    fields: [
      { label: "Two-Factor Authentication", value: "Enabled" },
      { label: "Session Timeout", value: "30 minutes" },
      { label: "Password Policy", value: "Min. 8 characters" },
    ],
  },
  {
    title: "Notifications", icon: Bell,
    fields: [
      { label: "Email Alerts", value: "Enabled" },
      { label: "SMS Notifications", value: "Enabled" },
      { label: "Booking Reminders", value: "24 hours before" },
    ],
  },
  {
    title: "Regional", icon: Globe,
    fields: [
      { label: "Service Areas", value: "Bukidnon Province" },
      { label: "Currency", value: "Philippine Peso (PHP)" },
    ],
  },
  {
    title: "Pricing", icon: DollarSign,
    fields: [
      { label: "Basic Rate", value: "₱4,500/hectare" },
      { label: "Standard Rate", value: "₱6,500/hectare" },
      { label: "Premium Rate", value: "₱8,500/hectare" },
    ],
  },
];

export default function AdminSettingsPage() {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Settings</motion.h1>

      <div className="space-y-4">
        {sections.map((section, i) => {
          const Icon = section.icon;
          return (
            <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h2 className="text-lg font-bold text-dark-text">{section.title}</h2>
              </div>
              <div className="space-y-3">
                {section.fields.map((f) => (
                  <div key={f.label} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <span className="text-sm text-gray">{f.label}</span>
                    <span className="text-sm font-medium text-dark-text">{f.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}