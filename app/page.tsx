import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PipelineSection } from "@/components/pipeline-section"
import { AfterHoursSection } from "@/components/after-hours-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-border" />
      </div>

      <PipelineSection />

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-border" />
      </div>

      <AfterHoursSection />

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-border" />
      </div>

      <ContactSection />

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-border" />
      </div>

      <Footer />
    </main>
  )
}
