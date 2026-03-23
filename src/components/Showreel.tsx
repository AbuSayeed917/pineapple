"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Showreel() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden border-y border-white/5">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-onyx-black/90 via-onyx-black/50 to-onyx-black/90 z-10"></div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-20"
                >
                    <source src="/videos/loop-1.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-black via-transparent to-onyx-black"></div>
            </div>

            <div className="relative z-10 text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-xl font-mono text-onyx-primary tracking-widest mb-8">SHOWREEL 2025</h2>

                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="group relative w-32 h-32 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 hover:border-onyx-primary hover:bg-onyx-primary/10"
                    >
                        <div className="absolute inset-0 rounded-full border border-onyx-primary/30 animate-ping opacity-20"></div>
                        {isPlaying ? (
                            <div className="w-8 h-8 flex gap-2 justify-center items-center">
                                <div className="w-2 h-full bg-white rounded-full"></div>
                                <div className="w-2 h-full bg-white rounded-full"></div>
                            </div>
                        ) : (
                            <svg className="w-12 h-12 text-white ml-2 group-hover:text-onyx-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>
                    <p className="mt-6 text-sm font-mono text-onyx-dim">PLAY THE MANIFESTO</p>
                </motion.div>
            </div>
        </section>
    );
}
