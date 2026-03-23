"use client";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NeuralSnake } from "../components/game/NeuralSnake";
import { CyberPong } from "../components/game/CyberPong";
import { PatternLock } from "../components/game/PatternLock";
import { CodeBreaker } from "../components/game/CodeBreaker";
import { HexDefense } from "../components/game/HexDefense";
import { DataRunner } from "../components/game/DataRunner";
import { PacketSwarm } from "../components/game/PacketSwarm";

type GameType = 'SNAKE' | 'PONG' | 'LOCK' | 'CODE' | 'HEX' | 'RUNNER' | 'SWARM';

export function SimulationPage() {
    const { gameId } = useParams();
    const navigate = useNavigate();
    const [activeGame, setActiveGame] = useState<GameType>('SNAKE');

    useEffect(() => {
        if (gameId) {
            const upperId = gameId.toUpperCase();
            if (['SNAKE', 'PONG', 'LOCK', 'CODE', 'HEX', 'RUNNER', 'SWARM'].includes(upperId)) {
                setActiveGame(upperId as GameType);
            }
        }
    }, [gameId]);

    const handleGameChange = (id: GameType) => {
        setActiveGame(id);
        navigate(`/simulation/${id}`);
    };

    return (
        <div className="pt-32 pb-32 px-4 min-h-screen bg-onyx-black flex flex-col items-center">
            <header className="max-w-7xl mx-auto mb-12 text-center">
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">NEURAL <span className="text-onyx-primary">ARCADE</span></h1>
                <p className="text-sm text-onyx-dim font-mono mb-8">Select a training module to begin enhancement.</p>

                {/* Game Selector */}
                <div className="flex flex-wrap justify-center gap-4 mb-8 max-w-4xl mx-auto">
                    {[
                        { id: 'SNAKE', label: 'NEURAL LINK' },
                        { id: 'PONG', label: 'REFLEX' },
                        { id: 'LOCK', label: 'MEMORY' },
                        { id: 'CODE', label: 'DECRYPTION' },
                        { id: 'HEX', label: 'FIREWALL' },
                        { id: 'RUNNER', label: 'VELOCITY' },
                        { id: 'SWARM', label: 'DEFENSE' }
                    ].map((g) => (
                        <button
                            key={g.id}
                            onClick={() => handleGameChange(g.id as GameType)}
                            className={`px-4 py-2 rounded-full font-mono text-xs tracking-widest border transition-all ${activeGame === g.id
                                ? 'bg-onyx-primary text-black border-onyx-primary'
                                : 'bg-transparent text-onyx-dim border-white/10 hover:border-white/30'
                                }`}
                        >
                            {g.label}
                        </button>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button onClick={() => navigate('/playground')} className="text-xs font-mono text-onyx-dim hover:text-white underline decoration-white/30 hover:decoration-white transition-all">
                        &larr; RETURN TO PLAYGROUND
                    </button>
                </div>
            </header>

            <div className="w-full max-w-4xl min-h-[500px] flex justify-center items-start px-2 md:px-0">
                <div className="w-full flex justify-center overflow-hidden">
                    {activeGame === 'SNAKE' && <NeuralSnake />}
                    {activeGame === 'PONG' && <CyberPong />}
                    {activeGame === 'LOCK' && <PatternLock />}
                    {activeGame === 'CODE' && <CodeBreaker />}
                    {activeGame === 'HEX' && <HexDefense />}
                    {activeGame === 'RUNNER' && <DataRunner />}
                    {activeGame === 'SWARM' && <PacketSwarm />}
                </div>
            </div>
        </div>
    );
}
