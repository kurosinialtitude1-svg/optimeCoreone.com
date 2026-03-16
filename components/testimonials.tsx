'use client'

import { motion } from 'framer-motion'
import { StaggerTestimonials } from './ui/stagger-testimonials'
import { ShieldCheck } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-48 bg-[#E3EFF0] overflow-hidden font-['Syncopate']">
      {/* Background Industrial Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.05] grayscale"
          style={{ backgroundImage: 'url("/images/industrial-mesh.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#E3EFF0] via-transparent to-[#E3EFF0]" />
        <div className="absolute inset-0 opacity-[0.03] tech-grid-bg" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#528081]/10 border border-[#528081]/20 text-[8px] font-bold tracking-[0.4em] uppercase text-[#528081] mb-10 shadow-sm"
          >
            <div className="w-1 h-1 rounded-full bg-[#768C45] animate-ping" />
            <span>INDUSTRIAL_VALIDATION_SYS</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-10 uppercase tracking-tighter leading-[0.85] overflow-hidden">
             {"TRUSTED".split("").map((char, i) => (
                <motion.span
                  key={`trusted-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
             ))}
             <span className="text-[#528081]"> BY_LEADERS</span> <br /> 
             {"MANUFACTURERS".split("").map((char, i) => (
                <motion.span
                  key={`manu-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (i * 0.03) }}
                  className="inline-block opacity-70"
                >
                  {char}
                </motion.span>
             ))}
          </h2>
          
          <div className="flex justify-center mb-10">
             <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#528081] to-transparent opacity-30" />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-neutral-600 text-lg md:text-xl max-w-3xl mx-auto font-sans italic leading-relaxed"
          >
            "Transforming manufacturing operations through high-fidelity decentralized intelligence mesh integration."
          </motion.p>
        </div>

        {/* Staggered Testimonials Component */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <StaggerTestimonials />
        </motion.div>

        {/* Certification / Trust Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 mt-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700"
        >
          {['SIEMENS_PARTNER', 'ISO_27001_v2', 'AWS_INDUSTRIAL', 'SOC_2_SECURE'].map((badge) => (
            <div key={badge} className="text-[10px] font-bold tracking-[0.4em] text-[#528081] border-l-2 border-[#528081]/30 pl-4 py-1">
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
