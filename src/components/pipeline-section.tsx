import {
  ArrowUpRight,
  Box,
  BrainCircuit,
  Github,
  MonitorUp,
  Route,
  Waves,
} from "lucide-react";
import React, { type ElementType } from "react";
import { useLanguage } from "./language-provider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function PipelineSection() {
  const { t } = useLanguage();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const projects = [
    {
      id: "gix",
      repo: "https://github.com/Niutaq/Gix",
      image: "/gix.png",
      icon: MonitorUp,
      data: t.projects_items.gix,
    },
    {
      id: "smartoffer",
      repo: "https://git.ugotit.pl/wegotit/smartoffer",
      image: "/ai-agent.png",
      icon: BrainCircuit,
      data: t.projects_items.ai_agent,
    },
    {
      id: "grats",
      repo: "https://github.com/Niutaq/GRATS",
      image: "/grats.png",
      icon: Route,
      data: t.projects_items.grats,
    },
    {
      id: "sand",
      repo: "https://github.com/Niutaq/Sand-Simulation",
      image: "/sand.png",
      icon: Waves,
      data: t.projects_items.sand,
    },
    {
      id: "nequ3d",
      repo: "https://github.com/Niutaq/Nequ3D",
      image: "/nequ3d.png",
      icon: Box,
      data: t.projects_items.nequ3d,
    },
  ];

  const total = projects.length;

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="pipeline" className="section-shell overflow-hidden">
      <div className="mb-12 w-full mx-auto md:mx-0">
        <p className="eyebrow">{t.projects.eyebrow}</p>
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-[3.5rem] mb-4 text-foreground">{t.projects.title}</h2>
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed md:text-left max-w-none">{t.projects.description}</p>
      </div>

      <div className="relative mt-8 md:mt-12">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            duration: 85,
            skipSnaps: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-8">
            {projects.map((project, index) => (
              <CarouselItem
                key={project.id}
                className="pl-4 md:pl-8 md:basis-[85%] lg:basis-[75%]"
              >
                <div
                  className={cn(
                    "h-full relative py-4",
                    index === current
                      ? "opacity-100 z-10"
                      : "opacity-30 z-0"
                  )}
                  style={{
                    transition: "opacity 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                >
                  <ProjectCard
                    project={project}
                    labels={{
                      role: t.projects.role_label,
                      constraint: t.projects.constraint_label,
                      why: t.projects.why_label,
                      repo: t.projects.repo_btn,
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex items-center justify-between md:mt-12 px-2">
            <div className="flex gap-2.5">
              {projects.map((_, i) => (
                <button
                  key={i}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    i === current ? "w-10 bg-primary shadow-[0_0_12px_rgba(159,106,59,0.6)]" : "w-2.5 bg-primary/20 hover:bg-primary/40"
                  )}
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 border-primary/20 hover:bg-primary/10 hover:text-primary" />
              <CarouselNext className="static translate-y-0 h-12 w-12 border-primary/20 hover:bg-primary/10 hover:text-primary" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  labels,
}: {
  project: {
    id: string;
    repo: string;
    image: string;
    icon: ElementType;
    data: {
      title: string;
      role: string;
      constraint: string;
      desc: string;
      impact: string;
      tech: string[];
    };
  };
  labels: {
    role: string;
    constraint: string;
    why: string;
    repo: string;
  };
}) {
  const Icon = project.icon;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/50 bg-card/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-primary/40 md:flex-row">
      <div className="project-image-container relative h-72 w-full shrink-0 flex items-center justify-center overflow-hidden border-b border-border/40 md:h-auto md:w-1/2 md:border-b-0 md:border-r bg-black/5 dark:bg-white/5">
        <img
          src={project.image}
          alt={project.data.title}
          className="h-full w-full object-contain p-6 md:p-10 drop-shadow-2xl transition-transform duration-1000 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5 rounded-t-[2rem] md:rounded-none md:rounded-l-[2rem] pointer-events-none" />
      </div>

      <div className="flex flex-1 flex-col p-8 md:p-10 lg:p-12 relative z-10 bg-card/40">
        <div className="mb-6 flex items-center">
          <h3 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.5rem] text-foreground">
            {project.data.title}
          </h3>
        </div>

        <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
          {project.data.desc}
        </p>

        <dl className="mb-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5 border-l-2 border-primary/30 pl-5">
            <dt className="text-[0.65rem] font-bold uppercase tracking-widest text-primary">
              {labels.role}
            </dt>
            <dd className="text-sm font-medium text-foreground leading-snug">{project.data.role}</dd>
          </div>
          <div className="flex flex-col gap-1.5 border-l-2 border-primary/30 pl-5">
            <dt className="text-[0.65rem] font-bold uppercase tracking-widest text-primary">
              {labels.constraint}
            </dt>
            <dd className="text-sm font-medium text-foreground leading-snug">{project.data.constraint}</dd>
          </div>
          <div className="flex flex-col gap-1.5 border-l-2 border-primary/30 pl-5 sm:col-span-2">
            <dt className="text-[0.65rem] font-bold uppercase tracking-widest text-primary">
              {labels.why}
            </dt>
            <dd className="text-sm font-medium text-foreground leading-snug">{project.data.impact}</dd>
          </div>
        </dl>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-8 border-t border-border/50 pt-8">
          <div className="flex-1">
            <div className="flex flex-wrap gap-2.5">
              {project.data.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/40 bg-surface/50 px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm backdrop-blur-md transition-colors hover:bg-surface hover:text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button group/btn h-12 gap-3 px-8 text-sm shrink-0"
          >
            <Github className="h-5 w-5" />
            <span>{labels.repo}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
