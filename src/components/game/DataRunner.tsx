"use client";

import { useEffect, useRef, useState } from "react";

export function DataRunner() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    const requestRef = useRef<number>();

    const state = useRef({
        player: { y: 0, dy: 0, jump: false },
        obstacles: [] as { x: number, h: number }[],
        frame: 0,
        speed: 5,
        width: 600,
        height: 300
    });

    const resetGame = () => {
        state.current = {
            player: { y: 0, dy: 0, jump: false },
            obstacles: [],
            frame: 0,
            speed: 5,
            width: 600,
            height: 300
        };
        setScore(0);
        setGameOver(false);
        setGameStarted(true);
    };

    const update = () => {
        if (!canvasRef.current || gameOver) return;
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        const s = state.current;
        s.frame++;
        s.speed += 0.005; // Accel

        // Player Physics
        if (s.player.jump) {
            s.player.dy = -10;
            s.player.jump = false;
        }
        s.player.y += s.player.dy;
        s.player.dy += 0.6; // Gravity

        // Ground collision
        if (s.player.y > 0) {
            s.player.y = 0;
            s.player.dy = 0;
        }

        // Spawn Obstacles
        if (s.frame % Math.floor(1000 / s.speed / 10) === 0 && Math.random() > 0.5) {
            s.obstacles.push({
                x: s.width,
                h: Math.random() > 0.8 ? 60 : 40
            });
        }

        // Move Obstacles
        for (let i = s.obstacles.length - 1; i >= 0; i--) {
            const ob = s.obstacles[i];
            ob.x -= s.speed;

            // Remove offscreen
            if (ob.x < -50) {
                s.obstacles.splice(i, 1);
                setScore(prev => prev + 1);
            }

            // Collision
            // Player is roughly 20x40 at x=50, ground=250 (canvas coords)
            // Player Y is offset from ground (0=ground, negative=up)

            const pRect = {
                x: 50,
                y: s.height - 40 + s.player.y,
                w: 20,
                h: 40
            };
            const oRect = {
                x: ob.x,
                y: s.height - ob.h,
                w: 20,
                h: ob.h
            };

            if (pRect.x < oRect.x + oRect.w &&
                pRect.x + pRect.w > oRect.x &&
                pRect.y < oRect.y + oRect.h &&
                pRect.y + pRect.h > oRect.y) {
                setGameOver(true);
            }
        }

        draw(ctx);
        if (!gameOver) requestRef.current = requestAnimationFrame(update);
    };

    const draw = (ctx: CanvasRenderingContext2D) => {
        const s = state.current;
        const groundY = s.height;

        // Clear
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, s.width, s.height);

        // Ground Line
        ctx.strokeStyle = "#fff";
        ctx.beginPath();
        ctx.moveTo(0, groundY - 0.5);
        ctx.lineTo(s.width, groundY - 0.5);
        ctx.stroke();

        // Player
        ctx.fillStyle = "#A855F7";
        ctx.fillRect(50, s.height - 40 + s.player.y, 20, 40);

        // Obstacles
        ctx.fillStyle = "#ef4444";
        s.obstacles.forEach(ob => {
            ctx.fillRect(ob.x, s.height - ob.h, 20, ob.h);
        });
    };

    const jump = () => {
        if (state.current.player.y === 0 && !gameOver) {
            state.current.player.jump = true;
        }
    };

    useEffect(() => {
        const handleKeys = (e: KeyboardEvent) => {
            if (e.code === "Space" || e.code === "ArrowUp") {
                e.preventDefault();
                jump();
            }
        };
        window.addEventListener("keydown", handleKeys);
        return () => window.removeEventListener("keydown", handleKeys);
    }, [gameOver]);

    useEffect(() => {
        if (gameStarted && !gameOver) {
            requestRef.current = requestAnimationFrame(update);
        }
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [gameStarted, gameOver]);

    return (
        <div className="flex flex-col items-center">
            <div className="mb-4 font-mono text-xl text-white font-bold tracking-widest">
                DISTANCE: {score}m
            </div>

            <div className="relative border border-white/20 bg-black cursor-pointer" onClick={jump}>
                {!gameStarted && !gameOver && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10 flex-col">
                        <p className="text-onyx-primary font-bold mb-4 animate-pulse">VELOCITY RUN</p>
                        <p className="text-xs text-onyx-dim mb-6 font-mono text-center">SPACE / TAP TO JUMP</p>
                        <button onClick={resetGame} className="px-6 py-2 border border-onyx-primary text-white hover:bg-onyx-primary hover:text-black transition-colors font-mono text-xs">
                            INITIATE
                        </button>
                    </div>
                )}

                {gameOver && (
                    <div className="absolute inset-0 flex items-center justify-center bg-red-900/80 z-10 flex-col backdrop-blur-sm">
                        <p className="text-white font-bold mb-2 tracking-widest text-2xl">CRASH DETECTED</p>
                        <p className="text-white/60 font-mono text-xs mb-6">DISTANCE: {score}m</p>
                        <button onClick={resetGame} className="px-6 py-2 bg-white text-black hover:bg-red-500 hover:text-white transition-colors font-mono text-xs border-none">
                            RESTART
                        </button>
                    </div>
                )}

                <canvas
                    ref={canvasRef}
                    width={600}
                    height={300}
                    className="w-[600px] h-[300px]"
                />
            </div>
        </div>
    );
}
