"use client";

import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="min-h-screen bg-onyx-black flex items-center justify-center p-4">
            <div className="text-center font-mono">
                <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-onyx-primary/20 to-onyx-primary animate-pulse">404</h1>
                <p className="text-onyx-primary tracking-widest mb-8">SIGNAL LOST</p>
                <p className="text-onyx-dim max-w-md mx-auto mb-12">
                    The requested transmission could not be located in this sector.
                    The coordinates may have been corrupted or the node destroyed.
                </p>
                <Link
                    to="/"
                    className="px-8 py-3 bg-white/5 border border-white/10 hover:border-onyx-primary hover:bg-onyx-primary/10 transition-colors text-white text-xs tracking-widest"
                >
                    RETURN TO COMMAND
                </Link>
            </div>
        </div>
    );
}
