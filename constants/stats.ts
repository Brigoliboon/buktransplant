export interface Stat {
  label: string
  value: number
  suffix?: string
}

export const stats: Stat[] = [
  { label: "Hectares Served", value: 12500, suffix: "+" },
  { label: "Farmers Served", value: 3800, suffix: "+" },
  { label: "Machines Available", value: 48 },
  { label: "Branches", value: 6 },
  { label: "Operators", value: 72, suffix: "+" },
];