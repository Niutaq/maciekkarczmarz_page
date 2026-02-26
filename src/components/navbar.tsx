"use client";

import { ThemeToggle } from "./theme-toggle";
import { useLanguage } from "./language-provider";
import { Languages } from "lucide-react";

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
    </nav>
  );
}
