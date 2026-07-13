export interface Spec {
  label: string
  detail: string
}

export interface MachinePackage {
  name: string
  price: number
  unit: string
  description: string
  features: string[]
  highlighted?: boolean
}

export interface Machine {
  id: string
  name: string
  model: string
  price: string
  shortDesc: string
  description: string
  specs: Spec[]
  packages: MachinePackage[]
  brochureUrl?: string
  image: string
  modelPath: string
}

export const featuredMachines: Machine[] = [
  {
    id: "kw4",
    name: "KW4 Rice Transplanter",
    model: "KW-4000",
    price: "₱4,500/day",
    shortDesc: "The Kubota KW4 is designed for small to medium-sized rice farms requiring dependable mechanized transplanting with excellent maneuverability.",
    description: "Its compact design allows efficient operation even in smaller paddies while maintaining consistent planting quality. The KW4 is an excellent choice for farmers seeking an economical yet highly capable transplanting solution.",
    specs: [
      { label: "Compact Design", detail: "Space-efficient build perfect for small to medium paddies." },
      { label: "Easy Maneuverability", detail: "Lightweight and agile for tight turns and narrow paths." },
      { label: "Excellent Fuel Efficiency", detail: "Optimized engine delivers maximum output per liter." },
      { label: "Accurate Planting", detail: "Precision planting mechanism ensures consistent depth and spacing." },
      { label: "Suitable for Small & Medium Farms", detail: "Designed specifically for 1-5 hectare operations." },
      { label: "Reliable Kubota Diesel Engine", detail: "Proven Kubota engine built for long hours in the field." },
    ],
    packages: [
      {
        name: "Basic",
        price: 4500,
        unit: "per day",
        description: "Essential transplanting service for small farms.",
        features: ["KW4 machine", "Operator included", "Basic scheduling", "Daily report"],
      },
      {
        name: "Standard",
        price: 6500,
        unit: "per day",
        description: "Enhanced service with priority and digital tracking.",
        features: ["KW4 machine", "Certified operator", "Priority scheduling", "GPS field mapping", "Digital report"],
        highlighted: true,
      },
      {
        name: "Premium",
        price: 8500,
        unit: "per day",
        description: "Full-service package with analytics and support.",
        features: ["KW4 machine", "Senior operator", "AI-optimized scheduling", "Real-time GPS tracking", "Digital analytics", "Priority support"],
      },
    ],
    brochureUrl: "https://kubota.com.ph/wp-content/uploads/2024/09/KW4-KW6-Transplanter.pdf",
    image: "/fleet/yanmar.png",
    modelPath: "/models/model/kw4.glb",
  },
  {
    id: "kw6",
    name: "KW6 Rice Transplanter",
    model: "KW-6000",
    price: "₱5,800/day",
    shortDesc: "The Kubota KW6 is engineered for farmers who require higher productivity during transplanting operations.",
    description: "The Kubota KW6 is engineered for farmers who require higher productivity during transplanting operations. With six planting rows and greater field capacity, it allows larger farms to complete planting faster while maintaining exceptional planting precision. This model is recommended for customers who wish to maximize operational efficiency during peak planting seasons.",
    specs: [
      { label: "Six-Row Planting", detail: "Covers more ground with six-row simultaneous transplanting." },
      { label: "Higher Daily Field Capacity", detail: "Transplants more hectares per day than standard models." },
      { label: "Faster Completion Time", detail: "Completes large fields in fewer passes to save critical days." },
      { label: "Precision Planting", detail: "Consistent depth and spacing across all six rows." },
      { label: "Stable Field Performance", detail: "Balanced design ensures steady operation even in wet paddies." },
      { label: "High Productivity", detail: "Maximizes output during peak planting season windows." },
    ],
    packages: [
      {
        name: "Basic",
        price: 5800,
        unit: "per day",
        description: "High-efficiency transplanting for medium farms.",
        features: ["KW6 machine", "Operator included", "Basic scheduling", "Daily report"],
      },
      {
        name: "Standard",
        price: 7800,
        unit: "per day",
        description: "Enhanced service with priority and digital tracking.",
        features: ["KW6 machine", "Certified operator", "Priority scheduling", "GPS field mapping", "Digital report"],
        highlighted: true,
      },
      {
        name: "Premium",
        price: 9800,
        unit: "per day",
        description: "Full-service package with analytics and support.",
        features: ["KW6 machine", "Senior operator", "AI-optimized scheduling", "Real-time GPS tracking", "Digital analytics", "Priority support"],
      },
    ],
    brochureUrl: "https://kubota.com.ph/wp-content/uploads/2024/09/KW4-KW6-Transplanter.pdf",
    image: "/fleet/yanmar.png",
    modelPath: "/models/model/kw4.glb",
  },
];
