"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function PlaygroundPage() {
    const tools = [
        { title: "SYSTEM TERMINAL", desc: "Command Line Interface", path: "/terminal", icon: "CMD" },
        { title: "NEURAL LAB", desc: "Physics Simulation", path: "/lab", icon: "LAB" },
        { title: "SCHEMATICS", desc: "3D Model Viewer", path: "/schematics", icon: "3D" },
        { title: "PIXEL FORGE", desc: " Digital Art Canvas", path: "/pixel", icon: "ART" }
    ];

    const games = [
        { title: "NEURAL SNAKE", desc: "Classic Enhancement", path: "/simulation/SNAKE", icon: "G1" },
        { title: "CYBER PONG", desc: "Reflex Training", path: "/simulation/PONG", icon: "G2" },
        { title: "PATTERN LOCK", desc: "Memory Protocol", path: "/simulation/LOCK", icon: "G3" },
        { title: "CODE BREAKER", desc: "Decryption Logic", path: "/simulation/CODE", icon: "G4" },
        { title: "HEX DEFENSE", desc: "Firewall Tactics", path: "/simulation/HEX", icon: "G5" },
        { title: "DATA RUNNER", desc: "Velocity Drill", path: "/simulation/RUNNER", icon: "G6" },
        { title: "PACKET SWARM", desc: "Defense Grid", path: "/simulation/SWARM", icon: "G7" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="pt-32 pb-32 px-4 min-h-screen bg-onyx-black">
            <header className="max-w-7xl mx-auto mb-16 text-center">
                <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">SYSTEM <span className="text-onyx-primary">PLAYGROUND</span></h1>
                <p className="text-lg text-onyx-dim font-mono max-w-2xl mx-auto">
                    Access all interactive modules, simulations, and creative tools from a central hub.
                </p>
            </header>

            <div className="max-w-7xl mx-auto space-y-20">
                {/* Tools Section */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-2 h-2 bg-onyx-primary rounded-full animate-pulse"></div>
                        <h2 className="text-xl font-bold font-display tracking-widest">CREATIVE TOOLS</h2>
                        <div className="h-px bg-white/10 flex-grow"></div>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {tools.map((tool) => (
                            <motion.div key={tool.path} variants={itemVariants}>
                                <Link to={tool.path} className="group block h-full bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-onyx-primary/50 transition-all duration-300">
                                    <div className="w-12 h-12 bg-onyx-surface rounded-lg mb-4 flex items-center justify-center text-onyx-primary font-bold font-mono border border-white/5 group-hover:scale-110 transition-transform">
                                        {tool.icon}
                                    </div>
                                    <h3 className="text-xl font-bold font-display mb-2 group-hover:text-onyx-primary transition-colors">{tool.title}</h3>
                                    <p className="text-sm text-onyx-dim font-mono">{tool.desc}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Arcade Section */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-2 h-2 bg-onyx-primary rounded-full animate-pulse"></div>
                        <h2 className="text-xl font-bold font-display tracking-widest">NEURAL ARCADE</h2>
                        <div className="h-px bg-white/10 flex-grow"></div>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {games.map((game) => (
                            <motion.div key={game.path} variants={itemVariants}>
                                <Link to={game.path} className="group block h-full bg-onyx-surface/20 border border-white/5 rounded-xl p-6 hover:bg-onyx-surface/40 hover:border-onyx-primary/50 transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-onyx-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-10 h-10 bg-black rounded flex items-center justify-center text-white/50 text-xs font-mono group-hover:text-white transition-colors">
                                            {game.icon}
                                        </div>
                                        <div className="px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-onyx-primary border border-white/5">
                                            GAME
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold font-display mb-1 group-hover:text-white transition-colors text-white/90">{game.title}</h3>
                                    <p className="text-xs text-onyx-dim font-mono mb-4">{game.desc}</p>

                                    <div className="text-xs font-bold text-onyx-primary flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <span>INITIATE PROTOCOL</span>
                                        <span>&rarr;</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </div>
        </div>
    );
}
