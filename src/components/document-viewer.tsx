import { Download, ExternalLink, FileText, ShieldCheck } from "lucide-react";
import { useLanguage } from "./language-provider";

export function DocumentViewer() {
  const { t, language } = useLanguage();

  const documents = [
    {
      id: "cv",
      label: t.documents.cv_short,
      title: t.documents.cv_title,
      desc: t.documents.cv_desc,
      href: language === "pl" ? "/cv-polskie.pdf" : "/cv-english.pdf",
      icon: FileText,
    },
    {
      id: "thesis",
      label: t.documents.thesis_short,
      title: t.documents.thesis_title,
      desc: t.documents.thesis_desc,
      href: language === "pl" ? "/obrona-polskie.pdf" : "/obrona-english.pdf",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="cv" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="section-heading">
          <p className="eyebrow">{t.documents.eyebrow}</p>
          <h2>{t.documents.title}</h2>
          <p>{t.documents.description}</p>
        </div>

        <div className="document-grid">
          {documents.map((doc) => {
            const Icon = doc.icon;

            return (
              <article key={doc.id} className="document-card">
                <div className="document-icon">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="document-id">{t.documents.document_label} / {doc.label}</p>
                  <h3>{doc.title}</h3>
                  <p>{doc.desc}</p>
                </div>
                <div className="document-actions">
                  <a href={doc.href} download className="premium-button premium-button-primary">
                    {t.documents.download}
                    <Download className="h-4 w-4" />
                  </a>
                  <a href={doc.href} target="_blank" rel="noopener noreferrer" className="premium-button">
                    {t.documents.open_btn}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
