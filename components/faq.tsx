'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Terminal, MessageSquare, Zap, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    id: 0,
    question: 'How do I integrate Smart Factory with my existing machines?',
    answer: 'Smart Factory supports integration with most industrial equipment through IoT sensors, PLCs, and industry-standard protocols like OPC UA and MQTT. Our integration team will work with you to ensure seamless connectivity.',
    tag: 'INTEGRATION',
  },
  {
    id: 1,
    question: 'What about data security and privacy?',
    answer: 'We take security seriously with ISO 27001 certification, SOC 2 compliance, end-to-end encryption, and role-based access controls. All data is encrypted in transit and at rest. We also offer on-premise deployment for enterprise clients.',
    tag: 'SECURITY',
  },
  {
    id: 2,
    question: 'How long is the free trial?',
    answer: 'Our free trial lasts 14 days with full access to all Professional features. No credit card is required to get started. After the trial ends, you can choose a plan or cancel anytime.',
    tag: 'BILLING',
  },
  {
    id: 3,
    question: 'Can I export my data?',
    answer: 'Yes! You have full access to your data. We provide data export in CSV, JSON, and Excel formats. You can also access data via our REST API for custom integrations.',
    tag: 'DATA',
  },
  {
    id: 4,
    question: 'What kind of support is available?',
    answer: 'Starter plans include community support and documentation. Professional plans offer email support with 24-hour response times. Enterprise plans include dedicated account managers and 24/7 phone support.',
    tag: 'SUPPORT',
  },
  {
    id: 5,
    question: 'Do you offer custom integrations?',
    answer: 'Absolutely! Enterprise customers can access our API and professional services team for custom integrations with ERP, MES, and other business systems.',
    tag: 'INTEGRATION',
  },
  {
    id: 6,
    question: 'What is your uptime guarantee?',
    answer: 'Professional plans include 99.5% uptime SLA. Enterprise plans include 99.99% uptime SLA with redundancy and failover capabilities.',
    tag: 'RELIABILITY',
  },
  {
    id: 7,
    question: 'Can I switch plans anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle, and we prorate billing accordingly.',
    tag: 'BILLING',
  },
]

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => setOpenId(openId === id ? null : id)

  return (
    <section id="faq" className="relative py-24 lg:py-40 bg-black overflow-hidden font-['Cinzel']">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 scale-105"
          style={{ backgroundImage: 'url("/images/faq-inquiry-bg.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        <div className="absolute inset-0 opacity-[0.04] tech-grid-bg tech-grid-anim" />
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3F7373]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#768C45]/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.4em] uppercase text-[#3F7373] mb-6"
            >
              <Terminal className="w-3 h-3" />
              <span>sys.inquiry.terminal</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none"
            >
              Frequently
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F7373] to-[#768C45]">
                Asked
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#A8BDBF]/60 text-sm md:text-base max-w-xs lg:text-right font-sans leading-relaxed italic"
          >
            "Everything you need to know about Smart Factory operations, security, and support."
          </motion.p>
        </div>

        {/* FAQ Terminal Panels */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className={cn(
                    "group w-full text-left p-6 md:p-8 border transition-all duration-300 relative overflow-hidden",
                    isOpen
                      ? "bg-[#3F7373]/10 border-[#3F7373]/50"
                      : "bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
                  )}
                >
                  {/* Accent bar */}
                  <div className={cn(
                    "absolute left-0 top-0 w-1 h-full transition-all duration-300",
                    isOpen
                      ? "bg-gradient-to-b from-[#3F7373] to-[#768C45]"
                      : "bg-transparent group-hover:bg-white/10"
                  )} />

                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-6">
                      {/* Sequence Number */}
                      <div className={cn(
                        "flex-shrink-0 w-10 h-10 flex items-center justify-center border text-[11px] font-black font-mono transition-all duration-300",
                        isOpen
                          ? "bg-[#3F7373] border-[#3F7373] text-white"
                          : "bg-transparent border-white/10 text-neutral-600 group-hover:border-[#3F7373]/30 group-hover:text-[#A8BDBF]"
                      )}>
                        {String(faq.id + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                          <span className={cn(
                            "text-[9px] font-black tracking-[0.4em] border px-2 py-0.5 transition-all duration-300",
                            isOpen
                              ? "text-[#768C45] border-[#768C45]/30 bg-[#768C45]/10"
                              : "text-neutral-700 border-neutral-800"
                          )}>
                            {faq.tag}
                          </span>
                        </div>
                        <h3 className={cn(
                          "text-base md:text-lg font-bold tracking-tight uppercase transition-colors duration-300",
                          isOpen ? "text-white" : "text-neutral-400 group-hover:text-white"
                        )}>
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <div className={cn(
                      "flex-shrink-0 w-8 h-8 flex items-center justify-center border transition-all duration-500",
                      isOpen
                        ? "bg-[#3F7373] border-[#3F7373] rotate-45"
                        : "bg-transparent border-white/10 group-hover:border-white/20"
                    )}>
                      <Plus className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="bg-[#3F7373]/5 border-l border-r border-b border-[#3F7373]/30 px-8 md:px-14 py-8">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <Zap className="w-4 h-4 text-[#768C45]" />
                          </div>
                          <p className="text-[#C5D7D9]/80 font-sans leading-relaxed text-sm md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Console Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 relative p-10 md:p-16 border border-white/5 bg-white/[0.02] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#3F7373]/10 to-[#768C45]/5 pointer-events-none" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#3F7373]/10 blur-[80px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 justify-between">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-[#3F7373] shadow-[0_0_30px_rgba(63,115,115,0.4)]">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2">
                  Still have questions?
                </h3>
                <p className="text-[#A8BDBF]/60 font-sans text-sm italic">
                  Contact our specialists for a personalized consultation and live demo.
                </p>
              </div>
            </div>
            <button className="flex-shrink-0 mixed-gradient-glow px-10 py-5 rounded-full text-white text-xs font-black tracking-widest uppercase hover:scale-105 transition-transform flex items-center gap-3">
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
