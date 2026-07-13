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
    price: "₱5,000/ha",
    shortDesc: "The Kubota KW4 is designed for small to medium-sized rice farms requiring dependable mechanized transplanting with excellent maneuverability.",
    description: "Its compact design allows efficient operation even in smaller paddies while maintaining consistent planting quality. The KW4 is an excellent choice for farmers seeking an economical yet highly capable transplanting solution. Operating efficiency ranges from 0.14 to 0.26 ha/h with four planting rows at 30 cm spacing.",
    specs: [
      { label: "Overall Width (operation)", detail: "1630 mm" },
      { label: "Planting Rows", detail: "4 rows" },
      { label: "Row Spacing", detail: "30 cm" },
      { label: "Hill Spacing", detail: "12–21 cm (adjustable)" },
      { label: "Planting Depth", detail: "7–37 mm (5 settings)" },
      { label: "Planting Speed", detail: "0.47–0.85 m/s" },
      { label: "Road Travel Speed", detail: "0.90–1.64 m/s" },
      { label: "Operating Efficiency", detail: "0.14–0.26 ha/h" },
      { label: "Spare Seedling Capacity", detail: "3 boxes" },
    ],
    packages: [
      {
        name: "Package A",
        price: 5000,
        unit: "per hectare",
        description: "Transplanting only.",
        features: ["KW4 (4-row) machine", "Operator included", "Transplanting service"],
      },
      {
        name: "Package B",
        price: 9000,
        unit: "per hectare",
        description: "Complete establishment including Dapog.",
        features: ["KW4 (4-row) machine", "Operator included", "Complete establishment", "Dapog included"],
        highlighted: true,
      },
    ],
    brochureUrl: "https://kubota.com.ph/wp-content/uploads/2024/09/KW4-KW6-Transplanter.pdf",
    image: "/kw4.webp",
    modelPath: "/models/model/kw4.glb",
  },
  {
    id: "kw6",
    name: "KW6 Rice Transplanter",
    model: "KW-6000",
    price: "₱5,500/ha",
    shortDesc: "The Kubota KW6 is engineered for farmers who require higher productivity during transplanting operations.",
    description: "The Kubota KW6 is engineered for farmers who require higher productivity during transplanting operations. With six planting rows and greater field capacity, it allows larger farms to complete planting faster while maintaining exceptional planting precision. This model is recommended for customers who wish to maximize operational efficiency during peak planting seasons. Operating efficiency ranges from 0.14 to 0.26 ha/h with six planting rows at 30 cm spacing.",
    specs: [
      { label: "Overall Width (operation)", detail: "1930 mm (2280 mm max)" },
      { label: "Planting Rows", detail: "6 rows" },
      { label: "Row Spacing", detail: "30 cm" },
      { label: "Hill Spacing", detail: "12–21 cm (adjustable)" },
      { label: "Planting Depth", detail: "7–37 mm (5 settings)" },
      { label: "Planting Speed", detail: "0.47–0.85 m/s" },
      { label: "Road Travel Speed", detail: "0.90–1.64 m/s" },
      { label: "Operating Efficiency", detail: "0.14–0.26 ha/h" },
      { label: "Spare Seedling Capacity", detail: "3 boxes" },
    ],
    packages: [
      {
        name: "Package A",
        price: 5500,
        unit: "per hectare",
        description: "Transplanting only.",
        features: ["KW6 (6-row) machine", "Operator included", "Transplanting service"],
      },
      {
        name: "Package B",
        price: 9500,
        unit: "per hectare",
        description: "Complete establishment including Dapog.",
        features: ["KW6 (6-row) machine", "Operator included", "Complete establishment", "Dapog included"],
        highlighted: true,
      },
    ],
    brochureUrl: "https://kubota.com.ph/wp-content/uploads/2024/09/KW4-KW6-Transplanter.pdf",
    image: "/kw6.webp",
    modelPath: "/models/model/kw4.glb",
  },
];
