"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type UserRole = "farmer" | "operator" | "branch" | "admin";

export interface AuthUser {
  name: string
  email: string
  role: UserRole
}

interface AuthContextType {
  user: AuthUser | null
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
}

const mockUsers: Record<string, { password: string; user: AuthUser }> = {
  "farmer@buktransplant.com": { password: "farmer123", user: { name: "Juan Dela Cruz", email: "farmer@buktransplant.com", role: "farmer" } },
  "operator@buktransplant.com": { password: "operator123", user: { name: "Ricky Operario", email: "operator@buktransplant.com", role: "operator" } },
  "branch@buktransplant.com": { password: "branch123", user: { name: "Carlos Reyes", email: "branch@buktransplant.com", role: "branch" } },
  "admin@buktransplant.com": { password: "admin123", user: { name: "Admin User", email: "admin@buktransplant.com", role: "admin" } },
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("auth_user");
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  });

  const login = async (email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 600));
    const record = mockUsers[email.toLowerCase()];
    if (!record) return { success: false, error: "Account not found." };
    if (record.password !== password) return { success: false, error: "Invalid password." };
    setUser(record.user);
    localStorage.setItem("auth_user", JSON.stringify(record.user));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

export function getDashboardPath(role: UserRole) {
  const paths = { farmer: "/farmer/dashboard", operator: "/operator/dashboard", branch: "/branch/dashboard", admin: "/admin/dashboard" };
  return paths[role];
}