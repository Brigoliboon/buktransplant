"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export interface Booking {
  id: string
  refNo: string
  name: string
  phone: string
  email: string
  packageName: string
  packageId: string
  date: string
  location: string
  branch: string
  lat?: number
  lng?: number
  status: "pending" | "confirmed" | "scheduled" | "in-progress" | "completed" | "cancelled"
  farmer: string
  amount: number
  machine?: string
  operator?: string
  hectares?: number
  createdAt: string
}

interface BookingContextType {
  bookings: Booking[]
  addBooking: (b: Omit<Booking, "id" | "refNo" | "status" | "createdAt" | "farmer">) => Booking
}

let nextId = 100;
let nextRef = 1000;

function generateRef() {
  const n = nextRef++;
  return `BKT-2026-${String(n).padStart(4, "0")}`;
}

const initialBookings: Booking[] = [
  { id: "1", refNo: "BKT-2026-001", name: "Juan Dela Cruz", phone: "09171234567", email: "juan@example.com", packageName: "Standard Transplanting", packageId: "standard", date: "Jun 10, 2026", location: "Malaybalay City", branch: "Main Branch", status: "completed", farmer: "Juan Dela Cruz", amount: 6500, createdAt: "2026-06-01T00:00:00.000Z" },
  { id: "2", refNo: "BKT-2026-002", name: "Maria Santos", phone: "09179876543", email: "maria@example.com", packageName: "Premium Transplanting", packageId: "premium", date: "Jun 15, 2026", location: "Valencia City", branch: "Valencia Branch", status: "in-progress", farmer: "Maria Santos", amount: 8500, machine: "Yanmar AG600", operator: "Ricky Operario", hectares: 2.5, createdAt: "2026-06-05T00:00:00.000Z" },
  { id: "3", refNo: "BKT-2026-003", name: "Pedro Reyes", phone: "09171112233", email: "pedro@example.com", packageName: "Basic Transplanting", packageId: "basic", date: "Jun 20, 2026", location: "Quezon, Bukidnon", branch: "Quezon Branch", status: "scheduled", farmer: "Pedro Reyes", amount: 4500, machine: "Kubota SPU68", operator: "Mike Dizon", hectares: 1.5, createdAt: "2026-06-10T00:00:00.000Z" },
  { id: "4", refNo: "BKT-2026-004", name: "Ana Mendoza", phone: "09174445566", email: "ana@example.com", packageName: "Standard Transplanting", packageId: "standard", date: "Jun 25, 2026", location: "Maramag", branch: "Maramag Branch", status: "pending", farmer: "Ana Mendoza", amount: 6500, createdAt: "2026-06-15T00:00:00.000Z" },
  { id: "5", refNo: "BKT-2026-005", name: "Carlos Jimenez", phone: "09177778899", email: "carlos@example.com", packageName: "Premium Transplanting", packageId: "premium", date: "Jun 28, 2026", location: "Valencia City", branch: "Valencia Branch", status: "scheduled", farmer: "Carlos Jimenez", amount: 8500, machine: "Yanmar AG600", operator: "Jose Mendoza", hectares: 3.0, createdAt: "2026-06-20T00:00:00.000Z" },
];

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("bookings");
      if (stored) {
        const parsed = JSON.parse(stored) as Booking[];
        const maxId = Math.max(...parsed.map((b) => parseInt(b.id)), 5);
        nextId = maxId + 1;
        const maxRef = Math.max(...parsed.map((b) => parseInt(b.refNo.split("-").pop() || "0")), 5);
        nextRef = maxRef + 1;
        return parsed;
      }
    }
    return initialBookings;
  });

  const persist = (b: Booking[]) => {
    setBookings(b);
    localStorage.setItem("bookings", JSON.stringify(b));
  };

  const addBooking = (data: Omit<Booking, "id" | "refNo" | "status" | "createdAt" | "farmer">) => {
    const id = String(nextId++);
    const refNo = generateRef();
    const booking: Booking = {
      ...data,
      id,
      refNo,
      status: "pending",
      farmer: data.name,
      createdAt: new Date().toISOString(),
    };
    persist([booking, ...bookings]);
    return booking;
  };

  return <BookingContext.Provider value={{ bookings, addBooking }}>{children}</BookingContext.Provider>;
}

export function useBookings() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBookings must be used within BookingProvider");
  return ctx;
}
