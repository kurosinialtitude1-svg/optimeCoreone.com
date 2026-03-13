'use client'


import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 overflow-hidden dynamic-mesh-bg font-['Cinzel']">
      {/* Futurist Factory Background Image - Enhanced Visibility */}
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-1000"
        style={{ backgroundImage: "url('/features-bg.png')" }}
      />
      
      {/* Light Theme Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/40 to-transparent" />
      <div className="absolute inset-0 z-0 opacity-[0.05] tech-grid-bg" />
      
      {/* High-visibility accent blobs using palette colors */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#3F7373]/5 blur-[120px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-[#768C45]/5 blur-[150px] rounded-full animate-bounce duration-[20s] pointer-events-none" />

      <div className="relative z-10">
        <LandingAccordionItem />
      </div>
    </section>
  )
}
