"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Package, CreditCard } from "lucide-react";
import Link from "next/link";
import { useBookings } from "@/lib/bookings";

const statusColors: Record<string, string> = {
  completed: "text-success bg-success/10",
  "in-progress": "text-accent bg-accent/10",
  scheduled: "text-primary bg-primary/10",
  pending: "text-warning bg-warning/10",
  cancelled: "text-error bg-error/10",
};

export default function BookingDetailPage() {
  const { id } = useParams();
  const { bookings } = useBookings();
  const booking = bookings.find((b) => b.id === id);

  if (!booking) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold text-dark-text">Booking not found</h2>
        <Link href="/farmer/bookings" className="text-primary mt-2 inline-block">&larr; Back to Bookings</Link>
      </div>
    );
  }

  return (
    <div>
      <Link href="/farmer/bookings" className="inline-flex items-center gap-2 text-gray hover:text-primary mb-6 transition-colors text-sm">
        <ArrowLeft className="w-4 h-4" /> Back to Bookings
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-dark-text">{booking.refNo}</h1>
            <p className="text-gray text-sm mt-1">{booking.packageName}</p>
          </div>
          <span className={`text-sm font-semibold px-3 py-1 ${statusColors[booking.status]}`}>{booking.status}</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Date", value: booking.date, icon: Calendar },
            { label: "Location", value: booking.location, icon: MapPin },
            { label: "Package", value: booking.packageName, icon: Package },
            { label: "Amount", value: `₱${booking.amount.toLocaleString()}`, icon: CreditCard },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-light-bg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-gray">{item.label}</p>
                  <p className="font-semibold text-dark-text text-sm">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        <Link href="/farmer/track" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors">
          Track This Booking
        </Link>
      </motion.div>
    </div>
  );
}