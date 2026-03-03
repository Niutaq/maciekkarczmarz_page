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
    <nav className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 pointer-events-none">
      <div className="pointer-events-auto">
        <a
          href="#"
          className="font-mono text-sm font-bold tracking-tighter text-foreground transition-colors hover:text-primary"
        >
          MK
        </a>
      </div>
      <div className="flex items-center gap-1 glass-strong rounded-2xl px-2 py-1.5 pointer-events-auto macos-shadow">
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
              className="w-[280px] sm:w-[350px] glass-strong border-l border-white/10 p-6 flex flex-col gap-8"
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

              <div className="mt-auto pt-6 border-t border-border/50 flex flex-col gap-4"></div>
            </SheetContent>
          </Sheet>
        </div>

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hidden md:block rounded-xl px-4 py-2 text-xs font-bold text-muted-foreground transition-all duration-300 hover:bg-white/5 hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
        <div className="hidden md:block mx-1 h-6 w-px bg-border" />

        <div className="flex items-center gap-1">
          <button
            onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
            className="glass clay rounded-xl p-2.5 text-muted-foreground transition-all duration-300 hover:text-primary hover:glow-orange-sm"
            aria-label="Toggle language"
          >
            <div className="flex items-center gap-2">
              <Languages className="h-4 w-4" />
              <span className="text-xs font-bold font-mono">
                {language.toUpperCase()}
              </span>
            </div>
          </button>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
