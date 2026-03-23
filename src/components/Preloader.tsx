"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulating loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500); // Small delay at 100%
                    return 100;
                }
                return prev + Math.floor(Math.random() * 10) + 1;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="fixed inset-0 z-[100] bg-black flex items-center justify-center flex-col font-mono"
                    >
                        <h1 className="text-4xl font-display font-bold mb-8 animate-pulse text-white">ONYX</h1>

                        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
                            <motion.div
                                className="h-full bg-onyx-primary"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <div className="mt-4 flex justify-between w-64 text-xs text-onyx-dim">
                            <span>SYSTEM_BOOT</span>
                            <span>{progress}%</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Show content but hidden until loaded? Or just always render? 
                Better to render so SEO crawlers see it, but overlay covers it.
            */}
            <div className={isLoading ? "h-screen overflow-hidden" : ""}>
                {children}
            </div>
        </>
    );
}
