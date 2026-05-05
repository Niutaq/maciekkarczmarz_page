import { ArrowUpRight, Box, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "./language-provider";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/niutaq",
    handle: "@niutaq",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maciej-karczmarz-b5b444237",
    handle: "/maciej-karczmarz",
  },
  {
    icon: Box,
    label: "ArtStation",
    href: "https://www.artstation.com/niutaq",
    handle: "/niutaq",
  },
];

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-shell pb-20 md:pb-28">
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <p>{t.contact.description}</p>
          <a href={`mailto:${t.contact.email}`} className="premium-button premium-button-primary mt-8 w-fit">
            {t.contact.email_btn}
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <div className="contact-links" aria-label={t.contact.links_title}>
          <a href={`mailto:${t.contact.email}`} className="contact-link contact-link-email">
            <Mail className="h-5 w-5" />
            <span>Email</span>
            <strong>{t.contact.email}</strong>
          </a>

          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="contact-link">
                <Icon className="h-5 w-5" />
                <span>{link.label}</span>
                <strong>{link.handle}</strong>
                <ArrowUpRight className="ml-auto h-4 w-4 text-primary/80" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
