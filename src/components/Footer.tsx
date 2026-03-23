"use client";

import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="py-20 px-4 border-t border-white/5 bg-onyx-black z-10 relative">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-6xl font-display font-bold text-white mb-6">ONYX</h2>
                    <p className="text-onyx-dim font-mono text-sm max-w-xs">
                        Defining the future of digital interaction through precision engineering.
                    </p>
                </div>

                {/* Sitemap */}
                <div>
                    <h4 className="text-xs font-bold text-white mb-6 tracking-widest">SITEMAP</h4>
                    <ul className="space-y-4 font-mono text-sm text-onyx-dim">
                        <li><Link to="/" className="hover:text-onyx-primary transition-colors">HOME</Link></li>
                        <li><Link to="/work" className="hover:text-onyx-primary transition-colors">WORK</Link></li>
                        <li><Link to="/agency" className="hover:text-onyx-primary transition-colors">AGENCY</Link></li>
                        <li><Link to="/contact" className="hover:text-onyx-primary transition-colors">CONTACT</Link></li>
                    </ul>
                </div>

                {/* Legal & Social */}
                <div>
                    <h4 className="text-xs font-bold text-white mb-6 tracking-widest">LEGAL</h4>
                    <ul className="space-y-4 font-mono text-sm text-onyx-dim">
                        <li><Link to="/legal" className="hover:text-onyx-primary transition-colors">PRIVACY & TERMS</Link></li>
                        <li><a href="#" className="hover:text-onyx-primary transition-colors">TWITTER</a></li>
                        <li><a href="#" className="hover:text-onyx-primary transition-colors">LINKEDIN</a></li>
                        <li><a href="#" className="hover:text-onyx-primary transition-colors">GITHUB</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-onyx-dim/50">
                <p>© 2025 ONYX PROTOCOL. ALL RIGHTS RESERVED.</p>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span>SYSTEM ONLINE</span>
                </div>
            </div>
        </footer>
    );
}
