"use client";

import { motion } from "framer-motion";
import { Agency } from "../components/Agency";
import { CircuitBoard } from "../components/visuals/CircuitBoard";

export function AgencyPage() {
    const history = [
        { year: "2021", event: "PROTOCOL INITIATED", desc: "Formed in the void. First comms established." },
        { year: "2022", event: "SYSTEM EXPANSION", desc: "First major government contracts secured." },
        { year: "2023", event: "AI INTEGRATION", desc: "Neural networks deployed across core stack." },
        { year: "2024", event: "GLOBAL UPLINK", desc: "Nodes active in 12 sectors worldwide." }
    ];

    const values = [
        { title: "PRECISION", desc: "We don't guess. We calculate. Every pixel is intentional." },
        { title: "VELOCITY", desc: "Speed is a feature. We build primarily for performance." },
        { title: "SECURITY", desc: "Fortified by design. Zero-trust architecture standard." },
        { title: "AESTHETICS", desc: "Brutalism meets beauty. Form follows function." }
    ];

    const agents = [
        { name: "Unit 01", role: "Director", spec: "Strategy" },
        { name: "Unit 02", role: "Architect", spec: "System Design" },
        { name: "Unit 03", role: "Operator", spec: "Frontend Ops" },
        { name: "Unit 04", role: "Analyst", spec: "Data Science" }
    ];

    return (
        <div className="pt-32 bg-onyx-black min-h-screen">
            <header className="px-4 max-w-7xl mx-auto mb-24 text-center relative z-10">
                <span className="inline-block px-3 py-1 border border-onyx-primary/30 rounded-full text-xs font-mono text-onyx-primary mb-8 tracking-widest bg-onyx-surface/50 backdrop-blur-sm">
                    CLASSIFIED NO. 884-X
                </span>
                <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-8 leading-[0.9]">
                    INTELLIGENCE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-onyx-dim">NETWORK</span>
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-onyx-dim font-mono leading-relaxed">
                    We are a collective of rogue engineers and designers building digital weaponry for the modern web.
                </p>
            </header>

            {/* Circuit Background Section */}
            <div className="relative py-32 border-y border-white/5 overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <CircuitBoard />
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-display font-bold mb-6">THE MANIFESTO</h2>
                        <p className="text-lg text-onyx-dim mb-6">
                            The web has become bloated. Slow. Inefficient. We exist to prune the dead branches.
                        </p>
                        <p className="text-lg text-onyx-dim">
                            Onyx Protocol is not just an agency. It is a methodology. We strip away the noise until only the signal remains.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {values.map((v, i) => (
                            <div key={i} className="p-6 bg-onyx-surface/20 border border-white/5 backdrop-blur-sm hover:border-onyx-primary/50 transition-colors">
                                <h3 className="font-mono text-onyx-primary mb-2 text-sm tracking-wider">{v.title}</h3>
                                <p className="text-sm text-gray-400">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <section className="py-32 px-4 max-w-7xl mx-auto border-b border-white/5">
                <h2 className="text-4xl font-display font-bold mb-16 text-center">TIMELINE DATA</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {history.map((h, i) => (
                        <div key={i} className="relative pt-8 border-t border-white/10">
                            <span className="absolute -top-1.5 left-0 w-3 h-3 bg-onyx-primary rounded-full"></span>
                            <span className="text-5xl font-display font-bold text-white/10 mb-4 block">{h.year}</span>
                            <h3 className="text-lg font-bold text-white mb-2">{h.event}</h3>
                            <p className="text-sm text-onyx-dim font-mono">{h.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Existing Agency Component (Reduced or removed if redundant, keeping for Visual) */}
            <div className="py-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-1000">
                <Agency />
            </div>

            {/* Team Grid */}
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 md:mb-12">CORE // OPERATIVES</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {[
                        { name: "ALEX CHEN", role: "SYS_ARCHITECT", img: "/images/team/member1.jpg" },
                        { name: "SARAH VOSS", role: "UI_SPECIALIST", img: "/images/team/member2.jpg" },
                        { name: "DAVID KIM", role: "NET_RUNNER", img: "/images/team/member3.jpg" },
                        { name: "ELENA ROV", role: "OPS_LEAD", img: "/images/team/member4.jpg" }
                    ].map((member, i) => (
                        <div key={i} className="group">
                            <div className="aspect-square bg-white/5 mb-4 overflow-hidden rounded-sm relative">
                                <div className="absolute inset-0 bg-onyx-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                                {/* Placeholder or Real Image */}
                                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-onyx-dim font-mono text-xs">
                                    [IMG_MISSING]
                                </div>
                            </div>
                            <h3 className="font-bold text-white text-sm md:text-base">{member.name}</h3>
                            <p className="text-xs font-mono text-onyx-primary">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
