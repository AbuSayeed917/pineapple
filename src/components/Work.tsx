"use client";

import { motion } from "framer-motion";

const clients = ["NVIDIA", "VERCEL", "LINEAR", "ARC", "RAYCAST", "OPENAI"];

export function Work() {
    return (
        <section id="work" className="py-20 border-y border-white/5 bg-onyx-surface/20">
            {/* Marquee */}
            <div className="overflow-hidden flex relative z-10 mb-32">
                <motion.div
                    className="flex whitespace-nowrap gap-32"
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {[...clients, ...clients, ...clients].map((client, i) => (
                        <span key={i} className="text-4xl md:text-6xl font-display font-bold text-white/10 hover:text-white/30 transition-colors cursor-default">
                            {client}
                        </span>
                    ))}
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-card aspect-[4/3] rounded-xl flex items-center justify-center group overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-onyx-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="text-xl font-mono text-onyx-dim group-hover:text-white transition-colors relative z-10">PROJECT AERO</span>
                    </div>
                    <div className="glass-card aspect-[4/3] rounded-xl flex items-center justify-center group overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-onyx-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="text-xl font-mono text-onyx-dim group-hover:text-white transition-colors relative z-10">PROJECT NEBULA</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
