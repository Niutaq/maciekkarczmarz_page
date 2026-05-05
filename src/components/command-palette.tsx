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
  Briefcase,
  FileText,
  GraduationCap,
  Layers3,
  LayoutGrid,
  Mail,
  Network,
  Search,
} from "lucide-react";
import { useLanguage } from "./language-provider";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { language, t } = useLanguage();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((value) => !value);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Command Palette"
        className="command-trigger"
      >
        <Search className="h-4 w-4" />
        <span>Ctrl K</span>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={language === "pl" ? "Szukaj sekcji..." : "Search sections..."} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading={language === "pl" ? "Nawigacja" : "Navigation"}>
            <CommandItem onSelect={() => runCommand(() => goTo("bridge"))}>
              <Network className="mr-2 h-4 w-4" />
              <span>{t.nav.bridge}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => goTo("pipeline"))}>
              <LayoutGrid className="mr-2 h-4 w-4" />
              <span>{t.nav.projects}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => goTo("graphics"))}>
              <Layers3 className="mr-2 h-4 w-4" />
              <span>{t.nav.graphics}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => goTo("experience"))}>
              <Briefcase className="mr-2 h-4 w-4" />
              <span>{t.nav.experience}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => goTo("education"))}>
              <GraduationCap className="mr-2 h-4 w-4" />
              <span>{t.nav.education}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => goTo("cv"))}>
              <FileText className="mr-2 h-4 w-4" />
              <span>{t.nav.documents}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => goTo("contact"))}>
              <Mail className="mr-2 h-4 w-4" />
              <span>{t.nav.contact}</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading={language === "pl" ? "Dokumenty" : "Documents"}>
            <CommandItem
              onSelect={() =>
                runCommand(() => {
                  window.open(language === "pl" ? "/cv-polskie.pdf" : "/cv-english.pdf", "_blank");
                })
              }
            >
              <FileText className="mr-2 h-4 w-4" />
              <span>{t.documents.cv_title}</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() => {
                  window.location.href = `mailto:${t.contact.email}`;
                })
              }
            >
              <Mail className="mr-2 h-4 w-4" />
              <span>{t.contact.email}</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
