"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuOverlay } from "./MenuOverlay";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-[60]"
            >
                <div className="flex items-center gap-1 bg-onyx-surface/80 backdrop-blur-md border border-white/10 rounded-full p-2 pr-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                    <Link to="/" className="w-10 h-10 bg-onyx-primary rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                        <span className="font-display font-bold text-white text-lg">O</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6 px-6">
                        {["Work", "Agency", "Blog", "Playground", "Vault", "Careers", "Contact"].map((item) => {
                            let path = `/${item.toLowerCase()}`;
                            if (item === "Vault") path = "/gallery";

                            const active = isActive(path);
                            return (
                                <Link
                                    key={item}
                                    to={path}
                                    className={`text-sm font-body transition-colors ${active ? 'text-white font-bold' : 'text-onyx-dim hover:text-white'}`}
                                >
                                    {item}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Hamburger - Visible only on small screens */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
                    >
                        <div className="w-6 h-0.5 bg-white group-hover:bg-onyx-primary transition-colors"></div>
                        <div className="w-6 h-0.5 bg-white group-hover:bg-onyx-primary transition-colors"></div>
                    </button>

                    <Link to="/contact" className={`hidden md:block px-4 py-1.5 border rounded-full text-xs font-bold font-display tracking-wide uppercase transition-all ${isActive('/contact') ? 'bg-white text-onyx-black border-white' : 'bg-white/5 hover:bg-white/10 border-white/10 text-white'}`}>
                        Initiate
                    </Link>
                </div>
            </motion.nav>
        </>
    );
}
