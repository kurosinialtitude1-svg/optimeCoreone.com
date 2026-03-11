'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import {
  Terminal, Mail, Phone, MapPin, ArrowRight, Factory,
  Clock, Shield, Zap, Send, CheckCircle2
} from 'lucide-react'

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
    <main className="min-h-screen bg-black font-['Cinzel'] overflow-x-hidden">
      {/* Navbar Back Link */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-[10px] font-bold tracking-[0.3em] uppercase text-[#A8BDBF]/60 hover:text-[#F2F1F0] transition-colors"
        >
          <ArrowRight className="w-3 h-3 rotate-180" /> Back to Platform
        </Link>
      </div>

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] rounded-full blur-[180px] opacity-[0.06] bg-[#3F7373] -top-32 -left-32" />
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.05] bg-[#768C45] bottom-0 right-0" />
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.04] bg-[#A8BDBF] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">

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
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6"
          >
            <span className="text-[#F2F1F0]">Get in</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F7373] via-[#A8BDBF] to-[#768C45]">
              Touch
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#A8BDBF]/60 text-lg max-w-xl mx-auto font-sans italic"
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
              <div className="relative border border-white/5 bg-white/[0.02] p-8 md:p-12 overflow-hidden">
                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-l from-[#3F7373] to-transparent rotate-45 origin-right" />
                </div>
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#3F7373] via-[#A8BDBF] to-[#768C45]" />

                <h2 className="text-2xl font-black text-[#F2F1F0] uppercase tracking-tight mb-2">
                  Send a Message
                </h2>
                <p className="text-[#A8BDBF]/40 text-xs font-sans tracking-widest uppercase mb-8">
                  We respond within 4 business hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { name: 'name', label: 'Full Name', placeholder: 'Michael Chen', type: 'text' },
                      { name: 'company', label: 'Company', placeholder: 'Precision Electronics Corp', type: 'text' },
                    ].map(field => (
                      <div key={field.name}>
                        <label className="block text-[9px] font-black tracking-[0.4em] uppercase text-[#A8BDBF]/50 mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          required
                          onChange={handleChange}
                          className="w-full bg-white/[0.04] border border-white/10 text-[#F2F1F0] placeholder:text-white/20 px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#3F7373]/50 focus:bg-[#3F7373]/5 transition-all"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-[9px] font-black tracking-[0.4em] uppercase text-[#A8BDBF]/50 mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="operations@yourfactory.com"
                      required
                      onChange={handleChange}
                      className="w-full bg-white/[0.04] border border-white/10 text-[#F2F1F0] placeholder:text-white/20 px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#3F7373]/50 focus:bg-[#3F7373]/5 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-black tracking-[0.4em] uppercase text-[#A8BDBF]/50 mb-2">
                      Reason for Contact
                    </label>
                    <select
                      name="reason"
                      required
                      onChange={handleChange}
                      className="w-full bg-white/[0.04] border border-white/10 text-[#F2F1F0] px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#3F7373]/50 transition-all appearance-none"
                    >
                      <option value="" className="bg-black">Select a reason...</option>
                      <option value="demo" className="bg-black">Request a Demo</option>
                      <option value="integration" className="bg-black">Custom Integration</option>
                      <option value="security" className="bg-black">Security / Compliance</option>
                      <option value="pricing" className="bg-black">Pricing & Plans</option>
                      <option value="support" className="bg-black">Technical Support</option>
                      <option value="other" className="bg-black">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[9px] font-black tracking-[0.4em] uppercase text-[#A8BDBF]/50 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about your factory, current challenges, and what you're looking to achieve..."
                      required
                      onChange={handleChange}
                      className="w-full bg-white/[0.04] border border-white/10 text-[#F2F1F0] placeholder:text-white/20 px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#3F7373]/50 focus:bg-[#3F7373]/5 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 flex items-center justify-center gap-3 bg-gradient-to-r from-[#3F7373] to-[#768C45] text-white text-xs font-black tracking-[0.4em] uppercase hover:opacity-90 hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(63,115,115,0.3)]"
                  >
                    <Send className="w-4 h-4" /> Send to Command Center
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative border border-[#768C45]/30 bg-[#768C45]/5 p-12 flex flex-col items-center text-center h-full justify-center gap-6 overflow-hidden"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#768C45] to-[#3F7373]" />
                <div className="w-20 h-20 rounded-full bg-[#768C45]/10 flex items-center justify-center border border-[#768C45]/30 shadow-[0_0_30px_rgba(118,140,69,0.2)]">
                  <CheckCircle2 className="w-10 h-10 text-[#768C45]" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#F2F1F0] uppercase tracking-tight mb-3">
                    Message Received
                  </h3>
                  <p className="text-[#A8BDBF]/60 font-sans text-sm leading-relaxed">
                    Thank you! Our team will get back to you within 4 business hours. Keep an eye on <span className="text-[#A8BDBF]">{form.email}</span>.
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
                  className="relative p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden group"
                >
                  <div className="absolute left-0 top-0 w-0.5 h-full transition-all duration-300" style={{ background: ch.color }} />
                  <div className="w-9 h-9 flex items-center justify-center border mb-4 transition-all duration-300 group-hover:shadow-lg"
                    style={{ borderColor: ch.color + '30', background: ch.color + '10' }}>
                    <ch.icon className="w-4 h-4" style={{ color: ch.color }} />
                  </div>
                  <p className="text-[9px] font-black tracking-[0.4em] uppercase mb-1" style={{ color: ch.color }}>
                    {ch.label}
                  </p>
                  <p className="text-[#F2F1F0] font-bold text-sm">{ch.value}</p>
                  <p className="text-[#A8BDBF]/40 text-xs font-sans mt-1">{ch.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Common Reasons */}
            <div className="border border-white/5 bg-white/[0.02] p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3F7373]/30 to-transparent" />
              <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-[#A8BDBF]/40 mb-6">
                Common Inquiries
              </h3>
              <div className="space-y-4">
                {reasons.map((r, i) => (
                  <motion.div
                    key={r.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border transition-all duration-300 group-hover:shadow-md"
                      style={{ borderColor: r.color + '30', background: r.color + '10' }}>
                      <r.icon className="w-4 h-4 transition-all duration-300" style={{ color: r.color }} />
                    </div>
                    <div>
                      <p className="text-[#F2F1F0] font-bold text-sm tracking-wide uppercase">{r.label}</p>
                      <p className="text-[#A8BDBF]/40 text-xs font-sans mt-0.5">{r.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Status Bar */}
            <div className="flex items-center justify-between px-6 py-4 border border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#768C45] animate-pulse" />
                <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#A8BDBF]/30 font-sans">
                  All Support Channels Online
                </p>
              </div>
              <p className="text-[9px] font-bold tracking-[0.3em] text-[#A8BDBF]/20 uppercase font-sans">
                16:51 UTC+5:30
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
