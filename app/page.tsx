import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { CalculatorSection } from "@/components/calculator-section"
import { FeaturesSection } from "@/components/features-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SeoKeywordsSection } from "@/components/seo-keywords-section"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <CalculatorSection />
        <FeaturesSection />
        <SeoKeywordsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
