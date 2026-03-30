import {
  Waves,
  BrainCircuit,
  TrendingUp,
  CloudSun,
  Box,
  Github,
} from "lucide-react";
import { useLanguage } from "./language-provider";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function PipelineSection() {
  const { t, language } = useLanguage();

  const projects = [
    {
      id: "gix",
      icon: TrendingUp,
      repo: "https://github.com/Niutaq/Gix",
      image: "/gix.png",
      data: t.projects_items.gix,
    },
    {
      id: "ai-agent",
      icon: BrainCircuit,
      repo: "https://git.ugotit.pl/wegotit/smartoffer",
      image: "/ai-agent.png",
      data: t.projects_items.ai_agent,
    },
    {
      id: "grat",
      icon: CloudSun,
      repo: "https://github.com/Niutaq/GRAT",
      image: "/grat.png",
      data: t.projects_items.grat,
    },
    {
      id: "grats",
      icon: Box,
      repo: "https://github.com/Niutaq/GRATS",
      image: "/grats.png",
      data: t.projects_items.grats,
    },
    {
      id: "sand",
      icon: Waves,
      repo: "https://github.com/Niutaq/Sand-Simulation",
      image: "/sand.png",
      data: t.projects_items.sand,
    },
  ];

  return (
    <section
      id="pipeline"
      className="relative px-6 py-32 md:py-48 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col items-center gap-6 text-center"
        >
          <h2 className="text-balance text-5xl md:text-8xl font-black tracking-tighter text-foreground uppercase">
            {t.projects.title}
          </h2>
          <p className="max-w-2xl text-pretty text-lg font-light leading-relaxed text-muted-foreground/70">
            {t.projects.description}
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
          style={{ perspective: 1000 }}
        >
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: -2,
                  transition: { duration: 0.3 },
                }}
                className={cn(
                  "relative group",
                  index === 0
                    ? "md:col-span-8"
                    : index === 1
                      ? "md:col-span-4"
                      : "md:col-span-4",
                )}
              >
                <div className="h-full backdrop-blur-2xl bg-[var(--surface)] border border-[var(--border)] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-primary/10 relative flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden border-b border-[var(--border)]">
                    <img
                      src={project.image}
                      alt={project.data.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] to-transparent opacity-40" />
                  </div>

                  <div className="p-8 md:p-10 flex flex-col flex-1">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-3xl font-serif italic text-foreground">
                          {project.data.title}
                        </h3>
                      </div>
                      <div className="hidden sm:flex flex-col items-end font-mono text-[8px] opacity-30 uppercase tracking-[0.2em]">
                        <span>Project ID: {project.id}</span>
                      </div>
                    </div>

                    <p className="mb-8 text-lg font-light leading-relaxed text-muted-foreground/80 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                      {project.data.desc}
                    </p>

                    <div className="mt-auto flex flex-col gap-8">
                      <div className="flex flex-wrap gap-2">
                        {project.data.tech.map((tech) => (
                          <span
                            key={tech}
                            className="backdrop-blur-xl bg-primary/5 border border-primary/10 rounded-lg px-3 py-1.5 font-mono text-[10px] font-black text-primary uppercase tracking-[0.2em]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 rounded-full backdrop-blur-xl bg-primary/10 border border-primary/20 px-6 py-2.5 text-[10px] font-black text-primary uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all group/btn"
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>{t.projects.repo_btn}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
