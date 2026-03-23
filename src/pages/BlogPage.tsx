"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export function BlogPage() {
    return (
        <div className="pt-32 pb-32 px-4 min-h-screen bg-onyx-black">
            <header className="max-w-7xl mx-auto mb-20">
                <h1 className="text-6xl md:text-9xl font-display font-bold mb-8">INTELLIGENCE <br /> <span className="text-onyx-primary">LOGS</span></h1>
                <p className="text-xl text-onyx-dim font-mono">Transmissions from the edge of technology.</p>
            </header>

            {/* Masonry Layout */}
            <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
                {posts.map((post, i) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group border border-white/5 bg-onyx-surface/20 rounded-lg overflow-hidden hover:border-onyx-primary/50 transition-colors break-inside-avoid"
                    >
                        <div className="aspect-video overflow-hidden">
                            <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-4 text-xs font-mono">
                                <span className="text-onyx-primary">{post.category}</span>
                                <span className="text-onyx-dim">{post.date}</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-onyx-primary transition-colors">{post.title}</h2>
                            <Link to={`/blog/${post.id}`} className="text-sm font-mono text-white/50 group-hover:text-white transition-colors">READ TRANSMISSION &rarr;</Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div >
    );
}
