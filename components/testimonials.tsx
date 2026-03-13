'use client'

import { motion } from 'framer-motion'
import { StaggerTestimonials } from './ui/stagger-testimonials'
import { ShieldCheck } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-40 bg-[#F2F1F0] overflow-hidden font-['Cinzel']">
      {/* Background Industrial Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.1] grayscale"
          style={{ backgroundImage: 'url("/images/industrial-mesh.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F2F1F0] via-transparent to-[#F2F1F0]" />
        <div className="absolute inset-0 opacity-[0.05] tech-grid-bg" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#3F7373]/20 text-[11px] font-black tracking-[0.5em] uppercase text-[#3F7373] mb-8 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Industrial Validation</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-[#1A1A1A] mb-8 uppercase tracking-tighter"
          >
            Trusted by <span className="text-[#A8BDBF]">Leading</span> <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F7373] via-[#768C45] to-[#3F7373]">Manufacturers</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-neutral-600 text-xl md:text-2xl max-w-3xl mx-auto font-sans italic italic-leading-relaxed"
          >
            "Hear from industry leaders transforming their operations with OptimeCore Intelligence."
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
          className="flex flex-wrap items-center justify-center gap-16 mt-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
        >
          {['SIEMENS PARTNER', 'ISO 27001', 'AWS INDUSTRIAL', 'SOC 2 COMPLIANT'].map((badge) => (
            <div key={badge} className="text-[11px] font-black tracking-[0.6em] text-[#3F7373] border-b-2 border-[#3F7373]/10 pb-3">
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
