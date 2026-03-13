'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Terminal, MessageSquare, Zap, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    id: 0,
    question: 'How do I integrate OptimeCore with my existing machines?',
    answer: 'OptimeCore supports integration with most industrial equipment through IoT sensors, PLCs, and industry-standard protocols like OPC UA and MQTT. Our integration team will work with you to ensure seamless connectivity.',
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
]

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => setOpenId(openId === id ? null : id)

  return (
    <section id="faq" className="relative py-24 lg:py-40 bg-[#E8F3F5] overflow-hidden font-['Cinzel']">
      {/* Enhanced Background Visibility */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] grayscale scale-105"
          style={{ backgroundImage: 'url("/images/faq-inquiry-bg.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8F3F5]/95 via-transparent to-[#E8F3F5]/95" />
        <div className="absolute inset-0 opacity-[0.03] tech-grid-bg" />
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3F7373]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#768C45]/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#3F7373]/20 text-[11px] font-black tracking-[0.5em] uppercase text-[#3F7373] mb-8 shadow-sm"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Inquiry Terminal</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black text-[#1A1A1A] uppercase tracking-tighter leading-tight"
            >
              Questions?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F7373] via-[#768C45] to-[#3F7373]">
                OptiCoreX Has Answers.
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-neutral-500 text-base md:text-lg max-w-xs lg:text-right font-sans leading-relaxed italic border-r-2 border-[#A8BDBF]/30 pr-6"
          >
            "Everything you need to know about OptimeCore operations, security, and support."
          </motion.p>
        </div>

        {/* FAQ Panels with Palette Colors */}
        <div className="space-y-4">
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
                    "group w-full text-left p-6 md:p-10 border transition-all duration-300 relative overflow-hidden rounded-[2.5rem]",
                    isOpen
                      ? "bg-white border-[#3F7373]/20 shadow-[0_25px_50px_-15px_rgba(63,115,115,0.15)]"
                      : "bg-white/40 border-neutral-200 backdrop-blur-sm hover:border-[#3F7373]/30 hover:bg-white/80"
                  )}
                >
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex items-start gap-8">
                      {/* Sequence Number using Palette */}
                      <div className={cn(
                        "flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl border text-[13px] font-black font-mono transition-all duration-300",
                        isOpen
                          ? "bg-[#3F7373] border-[#3F7373] text-[#F2F1F0] shadow-lg shadow-[#3F7373]/30"
                          : "bg-transparent border-neutral-200 text-[#A8BDBF] group-hover:border-[#3F7373]/30 group-hover:text-[#3F7373]"
                      )}>
                        {String(faq.id + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={cn(
                            "text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-300",
                            isOpen ? "text-[#768C45]" : "text-[#A8BDBF]"
                          )}>
                            {faq.tag}
                          </span>
                        </div>
                        <h3 className={cn(
                          "text-lg md:text-xl font-bold tracking-tight uppercase transition-colors duration-300",
                          isOpen ? "text-[#1A1A1A]" : "text-neutral-500 group-hover:text-[#1A1A1A]"
                        )}>
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <div className={cn(
                      "flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-500",
                      isOpen
                        ? "bg-[#3F7373] border-[#3F7373] text-[#F2F1F0] rotate-45 shadow-md shadow-[#3F7373]/20"
                        : "bg-white/50 border-neutral-200 text-neutral-400 group-hover:border-[#3F7373]/30 group-hover:text-[#3F7373]"
                    )}>
                      <Plus className="w-5 h-5" />
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
                      <div className="px-10 md:px-32 py-8">
                        <div className="flex items-start gap-6 border-l-4 border-[#C5D7D9] pl-8">
                          <Zap className="w-5 h-5 text-[#768C45] mt-1 flex-shrink-0" />
                          <p className="text-neutral-600 font-sans font-medium leading-relaxed text-base md:text-lg">
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

        {/* CTA Support Block - Refined Palette */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 relative p-12 md:p-20 bg-white border border-[#3F7373]/20 rounded-[4rem] overflow-hidden shadow-[0_48px_100px_-24px_rgba(63,115,115,0.2)]"
        >
          <div className="absolute inset-0 bg-white pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8F3F5] via-white to-[#E8F3F5] opacity-50 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 justify-between">
            <div className="flex items-start gap-8">
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-[#3F7373] rounded-2xl shadow-2xl shadow-[#3F7373]/30">
                <MessageSquare className="w-8 h-8 text-[#F2F1F0]" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight mb-3">
                  Still Have Questions?
                </h3>
                <p className="text-neutral-500 font-sans font-medium text-base italic max-w-lg">
                  Our specialists are ready to guide you with a personalized consultation and live demo.
                </p>
              </div>
            </div>
            <button className="flex-shrink-0 bg-[#3F7373] hover:bg-[#3F7373]/90 px-12 py-6 rounded-full text-[#F2F1F0] text-sm font-black tracking-[0.2em] uppercase hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-[#3F7373]/40 flex items-center gap-4">
              Real-Time Operations — Take Control <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
