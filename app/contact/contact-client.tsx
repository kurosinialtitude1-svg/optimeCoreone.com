'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import {
  Terminal, Mail, Phone, MapPin, ArrowRight, Factory,
  Clock, Shield, Zap, Send, CheckCircle2
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { InnerPageFooter } from '@/components/inner-page-layout'

const contactChannels = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@optimecore.com',
    sub: 'Reply within 4 working hours',
    color: '#3F7373',
  },
  {
    icon: Phone,
    label: 'Call Direct',
    value: '+1 (800) 555-0198',
    sub: 'Mon–Fri, 9am–6pm EST',
    color: '#768C45',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: '240 Factory Ave, Detroit, MI',
    sub: 'Open for scheduled visits',
    color: '#A8BDBF',
  },
  {
    icon: Clock,
    label: 'Support Hours',
    value: '24/7 for Enterprise',
    sub: 'Priority queue for Pro+ plans',
    color: '#C5D7D9',
  },
]

const reasons = [
  { icon: Zap, label: 'Request a Demo', desc: 'See OptimeCore live in action on your data.', color: '#3F7373' },
  { icon: Shield, label: 'Security Inquiry', desc: 'ISO 27001 / SOC 2 compliance questions.', color: '#768C45' },
  { icon: Factory, label: 'Custom Integration', desc: 'Connect with ERP, MES, OPC-UA systems.', color: '#A8BDBF' },
]

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', reason: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen dynamic-mesh-bg font-['Cinzel'] overflow-x-hidden pt-32 pb-24">

      {/* Floating Orbs (Subtle palette accents for light mode) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute w-[800px] h-[800px] rounded-full opacity-[0.08] bg-[#A8BDBF] -top-96 -left-96 blur-[150px]" />
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-[0.06] bg-[#768C45] -bottom-48 -right-48 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.04] tech-grid-bg" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.5em] uppercase text-[#3F7373] mb-8"
          >
            <Terminal className="w-3 h-3" />
            <span>sys.contact.terminal</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-[#1A1A1A]"
          >
            Get in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F7373] via-[#768C45] to-[#3F7373]">
              Touch
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-neutral-600 text-lg max-w-xl mx-auto font-sans italic font-medium"
          >
            "Our team of industrial AI specialists is ready to help you transform your factory operations."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {!submitted ? (
              <div className="glass-panel tech-border-glow p-8 md:p-12 overflow-hidden shadow-2xl shadow-[#3F7373]/10">
                <h2 className="text-3xl font-black text-[#1A1A1A] uppercase tracking-tight mb-2">
                  Send a Message
                </h2>
                <p className="text-[#3F7373]/60 text-[10px] font-black tracking-[0.4em] uppercase mb-10">
                  Response Window: 4 Business Hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { name: 'name', label: 'Full Name', placeholder: 'Michael Chen', type: 'text' },
                      { name: 'company', label: 'Company', placeholder: 'Precision Electronics Corp', type: 'text' },
                    ].map(field => (
                      <div key={field.name}>
                        <label className="block text-[10px] font-black tracking-[0.4em] uppercase text-[#3F7373]/50 mb-3">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          required
                          onChange={handleChange}
                          className="w-full bg-white/40 border border-[#3F7373]/10 text-[#1A1A1A] placeholder:text-neutral-400 px-5 py-4 text-sm font-sans focus:outline-none focus:border-[#3F7373] focus:bg-white/80 transition-all rounded-xl"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-[10px] font-black tracking-[0.4em] uppercase text-[#3F7373]/50 mb-3">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="operations@yourfactory.com"
                      required
                      onChange={handleChange}
                      className="w-full bg-white/40 border border-[#3F7373]/10 text-[#1A1A1A] placeholder:text-neutral-400 px-5 py-4 text-sm font-sans focus:outline-none focus:border-[#3F7373] focus:bg-white/80 transition-all rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black tracking-[0.4em] uppercase text-[#3F7373]/50 mb-3">
                      Reason for Contact
                    </label>
                    <select
                      name="reason"
                      required
                      onChange={handleChange}
                      className="w-full bg-white/40 border border-[#3F7373]/10 text-[#1A1A1A] px-5 py-4 text-sm font-sans focus:outline-none focus:border-[#3F7373] focus:bg-white/80 transition-all appearance-none rounded-xl"
                    >
                      <option value="">Select a reason...</option>
                      <option value="demo">Request a Demo</option>
                      <option value="integration">Custom Integration</option>
                      <option value="security">Security / Compliance</option>
                      <option value="pricing">Pricing & Plans</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black tracking-[0.4em] uppercase text-[#3F7373]/50 mb-3">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about your factory, current challenges, and what you're looking to achieve..."
                      required
                      onChange={handleChange}
                      className="w-full bg-white/40 border border-[#3F7373]/10 text-[#1A1A1A] placeholder:text-neutral-400 px-5 py-4 text-sm font-sans focus:outline-none focus:border-[#3F7373] focus:bg-white/80 transition-all resize-none rounded-2xl"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-6 flex items-center justify-center gap-4 bg-[#3F7373] text-white text-[11px] font-black tracking-[0.4em] uppercase hover:bg-[#768C45] industrial-pulse transition-all shadow-2xl shadow-[#3F7373]/20 rounded-2xl"
                  >
                    <Send className="w-5 h-5" /> Send to Command Center
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel border-[#768C45]/30 p-12 flex flex-col items-center text-center h-full justify-center gap-8 overflow-hidden"
              >
                <div className="w-24 h-24 rounded-full bg-[#768C45]/10 flex items-center justify-center border border-[#768C45]/30 shadow-[0_0_50px_rgba(118,140,69,0.2)]">
                  <CheckCircle2 className="w-12 h-12 text-[#768C45]" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-[#1A1A1A] uppercase tracking-tight mb-4">
                    Message Received
                  </h3>
                  <p className="text-neutral-600 font-sans text-base leading-relaxed font-medium">
                    Protocol initiated. Our team will get back to you within 4 business hours. Verification sent to <span className="text-[#3F7373] font-bold">{form.email}</span>.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-[9px] font-bold tracking-[0.4em] uppercase text-[#3F7373] border-b border-[#3F7373]/30 hover:border-[#3F7373] transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* RIGHT — Info Panels */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Contact Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactChannels.map((ch, i) => (
                <motion.div
                  key={ch.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="glass-panel tech-border-glow p-8 group transition-all duration-500 overflow-hidden"
                >
                  <div className="w-12 h-12 flex items-center justify-center border-2 mb-6 rounded-2xl transition-all duration-300 group-hover:shadow-lg"
                    style={{ borderColor: ch.color + '40', background: ch.color + '10' }}>
                    <ch.icon className="w-5 h-5" style={{ color: ch.color }} />
                  </div>
                  <p className="text-[10px] font-black tracking-[0.5em] uppercase mb-2" style={{ color: ch.color }}>
                    {ch.label}
                  </p>
                  <p className="text-[#1A1A1A] font-black text-lg tracking-tight">{ch.value}</p>
                  <p className="text-neutral-500 text-xs font-sans mt-2 font-medium">{ch.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Common Reasons */}
            <div className="glass-panel tech-border-glow p-10 relative overflow-hidden">
              <h3 className="text-[11px] font-black tracking-[0.5em] uppercase text-[#3F7373]/40 mb-8 underline decoration-[#3F7373]/20 underline-offset-8">
                Common Inquiries
              </h3>
              <div className="space-y-6">
                {reasons.map((r, i) => (
                  <motion.div
                    key={r.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-5 group cursor-pointer"
                  >
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border-2 transition-all duration-300 group-hover:shadow-md rounded-xl"
                      style={{ borderColor: r.color + '30', background: r.color + '10' }}>
                      <r.icon className="w-5 h-5 transition-all duration-300" style={{ color: r.color }} />
                    </div>
                    <div>
                      <p className="text-[#1A1A1A] font-black text-base tracking-tight uppercase leading-none mb-1">{r.label}</p>
                      <p className="text-neutral-500 text-xs font-sans font-medium">{r.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Status Bar */}
            <div className="flex items-center justify-between px-8 py-5 glass-panel border-[#3F7373]/10">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#768C45] animate-pulse shadow-[0_0_10px_rgba(118,140,69,0.5)]" />
                <p className="text-[10px] font-black tracking-[0.5em] uppercase text-[#3F7373] font-sans">
                  Support Channels: ONLINE
                </p>
              </div>
              <p className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase font-sans">
                16:51 UTC+5:30
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
    <InnerPageFooter />
    </>
  )
}
