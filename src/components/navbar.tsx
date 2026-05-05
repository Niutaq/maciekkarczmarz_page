"use client";

import { useState } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { MenuOverlay } from "./menu-overlay";
import { useLanguage } from "./language-provider";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { label: t.nav.bridge, href: "#hero" },
    { label: t.nav.projects, href: "#pipeline" },
    { label: t.nav.graphics, href: "#graphics" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.documents, href: "#cv" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      <nav className="site-nav">
        <div className="material-nav mx-auto flex max-w-[1440px] items-center justify-between gap-3">
          <a href="#" className="nav-mark" aria-label="Maciej Karczmarz">
            MK
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="nav-control"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
              className="nav-control"
              aria-label="Toggle language"
            >
              {language.toUpperCase()}
            </button>
            <button onClick={() => setIsOpen(true)} className="nav-menu-button" aria-label={t.nav.menu}>
              <Menu className="h-5 w-5" />
              <span className="hidden sm:inline">{t.nav.menu}</span>
            </button>
          </div>
        </div>
      </nav>

      <MenuOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
