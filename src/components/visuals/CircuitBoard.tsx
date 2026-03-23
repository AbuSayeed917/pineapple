"use client";

import { motion } from "framer-motion";

export function CircuitBoard() {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 800 600" className="w-full h-full opacity-30">
                {/* Base Paths */}
                <path d="M 100 100 H 200 V 200 H 400" stroke="rgba(255,255,255,0.1)" fill="none" strokeWidth="2" />
                <path d="M 100 300 H 300 V 400 H 600" stroke="rgba(255,255,255,0.1)" fill="none" strokeWidth="2" />
                <path d="M 600 100 V 300 H 400" stroke="rgba(255,255,255,0.1)" fill="none" strokeWidth="2" />

                {/* Animated Data Packets */}
                <motion.circle r="3" fill="#6366F1">
                    <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        path="M 100 100 H 200 V 200 H 400"
                    />
                </motion.circle>

                <motion.circle r="3" fill="#A855F7">
                    <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        begin="1s"
                        path="M 100 300 H 300 V 400 H 600"
                    />
                </motion.circle>

                <motion.circle r="3" fill="#ffffff">
                    <animateMotion
                        dur="5s"
                        repeatCount="indefinite"
                        begin="2s"
                        path="M 600 100 V 300 H 400"
                    />
                </motion.circle>

                {/* Nodes */}
                <circle cx="100" cy="100" r="4" fill="rgba(255,255,255,0.2)" />
                <circle cx="400" cy="200" r="4" fill="rgba(255,255,255,0.2)" />
                <circle cx="600" cy="400" r="4" fill="rgba(255,255,255,0.2)" />
                <circle cx="600" cy="100" r="4" fill="rgba(255,255,255,0.2)" />
            </svg>
        </div>
    );
}
