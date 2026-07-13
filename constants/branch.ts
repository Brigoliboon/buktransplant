export const branchStats = {
  totalBookings: 48,
  todayBookings: 3,
  activeMachines: 8,
  activeOperators: 12,
  monthlyRevenue: 285000,
  nurserySeedlings: 15000,
};

export interface BranchBooking {
  id: string
  refNo: string
  farmer: string
  package: string
  date: string
  status: string
  amount: number
}

export const branchBookings: BranchBooking[] = [
  { id: "1", refNo: "BKT-2026-001", farmer: "Juan Dela Cruz", package: "Standard", date: "Jun 10, 2026", status: "completed", amount: 6500 },
  { id: "2", refNo: "BKT-2026-002", farmer: "Maria Santos", package: "Premium", date: "Jun 15, 2026", status: "in-progress", amount: 8500 },
  { id: "3", refNo: "BKT-2026-003", farmer: "Pedro Reyes", package: "Basic", date: "Jun 20, 2026", status: "scheduled", amount: 4500 },
  { id: "4", refNo: "BKT-2026-004", farmer: "Ana Mendoza", package: "Standard", date: "Jun 25, 2026", status: "pending", amount: 6500 },
  { id: "5", refNo: "BKT-2026-005", farmer: "Carlos Jimenez", package: "Premium", date: "Jun 28, 2026", status: "scheduled", amount: 8500 },
];

export const branchFleet = [
  { name: "Yanmar AG600", plate: "YAN-001", status: "active", operator: "Ricky O." },
  { name: "Kubota SPU68", plate: "KUB-001", status: "active", operator: "Mike D." },
  { name: "Iseki PZ60", plate: "ISE-001", status: "maintenance", operator: "—" },
  { name: "Yanmar AG600", plate: "YAN-002", status: "active", operator: "Jose M." },
  { name: "Kubota SPU68", plate: "KUB-002", status: "active", operator: "Peter S." },
  { name: "Iseki PZ60", plate: "ISE-002", status: "idle", operator: "—" },
  { name: "Yanmar AG600", plate: "YAN-003", status: "active", operator: "Romy L." },
  { name: "Kubota SPU68", plate: "KUB-003", status: "active", operator: "Ben T." },
];

export const branchOperators = [
  { name: "Ricky Operario", specialization: "Yanmar AG600", status: "on-job", jobs: 4 },
  { name: "Mike Dizon", specialization: "Kubota SPU68", status: "on-job", jobs: 3 },
  { name: "Jose Mendoza", specialization: "Yanmar AG600", status: "available", jobs: 2 },
  { name: "Peter Santos", specialization: "Kubota SPU68", status: "on-job", jobs: 5 },
  { name: "Romy Lopez", specialization: "Yanmar AG600", status: "available", jobs: 1 },
  { name: "Ben Torres", specialization: "Iseki PZ60", status: "on-job", jobs: 3 },
];