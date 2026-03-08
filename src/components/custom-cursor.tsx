"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400 };
  const sx = useSpring(cursorX, springConfig);
  const sy = useSpring(cursorY, springConfig);

  const xStr = useTransform(sx, (v) => `${v}px`);
  const yStr = useTransform(sy, (v) => `${v}px`);

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
    <>
      {/* Discovery Lens - Spotlight Effect */}
      <motion.div
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      >
        <div className="h-64 w-64 rounded-full bg-primary/10 blur-[80px] opacity-40 mix-blend-screen transform-gpu" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-primary shadow-[0_0_20px_rgba(235,143,72,0.5)] opacity-60" />
      </motion.div>
      
      {/* Global discovery overlay - subtle mask that the cursor "reveals" */}
      <motion.div
        style={{
          background: `radial-gradient(600px circle at var(--x) var(--y), transparent 0%, var(--background) 100%)`,
          // @ts-ignore
          "--x": xStr,
          // @ts-ignore
          "--y": yStr,
        }}
        className="fixed inset-0 z-[9998] pointer-events-none opacity-[0.03] dark:opacity-[0.05] hidden md:block"
      />
    </>
  );
}
