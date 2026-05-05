import { Box, ExternalLink, Layers3, Wrench } from "lucide-react";
import { useLanguage } from "./language-provider";

export function Graphics() {
  const { t } = useLanguage();

  return (
    <section id="graphics" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div className="section-heading lg:sticky lg:top-28">
          <p className="eyebrow">{t.technical_art.eyebrow}</p>
          <h2>{t.technical_art.title}</h2>
          <p>{t.technical_art.description}</p>
          <a
            href="https://www.artstation.com/niutaq"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button mt-8 w-fit"
          >
            {t.technical_art.artstation_btn}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="technical-art-layout">
          <article className="technical-panel technical-panel-large">
            <div className="technical-panel-icon">
              <Box className="h-5 w-5" />
            </div>
            <p className="technical-panel-label">{t.technical_art.production_label}</p>
            <h3>{t.technical_art.production_title}</h3>
            <p>{t.technical_art.production_copy}</p>
          </article>

          <article className="technical-panel">
            <div className="technical-panel-icon">
              <Layers3 className="h-5 w-5" />
            </div>
            <p className="technical-panel-label">{t.technical_art.thesis_label}</p>
            <h3>{t.technical_art.thesis_title}</h3>
            <p>{t.technical_art.thesis_copy}</p>
          </article>

          <article className="technical-panel technical-tools">
            <div className="technical-panel-icon">
              <Wrench className="h-5 w-5" />
            </div>
            <p className="technical-panel-label">{t.technical_art.tools_title}</p>
            <div className="tool-grid">
              {t.technical_art.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
