"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "100%", label: "Commitment" },
  { value: "24/7", label: "Dedication" },
  { value: "A+", label: "Quality" },
  { value: "6-8 weeks", label: "Timeline" },
];

export function AnimatedStats() {
  return (
    <div className="relative py-8">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />

      {/* Stats row */}
      <div className="flex items-center justify-between w-full">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center flex-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-tight">
              {stat.value}
            </span>
            <span className="text-xs md:text-sm text-black/60 font-medium tracking-wide mt-1">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
    </div>
  );
}
