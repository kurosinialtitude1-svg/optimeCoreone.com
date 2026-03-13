"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, BarChart3, ShieldCheck, Zap, Factory, ShoppingCart, Microscope, Cpu, ArrowRight, X, Info, Calendar, Target, CheckCircle2 } from 'lucide-react'
import { cn } from "@/lib/utils"
import Image from 'next/image'

const industries = [
  {
    id: 'automotive',
    name: 'Automotive',
    iconUrl: '/Automotive icon.svg',
    accent: '#3F7373', // Ming
    description: 'Optimize assembly lines and reduce unplanned downtime by 40%.',
    imageUrl: '/Automotive.svg',
    metrics: [
      { label: 'Unplanned Stops', value: '-35%', iconUrl: '/Unplanned Stops icon.svg' },
      { label: 'Cycle Times', value: '-28%', iconUrl: '/Cycle Times icon.svg' },
      { label: 'Annual Savings', value: '$2.3M', iconUrl: '/Annual Savings icon.svg' },
    ],
    detail: 'Leading automotive manufacturers use OptiCoreX to coordinate multi-line production and prevent costly stops.',
    caseStudy: {
      title: 'Global Assembly Optimization',
      duration: '6 Months',
      challenge: 'Frequent unplanned stops on the main powertrain assembly line were costing over $50k per hour in lost productivity.',
      solution: 'Deployed 450+ AI-enabled vibration sensors across critical gearboxes and conveyor motors with real-time anomaly detection.',
      results: [
        '92% Predictive Accuracy for motor failures',
        'Reduced maintenance overtime by 15%',
        'Seamless SAP ERP integration for automatic parts ordering',
      ]
    }
  },
  {
    id: 'pharma',
    name: 'Pharmaceuticals',
    iconUrl: '/Pharmaceuticals icon.svg',
    accent: '#768C45', // Palm Leaf
    description: 'Ensure batch consistency with real-time monitoring and predictive analytics.',
    imageUrl: '/Pharmaceuticals.svg',
    metrics: [
      { label: 'Defect Rate', value: '-42%', iconUrl: '/Defect Rate icon.svg' },
      { label: 'Compliance', value: '99.2%', iconUrl: '/Compliance icon.svg' },
      { label: 'Efficiency Gains', value: '$5.1M', iconUrl: '/Efficiency Gains icon.svg' },
    ],
    detail: 'Pharma companies achieve regulatory compliance while increasing throughput and reducing waste.',
    caseStudy: {
      title: 'Precision Batch Control',
      duration: '8 Months',
      challenge: 'Temperature fluctuations during the titration process lead to 5% batch wastage and regulatory scrutiny.',
      solution: 'Closed-loop AI control system that adjusts vessel catalysts in milliseconds based on high-frequency thermal imaging.',
      results: [
        'Zero regulatory non-compliance events in 12 months',
        'Reduction in chemical reagent over-usage by 12%',
        'Automated digital audit trail generation',
      ]
    }
  },
  {
    id: 'food',
    name: 'Food & Beverage',
    iconUrl: '/Food & Beverage icon.svg',
    accent: '#A8BDBF', // Opal
    description: 'Maintain hygiene standards and optimize line scheduling with AI.',
    imageUrl: '/Food & Beverage.svg',
    metrics: [
      { label: 'Waste Reduction', value: '-38%', iconUrl: '/Waste Reduction icon.svg' },
      { label: 'Changeover', value: '-45%', iconUrl: '/Changeover icon.svg' },
      { label: 'Cost Savings', value: '$1.8M', iconUrl: '/Cost Savings icon.svg' },
    ],
    detail: 'Food production facilities accelerate time-to-market for new products while maintaining quality.',
    caseStudy: {
      title: 'Smart Cold Chain Integration',
      duration: '4 Months',
      challenge: 'Inefficient changeovers between different product lines were causing excessive idle energy consumption.',
      solution: 'AI-driven line scheduling that optimizes the sequence of product batches to minimize cleaning time and energy peaks.',
      results: [
        'Total energy consumption reduced by 22%',
        'Clean-in-place (CIP) cycle time reduced by 14 minutes',
        'Increased production volume by 1.2M units/year',
      ]
    }
  },
  {
    id: 'electronics',
    name: 'Electronics',
    iconUrl: '/Electronics icon.svg',
    accent: '#C5D7D9', // Columbia Blue
    description: 'Manage complex PCB assembly with precision and predictive maintenance.',
    imageUrl: '/Electronics.svg',
    metrics: [
      { label: 'Uptime', value: '+52%', iconUrl: '/Uptime icon.svg' },
      { label: 'Quality Index', value: '+31%', iconUrl: '/Quality Index icon.svg' },
      { label: 'Net Savings', value: '$3.7M', iconUrl: '/Net Savings icon.svg' },
    ],
    detail: 'Electronics manufacturers achieve tighter tolerances and faster iteration with AI-driven insights.',
    caseStudy: {
      title: 'Zero-Defect PCB Assembly',
      duration: '10 Months',
      challenge: 'Micro-soldering defects were often missed by human inspectors, leading to high RMA rates after shipment.',
      solution: 'Sub-millimeter AI computer vision system integrated directly into the pick-and-place machines.',
      results: [
        'Defect escape rate reduced from 2.4% to 0.01%',
        'Real-time feedback loop to component calibration',
        'Significant reduction in electronic waste (E-waste)',
      ]
    }
  },
]

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  industry: typeof industries[0]
}

function CaseStudyModal({ isOpen, onClose, industry }: ModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 font-['Cinzel']">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#F2F1F0] border border-[#3F7373]/20 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row"
          >
            {/* Animated Background for Modal */}
            <div className="absolute inset-0 tech-grid-bg opacity-[0.03] pointer-events-none" />

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 z-20 p-3 rounded-full bg-white/80 border border-[#3F7373]/10 text-[#3F7373] hover:bg-white hover:scale-110 transition-all shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left: Visual Sidebar */}
            <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
              <Image 
                src={industry.imageUrl}
                alt={industry.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F2F1F0] via-transparent to-transparent lg:bg-gradient-to-r" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-14 h-14 rounded-2xl bg-[#3F7373] flex items-center justify-center mb-6 shadow-2xl shadow-[#3F7373]/30">
                  <img src={industry.iconUrl} className="w-7 h-7 invert brightness-200" alt={industry.name} />
                </div>
                <h2 className="text-4xl font-black text-[#1A1A1A] tracking-tighter uppercase">{industry.name}</h2>
                <p className="text-xs font-sans font-black text-[#3F7373] tracking-widest uppercase mt-3">Industrial Insights Hub</p>
              </div>
            </div>

            {/* Right: Content Area */}
            <div className="lg:w-3/5 p-10 md:p-16 overflow-y-auto custom-scrollbar relative z-10">
              <div className="flex items-center gap-3 mb-10 text-[11px] font-black tracking-[0.5em] uppercase text-[#3F7373]">
                <Info className="w-4 h-4" />
                <span>Confidential Case Study Report</span>
              </div>

              <h3 className="text-3xl md:text-5xl font-black text-[#1A1A1A] mb-10 tracking-tighter leading-[0.9] uppercase">
                {industry.caseStudy.title}
              </h3>

              <div className="grid grid-cols-2 gap-10 mb-12">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-neutral-500 font-sans text-xs font-black uppercase tracking-widest">
                    <Calendar className="w-3.5 h-3.5" /> Duration
                  </div>
                  <p className="text-[#3F7373] font-bold text-lg">{industry.caseStudy.duration}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-neutral-500 font-sans text-xs font-black uppercase tracking-widest">
                    <Target className="w-3.5 h-3.5" /> Focus Area
                  </div>
                  <p className="text-[#3F7373] font-bold text-lg">Optimization</p>
                </div>
              </div>

              <div className="space-y-10">
                <div className="p-8 rounded-[2rem] bg-white border border-[#3F7373]/5 transition-all hover:border-[#3F7373]/20 shadow-sm">
                  <h4 className="text-xs font-black text-[#A8BDBF] uppercase tracking-[0.3em] mb-4">01. The Challenge</h4>
                  <p className="font-sans text-neutral-600 leading-relaxed italic text-lg decoration-[#A8BDBF]/30 underline-offset-4">"{industry.caseStudy.challenge}"</p>
                </div>

                <div className="p-8 rounded-[2rem] bg-white border border-[#3F7373]/5 transition-all hover:border-[#3F7373]/20 shadow-sm">
                  <h4 className="text-xs font-black text-[#768C45] uppercase tracking-[0.3em] mb-4">02. The Solution</h4>
                  <p className="font-sans text-neutral-600 leading-relaxed text-lg">{industry.caseStudy.solution}</p>
                </div>

                <div>
                  <h4 className="text-xs font-black text-[#1A1A1A] uppercase tracking-[0.3em] mb-8 border-b-2 border-[#3F7373]/10 pb-4 inline-block">03. Key Results</h4>
                  <div className="space-y-5">
                    {industry.caseStudy.results.map((res, i) => (
                      <div key={i} className="flex items-start gap-5 font-sans group">
                        <div className="w-6 h-6 rounded-lg bg-[#3F7373]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#3F7373] transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-[#3F7373] group-hover:text-white" />
                        </div>
                        <p className="text-neutral-700 text-base font-semibold">{res}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-[#3F7373]/10 flex justify-end">
                <button 
                  onClick={onClose}
                  className="px-10 py-4 rounded-full bg-[#3F7373] text-[#F2F1F0] font-black text-xs tracking-wider hover:bg-[#3F7373]/90 transition-all shadow-xl shadow-[#3F7373]/20"
                >
                  CLOSE REPORT
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(industries[0])
  const [selectedIndustry, setSelectedIndustry] = useState<typeof industries[0] | null>(null)

  return (
    <section id="use-cases" className="relative py-24 lg:py-36 bg-[#F2F1F0] overflow-hidden font-['Cinzel']">
      {/* Background Tech Elements & Image - Enhanced Visibility */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.4] scale-105"
          style={{ backgroundImage: 'url("/Optimizing Factories.svg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F2F1F0]/80 via-transparent to-[#F2F1F0]/80" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3F7373]/30 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#3F7373]/5" />
        <div className="absolute left-1/4 top-0 w-px h-full bg-[#3F7373]/5" />
        <div className="absolute left-3/4 top-0 w-px h-full bg-[#3F7373]/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-[#1A1A1A] leading-[1.1] tracking-tighter mb-8 uppercase"
            >
              Optimizing Factories<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F7373] via-[#768C45] to-[#3F7373]">Across Sectors</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-neutral-600 text-xl font-medium font-sans italic leading-relaxed"
            >
              "See how we leverage OptiCoreX to optimize manufacturing operations across automotive, pharmaceutical, food & beverage, and electronics industries."
            </motion.p>
          </div>
          
          <div className="flex gap-3">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind)}
                className={cn(
                  "flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-500 min-w-[120px] backdrop-blur-sm",
                  activeTab.id === ind.id 
                    ? "bg-white border-[#3F7373] shadow-[0_20px_40px_-10px_rgba(63,115,115,0.2)]" 
                    : "bg-white/60 border-neutral-300 text-neutral-800 hover:text-[#3F7373] hover:border-[#3F7373]/50"
                )}
              >
                <img 
                  src={ind.iconUrl} 
                  className={cn(
                    "w-7 h-7 transition-all duration-300", 
                    activeTab.id === ind.id ? "scale-110 brightness-0" : "opacity-40 hover:opacity-100 brightness-0"
                  )} 
                  alt={ind.name}
                />
                <span className={cn(
                  "text-[11px] font-black uppercase tracking-widest transition-all",
                  activeTab.id === ind.id ? "text-[#1A1A1A] opacity-100" : "text-neutral-900 opacity-70 group-hover:opacity-100"
                )}>
                  {ind.name.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Command Center Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Navigation Panel */}
          <div className="lg:col-span-4 space-y-5">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind)}
                className={cn(
                  "w-full text-left p-8 rounded-[2rem] border transition-all duration-500 group relative overflow-hidden backdrop-blur-md",
                  activeTab.id === ind.id 
                    ? "bg-white border-[#3F7373] shadow-2xl shadow-[#3F7373]/20" 
                    : "bg-white/70 border-neutral-300 opacity-90 hover:opacity-100 hover:bg-white hover:border-[#3F7373]/50"
                )}
              >
                {activeTab.id === ind.id && (
                  <motion.div 
                    layoutId="active-bg"
                    className="absolute inset-0 bg-gradient-to-r from-[#3F7373]/5 to-transparent pointer-events-none"
                  />
                )}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center border transition-all shadow-sm",
                      activeTab.id === ind.id ? "bg-[#3F7373] border-[#3F7373]" : "bg-white border-neutral-100"
                    )}>
                      <img 
                        src={ind.iconUrl} 
                        className={cn(
                          "w-6 h-6 transition-all", 
                          activeTab.id === ind.id ? "invert brightness-200" : "brightness-0 opacity-60"
                        )} 
                        alt={ind.name}
                      />
                    </div>
                    <div>
                      <h3 className={cn(
                        "text-xl font-black tracking-tight uppercase transition-all duration-300 group-hover:translate-x-1",
                        activeTab.id === ind.id ? "text-[#1A1A1A]" : "text-neutral-900 group-hover:text-[#3F7373]"
                      )}>
                        {ind.name}
                      </h3>
                    </div>
                  </div>
                  <ArrowRight className={cn(
                    "w-5 h-5 transition-transform",
                    activeTab.id === ind.id ? "text-[#3F7373] translate-x-0" : "text-neutral-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#3F7373]"
                  )} />
                </div>
              </button>
            ))}
          </div>

          {/* Right: Data Display Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-[#3F7373]/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(63,115,115,0.12)] backdrop-blur-sm"
              >
                {/* Sector Specific Background - Dynamic Visibility */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15] pointer-events-none grayscale"
                  style={{ backgroundImage: `url("${activeTab.imageUrl}")` }}
                />
                
                {/* Background Glow */}
                <div 
                  className="absolute top-0 right-0 w-96 h-96 blur-[120px] opacity-[0.12] pointer-events-none"
                  style={{ background: activeTab.accent }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <span className="text-[11px] font-black tracking-[0.4em] uppercase text-[#3F7373] opacity-60">Industrial Insights Hub</span>
                    <div className="h-px flex-1 bg-[#3F7373]/10" />
                  </div>

                  <h3 
                    className="text-4xl md:text-6xl font-black text-[#1A1A1A] mb-8 leading-[0.85] tracking-tighter uppercase relative z-20"
                    style={{ textShadow: '0 0 40px rgba(255,255,255,0.8)' }}
                  >
                    {activeTab.name} <br />
                    <span className="text-[#A8BDBF]">Operation</span>
                  </h3>

                  <p className="text-xl text-neutral-600 font-sans font-medium mb-14 max-w-xl leading-relaxed italic">
                    "{activeTab.description}"
                  </p>

                  {/* Metrics Dashboard */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                    {activeTab.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-[#F2F1F0]/50 border border-[#3F7373]/5 rounded-3xl p-8 flex flex-col gap-5 group hover:border-[#3F7373]/30 transition-all hover:bg-white hover:shadow-xl hover:shadow-[#3F7373]/5">
                        <div className="w-12 h-12 rounded-2xl bg-[#3F7373] flex items-center justify-center shadow-lg shadow-[#3F7373]/20 overflow-hidden shrink-0">
                          <img src={metric.iconUrl} className="w-6 h-6 invert brightness-200" alt={metric.label} />
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-widest text-[#A8BDBF] mb-2">{metric.label}</p>
                          <p className="text-4xl font-black text-[#1A1A1A] tracking-tighter">{metric.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-10 border-t border-[#3F7373]/10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-neutral-500 font-sans text-base max-w-md italic leading-relaxed">
                      "{activeTab.detail}"
                    </p>
                    <button 
                      onClick={() => setSelectedIndustry(activeTab)}
                      className="bg-[#3F7373] hover:bg-[#3F7373]/90 px-10 py-5 rounded-full text-[#F2F1F0] font-black tracking-widest text-xs hover:scale-105 transition-all shadow-2xl shadow-[#3F7373]/30 flex items-center gap-3"
                    >
                      VIEW FULL CASE STUDY <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <CaseStudyModal 
        isOpen={!!selectedIndustry}
        onClose={() => setSelectedIndustry(null)}
        industry={selectedIndustry || industries[0]}
      />
    </section>
  )
}
