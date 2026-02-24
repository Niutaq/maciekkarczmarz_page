"use client"

import { Github, Linkedin, Send, ExternalLink } from "lucide-react"
import { useState } from "react"

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    handle: "@yourusername",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    handle: "/in/yourusername",
  },
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  return (
    <section
      id="contact"
      className="relative px-6 py-24 md:py-32"
    >
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 max-w-12 bg-primary/50" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {"Let's Connect"}
          </h2>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Have a project in mind or just want to say hello?
            I&apos;m always open to discussing new opportunities.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Left: Social links */}
          <div className="flex flex-col gap-6 lg:w-80">
            <h3 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
              Links
            </h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass clay group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 hover:glow-orange-sm hover:scale-[1.01]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <span className="font-semibold text-foreground">
                        {link.label}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {link.handle}
                      </span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                )
              })}
            </div>

            {/* Email shortcut */}
            <a
              href="mailto:hello@example.com"
              className="glass clay group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 hover:glow-orange-sm hover:scale-[1.01]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Send className="h-5 w-5" />
              </div>
              <div className="flex flex-1 flex-col">
                <span className="font-semibold text-foreground">Email</span>
                <span className="font-mono text-xs text-muted-foreground">
                  hello@example.com
                </span>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          </div>

          {/* Right: Contact form */}
          <div className="flex-1">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="glass-strong clay rounded-3xl p-8"
            >
              <h3 className="mb-6 text-lg font-bold text-foreground">
                Send a message
              </h3>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, name: e.target.value }))
                    }
                    className="clay-pressed rounded-xl bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/40 focus:outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, email: e.target.value }))
                    }
                    className="clay-pressed rounded-xl bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/40 focus:outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, message: e.target.value }))
                    }
                    className="clay-pressed resize-none rounded-xl bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/40 focus:outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:glow-orange hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
