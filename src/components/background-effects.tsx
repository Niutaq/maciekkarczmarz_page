"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 50 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  const xStr = useTransform(sx, (v) => `${v}px`);
  const yStr = useTransform(sy, (v) => `${v}px`);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * -20,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-[10] overflow-hidden pointer-events-none bg-background transform-gpu">
      {/* Background Content */}
      <div className="absolute inset-0 z-0 opacity-100 dark:opacity-40">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle 800px at var(--x) var(--y), var(--color-primary-transparent), transparent 80%)`,
            // @ts-ignore
            "--x": xStr,
            // @ts-ignore
            "--y": yStr,
            // @ts-ignore
            "--color-primary-transparent": "color-mix(in oklab, var(--primary), transparent 95%)"
          }}
        />
        
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, p.opacity, 0],
              y: ["-10vh", "110vh"],
              x: [`${p.x}vw`, `${p.x + (Math.random() * 4 - 2)}vw`],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
            className="absolute rounded-full bg-primary/40"
            style={{
              width: p.size,
              height: p.size,
              left: 0,
              top: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
