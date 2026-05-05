import { ArrowRight, CloudCog, Gauge, Shapes } from "lucide-react";
import { useLanguage } from "./language-provider";

export function BridgeSection() {
  const { t } = useLanguage();

  return (
    <section id="bridge" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="section-heading lg:sticky lg:top-28">
          <p className="eyebrow">{t.bridge.eyebrow}</p>
          <h2>{t.bridge.title}</h2>
          <p>{t.bridge.description}</p>
        </div>

        <div className="bridge-panel">
          <div className="bridge-node bridge-node-left">
            <div className="bridge-icon">
              <CloudCog className="h-5 w-5" />
            </div>
            <p className="bridge-kicker">01</p>
            <h3>{t.bridge.backend_title}</h3>
            <p>{t.bridge.backend_copy}</p>
          </div>

          <div className="bridge-core" aria-label={t.bridge.center_label}>
            <div className="bridge-core-ring">
              <Gauge className="h-7 w-7" />
              <span>{t.bridge.center_label}</span>
            </div>
          </div>

          <div className="bridge-node bridge-node-right">
            <div className="bridge-icon">
              <Shapes className="h-5 w-5" />
            </div>
            <p className="bridge-kicker">02</p>
            <h3>{t.bridge.graphics_title}</h3>
            <p>{t.bridge.graphics_copy}</p>
          </div>

          <div className="bridge-flow" aria-hidden="true">
            <ArrowRight className="h-4 w-4" />
          </div>

          <div className="bridge-principles">
            {t.bridge.principles.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
