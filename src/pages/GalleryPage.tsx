"use client";

import { motion } from "framer-motion";

export function GalleryPage() {
    // Generate array of 50 items
    const items = Array.from({ length: 45 }).map((_, i) => ({
        id: i,
        type: i % 10 === 0 ? 'video' : 'image', // Every 10th is a "video"
        src: i % 10 === 0 ? `/videos/loop-1.mp4` : (
            i < 15 ? `/images/vault/arch-${(i % 5) + 1}.jpg` :
                i < 30 ? `/images/vault/neon-${(i % 5) + 1}.jpg` :
                    `/images/vault/tech-${(i % 5) + 1}.jpg`
        )
    }));

    return (
        <div className="pt-32 pb-32 px-4 min-h-screen bg-onyx-black">
            <header className="max-w-7xl mx-auto mb-20 text-center">
                <h1 className="text-6xl md:text-9xl font-display font-bold mb-8">THE <span className="text-onyx-primary">VAULT</span></h1>
                <p className="text-xl text-onyx-dim font-mono">Restricted Access. Level 5 Clearance.</p>
                <div className="mt-8 flex justify-center gap-8 text-xs font-mono text-onyx-dim">
                    <span>ASSETS: 50+</span>
                    <span>SIZE: 4.2TB</span>
                    <span>ENCRYPTION: AES-256</span>
                </div>
            </header>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: Math.random() * 0.5 }}
                        className="break-inside-avoid relative group rounded-lg overflow-hidden bg-onyx-surface"
                    >
                        {item.type === 'video' ? (
                            <div className="aspect-video bg-onyx-dim/10 relative flex items-center justify-center">
                                {/* Placeholder for video since we might just have empty files */}
                                <span className="text-xs font-mono text-white/50">VIDEO FILE CORRUPTED</span>
                            </div>
                        ) : (
                            <img
                                src={item.src}
                                className="w-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                                onError={(e) => (e.currentTarget.src = '/images/blog/post-1.jpg')} // Fallback
                            />
                        )}
                        <div className="absolute inset-0 bg-onyx-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-overlay"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
