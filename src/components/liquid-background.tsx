"use client";

import { motion } from "framer-motion";

export const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none bg-background">
      {/* Container for blobs to apply global opacity and heavy blur */}
      <div className="absolute inset-0 opacity-15 md:opacity-20">
        {/* Liquid Amber Blob (Primary) */}
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-primary blur-[120px]"
          animate={{
            x: ["0%", "10%", "-5%", "0%"],
            y: ["0%", "15%", "5%", "0%"],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Gold Glow Blob (Accent) */}
        <motion.div
          className="absolute bottom-[-15%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-accent blur-[120px]"
          animate={{
            x: ["0%", "-12%", "8%", "0%"],
            y: ["0%", "-18%", "-10%", "0%"],
            scale: [1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Subtle Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default LiquidBackground;
