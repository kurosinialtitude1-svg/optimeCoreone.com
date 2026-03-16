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
    <footer className="relative bg-[#E3EFF0] py-24 overflow-hidden font-['Syncopate']">
      {/* Illustrative Background Scene (OptimeCore Industrial Valley) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full h-auto preserve-3d">
          {/* Sky Gradient */}
          <rect width="1440" height="600" fill="url(#skyGradient)" />
          
          {/* Distant Hills */}
          <path d="M-100 480C50 420 250 450 400 480C550 510 750 480 900 450C1050 420 1250 450 1540 480V600H-100V480Z" fill="#528081" fillOpacity="0.1" />
          
          {/* Midground Factory Clusters */}
          <g className="factory-cluster-1" opacity="0.3">
             <rect x="100" y="420" width="80" height="60" fill="#A8BDBF" />
             <rect x="160" y="400" width="40" height="80" fill="#528081" />
             <path d="M100 420L140 380L180 420Z" fill="#768C45" />
          </g>
          
          <g className="factory-cluster-2" opacity="0.2">
             <rect x="1100" y="410" width="120" height="70" fill="#A8BDBF" />
             <rect x="1180" y="380" width="60" height="100" fill="#768C45" />
             <circle cx="1130" cy="410" r="15" fill="#C5D7D9" />
          </g>

          {/* The Bridge (Reference inspired) */}
          <path d="M150 485H1290M350 485V445M550 485V435M750 485V435M950 485V445M1150 485V455" stroke="#528081" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
          <path d="M150 485C350 445 550 435 720 435C890 435 1090 445 1290 485" stroke="#528081" strokeWidth="1" fill="none" strokeDasharray="8 8" opacity="0.1" />
          
          {/* Foreground Ground */}
          <path d="M-100 520C200 500 500 530 800 510C1100 490 1300 510 1540 520V600H-100V520Z" fill="#E3EFF0" />
          
          <defs>
            <linearGradient id="skyGradient" x1="720" y1="0" x2="720" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D8E8EA" />
              <stop offset="1" stopColor="#E3EFF0" />
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
          className="w-full max-w-6xl bg-white/40 backdrop-blur-3xl border border-[#528081]/20 rounded-[4rem] p-10 md:p-20 shadow-[0_40px_80px_-20px_rgba(82,128,129,0.1)] flex flex-col md:flex-row items-start justify-between gap-16"
        >
          {/* Brand & Newsletter */}
          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[#1A1A1A] tracking-tighter uppercase leading-none">
                OPTIME<span className="text-[#528081]">CORE</span>
              </h2>
              <p className="text-[9px] font-bold text-[#528081]/60 tracking-[0.43em] uppercase transition-all hover:tracking-[0.5em] cursor-default">
                DECENTRALIZED_INTEL_MESH
              </p>
            </div>

            <div className="space-y-6 max-w-md">
              <h4 className="text-xl font-bold text-[#1A1A1A] uppercase tracking-tighter">DATA_FEED_ENROLLMENT</h4>
              <p className="text-sm text-neutral-500 font-sans font-medium leading-relaxed italic">
                Subscribe to our operational logs for the latest advancements in high-fidelity industrial automation and machine intelligence.
              </p>
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="SUBSCRIBE_OCTA" 
                  className="flex-1 bg-[#528081]/5 border border-[#528081]/10 px-8 py-5 rounded-2xl text-[11px] font-bold tracking-widest focus:ring-4 ring-[#528081]/10 transition-all outline-none"
                />
                <button className="bg-[#528081] hover:bg-[#528081]/90 text-white px-10 py-5 rounded-2xl text-[10px] font-bold tracking-[0.2em] shadow-xl shadow-[#528081]/20 transition-all flex items-center gap-2 uppercase">
                  PUSH <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-12 min-w-[350px]">
            <div className="space-y-8">
              <h5 className="text-[9px] font-bold tracking-[0.5em] uppercase text-[#528081]">PROTOCOL</h5>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="text-[11px] font-bold text-neutral-500 hover:text-[#528081] transition-all uppercase tracking-widest">
                    {link.label.replace(' ', '_')}
                  </a>
                ))}
              </nav>
            </div>
            <div className="space-y-8">
              <h5 className="text-[9px] font-bold tracking-[0.5em] uppercase text-[#768C45]">NODES</h5>
              <div className="flex flex-col gap-6">
                 {socialLinks.map(({ Icon, label }) => (
                   <a key={label} href="#" className="flex items-center gap-4 text-[11px] font-bold text-neutral-500 hover:text-[#768C45] transition-all uppercase tracking-widest">
                      <Icon className="w-4 h-4 opacity-40" />
                      {label}
                   </a>
                 ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between w-full max-w-6xl px-8 gap-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
          <p className="text-[9px] font-bold tracking-[0.5em] uppercase text-neutral-500">
            © 2026 OPTIMECORE_SYSTEMS_v8.4
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-[9px] font-bold tracking-[0.5em] uppercase text-neutral-500 hover:text-[#528081] transition-colors">PRIVACY_PROTOCOL</a>
            <a href="#" className="text-[9px] font-bold tracking-[0.5em] uppercase text-neutral-500 hover:text-[#528081] transition-colors">GOVERNANCE_TERMS</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export { StackedCircularFooter }
