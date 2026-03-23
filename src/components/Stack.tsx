"use client";

import { motion } from "framer-motion";

export function Stack() {
    const stack = [
        { name: "Next.js", icon: <path d="M12 2L2 19.7778H22L12 2Z" /> }, // Placeholder Triangle
        { name: "React", icon: <circle cx="12" cy="12" r="10" /> }, // Placeholder Circle
        { name: "TypeScript", icon: <rect x="2" y="2" width="20" height="20" /> }, // Placeholder Square
        { name: "Tailwind", icon: <path d="M4 12C4 12 8 8 12 12C16 16 20 12 20 12" /> }, // Placeholder Wave
    ];

    // High quality SVG paths for real logos
    const tech = [
        { name: "REACT", color: "hover:text-[#61DAFB]", path: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" }, // Simplified
        { name: "NEXT.JS", color: "hover:text-white", path: "M12 2L2 22h20" },
        { name: "TYPESCRIPT", color: "hover:text-[#3178C6]", path: "M4 4h16v16h-16z" },
        { name: "NODE.JS", color: "hover:text-[#339933]", path: "M12 2L4 7v10l8 5 8-5V7l-8-5z" },
        { name: "PYTHON", color: "hover:text-[#3776AB]", path: "M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" },
        { name: "RUST", color: "hover:text-orange-500", path: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" },
        { name: "AWS", color: "hover:text-[#FF9900]", path: "M16 16l-4-4-4 4" },
        { name: "DOCKER", color: "hover:text-[#2496ED]", path: "M4 12h16M4 8h16M4 16h16" }
    ];

    return (
        <section id="stack" className="py-32 px-4 bg-onyx-black/50 backdrop-blur-sm relative z-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-display font-bold mb-16 text-center">CORE ARCHITECTURE</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {tech.map((item, i) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className={`p-12 border border-white/5 bg-onyx-surface/20 rounded-xl flex flex-col items-center gap-6 group hover:border-onyx-primary/50 transition-colors cursor-crosshair ${item.color}`}
                        >
                            <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current opacity-50 group-hover:opacity-100 transition-opacity">
                                <path d={item.path} />
                            </svg>
                            <span className="font-mono font-bold tracking-widest">{item.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
