"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NeuralGrid } from "./visuals/NeuralGrid";
import { PrimaryButton } from "./AnimatedButtons";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-onyx-primary animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-mono tracking-widest text-onyx-dim">SYSTEM ONLINE</span>
          </div>
        </motion.div>

        <div className="relative mb-8 md:mb-12">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-display font-bold tracking-tighter leading-none"
          >
            ONYX
            <span className="block text-transparent text-stroke-1 md:text-stroke-2 text-stroke-white/30">PROTOCOL</span>
          </motion.h1>

          {/* Floating Elements - Hidden on very small screens, adjusted on md */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block absolute -right-12 top-0 w-24 h-24 md:w-32 md:h-32 border border-onyx-primary/30 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <div className="text-[10px] font-mono text-center text-onyx-primary">
              EST.<br />2024
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl text-sm md:text-lg text-onyx-dim mb-8 md:mb-12 leading-relaxed"
        >
          Building high-performance digital infrastructure for the next generation of web interaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 w-full md:w-auto"
        >
          <Link to="/work" className="w-full md:w-auto">
            <PrimaryButton text="VIEW PROJECTS" onClick={() => { }} />
          </Link>
          <Link to="/contact" className="w-full md:w-auto">
            <button className="w-full md:w-auto px-8 py-3 rounded bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs font-mono tracking-widest">
              CONTACT US
            </button>
          </Link>
        </motion.div>
      </div>
      <NeuralGrid />
    </section>
  );
}
