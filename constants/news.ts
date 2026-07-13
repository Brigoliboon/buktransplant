export interface NewsArticle {
  title: string
  date: string
  excerpt: string
  image: string
  category: string
}

export const newsArticles: NewsArticle[] = [
  {
    title: "BuktransPLANt Expands Fleet with New Yanmar AG600 Units",
    date: "June 15, 2026",
    excerpt: "We have acquired 10 new Yanmar AG600 rice transplanters to better serve farmers across Bukidnon.",
    image: "/news-1.jpg",
    category: "Company",
  },
  {
    title: "AI-Powered Scheduling Now Available",
    date: "May 28, 2026",
    excerpt: "Our new AI scheduling system optimizes machine allocation and reduces wait times for farmers.",
    image: "/news-2.jpg",
    category: "Technology",
  },
  {
    title: "Branch Expansion: New Office in Quezon, Bukidnon",
    date: "April 10, 2026",
    excerpt: "We are excited to announce our newest branch in Quezon to serve more farmers in the area.",
    image: "/news-3.jpg",
    category: "Company",
  },
  {
    title: "Partnership with Local Government for Farmer Training",
    date: "March 5, 2026",
    excerpt: "BuktransPLANt partners with LGU to provide free training on modern transplanting techniques.",
    image: "/news-4.jpg",
    category: "Community",
  },
];