"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 800);
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-luxury-950 text-white text-base font-semibold rounded-2xl overflow-hidden shadow-lg border border-luxury-800/60"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Animated shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: "-200%" }}
        animate={{ x: isHovered ? "200%" : "-200%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      <span className="relative z-10">{children}</span>

      {/* Animated rocket icon with launch effect */}
      <div className="relative w-6 h-6 z-10">
        <motion.svg
          className="w-6 h-6 absolute"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            y: isClicked ? -30 : isHovered ? -2 : 0,
            x: isClicked ? 10 : 0,
            rotate: isClicked ? 45 : 0,
            opacity: isClicked ? 0 : 1,
          }}
          transition={{ duration: isClicked ? 0.4 : 0.2 }}
        >
          {/* Rocket */}
          <motion.path
            d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isHovered ? 1 : 0.6 }}
            transition={{ duration: 0.4 }}
          />
          <motion.path
            d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.5 }}
          />
          <motion.path
            d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isHovered ? 1 : 0.4 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
          <motion.path
            d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isHovered ? 1 : 0.4 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          />
        </motion.svg>

        {/* Flame trails on click */}
        {isClicked && (
          <>
            <motion.div
              className="absolute bottom-0 left-1/2 w-1 bg-gradient-to-t from-amber-500 via-orange-400 to-transparent rounded-full"
              initial={{ height: 0, opacity: 1 }}
              animate={{ height: 20, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute bottom-0 left-1/3 w-0.5 bg-gradient-to-t from-amber-400 via-yellow-300 to-transparent rounded-full"
              initial={{ height: 0, opacity: 1 }}
              animate={{ height: 15, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            />
          </>
        )}

        {/* Checkmark appears after launch */}
        {isClicked && (
          <motion.svg
            className="w-6 h-6 absolute text-green-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          >
            <motion.path
              d="M5 12l5 5L20 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            />
          </motion.svg>
        )}
      </div>

      {/* Particle burst on click */}
      {isClicked && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-amber-400"
              style={{ left: "50%", top: "50%" }}
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{
                x: Math.cos((i * 60 * Math.PI) / 180) * 40,
                y: Math.sin((i * 60 * Math.PI) / 180) * 40,
                opacity: 0,
                scale: 0,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          ))}
        </>
      )}

      {/* Bottom glow line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 800);
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-luxury-300/60 text-luxury-950 text-base font-semibold rounded-2xl shadow-sm overflow-hidden"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-amber-50 via-amber-100/50 to-amber-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <span className="relative z-10">{children}</span>

      {/* Animated play/arrow icon */}
      <div className="relative w-6 h-6 z-10">
        <motion.svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Morphing circle to play button */}
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: isHovered ? 1 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          {/* Play triangle that draws and pulses */}
          <motion.path
            d="M10 8l6 4-6 4V8z"
            fill={isHovered ? "currentColor" : "none"}
            initial={{ pathLength: 0, scale: 1 }}
            animate={{
              pathLength: 1,
              scale: isClicked ? [1, 1.2, 1] : 1,
              x: isHovered ? 1 : 0,
            }}
            transition={{
              pathLength: { duration: 0.4 },
              scale: { duration: 0.3 },
              x: { duration: 0.2 },
            }}
          />
        </motion.svg>

        {/* Ripple rings on click */}
        {isClicked && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-amber-500"
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-amber-400"
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
          </>
        )}
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          border: "2px solid transparent",
          backgroundImage: isHovered
            ? "linear-gradient(white, white), linear-gradient(90deg, #d4af37, #f0d060, #d4af37)"
            : "none",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating dots on hover */}
      {isHovered && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-amber-400"
              style={{ left: `${30 + i * 20}%`, bottom: "20%" }}
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: [-5, -15, -5],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </>
      )}
    </motion.a>
  );
}
