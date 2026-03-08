import React, { Suspense } from "react";
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
import { motion, AnimatePresence } from "framer-motion";

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
        
        {/* Apple/Opal Style Frame - Ultra Minimal */}
        <div className="fixed inset-0 z-[100] pointer-events-none border-[1px] border-white/5 m-4 md:m-8 rounded-[2rem] md:rounded-[3rem]" />
        
        <Navbar />
        
        <AnimatePresence mode="wait">
          <motion.main 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative z-10 px-4 md:px-[60px] lg:px-[100px] pt-[120px]"
          >
            <div className="max-w-[1400px] mx-auto space-y-32 md:space-y-64">
              <HeroSection />
              <PipelineSection />
              <ExperienceSection />
              <Graphics />
              <DocumentViewer />
              <ContactSection />
            </div>
          </motion.main>
        </AnimatePresence>

        <Footer />
        <CommandPalette />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default PortfolioApp;
