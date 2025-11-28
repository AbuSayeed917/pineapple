"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroVisuals() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPct = (clientX / innerWidth - 0.5) * 2;
      const yPct = (clientY / innerHeight - 0.5) * 2;

      mouseX.set(xPct * 50);
      mouseY.set(yPct * 50);

      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating 3D Cards */}
      <motion.div
        className="absolute top-[15%] right-[10%] w-64 h-40 bg-gradient-to-br from-white to-luxury-50 rounded-2xl shadow-2xl border border-luxury-200/40"
        style={{
          x: useTransform(x, [-50, 50], [-20, 20]),
          y: useTransform(y, [-50, 50], [-20, 20]),
          rotateY: useTransform(x, [-50, 50], [-15, 15]),
          rotateX: useTransform(y, [-50, 50], [15, -15]),
        }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-premium-gold/10 to-transparent rounded-2xl" />
        <div className="absolute top-4 left-4 right-4">
          <div className="w-full h-2 bg-luxury-200 rounded-full mb-3" />
          <div className="w-3/4 h-2 bg-luxury-200 rounded-full mb-3" />
          <div className="w-5/6 h-2 bg-luxury-200 rounded-full" />
        </div>
        <div className="absolute bottom-4 right-4 w-16 h-16 bg-premium-gold/20 rounded-xl" />
      </motion.div>

      <motion.div
        className="absolute top-[45%] left-[8%] w-48 h-48 bg-gradient-to-br from-white via-luxury-50 to-accent-50/30 rounded-2xl shadow-2xl border border-luxury-200/40"
        style={{
          x: useTransform(x, [-50, 50], [15, -15]),
          y: useTransform(y, [-50, 50], [15, -15]),
          rotateY: useTransform(x, [-50, 50], [10, -10]),
          rotateX: useTransform(y, [-50, 50], [-10, 10]),
        }}
        animate={{
          y: [0, 25, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-accent-500/10 to-transparent rounded-2xl" />
        <div className="absolute top-4 left-4">
          <div className="w-10 h-10 bg-premium-gold/30 rounded-lg mb-3" />
          <div className="w-24 h-1.5 bg-luxury-200 rounded-full mb-2" />
          <div className="w-16 h-1.5 bg-luxury-200 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-luxury-100/50 to-transparent rounded-b-2xl" />
      </motion.div>

      {/* Floating Abstract Shapes */}
      <motion.div
        className="absolute top-[25%] left-[15%] w-32 h-32"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
          <motion.path
            d="M50 10 L90 35 L90 75 L50 100 L10 75 L10 35 Z"
            fill="none"
            stroke="url(#gold-gradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#E5AD73" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] right-[15%] w-24 h-24"
        animate={{
          rotate: -360,
          scale: [1, 1.15, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-15">
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(212,175,55,0.6)"
            strokeWidth="1.5"
            strokeDasharray="10 5"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="rgba(229,173,115,0.6)"
            strokeWidth="1.5"
            strokeDasharray="5 3"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </motion.div>

      {/* Animated Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-premium-gold rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Glowing Orbs with Depth */}
      <motion.div
        className="absolute top-[30%] right-[25%] w-40 h-40 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.25) 0%, rgba(212,175,55,0.05) 50%, transparent 100%)",
          filter: "blur(30px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-[35%] left-[20%] w-32 h-32 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(229,173,115,0.2) 0%, rgba(229,173,115,0.05) 50%, transparent 100%)",
          filter: "blur(25px)",
        }}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Decorative Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.line
          x1="0%"
          y1="30%"
          x2="100%"
          y2="30%"
          stroke="rgba(212,175,55,0.3)"
          strokeWidth="1"
          strokeDasharray="5 10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.line
          x1="0%"
          y1="70%"
          x2="100%"
          y2="70%"
          stroke="rgba(229,173,115,0.25)"
          strokeWidth="1"
          strokeDasharray="3 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </svg>
    </div>
  );
}
