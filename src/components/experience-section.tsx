import {
  BriefcaseBusiness,
  Calendar,
  ExternalLink,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { useLanguage } from "./language-provider";

type TimelineItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  desc: string;
};

export function ExperienceSection() {
  const { t, language } = useLanguage();

  return (
    <TimelineSection
      id="experience"
      eyebrow={t.experience.eyebrow}
      title={t.experience.title}
      description={t.experience.description}
      items={t.experience_items}
      icon="work"
      action={{
        href: "https://simplicitygames.pl/",
        label: language === "pl" ? "Simplicity Games" : "Simplicity Games",
      }}
    />
  );
}

export function EducationSection() {
  const { t } = useLanguage();

  return (
    <TimelineSection
      id="education"
      eyebrow={t.education.eyebrow}
      title={t.education.title}
      description={t.education.description}
      items={t.education.education_items}
      icon="education"
    />
  );
}

function TimelineSection({
  id,
  eyebrow,
  title,
  description,
  items,
  icon,
  action,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: TimelineItem[];
  icon: "work" | "education";
  action?: { href: string; label: string };
}) {
  const Icon = icon === "work" ? BriefcaseBusiness : GraduationCap;

  return (
    <section id={id} className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="section-heading lg:sticky lg:top-28">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
          {action && (
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button mt-8 w-fit"
            >
              {action.label}
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        <div className="timeline-list">
          {items.map((item) => (
            <article
              key={`${item.title}-${item.period}`}
              className="timeline-item"
            >
              <div className="timeline-marker">
                <Icon className="h-4 w-4" />
              </div>
              <div className="timeline-content">
                <div className="timeline-topline">
                  <h3>{item.title}</h3>
                  <span>{item.company}</span>
                </div>
                <div className="timeline-meta">
                  <span>
                    <Calendar className="h-3.5 w-3.5" />
                    {item.period}
                  </span>
                  <span>
                    <MapPin className="h-3.5 w-3.5" />
                    {item.location}
                  </span>
                </div>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
