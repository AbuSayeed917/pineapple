"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";

const GRID_SIZE = 20;
const SPEED = 100;

type Point = { x: number; y: number };

export function NeuralSnake() {
    const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }]);
    const [food, setFood] = useState<Point>({ x: 15, y: 15 });
    const [dir, setDir] = useState<Point>({ x: 1, y: 0 });
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    const divRef = useRef<HTMLDivElement>(null);

    const generateFood = useCallback(() => {
        return {
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE)
        };
    }, []);

    const resetGame = () => {
        setSnake([{ x: 10, y: 10 }]);
        setFood(generateFood());
        setDir({ x: 1, y: 0 });
        setGameOver(false);
        setScore(0);
        setGameStarted(true);
        divRef.current?.focus();
    };

    const moveSnake = useCallback(() => {
        if (gameOver || !gameStarted) return;

        setSnake(prev => {
            const newHead = { x: prev[0].x + dir.x, y: prev[0].y + dir.y };

            // Wall Collision
            if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
                setGameOver(true);
                return prev;
            }

            // Self Collision
            if (prev.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
                setGameOver(true);
                return prev;
            }

            const newSnake = [newHead, ...prev];

            // Eat Food
            if (newHead.x === food.x && newHead.y === food.y) {
                setScore(s => s + 1);
                setFood(generateFood());
                // Don't pop tail, snake grows
            } else {
                newSnake.pop();
            }

            return newSnake;
        });
    }, [dir, food, gameOver, gameStarted, generateFood]);

    useEffect(() => {
        const interval = setInterval(moveSnake, SPEED);
        return () => clearInterval(interval);
    }, [moveSnake]);

    useEffect(() => {
        if (score > highScore) setHighScore(score);
    }, [score, highScore]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        switch (e.key) {
            case "ArrowUp": if (dir.y !== 1) setDir({ x: 0, y: -1 }); break;
            case "ArrowDown": if (dir.y !== -1) setDir({ x: 0, y: 1 }); break;
            case "ArrowLeft": if (dir.x !== 1) setDir({ x: -1, y: 0 }); break;
            case "ArrowRight": if (dir.x !== -1) setDir({ x: 1, y: 0 }); break;
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-center p-8 bg-onyx-surface/20 rounded-xl border border-white/10 outline-none"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            ref={divRef}
        >
            <div className="flex justify-between w-full max-w-[400px] mb-4 font-mono text-onyx-primary text-xs tracking-widest">
                <span>SCORE: {score.toString().padStart(3, '0')}</span>
                <span>HIGH: {highScore.toString().padStart(3, '0')}</span>
            </div>

            <div
                className="relative bg-black/50 border border-onyx-primary/30"
                style={{
                    width: 'min(80vw, 400px)',
                    height: 'min(80vw, 400px)',
                    display: 'grid',
                    gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                    gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`
                }}
            >
                {/* Overlay Screen */}
                {!gameStarted && !gameOver && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10 flex-col">
                        <p className="text-onyx-primary font-bold mb-4 animate-pulse">NEURAL LINK READY</p>
                        <button onClick={resetGame} className="px-6 py-2 border border-onyx-primary text-white hover:bg-onyx-primary hover:text-black transition-colors font-mono text-xs">
                            INITIATE
                        </button>
                    </div>
                )}

                {gameOver && (
                    <div className="absolute inset-0 flex items-center justify-center bg-red-900/80 z-10 flex-col backdrop-blur-sm">
                        <p className="text-white font-bold mb-4 tracking-widest text-2xl">SYSTEM FAILURE</p>
                        <p className="text-white/60 font-mono text-xs mb-6">SIGNAL LOST</p>
                        <button onClick={resetGame} className="px-6 py-2 bg-white text-black hover:bg-red-500 hover:text-white transition-colors font-mono text-xs border-none">
                            REBOOT
                        </button>
                    </div>
                )}

                {/* Grid Cells - using mapped array is too heavy for re-render? 
                    Actually 20x20 = 400 divs is fine for React.
                */}
                {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
                    const x = i % GRID_SIZE;
                    const y = Math.floor(i / GRID_SIZE);
                    const isSnake = snake.some(s => s.x === x && s.y === y);
                    const isFood = food.x === x && food.y === y;
                    const isHead = snake[0]?.x === x && snake[0]?.y === y;

                    return (
                        <div
                            key={i}
                            className={`
                                w-full h-full border-[0.5px] border-white/5
                                ${isSnake ? (isHead ? 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'bg-onyx-primary/80') : ''}
                                ${isFood ? 'bg-purple-500 animate-list shadow-[0_0_10px_#A855F7]' : ''}
                            `}
                        />
                    );
                })}
            </div>

            <p className="mt-6 text-xs font-mono text-onyx-dim">
                USE [ARROW KEYS] TO NAVIGATE THE DATA STREAM
            </p>
        </div>
    );
}
