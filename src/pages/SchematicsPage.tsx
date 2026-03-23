"use client";

import { useEffect, useRef, useState } from "react";

type Point3D = { x: number, y: number, z: number };

export function SchematicsPage() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [config, setConfig] = useState({
        scale: 1,
        explode: 0,
        autoRotate: true,
        shape: "CUBE" as "CUBE" | "PYRAMID"
    });

    const requestRef = useRef<number>();

    // Geometry
    const pointsRef = useRef<Point3D[]>([]);

    useEffect(() => {
        // Init Shape
        const s = 100;
        if (config.shape === "CUBE") {
            pointsRef.current = [
                { x: -s, y: -s, z: -s }, { x: s, y: -s, z: -s }, { x: s, y: s, z: -s }, { x: -s, y: s, z: -s },
                { x: -s, y: -s, z: s }, { x: s, y: -s, z: s }, { x: s, y: s, z: s }, { x: -s, y: s, z: s }
            ];
        } else {
            // Pyramid
            pointsRef.current = [
                { x: 0, y: -s, z: 0 }, // Top
                { x: -s, y: s, z: -s }, { x: s, y: s, z: -s }, { x: s, y: s, z: s }, { x: -s, y: s, z: s }
            ];
        }
    }, [config.shape]);

    const project = (p: Point3D, center: { x: number, y: number }) => {
        const fov = 300;
        const scale = (fov + config.explode * 2) / (fov + p.z + 400); // Simple projection
        return {
            x: p.x * scale * config.scale + center.x,
            y: p.y * scale * config.scale + center.y,
            z: p.z // Keep Z for sorting if needed
        };
    };

    const rotate = (p: Point3D, rx: number, ry: number) => {
        // Rotate Y
        let x = p.x * Math.cos(ry) - p.z * Math.sin(ry);
        let z = p.x * Math.sin(ry) + p.z * Math.cos(ry);
        let y = p.y;

        // Rotate X
        let y2 = y * Math.cos(rx) - z * Math.sin(rx);
        let z2 = y * Math.sin(rx) + z * Math.cos(rx);

        // Explode
        const explodeFactor = 1 + (config.explode / 100);

        return { x: x * explodeFactor, y: y2 * explodeFactor, z: z2 * explodeFactor };
    };

    const draw = () => {
        if (!canvasRef.current || !pointsRef.current.length) return;
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        const w = canvasRef.current.width;
        const h = canvasRef.current.height;
        const center = { x: w / 2, y: h / 2 };

        // Auto Rotate
        if (config.autoRotate) {
            setRotation(prev => ({ x: prev.x + 0.01, y: prev.y + 0.01 }));
        }

        ctx.clearRect(0, 0, w, h);

        // Transform Points
        const transformed = pointsRef.current.map(p => {
            const rotated = rotate(p, rotation.x, rotation.y);
            return project(rotated, center);
        });

        // Draw Edges
        ctx.strokeStyle = "#A855F7";
        ctx.lineWidth = 2;
        ctx.beginPath();

        if (config.shape === "CUBE") {
            const edges = [
                [0, 1], [1, 2], [2, 3], [3, 0], // Front
                [4, 5], [5, 6], [6, 7], [7, 4], // Back
                [0, 4], [1, 5], [2, 6], [3, 7]  // Connectors
            ];
            edges.forEach(([i, j]) => {
                ctx.moveTo(transformed[i].x, transformed[i].y);
                ctx.lineTo(transformed[j].x, transformed[j].y);
            });
        } else {
            const edges = [
                [0, 1], [0, 2], [0, 3], [0, 4], // Sides
                [1, 2], [2, 3], [3, 4], [4, 1]  // Base
            ];
            edges.forEach(([i, j]) => {
                ctx.moveTo(transformed[i].x, transformed[i].y);
                ctx.lineTo(transformed[j].x, transformed[j].y);
            });
        }
        ctx.stroke();

        // Draw Vertices
        ctx.fillStyle = "#fff";
        transformed.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
            ctx.fill();
        });

        if (config.autoRotate) {
            requestRef.current = requestAnimationFrame(draw);
        }
    };

    // Manual Loop for Drag? No, just rely on useEffect for manual + RAF for auto
    useEffect(() => {
        if (config.autoRotate) {
            requestRef.current = requestAnimationFrame(draw);
        } else {
            draw();
        }
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [rotation, config]); // Re-draw on state change

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                draw();
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (config.autoRotate) return;
        // Simple drag logic could go here, for now simpler just sliders
    };

    return (
        <div className="pt-24 md:pt-32 min-h-screen bg-onyx-black relative overflow-hidden flex flex-col md:block">
            {/* Controls Overlay */}
            <div className="relative md:absolute md:top-32 md:right-8 z-20 bg-black/80 backdrop-blur-md p-6 rounded-xl border border-white/10 w-full md:w-[300px] order-2 md:order-1 mt-4 md:mt-0 mx-4 md:mx-0 max-w-[calc(100%-2rem)]">
                <h2 className="text-xl font-bold text-white mb-6 font-display">SCHEMATICS</h2>

                <div className="space-y-6">
                    <div>
                        <label className="text-xs font-mono text-onyx-dim block mb-2">MODEL</label>
                        <div className="flex gap-2">
                            <button onClick={() => setConfig(p => ({ ...p, shape: "CUBE" }))} className={`flex-1 py-2 text-xs font-mono border ${config.shape === "CUBE" ? 'bg-onyx-primary text-black' : 'border-white/20 text-white'}`}>CUBE</button>
                            <button onClick={() => setConfig(p => ({ ...p, shape: "PYRAMID" }))} className={`flex-1 py-2 text-xs font-mono border ${config.shape === "PYRAMID" ? 'bg-onyx-primary text-black' : 'border-white/20 text-white'}`}>PYRAMID</button>
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-mono text-onyx-dim block mb-2">ROTATION</label>
                        <div className="flex gap-2 items-center">
                            <span className="text-xs text-white">AUTO</span>
                            <input
                                type="checkbox" checked={config.autoRotate}
                                onChange={(e) => setConfig(prev => ({ ...prev, autoRotate: e.target.checked }))}
                                className="toggle"
                            />
                        </div>
                        {!config.autoRotate && (
                            <div className="mt-2 space-y-2">
                                <input type="range" min="0" max="6.28" step="0.1" value={rotation.y} onChange={(e) => setRotation(p => ({ ...p, y: Number(e.target.value) }))} className="w-full" />
                                <input type="range" min="0" max="6.28" step="0.1" value={rotation.x} onChange={(e) => setRotation(p => ({ ...p, x: Number(e.target.value) }))} className="w-full" />
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="text-xs font-mono text-onyx-dim block mb-2">EXPLODE_MESH: {config.explode}%</label>
                        <input
                            type="range" min="0" max="100" value={config.explode}
                            onChange={(e) => setConfig(prev => ({ ...prev, explode: Number(e.target.value) }))}
                            className="w-full accent-onyx-primary"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-mono text-onyx-dim block mb-2">SCALE: {config.scale.toFixed(1)}x</label>
                        <input
                            type="range" min="0.5" max="3" step="0.1" value={config.scale}
                            onChange={(e) => setConfig(prev => ({ ...prev, scale: Number(e.target.value) }))}
                            className="w-full accent-onyx-primary"
                        />
                    </div>
                </div>
            </div>

            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-10"
            />

            <div className="absolute bottom-10 left-0 w-full text-center pointer-events-none z-20">
                <p className="text-xs font-mono text-onyx-dim opacity-50">PROJECTION: ORTHOGRAPHIC // MESH: WIREFRAME</p>
            </div>
        </div>
    );
}
