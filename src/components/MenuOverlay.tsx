"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export function MenuOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const menuItems = [
        { title: "HOME", href: "/" },
        { title: "WORK", href: "/work" },
        { title: "AGENCY", href: "/agency" },
        { title: "CONTACT", href: "/contact" },
    ];

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] bg-onyx-black/95 backdrop-blur-3xl flex items-center justify-center"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 p-4 text-onyx-dim hover:text-white transition-colors"
                    >
                        <span className="text-xl font-mono">[CLOSE]</span>
                    </button>

                    {/* Grid Background */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

                    <div className="flex flex-col items-center gap-8 z-10">
                        {menuItems.map((item, i) => (
                            <motion.div
                                key={item.title} // Use item.title as key
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, x: -20 }}
                                variants={itemVariants}
                                className="group relative"
                            >
                                <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-xs font-mono text-onyx-dim opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                                    {`0${i + 1}`}
                                </span>
                                <Link
                                    to={item.href}
                                    onClick={() => onClose()}
                                    className="text-4xl md:text-7xl font-display font-bold text-transparent text-stroke-1 md:text-stroke-2 text-stroke-white hover:text-white transition-colors uppercase"
                                >
                                    {item.title}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="absolute bottom-12 left-0 right-0 text-center">
                        <span className="text-xs font-mono text-onyx-primary tracking-[0.3em] animate-pulse">SYSTEM STANDBY</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
