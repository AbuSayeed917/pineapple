"use client";

import { motion } from "framer-motion";

export function LogoAnimation() {
  const logos = [
    { name: "React", size: 60, color: "#61DAFB" },
    { name: "Node", size: 50, color: "#339933" },
    { name: "AWS", size: 55, color: "#FF9900" },
    { name: "TS", size: 45, color: "#3178C6" },
    { name: "Next", size: 52, color: "#000000" },
    { name: "DB", size: 48, color: "#336791" }
  ];

  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-white to-luxury-50/50 rounded-3xl overflow-hidden border border-luxury-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      {/* Center core */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-premium-gold to-accent-500 shadow-[0_0_60px_rgba(212,175,55,0.6)]"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360]
        }}
        transition={{
          scale: { duration: 2, repeat: Infinity },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      >
        <div className="w-full h-full rounded-full flex items-center justify-center text-white font-black text-2xl">
          AI
        </div>
      </motion.div>

      {/* Orbiting logos */}
      {logos.map((logo, i) => {
        const angle = (i / logos.length) * Math.PI * 2;
        const radius = 120;

        return (
          <motion.div
            key={logo.name}
            className="absolute top-1/2 left-1/2"
            style={{
              x: Math.cos(angle) * radius - logo.size / 2,
              y: Math.sin(angle) * radius - logo.size / 2
            }}
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
          >
            <motion.div
              className="relative rounded-2xl shadow-lg flex items-center justify-center font-black"
              style={{
                width: logo.size,
                height: logo.size,
                backgroundColor: 'white',
                border: `2px solid ${logo.color}20`
              }}
              whileHover={{ scale: 1.2 }}
              animate={{
                y: [0, -10, 0],
                boxShadow: [
                  `0 4px 20px ${logo.color}30`,
                  `0 8px 40px ${logo.color}50`,
                  `0 4px 20px ${logo.color}30`
                ]
              }}
              transition={{
                y: { duration: 2, repeat: Infinity, delay: i * 0.3 }
              }}
            >
              <span style={{ color: logo.color }}>{logo.name}</span>

              {/* Connecting lines */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-px origin-left"
                style={{
                  height: radius,
                  background: `linear-gradient(to bottom, ${logo.color}40, transparent)`,
                  transform: `rotate(${angle}rad) translateX(-50%)`
                }}
                animate={{
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Data particles flowing */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-premium-gold"
          initial={{
            x: "50%",
            y: "50%"
          }}
          animate={{
            x: [
              "50%",
              `${50 + Math.cos((i / 20) * Math.PI * 2) * 40}%`,
              "50%"
            ],
            y: [
              "50%",
              `${50 + Math.sin((i / 20) * Math.PI * 2) * 40}%`,
              "50%"
            ],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
