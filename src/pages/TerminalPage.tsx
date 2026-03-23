"use client";

import { useState, useEffect, useRef } from "react";

type Line = { type: 'CMD' | 'OUT' | 'ERR'; text: string };

export function TerminalPage() {
    const [history, setHistory] = useState<Line[]>([
        { type: 'OUT', text: 'Welcome to ONYX OS v4.2.0' },
        { type: 'OUT', text: 'Type "help" for available commands.' }
    ]);
    const [input, setInput] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const commands: Record<string, (args: string[]) => string | string[]> = {
        help: () => [
            "AVAILABLE COMMANDS:",
            "  help     - Show this message",
            "  clear    - Clear terminal",
            "  status   - Check system status",
            "  whoami   - Current user identity",
            "  ls       - List directory",
            "  contact  - Get communication channels",
            "  date     - System time"
        ],
        clear: () => "CLEAR",
        status: () => "SYSTEM ONLINE. ALL SYSTEMS NOMINAL. UPTIME: 99.999%",
        whoami: () => "GUEST_USER_734. ACCESS LEVEL: RESTRICTED.",
        ls: () => [
            "DIR: /root",
            "----",
            "projects/",
            "mainframe.exe",
            "secrets.txt (ENCRYPTED)",
            "readme.md"
        ],
        contact: () => "EMAIL: hello@onyxprotocol.com | FREQ: 442.8MHz",
        date: () => new Date().toString(),
        "sudo": () => "PERMISSION DENIED. INCIDENT REPORTED.",
        "hack": () => "ACCESS DENIED. TRACING IP ADDRESS..."
    };

    const handleCommand = (cmdStr: string) => {
        const trimmed = cmdStr.trim();
        if (!trimmed) return;

        // Add Command to history
        const newLines: Line[] = [{ type: 'CMD', text: trimmed }];

        const [cmd, ...args] = trimmed.toLowerCase().split(" ");

        if (cmd === "clear") {
            setHistory([]);
            return;
        }

        if (commands[cmd]) {
            const output = commands[cmd](args);
            if (Array.isArray(output)) {
                output.forEach(line => newLines.push({ type: 'OUT', text: line }));
            } else {
                newLines.push({ type: 'OUT', text: output });
            }
        } else {
            newLines.push({ type: 'ERR', text: `Command not found: ${cmd}` });
        }

        setHistory(prev => [...prev, ...newLines]);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleCommand(input);
            setInput("");
        }
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    // Keep focus
    useEffect(() => {
        const focusInput = () => inputRef.current?.focus();
        document.addEventListener("click", focusInput);
        return () => document.removeEventListener("click", focusInput);
    }, []);

    return (
        <div className="pt-32 pb-32 px-4 min-h-screen bg-black font-mono text-sm md:text-base">
            <div className="max-w-4xl mx-auto border border-white/20 rounded-lg p-6 min-h-[60vh] bg-black shadow-[0_0_50px_rgba(0,255,0,0.1)] relative overflow-hidden">
                {/* Scanline */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]"></div>

                <div className="relative z-20 space-y-2">
                    {history.map((line, i) => (
                        <div key={i} className={`${line.type === 'CMD' ? 'text-white mt-4' :
                                line.type === 'ERR' ? 'text-red-500' : 'text-green-500'
                            }`}>
                            {line.type === 'CMD' && <span className="text-gray-500 mr-2">$</span>}
                            {line.text}
                        </div>
                    ))}

                    <div className="flex items-center text-white mt-4">
                        <span className="text-green-500 mr-2">➜</span>
                        <span className="text-blue-400 mr-2">~</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="bg-transparent outline-none flex-1 font-mono text-white caret-green-500"
                            autoFocus
                        />
                    </div>
                    <div ref={bottomRef} />
                </div>
            </div>
        </div>
    );
}
