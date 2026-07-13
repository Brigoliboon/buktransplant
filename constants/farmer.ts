export interface FarmerBooking {
  id: string
  refNo: string
  package: string
  status: "pending" | "confirmed" | "scheduled" | "in-progress" | "completed" | "cancelled"
  date: string
  location: string
  amount: number
}

export const farmerBookings: FarmerBooking[] = [
  { id: "1", refNo: "BKT-2026-001", package: "Standard Transplanting", status: "completed", date: "Jun 10, 2026", location: "Malaybalay City", amount: 6500 },
  { id: "2", refNo: "BKT-2026-002", package: "Premium Transplanting", status: "in-progress", date: "Jun 15, 2026", location: "Valencia City", amount: 8500 },
  { id: "3", refNo: "BKT-2026-003", package: "Basic Transplanting", status: "scheduled", date: "Jun 20, 2026", location: "Quezon, Bukidnon", amount: 4500 },
  { id: "4", refNo: "BKT-2026-004", package: "Standard Transplanting", status: "pending", date: "Jun 25, 2026", location: "Maramag", amount: 6500 },
];

export interface FarmerPayment {
  id: string
  refNo: string
  amount: number
  method: string
  status: "paid" | "pending" | "failed"
  date: string
}

export const farmerPayments: FarmerPayment[] = [
  { id: "1", refNo: "BKT-2026-001", amount: 6500, method: "GCash", status: "paid", date: "Jun 08, 2026" },
  { id: "2", refNo: "BKT-2026-002", amount: 8500, method: "Bank Transfer", status: "pending", date: "Jun 12, 2026" },
  { id: "3", refNo: "BKT-2026-003", amount: 4500, method: "Cash", status: "pending", date: "Jun 18, 2026" },
];

export interface FarmerNotification {
  id: string
  message: string
  date: string
  read: boolean
}

export const farmerNotifications: FarmerNotification[] = [
  { id: "1", message: "Your booking BKT-2026-002 is now in progress.", date: "Jun 15, 2026", read: false },
  { id: "2", message: "Payment for BKT-2026-001 has been confirmed.", date: "Jun 09, 2026", read: false },
  { id: "3", message: "Operator assigned to BKT-2026-003.", date: "Jun 05, 2026", read: true },
  { id: "4", message: "Your booking BKT-2026-004 is pending confirmation.", date: "Jun 01, 2026", read: true },
];

export const farmerStats = {
  totalBookings: 12,
  completedBookings: 8,
  totalSpent: 52000,
  pendingBookings: 2,
};