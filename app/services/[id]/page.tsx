"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { type LucideIcon, Tractor, Settings, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import { servicePackages } from "@/constants/services";

const iconMap: Record<string, LucideIcon> = {
  Tractor, Settings,
};

const bgAccents = ["bg-primary", "bg-accent"];

export default function PackageDetailPage() {
  const { id } = useParams();
  const pkg = servicePackages.find((p) => p.id === id);

  if (!pkg) {
    return (
      <div className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-2xl font-bold text-dark-text">Package not found</h1>
        <Link href="/services" className="text-primary mt-4 inline-block">&larr; Back to Services</Link>
      </div>
    );
  }

  const idx = servicePackages.indexOf(pkg);
  const Icon = iconMap[pkg.icon];

  return (
    <>
      <PageHeader title={pkg.title} subtitle="Package details and features" />

      <section className="py-20 bg-light-bg">
        <div className="px-6">
          <Link href="/services" className="inline-flex items-center gap-2 text-gray hover:text-primary mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`w-16 h-16 ${bgAccents[idx]} flex items-center justify-center mb-6`}>
                {Icon && <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />}
              </div>
              <h2 className="text-3xl font-bold text-dark-text mb-4">{pkg.title}</h2>
              <p className="text-gray leading-relaxed mb-8">{pkg.description}</p>
              <Link
                href="/booking"
                className="inline-block bg-primary text-white font-semibold px-8 py-3 hover:bg-primary/90 transition-colors"
              >
                Book This Package
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8"
            >
              <h3 className="text-xl font-bold text-dark-text mb-6">What&apos;s Included</h3>
              <ul className="space-y-4">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-dark-text">
                    <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" strokeWidth={2} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}