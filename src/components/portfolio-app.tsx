import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { PipelineSection } from "@/components/pipeline-section";
import { ExperienceSection } from "@/components/experience-section";
import { Graphics } from "@/components/graphics";
import { DocumentViewer } from "@/components/document-viewer";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

function PortfolioApp() {
  return (
    <LanguageProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        storageKey="portfolio-theme"
      >
        <Navbar />
        <main>
          <HeroSection />
          <PipelineSection />
          <ExperienceSection />
          <Graphics />
          <DocumentViewer />
          <ContactSection />
        </main>
        <Footer />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default PortfolioApp;
