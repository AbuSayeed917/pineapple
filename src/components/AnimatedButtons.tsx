import { motion } from "framer-motion";
import { useState, useRef } from "react";

interface PrimaryButtonProps {
    text: string;
    onClick?: () => void;
}

export function PrimaryButton({ text, onClick }: PrimaryButtonProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const ref = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={ref}
            onClick={onClick}
            className="w-full md:w-auto relative px-8 py-3 bg-onyx-primary text-onyx-black font-bold text-xs tracking-widest uppercase overflow-hidden group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x * 0.2, y: position.y * 0.2 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            <span className="relative z-10">{text}</span>
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 transform skew-x-12"></div>
        </motion.button>
    );
}
