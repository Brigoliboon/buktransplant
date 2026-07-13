"use client";

import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Camera } from "lucide-react";

export default function ProfilePage() {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Profile</motion.h1>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-1">
          <div className="bg-white p-6 text-center">
            <div className="w-24 h-24 bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
              <User className="w-10 h-10 text-primary" strokeWidth={1.5} />
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-white flex items-center justify-center">
                <Camera className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
            <h2 className="text-xl font-bold text-dark-text">Juan Dela Cruz</h2>
            <p className="text-sm text-gray">Farmer</p>
            <button className="mt-4 border-2 border-primary text-primary px-6 py-2 text-sm font-semibold hover:bg-primary hover:text-white transition-colors w-full">
              Edit Profile
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-2">
          <div className="bg-white p-6">
            <h3 className="text-lg font-bold text-dark-text mb-6">Personal Information</h3>
            <div className="space-y-4">
              {[
                { label: "Full Name", value: "Juan Dela Cruz", icon: User },
                { label: "Email", value: "juan@example.com", icon: Mail },
                { label: "Phone", value: "0912 345 6789", icon: Phone },
                { label: "Address", value: "Malaybalay City, Bukidnon", icon: MapPin },
              ].map((field) => {
                const Icon = field.icon;
                return (
                  <div key={field.label} className="flex items-center gap-3 border-b border-gray-50 pb-3">
                    <Icon className="w-4 h-4 text-gray shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-xs text-gray">{field.label}</p>
                      <p className="text-sm font-medium text-dark-text">{field.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}