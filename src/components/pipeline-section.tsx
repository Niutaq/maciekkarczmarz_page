import {
  Waves,
  ChevronRight,
  BrainCircuit,
  ExternalLink,
  TrendingUp,
  CloudSun,
  Box,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./language-provider";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "gix",
    label: {
      pl: "Gix",
      en: "Gix",
    },
    icon: TrendingUp,
    repo: "https://github.com/Niutaq/Gix",
    image: "/gix.png",
    description: {
      pl: "System monitorowania kursów walut w czasie rzeczywistym. Narzędzie agreguje dane z lokalnych punktów wymiany, dostarczając precyzyjne i bieżące informacje o rynku. Projekt hostowany na Digital Ocean, zoptymalizowany pod kątem wydajności kosztowej zgodnie z zasadami FOCUS FinOps.",
      en: "Real-time currency exchange monitoring system. The tool aggregates data from local exchange points, providing precise and up-to-date market information. Hosted on Digital Ocean and cost-optimized following FOCUS FinOps principles.",
    },
    tech: {
      pl: ["Go", "Monitoring na żywo", "FinTech"],
      en: ["Go", "Real-time Monitoring", "FinTech"],
    },
  },
  {
    id: "ai-agent",
    label: {
      pl: "Witryna z Agentem AI",
      en: "AI Agent Platform",
    },
    icon: BrainCircuit,
    repo: "https://git.ugotit.pl/wegotit/smartoffer",
    image: "/ai-agent.png",
    description: {
      pl: "System automatyzacji ofertowania dla AB Bechcicki. Transformuje zapytania w gotowe kosztorysy (Premium/Budżet), dobierając materiały według norm technicznych i parametrów, a nie tylko marki. Rozwiązanie oparte na architekturze RAG, workflow n8n oraz chmurze AWS, zapewniające bezbłędność skalowalność enterprise-grade.",
      en: "Automation system for AB Bechcicki. It transforms inquiries into ready-to-use cost estimates (Premium/Budget) by selecting materials based on technical standards and parameters, not just brands. Built on RAG architecture, n8n workflows, and AWS, ensuring enterprise-grade scalability.",
    },
    tech: {
      pl: ["n8n", "AWS", "Baza Danych"],
      en: ["n8n", "AWS", "Database"],
    },
  },
  {
    id: "grat",
    label: {
      pl: "GRAT",
      en: "GRAT",
    },
    icon: CloudSun,
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
    label: {
      pl: "GRATS",
      en: "GRATS",
    },
    icon: Box,
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
    label: {
      pl: "Sand-Simulation",
      en: "Sand-Simulation",
    },
    icon: Waves,
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
    <section
      id="pipeline"
      className="relative px-6 py-32 md:py-48 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col items-center gap-6 text-center"
        >
          <h2 className="text-balance text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-foreground uppercase">
            {t.projects.title}
          </h2>
          <p className="max-w-2xl text-pretty text-lg font-light leading-relaxed text-muted-foreground/70">
            {t.projects.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: project list - Dock Style */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {projects.map((project) => {
              const Icon = project.icon;
              const isActive = activeId === project.id;
              const label =
                project.label[language as keyof typeof project.label];

              return (
                <button
                  key={project.id}
                  onClick={() => setActiveId(project.id)}
                  className={`group relative flex items-center gap-6 rounded-[2rem] px-6 py-5 text-left transition-all duration-500 ${
                    isActive
                      ? "glass-strong fruit-border shadow-2xl scale-[1.05] z-10"
                      : "hover:bg-white/5 opacity-60 hover:opacity-100"
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 rounded-[2rem] glass-reflection opacity-20 pointer-events-none" />
                  )}
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg rotate-3"
                        : "bg-muted/50 text-muted-foreground group-hover:bg-white/10 group-hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <span
                      className={`text-lg font-black tracking-tight transition-colors uppercase ${isActive ? "text-foreground" : "text-muted-foreground/80 group-hover:text-foreground"}`}
                    >
                      {label}
                    </span>
                    <span className="font-mono text-[9px] text-primary/60 font-black uppercase tracking-[0.2em]">
                      {project.tech[language].slice(0, 2).join(" • ")}
                    </span>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 shrink-0 transition-all duration-500 ${isActive ? "translate-x-0 text-primary opacity-100" : "-translate-x-2 text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-60"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: detail card with AnimatePresence */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-strong fruit-border w-full rounded-[3rem] overflow-hidden shadow-2xl"
                >
                  <div className="absolute inset-0 glass-reflection opacity-10 pointer-events-none" />

                  <a
                    href={active.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block w-full aspect-video overflow-hidden border-b border-white/5"
                  >
                    <img
                      src={active.image}
                      alt={active.label[language as keyof typeof active.label]}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 backdrop-blur-sm">
                      <div className="flex items-center gap-3 rounded-2xl bg-primary px-6 py-3 font-mono text-xs font-black text-white shadow-xl uppercase tracking-widest">
                        <ExternalLink className="h-4 w-4" />
                        <span>
                          {language === "pl" ? "Repozytorium" : "Repository"}
                        </span>
                      </div>
                    </div>
                  </a>

                  <div className="p-10 md:p-14">
                    <div className="mb-8 flex items-center gap-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-primary/10 shadow-inner">
                        <active.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-3xl font-black text-foreground uppercase tracking-tighter">
                        {active.label[language as keyof typeof active.label]}
                      </h3>
                    </div>

                    <p className="mb-10 text-lg font-light leading-relaxed text-muted-foreground/80">
                      {active.description[language]}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {active.tech[language].map((tech) => (
                        <span
                          key={tech}
                          className="glass fruit-border rounded-xl px-4 py-2 font-mono text-[10px] font-black text-primary uppercase tracking-[0.2em] shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
