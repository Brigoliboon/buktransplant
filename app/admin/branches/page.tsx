"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Phone } from "lucide-react";

const branches = [
  { name: "Malaybalay City", manager: "Carlos Reyes", phone: "+63 XXX XXX XXXX", fleet: 10, operators: 15, status: "active" },
  { name: "Valencia City", manager: "Lisa Tan", phone: "+63 XXX XXX XXXX", fleet: 12, operators: 18, status: "active" },
  { name: "Quezon", manager: "Mark Dela Cruz", phone: "+63 XXX XXX XXXX", fleet: 8, operators: 12, status: "active" },
  { name: "Maramag", manager: "Nina Santos", phone: "+63 XXX XXX XXXX", fleet: 6, operators: 10, status: "active" },
  { name: "Don Carlos", manager: "Ben Torres", phone: "+63 XXX XXX XXXX", fleet: 6, operators: 9, status: "active" },
  { name: "Impasugong", manager: "Joan Rivera", phone: "+63 XXX XXX XXXX", fleet: 6, operators: 8, status: "active" },
];

export default function AdminBranchesPage() {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Branches</motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {branches.map((b, i) => (
          <motion.div key={b.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="bg-white p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-bold text-dark-text">{b.name}</h3>
                <p className="text-xs text-gray">Manager: {b.manager}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray mb-1"><Phone className="w-3 h-3" strokeWidth={1.5} /> {b.phone}</div>
            <div className="flex items-center gap-2 text-xs text-gray"><MapPin className="w-3 h-3" strokeWidth={1.5} /> {b.fleet} machines, {b.operators} operators</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}