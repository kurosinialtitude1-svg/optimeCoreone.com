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
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#F2F1F0] overflow-hidden font-['Cinzel']">
        {/* Industrial Background Image - High Visibility */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/footer-bg.png" 
            alt="Industrial Background" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          {/* Subtle Light Gradients for Depth & Legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F2F1F0]/90 via-transparent to-[#F2F1F0]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(63,115,115,0.1)_0%,_transparent_70%)]" />
        </div>

        {/* Floating Orbs Container */}
        <div className="absolute inset-0 z-10 pointer-events-none">
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
                <div className="flex flex-col items-center gap-1 bg-white/80 backdrop-blur-xl border border-white p-4 rounded-3xl shadow-[0_20px_40px_-15px_rgba(63,115,115,0.15)]">
                  {orb.icon && <orb.icon className="w-4 h-4" style={{ color: orb.color }} />}
                  <span className="text-[10px] font-bold text-[#1A1A1A] tracking-tighter uppercase whitespace-nowrap">{orb.label}</span>
                </div>
              )}
              {orb.type === 'portrait' && (
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#3F7373] to-[#768C45] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                  <img
                    src={orb.img}
                    className="relative rounded-full border-4 border-white shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer object-cover"
                    style={{ width: orb.size, height: orb.size }}
                    alt="User"
                  />
                </div>
              )}
              {orb.type === 'icon' && (
                <div className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-xl border border-white rounded-2xl shadow-lg">
                  {orb.icon && <orb.icon className="w-5 h-5" style={{ color: orb.color }} />}
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-[#3F7373]/20 text-[11px] font-black tracking-[0.5em] uppercase mb-10 shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-[#768C45] animate-pulse shadow-[0_0_10px_#768C45]" />
            <span className="text-[#3F7373]">System Online — Accepting Enrollments</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-12 drop-shadow-sm"
          >
            <span className="text-[#1A1A1A]">Optimize</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F7373] via-[#768C45] to-[#3F7373]">
              Your Factory
            </span>
            <br />
            <span className="text-[#3F7373]">Today.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-neutral-600 text-xl max-w-2xl mx-auto mb-16 font-sans font-medium italic leading-relaxed"
          >
            "Experience OptiCoreX — monitor workflows, optimize machines, and streamline maintenance. Get started with your 14-day free trial now!"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex flex-col sm:flex-row gap-0 justify-center w-full max-w-xl overflow-hidden rounded-full border border-[#3F7373]/20 bg-white/90 backdrop-blur-lg shadow-[0_30px_60px_-15px_rgba(63,115,115,0.2)] p-1.5 transition-all focus-within:ring-2 ring-[#3F7373]/20">
              <input
                type="email"
                placeholder="Enter your factory email..."
                className="flex-1 px-8 py-5 bg-transparent text-[#1A1A1A] placeholder:text-neutral-400 focus:outline-none text-base font-sans"
              />
              <button className="px-10 py-5 bg-[#3F7373] hover:bg-[#3F7373]/90 rounded-full text-white text-sm font-black tracking-widest uppercase whitespace-nowrap flex items-center gap-3 justify-center hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-[#3F7373]/30">
                Start Trial <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <a href="#how-it-works" className="text-[11px] font-black tracking-[0.4em] uppercase text-neutral-400 hover:text-[#3F7373] transition-all border-b border-transparent hover:border-[#3F7373]/40 pb-1.5 mb-10">
              How it works
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
