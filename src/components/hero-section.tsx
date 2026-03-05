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
      {/* Sharp SVG Accents - "Fruit Era" Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] opacity-20 dark:opacity-10 blur-3xl animate-pulse"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="var(--color-primary)"
            d="M44.7,-76.4C58.2,-69.2,69.7,-57.4,77.3,-43.8C84.8,-30.1,88.5,-15.1,87.6,-0.5C86.7,14,81.2,28,73,40.5C64.8,53,53.8,64,40.7,71.5C27.5,79,12.2,83, -2.4,87.1C-17,91.3,-34.1,95.5,-48.1,90.2C-62.1,84.8,-73.1,69.9,-80.4,54.2C-87.7,38.5,-91.3,22.1,-90.1,6.4C-88.9,-9.2,-83,-24.1,-74.6,-37.2C-66.2,-50.2,-55.4,-61.4,-42.6,-68.9C-29.8,-76.4,-14.9,-80.1,0.7,-81.4C16.4,-82.6,31.2,-83.5,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

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
            <div className="h-2 w-2 animate-pulse rounded-full bg-primary glow-orange-sm" />
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
          <div className="relative flex items-center justify-center h-16 w-16 rounded-full border border-white/5 glass-strong fruit-border transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(var(--color-primary),0.2)]">
            <ArrowDown className="h-5 w-5 animate-bounce" />
            <div className="absolute inset-0 rounded-full glass-reflection opacity-20 pointer-events-none" />
          </div>
        </button>
      </motion.div>
    </section>
  );
}
