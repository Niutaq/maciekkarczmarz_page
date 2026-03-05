"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 100, stiffness: 100 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  // Very subtle parallax - hardware accelerated
  const x = useTransform(sx, [0, 1], ["-2%", "2%"]);
  const y = useTransform(sy, [0, 1], ["-2%", "2%"]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background transform-gpu">
      {/* 
        Ultra-Performance "WebGL-style" Background 
        Using large fixed radial gradients instead of multiple blur divs.
        This is much easier on the GPU than CSS blurs.
      */}
      <motion.div 
        style={{ x, y }}
        className="absolute inset-[-10%] opacity-50 dark:opacity-30 will-change-transform"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,var(--color-primary)_0%,transparent_40%),radial-gradient(circle_at_20%_80%,var(--color-accent)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.7_0.1_200/_0.1)_0%,transparent_60%)]" />
      </motion.div>

      {/* Noise Texture Overlay - Refined */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Global Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]" />
    </div>
  );
}
