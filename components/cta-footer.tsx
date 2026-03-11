'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Factory } from 'lucide-react'
import { StackedCircularFooter } from '@/components/ui/stacked-circular-footer'

export function CTAFooterSection() {
  const footerLinks = [
    {
      heading: 'Product',
      color: '#3F7373',  // Ming
      links: ['Features', 'Pricing', 'How It Works', 'Demo', 'Changelog'],
      hrefs: ['#features', '#pricing', '#how-it-works', '#', '#'],
    },
    {
      heading: 'Company',
      color: '#768C45',  // Palm Leaf
      links: ['About', 'Blog', 'Careers', 'Contact', 'Partners'],
      hrefs: ['#', '#', '#', '#', '#'],
    },
    {
      heading: 'Resources',
      color: '#A8BDBF',  // Opal
      links: ['Documentation', 'API Reference', 'Case Studies', 'Webinars', 'Community'],
      hrefs: ['#', '#', '#', '#', '#'],
    },
    {
      heading: 'Legal',
      color: '#C5D7D9',  // Columbia Blue
      links: ['Privacy Policy', 'Terms of Use', 'Security', 'Compliance', 'Cookie Policy'],
      hrefs: ['/privacy-policy', '/terms-and-conditions', '#', '#', '#'],
    },
  ]

  return (
    <>
      {/* ── Final CTA Section ── */}
      <section className="relative py-32 lg:py-48 bg-black overflow-hidden font-['Cinzel']">
        {/* Animated Color Blob Background */}
        <div className="dark-animated-mix absolute inset-0">
          <div className="dark-animated-mix-blob" />
          <div className="dark-animated-mix-glow" />
        </div>
        
        {/* Extra blobs for color richness */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 bg-[#C5D7D9] -top-24 -right-24 animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-15 bg-[#768C45] bottom-0 left-1/3" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.5em] uppercase mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#768C45] animate-pulse" />
            <span className="text-[#A8BDBF]">System Online — Accepting Enrollments</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8"
          >
            <span className="text-[#F2F1F0]">Optimize</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A8BDBF] via-[#3F7373] to-[#768C45]">
              Your Factory
            </span>
            <br />
            <span className="text-[#C5D7D9]">Today.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[#A8BDBF]/70 text-lg max-w-2xl mx-auto mb-12 font-sans italic leading-relaxed"
          >
            "Join manufacturing companies worldwide using OptimeCore to monitor production workflows, optimize machine utilization, and streamline maintenance planning. Start your free 14-day trial."
          </motion.p>

          {/* Email Capture CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-0 justify-center max-w-lg mx-auto mb-6 overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md p-1"
          >
            <input
              type="email"
              placeholder="Enter your factory email..."
              className="flex-1 px-6 py-4 bg-transparent text-[#F2F1F0] placeholder:text-[#A8BDBF]/40 focus:outline-none text-sm font-sans"
            />
            <button className="px-8 py-4 mixed-gradient-glow rounded-full text-white text-xs font-black tracking-widest uppercase whitespace-nowrap flex items-center gap-2 justify-center hover:scale-105 transition-transform">
              Start Trial <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Stat Row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-10 mt-16 pt-10 border-t border-white/5"
          >
            {[
              { val: '500+', label: 'Factories Enrolled', color: '#3F7373' },
              { val: '99.9%', label: 'Platform Uptime', color: '#768C45' },
              { val: '40%', label: 'Downtime Reduction', color: '#A8BDBF' },
              { val: '14 Days', label: 'Free Trial', color: '#C5D7D9' },
            ].map((stat) => (
              <div key={stat.val} className="text-center">
                <p className="text-3xl font-black tracking-tighter" style={{ color: stat.color }}>{stat.val}</p>
                <p className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Stacked Circular Footer ── */}
      <div className="h-px w-full bg-gradient-to-r from-[#3F7373] via-[#A8BDBF] via-[#C5D7D9] via-[#768C45] to-[#3F7373]" />
      <StackedCircularFooter />
    </>
  )
}
