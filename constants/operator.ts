export interface OperatorJob {
  id: string
  refNo: string
  farmer: string
  location: string
  date: string
  status: "assigned" | "in-progress" | "completed"
  machine: string
  coordinates: [number, number]
  hectares: number
}

export const operatorJobs: OperatorJob[] = [
  { id: "1", refNo: "BKT-2026-002", farmer: "Maria Santos", location: "Purok 3, Valencia City", date: "Jun 15, 2026", status: "in-progress", machine: "Yanmar AG600", coordinates: [125.005, 7.906], hectares: 2.5 },
  { id: "2", refNo: "BKT-2026-003", farmer: "Pedro Reyes", location: "Barangay San Jose, Quezon", date: "Jun 20, 2026", status: "assigned", machine: "Kubota SPU68", coordinates: [125.05, 7.73], hectares: 1.5 },
  { id: "3", refNo: "BKT-2026-005", farmer: "Ana Mendoza", location: "Poblacion, Maramag", date: "Jun 22, 2026", status: "assigned", machine: "Iseki PZ60", coordinates: [125.01, 7.76], hectares: 3.0 },
  { id: "4", refNo: "BKT-2025-012", farmer: "Juan Dela Cruz", location: "Casisang, Malaybalay", date: "May 20, 2026", status: "completed", machine: "Yanmar AG600", coordinates: [125.13, 8.16], hectares: 2.0 },
];

export const operatorStats = {
  assigned: 2,
  inProgress: 1,
  completedThisMonth: 6,
  totalHectares: 18.5,
};