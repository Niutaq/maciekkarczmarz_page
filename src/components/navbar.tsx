"use client";

import { ThemeToggle } from "./theme-toggle";
import { useLanguage } from "./language-provider";
import { Languages, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import { Button } from "./ui/button";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.projects, href: "#pipeline" },
    { label: t.nav.graphics, href: "#graphics" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.documents, href: "#cv" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 md:top-8 left-4 md:left-8 right-4 md:right-8 z-[110] flex items-center justify-between px-2 md:px-8 pointer-events-none">
      <div className="pointer-events-auto">
        <a
          href="/"
          aria-label="Home - Maciej Karczmarz"
          className="group relative flex items-center justify-center h-10 w-10 rounded-xl glass-strong fruit-border transition-transform hover:scale-110 active:scale-95 shadow-lg"
        >
          <span className="font-mono text-sm font-black tracking-tighter text-foreground">
            MK
          </span>
          {/* Fruit Reflection */}
          <div className="absolute inset-0 rounded-xl glass-reflection opacity-30 group-hover:opacity-60 transition-opacity" />
        </a>
      </div>

      <div className="relative flex items-center gap-1 glass-strong fruit-border rounded-2xl px-2 py-1.5 pointer-events-auto macos-shadow">
        {/* Dock Gloss Effect */}
        <div className="absolute inset-0 rounded-2xl glass-reflection opacity-20 pointer-events-none" />

        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="rounded-xl text-muted-foreground hover:text-primary transition-colors"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[350px] glass-strong border-l border-white/10 p-6 flex flex-col gap-8 z-[150]"
            >
              <SheetHeader className="p-0">
                <SheetTitle className="text-left font-mono text-sm font-bold tracking-tighter text-muted-foreground uppercase">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="text-2xl font-bold tracking-tight text-foreground/80 transition-all hover:text-primary hover:translate-x-1 py-3 border-b border-border/50 last:border-0"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hidden md:block relative group rounded-xl px-5 py-2 text-[10px] font-black tracking-widest uppercase text-muted-foreground transition-all duration-300 hover:text-foreground"
          >
            <span className="relative z-10">{link.label}</span>
            <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
        
        <div className="hidden md:block mx-2 h-4 w-px bg-white/10" />

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
            className="group relative glass fruit-border rounded-xl p-2.5 text-muted-foreground transition-all duration-300 hover:text-primary active:scale-95"
            aria-label="Toggle language"
          >
            <div className="relative z-10 flex items-center gap-2">
              <Languages className="h-3.5 w-3.5" />
              <span className="text-[10px] font-black font-mono">
                {language.toUpperCase()}
              </span>
            </div>
            <div className="absolute inset-0 rounded-xl glass-reflection opacity-0 group-hover:opacity-30 transition-opacity" />
          </button>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
