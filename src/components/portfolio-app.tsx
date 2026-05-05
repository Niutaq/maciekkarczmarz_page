import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider, useLanguage } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { PipelineSection } from "@/components/pipeline-section";
import { Graphics } from "@/components/graphics";
import { DocumentViewer } from "@/components/document-viewer";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { CommandPalette } from "@/components/command-palette";
import { ExperienceSection, EducationSection } from "@/components/experience-section";

function PortfolioContent() {
  const { language } = useLanguage();

  return (
    <>
      <div className="fixed inset-x-4 top-4 bottom-4 z-[100] hidden rounded-[28px] border border-white/[0.045] pointer-events-none md:block" />

      <Navbar />

      <main className="relative z-10 px-4 pt-24 md:px-10 lg:px-16 md:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <HeroSection />
          <PipelineSection />
          <Graphics />
          <ExperienceSection />
          <EducationSection />
          <DocumentViewer />
          <ContactSection />
        </div>
      </main>

      <Footer />
      <CommandPalette />
    </>
  );
}

function PortfolioApp() {
  return (
    <LanguageProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
        storageKey="portfolio-theme"
      >
        <PortfolioContent />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default PortfolioApp;
