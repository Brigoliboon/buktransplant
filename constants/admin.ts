export const adminStats = {
  totalUsers: 1250,
  totalFarmers: 3800,
  activeBranches: 6,
  totalFleet: 48,
  activeOperators: 72,
  monthlyBookings: 120,
  monthlyRevenue: 1850000,
  pendingPayments: 145000,
};

export interface AdminBooking {
  id: string
  refNo: string
  farmer: string
  branch: string
  package: string
  date: string
  status: string
  amount: number
}

export const adminBookings: AdminBooking[] = [
  { id: "1", refNo: "BKT-2026-001", farmer: "Juan Dela Cruz", branch: "Malaybalay", package: "Standard", date: "Jun 10", status: "completed", amount: 6500 },
  { id: "2", refNo: "BKT-2026-002", farmer: "Maria Santos", branch: "Valencia", package: "Premium", date: "Jun 15", status: "in-progress", amount: 8500 },
  { id: "3", refNo: "BKT-2026-003", farmer: "Pedro Reyes", branch: "Quezon", package: "Basic", date: "Jun 20", status: "scheduled", amount: 4500 },
  { id: "4", refNo: "BKT-2026-004", farmer: "Ana Mendoza", branch: "Maramag", package: "Standard", date: "Jun 25", status: "pending", amount: 6500 },
  { id: "5", refNo: "BKT-2026-005", farmer: "Carlos Jimenez", branch: "Valencia", package: "Premium", date: "Jun 28", status: "scheduled", amount: 8500 },
];

export const adminUsers = [
  { name: "Juan Dela Cruz", role: "Farmer", email: "juan@example.com", branch: "Malaybalay", status: "active" },
  { name: "Maria Santos", role: "Farmer", email: "maria@example.com", branch: "Valencia", status: "active" },
  { name: "Ricky Operario", role: "Operator", email: "ricky@buktransplant.com", branch: "Valencia", status: "active" },
  { name: "Mike Dizon", role: "Operator", email: "mike@buktransplant.com", branch: "Malaybalay", status: "active" },
  { name: "Jose Mendoza", role: "Operator", email: "jose@buktransplant.com", branch: "Quezon", status: "inactive" },
  { name: "Ana Mendoza", role: "Farmer", email: "ana@example.com", branch: "Maramag", status: "active" },
  { name: "Pedro Reyes", role: "Farmer", email: "pedro@example.com", branch: "Quezon", status: "active" },
];

export const adminFarmers = [
  { name: "Juan Dela Cruz", farm: "Greenfield Farms", hectares: 3.5, branch: "Malaybalay", bookings: 8, status: "active" },
  { name: "Maria Santos", farm: "Santos Rice Farm", hectares: 5.0, branch: "Valencia", bookings: 12, status: "active" },
  { name: "Pedro Reyes", farm: "Reyes Agricultural", hectares: 2.0, branch: "Quezon", bookings: 5, status: "active" },
  { name: "Ana Mendoza", farm: "Mendoza Plantation", hectares: 4.0, branch: "Maramag", bookings: 6, status: "active" },
  { name: "Carlos Jimenez", farm: "Jimenez Estate", hectares: 6.5, branch: "Valencia", bookings: 15, status: "active" },
];