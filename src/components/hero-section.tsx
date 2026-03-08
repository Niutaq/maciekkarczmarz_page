"use client";

import { ArrowDown, Mail, MapPin } from "lucide-react";
import { useLanguage } from "./language-provider";
import { motion } from "framer-motion";

export function HeroSection() {
  const { t, language } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden px-6 pt-20 pb-12">
      {/* Main Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center gap-10"
      >
        {/* Status Badge */}
        <motion.div variants={fadeVariants} className="overflow-hidden">
          <div className="glass-strong fruit-border rounded-full px-6 py-2 flex items-center gap-3 shadow-2xl backdrop-blur-2xl">
            <div className="h-2 w-2 animate-pulse rounded-full bg-primary glow-primary-sm" />
            <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-foreground font-black uppercase">
              {t.hero.status}
            </span>
          </div>
        </motion.div>

        {/* Headline with Smooth Reveal */}
        <div className="space-y-2 md:space-y-4 overflow-hidden">
          <motion.h1 
            variants={textVariants}
            className="text-balance text-7xl md:text-[10rem] font-black tracking-tighter text-foreground uppercase leading-[0.8] md:leading-[0.8]"
          >
            Maciej <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary/80 to-accent vista-glow py-2">
              Karczmarz
            </span>
          </motion.h1>
        </div>

        {/* Info Pills */}
        <motion.div 
          variants={fadeVariants}
          className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-muted-foreground/80 font-mono text-[10px] md:text-xs tracking-[0.1em] font-black uppercase"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl glass fruit-border shadow-lg group hover:scale-105 transition-transform">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span>{language === "pl" ? "Polska" : "Poland"}</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl glass fruit-border shadow-lg group hover:scale-105 transition-transform">
            <Mail className="h-3.5 w-3.5 text-primary" />
            <span>maciekkar1305@gmail.com</span>
          </div>
        </motion.div>

        {/* Cozy Description */}
        <motion.p 
          variants={fadeVariants}
          className="max-w-2xl text-pretty text-xl md:text-2xl font-light leading-relaxed text-muted-foreground/60 mx-auto px-4"
        >
          {t.hero.description}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollTo("pipeline")}
          className="group flex flex-col items-center gap-4 text-muted-foreground transition-all duration-700"
        >
          <div className="relative flex items-center justify-center h-16 w-16 rounded-full border border-white/5 glass-strong fruit-border transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(var(--primary),0.2)]">
            <ArrowDown className="h-5 w-5 animate-bounce" />
            <div className="absolute inset-0 rounded-full glass-reflection opacity-20 pointer-events-none" />
          </div>
        </button>
      </motion.div>
    </section>
  );
}
