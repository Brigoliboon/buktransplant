export interface PricingPlan {
  name: string
  subtitle: string
  price: number
  unit: string
  kw6Price?: number
  description: string
  features: string[]
  highlighted?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Package A",
    subtitle: "Transplanting Only",
    price: 5000,
    kw6Price: 5500,
    unit: "per hectare",
    description: "Mechanized transplanting service — machine and operator provided.",
    features: ["Machine rental (KW4 or KW6)", "Operator included", "Per-hectare pricing", "Flexible scheduling"],
  },
  {
    name: "Package B",
    subtitle: "Complete Establishment",
    price: 9000,
    kw6Price: 9500,
    unit: "per hectare",
    description: "Full-service package with Dapog seedling establishment included.",
    features: ["Machine rental (KW4 or KW6)", "Operator included", "Dapog seedling establishment", "End-to-end service", "Per-hectare pricing"],
    highlighted: true,
  },
];