'use client'


import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";

export function FeaturesSection() {
  return (
    <section id="features" className="dark-animated-mix relative py-24 overflow-hidden">
      {/* Unique Animated Color Mix Background */}
      <div className="dark-animated-mix-blob" />
      <div className="dark-animated-mix-glow" />
      
      {/* Additional subtle accent blobs using other palette colors */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#C5D7D9]/20 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#F2F1F0]/10 blur-[120px] rounded-full animate-bounce duration-[15s]" />

      <div className="relative z-10">
        <LandingAccordionItem />
      </div>
    </section>
  )
}
