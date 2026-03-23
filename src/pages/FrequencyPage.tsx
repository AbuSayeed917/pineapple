"use client";

import { useEffect, useRef, useState } from "react";

export function FrequencyPage() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [playing, setPlaying] = useState(false);
    const [config, setConfig] = useState({
        freq: 440,
        type: "sine" as OscillatorType,
        vol: 0.5
    });

    // Audio Context Refs
    const audioCtx = useRef<AudioContext | null>(null);
    const osc = useRef<OscillatorNode | null>(null);
    const gain = useRef<GainNode | null>(null);
    const analyser = useRef<AnalyserNode | null>(null);
    const reqRef = useRef<number>();

    const initAudio = () => {
        if (!audioCtx.current) {
            audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
    };

    const togglePlay = () => {
        initAudio();
        if (!audioCtx.current) return;

        if (playing) {
            // Stop
            osc.current?.stop();
            osc.current?.disconnect();
            setPlaying(false);
        } else {
            // Start
            osc.current = audioCtx.current.createOscillator();
            gain.current = audioCtx.current.createGain();
            analyser.current = audioCtx.current.createAnalyser();

            osc.current.type = config.type;
            osc.current.frequency.setValueAtTime(config.freq, audioCtx.current.currentTime);
            gain.current.gain.setValueAtTime(config.vol, audioCtx.current.currentTime);

            osc.current.connect(gain.current);
            gain.current.connect(analyser.current);
            analyser.current.connect(audioCtx.current.destination);

            osc.current.start();
            setPlaying(true);
            draw();
        }
    };

    // Update Params live
    useEffect(() => {
        if (osc.current && audioCtx.current) {
            osc.current.frequency.setTargetAtTime(config.freq, audioCtx.current.currentTime, 0.1);
            osc.current.type = config.type;
        }
        if (gain.current && audioCtx.current) {
            gain.current.gain.setTargetAtTime(config.vol, audioCtx.current.currentTime, 0.1);
        }
    }, [config]);

    const draw = () => {
        if (!canvasRef.current || !analyser.current) return;
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        const w = canvasRef.current.width;
        const h = canvasRef.current.height;
        const bufferLength = analyser.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        analyser.current.getByteTimeDomainData(dataArray);

        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, w, h);

        ctx.lineWidth = 2;
        ctx.strokeStyle = "#A855F7";
        ctx.beginPath();

        const sliceWidth = w * 1.0 / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128.0;
            const y = v * h / 2;

            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);

            x += sliceWidth;
        }

        ctx.lineTo(w, h / 2);
        ctx.stroke();

        if (playing) reqRef.current = requestAnimationFrame(draw);
    };

    // Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Draw a straight line if not playing
                if (!playing) {
                    const ctx = canvasRef.current.getContext("2d");
                    if (ctx) {
                        ctx.fillStyle = "#000";
                        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
                        ctx.beginPath();
                        ctx.moveTo(0, window.innerHeight / 2);
                        ctx.lineTo(window.innerWidth, window.innerHeight / 2);
                        ctx.strokeStyle = "#333";
                        ctx.stroke();
                    }
                }
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [playing]);

    // Cleanup
    useEffect(() => {
        return () => {
            if (osc.current) osc.current.stop();
            if (reqRef.current) cancelAnimationFrame(reqRef.current);
        };
    }, []);

    return (
        <div className="pt-32 min-h-screen bg-onyx-black relative overflow-hidden">
            {/* Controls Overlay */}
            <div className="absolute top-32 left-4 md:left-8 z-20 bg-black/80 backdrop-blur-md p-6 rounded-xl border border-white/10 w-[300px]">
                <h2 className="text-xl font-bold text-white mb-6 font-display">FREQUENCY SYNTH</h2>

                <div className="space-y-6">
                    <button
                        onClick={togglePlay}
                        className={`w-full py-4 font-bold font-mono tracking-widest text-lg border transition-all ${playing ? 'bg-red-500/20 border-red-500 text-red-500 hover:bg-red-500/40' : 'bg-onyx-primary/20 border-onyx-primary text-onyx-primary hover:bg-onyx-primary/40'}`}
                    >
                        {playing ? "STOP SIGNAL" : "INITIATE WAVE"}
                    </button>

                    <div>
                        <label className="text-xs font-mono text-onyx-dim block mb-2">WAVEFORM</label>
                        <div className="flex gap-1">
                            {['sine', 'square', 'sawtooth', 'triangle'].map(t => (
                                <button
                                    key={t}
                                    onClick={() => setConfig(p => ({ ...p, type: t as any }))}
                                    className={`flex-1 py-1 text-[10px] font-mono border uppercase ${config.type === t ? 'bg-white text-black' : 'border-white/20 text-white'}`}
                                >
                                    {t.slice(0, 3)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-mono text-onyx-dim block mb-2">FREQUENCY: {config.freq}Hz</label>
                        <input
                            type="range" min="20" max="2000" value={config.freq}
                            onChange={(e) => setConfig(prev => ({ ...prev, freq: Number(e.target.value) }))}
                            className="w-full accent-onyx-primary"
                        />
                    </div>

                    <div>
                        <label className="text-xs font-mono text-onyx-dim block mb-2">AMPLITUDE: {(config.vol * 100).toFixed(0)}%</label>
                        <input
                            type="range" min="0" max="1" step="0.01" value={config.vol}
                            onChange={(e) => setConfig(prev => ({ ...prev, vol: Number(e.target.value) }))}
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
                <p className="text-xs font-mono text-onyx-dim opacity-50">AUDIO_ENGINE: WEB_AUDIO_API.OSC // VISUAL: OSCILLOSCOPE</p>
            </div>
        </div>
    );
}
