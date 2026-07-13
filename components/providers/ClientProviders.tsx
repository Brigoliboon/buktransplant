"use client";

import { type ReactNode } from "react";
import { AuthProvider } from "@/lib/auth";
import { BookingProvider } from "@/lib/bookings";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <BookingProvider>
        {children}
      </BookingProvider>
    </AuthProvider>
  );
}