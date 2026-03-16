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
    <section id="faq" className="relative py-24 lg:py-48 bg-[#E3EFF0] overflow-hidden font-['Syncopate']">
      {/* Enhanced Background Visibility */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.04] grayscale scale-105"
          style={{ backgroundImage: 'url("/Connect Factory Systems.svg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#E3EFF0] via-transparent to-[#E3EFF0]" />
        <div className="absolute inset-0 opacity-[0.03] tech-grid-bg" />
      </div>
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#528081]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#768C45]/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#528081]/10 border border-[#528081]/20 text-[8px] font-bold tracking-[0.4em] uppercase text-[#528081] mb-8 shadow-sm"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>INQUIRY_TERMINAL_0xA1</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] uppercase tracking-tighter leading-[0.85] overflow-hidden">
               {"QUESTIONS?".split("").map((char, i) => (
                <motion.span
                  key={`q-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
               ))}
               <br />
               <span className="text-[#528081]">ANSWERS_ENGINE</span>
            </h2>
          </div>
          <div className="lg:max-w-xs lg:text-right">
             <div className="h-[2px] w-24 bg-[#528081]/30 mb-6 ml-auto md:ml-0 md:mr-auto lg:ml-auto lg:mr-0" />
             <p className="text-neutral-500 text-sm md:text-base font-sans leading-relaxed italic border-r-2 border-[#528081]/10 pr-6">
                "Technical documentation and operational intelligence for precision factory orchestration."
             </p>
          </div>
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
                    "group w-full text-left p-5 md:p-8 lg:p-12 border transition-all duration-500 relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem]",
                    isOpen
                      ? "bg-white border-[#528081]/40 shadow-[0_25px_60px_-15px_rgba(82,128,129,0.15)]"
                      : "bg-white/40 border-[#528081]/10 backdrop-blur-3xl hover:border-[#528081]/30 hover:bg-white/60"
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 md:gap-8">
                      {/* Sequence Number using Palette */}
                      <div className={cn(
                        "flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl border text-[13px] font-bold font-mono transition-all duration-500",
                        isOpen
                          ? "bg-[#528081] border-[#528081] text-white shadow-xl shadow-[#528081]/30"
                          : "bg-white/80 border-[#528081]/10 text-[#528081] group-hover:border-[#528081]/30"
                      )}>
                        {String(faq.id + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={cn(
                            "text-[8px] font-bold tracking-[0.4em] uppercase transition-all duration-500",
                            isOpen ? "text-[#768C45]" : "text-[#528081]/60"
                          )}>
                            DATA_NODE__{faq.tag}
                          </span>
                        </div>
                        <h3 className={cn(
                          "text-lg md:text-xl font-bold tracking-tight uppercase transition-colors duration-500",
                          isOpen ? "text-[#1A1A1A]" : "text-neutral-500 group-hover:text-[#1A1A1A]"
                        )}>
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <div className={cn(
                      "flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-700",
                      isOpen
                        ? "bg-[#528081] border-[#528081] text-white rotate-45 shadow-lg shadow-[#528081]/20"
                        : "bg-white/50 border-[#528081]/10 text-[#528081] group-hover:border-[#528081]/30"
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
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-12 lg:px-32 py-8 md:py-10">
                        <div className="flex items-start gap-4 md:gap-8 border-l-[3px] border-[#528081]/20 pl-6 md:pl-10 relative">
                          <div className="absolute top-0 -left-[3px] w-[3px] h-8 bg-[#528081]" />
                          <Zap className="w-5 h-5 text-[#528081] mt-1 flex-shrink-0 opacity-40" />
                          <p className="text-neutral-600 font-sans font-medium leading-relaxed text-base md:text-lg italic">
                            "{faq.answer}"
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
          className="mt-20 md:mt-32 relative p-8 md:p-12 lg:p-24 bg-white/40 backdrop-blur-3xl border border-[#528081]/30 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(82,128,129,0.15)] group"
        >
          <div className="absolute inset-0 tech-grid-bg opacity-[0.03] pointer-events-none" />
          <div className="absolute -top-[100px] -right-[100px] w-[300px] h-[300px] bg-[#528081]/10 blur-[100px] rounded-full pointer-events-none transition-all duration-1000 group-hover:scale-110" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 justify-between">
            <div className="flex items-start gap-6 md:gap-10">
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center bg-[#528081] rounded-[1rem] md:rounded-[1.5rem] shadow-2xl shadow-[#528081]/40 border border-white/20">
                <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] uppercase tracking-tighter mb-3 md:mb-4 leading-none">
                  STILL_QUERYING?
                </h3>
                <p className="text-neutral-500 font-sans font-medium text-base md:text-lg italic max-w-lg">
                  Connect with our systems architects for a direct operational feasibility analysis.
                </p>
              </div>
            </div>
            <button className="flex-shrink-0 group/btn relative bg-[#528081] px-14 py-7 rounded-2xl text-white text-[11px] font-bold tracking-[0.3em] uppercase hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-[#528081]/20 flex items-center gap-4 overflow-hidden">
               <span className="relative z-10">INITIALIZE_CONSULTATION</span>
               <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
               <div className="absolute inset-0 bg-[#768C45] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
