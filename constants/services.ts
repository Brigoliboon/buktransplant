export interface ServicePackage {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

export const servicePackages: ServicePackage[] = [
  {
    id: "transplant-only",
    title: "Transplanting Only (Package A)",
    description: "Mechanized rice transplanting service — machine and operator provided, priced per hectare.",
    features: ["Machine rental (KW4 or KW6)", "Operator included", "Per-hectare pricing", "Flexible scheduling"],
    icon: "Tractor",
  },
  {
    id: "complete-establishment",
    title: "Complete Establishment (Package B)",
    description: "Full-service package including transplanting and Dapog seedling establishment.",
    features: ["Machine rental (KW4 or KW6)", "Operator included", "Dapog seedling establishment", "End-to-end service", "Per-hectare pricing"],
    icon: "Settings",
  },
];