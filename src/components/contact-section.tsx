import { useState } from "react";
import { Github, Linkedin, Send, ExternalLink, Box } from "lucide-react";
import { useLanguage } from "./language-provider";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/niutaq",
    handle: "@niutaq",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maciej-karczmarz-b5b444237",
    handle: "/maciej-karczmarz",
  },
  {
    icon: Box,
    label: "ArtStation",
    href: "https://www.artstation.com/niutaq",
    handle: "/niutaq",
  },
];

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center text-center">
        <div className="mb-16 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary/50" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              {t.contact.subtitle}
            </span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t.contact.title}
          </h2>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.contact.description}
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-md">
          <h3 className="mb-2 text-[10px] font-bold tracking-widest text-muted-foreground uppercase font-mono">
            {t.contact.links_title}
          </h3>

          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass clay group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 hover:glow-orange-sm hover:scale-[1.02] macos-shadow border border-white/5 w-full text-left"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="font-bold text-foreground">
                    {link.label}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-tighter">
                    {link.handle}
                  </span>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            );
          })}

          <a
            href="mailto:maciekkar1305@gmail.com"
            className="glass clay group mt-2 flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 hover:glow-orange-sm hover:scale-[1.02] macos-shadow border border-white/5 w-full text-left bg-primary/5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Send className="h-5 w-5" />
            </div>
            <div className="flex flex-1 flex-col">
              <span className="font-bold text-foreground">Email</span>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-tighter">
                maciekkar1305@gmail.com
              </span>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
