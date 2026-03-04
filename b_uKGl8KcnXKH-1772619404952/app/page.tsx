import { CursorGlow } from "@/components/cursor-glow"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <CursorGlow />
      <Navbar />
      <main>
        <HeroSection />
        <div className="bg-background">
          <ProjectsSection />
          <ServicesSection />
          <WhyUsSection />
          <TestimonialsSection />
          <FaqSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
