import { ArrowDown, Mail, MapPin } from "lucide-react";
import { useLanguage } from "./language-provider";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 pb-12">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/3 h-72 w-72 rounded-full bg-primary/15 blur-[100px]" />
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center gap-6">
        <div className="flex items-center justify-center gap-3">
          <div className="h-3 w-3 animate-pulse rounded-full bg-primary glow-orange-sm" />
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {t.hero.status}
          </span>
        </div>

        <h1 className="text-balance text-5xl leading-tight font-bold tracking-tight text-foreground md:text-7xl">
          Maciej <span className="text-primary">Karczmarz</span>
        </h1>

        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Stalowa Wola / Rzeszów, Polska</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-4 w-4" />
            <span>maciekkar1305@gmail.com</span>
          </div>
        </div>

        <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground mx-auto">
          {t.hero.description}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollTo("pipeline")}
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
