"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated geometric shapes */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ mixBlendMode: "multiply" }}
      >
        <defs>
          <linearGradient id="gold-shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(212,175,55,0.1)" />
            <stop offset="50%" stopColor="rgba(212,175,55,0.3)" />
            <stop offset="100%" stopColor="rgba(212,175,55,0.1)" />
          </linearGradient>

          <linearGradient id="accent-shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(229,173,115,0.08)" />
            <stop offset="50%" stopColor="rgba(229,173,115,0.15)" />
            <stop offset="100%" stopColor="rgba(229,173,115,0.08)" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Large floating circle - top right */}
        <motion.circle
          cx="85%"
          cy="15%"
          r="200"
          fill="url(#gold-shimmer)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Medium circle - left side */}
        <motion.circle
          cx="10%"
          cy="40%"
          r="150"
          fill="url(#accent-shimmer)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Advanced Animated hexagons with inner details */}
        {[...Array(8)].map((_, i) => {
          const positions = [
            { x: "20%", y: "25%" },
            { x: "75%", y: "35%" },
            { x: "15%", y: "70%" },
            { x: "85%", y: "65%" },
            { x: "50%", y: "15%" },
            { x: "35%", y: "50%" },
            { x: "65%", y: "80%" },
            { x: "90%", y: "20%" },
          ];
          const sizes = [40, 30, 50, 35, 45, 38, 42, 33];

          return (
            <g key={`hex-group-${i}`}>
              {/* Outer hexagon */}
              <motion.polygon
                points={`${sizes[i]},0 ${sizes[i]*1.83},${sizes[i]*0.5} ${sizes[i]*1.83},${sizes[i]*1.5} ${sizes[i]},${sizes[i]*2} ${sizes[i]*0.17},${sizes[i]*1.5} ${sizes[i]*0.17},${sizes[i]*0.5}`}
                fill="none"
                stroke="rgba(212,175,55,0.2)"
                strokeWidth="2"
                initial={{ opacity: 0, rotate: 0, scale: 0 }}
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 20 + i * 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5
                }}
                style={{
                  transformOrigin: "center",
                  transform: `translate(${positions[i].x}, ${positions[i].y})`
                }}
              />
              {/* Inner hexagon */}
              <motion.polygon
                points={`${sizes[i]*0.6},0 ${sizes[i]*1.1},${sizes[i]*0.3} ${sizes[i]*1.1},${sizes[i]*0.9} ${sizes[i]*0.6},${sizes[i]*1.2} ${sizes[i]*0.1},${sizes[i]*0.9} ${sizes[i]*0.1},${sizes[i]*0.3}`}
                fill="rgba(229,173,115,0.1)"
                stroke="rgba(229,173,115,0.3)"
                strokeWidth="1"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  rotate: -360,
                }}
                transition={{
                  duration: 15 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.3
                }}
                style={{
                  transformOrigin: "center",
                  transform: `translate(${positions[i].x}, ${positions[i].y})`
                }}
              />
            </g>
          );
        })}

        {/* Animated triangles */}
        {[...Array(6)].map((_, i) => {
          const positions = [
            { x: "30%", y: "40%" },
            { x: "70%", y: "60%" },
            { x: "25%", y: "80%" },
            { x: "80%", y: "30%" },
            { x: "45%", y: "70%" },
            { x: "60%", y: "20%" },
          ];

          return (
            <motion.polygon
              key={`tri-${i}`}
              points="0,-20 -17.3,10 17.3,10"
              fill="none"
              stroke="url(#gold-shimmer)"
              strokeWidth="1.5"
              initial={{ opacity: 0, rotate: 0, scale: 0 }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, 120, 240, 360],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.7
              }}
              style={{
                transformOrigin: "center",
                transform: `translate(${positions[i].x}, ${positions[i].y})`
              }}
            />
          );
        })}

        {/* Orbiting small circles */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 360) / 12;
          const radius = 200 + Math.sin(i) * 50;

          return (
            <motion.circle
              key={`orbit-${i}`}
              cx="50%"
              cy="50%"
              r="4"
              fill={i % 2 === 0 ? "rgba(212,175,55,0.4)" : "rgba(229,173,115,0.3)"}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                cx: [
                  "50%",
                  `calc(50% + ${radius * Math.cos((angle * Math.PI) / 180)}px)`,
                  "50%"
                ],
                cy: [
                  "50%",
                  `calc(50% + ${radius * Math.sin((angle * Math.PI) / 180)}px)`,
                  "50%"
                ],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3
              }}
            />
          );
        })}

        {/* Floating abstract lines */}
        <motion.path
          d="M 100 300 Q 300 100 500 300 T 900 300"
          fill="none"
          stroke="rgba(212,175,55,0.12)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.path
          d="M 1200 500 Q 900 700 600 500 T 100 500"
          fill="none"
          stroke="rgba(229,173,115,0.1)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.35, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Complex wave patterns */}
        {[0, 1, 2].map((i) => (
          <motion.path
            key={`wave-${i}`}
            d={`M 0 ${300 + i * 100} Q 200 ${250 + i * 100} 400 ${300 + i * 100} T 800 ${300 + i * 100} T 1200 ${300 + i * 100}`}
            fill="none"
            stroke={i === 0 ? "rgba(212,175,55,0.15)" : i === 1 ? "rgba(229,173,115,0.12)" : "rgba(168,162,158,0.1)"}
            strokeWidth="1.5"
            strokeDasharray="10 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0, 0.4, 0.4, 0],
              y: [0, -50]
            }}
            transition={{
              pathLength: { duration: 6, repeat: Infinity, ease: "linear" },
              opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 6, repeat: Infinity, ease: "linear" },
              delay: i * 2
            }}
          />
        ))}

        {/* Star burst patterns */}
        {[...Array(4)].map((_, i) => {
          const positions = [
            { x: "25%", y: "30%" },
            { x: "70%", y: "55%" },
            { x: "40%", y: "75%" },
            { x: "85%", y: "40%" }
          ];

          return (
            <g key={`starburst-${i}`}>
              {[...Array(8)].map((_, j) => {
                const angle = (j * 360) / 8;
                const length = 30;

                return (
                  <motion.line
                    key={`ray-${i}-${j}`}
                    x1="0"
                    y1="0"
                    x2={length * Math.cos((angle * Math.PI) / 180)}
                    y2={length * Math.sin((angle * Math.PI) / 180)}
                    stroke="rgba(212,175,55,0.2)"
                    strokeWidth="1"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 0],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 1.5 + j * 0.1
                    }}
                    style={{
                      transformOrigin: "center",
                      transform: `translate(${positions[i].x}, ${positions[i].y})`
                    }}
                  />
                );
              })}
              {/* Central glow */}
              <motion.circle
                cx="0"
                cy="0"
                r="3"
                fill="rgba(212,175,55,0.4)"
                animate={{
                  r: [3, 8, 3],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 1.5
                }}
                style={{
                  transform: `translate(${positions[i].x}, ${positions[i].y})`
                }}
              />
            </g>
          );
        })}

        {/* Spiral paths */}
        {[0, 1].map((i) => (
          <motion.path
            key={`spiral-${i}`}
            d={i === 0
              ? "M 50,50 Q 100,50 100,100 T 50,150 T 0,100 T 50,50"
              : "M 350,100 Q 400,100 400,150 T 350,200 T 300,150 T 350,100"
            }
            fill="none"
            stroke={i === 0 ? "rgba(212,175,55,0.15)" : "rgba(229,173,115,0.12)"}
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0, rotate: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0, 0.5, 0],
              rotate: 360
            }}
            transition={{
              pathLength: { duration: 8, ease: "easeInOut" },
              opacity: { duration: 8, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              delay: i * 3
            }}
            style={{
              transformOrigin: "center"
            }}
          />
        ))}
      </motion.svg>

      {/* Gradient mesh overlays */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
          filter: "blur(60px)"
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(229,173,115,0.06) 0%, transparent 70%)",
          filter: "blur(50px)"
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
}
