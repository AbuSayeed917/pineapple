"use client";

import { motion } from "framer-motion";

export function Contact() {
    return (
        <section id="contact" className="py-32 px-4 relative overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-12 md:p-20 rounded-2xl border border-onyx-primary/20 bg-onyx-surface/80 backdrop-blur-xl"
                >
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
                        READY TO <span className="text-onyx-primary">INITIATE?</span>
                    </h2>
                    <p className="text-xl text-onyx-dim mb-12 max-w-2xl mx-auto">
                        We are currently accepting new protocols for Q3 2025. Secure your deployment slot.
                    </p>

                    <form className="max-w-md mx-auto space-y-4 text-left">
                        <div>
                            <label className="block text-xs font-mono text-onyx-dim mb-2 uppercase">Identity</label>
                            <input type="text" className="w-full bg-onyx-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-onyx-primary focus:outline-none transition-colors" placeholder="Company / Name" />
                        </div>
                        <div>
                            <label className="block text-xs font-mono text-onyx-dim mb-2 uppercase">Transmission</label>
                            <input type="email" className="w-full bg-onyx-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-onyx-primary focus:outline-none transition-colors" placeholder="email@domain.com" />
                        </div>
                        <div>
                            <label className="block text-xs font-mono text-onyx-dim mb-2 uppercase">Directives</label>
                            <textarea rows={4} className="w-full bg-onyx-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-onyx-primary focus:outline-none transition-colors" placeholder="Brief mission params..." />
                        </div>

                        <button className="w-full py-4 mt-4 bg-onyx-primary text-white font-bold font-display tracking-widest uppercase rounded-lg hover:bg-onyx-secondary transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                            Transmit Signal
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
