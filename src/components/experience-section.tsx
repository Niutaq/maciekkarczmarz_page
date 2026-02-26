import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "./language-provider";

const experiences = [
  {
    type: "work",
    title: {
      pl: "Artysta Techniczny",
      en: "Technical Artist",
    },
    company: {
      pl: "Simplicity Games",
      en: "Simplicity Games",
    },
    location: {
      pl: "Rzeszów, Polska",
      en: "Rzeszów, Poland",
    },
    period: {
      pl: "Listopad 2024 - Styczeń 2025",
      en: "November 2024 - January 2025",
    },
    description: {
      pl: "Tworzenie i optymalizacja modeli 3D w Blenderze, tworzenie siatek low-poly, LOD i kolizji. Teksturowanie PBR w Substance Painter, optymalizacja pod silnik Unity.",
      en: "Creating and optimizing 3D models in Blender, creating low-poly meshes, LODs, and collision meshes. PBR texturing in Substance Painter, optimization for the Unity engine.",
    },
    link: "https://simplicitygames.pl/",
  },
  {
    type: "education",
    title: {
      pl: "Informatyka (Studia inżynierskie)",
      en: "Computer Science (Bachelor's Degree)",
    },
    company: {
      pl: "Politechnika Rzeszowska",
      en: "Rzeszow University of Technology",
    },
    location: {
      pl: "Wydział Elektrotechniki i Informatyki",
      en: "Faculty of Electrical and Computer Engineering",
    },
    period: {
      pl: "Październik 2022 - Marzec 2026",
      en: "October 2022 - March 2026",
    },
    description: {
      pl: "Projekty w C++ (symulacje graficzne), analiza danych (Python, MATLAB, R), React, badania nad AI (MLP), udział w hackathonach.",
      en: "Projects in C++ (graphic simulations), data analysis (Python, MATLAB, R), React, AI research (MLP), participation in hackathons.",
    },
  },
  {
    type: "education",
    title: {
      pl: "Matematyka / Fizyka / Informatyka",
      en: "Math / Physics / CS",
    },
    company: {
      pl: "Samorządowe Liceum Ogólnokształcące",
      en: "Public General Secondary School",
    },
    location: {
      pl: "Stalowa Wola",
      en: "Stalowa Wola",
    },
    period: {
      pl: "Wrzesień 2019 - Maj 2022",
      en: "September 2019 - May 2022",
    },
    description: {
      pl: "Przedmioty rozszerzone: Matematyka (80%), Angielski (84%), Informatyka (53%), Fizyka (50%).",
      en: "Extended subjects: Mathematics (80%), English (84%), Computer Science (53%), Physics (50%).",
    },
  },
];

export function ExperienceSection() {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary/50" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase"></span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t.experience.title}
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border last:before:bottom-8"
            >
              <div className="absolute -left-2 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background shadow-[0_0_10px_rgba(var(--primary),0.5)]" />

              <div className="glass-strong clay rounded-3xl p-8 transition-all duration-300 hover:scale-[1.01] macos-shadow border border-white/5">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                  <div className="flex-1">
                    <div className="mb-3 flex items-center gap-2 text-primary">
                      {exp.type === "work" ? (
                        <Briefcase className="h-4 w-4" />
                      ) : (
                        <GraduationCap className="h-4 w-4" />
                      )}
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest">
                        {exp.type === "work"
                          ? t.experience.types.work
                          : t.experience.types.education}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {exp.title[language]}
                    </h3>
                    <p className="text-lg font-medium text-primary/80 mt-1">
                      {exp.company[language]}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-xs text-muted-foreground md:items-end font-mono">
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      {exp.period[language]}
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {exp.location[language]}
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-muted-foreground text-pretty">
                  {exp.description[language]}
                </p>

                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest hover:underline group"
                  >
                    {language === "pl" ? "Oficjalna Strona" : "Official Site"}
                    <Briefcase className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
