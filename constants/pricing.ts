export interface PricingPlan {
  name: string
  price: number
  unit: string
  description: string
  features: string[]
  highlighted?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: 4500,
    unit: "per hectare",
    description: "Essential mechanized transplanting for small farms.",
    features: ["Standard transplanter", "Operator included", "Basic scheduling", "Manual report"],
  },
  {
    name: "Standard",
    price: 6500,
    unit: "per hectare",
    description: "Enhanced service with digital features and priority booking.",
    features: ["Modern transplanter", "Certified operator", "Priority scheduling", "GPS field mapping", "Digital report", "SMS notifications"],
    highlighted: true,
  },
  {
    name: "Premium",
    price: 8500,
    unit: "per hectare",
    description: "Premium service with AI optimization and full support.",
    features: ["Latest model machine", "Senior operator", "AI-optimized scheduling", "Real-time GPS tracking", "Digital analytics report", "Priority support", "Weather adjustments"],
  },
];