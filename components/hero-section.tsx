"use client"

import { ArrowDown, Download, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 pb-12">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/3 h-72 w-72 rounded-full bg-primary/8 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-16">
        {/* Left: Info */}
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 animate-pulse rounded-full bg-primary glow-orange-sm" />
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Available for work
            </span>
          </div>

          <h1 className="text-balance text-5xl leading-tight font-bold tracking-tight text-foreground md:text-7xl">
            Building the{" "}
            <span className="text-primary">future</span>,{" "}
            <br className="hidden md:block" />
            one deploy at a time.
          </h1>

          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Full-stack engineer specializing in cloud infrastructure,
            CI/CD pipelines, and modern web applications. I turn complex systems
            into elegant, reliable solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:glow-orange hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href="#"
              className="glass clay inline-flex items-center gap-2.5 rounded-2xl px-7 py-3.5 font-semibold text-foreground transition-all duration-300 hover:text-primary hover:glow-orange-sm active:scale-[0.98]"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>

        {/* Right: Glass card with stats */}
        <div className="w-full max-w-sm lg:max-w-md">
          <div className="glass-strong clay rounded-3xl p-8">
            {/* Terminal-style header */}
            <div className="mb-6 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary/60" />
              <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                ~/portfolio
              </span>
            </div>

            {/* Code block */}
            <div className="space-y-3 font-mono text-sm">
              <div>
                <span className="text-muted-foreground">const </span>
                <span className="text-primary">developer</span>
                <span className="text-muted-foreground">{" = {"}</span>
              </div>
              <div className="pl-4">
                <span className="text-muted-foreground">name: </span>
                <span className="text-foreground">{'"Your Name"'}</span>
                <span className="text-muted-foreground">,</span>
              </div>
              <div className="pl-4">
                <span className="text-muted-foreground">role: </span>
                <span className="text-foreground">{'"DevOps Engineer"'}</span>
                <span className="text-muted-foreground">,</span>
              </div>
              <div className="pl-4">
                <span className="text-muted-foreground">stack: </span>
                <span className="text-foreground">
                  {"["}
                  <span className="text-primary">{'"K8s"'}</span>
                  {", "}
                  <span className="text-primary">{'"AWS"'}</span>
                  {", "}
                  <span className="text-primary">{'"Go"'}</span>
                  {"]"}
                </span>
                <span className="text-muted-foreground">,</span>
              </div>
              <div className="pl-4">
                <span className="text-muted-foreground">deploys: </span>
                <span className="text-primary font-bold">2847</span>
                <span className="text-muted-foreground">,</span>
              </div>
              <div>
                <span className="text-muted-foreground">{"}"}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-border" />

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-xs text-muted-foreground">Years Exp</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-xs text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#pipeline"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to pipeline section"
        >
          <span className="text-xs font-medium tracking-widest uppercase">
            Explore
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
