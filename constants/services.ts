export interface ServicePackage {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

export const servicePackages: ServicePackage[] = [
  {
    id: "basic",
    title: "Basic Transplanting",
    description: "Standard mechanized rice transplanting service for small to medium farms.",
    features: ["Machine rental", "Operator included", "1 hectare coverage", "Basic scheduling"],
    icon: "Tractor",
  },
  {
    id: "standard",
    title: "Standard Transplanting",
    description: "Enhanced transplanting service with priority scheduling and digital tracking.",
    features: ["Machine rental", "Certified operator", "Up to 3 hectares", "Priority scheduling", "GPS field mapping", "Digital completion report"],
    icon: "Settings",
  },
  {
    id: "premium",
    title: "Premium Transplanting",
    description: "Full-service package with AI-optimized scheduling and comprehensive support.",
    features: ["Latest model machines", "Senior certified operator", "Unlimited hectares", "AI-optimized scheduling", "Real-time GPS tracking", "Digital report & analytics", "Dedicated support"],
    icon: "Award",
  },
];