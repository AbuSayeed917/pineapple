"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const svgIcons = [
  { name: "react", color: "#61DAFB" },
  { name: "nodejs", color: "#339933" },
  { name: "typescript", color: "#3178C6" },
  { name: "javascript", color: "#F7DF1E" },
  { name: "python", color: "#3776AB" },
  { name: "nextjs", color: "#000000" },
  { name: "vue", color: "#4FC08D" },
  { name: "angular", color: "#DD0031" },
  { name: "docker", color: "#2496ED" },
  { name: "kubernetes", color: "#326CE5" },
  { name: "aws", color: "#FF9900" },
  { name: "mongodb", color: "#47A248" },
  { name: "postgresql", color: "#4169E1" },
  { name: "redis", color: "#DC382D" },
  { name: "graphql", color: "#E10098" },
  { name: "git", color: "#F05032" },
  { name: "github", color: "#181717" },
  { name: "gitlab", color: "#FC6D26" },
  { name: "figma", color: "#F24E1E" },
  { name: "adobe", color: "#FF0000" },
  { name: "tailwind", color: "#06B6D4" },
  { name: "sass", color: "#CC6699" },
  { name: "webpack", color: "#8DD6F9" },
  { name: "vite", color: "#646CFF" },
  { name: "npm", color: "#CB3837" },
  { name: "firebase", color: "#FFCA28" },
  { name: "vercel", color: "#000000" },
  { name: "netlify", color: "#00C7B7" },
  { name: "stripe", color: "#008CDD" },
  { name: "shopify", color: "#7AB55C" },
  { name: "slack", color: "#4A154B" },
  { name: "trello", color: "#0052CC" },
  { name: "notion", color: "#000000" },
  { name: "jira", color: "#0052CC" },
  { name: "confluence", color: "#172B4D" },
  { name: "android", color: "#3DDC84" },
  { name: "apple", color: "#000000" },
  { name: "linux", color: "#FCC624" },
  { name: "windows", color: "#0078D6" },
  { name: "chrome", color: "#4285F4" },
  { name: "tensorflow", color: "#FF6F00" },
  { name: "pytorch", color: "#EE4C2C" },
  { name: "openai", color: "#412991" },
  { name: "huggingface", color: "#FFD21E" },
  { name: "jupyter", color: "#F37626" },
  { name: "jest", color: "#C21325" },
  { name: "vitest", color: "#6E9F18" },
  { name: "cypress", color: "#17202C" },
  { name: "playwright", color: "#2EAD33" },
  { name: "selenium", color: "#43B02A" },
  { name: "rust", color: "#000000" },
  { name: "go", color: "#00ADD8" },
  { name: "java", color: "#F80000" },
  { name: "php", color: "#777BB4" },
  { name: "ruby", color: "#CC342D" },
  { name: "swift", color: "#F05138" },
  { name: "kotlin", color: "#7F52FF" },
  { name: "flutter", color: "#02569B" },
  { name: "unity", color: "#000000" },
  { name: "unreal", color: "#0E1128" },
];

interface FloatingIcon {
  id: number;
  svg: typeof svgIcons[0];
  x: number;
  y: number;
  scale: number;
  duration: number;
  delay: number;
  rotate: number;
}

export function FloatingSVGs() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    // Generate random positions for all 60 icons
    const generatedIcons = svgIcons.map((svg, index) => ({
      id: index,
      svg,
      x: Math.random() * 100, // 0-100%
      y: Math.random() * 100, // 0-100%
      scale: 0.3 + Math.random() * 0.7, // 0.3-1.0
      duration: 20 + Math.random() * 30, // 20-50 seconds
      delay: Math.random() * 5, // 0-5 seconds
      rotate: Math.random() * 360,
    }));
    setIcons(generatedIcons);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute opacity-5 hover:opacity-20 transition-opacity duration-500"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
          }}
          initial={{
            opacity: 0,
            scale: 0,
            rotate: 0,
          }}
          animate={{
            opacity: [0, 0.05, 0.05, 0],
            scale: icon.scale,
            rotate: [icon.rotate, icon.rotate + 360],
            x: [0, Math.sin(icon.id) * 100, 0],
            y: [0, Math.cos(icon.id) * 100, 0],
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={`/svg-elements/${icon.svg.name}.svg`}
            alt=""
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
            style={{
              filter: `brightness(0) saturate(100%) opacity(0.8)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
