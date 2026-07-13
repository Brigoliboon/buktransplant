"use client";

import { motion } from "framer-motion";
import { Check, Tractor } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import { pricingPlans } from "@/constants/pricing";
import { featuredMachines } from "@/constants/fleet";

export default function PricingPage() {
  const machine = featuredMachines[0];

  return (
    <>
      <PageHeader title="Pricing" subtitle="Transparent pricing for every farm size." />

      <section className="py-20 bg-light-bg">
        <div className="px-6">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`bg-white ${plan.highlighted ? "ring-2 ring-primary -mt-4" : ""}`}
              >
                {plan.highlighted && (
                  <div className="bg-primary text-white text-center text-sm font-semibold py-2">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-dark-text mb-2">{plan.name}</h3>
                  <p className="text-gray text-sm mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">₱{plan.price.toLocaleString()}</span>
                    <span className="text-gray text-sm ml-1">{plan.unit}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-dark-text">
                        <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={2} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/booking"
                    className={`block w-full text-center py-3 font-semibold transition-colors ${
                      plan.highlighted
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {machine.packages && machine.packages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-24"
            >
              <div className="flex items-center gap-3 mb-10">
                <Tractor className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-dark-text">{machine.name} Packages</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                {machine.packages.map((pkg, i) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className={`bg-white ${pkg.highlighted ? "ring-2 ring-accent -mt-4" : ""}`}
                  >
                    {pkg.highlighted && (
                      <div className="bg-accent text-white text-center text-sm font-semibold py-2">
                        Recommended
                      </div>
                    )}
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-dark-text mb-2">{pkg.name}</h3>
                      <p className="text-gray text-sm mb-4">{pkg.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-primary">₱{pkg.price.toLocaleString()}</span>
                        <span className="text-gray text-sm ml-1">{pkg.unit}</span>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-sm text-dark-text">
                            <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={2} />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/booking"
                        className={`block w-full text-center py-3 font-semibold transition-colors ${
                          pkg.highlighted
                            ? "bg-accent text-white hover:bg-accent/90"
                            : "border-2 border-accent text-accent hover:bg-accent hover:text-white"
                        }`}
                      >
                        Get Started
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
