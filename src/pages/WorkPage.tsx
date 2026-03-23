"use client";

import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        name: "AERO STREAM",
        cat: "FINTECH",
        desc: "High-frequency trading interface for institutional clients.",
        stack: ["React", "Rust", "WebSockets"],
        stat: "1.2ms Latency",
        img: "/images/work-aero.jpg"
    },
    {
        id: 2,
        name: "VOID PROTOCOL",
        cat: "WEB3",
        desc: "Decentralized identity verification layer on Ethereum.",
        stack: ["Solidity", "Next.js", "IPFS"],
        stat: "500k+ Identities",
        img: "/images/work-void.jpg"
    },
    {
        id: 3,
        name: "NEBULA CORE",
        cat: "AI INFRA",
        desc: "Agentic workflow orchestration for enterprise LLMs.",
        stack: ["Python", "TensorFlow", "FastAPI"],
        stat: "10x Efficiency",
        img: "/images/work-nebula.jpg"
    },
    {
        id: 4,
        name: "SYNTH WAVE",
        cat: "AUDIO",
        desc: "Browser-based DAW with real-time collaboration.",
        stack: ["WebAudio API", "WASM", "Vue"],
        stat: "Zero Lag",
        img: "/images/work-synth.jpg"
    },
];

export function WorkPage() {
    return (
        <div className="pt-32 px-4 pb-32 bg-onyx-black">
            <header className="max-w-7xl mx-auto mb-32 border-b border-white/5 pb-10">
                <h1 className="text-6xl md:text-9xl font-display font-bold leading-[0.8] tracking-tighter mb-8">
                    SELECTED <br /> <span className="text-onyx-dim">OPERATIONS</span>
                </h1>
                <div className="flex flex-col md:flex-row gap-12 mt-12">
                    <p className="text-xl text-onyx-dim font-mono max-w-xl leading-relaxed">
                        We don't build websites. We build digital infrastructure.
                        Each project represents a complex problem solved with surgical precision.
                    </p>
                    <div className="flex gap-8 text-sm font-mono text-onyx-primary">
                        <div>
                            <span className="block text-white mb-2">PROJECTS</span>
                            42 shipped
                        </div>
                        <div>
                            <span className="block text-white mb-2">SECTORS</span>
                            Fintech, AI, Web3
                        </div>
                    </div>
                </div>
            </header>

            {/* Project Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative"
                    >
                        {/* Image Side */}
                        <div className={`aspect-[4/3] overflow-hidden rounded-xl relative`}>
                            <div className="absolute inset-0 bg-onyx-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                                src={project.img}
                                alt={project.name}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>

                        {/* Content Side */}
                        <div className={`${i % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                            <span className="inline-block mb-4 text-xs font-mono text-onyx-primary border border-onyx-primary/30 px-2 py-1 rounded-full">
                                {project.cat}
                            </span>
                            <h3 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 group-hover:text-onyx-primary transition-colors">
                                {project.name}
                            </h3>
                            <p className="text-xl text-onyx-dim mb-8 max-w-md ml-0 md:ml-0 inline-block">
                                {project.desc}
                            </p>

                            <div className={`flex gap-4 mb-8 ${i % 2 === 1 ? 'md:justify-end' : ''}`}>
                                {project.stack.map(tech => (
                                    <span key={tech} className="text-sm font-mono text-white/40">[{tech}]</span>
                                ))}
                            </div>

                            <div className={`inline-flex flex-col border-l-2 border-onyx-primary pl-6 ${i % 2 === 1 ? 'md:border-l-0 md:border-r-2 md:pl-0 md:pr-6 md:items-end' : ''}`}>
                                <span className="text-xs font-bold text-white mb-1">KEY METRIC</span>
                                <span className="text-3xl font-display font-bold text-white">{project.stat}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
