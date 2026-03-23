"use client";

import { motion } from "framer-motion";

export function GlobeUplink() {
    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <svg viewBox="0 0 500 500" className="w-[800px] h-[800px] animate-[spin_60s_linear_infinite]">
                <defs>
                    <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" style={{ stopColor: "rgba(99,102,241,0.2)", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "rgba(0,0,0,0)", stopOpacity: 0 }} />
                    </radialGradient>
                </defs>

                {/* Latitudes */}
                <ellipse cx="250" cy="250" rx="200" ry="200" fill="none" stroke="rgba(255,255,255,0.1)" />
                <ellipse cx="250" cy="250" rx="200" ry="100" fill="none" stroke="rgba(255,255,255,0.1)" />
                <ellipse cx="250" cy="250" rx="200" ry="40" fill="none" stroke="rgba(255,255,255,0.1)" />

                {/* Longitudes */}
                <ellipse cx="250" cy="250" rx="100" ry="200" fill="none" stroke="rgba(255,255,255,0.1)" />
                <ellipse cx="250" cy="250" rx="40" ry="200" fill="none" stroke="rgba(255,255,255,0.1)" />

                {/* Active Nodes */}
                <circle cx="250" cy="50" r="4" fill="#6366F1" className="animate-ping" />
                <circle cx="450" cy="250" r="4" fill="#A855F7" className="animate-ping" style={{ animationDelay: '1s' }} />
                <circle cx="50" cy="250" r="4" fill="#ffffff" className="animate-ping" style={{ animationDelay: '2s' }} />

                {/* Core Glow */}
                <circle cx="250" cy="250" r="100" fill="url(#grad1)" />
            </svg>
        </div>
    );
}
