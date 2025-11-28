"use client";

import { motion } from 'framer-motion';

export function AnimatedHero() {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
      {/* Card 1 - Code Editor */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative group"
      >
        <motion.div
          className="relative w-full h-[320px] bg-gradient-to-br from-luxury-950 via-indigo-950 to-luxury-950 rounded-3xl overflow-hidden border border-premium-gold/20 p-6"
          whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Code Editor Mockup */}
          <div className="space-y-3">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <div className="w-3 h-3 rounded-full bg-green-400/70" />
            </div>

            {/* Code lines with typing animation */}
            {[
              { text: "const build = async () => {", color: "text-purple-400", delay: 0.5 },
              { text: "  await compile();", color: "text-blue-400", delay: 0.7 },
              { text: "  await optimize();", color: "text-green-400", delay: 0.9 },
              { text: "  return deploy();", color: "text-yellow-400", delay: 1.1 },
              { text: "}", color: "text-purple-400", delay: 1.3 }
            ].map((line, i) => (
              <motion.div
                key={i}
                className={`font-mono text-sm ${line.color}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: line.delay, duration: 0.5 }}
              >
                {line.text}
              </motion.div>
            ))}

            {/* Cursor blink */}
            <motion.div
              className="inline-block w-2 h-4 bg-premium-gold ml-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>

          {/* Bottom badge */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="inline-block px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-premium-gold/30">
              <span className="text-premium-gold font-mono text-xs font-bold">Clean Code</span>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 text-center">
          <h3 className="text-2xl font-black text-luxury-950 mb-2">Development</h3>
          <p className="text-sm text-luxury-600 font-light">Professional practices</p>
        </div>
      </motion.div>

      {/* Card 2 - Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative group"
      >
        <motion.div
          className="relative w-full h-[320px] bg-gradient-to-br from-white to-luxury-50/50 rounded-3xl overflow-hidden border border-luxury-200/60 p-6"
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(212,175,55,0.2)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Tech Stack Icons Grid */}
          <div className="grid grid-cols-3 gap-6 p-8">
            {[
              { label: "React", color: "#61DAFB" },
              { label: "Node", color: "#68A063" },
              { label: "TS", color: "#3178C6" },
              { label: "Next", color: "#000000" },
              { label: "Tail", color: "#06B6D4" },
              { label: "AWS", color: "#FF9900" }
            ].map((tech, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-lg text-white shadow-lg"
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.label.slice(0, 2)}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom badge */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="inline-block px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-luxury-200/60">
              <span className="text-luxury-950 font-mono text-xs font-bold">Modern Stack</span>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 text-center">
          <h3 className="text-2xl font-black text-luxury-950 mb-2">Technology</h3>
          <p className="text-sm text-luxury-600 font-light">Cutting-edge tools</p>
        </div>
      </motion.div>

      {/* Card 3 - AI/Analytics */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative group"
      >
        <motion.div
          className="relative w-full h-[320px] bg-gradient-to-br from-purple-950 via-luxury-950 to-indigo-950 rounded-3xl overflow-hidden border border-purple-500/30 p-6"
          whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(138,43,226,0.3)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Neural Network Animation */}
          <svg className="w-full h-full" viewBox="0 0 200 200">
            {/* Nodes */}
            {[
              { x: 40, y: 50, delay: 0.8 },
              { x: 40, y: 100, delay: 0.9 },
              { x: 40, y: 150, delay: 1.0 },
              { x: 100, y: 75, delay: 1.1 },
              { x: 100, y: 125, delay: 1.2 },
              { x: 160, y: 100, delay: 1.3 }
            ].map((node, i) => (
              <motion.g key={i}>
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="12"
                  fill="rgba(168,85,247,0.3)"
                  stroke="#A855F7"
                  strokeWidth="2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: node.delay, type: "spring" }}
                />
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="6"
                  fill="#A855F7"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    delay: node.delay + 0.5,
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.g>
            ))}

            {/* Connections */}
            {[
              { x1: 40, y1: 50, x2: 100, y2: 75 },
              { x1: 40, y1: 100, x2: 100, y2: 75 },
              { x1: 40, y1: 100, x2: 100, y2: 125 },
              { x1: 40, y1: 150, x2: 100, y2: 125 },
              { x1: 100, y1: 75, x2: 160, y2: 100 },
              { x1: 100, y1: 125, x2: 160, y2: 100 }
            ].map((line, i) => (
              <motion.line
                key={i}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="rgba(168,85,247,0.3)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
              />
            ))}
          </svg>

          {/* Bottom badge */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="inline-block px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-purple-500/30">
              <span className="text-purple-300 font-mono text-xs font-bold">AI-Powered</span>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 text-center">
          <h3 className="text-2xl font-black text-luxury-950 mb-2">Intelligence</h3>
          <p className="text-sm text-luxury-600 font-light">Smart automation</p>
        </div>
      </motion.div>
    </div>
  );
}
