"use client";

import { useLanguage } from "./language-provider";
import { motion } from "framer-motion";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 pt-32 pb-20">
      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.5 }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center"
      >
        {/* Editorial Tagline */}
        <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-50 mb-12 block">
          FinOps Architect / Digital Ocean Specialist
        </span>

        {/* Headline with Editorial Serif Style */}
        <h1 className="font-serif text-7xl md:text-9xl italic leading-tight text-foreground text-balance">
          The Golden <br />
          <span className="text-[var(--primary)]">Current</span>
        </h1>

        {/* Airy Description */}
        <p className="mt-16 max-w-2xl text-pretty text-lg md:text-2xl font-serif font-light leading-relaxed opacity-60 px-4">
          {t.hero.description}
        </p>
      </motion.div>
    </section>
  );
}
