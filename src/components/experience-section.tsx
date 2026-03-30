import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "./language-provider";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const { t, language } = useLanguage();

  const experiences = t.experience_items.map((exp: any, index: number) => ({
    ...exp,
    type: index === 0 ? "work" : "education",
    link: index === 0 ? "https://simplicitygames.pl/" : undefined,
  }));

  return (
    <section
      id="experience"
      className="relative px-6 py-32 md:py-48 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col items-center gap-6 text-center"
        >
          <h2 className="text-balance text-5xl md:text-8xl font-black tracking-tighter text-foreground uppercase">
            {t.experience.title}
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
          style={{ perspective: 1000 }}
        >
          {experiences.map((exp: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.4 },
              }}
              className={cn(
                "relative flex flex-col group",
                index === 0 ? "md:col-span-8" : "md:col-span-4",
                index === 2 && "md:col-span-12", // Full width for the last one
              )}
            >
              <div className="h-full backdrop-blur-2xl bg-[var(--surface)] border border-[var(--border)] rounded-[2rem] p-8 md:p-12 transition-all duration-500 shadow-2xl overflow-hidden relative">
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-primary">
                      <div className="p-2 rounded-xl bg-primary/10">
                        {exp.type === "work" ? (
                          <Briefcase className="h-5 w-5" />
                        ) : (
                          <GraduationCap className="h-5 w-5" />
                        )}
                      </div>
                      <span className="font-mono text-xs font-black uppercase tracking-[0.2em] opacity-60">
                        {exp.type === "work"
                          ? t.experience.types.work
                          : t.experience.types.education}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif italic text-foreground mb-4">
                    {exp.title}
                  </h3>

                  <div className="flex flex-col gap-2 mb-8">
                    <span className="text-xl font-bold text-primary italic font-serif">
                      {exp.company}
                    </span>
                    <div className="flex flex-wrap items-center gap-6 text-[11px] font-black font-mono uppercase tracking-widest text-muted-foreground/60">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="leading-relaxed text-muted-foreground/80 font-light text-lg mb-8">
                    {exp.desc}
                  </p>

                  <div className="mt-auto">
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-full backdrop-blur-xl bg-primary/10 border border-primary/20 px-8 py-3 text-[11px] font-black text-primary uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all group/btn"
                      >
                        {language === "pl" ? "Strona" : "Website"}
                        <Briefcase className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
