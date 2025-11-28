"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  { text: "import { slice } from '🍍'", color: "#f0d060" },
  { text: "import { config } from './app'", color: "#f0d060" },
  { text: "", color: "" },
  { text: "const project = {", color: "#d4af37" },
  { text: "  name: 'YourVision',", color: "#7ee787" },
  { text: "  type: 'premium',", color: "#7ee787" },
  { text: "  stack: ['React', 'Node']", color: "#f0d060" },
  { text: "}", color: "#d4af37" },
  { text: "", color: "" },
  { text: "await slice.build(project)", color: "#7ee787" },
  { text: "console.log('Ready! 🚀')", color: "#888" },
];

const terminalCommand = "$ npx pineapple";

export function HeroIllustration() {
  const [currentLine, setCurrentLine] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const [phase, setPhase] = useState<"typing" | "processing" | "complete">("typing");
  const [progress, setProgress] = useState(0);
  const [terminalChars, setTerminalChars] = useState(0);
  const [spinnerAngle, setSpinnerAngle] = useState(0);

  // Terminal command typing animation
  useEffect(() => {
    if (terminalChars < terminalCommand.length) {
      const timeout = setTimeout(() => {
        setTerminalChars(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [terminalChars]);

  // Spinner animation during typing phase
  useEffect(() => {
    if (phase === "typing") {
      const interval = setInterval(() => {
        setSpinnerAngle(prev => (prev + 45) % 360);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [phase]);

  // Typing animation
  useEffect(() => {
    if (phase !== "typing") return;

    if (currentLine >= codeLines.length) {
      setTimeout(() => setPhase("processing"), 500);
      return;
    }

    const line = codeLines[currentLine];
    if (line.text === "") {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setVisibleChars(0);
      }, 100);
      return () => clearTimeout(timeout);
    }

    if (visibleChars < line.text.length) {
      const timeout = setTimeout(() => {
        setVisibleChars(prev => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setVisibleChars(0);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, visibleChars, phase]);

  // Processing animation
  useEffect(() => {
    if (phase !== "processing") return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase("complete"), 300);
          return 100;
        }
        return prev + 4;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [phase]);

  // Reset cycle - show complete phase for 5 seconds
  useEffect(() => {
    if (phase !== "complete") return;

    const timeout = setTimeout(() => {
      setPhase("typing");
      setCurrentLine(0);
      setVisibleChars(0);
      setProgress(0);
      setTerminalChars(0);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [phase]);

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
      <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#f0d060" />
          </linearGradient>
        </defs>

        {/* Main Monitor */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Monitor stand */}
          <rect x="160" y="290" width="80" height="35" rx="4" fill="#1a1a1a" />
          <rect x="140" y="315" width="120" height="12" rx="6" fill="#1a1a1a" />

          {/* Monitor frame */}
          <rect x="50" y="50" width="300" height="250" rx="12" fill="#0d0d0d" />
          <rect x="50" y="50" width="300" height="250" rx="12" fill="none" stroke="url(#goldGrad)" strokeWidth="2" opacity="0.4" />

          {/* Screen */}
          <rect x="60" y="60" width="280" height="220" rx="8" fill="#111" />

          {/* Window chrome */}
          <rect x="65" y="65" width="270" height="24" rx="4" fill="#1a1a1a" />
          <circle cx="80" cy="77" r="5" fill="#ff5f56" />
          <circle cx="95" cy="77" r="5" fill="#ffbd2e" />
          <circle cx="110" cy="77" r="5" fill="#27c93f" />
          <text x="125" y="81" fill="#d4af37" fontSize="10" fontFamily="Georgia, serif" fontStyle="italic">
            🍍 Pineapple
          </text>

          {/* Phase: Typing */}
          <AnimatePresence mode="wait">
            {phase === "typing" && (
              <motion.g
                key="typing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {codeLines.map((line, i) => {
                  const displayText = i < currentLine
                    ? line.text
                    : i === currentLine
                      ? line.text.substring(0, visibleChars)
                      : "";
                  return (
                    <text
                      key={i}
                      x="75"
                      y={105 + i * 16}
                      fill={line.color || "#888"}
                      fontSize="11"
                      fontFamily="'SF Mono', Consolas, monospace"
                    >
                      {displayText}
                    </text>
                  );
                })}
                {/* Cursor */}
                {currentLine < codeLines.length && (
                  <rect
                    x={75 + visibleChars * 6.6}
                    y={93 + currentLine * 16}
                    width="2"
                    height="13"
                    fill="#d4af37"
                    className="animate-pulse"
                  />
                )}
              </motion.g>
            )}

            {/* Phase: Processing */}
            {phase === "processing" && (
              <motion.g
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Spinning pineapple */}
                <motion.text
                  x="200"
                  y="160"
                  fontSize="48"
                  textAnchor="middle"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "200px 145px" }}
                >
                  🍍
                </motion.text>

                {/* Processing text */}
                <text
                  x="200"
                  y="200"
                  fill="#d4af37"
                  fontSize="14"
                  fontFamily="Georgia, serif"
                  fontStyle="italic"
                  textAnchor="middle"
                >
                  Processing...
                </text>

                {/* Progress bar background */}
                <rect x="100" y="220" width="200" height="12" rx="6" fill="#1a1a1a" />

                {/* Progress bar fill */}
                <motion.rect
                  x="100"
                  y="220"
                  height="12"
                  rx="6"
                  fill="url(#goldGrad)"
                  initial={{ width: 0 }}
                  animate={{ width: progress * 2 }}
                />

                {/* Progress percentage */}
                <text
                  x="200"
                  y="252"
                  fill="#888"
                  fontSize="12"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  {progress}%
                </text>
              </motion.g>
            )}

            {/* Phase: Complete - Pineapple Made! */}
            {/*
              PC Screen exact dimensions:
              - Screen: x=60, y=60, width=280, height=220 (ends at x=340, y=280)
              - Window chrome: y=65 to y=89 (height 24)
              - Content area: x=60-340, y=89-280
              - Center X = 200, Center Y = 184.5

              Layout (centered vertically in content area):
              - Pineapple: y=105-175 (70px emoji)
              - Text: y=195
              - Checkmark: y=225
            */}
            {phase === "complete" && (
              <motion.g
                key="complete"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated pineapple text - centered in screen content area (y=89-280, center=184) */}
                <motion.text
                  x="200"
                  y="184"
                  fill="#d4af37"
                  fontSize="22"
                  fontFamily="'Poppins', 'Montserrat', 'Quicksand', sans-serif"
                  fontWeight="800"
                  textAnchor="middle"
                  letterSpacing="-0.05em"
                  style={{ textTransform: "lowercase" }}
                >
                  {"pineapple".split("").map((letter, i) => (
                    <motion.tspan
                      key={i}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.15, type: "spring", stiffness: 500, damping: 15 }}
                    >
                      {letter}
                    </motion.tspan>
                  ))}
                </motion.text>

                {/* Checkmark badge - appears after all letters */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
                >
                  <circle cx="200" cy="220" r="16" fill="#7ee787" />
                  <path
                    d="M191 220 L197 226 L209 214"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </motion.g>

              </motion.g>
            )}
          </AnimatePresence>
        </motion.g>

        {/* Phone */}
        <motion.g
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <rect x="320" y="120" width="60" height="110" rx="10" fill="#0d0d0d" />
          <rect x="320" y="120" width="60" height="110" rx="10" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" opacity="0.4" />
          <rect x="325" y="130" width="50" height="90" rx="6" fill="#111" />
          <rect x="340" y="133" width="20" height="4" rx="2" fill="#222" />

          {/* Phone content changes with phase */}
          <AnimatePresence mode="wait">
            {phase === "typing" && (
              <motion.g key="phone-typing" exit={{ opacity: 0 }}>
                {/* Mini code lines on phone - synced with PC typing */}
                {[
                  { text: "import", color: "#f0d060", line: 0 },
                  { text: "import", color: "#f0d060", line: 1 },
                  { text: "const {", color: "#d4af37", line: 3 },
                  { text: "  name", color: "#7ee787", line: 4 },
                  { text: "  stack", color: "#f0d060", line: 6 },
                  { text: "}", color: "#d4af37", line: 7 },
                  { text: "build()", color: "#7ee787", line: 9 },
                ].map((item, i) => {
                  // Calculate how much of this line to show
                  let displayText = "";
                  if (currentLine > item.line) {
                    displayText = item.text;
                  } else if (currentLine === item.line) {
                    const charsToShow = Math.min(visibleChars, item.text.length);
                    displayText = item.text.substring(0, charsToShow);
                  }
                  return (
                    <text
                      key={i}
                      x="328"
                      y={145 + i * 9}
                      fill={item.color}
                      fontSize="5"
                      fontFamily="monospace"
                    >
                      {displayText}
                    </text>
                  );
                })}
                {/* Mini cursor - synced position */}
                {currentLine < codeLines.length && (
                  <rect
                    x={328 + Math.min(visibleChars, 7) * 3}
                    y={139 + Math.min(currentLine, 6) * 9}
                    width="1"
                    height="7"
                    fill="#d4af37"
                    className="animate-pulse"
                  />
                )}
              </motion.g>
            )}
            {phase === "processing" && (
              <motion.g key="phone-processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <motion.text
                  x="350"
                  y="170"
                  fontSize="20"
                  textAnchor="middle"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "350px 163px" }}
                >
                  ⚙️
                </motion.text>
                <rect x="332" y="185" width="36" height="5" rx="2" fill="#1a1a1a" />
                <motion.rect
                  x="332"
                  y="185"
                  height="5"
                  rx="2"
                  fill="#d4af37"
                  animate={{ width: progress * 0.36 }}
                />
                <text x="350" y="202" fill="#888" fontSize="6" textAnchor="middle" fontFamily="monospace">
                  {progress}%
                </text>
              </motion.g>
            )}
            {phase === "complete" && (
              <motion.g key="phone-complete" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
                <text x="350" y="170" fill="#7ee787" fontSize="10" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="bold">Done!</text>
                <circle cx="350" cy="190" r="10" fill="#7ee787" />
                <path
                  d="M345 190 L348 193 L356 185"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </motion.g>
            )}
          </AnimatePresence>
        </motion.g>

        {/* Terminal */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <rect x="10" y="320" width="110" height="65" rx="8" fill="#0d0d0d" />
          <rect x="10" y="320" width="110" height="65" rx="8" fill="none" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.3" />
          <rect x="10" y="320" width="110" height="16" rx="8" fill="#1a1a1a" />
          <circle cx="22" cy="328" r="3" fill="#ff5f56" />
          <circle cx="31" cy="328" r="3" fill="#ffbd2e" />
          <circle cx="40" cy="328" r="3" fill="#27c93f" />

          {/* Terminal command with typing animation */}
          <text x="18" y="350" fill="#7ee787" fontSize="8" fontFamily="monospace">
            {terminalCommand.substring(0, terminalChars)}
          </text>
          {/* Cursor for terminal command */}
          {terminalChars < terminalCommand.length && (
            <rect
              x={18 + terminalChars * 4.8}
              y={341}
              width="5"
              height="10"
              fill="#7ee787"
              className="animate-pulse"
            />
          )}

          <AnimatePresence mode="wait">
            {phase === "typing" && terminalChars >= terminalCommand.length && (
              <motion.g key="term-typing" exit={{ opacity: 0 }}>
                {/* Loading spinner */}
                <g transform={`translate(22, 365) rotate(${spinnerAngle}, 0, 0)`}>
                  <circle cx="0" cy="-4" r="1.5" fill="#d4af37" />
                  <circle cx="2.8" cy="-2.8" r="1.2" fill="#d4af37" opacity="0.8" />
                  <circle cx="4" cy="0" r="1" fill="#d4af37" opacity="0.6" />
                  <circle cx="2.8" cy="2.8" r="0.8" fill="#d4af37" opacity="0.4" />
                </g>
                <text x="32" y="368" fill="#888" fontSize="7" fontFamily="monospace">
                  Writing code...
                </text>
              </motion.g>
            )}
            {phase === "processing" && (
              <motion.g key="term-processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {/* Loading spinner for processing */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "22px 365px" }}
                >
                  <circle cx="22" cy="361" r="1.5" fill="#d4af37" />
                  <circle cx="24.8" cy="362.2" r="1.2" fill="#d4af37" opacity="0.8" />
                  <circle cx="26" cy="365" r="1" fill="#d4af37" opacity="0.6" />
                  <circle cx="24.8" cy="367.8" r="0.8" fill="#d4af37" opacity="0.4" />
                </motion.g>
                <text x="32" y="368" fill="#d4af37" fontSize="7" fontFamily="monospace">
                  Building... {progress}%
                </text>
              </motion.g>
            )}
            {phase === "complete" && (
              <motion.g key="term-complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <motion.text
                  x="18"
                  y="368"
                  fill="#7ee787"
                  fontSize="7"
                  fontFamily="monospace"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ✓ Success!
                </motion.text>
              </motion.g>
            )}
          </AnimatePresence>
        </motion.g>

      </svg>
    </div>
  );
}
