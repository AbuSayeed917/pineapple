"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

// Number counter hook
function useCountUp(end: number, duration: number = 2, delay: number = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [end, duration, delay]);

  return count;
}

export function PremiumMockup() {
  const [hoveredChart, setHoveredChart] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  // Animated counters
  const projects = useCountUp(100, 2.5, 1.2);
  const quality = useCountUp(100, 2.5, 1.3);
  const speed = useCountUp(100, 2.5, 1.4);
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-16">
      {/* Browser Window Mockup */}
      <motion.div
        className="relative bg-gradient-to-br from-luxury-50 to-white rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.12)] border border-luxury-200/60 overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-luxury-100/80 to-luxury-50/80 border-b border-luxury-200/60">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <div className="w-3 h-3 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 mx-4">
            <div className="h-6 bg-white/60 rounded-lg px-3 flex items-center">
              <div className="w-3 h-3 text-luxury-400">🔒</div>
              <motion.span
                className="ml-2 text-xs text-luxury-500 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                pineappleslice.premium
              </motion.span>
            </div>
          </div>
        </div>

        {/* Content Area with Animated Elements */}
        <div className="relative p-8 bg-white min-h-[400px]">
          {/* Dashboard Grid */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Stat Card 1 */}
            <motion.div
              className="bg-gradient-to-br from-premium-gold/10 to-accent-500/5 rounded-xl p-5 border border-premium-gold/20 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onHoverStart={() => setHoveredStat(0)}
              onHoverEnd={() => setHoveredStat(null)}
            >
              <div className="text-xs font-bold text-luxury-500 uppercase tracking-wider mb-2">
                Project Success
              </div>
              <motion.div
                className="text-3xl font-black text-luxury-950"
                animate={{
                  scale: hoveredStat === 0 ? 1.1 : 1,
                  color: hoveredStat === 0 ? "#D4AF37" : "#1a1a1a"
                }}
              >
                {projects}%
              </motion.div>
              <motion.div
                className="mt-2 flex items-center gap-1 text-xs text-luxury-600 font-semibold"
                animate={{ x: hoveredStat === 0 ? 5 : 0 }}
              >
                <motion.span
                  animate={{ rotate: hoveredStat === 0 ? 45 : 0 }}
                >✓</motion.span>
                <span>Excellence</span>
              </motion.div>
              {/* Interactive Mini chart */}
              <svg className="w-full h-12 mt-3" viewBox="0 0 100 40">
                {/* Area fill */}
                <motion.path
                  d="M 0,35 L 20,30 L 40,20 L 60,25 L 80,15 L 100,10 L 100,40 L 0,40 Z"
                  fill="url(#mini-gradient-1)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredStat === 0 ? 0.4 : 0.2 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.polyline
                  points="0,35 20,30 40,20 60,25 80,15 100,10"
                  fill="none"
                  stroke="rgba(212,175,55,0.8)"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    strokeWidth: hoveredStat === 0 ? 3 : 2.5
                  }}
                  transition={{ pathLength: { delay: 1.4, duration: 1.5, ease: "easeInOut" } }}
                />
                {/* Interactive dots */}
                {[
                  { x: 0, y: 35 },
                  { x: 20, y: 30 },
                  { x: 40, y: 20 },
                  { x: 60, y: 25 },
                  { x: 80, y: 15 },
                  { x: 100, y: 10 }
                ].map((point, i) => (
                  <motion.circle
                    key={i}
                    cx={point.x}
                    cy={point.y}
                    r="2"
                    fill="#D4AF37"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: hoveredStat === 0 ? 1.5 : 1,
                      r: hoveredStat === 0 ? 3 : 2
                    }}
                    transition={{ delay: 1.4 + i * 0.1 }}
                  />
                ))}
                <defs>
                  <linearGradient id="mini-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(212,175,55,0.6)" />
                    <stop offset="100%" stopColor="rgba(212,175,55,0)" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div
              className="bg-gradient-to-br from-accent-500/10 to-luxury-200/5 rounded-xl p-5 border border-accent-500/20 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onHoverStart={() => setHoveredStat(1)}
              onHoverEnd={() => setHoveredStat(null)}
            >
              <div className="text-xs font-bold text-luxury-500 uppercase tracking-wider mb-2">
                Code Quality
              </div>
              <motion.div
                className="text-3xl font-black text-luxury-950"
                animate={{
                  scale: hoveredStat === 1 ? 1.1 : 1,
                  color: hoveredStat === 1 ? "#E5AD73" : "#1a1a1a"
                }}
              >
                {quality}%
              </motion.div>
              <motion.div
                className="mt-2 flex items-center gap-1 text-xs text-luxury-600 font-semibold"
                animate={{ x: hoveredStat === 1 ? 5 : 0 }}
              >
                <motion.span
                  animate={{ rotate: hoveredStat === 1 ? 45 : 0 }}
                >⚡</motion.span>
                <span>Premium</span>
              </motion.div>
              {/* Animated Progress bars */}
              <div className="mt-3 space-y-2">
                {[0.8, 0.6, 0.9].map((width, i) => (
                  <motion.div
                    key={i}
                    className="relative h-1.5 bg-luxury-100 rounded-full overflow-hidden"
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent-500 to-premium-gold relative"
                      initial={{ width: 0 }}
                      animate={{
                        width: hoveredStat === 1 ? `${width * 100 + 5}%` : `${width * 100}%`
                      }}
                      transition={{ delay: 1.5 + i * 0.2, duration: 1 }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        animate={{
                          x: hoveredStat === 1 ? ["-100%", "200%"] : "-100%"
                        }}
                        transition={{
                          duration: 1,
                          repeat: hoveredStat === 1 ? Infinity : 0,
                          ease: "linear"
                        }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stat Card 3 */}
            <motion.div
              className="bg-gradient-to-br from-luxury-200/10 to-luxury-100/5 rounded-xl p-5 border border-luxury-300/30 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onHoverStart={() => setHoveredStat(2)}
              onHoverEnd={() => setHoveredStat(null)}
            >
              <div className="text-xs font-bold text-luxury-500 uppercase tracking-wider mb-2">
                Delivery Speed
              </div>
              <motion.div
                className="text-3xl font-black text-luxury-950"
                animate={{
                  scale: hoveredStat === 2 ? 1.1 : 1,
                  color: hoveredStat === 2 ? "#D4AF37" : "#1a1a1a"
                }}
              >
                {speed}%
              </motion.div>
              <motion.div
                className="mt-2 flex items-center gap-1 text-xs text-luxury-600 font-semibold"
                animate={{ x: hoveredStat === 2 ? 5 : 0 }}
              >
                <motion.span
                  animate={{ rotate: hoveredStat === 2 ? 45 : 0 }}
                >🚀</motion.span>
                <span>Optimized</span>
              </motion.div>
              {/* Interactive Circular progress */}
              <div className="mt-3 flex justify-center relative">
                <svg className="w-16 h-16 transform -rotate-90">
                  {/* Background circle */}
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="rgba(168,162,158,0.2)"
                    strokeWidth="4"
                  />
                  {/* Progress circle */}
                  <motion.circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="url(#circular-gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{
                      pathLength: hoveredStat === 2 ? 0.85 : 0.75,
                      strokeWidth: hoveredStat === 2 ? 5 : 4
                    }}
                    transition={{ delay: 1.6, duration: 1.5, ease: "easeOut" }}
                    strokeDasharray="175.93"
                    strokeDashoffset="0"
                  />
                  <defs>
                    <linearGradient id="circular-gradient">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#E5AD73" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Center percentage text */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center text-xs font-bold text-luxury-700"
                  animate={{
                    scale: hoveredStat === 2 ? 1.2 : 1
                  }}
                >
                  75%
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Chart Area */}
          <motion.div
            className="bg-gradient-to-br from-luxury-50/50 to-white rounded-xl p-6 border border-luxury-200/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-bold text-luxury-900 uppercase tracking-wide">
                Development Workflow
              </h3>
              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-premium-gold"
                    animate={{
                      scale: [1, 1.3, 1],
                      boxShadow: ["0 0 0 0 rgba(212,175,55,0)", "0 0 0 4px rgba(212,175,55,0.3)", "0 0 0 0 rgba(212,175,55,0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-luxury-600">Progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-accent-500"
                    animate={{
                      scale: [1, 1.3, 1],
                      boxShadow: ["0 0 0 0 rgba(229,173,115,0)", "0 0 0 4px rgba(229,173,115,0.3)", "0 0 0 0 rgba(229,173,115,0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <span className="text-luxury-600">Quality</span>
                </div>
              </div>
            </div>

            {/* Interactive Animated Chart */}
            <div className="relative">
              <svg className="w-full h-48" viewBox="0 0 400 150" preserveAspectRatio="none">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={i * 37.5}
                    x2="400"
                    y2={i * 37.5}
                    stroke="rgba(168,162,158,0.1)"
                    strokeWidth="1"
                  />
                ))}

                {/* Area fill - Gold */}
                <motion.path
                  d="M 0 120 L 50 100 L 100 80 L 150 90 L 200 60 L 250 70 L 300 40 L 350 50 L 400 30 L 400 150 L 0 150 Z"
                  fill="url(#area-gold)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                />

                {/* Line - Gold */}
                <motion.path
                  d="M 0 120 L 50 100 L 100 80 L 150 90 L 200 60 L 250 70 L 300 40 L 350 50 L 400 30"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.5, duration: 2, ease: "easeInOut" }}
                />

                {/* Line - Accent */}
                <motion.path
                  d="M 0 130 L 50 125 L 100 110 L 150 115 L 200 100 L 250 105 L 300 85 L 350 90 L 400 75"
                  fill="none"
                  stroke="#E5AD73"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5 5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.7, duration: 2, ease: "easeInOut" }}
                />

                <defs>
                  <linearGradient id="area-gold" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(212,175,55,0.3)" />
                    <stop offset="100%" stopColor="rgba(212,175,55,0.02)" />
                  </linearGradient>
                </defs>

                {/* Interactive Data points with hover effects */}
                {[
                  { x: 50, y: 100, value: "Planning" },
                  { x: 150, y: 90, value: "Design" },
                  { x: 250, y: 70, value: "Develop" },
                  { x: 350, y: 50, value: "Deploy" },
                ].map((point, i) => (
                  <g key={i}>
                    {/* Ripple effect on hover */}
                    <motion.circle
                      cx={point.x}
                      cy={point.y}
                      r="8"
                      fill="rgba(212,175,55,0.2)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: hoveredChart === i ? 2 : 0,
                        opacity: hoveredChart === i ? 0 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Main dot */}
                    <motion.circle
                      cx={point.x}
                      cy={point.y}
                      r="5"
                      fill="#D4AF37"
                      stroke="white"
                      strokeWidth="2"
                      initial={{ scale: 0 }}
                      animate={{
                        scale: hoveredChart === i ? 1.5 : 1,
                        r: hoveredChart === i ? 7 : 5
                      }}
                      transition={{ delay: 1.5 + i * 0.2, type: "spring", stiffness: 300 }}
                      style={{ cursor: "pointer" }}
                      onMouseEnter={() => setHoveredChart(i)}
                      onMouseLeave={() => setHoveredChart(null)}
                    />
                    {/* Pulse animation */}
                    <motion.circle
                      cx={point.x}
                      cy={point.y}
                      r="5"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="2"
                      animate={{
                        r: hoveredChart === i ? [5, 15] : 5,
                        opacity: hoveredChart === i ? [1, 0] : 0
                      }}
                      transition={{
                        duration: 1,
                        repeat: hoveredChart === i ? Infinity : 0,
                        ease: "easeOut"
                      }}
                    />
                  </g>
                ))}
              </svg>

              {/* Tooltip */}
              {hoveredChart !== null && (
                <motion.div
                  className="absolute bg-luxury-950 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-2xl pointer-events-none"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    left: `${([50, 150, 250, 350][hoveredChart] / 400) * 100}%`,
                    top: `${([100, 90, 70, 50][hoveredChart] / 150) * 100 - 15}%`,
                    transform: "translate(-50%, -100%)"
                  }}
                >
                  <div className="text-premium-gold">
                    {["Planning", "Design", "Develop", "Deploy"][hoveredChart]}
                  </div>
                  <div className="text-[10px] text-luxury-400 mt-0.5">
                    {["Phase 1", "Phase 2", "Phase 3", "Phase 4"][hoveredChart]}
                  </div>
                  {/* Arrow */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-luxury-950 rotate-45" />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Floating Notification */}
          <motion.div
            className="absolute top-8 right-8 bg-white rounded-xl shadow-2xl border border-luxury-200/60 p-4 w-64"
            initial={{ opacity: 0, x: 50, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-premium-gold to-accent-500 flex items-center justify-center text-white text-lg">
                ✨
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-luxury-950 mb-1">
                  Ready to Build
                </div>
                <div className="text-xs text-luxury-600">
                  Your vision, our expertise
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-premium-gold/30 to-transparent" />
      </motion.div>

      {/* Shadow beneath mockup */}
      <motion.div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-16 bg-luxury-900/5 blur-3xl rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      />
    </div>
  );
}
