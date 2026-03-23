"use client";

import { useEffect, useRef, useState } from "react";

export function CyberPong() {
    const [gameStarted, setGameStarted] = useState(false);
    const [score, setScore] = useState({ player: 0, ai: 0 });
    const [lastScore, setLastScore] = useState<"PLAYER" | "AI" | null>(null);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number>();

    // Game State
    const state = useRef({
        ball: { x: 300, y: 200, dx: 4, dy: 4 },
        paddle1: { y: 150, h: 80 }, // Player
        paddle2: { y: 150, h: 80 }, // AI
        height: 400,
        width: 600
    });

    const resetBall = () => {
        state.current.ball = {
            x: 300,
            y: 200,
            dx: (Math.random() > 0.5 ? 4 : -4),
            dy: (Math.random() * 4 - 2)
        };
    };

    const update = () => {
        const s = state.current;

        // Move Ball
        s.ball.x += s.ball.dx;
        s.ball.y += s.ball.dy;

        // Bounce Top/Bottom
        if (s.ball.y <= 0 || s.ball.y >= s.height) s.ball.dy *= -1;

        // Paddle Collision
        // Player (Left)
        if (s.ball.x <= 20 && s.ball.y >= s.paddle1.y && s.ball.y <= s.paddle1.y + s.paddle1.h) {
            s.ball.dx *= -1.1; // Speed up
            s.ball.dy += (Math.random() * 2 - 1);
        }

        // AI (Right)
        if (s.ball.x >= s.width - 20 && s.ball.y >= s.paddle2.y && s.ball.y <= s.paddle2.y + s.paddle2.h) {
            s.ball.dx *= -1.1;
        }

        // Scoring
        if (s.ball.x < 0) {
            setScore(prev => ({ ...prev, ai: prev.ai + 1 }));
            setLastScore("AI");
            resetBall();
        }
        if (s.ball.x > s.width) {
            setScore(prev => ({ ...prev, player: prev.player + 1 }));
            setLastScore("PLAYER");
            resetBall();
        }

        // Simple AI
        const targetY = s.ball.y - (s.paddle2.h / 2);
        if (targetY > s.paddle2.y) s.paddle2.y += 3; // Difficulty speed
        if (targetY < s.paddle2.y) s.paddle2.y -= 3;

        // Clamp AI
        s.paddle2.y = Math.max(0, Math.min(s.height - s.paddle2.h, s.paddle2.y));

        draw();
        requestRef.current = requestAnimationFrame(update);
    };

    const draw = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const s = state.current;

        // Clear
        ctx.fillStyle = "rgba(10, 10, 10, 0.4)"; // Trails effect
        ctx.fillRect(0, 0, s.width, s.height);

        // Net
        ctx.setLineDash([5, 15]);
        ctx.beginPath();
        ctx.moveTo(s.width / 2, 0);
        ctx.lineTo(s.width / 2, s.height);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.stroke();

        // Ball
        ctx.beginPath();
        ctx.arc(s.ball.x, s.ball.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = "#A855F7"; // Purple ball
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#A855F7";
        ctx.fill();
        ctx.shadowBlur = 0;

        // Player Paddle
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(10, s.paddle1.y, 10, s.paddle1.h);

        // AI Paddle
        ctx.fillStyle = "#6366F1"; // Indigo AI
        ctx.fillRect(s.width - 20, s.paddle2.y, 10, s.paddle2.h);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!canvasRef.current) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseY = e.clientY - rect.top;
        state.current.paddle1.y = Math.max(0, Math.min(state.current.height - state.current.paddle1.h, mouseY - (state.current.paddle1.h / 2)));
    };

    // Toggle Game Loop
    useEffect(() => {
        if (gameStarted) {
            requestRef.current = requestAnimationFrame(update);
        } else {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            // Initial Draw
            setTimeout(draw, 100);
        }
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [gameStarted]);

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-between w-full max-w-[600px] mb-4 font-mono text-xs tracking-widest text-onyx-dim">
                <span className="text-white">YOU: {score.player}</span>
                {lastScore && <span className="animate-pulse text-onyx-primary">{lastScore} SCORED</span>}
                <span className="text-onyx-primary">CPU: {score.ai}</span>
            </div>

            <div className="relative border border-white/10 rounded-xl overflow-hidden bg-black/50">
                {!gameStarted && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10 flex-col">
                        <p className="text-onyx-primary font-bold mb-4 animate-pulse">REFLEX TRAINER READY</p>
                        <p className="text-xs text-onyx-dim mb-6 font-mono">USE MOUSE TO DEFLECT</p>
                        <button onClick={() => setGameStarted(true)} className="px-6 py-2 border border-onyx-primary text-white hover:bg-onyx-primary hover:text-black transition-colors font-mono text-xs">
                            INITIATE
                        </button>
                    </div>
                )}

                <canvas
                    ref={canvasRef}
                    width={600}
                    height={400}
                    className="w-full h-auto cursor-none touch-none"
                    onMouseMove={handleMouseMove}
                />
            </div>
        </div>
    );
}
