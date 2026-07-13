"use client";

import { motion } from "framer-motion";
import { Bell, Globe, Shield } from "lucide-react";

const sections = [
  {
    title: "Notifications",
    icon: Bell,
    fields: [
      { label: "Email notifications", type: "checkbox" },
      { label: "SMS notifications", type: "checkbox" },
      { label: "Booking updates", type: "checkbox" },
    ],
  },
  {
    title: "Preferences",
    icon: Globe,
    fields: [
      { label: "Language", type: "select", value: "English" },
      { label: "Currency", type: "select", value: "PHP (₱)" },
    ],
  },
  {
    title: "Privacy",
    icon: Shield,
    fields: [
      { label: "Show profile to operators", type: "checkbox" },
      { label: "Share booking history", type: "checkbox" },
    ],
  },
];

export default function SettingsPage() {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Settings</motion.h1>

      <div className="space-y-6">
        {sections.map((section, i) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h2 className="text-lg font-bold text-dark-text">{section.title}</h2>
              </div>
              <div className="space-y-3 ml-2">
                {section.fields.map((field) => (
                  <div key={field.label} className="flex items-center justify-between">
                    <span className="text-sm text-gray">{field.label}</span>
                    {field.type === "checkbox" ? (
                      <input type="checkbox" defaultChecked className="accent-primary" />
                    ) : (
                      <span className="text-sm font-medium text-dark-text">{field.type === "select" ? (field as typeof field & { value: string }).value : ""}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6">
        <button className="bg-primary text-white px-8 py-2.5 font-semibold text-sm hover:bg-primary/90 transition-colors">Save Changes</button>
      </div>
    </div>
  );
}