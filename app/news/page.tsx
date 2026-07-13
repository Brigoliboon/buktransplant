"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import { newsArticles } from "@/constants/news";

export default function NewsPage() {
  return (
    <>
      <PageHeader title="News & Updates" subtitle="Latest updates from BuktransPLANt." />

      <section className="py-20 bg-light-bg">
        <div className="px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {newsArticles.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${article.image}')`, backgroundColor: "#EDF6EC" }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-accent font-semibold mb-2">
                    <span className="bg-accent/10 px-2 py-1">{article.category}</span>
                    <span className="flex items-center gap-1 text-gray">
                      <Calendar className="w-3 h-3" strokeWidth={1.5} />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-dark-text mb-2">{article.title}</h3>
                  <p className="text-gray text-sm leading-relaxed">{article.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}