"use client"

import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { label: "Pipeline", href: "#pipeline" },
  { label: "After Hours", href: "#after-hours" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-4 md:px-12">
      <a
        href="#"
        className="font-mono text-sm font-semibold tracking-wider text-foreground transition-colors hover:text-primary"
      >
        {"<dev />"}
      </a>
      <div className="flex items-center gap-1 glass-strong rounded-2xl px-2 py-1.5">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-glass-highlight hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
        <div className="mx-1 h-6 w-px bg-border" />
        <ThemeToggle />
      </div>
    </nav>
  )
}
