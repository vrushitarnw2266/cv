import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.matchMedia("(hover: none)").matches);
    }, []);

    // Mouse Position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring Physics for trailing effect
    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isInteractive = 
                target.closest('a') || 
                target.closest('button') || 
                target.closest('.bento-card') ||
                target.getAttribute('role') === 'button';
            
            setIsHovering(!!isInteractive);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
            {/* Lead Dot */}
            <motion.div
                className="absolute w-2 h-2 bg-[var(--accent-blue)] rounded-full -translate-x-1/2 -translate-y-1/2"
                style={{
                    x: mouseX,
                    y: mouseY,
                }}
            />

            {/* Liquid Follower Ring */}
            <motion.div
                className="absolute border border-[var(--accent-blue)]/30 rounded-full -translate-x-1/2 -translate-y-1/2"
                style={{
                    x: springX,
                    y: springY,
                    width: isHovering ? 24 : 12,
                    height: isHovering ? 24 : 12,
                    backgroundColor: isHovering ? "rgba(var(--accent-blue-rgb), 0.05)" : "transparent",
                    backdropFilter: isHovering ? "blur(4px)" : "none",
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 25,
                    mass: 0.5
                }}
            >
                {/* Visual Glow on Hover */}
                {isHovering && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        className="absolute inset-0 rounded-full bg-[var(--accent-blue)] blur-xl"
                    />
                )}
            </motion.div>
        </div>
    );
};

export default CustomCursor;
