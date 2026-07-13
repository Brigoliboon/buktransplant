"use client";

import { motion } from "framer-motion";
import { Bell, CheckCheck } from "lucide-react";
import { farmerNotifications } from "@/constants/farmer";

export default function NotificationsPage() {
  const unread = farmerNotifications.filter((n) => !n.read).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text">
          Notifications {unread > 0 && <span className="text-sm font-normal text-gray">({unread} unread)</span>}
        </motion.h1>
        {unread > 0 && (
          <button className="flex items-center gap-1 text-sm text-primary font-semibold hover:underline">
            <CheckCheck className="w-4 h-4" strokeWidth={1.5} /> Mark all read
          </button>
        )}
      </div>

      <div className="space-y-2">
        {farmerNotifications.map((n, i) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`bg-white p-4 flex items-start gap-4 ${!n.read ? "border-l-4 border-primary" : ""}`}
          >
            <div className={`w-10 h-10 shrink-0 flex items-center justify-center ${n.read ? "bg-gray/10" : "bg-primary/10"}`}>
              <Bell className={`w-5 h-5 ${n.read ? "text-gray" : "text-primary"}`} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className={`text-sm ${n.read ? "text-gray" : "text-dark-text font-medium"}`}>{n.message}</p>
              <p className="text-xs text-gray mt-1">{n.date}</p>
            </div>
            {!n.read && <div className="w-2 h-2 bg-primary rounded-full mt-2" />}
          </motion.div>
        ))}
      </div>
    </div>
  );
}