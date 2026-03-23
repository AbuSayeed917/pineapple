"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function CodeBreaker() {
    const [secret, setSecret] = useState<number[]>([]);
    const [guesses, setGuesses] = useState<{ code: number[], correct: number, almost: number }[]>([]);
    const [currentGuess, setCurrentGuess] = useState<number[]>([]);
    const [gameState, setGameState] = useState<"PLAYING" | "WON" | "LOST">("PLAYING");

    useEffect(() => {
        resetGame();
    }, []);

    const resetGame = () => {
        const newSecret = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10));
        setSecret(newSecret);
        setGuesses([]);
        setCurrentGuess([]);
        setGameState("PLAYING");
    };

    const handleInput = (num: number) => {
        if (gameState !== "PLAYING" || currentGuess.length >= 4) return;
        setCurrentGuess(prev => [...prev, num]);
    };

    const handleDelete = () => {
        setCurrentGuess(prev => prev.slice(0, -1));
    };

    const handleSubmit = () => {
        if (currentGuess.length !== 4) return;

        // Calculate feedback
        let correct = 0;
        let almost = 0;
        const secretCopy = [...secret];
        const guessCopy = [...currentGuess];

        // Check exact match first
        guessCopy.forEach((num, i) => {
            if (num === secretCopy[i]) {
                correct++;
                secretCopy[i] = -1; // Mark as used
                guessCopy[i] = -2;
            }
        });

        // Check imprecise match
        guessCopy.forEach((num, i) => {
            if (num === -2) return;
            const index = secretCopy.indexOf(num);
            if (index !== -1) {
                almost++;
                secretCopy[index] = -1;
            }
        });

        const newHistory = [...guesses, { code: [...currentGuess], correct, almost }];
        setGuesses(newHistory);
        setCurrentGuess([]);

        if (correct === 4) {
            setGameState("WON");
        } else if (newHistory.length >= 8) {
            setGameState("LOST");
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-lg mx-auto bg-onyx-surface/20 border border-white/10 rounded-xl p-6">
            <div className="flex justify-between w-full mb-6 font-mono text-xs text-onyx-dim">
                <span>ATTEMPTS: {guesses.length}/8</span>
                <span>STATUS: {gameState}</span>
            </div>

            {/* History Log */}
            <div className="w-full flex-1 min-h-[300px] mb-6 space-y-2 overflow-y-auto">
                {guesses.map((g, i) => (
                    <div key={i} className="flex items-center justify-between p-2 bg-black/40 rounded border border-white/5">
                        <div className="flex gap-2">
                            {g.code.map((n, j) => (
                                <span key={j} className="text-white font-mono font-bold text-lg">{n}</span>
                            ))}
                        </div>
                        <div className="flex gap-4 text-xs font-mono">
                            <span className="text-green-400">EXACT: {g.correct}</span>
                            <span className="text-yellow-400">PARTIAL: {g.almost}</span>
                        </div>
                    </div>
                ))}

                {/* Current Guess Placeholder */}
                {gameState === "PLAYING" && (
                    <div className="flex items-center gap-2 p-2 border border-onyx-primary/30 rounded bg-onyx-primary/5">
                        {[0, 1, 2, 3].map(i => (
                            <div key={i} className="w-6 h-8 flex items-center justify-center border-b border-white/20 text-white font-mono text-lg">
                                {currentGuess[i] !== undefined ? currentGuess[i] : "_"}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Controls */}
            {gameState === "PLAYING" ? (
                <div className="w-full">
                    <div className="grid grid-cols-5 gap-2 mb-4">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                            <button
                                key={num}
                                onClick={() => handleInput(num)}
                                className="h-12 rounded bg-white/5 hover:bg-white/20 text-white font-mono font-bold border border-white/10"
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <button onClick={handleDelete} className="h-10 rounded border border-red-500/50 text-red-400 font-mono text-xs hover:bg-red-500/10">DELETE</button>
                        <button onClick={handleSubmit} className="h-10 rounded bg-onyx-primary text-black font-bold font-mono text-xs hover:bg-white transition-colors" disabled={currentGuess.length !== 4}>ENTER CODE</button>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <p className={`text-2xl font-bold mb-2 ${gameState === "WON" ? "text-green-400" : "text-red-500"}`}>
                        {gameState === "WON" ? "ACCESS GRANTED" : "LOCKDOWN INITIATED"}
                    </p>
                    <p className="text-onyx-dim font-mono text-sm mb-6">
                        CODE WAS: {secret.join("")}
                    </p>
                    <button onClick={resetGame} className="px-6 py-2 bg-white text-black font-mono text-sm font-bold rounded hover:bg-onyx-primary transition-colors">
                        RESET SYSTEM
                    </button>
                </div>
            )}
        </div>
    );
}
