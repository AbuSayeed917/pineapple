"use client";

import { useEffect, useRef, useState } from "react";

export function PacketSwarm() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    const requestRef = useRef<number>();

    const state = useRef({
        player: { x: 300 },
        bullets: [] as { x: number, y: number }[],
        enemies: [] as { x: number, y: number, row: number }[],
        enemyDir: 1,
        enemySpeed: 1,
        enemyDrop: false,
        frame: 0,
        width: 600,
        height: 400
    });

    const resetGame = () => {
        // Init Enemies Grid
        const enemies = [];
        for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 8; c++) {
                enemies.push({ x: 50 + c * 60, y: 30 + r * 40, row: r });
            }
        }

        state.current = {
            player: { x: 300 },
            bullets: [],
            enemies,
            enemyDir: 1,
            enemySpeed: 1,
            enemyDrop: false,
            frame: 0,
            width: 600,
            height: 400
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

        // Bullets
        for (let i = s.bullets.length - 1; i >= 0; i--) {
            s.bullets[i].y -= 8;
            if (s.bullets[i].y < 0) s.bullets.splice(i, 1);
        }

        // Move Enemies
        let hitWall = false;
        s.enemies.forEach(e => {
            e.x += s.enemySpeed * s.enemyDir;
            if (e.x > s.width - 30 || e.x < 10) hitWall = true;
        });

        if (hitWall) {
            s.enemyDir *= -1;
            s.enemies.forEach(e => e.y += 20); // Drop down
            // Check bottom
            if (s.enemies.some(e => e.y > s.height - 40)) {
                setGameOver(true);
            }
        }

        // Collisions
        for (let i = s.bullets.length - 1; i >= 0; i--) {
            const b = s.bullets[i];
            let hit = false;
            for (let j = s.enemies.length - 1; j >= 0; j--) {
                const e = s.enemies[j];
                if (b.x > e.x && b.x < e.x + 30 && b.y > e.y && b.y < e.y + 20) {
                    s.enemies.splice(j, 1);
                    setScore(prev => prev + 10);
                    hit = true;
                    // Increase speed slightly
                    s.enemySpeed += 0.05;
                    break;
                }
            }
            if (hit) s.bullets.splice(i, 1);
        }

        if (s.enemies.length === 0) {
            setGameOver(true); // Technically win, but for arcade logic just "End" or reset level
            // Ideally respawn, but simplest is game over "CLEARED"
        }

        draw(ctx);
        if (!gameOver) requestRef.current = requestAnimationFrame(update);
    };

    const draw = (ctx: CanvasRenderingContext2D) => {
        const s = state.current;

        // Clear
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, s.width, s.height);

        // Player
        ctx.fillStyle = "#A855F7";
        ctx.beginPath();
        ctx.moveTo(s.player.x, s.height - 20);
        ctx.lineTo(s.player.x - 15, s.height);
        ctx.lineTo(s.player.x + 15, s.height);
        ctx.fill();

        // Bullets
        ctx.fillStyle = "#fff";
        s.bullets.forEach(b => ctx.fillRect(b.x - 2, b.y, 4, 8));

        // Enemies
        ctx.fillStyle = "#22c55e"; // Green invader style
        s.enemies.forEach(e => {
            ctx.fillRect(e.x, e.y, 30, 20);
            // Eyes
            ctx.fillStyle = "#000";
            ctx.fillRect(e.x + 5, e.y + 5, 4, 4);
            ctx.fillRect(e.x + 21, e.y + 5, 4, 4);
            ctx.fillStyle = "#22c55e";
        });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!canvasRef.current || gameOver) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        state.current.player.x = Math.max(20, Math.min(state.current.width - 20, x));
    };

    const handleClick = () => {
        if (!gameStarted || gameOver) return;
        state.current.bullets.push({
            x: state.current.player.x,
            y: state.current.height - 30
        });
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

            <div className="relative border border-white/20 bg-black cursor-crosshair">
                {!gameStarted && !gameOver && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10 flex-col">
                        <p className="text-onyx-primary font-bold mb-4 animate-pulse">PACKET DEFENSE</p>
                        <p className="text-xs text-onyx-dim mb-6 font-mono text-center">MOUSE TO MOVE<br />CLICK TO FIRE</p>
                        <button onClick={resetGame} className="px-6 py-2 border border-onyx-primary text-white hover:bg-onyx-primary hover:text-black transition-colors font-mono text-xs">
                            INITIATE
                        </button>
                    </div>
                )}

                {gameOver && (
                    <div className="absolute inset-0 flex items-center justify-center bg-red-900/80 z-10 flex-col backdrop-blur-sm">
                        <p className="text-white font-bold mb-2 tracking-widest text-2xl">
                            {state.current.enemies.length === 0 ? "SECTOR CLEARED" : "SYSTEM OVERRUN"}
                        </p>
                        <p className="text-white/60 font-mono text-xs mb-6">FINAL SCORE: {score}</p>
                        <button onClick={resetGame} className="px-6 py-2 bg-white text-black hover:bg-red-500 hover:text-white transition-colors font-mono text-xs border-none">
                            RESTART
                        </button>
                    </div>
                )}

                <canvas
                    ref={canvasRef}
                    width={600}
                    height={400}
                    className="w-[600px] h-[400px]"
                    onMouseMove={handleMouseMove}
                    onClick={handleClick}
                />
            </div>
        </div>
    );
}
