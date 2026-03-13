"use client"

import React from "react"
import { Facebook, Instagram, Linkedin, Twitter, Factory, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: 'Platform', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Success Stories', href: '#use-cases' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

const socialLinks = [
  { Icon: Facebook, label: 'Facebook', color: '#3F7373' },
  { Icon: Twitter, label: 'Twitter', color: '#768C45' },
  { Icon: Instagram, label: 'Instagram', color: '#A8BDBF' },
  { Icon: Linkedin, label: 'LinkedIn', color: '#C5D7D9' },
]

function StackedCircularFooter() {
  return (
    <footer className="relative bg-[#F2F1F0] py-24 overflow-hidden font-sans">
      {/* Illustrative Background Scene (OptimeCore Industrial Valley) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full h-auto preserve-3d">
          {/* Sky Gradient */}
          <rect width="1440" height="600" fill="url(#skyGradient)" />
          
          {/* Distant Hills */}
          <path d="M-100 480C50 420 250 450 400 480C550 510 750 480 900 450C1050 420 1250 450 1540 480V600H-100V480Z" fill="#C5D7D9" fillOpacity="0.3" />
          
          {/* Midground Factory Clusters */}
          <g className="factory-cluster-1" opacity="0.4">
             <rect x="100" y="420" width="80" height="60" fill="#A8BDBF" />
             <rect x="160" y="400" width="40" height="80" fill="#3F7373" />
             <path d="M100 420L140 380L180 420Z" fill="#768C45" />
          </g>
          
          <g className="factory-cluster-2" opacity="0.3">
             <rect x="1100" y="410" width="120" height="70" fill="#A8BDBF" />
             <rect x="1180" y="380" width="60" height="100" fill="#768C45" />
             <circle cx="1130" cy="410" r="15" fill="#C5D7D9" />
          </g>

          {/* The Bridge (Reference inspired) */}
          <path d="M150 485H1290M350 485V445M550 485V435M750 485V435M950 485V445M1150 485V455" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          <path d="M150 485C350 445 550 435 720 435C890 435 1090 445 1290 485" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeDasharray="8 8" opacity="0.5" />
          
          {/* Foreground Ground */}
          <path d="M-100 520C200 500 500 530 800 510C1100 490 1300 510 1540 520V600H-100V520Z" fill="#FFFFFF" />
          
          {/* Stylized Clouds */}
          <circle cx="200" cy="150" r="40" fill="#FFFFFF" fillOpacity="0.6" />
          <circle cx="240" cy="160" r="30" fill="#FFFFFF" fillOpacity="0.6" />
          <circle cx="1200" cy="120" r="50" fill="#FFFFFF" fillOpacity="0.4" />
          
          <defs>
            <linearGradient id="skyGradient" x1="720" y1="0" x2="720" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E6F2F4" />
              <stop offset="1" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        
        {/* Main Footer Box (White box like reference) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl bg-white/70 backdrop-blur-xl border border-white rounded-[3rem] p-8 md:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-start justify-between gap-12"
        >
          {/* Brand & Newsletter */}
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-[#1A1A1A] tracking-tighter uppercase font-['Cinzel']">
                Optime<span className="text-[#3F7373]">Core</span>
              </h2>
              <p className="text-sm font-bold text-[#A8BDBF] tracking-[0.2em] uppercase transition-all group-hover:tracking-[0.3em]">
                Intelligence Platform
              </p>
            </div>

            <div className="space-y-4 max-w-sm">
              <h4 className="text-lg font-bold text-[#1A1A1A]">Get the latest news and updates</h4>
              <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                Join our mailing list to receive the latest updates on industrial AI, machine optimization, and factory intelligence.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-neutral-100 border-none px-6 py-4 rounded-full text-sm focus:ring-2 ring-[#3F7373]/20 transition-all"
                />
                <button className="bg-[#3F7373] hover:bg-[#3F7373]/90 text-white px-8 py-4 rounded-full text-sm font-bold shadow-lg shadow-[#3F7373]/20 transition-all flex items-center gap-2">
                  Send <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 min-w-[300px]">
            <div className="space-y-6">
              <h5 className="text-[11px] font-black tracking-[0.3em] uppercase text-[#3F7373]">Platform</h5>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="text-sm font-bold text-neutral-700 hover:text-[#3F7373] transition-colors">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="space-y-6">
              <h5 className="text-[11px] font-black tracking-[0.3em] uppercase text-[#768C45]">Connect</h5>
              <div className="flex flex-col gap-4">
                 {socialLinks.map(({ Icon, label }) => (
                   <a key={label} href="#" className="flex items-center gap-3 text-sm font-bold text-neutral-700 hover:text-[#768C45] transition-colors">
                      <Icon className="w-4 h-4" />
                      {label}
                   </a>
                 ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between w-full max-w-6xl px-4 gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <p className="text-[10px] font-black tracking-[0.4em] uppercase text-neutral-600">
            © 2026 OptimeCore Intelligence Platform
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-black tracking-[0.4em] uppercase text-neutral-600 hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-black tracking-[0.4em] uppercase text-neutral-600 hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export { StackedCircularFooter }
