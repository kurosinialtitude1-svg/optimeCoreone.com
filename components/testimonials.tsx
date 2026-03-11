'use client'

import { motion } from 'framer-motion'
import { StaggerTestimonials } from './ui/stagger-testimonials'
import { ShieldCheck } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-40 bg-black overflow-hidden font-['Cinzel']">
      {/* Background Tech Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none tech-grid-bg" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.4em] uppercase text-[#3F7373] mb-8"
          >
            <ShieldCheck className="w-3 h-3" />
            <span>Industrial Validation</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            Trusted by <span className="text-[#A8BDBF]">Leading</span> <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F7373] to-[#768C45]">Manufacturers</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#C5D7D9]/60 text-lg md:text-xl max-w-2xl mx-auto font-sans italic"
          >
            "Hear from industry leaders transforming their operations with Smart Factory Intelligence."
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
          className="flex flex-wrap items-center justify-center gap-12 mt-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700"
        >
          {['SIEMENS PARTNER', 'ISO 27001', 'AWS INDUSTRIAL', 'SOC 2 COMPLIANT'].map((badge) => (
            <div key={badge} className="text-[10px] font-black tracking-[0.5em] text-[#C5D7D9] border-b border-[#3F7373]/30 pb-2">
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
