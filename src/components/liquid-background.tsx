"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, memo } from "react";

export const LiquidBackground = memo(() => {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 50 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  const xStr = useTransform(sx, (v) => `${v}px`);
  const yStr = useTransform(sy, (v) => `${v}px`);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || prefersReducedMotion) {
      setShouldAnimate(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none bg-background transition-colors duration-500">
      {/* Mouse Follow Glow */}
      {shouldAnimate && (
        <motion.div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            background: `radial-gradient(circle 600px at var(--x) var(--y), color-mix(in oklab, var(--primary), transparent 95%), transparent 80%)`,
            // @ts-ignore
            "--x": xStr,
            // @ts-ignore
            "--y": yStr,
          }}
        />
      )}

      {/* Container for blobs to apply global opacity and heavy blur */}
      <div className="absolute inset-0 opacity-20 md:opacity-25 transform-gpu will-change-transform">
...
        {/* Liquid Amber Blob (Primary) */}
        <motion.div
          className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-primary blur-[80px] md:blur-[120px]"
          animate={shouldAnimate ? {
            x: ["0%", "5%", "-2%", "0%"],
            y: ["0%", "8%", "3%", "0%"],
            scale: [1, 1.05, 0.98, 1],
          } : {}}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Gold Glow Blob (Accent) */}
        <motion.div
          className="absolute bottom-[-10%] right-[-2%] w-[50vw] h-[50vw] rounded-full bg-accent blur-[80px] md:blur-[120px]"
          animate={shouldAnimate ? {
            x: ["0%", "-6%", "4%", "0%"],
            y: ["0%", "-10%", "-5%", "0%"],
            scale: [1, 0.95, 1.02, 1],
          } : {}}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Subtle Noise Texture Overlay - remains on mobile as it's cheap */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
});

LiquidBackground.displayName = "LiquidBackground";

export default LiquidBackground;
