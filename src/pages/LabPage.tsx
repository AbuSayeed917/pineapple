"use client";

import { useEffect, useRef, useState } from "react";

export function LabPage() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [config, setConfig] = useState({
        particleCount: 100,
        speed: 2,
        connectionDist: 100,
        gravity: 0,
        color: "#A855F7"
    });

    const requestRef = useRef<number>();

    // Particles
    const particles = useRef<{ x: number, y: number, vx: number, vy: number }[]>([]);

    useEffect(() => {
        // Init Particles
        particles.current = Array.from({ length: 300 }).map(() => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2
        }));
    }, []);

    const update = () => {
        if (!canvasRef.current) return;
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;
        const width = canvasRef.current.width;
        const height = canvasRef.current.height;

        ctx.clearRect(0, 0, width, height);

        // Update & Draw
        ctx.fillStyle = config.color;
        ctx.strokeStyle = config.color;

        const activeParticles = particles.current.slice(0, config.particleCount);

        activeParticles.forEach((p, i) => {
            p.x += p.vx * config.speed;
            p.y += p.vy * config.speed + config.gravity;

            // Bounce
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) {
                p.vy *= -1;
                // correction
                if (p.y > height) p.y = height;
                if (p.y < 0) p.y = 0;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();

            // Connections
            for (let j = i + 1; j < activeParticles.length; j++) {
                const p2 = activeParticles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < config.connectionDist) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.globalAlpha = 1 - (dist / config.connectionDist);
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        });

        requestRef.current = requestAnimationFrame(update);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(update);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [config]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="pt-24 md:pt-32 min-h-screen bg-onyx-black relative overflow-hidden flex flex-col md:block">
            {/* Controls Overlay */}
            <div className="relative md:absolute md:top-32 md:left-8 z-20 bg-black/80 backdrop-blur-md p-6 rounded-xl border border-white/10 w-full md:w-[300px] order-2 md:order-1 mt-4 md:mt-0 mx-4 md:mx-0 max-w-[calc(100%-2rem)]">
                <h2 className="text-xl font-bold text-white mb-6 font-display">SIMULATION LAB</h2>

                <div className="space-y-6">
                    <div>
                        <label className="text-xs font-mono text-onyx-dim block mb-2">PARTICLE COUNT: {config.particleCount}</label>
                        <input
                            type="range" min="10" max="300" value={config.particleCount}
                            onChange={(e) => setConfig(prev => ({ ...prev, particleCount: Number(e.target.value) }))}
                            className="w-full accent-onyx-primary"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-mono text-onyx-dim block mb-2">SPEED: {config.speed.toFixed(1)}x</label>
                        <input
                            type="range" min="0" max="10" step="0.1" value={config.speed}
                            onChange={(e) => setConfig(prev => ({ ...prev, speed: Number(e.target.value) }))}
                            className="w-full accent-onyx-primary"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-mono text-onyx-dim block mb-2">CONNECTIONS: {config.connectionDist}px</label>
                        <input
                            type="range" min="0" max="300" value={config.connectionDist}
                            onChange={(e) => setConfig(prev => ({ ...prev, connectionDist: Number(e.target.value) }))}
                            className="w-full accent-onyx-primary"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-mono text-onyx-dim block mb-2">GRAVITY: {config.gravity.toFixed(1)}</label>
                        <input
                            type="range" min="-2" max="2" step="0.1" value={config.gravity}
                            onChange={(e) => setConfig(prev => ({ ...prev, gravity: Number(e.target.value) }))}
                            className="w-full accent-onyx-primary"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-mono text-onyx-dim block mb-2">COLOR_HEX</label>
                        <input
                            type="color" value={config.color}
                            onChange={(e) => setConfig(prev => ({ ...prev, color: e.target.value }))}
                            className="w-full h-8 bg-transparent border border-white/20 rounded cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-10"
            />

            <div className="absolute bottom-10 left-0 w-full text-center pointer-events-none z-20">
                <p className="text-xs font-mono text-onyx-dim opacity-50">RENDER_ENGINE: CANVAS_2D // PHYSICS: EULER</p>
            </div>
        </div>
    );
}
