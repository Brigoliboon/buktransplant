"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Calendar, MapPin, User, Phone, Mail, MessageSquare, CheckCircle,
  ChevronLeft, ChevronRight, Brain, Tractor, Sprout, Calculator,
} from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import MapView from "@/components/shared/MapView";
import { servicePackages } from "@/constants/services";
import { branchLocations } from "@/constants/contact";
import { featuredMachines } from "@/constants/fleet";
import { branchFleet } from "@/constants/branch";
import { useBookings } from "@/lib/bookings";
import { getAICalendarSuggestion, getAIRecommendation } from "@/lib/ai";

const machineFieldCapacity: Record<string, number> = {
  kw4: 0.5,
  kw6: 0.8,
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function formatDateDisplay(dateStr: string): string {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

export default function BookingPage() {
  const { bookings, addBooking } = useBookings();

  // form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pkgId, setPkgId] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [branch, setBranch] = useState("");
  const [hectares, setHectares] = useState("");
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);

  // submit
  const [submitted, setSubmitted] = useState<{ refNo: string } | null>(null);

  // calendar
  const [calMonth, setCalMonth] = useState(new Date().getMonth());
  const [calYear, setCalYear] = useState(new Date().getFullYear());
  const [calSuggestion, setCalSuggestion] = useState("");
  const [calSuggestionLoading, setCalSuggestionLoading] = useState(false);

  // ai recommendation
  const [aiMachine, setAiMachine] = useState("");
  const [aiFarmSize, setAiFarmSize] = useState("");
  const [aiDays, setAiDays] = useState("");
  const [aiResult, setAiResult] = useState<{
    machinesNeeded: number
    available: number
    canFulfill: boolean
    loading: boolean
    error: string
    aiText: string
    aiLoading: boolean
  } | null>(null);

  // calendar helpers
  const scheduledDates = useMemo(
    () => bookings
      .filter((b) => b.status === "scheduled" || b.status === "in-progress" || b.status === "completed")
      .map((b) => b.date)
      .filter(Boolean),
    [bookings],
  );

  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const firstDay = new Date(calYear, calMonth, 1).getDay();

  const isScheduled = useCallback(
    (day: number) => {
      const dateStr = `${MONTHS[calMonth]} ${day}, ${calYear}`;
      return scheduledDates.includes(dateStr);
    },
    [calMonth, calYear, scheduledDates],
  );

  const prevMonth = () => {
    if (calMonth === 0) { setCalMonth(11); setCalYear((y) => y - 1); }
    else setCalMonth((m) => m - 1);
  };

  const nextMonth = () => {
    if (calMonth === 11) { setCalMonth(0); setCalYear((y) => y + 1); }
    else setCalMonth((m) => m + 1);
  };

  // load calendar AI suggestion
  useEffect(() => {
    const monthLabel = `${MONTHS[calMonth]} ${calYear}`;
    const datesInMonth = scheduledDates.filter((d) => d.includes(MONTHS[calMonth]) && d.includes(String(calYear)));
    const total = bookings.filter((b) => b.date.includes(MONTHS[calMonth]) && b.date.includes(String(calYear))).length;

    const id = setTimeout(() => {
      setCalSuggestionLoading(true);
      setCalSuggestion("");

      getAICalendarSuggestion(monthLabel, datesInMonth, total)
        .then(setCalSuggestion)
        .catch(() => setCalSuggestion(""))
        .finally(() => setCalSuggestionLoading(false));
    }, 0);

    return () => clearTimeout(id);
  }, [calMonth, calYear, bookings]);

  const handleMapClick = useCallback(async (latVal: number, lngVal: number) => {
    setLat(latVal);
    setLng(lngVal);
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) return;
    try {
      const geoRes = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${lngVal},${latVal}.json?access_token=${token}&country=PH&types=place,locality,neighborhood`,
      );
      const geoData = await geoRes.json();
      if (geoData.features?.length > 0) {
        setLocation(geoData.features[0].place_name);
      }
    } catch {
      // fallback
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pkg = servicePackages.find((p) => p.id === pkgId);
    const formattedDate = date ? formatDateDisplay(date) : "";

    const booking = addBooking({
      name,
      phone,
      email,
      packageName: pkg?.title ?? pkgId,
      packageId: pkgId,
      date: formattedDate,
      location,
      branch,
      amount: 0,
      hectares: hectares ? parseFloat(hectares) : undefined,
      lat: lat ?? undefined,
      lng: lng ?? undefined,
    });

    setSubmitted({ refNo: booking.refNo });
  };

  const handleCalculate = async () => {
    if (!aiMachine || !aiFarmSize || !aiDays) return;

    const farmSize = parseFloat(aiFarmSize);
    const days = parseInt(aiDays);
    if (isNaN(farmSize) || isNaN(days) || farmSize <= 0 || days <= 0) return;

    const capacity = machineFieldCapacity[aiMachine] || 0.5;
    const machinesNeeded = Math.ceil(farmSize / (capacity * days));

    const machineName = featuredMachines.find((m) => m.id === aiMachine)?.name || "";
    const available = branchFleet.filter(
      (f) => f.name.toLowerCase().includes(machineName.toLowerCase().split(" ")[0]?.toLowerCase() || "") && f.status === "active",
    ).length;

    const canFulfill = machinesNeeded <= available;
    const result = {
      machinesNeeded,
      available: Math.max(available, 1),
      canFulfill,
      loading: false,
      error: "",
      aiText: "",
      aiLoading: true,
    };
    setAiResult(result);

    try {
      const aiText = await getAIRecommendation(farmSize, machineName || aiMachine, days, machinesNeeded, available);
      setAiResult((prev) => prev ? { ...prev, aiText, aiLoading: false } : null);
    } catch {
      setAiResult((prev) => prev ? { ...prev, aiLoading: false } : null);
    }
  };

  if (submitted) {
    return (
      <>
        <PageHeader title="Booking Submitted" subtitle="Your booking request has been received." />
        <section className="py-20 bg-light-bg text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-16 h-16 bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-accent" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">Thank You!</h2>
            <p className="text-gray mb-1">Reference Number: <span className="font-bold text-dark-text">{submitted.refNo}</span></p>
            <p className="text-gray mb-8">We will confirm your booking within 24 hours.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/booking/tracker" className="bg-primary text-white px-8 py-3 font-semibold inline-block hover:bg-primary/90 transition-colors">
                Track Your Booking
              </Link>
              <Link href="/farmer/dashboard" className="border-2 border-primary text-primary px-8 py-3 font-semibold inline-block hover:bg-primary hover:text-white transition-colors">
                View My Bookings
              </Link>
              <Link href="/" className="border-2 border-primary text-primary px-8 py-3 font-semibold inline-block hover:bg-primary hover:text-white transition-colors">
                Back to Home
              </Link>
            </div>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title="Book a Service" subtitle="Schedule your mechanized transplanting service." />

      <section className="py-20 bg-light-bg">
        <div className="px-6">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3 bg-white p-8">
              <h3 className="text-xl font-bold text-dark-text mb-6">Booking Form</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-dark-text mb-1">Full Name</label>
                    <div className="flex border border-gray/20">
                      <span className="bg-light-bg px-3 flex items-center"><User className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
                      <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2.5 text-sm outline-none" placeholder="Juan Dela Cruz" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-text mb-1">Phone Number</label>
                    <div className="flex border border-gray/20">
                      <span className="bg-light-bg px-3 flex items-center"><Phone className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
                      <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-3 py-2.5 text-sm outline-none" placeholder="09XX XXX XXXX" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-text mb-1">Email</label>
                  <div className="flex border border-gray/20">
                    <span className="bg-light-bg px-3 flex items-center"><Mail className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2.5 text-sm outline-none" placeholder="you@example.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-dark-text mb-1">Service Package</label>
                    <div className="flex border border-gray/20">
                      <span className="bg-light-bg px-3 flex items-center"><MessageSquare className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
                      <select required value={pkgId} onChange={(e) => setPkgId(e.target.value)} className="w-full px-3 py-2.5 text-sm outline-none bg-white">
                        <option value="">Select a package</option>
                        {servicePackages.map((p) => (
                          <option key={p.id} value={p.id}>{p.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-text mb-1">Farm Size (hectares)</label>
                    <div className="flex border border-gray/20">
                      <span className="bg-light-bg px-3 flex items-center"><Sprout className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
                      <input type="number" step="0.1" min="0.1" value={hectares} onChange={(e) => setHectares(e.target.value)} className="w-full px-3 py-2.5 text-sm outline-none" placeholder="e.g. 2.5" />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-dark-text mb-1">Preferred Date</label>
                    <div className="flex border border-gray/20">
                      <span className="bg-light-bg px-3 flex items-center"><Calendar className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
                      <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-3 py-2.5 text-sm outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-text mb-1">Branch</label>
                    <div className="flex border border-gray/20">
                      <span className="bg-light-bg px-3 flex items-center"><MapPin className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
                      <select required value={branch} onChange={(e) => setBranch(e.target.value)} className="w-full px-3 py-2.5 text-sm outline-none bg-white">
                        <option value="">Select branch</option>
                        {branchLocations.map((b) => (
                          <option key={b.name} value={b.name}>{b.name} - {b.location}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-text mb-1">Farm Location</label>
                  <div className="flex border border-gray/20">
                    <span className="bg-light-bg px-3 flex items-center"><MapPin className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
                    <input type="text" required value={location} onChange={(e) => setLocation(e.target.value)} className="w-full px-3 py-2.5 text-sm outline-none" placeholder="Click the map below or type location" />
                  </div>
                  <div className="mt-3">
                    <MapView onClick={handleMapClick} height="h-72" />
                    <p className="text-xs text-gray mt-1">Click on the map to set your farm location</p>
                    {lat && lng && (
                      <p className="text-xs text-primary mt-1">{lat.toFixed(4)}, {lng.toFixed(4)}</p>
                    )}
                  </div>
                </div>

                <button type="submit" className="w-full bg-primary text-white py-3 font-semibold hover:bg-primary/90 transition-colors">
                  Submit Booking
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Calendar */}
              <div className="bg-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-dark-text">Schedule</h3>
                  <div className="flex items-center gap-2">
                    <button onClick={prevMonth} className="p-1 hover:bg-gray-100 transition-colors">
                      <ChevronLeft className="w-4 h-4 text-gray" strokeWidth={1.5} />
                    </button>
                    <span className="text-sm font-semibold text-dark-text w-28 text-center">
                      {MONTHS[calMonth]} {calYear}
                    </span>
                    <button onClick={nextMonth} className="p-1 hover:bg-gray-100 transition-colors">
                      <ChevronRight className="w-4 h-4 text-gray" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-0 text-center text-xs mb-1">
                  {DAYS.map((d) => (
                    <div key={d} className="py-1.5 font-semibold text-gray">{d}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-0 text-center text-sm">
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="py-2" />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const scheduled = isScheduled(day);
                    return (
                      <div
                        key={day}
                        className={`py-2 relative text-dark-text ${scheduled ? "font-bold" : ""}`}
                      >
                        {day}
                        {scheduled && (
                          <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                        )}
                      </div>
                    );
                  })}
                </div>
                {calSuggestionLoading && (
                  <p className="text-xs text-gray mt-3 italic">Loading suggestion...</p>
                )}
                {calSuggestion && !calSuggestionLoading && (
                  <div className="mt-3 p-3 bg-accent/5 border border-accent/20">
                    <p className="text-xs text-dark-text leading-relaxed">{calSuggestion}</p>
                  </div>
                )}
              </div>

              {/* Smart AI Recommendation */}
              <div className="bg-white p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold text-dark-text">Smart AI Recommendation</h3>
                </div>
                <p className="text-xs text-accent font-semibold mb-2">Let Our AI Help You Plan</p>
                <p className="text-xs text-gray mb-4 leading-relaxed">
                  Not sure how many transplanters you need? We automatically calculate the recommended number of machines
                  required based on your farm size, machine model, and desired completion period.
                </p>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-dark-text mb-1">Farm Size (hectares)</label>
                    <input
                      type="number"
                      step="0.1"
                      min="0.1"
                      value={aiFarmSize}
                      onChange={(e) => setAiFarmSize(e.target.value)}
                      className="w-full border border-gray/20 px-3 py-2 text-sm outline-none"
                      placeholder="e.g. 3.0"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-dark-text mb-1">Machine Model</label>
                    <div className="flex border border-gray/20">
                      <span className="bg-light-bg px-3 flex items-center"><Tractor className="w-4 h-4 text-gray" strokeWidth={1.5} /></span>
                      <select value={aiMachine} onChange={(e) => setAiMachine(e.target.value)} className="w-full px-3 py-2 text-sm outline-none bg-white">
                        <option value="">Select machine</option>
                        {featuredMachines.map((m) => (
                          <option key={m.id} value={m.id}>{m.name} ({machineFieldCapacity[m.id]} ha/day)</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-dark-text mb-1">Desired Completion Period (days)</label>
                    <input
                      type="number"
                      min="1"
                      value={aiDays}
                      onChange={(e) => setAiDays(e.target.value)}
                      className="w-full border border-gray/20 px-3 py-2 text-sm outline-none"
                      placeholder="e.g. 5"
                    />
                  </div>
                  <button
                    onClick={handleCalculate}
                    disabled={!aiMachine || !aiFarmSize || !aiDays}
                    className="w-full flex items-center justify-center gap-2 bg-accent text-white py-2.5 text-sm font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Calculator className="w-4 h-4" strokeWidth={1.5} />
                    Calculate
                  </button>
                </div>

                {aiResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-accent/5 border border-accent/20"
                  >
                    <p className="text-sm font-bold text-dark-text">Recommended: {aiResult.machinesNeeded} machine{aiResult.machinesNeeded !== 1 ? "s" : ""}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 ${aiResult.canFulfill ? "text-success bg-success/10" : "text-warning bg-warning/10"}`}>
                        {aiResult.canFulfill ? "Available" : "Limited Availability"}
                      </span>
                      <span className="text-xs text-gray">{aiResult.available} unit{aiResult.available !== 1 ? "s" : ""} in fleet</span>
                    </div>
                    {aiResult.aiLoading && (
                      <p className="text-xs text-gray mt-2 italic">AI is analyzing...</p>
                    )}
                    {aiResult.aiText && !aiResult.aiLoading && (
                      <p className="text-xs text-dark-text mt-2 leading-relaxed">{aiResult.aiText}</p>
                    )}
                  </motion.div>
                )}
              </div>

              {/* Help */}
              <div className="bg-primary p-6 text-white">
                <h3 className="text-lg font-bold text-accent mb-3">Need Help?</h3>
                <p className="text-white/80 text-sm mb-3">Contact our support team for assistance with your booking.</p>
                <p className="text-sm">Call: +63 951 385 5498</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
