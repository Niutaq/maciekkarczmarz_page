import { ArrowDownRight, Download, ExternalLink, Mail } from "lucide-react";
import { useLanguage } from "./language-provider";

const toolLinks: Record<string, string> = {
  "Go": "https://go.dev",
  "Blender": "https://www.blender.org",
  "UE5": "https://www.unrealengine.com",
  "Unity": "https://unity.com",
  "Houdini": "https://www.sidefx.com/products/houdini/",
  "AWS": "https://aws.amazon.com",
  "n8n": "https://n8n.io",
  "Gaea": "https://quadspinner.com/",
  "Quixel": "https://quixel.com/",
  "Substance 3D Painter": "https://www.adobe.com/products/substance3d-painter.html",
};

export const HeroSection = () => {
  const { t, language } = useLanguage();
  const cvHref = language === "pl" ? "/cv-polskie.pdf" : "/cv-english.pdf";

  return (
    <section id="hero" className="relative min-h-[calc(100svh-7rem)] pb-16 md:min-h-[calc(100vh-7rem)] md:pb-24">
      <div className="hero-material" aria-hidden="true" />

      <div className="grid min-w-0 min-h-[calc(100svh-9rem)] gap-10 px-6 pt-8 md:min-h-[calc(100vh-10rem)] md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative z-10 flex min-w-0 flex-col justify-center">
          <p className="eyebrow mb-5">{t.hero.eyebrow}</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] text-foreground sm:text-6xl md:text-8xl lg:text-9xl">
            <span className="block">Maciej</span>
            <span className="block">Karczmarz</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#pipeline" className="premium-button premium-button-primary">
              {t.hero.primary_cta}
              <ArrowDownRight className="h-4 w-4" />
            </a>
            <a href={cvHref} className="premium-button" download>
              {t.hero.secondary_cta}
              <Download className="h-4 w-4" />
            </a>
            <a href="#contact" className="premium-button premium-button-quiet">
              {t.hero.contact_cta}
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative z-10 min-w-0 self-end lg:self-center">
          <div className="hero-proof-panel">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase text-primary/90">
                  {t.hero.profile_label}
                </p>
              </div>
              <div className="h-11 w-11 rounded-full border border-primary/30 bg-primary/10" />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.hero.rail.map((item) => (
                <div key={item.label} className="hero-rail-item">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {t.hero.proof.map((item) => (
                <a
                  key={item}
                  href={toolLinks[item] || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proof-chip inline-flex items-center gap-1"
                >
                  {item}
                  {toolLinks[item] && <ExternalLink className="h-3 w-3" />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
