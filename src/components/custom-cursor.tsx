"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Single spring for smooth but responsive motion
  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const sx = useSpring(cursorX, springConfig);
  const sy = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
    >
      {/* Primary Amber Ring */}
      <div className="h-8 w-8 rounded-full border border-primary/50 flex items-center justify-center shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]">
        {/* Core Dot */}
        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
      </div>
      
      {/* Dynamic Glow - much smaller for performance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-primary/10 blur-[40px] pointer-events-none transform-gpu" />
    </motion.div>
  );
}
