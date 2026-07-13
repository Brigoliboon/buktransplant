"use client";

import { motion } from "framer-motion";
import { adminUsers } from "@/constants/admin";

export default function AdminUsersPage() {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-dark-text mb-6">Users</motion.h1>

      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left">
                <th className="p-4 font-semibold text-gray">Name</th>
                <th className="p-4 font-semibold text-gray">Role</th>
                <th className="p-4 font-semibold text-gray">Email</th>
                <th className="p-4 font-semibold text-gray">Branch</th>
                <th className="p-4 font-semibold text-gray">Status</th>
              </tr>
            </thead>
            <tbody>
              {adminUsers.map((u, i) => (
                <motion.tr key={u.email} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} className="border-b border-gray-50">
                  <td className="p-4 font-medium text-dark-text">{u.name}</td>
                  <td className="p-4 text-gray">{u.role}</td>
                  <td className="p-4 text-gray">{u.email}</td>
                  <td className="p-4 text-gray">{u.branch}</td>
                  <td className="p-4"><span className={`text-xs font-semibold px-2 py-1 ${u.status === "active" ? "text-success bg-success/10" : "text-gray bg-gray/10"}`}>{u.status}</span></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}