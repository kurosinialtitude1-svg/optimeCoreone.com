import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero'
import { FeaturesSection } from '@/components/features'
import { HowItWorksSection } from '@/components/how-it-works'
import { UseCasesSection } from '@/components/use-cases'
import { PricingSection } from '@/components/pricing'
import { TestimonialsSection } from '@/components/testimonials'
import { FAQSection } from '@/components/faq'
import { CTAFooterSection } from '@/components/cta-footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <UseCasesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTAFooterSection />
    </main>
  )
}
