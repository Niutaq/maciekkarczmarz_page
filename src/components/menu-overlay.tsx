"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Languages, Sun, Moon } from "lucide-react";
import { useLanguage } from "./language-provider";
import { useTheme } from "next-themes";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { label: t.nav.projects, href: "#pipeline" },
    { label: t.nav.graphics, href: "#graphics" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.documents, href: "#cv" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
        >
          {/* Refractive Backdrop */}
          <motion.div
            initial={{ scale: 0, borderRadius: "100%" }}
            animate={{ scale: 2.5, borderRadius: "0%" }}
            exit={{ scale: 0, borderRadius: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-background/40 backdrop-blur-[80px] md:backdrop-blur-[120px] shadow-[inset_0_0_100px_rgba(255,255,255,0.05)]"
          />

          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClose}
            className="absolute top-10 right-10 md:top-16 md:right-16 p-4 rounded-full glass-strong fruit-border text-foreground hover:scale-110 active:scale-95 transition-all z-50"
          >
            <X className="h-6 w-6" />
          </motion.button>

          {/* Content */}
          <div className="relative z-10 w-full max-w-4xl px-10 flex flex-col items-center gap-16 md:gap-24">
            <nav className="flex flex-col items-center gap-8 md:gap-12 w-full">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                  className="group relative"
                >
                  <span className="text-5xl md:text-8xl font-serif italic text-foreground/40 transition-colors duration-500 group-hover:text-primary">
                    {link.label}
                  </span>
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-px bg-primary w-0 group-hover:w-full transition-all duration-500"
                  />
                </motion.a>
              ))}
            </nav>

            {/* Bottom Controls */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-8 md:gap-12"
            >
              <button
                onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
                className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors"
              >
                <Languages className="h-4 w-4" />
                <span>{language.toUpperCase()}</span>
              </button>

              <div className="h-8 w-px bg-white/10" />

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span>{theme?.toUpperCase()}</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
