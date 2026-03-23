"use client";

import { useEffect, useRef, useState } from "react";

export function HexDefense() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    const requestRef = useRef<number>();

    const state = useRef({
        angle: 0,
        projectiles: [] as { x: number, y: number, vx: number, vy: number }[],
        enemies: [] as { x: number, y: number, speed: number }[],
        frame: 0,
        width: 600,
        height: 600
    });

    const resetGame = () => {
        state.current = {
            angle: 0,
            projectiles: [],
            enemies: [],
            frame: 0,
            width: 600,
            height: 600
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
        const center = { x: s.width / 2, y: s.height / 2 };
        s.frame++;

        // Spawn Enemies
        if (s.frame % 60 === 0) {
            const angle = Math.random() * Math.PI * 2;
            const dist = 400;
            s.enemies.push({
                x: center.x + Math.cos(angle) * dist,
                y: center.y + Math.sin(angle) * dist,
                speed: 1 + (score * 0.05) // Difficulty ramp
            });
        }

        // Update Projectiles
        for (let i = s.projectiles.length - 1; i >= 0; i--) {
            const p = s.projectiles[i];
            p.x += p.vx;
            p.y += p.vy;

            // Remove if off screen
            if (p.x < -100 || p.x > s.width + 100 || p.y < -100 || p.y > s.height + 100) {
                s.projectiles.splice(i, 1);
            }
        }

        // Update Enemies
        for (let i = s.enemies.length - 1; i >= 0; i--) {
            const e = s.enemies[i];
            const dx = center.x - e.x;
            const dy = center.y - e.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Move towards center
            e.x += (dx / dist) * e.speed;
            e.y += (dy / dist) * e.speed;

            // Hit Core?
            if (dist < 30) {
                setGameOver(true);
            }

            // Hit by Projectile?
            for (let j = s.projectiles.length - 1; j >= 0; j--) {
                const p = s.projectiles[j];
                const pdx = p.x - e.x;
                const pdy = p.y - e.y;
                const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

                if (pdist < 20) {
                    // Boom
                    s.enemies.splice(i, 1);
                    s.projectiles.splice(j, 1);
                    setScore(prev => prev + 10);
                    break;
                }
            }
        }

        draw(ctx);
        if (!gameOver) requestRef.current = requestAnimationFrame(update);
    };

    const draw = (ctx: CanvasRenderingContext2D) => {
        const s = state.current;
        const center = { x: s.width / 2, y: s.height / 2 };

        // Clear
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // Trails
        ctx.fillRect(0, 0, s.width, s.height);

        // Core
        ctx.save();
        ctx.translate(center.x, center.y);
        ctx.rotate(s.angle);

        // Turret Body
        ctx.fillStyle = "#A855F7";
        ctx.beginPath();
        ctx.moveTo(15, 0);
        ctx.lineTo(-10, 10);
        ctx.lineTo(-10, -10);
        ctx.fill();

        ctx.restore();

        // Projectiles
        ctx.fillStyle = "#fff";
        s.projectiles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
            ctx.fill();
        });

        // Enemies
        ctx.fillStyle = "#ff0044";
        s.enemies.forEach(e => {
            ctx.beginPath();
            ctx.moveTo(e.x + 10 * Math.cos(0), e.y + 10 * Math.sin(0));
            for (let i = 1; i <= 6; i++) { // Hexagon
                ctx.lineTo(e.x + 10 * Math.cos(i * 2 * Math.PI / 6), e.y + 10 * Math.sin(i * 2 * Math.PI / 6));
            }
            ctx.fill();
        });
    };

    const handleShoot = () => {
        if (gameOver) return;
        const s = state.current;
        s.projectiles.push({
            x: s.width / 2,
            y: s.height / 2,
            vx: Math.cos(s.angle) * 8,
            vy: Math.sin(s.angle) * 8
        });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!canvasRef.current || gameOver) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - cy, e.clientX - cx);
        state.current.angle = angle;
    };

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
                SCORE: {score}
            </div>

            <div className="relative rounded-full overflow-hidden border border-white/20 bg-black cursor-crosshair">
                {!gameStarted && !gameOver && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10 flex-col">
                        <p className="text-onyx-primary font-bold mb-4 animate-pulse">FIREWALL DEFENSE</p>
                        <p className="text-xs text-onyx-dim mb-6 font-mono text-center">MOUSE TO AIM<br />CLICK TO SHOOT</p>
                        <button onClick={resetGame} className="px-6 py-2 border border-onyx-primary text-white hover:bg-onyx-primary hover:text-black transition-colors font-mono text-xs">
                            INITIALIZE
                        </button>
                    </div>
                )}

                {gameOver && (
                    <div className="absolute inset-0 flex items-center justify-center bg-red-900/80 z-10 flex-col backdrop-blur-sm">
                        <p className="text-white font-bold mb-2 tracking-widest text-2xl">BREACH DETECTED</p>
                        <p className="text-white/60 font-mono text-xs mb-6">FINAL SCORE: {score}</p>
                        <button onClick={resetGame} className="px-6 py-2 bg-white text-black hover:bg-red-500 hover:text-white transition-colors font-mono text-xs border-none">
                            REBOOT CORE
                        </button>
                    </div>
                )}

                <canvas
                    ref={canvasRef}
                    width={600}
                    height={600}
                    className="max-w-[80vw] max-h-[80vw] w-[500px] h-[500px]"
                    onMouseMove={handleMouseMove}
                    onClick={handleShoot}
                />
            </div>
        </div>
    );
}
