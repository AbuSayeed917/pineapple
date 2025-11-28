"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { HeroIllustration } from "./HeroIllustration";
import { AnimatedStats } from "./AnimatedStats";
import { PrimaryButton, SecondaryButton } from "./AnimatedButtons";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Simple animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_45%,rgba(212,175,55,0.06),transparent_70%)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="max-w-[1800px] mx-auto w-full px-8 lg:px-20 relative z-10">
        {/* Centered Asymmetric Layout */}
        <motion.div
          className="flex flex-col items-center text-center py-20 lg:py-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-[1400px]">
            {/* Left Column - Text Content */}
            <motion.div className="text-left" variants={itemVariants}>
              {/* Headline - Reduced Size */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-luxury-950 leading-[0.95] tracking-[-0.04em] mb-6 font-serif">
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Digital
                </motion.span>
                <br />
                <motion.span
                  className="relative inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
                >
                  <span className="bg-gradient-to-br from-premium-gold via-accent-500 to-premium-gold-dark bg-clip-text text-transparent">
                    Excellence
                  </span>
                  {/* Abstract underline */}
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full h-3 opacity-40"
                    viewBox="0 0 600 24"
                    fill="none"
                    preserveAspectRatio="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
                  >
                    <motion.path
                      d="M3 12 Q150 3, 300 10 T597 14"
                      stroke="url(#gold-gradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(212,175,55,0)" />
                        <stop offset="20%" stopColor="rgba(212,175,55,0.6)" />
                        <stop offset="50%" stopColor="rgba(212,175,55,1)" />
                        <stop offset="80%" stopColor="rgba(212,175,55,0.6)" />
                        <stop offset="100%" stopColor="rgba(212,175,55,0)" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </motion.span>
                <br />
                <motion.span
                  className="text-luxury-400"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  Delivered
                </motion.span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg lg:text-xl text-luxury-600 leading-[1.7] font-light mb-8">
                We engineer <span className="text-luxury-950 font-semibold">production-grade software</span> for visionary founders. From zero to launch in <span className="text-premium-gold-dark font-semibold">6-8 weeks.</span>
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryButton href="#contact">Start Your Project</PrimaryButton>
                <SecondaryButton href="#contact">Learn More</SecondaryButton>
              </div>
            </motion.div>

            {/* Right Column - Hero Illustration */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:block"
            >
              <HeroIllustration />
            </motion.div>
          </div>

          {/* Animated Stats - Full Width */}
          <motion.div
            className="w-full max-w-[1400px] mt-16"
            variants={itemVariants}
          >
            <AnimatedStats />
          </motion.div>

          {/* Bottom Commitment Section */}
          <motion.div
            className="mt-32 lg:mt-40 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <div className="flex flex-col items-center gap-12">
              <div className="relative">
                <motion.div
                  className="w-12 h-px bg-gradient-to-r from-transparent via-premium-gold/60 to-transparent mb-6"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 2.6 }}
                />
                <p className="text-[9px] font-bold text-luxury-400 uppercase tracking-[0.2em]">Our Commitment</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-16 lg:gap-x-24 gap-y-10">
                {["Quality", "Speed", "Innovation", "Excellence", "Dedication"].map((value, i) => (
                  <motion.div
                    key={value}
                    className="text-2xl font-black text-luxury-900 tracking-tight opacity-20 cursor-default font-serif"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: 1 }}
                    transition={{ delay: 2.7 + i * 0.1 }}
                    whileHover={{ opacity: 1, color: "rgb(168, 129, 50)", scale: 1.1 }}
                  >
                    {value}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
