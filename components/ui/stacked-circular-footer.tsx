"use client"

import React from "react"
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Linkedin, Twitter, Factory } from "lucide-react"
import { motion } from "framer-motion"

const navLinks = [
  { label: 'Platform', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Success Stories', href: '#use-cases' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

const socialLinks = [
  { Icon: Facebook, label: 'Facebook', color: '#A8BDBF' },
  { Icon: Twitter, label: 'Twitter', color: '#3F7373' },
  { Icon: Instagram, label: 'Instagram', color: '#768C45' },
  { Icon: Linkedin, label: 'LinkedIn', color: '#C5D7D9' },
]

function StackedCircularFooter() {
  return (
    <footer className="relative bg-black py-20 font-['Cinzel'] overflow-hidden">
      {/* Decorative gradient backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.07] bg-[#3F7373] -bottom-32 left-1/2 -translate-x-1/2" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-10">

          {/* Logo Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Outer ring with 5-color gradient */}
            <div className="p-[1px] rounded-full bg-gradient-to-br from-[#3F7373] via-[#A8BDBF] via-[#C5D7D9] via-[#768C45] to-[#3F7373]">
              <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3F7373]/20 to-[#768C45]/10 border border-white/5 flex items-center justify-center shadow-[0_0_30px_rgba(63,115,115,0.3)]">
                  <Factory className="w-7 h-7 text-[#3F7373]" />
                </div>
              </div>
            </div>
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full border border-[#3F7373]/20 animate-ping opacity-30" style={{ animationDuration: '3s' }} />
          </motion.div>

          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-black text-[#F2F1F0] uppercase tracking-tighter">
              Optime<span className="text-[#3F7373]">Core</span>
            </h3>
            <p className="text-[10px] tracking-[0.4em] text-[#A8BDBF]/40 uppercase mt-1 font-sans">
              Intelligence Platform
            </p>
          </motion.div>

          {/* Nav Links */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#A8BDBF]/50 hover:text-[#F2F1F0] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex gap-3"
          >
            {socialLinks.map(({ Icon, label, color }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="group w-11 h-11 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-transparent hover:scale-110"
                style={{ '--hover-color': color } as React.CSSProperties}
              >
                <div
                  className="w-full h-full rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                  style={{ 
                    background: `transparent`,
                  }}
                >
                  <Icon 
                    className="w-4 h-4 transition-all duration-300 text-[#A8BDBF]/40 group-hover:scale-110" 
                    style={{ color: color + '80' }}
                  />
                </div>
              </a>
            ))}
          </motion.div>

          {/* The 5-color divider line */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-[#3F7373]/30 to-transparent" />

          {/* Subscribe Form */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-md"
          >
            <Label htmlFor="footer-email" className="sr-only">Email</Label>
            <div className="flex gap-0 rounded-full overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm p-1">
              <Input
                id="footer-email"
                placeholder="Enter your factory email..."
                type="email"
                className="flex-1 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-[#F2F1F0] placeholder:text-[#A8BDBF]/30 text-xs font-sans px-4 rounded-full"
              />
              <Button
                type="submit"
                className="rounded-full mixed-gradient-glow text-white text-[10px] font-black tracking-widest uppercase px-6 hover:opacity-90 border-none"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>

          {/* Bottom copyright line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row items-center gap-4 text-center"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#768C45] animate-pulse" />
              <p className="text-[9px] font-bold tracking-[0.4em] text-[#A8BDBF]/20 uppercase font-sans">
                All Systems Operational
              </p>
            </div>
            <span className="hidden sm:block text-[#A8BDBF]/10">·</span>
            <p className="text-[9px] font-bold tracking-[0.4em] text-[#A8BDBF]/20 uppercase font-sans">
              © 2026 OptimeCore Intelligence Platform
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
