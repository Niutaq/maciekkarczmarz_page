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
} from "@/components/ui/command";
import { 
  Search, 
  LayoutGrid, 
  Palette, 
  Briefcase, 
  FileText, 
  Mail,
  Moon,
  Sun,
  Languages
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
        aria-label="Open Command Palette"
        className="fixed bottom-10 right-10 md:bottom-14 md:right-14 z-40 flex h-12 w-12 items-center justify-center rounded-2xl glass-strong clay macos-shadow transition-all duration-300 hover:scale-110 hover:glow-primary-sm"
      >
        <Search className="h-5 w-5 text-muted-foreground" />
        <span className="sr-only">Press Ctrl+K to open</span>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={language === "pl" ? "Czego szukasz?..." : "Type a command or search..."} />
        <CommandList className="glass-strong border-white/10">
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading={language === "pl" ? "Nawigacja" : "Navigation"}>
            <CommandItem onSelect={() => runCommand(() => {
              const el = document.getElementById("pipeline");
              el?.scrollIntoView({ behavior: "smooth" });
            })}>
              <LayoutGrid className="mr-2 h-4 w-4" />
              <span>{t.nav.projects}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => {
              const el = document.getElementById("graphics");
              el?.scrollIntoView({ behavior: "smooth" });
            })}>
              <Palette className="mr-2 h-4 w-4" />
              <span>{t.nav.graphics}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => {
              const el = document.getElementById("experience");
              el?.scrollIntoView({ behavior: "smooth" });
            })}>
              <Briefcase className="mr-2 h-4 w-4" />
              <span>{t.nav.experience}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => {
              const el = document.getElementById("cv");
              el?.scrollIntoView({ behavior: "smooth" });
            })}>
              <FileText className="mr-2 h-4 w-4" />
              <span>{t.nav.documents}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            })}>
              <Mail className="mr-2 h-4 w-4" />
              <span>{t.nav.contact}</span>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading={language === "pl" ? "Ustawienia" : "Settings"}>
            <CommandItem onSelect={() => runCommand(() => setTheme(theme === "dark" ? "light" : "dark"))}>
              {theme === "dark" ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
              <span>{language === "pl" ? "Przełącz motyw" : "Toggle Theme"}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setLanguage(language === "pl" ? "en" : "pl"))}>
              <Languages className="mr-2 h-4 w-4" />
              <span>{language === "pl" ? "Switch to English" : "Zmień na polski"}</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
