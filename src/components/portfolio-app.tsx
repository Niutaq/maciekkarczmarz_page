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
import { BackgroundEffects } from "@/components/background-effects";
import { CommandPalette } from "@/components/command-palette";
import { CustomCursor } from "@/components/custom-cursor";

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
        <BackgroundEffects />
        <CustomCursor />
        
        {/* Awwwards Style Frame */}
        <div className="fixed inset-0 z-[100] pointer-events-none border-[12px] md:border-[24px] border-background/20" />
        <div className="fixed inset-0 z-[101] pointer-events-none border-[1px] border-white/10 m-[12px] md:m-[24px]" />
        
        <Navbar />
        <main className="relative z-10 px-4 md:px-[60px] lg:px-[100px] pt-[80px]">
          <div className="max-w-[1400px] mx-auto">
            <HeroSection />
            <PipelineSection />
            <ExperienceSection />
            <Graphics />
            <DocumentViewer />
            <ContactSection />
          </div>
        </main>
        <Footer />
        <CommandPalette />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default PortfolioApp;
