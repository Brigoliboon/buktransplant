"use client";

import { stats } from "@/constants/stats";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function StatsSection() {
  return (
    <section className="py-20 bg-light-bg">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}