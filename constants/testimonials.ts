export interface Testimonial {
  name: string
  location: string
  avatar: string
  text: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Juan Dela Cruz",
    location: "Malaybalay City",
    avatar: "/testimonial-1.jpg",
    text: "BuktransPLANt has completely changed the way I manage my rice farm. The online booking is so convenient and the operators are always on time.",
  },
  {
    name: "Maria Santos",
    location: "Valencia City",
    avatar: "/testimonial-2.jpg",
    text: "The AI scheduling feature is amazing. I no longer have to wait for days to get my fields planted. Highly recommended!",
  },
  {
    name: "Pedro Reyes",
    location: "Quezon, Bukidnon",
    avatar: "/testimonial-3.jpg",
    text: "Professional service from booking to completion. The digital report at the end is a nice touch for record keeping.",
  },
  {
    name: "Ana Mendoza",
    location: "Maramag",
    avatar: "/testimonial-4.jpg",
    text: "Their machines are well-maintained and the operators really know what they're doing. My rice yield has improved significantly.",
  },
];