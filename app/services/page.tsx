"use client";

import { motion } from "framer-motion";
import { type LucideIcon, Tractor, Settings, Check } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import { servicePackages } from "@/constants/services";

const iconMap: Record<string, LucideIcon> = {
  Tractor, Settings,
};

const bgAccents = ["bg-primary", "bg-accent"];

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our Services" subtitle="Choose the right transplanting package for your farm." />

      <section className="py-20 bg-light-bg">
        <div className="px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {servicePackages.map((pkg, i) => {
              const Icon = iconMap[pkg.icon];
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="bg-white"
                >
                  <div className={`${bgAccents[i]} p-6 flex items-center gap-4`}>
                    {Icon && <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />}
                    <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray text-sm mb-6">{pkg.description}</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-dark-text">
                          <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={2} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${pkg.id}`}
                      className={`inline-block w-full text-center py-3 font-semibold text-white ${bgAccents[i]} hover:opacity-90 transition-opacity`}
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}