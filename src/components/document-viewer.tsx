import { FileText, Download, ExternalLink, ShieldCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "./language-provider";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function DocumentViewer() {
  const { t, language } = useLanguage();

  return (
    <section id="cv" className="relative px-6 py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-center gap-6 text-center"
        >
          <h2 className="text-balance text-5xl md:text-7xl font-black tracking-tighter text-foreground uppercase">
            {t.documents.title}
          </h2>
        </motion.div>

        <Tabs defaultValue="cv" className="w-full">
          <div className="mb-12 flex flex-col items-center justify-center gap-8">
            <TabsList className="backdrop-blur-2xl bg-[var(--surface)] border border-[var(--border)] h-auto rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-2 shadow-2xl">
              <TabsTrigger
                value="cv"
                className="rounded-[1.2rem] md:rounded-[1.5rem] px-4 md:px-10 py-3 md:py-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all"
              >
                <FileText className="mr-2 md:mr-3 h-3.5 w-3.5 md:h-4 md:w-4" />
                CV
              </TabsTrigger>
              <TabsTrigger
                value="thesis"
                className="rounded-[1.2rem] md:rounded-[1.5rem] px-4 md:px-10 py-3 md:py-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all"
              >
                <ShieldCheck className="mr-2 md:mr-3 h-3.5 w-3.5 md:h-4 md:w-4" />
                {t.documents.thesis_short}
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="relative">
            <TabsContent value="cv" className="mt-0 focus-visible:outline-none">
              <ViewerCard type="cv" lang={language} t={t} />
            </TabsContent>

            <TabsContent
              value="thesis"
              className="mt-0 focus-visible:outline-none"
            >
              <ViewerCard type="thesis" lang={language} t={t} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

function ViewerCard({
  type,
  lang,
  t,
}: {
  type: "cv" | "thesis";
  lang: "pl" | "en";
  t: any;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const doc = {
    cv: {
      title: t.documents.cv_title,
      icon: FileText,
      files: { pl: "/cv-polskie.pdf", en: "/cv-english.pdf" },
    },
    thesis: {
      title: t.documents.thesis_title,
      icon: ShieldCheck,
      files: { pl: "/obrona-polskie.pdf", en: "/obrona-english.pdf" },
    },
  }[type];

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  return (
    <div 
      className="relative group overflow-hidden rounded-[3rem] shadow-2xl transition-all duration-500 bg-[var(--surface)] border border-[var(--border)]"
    >
      <div className="absolute inset-0 backdrop-blur-2xl -z-10" />
      
      <div className="relative z-10 flex items-center justify-between bg-white/5 px-8 py-6 border-b border-[var(--border)]">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="h-3.5 w-3.5 rounded-full bg-primary/20 border border-primary/40" />
            <div className="h-3.5 w-3.5 rounded-full bg-primary/40 border border-primary/60" />
            <div className="h-3.5 w-3.5 rounded-full bg-primary/60 border border-primary/80" />
          </div>
          <span className="ml-4 font-mono text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
            {doc.title}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={doc.files[lang]}
            download
            className="group/dl flex items-center gap-3 text-[10px] font-black text-primary transition-all uppercase tracking-widest hover:translate-y-[-1px]"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">{t.documents.download}</span>
          </a>
          <a
            href={doc.files[lang]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={lang === "pl" ? "Otwórz dokument w nowym oknie" : "Open document in new window"}
            className="p-2 rounded-full hover:bg-white/5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      {isMobile ? (
        <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-10 py-24 text-center">
          <div className="p-8 rounded-[2.5rem] bg-primary/5 border border-primary/10">
            <doc.icon className="h-20 w-20 text-primary/40" />
          </div>
          <div className="space-y-3">
            <p className="font-black text-lg uppercase tracking-tight text-foreground">
              {t.documents.mobile_view}
            </p>
            <p className="text-sm text-muted-foreground/60 font-light max-w-xs mx-auto leading-relaxed">
              {t.documents.mobile_desc}
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <a
              href={doc.files[lang]}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex items-center justify-center gap-3 rounded-[1.5rem] bg-primary px-8 py-4 font-black text-[10px] text-primary-foreground uppercase tracking-widest transition-all hover:scale-105"
            >
              <ExternalLink className="h-4 w-4" />
              {t.documents.open_btn}
            </a>
          </div>
        </div>
      ) : (
        <div className="relative z-10 h-[600px] md:h-[800px] w-full bg-black/5 backdrop-blur-sm">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center opacity-40">
            <doc.icon className="mb-6 h-16 w-16 text-primary" />
            <p className="max-w-xs font-mono text-[10px] text-muted-foreground uppercase tracking-widest leading-relaxed">
              {t.documents.preview_info}
            </p>
          </div>
          <iframe
            src={`${doc.files[lang]}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
            className="relative z-10 h-full w-full border-0 bg-transparent"
            title={doc.title}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
