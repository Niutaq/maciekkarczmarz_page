import { Github, Linkedin, Send, ExternalLink, Box } from "lucide-react";
import { useLanguage } from "./language-provider";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/niutaq",
    handle: "@niutaq",
    color: "bg-black/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maciej-karczmarz-b5b444237",
    handle: "/maciej-karczmarz",
    color: "bg-blue-500/10",
  },
  {
    icon: Box,
    label: "ArtStation",
    href: "https://www.artstation.com/niutaq",
    handle: "/niutaq",
    color: "bg-orange-500/10",
  },
];

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative px-6 py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-6xl relative">
        <div 
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
          style={{ perspective: 1000 }}
        >
          {/* Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01, rotateY: 2, rotateX: -1 }}
            className="md:col-span-8 backdrop-blur-2xl bg-[var(--surface)] border border-[var(--border)] rounded-[3rem] p-10 md:p-16 flex flex-col justify-center shadow-2xl relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px w-12 bg-primary/50" />
                <span className="font-mono text-xs tracking-widest text-primary uppercase font-black">
                  {t.contact.subtitle}
                </span>
              </div>
              <h2 className="text-balance text-5xl md:text-7xl font-serif italic text-foreground mb-8">
                {t.contact.title}
              </h2>
              <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground/80 font-light">
                {t.contact.description}
              </p>
            </div>
          </motion.div>

          {/* GitHub Card */}
          <ContactCard 
            link={socialLinks[0]} 
            className="md:col-span-4" 
            delay={0.1}
            t={t}
          />

          {/* LinkedIn Card */}
          <ContactCard 
            link={socialLinks[1]} 
            className="md:col-span-4" 
            delay={0.2}
            t={t}
          />

          {/* ArtStation Card */}
          <ContactCard 
            link={socialLinks[2]} 
            className="md:col-span-4" 
            delay={0.3}
            t={t}
          />

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: -2 }}
            className="md:col-span-4 backdrop-blur-2xl bg-primary/10 border border-primary/20 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative group overflow-hidden"
          >
            <a
              href="mailto:maciekkar1305@gmail.com"
              className="flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <Send className="h-6 w-6" />
                </div>
                
                <h3 className="text-2xl font-serif italic text-foreground mb-2">Email</h3>
                <p className="font-mono text-[11px] text-primary font-black uppercase tracking-widest mb-8">
                  maciekkar1305@gmail.com
                </p>
                
                <div className="mt-auto flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                  <span>{t.contact.links_title}</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ link, className, delay, t }: { link: any; className?: string; delay: number, t: any }) {
  const Icon = link.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.02, rotateY: 5, rotateX: -2 }}
      className={cn(
        "backdrop-blur-2xl bg-[var(--surface)] border border-[var(--border)] rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative group overflow-hidden",
        className
      )}
    >
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className={cn(
            "flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner mb-8",
            link.color || "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
          )}>
            <Icon className="h-6 w-6" />
          </div>
          
          <h3 className="text-2xl font-serif italic text-foreground mb-2">{link.label}</h3>
          <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest mb-8">
            {link.handle}
          </p>
          
          <div className="mt-auto flex items-center gap-3 text-[10px] font-black text-muted-foreground group-hover:text-primary uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
            <span>{t.contact.visit_btn}</span>
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
      </a>
    </motion.div>
  );
}
