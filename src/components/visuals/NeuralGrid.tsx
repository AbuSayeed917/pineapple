"use client";

import { motion } from "framer-motion";

export function NeuralGrid() {
    return (
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-40">
            <svg className="w-full h-full absolute inset-0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid-system" width="50" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    </pattern>
                    <pattern id="grid-highlight" width="200" height="200" patternUnits="userSpaceOnUse">
                        <rect width="200" height="200" fill="none" stroke="rgba(99,102,241,0.1)" strokeWidth="1" />
                        <rect width="10" height="10" x="195" y="195" fill="rgba(99,102,241,0.5)" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-system)" />
                <rect width="100%" height="100%" fill="url(#grid-highlight)">
                    <animate attributeName="x" from="0" to="200" dur="20s" repeatCount="indefinite" />
                    <animate attributeName="y" from="0" to="200" dur="15s" repeatCount="indefinite" />
                </rect>
            </svg>

            {/* Glowing Orbs */}
            <div className="absolute w-[800px] h-[800px] bg-onyx-primary/10 rounded-full blur-[150px] animate-pulse"></div>
            <div className="absolute w-[600px] h-[600px] bg-onyx-secondary/10 rounded-full blur-[120px] translate-x-1/4 animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
    );
}
