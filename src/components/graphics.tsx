import { Palette, ExternalLink } from "lucide-react";
import { useLanguage } from "./language-provider";
import { motion, useMotionValue, useTransform } from "framer-motion";

export function Graphics() {
  const { language } = useLanguage();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const mainProfile = {
    icon: Palette,
    title: {
      pl: "Grafika 3D (techniczna)",
      en: "3D Graphics & Technical Art",
    },
    description: {
      pl: "Kompleksowe podejście do tworzenia grafiki trójwymiarowej. Specjalizuję się w modelowaniu w programie Blender, budowaniu środowisk w Unreal Engine 5 oraz generacji proceduralnej terenu i zasobów za pomocą Gaea i Houdini. Do teksturowania PBR i optymalizacji materiałów wykorzystuję Substance 3D Painter. Moje prace łączą wysoką jakość wizualną z techniczną optymalizacją (low-poly, LOD) pod kątem silników gier. Pełny zbiór moich modeli i renderów znajduje się na moim profilu ArtStation.",
      en: "A comprehensive approach to 3D graphics. I specialize in modeling in Blender, building environments in Unreal Engine 5, and procedural terrain and asset generation using Gaea and Houdini. I use Substance 3D Painter for PBR texturing and material optimization. My work combines high visual quality with technical optimization (low-poly, LOD) for game engines. A full collection of my models and renders can be found on my ArtStation profile.",
    },
    link: "https://www.artstation.com/niutaq",
    linkText: {
      pl: "Profil ArtStation",
      en: "ArtStation Profile",
    },
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const currentTitle = mainProfile.title[language];
  const currentDescription = mainProfile.description[language];
  const currentLinkText = mainProfile.linkText[language];

  return (
    <section
      id="graphics"
      className="relative px-6 py-32 md:py-48 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-center text-center gap-6"
        >
          <h2 className="text-balance text-5xl md:text-7xl font-black tracking-tighter text-foreground uppercase">
            {language === "pl" ? "Realizacje" : "Visual"} <br />
            <span className="text-muted-foreground/40">
              {language === "pl" ? "Graficzne" : "Graphics"}
            </span>
          </h2>
        </motion.div>

        <motion.div
          style={{ rotateX, rotateY, perspective: 1000 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative group"
        >
          <a
            href={mainProfile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="glass-strong fruit-border relative overflow-hidden rounded-[3rem] p-10 md:p-16 transition-all duration-500 shadow-2xl group-hover:shadow-primary/20">
              {/* Glossy Overlay */}
              <div className="absolute inset-0 glass-reflection opacity-10 group-hover:opacity-30 transition-opacity" />

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[2rem] bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground shadow-inner">
                  <mainProfile.icon className="h-10 w-10" />
                </div>

                <div className="flex flex-1 flex-col text-center md:text-left gap-4">
                  <h3 className="text-3xl font-black text-foreground uppercase tracking-tight">
                    {currentTitle}
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground/80 font-light max-w-2xl">
                    {currentDescription}
                  </p>
                  <div className="inline-flex items-center justify-center md:justify-start gap-3 font-mono text-sm font-black text-primary group-hover:translate-x-2 transition-transform">
                    <ExternalLink className="h-5 w-5" />
                    <span className="tracking-widest uppercase">
                      {currentLinkText}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative "Vista" Corners */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full pointer-events-none" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
