"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -0.5 to 0.5
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Orb 1: Primary Orange */}
      <motion.div
        style={{
          x: sx.get() * 50,
          y: sy.get() * 50,
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px]"
      />

      {/* Orb 2: Secondary / Accent */}
      <motion.div
        style={{
          x: sx.get() * -30,
          y: sy.get() * -30,
        }}
        animate={{
          x: [0, -150, 50, 0],
          y: [0, 100, -80, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[100px]"
      />

      {/* Orb 3: Very Subtle Drift */}
      <motion.div
        style={{
          x: sx.get() * 20,
          y: sy.get() * 20,
        }}
        animate={{
          x: [0, 50, -100, 0],
          y: [0, 150, 50, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[30%] left-[20%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[150px]"
      />

      {/* Static Noise Overlay (Optional for extra WOW/texture) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
