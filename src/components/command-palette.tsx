"use client";

import React, { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Search,
  LayoutGrid,
  Palette,
  Briefcase,
  FileText,
  Mail,
  Languages,
  Moon,
  Sun,
  Download,
  Github,
  Linkedin,
} from "lucide-react";
import { useLanguage } from "./language-provider";
import { useTheme } from "next-themes";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-2xl glass-strong clay macos-shadow transition-all duration-300 hover:scale-110 hover:glow-orange-sm md:bottom-8 md:right-8"
        aria-label="Open Command Palette"
      >
        <Search className="h-5 w-5 text-muted-foreground" />
        <span className="sr-only">Press Ctrl+K to open</span>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen} className="glass-strong border-white/10">
        <CommandInput placeholder={language === "pl" ? "Czego szukasz?..." : "Type a command or search..."} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading={language === "pl" ? "Nawigacja" : "Navigation"}>
            <CommandItem onSelect={() => runCommand(() => window.location.hash = "#pipeline")}>
              <LayoutGrid className="mr-2 h-4 w-4" />
              <span>{t.nav.projects}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.location.hash = "#graphics")}>
              <Palette className="mr-2 h-4 w-4" />
              <span>{t.nav.graphics}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.location.hash = "#experience")}>
              <Briefcase className="mr-2 h-4 w-4" />
              <span>{t.nav.experience}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.location.hash = "#cv")}>
              <FileText className="mr-2 h-4 w-4" />
              <span>{t.nav.documents}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.location.hash = "#contact")}>
              <Mail className="mr-2 h-4 w-4" />
              <span>{t.nav.contact}</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading={language === "pl" ? "Ustawienia" : "Settings"}>
            <CommandItem onSelect={() => runCommand(() => setLanguage(language === "pl" ? "en" : "pl"))}>
              <Languages className="mr-2 h-4 w-4" />
              <span>{language === "pl" ? "Zmień na angielski" : "Switch to Polish"}</span>
              <CommandShortcut>L</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme(theme === "dark" ? "light" : "dark"))}>
              {theme === "dark" ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
              <span>{theme === "dark" ? (language === "pl" ? "Tryb jasny" : "Light Mode") : (language === "pl" ? "Tryb ciemny" : "Dark Mode")}</span>
              <CommandShortcut>T</CommandShortcut>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading={language === "pl" ? "Pliki" : "Files"}>
            <CommandItem onSelect={() => runCommand(() => window.open(language === "pl" ? "/cv-polskie.pdf" : "/cv-english.pdf", "_blank"))}>
              <Download className="mr-2 h-4 w-4" />
              <span>{language === "pl" ? "Pobierz CV (PDF)" : "Download CV (PDF)"}</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Social">
            <CommandItem onSelect={() => runCommand(() => window.open("https://github.com/Niutaq", "_blank"))}>
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.open("https://linkedin.com/in/maciejkarczmarz", "_blank"))}>
              <Linkedin className="mr-2 h-4 w-4" />
              <span>LinkedIn</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
