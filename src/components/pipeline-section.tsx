import {
  ArrowUpRight,
  BrainCircuit,
  CloudSun,
  Github,
  MonitorUp,
  Route,
  Waves,
} from "lucide-react";
import type { ElementType } from "react";
import { useLanguage } from "./language-provider";

export function PipelineSection() {
  const { t } = useLanguage();

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
      id: "grat",
      repo: "https://github.com/Niutaq/GRAT",
      image: "/grat.png",
      icon: CloudSun,
      data: t.projects_items.grat,
    },
  ];

  return (
    <section id="pipeline" className="section-shell">
      <div className="section-heading section-heading-wide">
        <p className="eyebrow">{t.projects.eyebrow}</p>
        <h2>{t.projects.title}</h2>
        <p>{t.projects.description}</p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            labels={{
              role: t.projects.role_label,
              constraint: t.projects.constraint_label,
              why: t.projects.why_label,
              stack: t.projects.stack_label,
              repo: t.projects.repo_btn,
            }}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
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
  index: number;
  labels: {
    role: string;
    constraint: string;
    why: string;
    stack: string;
    repo: string;
  };
}) {
  const Icon = project.icon;

  return (
    <article
      className={index < 2 ? "project-card project-card-featured" : "project-card"}
    >
      <div className="project-media">
        <img src={project.image} alt={project.data.title} loading="lazy" />
      </div>

      <div className="project-body">
        <div className="project-title-row">
          <div className="project-icon">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="project-id">Project / {project.id}</p>
            <h3>{project.data.title}</h3>
          </div>
        </div>

        <p className="project-desc">{project.data.desc}</p>

        <dl className="project-facts">
          <div>
            <dt>{labels.role}</dt>
            <dd>{project.data.role}</dd>
          </div>
          <div>
            <dt>{labels.constraint}</dt>
            <dd>{project.data.constraint}</dd>
          </div>
          <div>
            <dt>{labels.why}</dt>
            <dd>{project.data.impact}</dd>
          </div>
        </dl>

        <div className="project-footer">
          <div>
            <p className="project-stack-label">{labels.stack}</p>
            <div className="project-stack">
              {project.data.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="source-link">
            <Github className="h-4 w-4" />
            <span>{labels.repo}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
