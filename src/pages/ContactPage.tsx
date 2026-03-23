"use client";

import { Contact } from "../components/Contact";
import { GlobeUplink } from "../components/visuals/GlobeUplink";

export function ContactPage() {
    return (
        <div className="pt-20">
            <div className="h-[40vh] bg-onyx-surface border-b border-white/5 relative overflow-hidden flex items-center justify-center">
                {/* Animated Globe Background */}
                <GlobeUplink />

                <h1 className="relative z-10 text-5xl md:text-7xl font-display font-bold tracking-tighter">
                    ESTABLISH <span className="text-onyx-primary">UPLINK</span>
                </h1>
            </div>

            <div className="grid lg:grid-cols-2 max-w-7xl mx-auto">
                <Contact />

                {/* FAQ / Info Column */}
                <div className="p-12 md:p-24 border-l border-white/5 space-y-16">
                    <div>
                        <h3 className="text-onyx-primary font-mono text-xs tracking-widest mb-6">GLOBAL COORDINATES</h3>
                        <p className="text-2xl font-display font-bold">SAN FRANCISCO</p>
                        <p className="text-onyx-dim font-mono mt-2">37.7749° N, 122.4194° W</p>

                        <p className="text-2xl font-display font-bold mt-8">TOKYO</p>
                        <p className="text-onyx-dim font-mono mt-2">35.6762° N, 139.6503° E</p>
                    </div>

                    <div>
                        <h3 className="text-onyx-primary font-mono text-xs tracking-widest mb-6">FAQ DATABASE</h3>
                        <div className="space-y-6">
                            {[
                                { q: "What is your minimum engagement?", a: "We typically start at $50k for core protocol development." },
                                { q: "Do you offer maintenance?", a: "Yes. Our sentinel nodes provide 24/7 uptime monitoring." },
                                { q: "Timeline for delivery?", a: "Standard operational tempo is 4-8 weeks per module." }
                            ].map((item, i) => (
                                <div key={i}>
                                    <p className="font-bold text-white mb-1">{item.q}</p>
                                    <p className="text-sm text-onyx-dim">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
