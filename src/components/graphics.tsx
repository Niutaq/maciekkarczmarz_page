import { Palette, ExternalLink } from "lucide-react";
import { useLanguage } from "./language-provider";
import { motion } from "framer-motion";

export function Graphics() {
  const { t } = useLanguage();

  const mainProfile = {
    icon: Palette,
    link: "https://www.artstation.com/niutaq",
    data: t.graphics_items.main,
  };

  return (
    <section
      id="graphics"
      className="relative px-6 py-32 md:py-48 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-center text-center gap-6"
        >
          <h2 className="text-balance text-5xl md:text-8xl font-black tracking-tighter text-foreground uppercase">
            {t.graphics.title.split(' ')[0]} <br />
            <span className="bg-muted-foreground/40 bg-clip-text text-transparent italic font-serif px-2 -mx-2">
              {t.graphics.title.split(' ').slice(1).join(' ')}
            </span>
          </h2>
        </motion.div>

        <div style={{ perspective: 1000 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02, 
              rotateY: 5, 
              rotateX: -2,
              transition: { duration: 0.3 }
            }}
            className="relative group"
          >
            <a
              href={mainProfile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="backdrop-blur-2xl bg-[var(--surface)] border border-[var(--border)] relative overflow-hidden rounded-[3rem] p-10 md:p-16 transition-all duration-500 shadow-2xl group-hover:shadow-primary/20">
                {/* Subtle Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[2rem] bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground shadow-inner">
                    <mainProfile.icon className="h-10 w-10" />
                  </div>

                  <div className="flex flex-1 flex-col text-center md:text-left gap-4">
                    <h3 className="text-4xl md:text-5xl font-serif italic text-foreground mb-2">
                      {mainProfile.data.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-muted-foreground/80 font-light max-w-2xl">
                      {mainProfile.data.desc}
                    </p>
                    <div className="mt-4 inline-flex items-center justify-center md:justify-start gap-4 rounded-full backdrop-blur-xl bg-primary/10 border border-primary/20 px-8 py-3 font-mono text-sm font-black text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <ExternalLink className="h-5 w-5" />
                      <span className="tracking-widest uppercase">
                        {t.graphics.artstation_btn}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
