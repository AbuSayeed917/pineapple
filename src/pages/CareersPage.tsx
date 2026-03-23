"use client";

import { motion } from "framer-motion";

export function CareersPage() {
    const jobs = [
        {
            title: "Senior Neural Architect",
            dept: "ENGINEERING",
            loc: "Remote / Tokyo",
            type: "Full-Time",
            desc: "Design the next generation of autonomous agent protocols."
        },
        {
            title: "Frontend Operative",
            dept: "DESIGN",
            loc: "Remote",
            type: "Contract",
            desc: "Implement high-fidelity pixel interfaces. Must know WebGL."
        },
        {
            title: "System Sentinel",
            dept: "SECURITY",
            loc: "San Francisco",
            type: "Full-Time",
            desc: "Monitor network traffic and neutralize threats."
        }
    ];

    const perks = [
        "100% Remote Uplink",
        "Cybernetic Health Coverage",
        "Unlimited Compute Credits",
        "Annual Offworld Retreats"
    ];

    return (
        <div className="pt-32 pb-32 px-4 min-h-screen bg-onyx-black">
            <header className="max-w-7xl mx-auto mb-20 text-center">
                <h1 className="text-6xl md:text-9xl font-display font-bold mb-8">JOIN THE <span className="text-onyx-primary">COLLECTIVE</span></h1>
                <p className="text-xl text-onyx-dim font-mono max-w-2xl mx-auto">
                    We are always looking for rogue anomalies to join our ranks.
                    If you exist outside the norm, you belong here.
                </p>
            </header>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
                {/* Job List */}
                <div className="md:col-span-2 space-y-4">
                    <h2 className="text-xs font-bold text-white tracking-widest mb-6 border-b border-white/10 pb-4">OPEN POSITIONS</h2>
                    {jobs.map((job, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-onyx-surface/20 border border-white/5 hover:border-onyx-primary transition-all group cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-onyx-primary transition-colors">{job.title}</h3>
                                <span className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-onyx-dim">{job.type}</span>
                            </div>
                            <p className="text-onyx-dim mb-6">{job.desc}</p>
                            <div className="flex gap-4 text-xs font-mono text-white/50">
                                <span>[{job.dept}]</span>
                                <span>[{job.loc}]</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Sidebar */}
                <div className="space-y-12">
                    <div>
                        <h2 className="text-xs font-bold text-white tracking-widest mb-6 border-b border-white/10 pb-4">OPERATIVE PERKS</h2>
                        <ul className="space-y-4">
                            {perks.map((perk, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-onyx-dim">
                                    <span className="w-1.5 h-1.5 bg-onyx-primary rounded-full"></span>
                                    {perk}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-8 bg-onyx-primary/10 border border-onyx-primary/30 rounded-xl">
                        <h3 className="font-bold text-white mb-2">READY TO DEPLOY?</h3>
                        <p className="text-xs text-onyx-dim mb-4">Send your encrypted dossier to our recruitment channel.</p>
                        <a href="mailto:careers@onyxprotocol.com" className="block w-full py-3 bg-onyx-primary text-black font-bold text-center hover:bg-white transition-colors text-sm">
                            INITIATE UPLOAD
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
