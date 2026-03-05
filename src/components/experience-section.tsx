import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "./language-provider";
import { motion } from "framer-motion";

const experiences = [
  {
    type: "work",
    title: {
      pl: "Grafik 3D",
      en: "3D Artist",
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
      pl: "Październik 2022 - Luty 2026",
      en: "October 2022 - February 2026",
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
    <section id="experience" className="relative px-6 py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-5xl relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col items-center gap-6 text-center"
        >
          <div className="glass fruit-border px-4 py-1.5 rounded-full shadow-lg">
            <span className="font-mono text-[10px] tracking-[0.3em] text-primary font-black uppercase">
              Career Path
            </span>
          </div>
          <h2 className="text-balance text-5xl md:text-7xl font-black tracking-tighter text-foreground uppercase">
            {t.experience.title}
          </h2>
        </motion.div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background shadow-xl z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-transform duration-500 group-hover:scale-125 glass-strong fruit-border">
                <div className="h-2 w-2 rounded-full bg-primary glow-orange-sm animate-pulse" />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-strong fruit-border rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 shadow-2xl group-hover:shadow-primary/10">
                <div className="absolute inset-0 rounded-[2.5rem] glass-reflection opacity-10 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-3 text-primary">
                    <div className="p-2 rounded-xl bg-primary/10">
                      {exp.type === "work" ? (
                        <Briefcase className="h-4 w-4" />
                      ) : (
                        <GraduationCap className="h-4 w-4" />
                      )}
                    </div>
                    <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
                      {exp.type === "work"
                        ? t.experience.types.work
                        : t.experience.types.education}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight mb-2">
                    {exp.title[language]}
                  </h3>
                  
                  <div className="flex flex-col gap-1 mb-6">
                    <span className="text-lg font-bold text-primary italic">
                      {exp.company[language]}
                    </span>
                    <div className="flex flex-wrap items-center gap-4 text-[10px] font-black font-mono uppercase tracking-widest text-muted-foreground/60">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-3 w-3 text-primary" />
                        {exp.period[language]}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-3 w-3 text-primary" />
                        {exp.location[language]}
                      </span>
                    </div>
                  </div>

                  <p className="leading-relaxed text-muted-foreground/80 font-light text-lg">
                    {exp.description[language]}
                  </p>

                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-3 rounded-full glass fruit-border px-6 py-2.5 text-[10px] font-black text-primary uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all group/btn"
                    >
                      {language === "pl" ? "Strona" : "Website"}
                      <Briefcase className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
