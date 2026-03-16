'use client'


import { motion } from "framer-motion";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 overflow-hidden dynamic-mesh-bg font-['Syncopate']">
      <div 
        className="absolute inset-0 z-0 opacity-[0.05] bg-cover bg-center bg-no-repeat grayscale pointer-events-none"
        style={{ backgroundImage: "url('/features-bg.png')" }}
      />
      
      {/* Light Theme Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#E3EFF0]/50 to-transparent" />
      <div className="absolute inset-0 z-0 opacity-[0.03] tech-grid-bg" />
      
      {/* High-visibility accent blobs using signature color */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#528081]/10 blur-[150px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] bg-[#768C45]/5 blur-[180px] rounded-full pointer-events-none" 
      />
      
      {/* Floating Animated Orbs */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-32 w-16 h-16 rounded-full bg-[#528081] opacity-10 blur-[30px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-[#768C45] opacity-5 blur-[40px] pointer-events-none"
      />

      <div className="relative z-10">
        <LandingAccordionItem />
      </div>
    </section>
  )
}
