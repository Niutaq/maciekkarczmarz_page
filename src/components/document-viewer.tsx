import { FileText, Download, ExternalLink, ShieldCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "./language-provider";
import { useEffect, useState } from "react";

export function DocumentViewer() {
  const { t, language } = useLanguage();

  const documents = {
    cv: {
      title: t.documents.cv_title,
      icon: FileText,
      files: {
        pl: "/cv-polskie.pdf",
        en: "/cv-english.pdf",
      },
    },
    thesis: {
      title: t.documents.thesis_title,
      icon: ShieldCheck,
      files: {
        pl: "/obrona-polskie.pdf",
        en: "/obrona-english.pdf",
      },
    },
  };

  return (
    <section id="cv" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary/50" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase"></span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t.documents.title}
          </h2>
        </div>

        <Tabs defaultValue="cv" className="w-full">
          <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
            <TabsList className="glass clay h-auto rounded-2xl p-1 macos-shadow">
              <TabsTrigger
                value="cv"
                className="rounded-xl px-8 py-3 text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                <FileText className="mr-2 h-4 w-4" />
                CV
              </TabsTrigger>
              <TabsTrigger
                value="thesis"
                className="rounded-xl px-8 py-3 text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                <ShieldCheck className="mr-2 h-4 w-4" />
                {language === "pl" ? "Obrona Inż." : "Thesis"}
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              <span>Mode: {language.toUpperCase()}</span>
            </div>
          </div>

          <TabsContent value="cv" className="mt-0 focus-visible:outline-none">
            <ViewerCard doc={documents.cv} lang={language} t={t} />
          </TabsContent>

          <TabsContent
            value="thesis"
            className="mt-0 focus-visible:outline-none"
          >
            <ViewerCard doc={documents.thesis} lang={language} t={t} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ViewerCard({ doc, lang, t }: { doc: any; lang: "pl" | "en"; t: any }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  return (
    <div className="glass-strong macos-shadow overflow-hidden rounded-3xl border border-white/10 transition-all duration-500">
      {/* Title Bar (macOS style) */}
      <div className="flex items-center justify-between bg-white/8 px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-orange-300/60" />
            <div className="h-3 w-3 rounded-full bg-orange-500/60" />
            <div className="h-3 w-3 rounded-full bg-orange-700/60" />
          </div>
          <span className="ml-4 font-mono text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            {doc.title}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={doc.files[lang]}
            download
            className="flex items-center gap-2 text-[10px] font-bold text-primary transition-all hover:opacity-80 uppercase tracking-widest"
          >
            <Download className="h-4 w-4" />
            {t.documents.download}
          </a>
          <a
            href={doc.files[lang]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* PDF Content Area */}
      {isMobile ? (
        <div className="flex flex-col items-center justify-center gap-6 px-8 py-16 text-center">
          <doc.icon className="h-14 w-14 text-primary/30" />
          <div className="space-y-2">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {lang === "pl"
                ? "Podgląd niedostępny na mobilnych"
                : "Preview unavailable on mobile"}
            </p>
            <p className="text-xs text-muted-foreground/60 font-mono">
              {lang === "pl"
                ? "Safari nie obsługuje podglądu PDF"
                : "Safari does not support PDF preview"}
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <a
              href={doc.files[lang]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 font-mono text-xs font-bold text-white transition-all hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" />
              {lang === "pl" ? "Otwórz PDF" : "Open PDF"}
            </a>
            <a
              href={doc.files[lang]}
              download
              className="flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-6 py-3 font-mono text-xs font-bold text-primary transition-all hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              {t.documents.download}
            </a>
          </div>
        </div>
      ) : (
        <div className="relative h-125 w-full bg-black/20 md:h-175">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-0">
            <doc.icon className="mb-4 h-12 w-12 text-primary/20" />
            <p className="max-w-xs text-xs font-mono text-muted-foreground leading-relaxed">
              {t.documents.preview_info}
            </p>
          </div>
          <iframe
            src={`${doc.files[lang]}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
            className="relative z-10 h-full w-full border-0 bg-transparent"
            title={doc.title}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
