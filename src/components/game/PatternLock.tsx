"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function PatternLock() {
    const [sequence, setSequence] = useState<number[]>([]);
    const [playerSeq, setPlayerSeq] = useState<number[]>([]);
    const [level, setLevel] = useState(1);
    const [gameState, setGameState] = useState<"IDLE" | "PLAYING" | "SHOWING" | "FAILED">("IDLE");
    const [activeBtn, setActiveBtn] = useState<number | null>(null);

    const startLevel = () => {
        setGameState("SHOWING");
        setPlayerSeq([]);
        const nextSeq = [...sequence, Math.floor(Math.random() * 9)];
        setSequence(nextSeq);

        // Play Sequence
        let i = 0;
        const interval = setInterval(() => {
            if (i >= nextSeq.length) {
                clearInterval(interval);
                setGameState("PLAYING");
                setActiveBtn(null);
                return;
            }
            setActiveBtn(nextSeq[i]);
            setTimeout(() => setActiveBtn(null), 400); // Light up duration
            i++;
        }, 800); // Time between lights
    };

    const restart = () => {
        setSequence([]);
        setPlayerSeq([]);
        setLevel(1);
        setGameState("IDLE");
        setTimeout(startLevel, 500); // Auto start after reset call
    };

    const handleInput = (index: number) => {
        if (gameState !== "PLAYING") return;

        // Flash clicked button
        setActiveBtn(index);
        setTimeout(() => setActiveBtn(null), 200);

        const newPlayerSeq = [...playerSeq, index];
        setPlayerSeq(newPlayerSeq);

        // Check Input
        if (newPlayerSeq[newPlayerSeq.length - 1] !== sequence[newPlayerSeq.length - 1]) {
            setGameState("FAILED");
            return;
        }

        // Check Complete
        if (newPlayerSeq.length === sequence.length) {
            setLevel(l => l + 1);
            setGameState("SHOWING");
            setTimeout(startLevel, 1000);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-between w-[300px] mb-8 font-mono text-xs tracking-widest text-onyx-dim">
                <span>SEQUENCE_LVL: {level}</span>
                <span className={`text-onyx-primary ${gameState === "SHOWING" ? "animate-pulse" : "opacity-0"}`}>OBSERVE</span>
                <span className={`text-white ${gameState === "PLAYING" ? "animate-pulse" : "opacity-0"}`}>INPUT</span>
            </div>

            <div className="grid grid-cols-3 gap-4 p-8 bg-onyx-surface/20 rounded-xl border border-white/10 relative">

                {/* Overlays */}
                {gameState === "IDLE" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-20 backdrop-blur-sm rounded-xl flex-col">
                        <p className="text-onyx-primary font-bold mb-4">MEMORY HACK</p>
                        <button onClick={restart} className="px-6 py-2 border border-onyx-primary text-white hover:bg-onyx-primary hover:text-black transition-colors font-mono text-xs">
                            START HACK
                        </button>
                    </div>
                )}
                {gameState === "FAILED" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-red-900/80 z-20 backdrop-blur-sm rounded-xl flex-col">
                        <p className="text-white font-bold mb-2">ACCESS DENIED</p>
                        <p className="text-xs text-white/50 mb-6 font-mono">PATTERN MISMATCH</p>
                        <button onClick={() => { setSequence([]); setLevel(1); startLevel(); }} className="px-6 py-2 bg-white text-black hover:bg-red-500 hover:text-white transition-colors font-mono text-xs">
                            RETRY
                        </button>
                    </div>
                )}

                {/* Grid Buttons */}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <motion.button
                        key={i}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleInput(i)}
                        className={`
                            w-20 h-20 rounded-lg border border-white/5 transition-all duration-200
                            ${activeBtn === i ? 'bg-onyx-primary shadow-[0_0_20px_#6366F1] border-white scale-105' : 'bg-onyx-black hover:bg-white/10'}
                        `}
                    />
                ))}
            </div>

            <p className="mt-8 text-xs font-mono text-onyx-dim max-w-[300px] text-center">
                MEMORIZE THE PATH TO BYPASS SECURITY PROTOCOLS.
            </p>
        </div>
    );
}
