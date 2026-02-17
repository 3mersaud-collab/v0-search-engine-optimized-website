import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { CalculatorSection } from "@/components/calculator-section"
import { FeaturesSection } from "@/components/features-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SeoKeywordsSection } from "@/components/seo-keywords-section"
import { GoogleReviewsSection } from "@/components/google-reviews-section"
import { EhsanCharityBanner } from "@/components/ehsan-charity-banner"

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <EhsanCharityBanner />
        <HowItWorks />
        <CalculatorSection />
        <GoogleReviewsSection />
        <FeaturesSection />
        <SeoKeywordsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
