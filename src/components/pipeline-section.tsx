import {
  Cpu,
  Globe,
  Monitor,
  Cloud,
  ChevronRight,
  Bot,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./language-provider";

const projects = [
  {
    id: "gix",
    label: "Gix",
    icon: Cloud,
    repo: "https://github.com/Niutaq/Gix",
    image: "/gix.png",
    description: {
      pl: "System monitorowania kursów walut w czasie rzeczywistym. Narzędzie agreguje dane z lokalnych punktów wymiany, dostarczając precyzyjne i bieżące informacje o rynku.",
      en: "Real-time currency exchange monitoring system. The tool aggregates data from local exchange points, providing precise and up-to-date market information.",
    },
    tech: {
      pl: ["Go", "Monitoring na żywo", "FinTech"],
      en: ["Go", "Real-time Monitoring", "FinTech"],
    },
  },
  {
    id: "ai-agent",
    label: "Witryna z Agentem AI",
    icon: Bot,
    repo: "https://git.ugotit.pl/wegotit/smartoffer",
    image: "/ai-agent.png",
    description: {
      pl: "Inteligentna witryna zintegrowana z agentem AI. Wykorzystuje n8n do automatyzacji procesów i analizy zapytań, hostowana w chmurze AWS z relacyjną bazą danych do zarządzania wiedzą.",
      en: "Intelligent website integrated with an AI agent. Uses n8n for process automation and query analysis, hosted on AWS cloud with a relational database for knowledge management.",
    },
    tech: {
      pl: ["n8n", "AWS", "Baza Danych"],
      en: ["n8n", "AWS", "Database"],
    },
  },
  {
    id: "grat",
    label: "GRAT (JavaFX)",
    icon: Globe,
    repo: "https://github.com/Niutaq/GRAT",
    image: "/grat.png",
    description: {
      pl: "Interaktywny system wizualizacji danych pogodowych. Aplikacja agreguje informacje z OpenWeatherMap, Google Maps oraz Windy.",
      en: "Interactive weather data visualization system. The application aggregates information from OpenWeatherMap, Google Maps, and Windy.",
    },
    tech: {
      pl: ["Java", "JavaFX", "Integracja API"],
      en: ["Java", "JavaFX", "API Integration"],
    },
  },
  {
    id: "grats",
    label: "GRATS (C++, OpenGL)",
    icon: Monitor,
    repo: "https://github.com/Niutaq/GRATS",
    image: "/grats.png",
    description: {
      pl: "Minimalistyczny renderer graficzny stworzony jako platforma edukacyjna dla OpenGL i podstaw programowania graficznego.",
      en: "A minimalist graphics renderer created as an educational platform for OpenGL and graphics programming basics.",
    },
    tech: {
      pl: ["C++", "OpenGL", "Grafika"],
      en: ["C++", "OpenGL", "Graphics"],
    },
  },
  {
    id: "sand",
    label: "Sand-Simulation",
    icon: Cpu,
    repo: "https://github.com/Niutaq/Sand-Simulation",
    image: "/sand.png",
    description: {
      pl: "Symulacja fizyczna skupiona na naturalnym zachowaniu cząstek, przydatna do zrozumienia interakcji środowiskowych.",
      en: "A physical simulation focused on the natural behavior of particles, useful for understanding environmental interactions.",
    },
    tech: {
      pl: ["C++", "Fizyka", "Symulacja"],
      en: ["C++", "Physics", "Simulation"],
    },
  },
];

export function PipelineSection() {
  const [activeId, setActiveId] = useState("gix");
  const { t, language } = useLanguage();
  const active = projects.find((p) => p.id === activeId);

  return (
    <section id="pipeline" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary/50" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase"></span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t.projects.title}
          </h2>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.projects.description}
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-6">
          {/* Left: project list */}
          <div className="flex flex-1 flex-col gap-3">
            {projects.map((project) => {
              const Icon = project.icon;
              const isActive = activeId === project.id;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveId(project.id)}
                  className={`group flex items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? "glass-strong clay glow-orange-sm scale-[1.02]"
                      : "hover:bg-white/5"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground glow-orange-sm"
                        : "bg-muted text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <span
                      className={`font-bold transition-colors ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}
                    >
                      {project.label}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-tighter">
                      {project.tech[language].join(" / ")}
                    </span>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 transition-all duration-300 ${isActive ? "translate-x-0 text-primary opacity-100" : "-translate-x-1 text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-60"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: detail card */}
          {active && (
            <div className="flex flex-1 items-start lg:pt-0">
              <div className="glass-strong clay w-full rounded-3xl overflow-hidden macos-shadow border border-white/5">
                <a
                  href={active.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block w-full overflow-hidden"
                >
                  <img
                    src={active.image}
                    alt={active.label}
                    loading="lazy"
                    decoding="async"
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 font-mono text-xs font-bold text-white">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black/60 to-transparent" />
                </a>

                <div className="p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <active.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {active.label}
                    </h3>
                  </div>

                  <p className="mb-8 leading-relaxed text-muted-foreground">
                    {active.description[language]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {active.tech[language].map((tech) => (
                      <span
                        key={tech}
                        className="clay-pressed rounded-xl bg-white/5 px-3 py-1.5 font-mono text-[10px] font-bold text-foreground uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
