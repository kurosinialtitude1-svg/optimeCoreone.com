'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Factory,
  Zap,
  Shield,
  Lock,
  MessageSquare
} from 'lucide-react'
import { StackedCircularFooter } from '@/components/ui/stacked-circular-footer'

export function CTAFooterSection() {
  const orbs = [
    { type: 'stat', label: '+40% Output', icon: Factory, color: '#3F7373', top: '10%', left: '15%', delay: 0 },
    { type: 'portrait', img: '/user1.png', top: '15%', right: '20%', delay: 1, size: '80px' },
    { type: 'icon', icon: Zap, color: '#768C45', bottom: '20%', left: '20%', delay: 0.5 },
    { type: 'stat', label: '99.9% Uptime', icon: Shield, color: '#3F7373', bottom: '15%', right: '25%', delay: 1.5 },
    { type: 'portrait', img: '/user2.png', top: '40%', left: '5%', delay: 2, size: '70px' },
    { type: 'portrait', img: '/user3.png', bottom: '40%', right: '5%', delay: 0.8, size: '90px' },
    { type: 'icon', icon: MessageSquare, color: '#768C45', top: '30%', right: '10%', delay: 1.2 },
  ];

  return (
    <>
      {/* ── Final CTA Section (Refined Light Theme) ── */}
      <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center bg-[#E3EFF0] overflow-hidden font-['Syncopate']">
        {/* Industrial Background Image - High Visibility */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/footer-bg.png" 
            alt="Industrial Background" 
            className="w-full h-full object-cover opacity-30 scale-105 grayscale"
          />
          {/* Subtle Light Gradients for Depth & Legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#E3EFF0] via-transparent to-[#E3EFF0]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(82,128,129,0.1)_0%,_transparent_70%)]" />
        </div>

        {/* Floating Orbs Container — hidden on mobile to prevent overlap */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          {orbs.map((orb, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: orb.delay },
                x: { duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: orb.delay },
                opacity: { duration: 1, delay: i * 0.1 },
                scale: { duration: 1, delay: i * 0.1 },
              }}
              className="absolute pointer-events-auto"
              style={{
                top: orb.top,
                left: orb.left,
                right: orb.right,
                bottom: orb.bottom,
                width: orb.size || 'auto'
              }}
            >
              {orb.type === 'stat' && (
                <div className="flex flex-col items-center gap-2 bg-white/40 backdrop-blur-3xl border border-[#528081]/20 p-5 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(82,128,129,0.1)] group transition-all hover:border-[#528081]/40">
                  {orb.icon && <orb.icon className="w-5 h-5 transition-transform group-hover:scale-110" style={{ color: '#528081' }} />}
                  <span className="text-[8px] font-bold text-[#1A1A1A] tracking-[0.2em] uppercase whitespace-nowrap">{orb.label.replace(' ', '_')}</span>
                </div>
              )}
              {orb.type === 'portrait' && (
                <div className="relative group p-1 border border-[#528081]/20 rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#528081] to-[#768C45] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                  <img
                    src={orb.img}
                    className="relative rounded-full border-2 border-white shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer object-cover grayscale group-hover:grayscale-0"
                    style={{ width: orb.size, height: orb.size }}
                    alt="User"
                  />
                </div>
              )}
              {orb.type === 'icon' && (
                <div className="w-14 h-14 flex items-center justify-center bg-white/40 backdrop-blur-3xl border border-[#528081]/20 rounded-2xl shadow-lg transition-all hover:bg-[#528081] group">
                  {orb.icon && <orb.icon className="w-6 h-6 transition-colors group-hover:text-white" style={{ color: '#528081' }} />}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Central Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#528081]/10 border border-[#528081]/20 text-[8px] font-bold tracking-[0.4em] uppercase mb-12 shadow-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#768C45] animate-ping" />
            <span className="text-[#528081]">SYSTEM_CORE_LIVE — ENROLLMENT_ACTIVE</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.85] mb-14 overflow-hidden">
             {"OPTIMIZE".split("").map((char, i) => (
                <motion.span
                  key={`opt-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
             ))}
             <br />
             <span className="text-[#528081]">{"YOUR FACTORY".split("").map((char, i) => (
                <motion.span
                  key={`fact-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.04) }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
             ))}</span>
             <br />
             {"TODAY.".split("").map((char, i) => (
                <motion.span
                  key={`today-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + (i * 0.04) }}
                  className="inline-block text-[#1A1A1A]/40"
                >
                  {char}
                </motion.span>
             ))}
          </h2>

          <div className="flex justify-center mb-14">
             <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#528081] to-transparent opacity-30" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-sans font-medium italic leading-relaxed"
          >
            "Experience OptiCoreX — monitor workflows, optimize machines, and accelerate maintenance. Initialize your 14-day operational feasibility trial."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center gap-10"
          >
            <div className="flex flex-col sm:flex-row gap-0 justify-center w-full max-w-2xl overflow-hidden rounded-[2rem] border border-[#528081]/30 bg-white/40 backdrop-blur-3xl shadow-[0_40px_80px_-20px_rgba(82,128,129,0.2)] p-2 transition-all focus-within:ring-4 ring-[#528081]/10">
              <input
                type="email"
                placeholder="FACTORY_EMAIL_ADDRESS..."
                className="flex-1 px-5 md:px-10 py-4 md:py-6 bg-transparent text-[#1A1A1A] placeholder:text-[#528081]/40 focus:outline-none text-sm md:text-base font-sans font-bold uppercase tracking-tight"
              />
              <button className="group relative px-6 md:px-14 py-4 md:py-6 bg-[#528081] rounded-2xl text-white text-[11px] font-bold tracking-[0.3em] uppercase whitespace-nowrap flex items-center gap-3 md:gap-4 justify-center hover:scale-[1.05] active:scale-[0.95] transition-all shadow-xl shadow-[#528081]/30 overflow-hidden w-full md:w-auto">
                <span className="relative z-10">INITIALIZE_TRIAL</span> 
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-[#768C45] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
            <a href="#how-it-works" className="text-[9px] font-bold tracking-[0.5em] uppercase text-neutral-400 hover:text-[#528081] transition-all border-b-2 border-transparent hover:border-[#528081]/30 pb-2 mb-10">
              EXPLORE_PROTOCOL_ARCHITECTURE
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Stacked Circular Footer ── */}
      <div className="h-px w-full bg-[#3F7373]/10" />
      <StackedCircularFooter />
    </>
  )
}
