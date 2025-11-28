"use client";

import { motion } from "framer-motion";

export function CodeAnimation() {
  const codeLines = [
    'const buildApp = async () => {',
    '  const design = await createUI();',
    '  const backend = await setupAPI();',
    '  const deploy = await launch();',
    '  return excellence;',
    '};'
  ];

  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-luxury-950 via-luxury-900 to-luxury-950 rounded-3xl overflow-hidden border border-premium-gold/20 shadow-[0_12px_48px_rgba(0,0,0,0.3)]">
      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px']
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Code editor header */}
      <div className="relative z-10 flex items-center gap-2 px-6 py-4 border-b border-white/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <span className="ml-4 text-xs text-luxury-300 font-mono">app.ts</span>
      </div>

      {/* Typing code animation */}
      <div className="relative z-10 p-6 font-mono text-sm">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.4, duration: 0.5 }}
          >
            <span className="text-luxury-500 select-none">{i + 1}</span>
            <div className="flex-1">
              {line.split('').map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className={
                    char === 'const' || char === 'async' || char === 'await' || char === 'return'
                      ? 'text-purple-400'
                      : char === '(' || char === ')' || char === '{' || char === '}'
                      ? 'text-yellow-400'
                      : 'text-luxury-200'
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: i * 0.4 + charIndex * 0.02,
                    duration: 0.1
                  }}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                className="inline-block w-2 h-4 bg-premium-gold ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  delay: i * 0.4 + line.length * 0.02,
                  duration: 0.8,
                  repeat: Infinity
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-premium-gold rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
}
