"use client";

import { Player } from '@lottiefiles/react-lottie-player';
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

// Coding Animation with React Spring
export function ProfessionalCodingAnimation() {
  const [isHovered, setIsHovered] = useState(false);

  const springProps = useSpring({
    scale: isHovered ? 1.05 : 1,
    shadow: isHovered ? 25 : 15,
    config: { tension: 300, friction: 20 }
  });

  return (
    <animated.div
      className="relative w-full h-[400px] bg-gradient-to-br from-luxury-950 via-indigo-950 to-luxury-950 rounded-3xl overflow-hidden border border-premium-gold/20"
      style={{
        transform: springProps.scale.to(s => `scale(${s})`),
        boxShadow: springProps.shadow.to(s => `0 ${s}px ${s * 2}px rgba(0,0,0,0.3)`)
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Lottie animation for coding */}
      <div className="w-full h-full flex items-center justify-center p-8">
        <Player
          autoplay
          loop
          src="/animations/coding.json"
          style={{ height: '100%', width: '100%' }}
        />
      </div>

      {/* Overlay text */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <div className="inline-block px-6 py-3 bg-black/60 backdrop-blur-md rounded-full border border-premium-gold/30">
          <span className="text-premium-gold font-mono text-sm font-bold">Clean Code Execution</span>
        </div>
      </div>
    </animated.div>
  );
}

// Tech Stack 3D Animation
export function ProfessionalTechAnimation() {
  const [isHovered, setIsHovered] = useState(false);

  const springProps = useSpring({
    scale: isHovered ? 1.05 : 1,
    rotate: isHovered ? 5 : 0,
    config: { tension: 300, friction: 20 }
  });

  return (
    <animated.div
      className="relative w-full h-[400px] bg-gradient-to-br from-white to-luxury-50/50 rounded-3xl overflow-hidden border border-luxury-200/60"
      style={{
        transform: springProps.scale.to(s => `scale(${s}) rotate(${springProps.rotate.get()}deg)`),
        boxShadow: springProps.scale.to(s => `0 ${s * 8}px ${s * 32}px rgba(212,175,55,0.${Math.floor(s * 15)})`)
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Lottie animation for tech stack */}
      <div className="w-full h-full flex items-center justify-center p-8">
        <Player
          autoplay
          loop
          src="/animations/tech-stack.json"
          style={{ height: '100%', width: '100%' }}
        />
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <div className="inline-block px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-luxury-200/60">
          <span className="text-luxury-950 font-mono text-sm font-bold">Modern Tech Stack</span>
        </div>
      </div>
    </animated.div>
  );
}

// AI Building Animation
export function ProfessionalAIAnimation() {
  const [isHovered, setIsHovered] = useState(false);

  const springProps = useSpring({
    scale: isHovered ? 1.05 : 1,
    brightness: isHovered ? 1.2 : 1,
    config: { tension: 300, friction: 20 }
  });

  return (
    <animated.div
      className="relative w-full h-[400px] bg-gradient-to-br from-purple-950 via-luxury-950 to-indigo-950 rounded-3xl overflow-hidden border border-purple-500/30"
      style={{
        transform: springProps.scale.to(s => `scale(${s})`),
        filter: springProps.brightness.to(b => `brightness(${b})`),
        boxShadow: springProps.scale.to(s => `0 ${s * 12}px ${s * 48}px rgba(138,43,226,0.${Math.floor(s * 30)})`)
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Lottie animation for AI */}
      <div className="w-full h-full flex items-center justify-center p-8">
        <Player
          autoplay
          loop
          src="/animations/ai-robot.json"
          style={{ height: '100%', width: '100%' }}
        />
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <div className="inline-block px-6 py-3 bg-black/60 backdrop-blur-md rounded-full border border-purple-500/30">
          <span className="text-purple-300 font-mono text-sm font-bold">AI-Powered Building</span>
        </div>
      </div>
    </animated.div>
  );
}
