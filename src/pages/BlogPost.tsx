"use client";

import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";
import { NotFound } from "./NotFound";
import { motion } from "framer-motion";

export function BlogPost() {
    const { id } = useParams();
    const post = posts.find(p => p.id === id);

    if (!post) return <NotFound />;

    return (
        <article className="pt-32 pb-32 min-h-screen bg-onyx-black">
            {/* Hero Image */}
            <div className="h-[50vh] w-full relative overflow-hidden mb-20">
                <img src={post.img} className="w-full h-full object-cover opacity-60 fixed top-0 left-0 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-black via-onyx-black/80 to-transparent z-10"></div>

                <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                    <div className="max-w-3xl mx-auto">
                        <span className="inline-block px-3 py-1 border border-onyx-primary/50 text-onyx-primary text-xs font-mono mb-6 bg-black/50 backdrop-blur-md rounded-full">
                            {post.category} // {post.date}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="max-w-3xl mx-auto px-4 relative z-20">
                <div className="prose prose-invert prose-lg prose-p:font-mono prose-headings:font-display prose-headings:font-bold prose-a:text-onyx-primary">
                    <p className="text-xl leading-relaxed text-white mb-12 border-l-2 border-onyx-primary pl-6 italic">
                        {/* Simulated Intro */}
                        "Detailed analysis of the current vector state indicates a shift in paradigm..."
                    </p>

                    {/* Render raw content (simulated for now since data is short) */}
                    <div className="whitespace-pre-wrap text-onyx-dim">
                        {post.content}
                    </div>

                    <hr className="border-white/10 my-12" />

                    <h3>Key Takeaways</h3>
                    <ul className="text-sm text-gray-400">
                        <li>Systems are evolving rapidly.</li>
                        <li>Adaptation is mandatory.</li>
                        <li>Static assets are obsolete.</li>
                    </ul>

                    <p className="mt-8">
                        EndOfTransmission_
                    </p>
                </div>

                <div className="mt-20 pt-10 border-t border-white/5 flex justify-between items-center">
                    <Link to="/blog" className="text-sm font-mono text-onyx-dim hover:text-white transition-colors">
                        &larr; RETURN TO LOGS
                    </Link>
                    <button className="px-6 py-2 bg-onyx-primary text-white font-bold text-sm rounded hover:bg-white hover:text-black transition-colors">
                        SHARE INTEL
                    </button>
                </div>
            </div>
        </article>
    );
}
