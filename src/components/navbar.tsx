"use client";

import { useState } from "react";
import { Menu, Languages, Sun, Moon } from "lucide-react";
import { MenuOverlay } from "./menu-overlay";
import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <>
      <nav className="fixed top-8 right-8 md:top-12 md:right-12 z-[150] flex items-center gap-3">
        {/* Quick Controls Container */}
        <div className="flex items-center gap-2 glass-strong fruit-border rounded-full p-1.5 shadow-2xl backdrop-blur-2xl">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[10px] font-black font-mono text-muted-foreground hover:text-primary hover:bg-white/5 transition-all"
            aria-label="Toggle language"
          >
            {language.toUpperCase()}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-white/5 transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <div className="w-px h-4 bg-white/10 mx-1" />

          {/* Menu Trigger */}
          <motion.button
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full bg-primary/10 text-primary transition-all group overflow-hidden"
            aria-label="Open menu"
          >
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Menu className="h-5 w-5 relative z-10" />
          </motion.button>
        </div>
      </nav>

      <MenuOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

