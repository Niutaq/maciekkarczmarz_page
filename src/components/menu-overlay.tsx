"use client";

import { X } from "lucide-react";
import { useLanguage } from "./language-provider";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.bridge, href: "#hero" },
    { label: t.nav.projects, href: "#pipeline" },
    { label: t.nav.graphics, href: "#graphics" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.documents, href: "#cv" },
    { label: t.nav.contact, href: "#contact" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-background">
      <div className="mx-auto flex min-h-dvh max-w-[900px] flex-col px-6 py-6 md:px-10 md:py-10">
        <div className="flex items-center justify-between">
          <span className="nav-mark">MK</span>
          <button onClick={onClose} className="nav-menu-button" aria-label={t.nav.close}>
            <X className="h-5 w-5" />
            <span>{t.nav.close}</span>
          </button>
        </div>

        <nav className="mt-16 flex flex-col gap-2 md:mt-24">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="menu-link"
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto border-t border-white/10 pt-6">
          <button
            onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
            className="nav-control"
            aria-label="Toggle language"
          >
            {language === "pl" ? "EN" : "PL"}
          </button>
        </div>
      </div>
    </div>
  );
}
