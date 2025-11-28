"use client";

import { motion } from "framer-motion";

export function AIBuildingAnimation() {
  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-luxury-950 via-purple-950 to-luxury-950 rounded-3xl overflow-hidden border border-premium-gold/30 shadow-[0_12px_48px_rgba(138,43,226,0.3)]">
      {/* Neural network background */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.circle
            key={i}
            cx={`${(i % 6) * 20 + 10}%`}
            cy={`${Math.floor(i / 6) * 20 + 10}%`}
            r="2"
            fill="#D4AF37"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1
            }}
          />
        ))}
        {[...Array(50)].map((_, i) => {
          const x1 = (i % 6) * 20 + 10;
          const y1 = Math.floor(i / 6) * 20 + 10;
          const x2 = ((i + 1) % 6) * 20 + 10;
          const y2 = Math.floor((i + 1) / 6) * 20 + 10;

          return (
            <motion.line
              key={`line-${i}`}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="#D4AF37"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.05
              }}
            />
          );
        })}
      </svg>

      {/* Center AI brain */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40">
        <motion.div
          className="relative w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {/* Brain core */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-premium-gold/30 backdrop-blur-sm border-2 border-premium-gold/50"
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                '0 0 30px rgba(212,175,55,0.3)',
                '0 0 60px rgba(212,175,55,0.6)',
                '0 0 30px rgba(212,175,55,0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Rotating rings */}
          {[0, 1, 2].map((ring) => (
            <motion.div
              key={ring}
              className="absolute inset-0"
              animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
              transition={{
                duration: 3 + ring,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div
                className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${
                    ring === 0 ? '#D4AF37' : ring === 1 ? '#8B7355' : '#E5AD73'
                  }, transparent)`
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Building blocks assembling */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const radius = 180;
          const x = 50 + Math.cos(angle) * radius / 4;
          const y = 50 + Math.sin(angle) * radius / 4;

          return (
            <motion.div
              key={i}
              className="absolute w-12 h-12 rounded-lg bg-gradient-to-br from-premium-gold/40 to-accent-500/40 border border-premium-gold/50 backdrop-blur-sm"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 1, 0],
                opacity: [0, 1, 1, 0],
                rotate: [0, 180, 360, 540]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-premium-gold text-xs font-bold">
                {['UI', 'API', 'DB', 'AI', 'ML', 'UX', 'QA', 'CI', 'CD', 'SEC', 'OPS', 'DEV'][i]}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Particle stream */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? '#D4AF37' : i % 3 === 1 ? '#E5AD73' : '#8B7355'
            }, transparent)`,
            left: '50%',
            top: '50%'
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 400],
            y: [0, (Math.random() - 0.5) * 400],
            opacity: [1, 0],
            scale: [1, 0]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Status text */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/40 backdrop-blur-md rounded-full border border-premium-gold/30"
        animate={{
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="w-2 h-2 rounded-full bg-premium-gold"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="text-premium-gold text-sm font-mono">Building Excellence...</span>
        </div>
      </motion.div>
    </div>
  );
}
