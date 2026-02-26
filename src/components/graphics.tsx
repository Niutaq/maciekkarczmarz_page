import { Palette, ExternalLink } from "lucide-react";
import { useLanguage } from "./language-provider";

export function Graphics() {
  const { t, language } = useLanguage();

  const mainProfile = {
    icon: Palette,
    title: {
      pl: "Grafika 3D & Technical Art",
      en: "3D Graphics & Technical Art",
    },
    description: {
      pl: "Kompleksowe podejście do tworzenia grafiki trójwymiarowej. Specjalizuję się w modelowaniu w programie Blender, budowaniu środowisk w Unreal Engine 5 oraz generacji proceduralnej terenu i zasobów za pomocą Gaea i Houdini. Do teksturowania PBR i optymalizacji materiałów wykorzystuję Substance 3D Painter. Moje prace łączą wysoką jakość wizualną z techniczną optymalizacją (low-poly, LOD) pod kątem silników gier. Pełny zbiór moich modeli i renderów znajduje się na moim profilu ArtStation.",
      en: "A comprehensive approach to 3D graphics. I specialize in modeling in Blender, building environments in Unreal Engine 5, and procedural terrain and asset generation using Gaea and Houdini. I use Substance 3D Painter for PBR texturing and material optimization. My work combines high visual quality with technical optimization (low-poly, LOD) for game engines. A full collection of my models and renders can be found on my ArtStation profile.",
    },
    link: "https://www.artstation.com/niutaq",
    linkText: "ArtStation Profile",
  };

  const title =
    typeof mainProfile.title === "string"
      ? mainProfile.title
      : mainProfile.title[language];

  return (
    <section id="graphics" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary/50" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase"></span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t.graphics.title}
          </h2>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.graphics.description}
          </p>
        </div>

        <a
          href={mainProfile.link}
          target="_blank"
          rel="noopener noreferrer"
          className="glass clay group flex flex-col md:flex-row items-center gap-6 rounded-3xl p-8 transition-all duration-300 hover:glow-orange-sm hover:scale-[1.02] macos-shadow border border-white/5"
        >
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <mainProfile.icon className="h-8 w-8" />
          </div>
          <div className="flex flex-1 flex-col text-center md:text-left">
            <h3 className="mb-2 flex items-center justify-center md:justify-start gap-2 text-xl font-bold text-foreground">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              {mainProfile.description[language]}
            </p>
            <div className="inline-flex items-center justify-center md:justify-start gap-2 font-mono text-xs font-bold text-primary">
              <ExternalLink className="h-4 w-4" />
              {mainProfile.linkText}
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
