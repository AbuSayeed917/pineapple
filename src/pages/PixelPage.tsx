"use client";

import { useState } from "react";

const GRID_SIZE = 20;

export function PixelPage() {
    const [grid, setGrid] = useState<string[]>(Array(GRID_SIZE * GRID_SIZE).fill(""));
    const [selectedColor, setSelectedColor] = useState<string>("#A855F7");
    const [isDrawing, setIsDrawing] = useState(false);

    const colors = [
        "#A855F7", // Purple
        "#22c55e", // Green
        "#3b82f6", // Blue
        "#ef4444", // Red
        "#eab308", // Yellow
        "#ffffff", // White
        ""         // Eraser
    ];

    const handleCellAction = (index: number) => {
        setGrid(prev => {
            const newGrid = [...prev];
            newGrid[index] = selectedColor;
            return newGrid;
        });
    };

    const handleMouseEnter = (index: number) => {
        if (isDrawing) {
            handleCellAction(index);
        }
    };

    const clearGrid = () => {
        setGrid(Array(GRID_SIZE * GRID_SIZE).fill(""));
    };

    return (
        <div className="pt-32 pb-32 min-h-screen bg-onyx-black flex flex-col items-center">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-display font-bold mb-2">PIXEL <span className="text-onyx-primary">FORGE</span></h1>
                <p className="text-onyx-dim font-mono text-sm">SELECT A COLOR // DRAW YOUR DESIGN</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start w-full max-w-4xl px-4 justify-center">
                {/* Tools */}
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-row md:flex-col gap-4 overflow-x-auto max-w-full">
                    {colors.map((c, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedColor(c)}
                            className={`w-10 h-10 flex-shrink-0 rounded-full border-2 transition-transform hover:scale-110 ${selectedColor === c ? 'border-white scale-110' : 'border-transparent'}`}
                            style={{ backgroundColor: c || '#000', borderStyle: c ? 'solid' : 'dashed', borderColor: c ? (selectedColor === c ? 'white' : 'transparent') : '#333' }}
                        >
                            {!c && <span className="text-[10px] text-gray-500 font-mono">X</span>}
                        </button>
                    ))}

                    <div className="w-px h-10 md:w-full md:h-px bg-white/10 my-0 md:my-2"></div>

                    <button onClick={clearGrid} className="w-10 h-10 flex-shrink-0 rounded-full border border-red-500/50 text-red-500 flex items-center justify-center hover:bg-red-500/20">
                        <span className="text-[10px] font-bold">CLR</span>
                    </button>
                </div>

                {/* Canvas */}
                <div
                    className="bg-black border border-white/20 p-1 cursor-crosshair touch-none select-none relative"
                    onMouseDown={() => setIsDrawing(true)}
                    onMouseUp={() => setIsDrawing(false)}
                    onMouseLeave={() => setIsDrawing(false)}
                    onTouchStart={() => setIsDrawing(true)}
                    onTouchEnd={() => setIsDrawing(false)}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                        gap: '1px',
                        width: 'min(90vw, 500px)',
                        height: 'min(90vw, 500px)'
                    }}
                >
                    {grid.map((cellColor, i) => (
                        <div
                            key={i}
                            onMouseDown={() => handleCellAction(i)}
                            onMouseEnter={() => handleMouseEnter(i)}
                            className="w-full h-full transition-colors duration-200"
                            style={{ backgroundColor: cellColor || '#111' }}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-8 text-onyx-dim font-mono text-xs">
                <p>TIP: CLICK AND DRAG TO PAINT</p>
            </div>
        </div>
    );
}
