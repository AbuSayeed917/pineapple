"use client";

import { motion } from "framer-motion";

export function Agency() {
    return (
        <section id="agency" className="min-h-screen grid md:grid-cols-2">
            {/* Content Side */}
            <div className="p-12 md:p-24 flex flex-col justify-center border-r border-white/5">
                <span className="text-onyx-primary font-mono text-xs mb-8 tracking-widest">PHILOSOPHY</span>
                <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
                    ORDER IN <br /> <span className="text-white/20">CHAOS.</span>
                </h2>
                <p className="text-xl text-onyx-dim leading-relaxed max-w-lg">
                    We don't just write code. We architect digital infrastructure.
                    By simplifying the complex, we bring clarity to the noise of the modern web.
                    <br /><br />
                    Our methodology is rooted in precision engineering and brutalist aesthetics.
                </p>
            </div>

            {/* Visual Side - Animated Data Viz */}
            <div className="relative bg-onyx-surface/20 flex items-center justify-center overflow-hidden h-[50vh] md:h-auto">
                <svg viewBox="0 0 400 400" className="w-[80%] h-[80%]">
                    {/* Animated Paths */}
                    <motion.path
                        d="M 50 200 Q 200 50 350 200 T 50 200"
                        fill="none"
                        stroke="#6366F1"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.path
                        d="M 50 200 Q 200 350 350 200 T 50 200"
                        fill="none"
                        stroke="#A855F7"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    />

                    {/* Central Nodes */}
                    <motion.circle cx="200" cy="200" r="40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.2">
                        <animate attributeName="r" values="40;50;40" dur="4s" repeatCount="indefinite" />
                    </motion.circle>
                    <motion.circle cx="200" cy="200" r="2" fill="white" className="animate-pulse" />

                    {/* Connecting Lines */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                        <motion.line
                            key={i}
                            x1="200" y1="200" x2="200" y2="100"
                            stroke="white"
                            strokeOpacity="0.1"
                            transform={`rotate(${deg} 200 200)`}
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ delay: i * 0.1 }}
                        />
                    ))}
                </svg>
            </div>
        </section>
    );
}
