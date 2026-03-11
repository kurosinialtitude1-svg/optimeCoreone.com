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
    icon: Factory,
    accent: '#3F7373', // Ming
    description: 'Optimize assembly lines and reduce unplanned downtime by 40%.',
    imageUrl: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2000&auto=format&fit=crop',
    metrics: [
      { label: 'Unplanned Stops', value: '-35%', icon: Activity },
      { label: 'Cycle Times', value: '-28%', icon: Zap },
      { label: 'Annual Savings', value: '$2.3M', icon: BarChart3 },
    ],
    detail: 'Leading automotive manufacturers use Smart Factory to coordinate multi-line production and prevent costly stops.',
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
    icon: Microscope,
    accent: '#768C45', // Palm Leaf
    description: 'Ensure batch consistency with real-time monitoring and predictive analytics.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-4be66c1b527a?q=80&w=2000&auto=format&fit=crop',
    metrics: [
      { label: 'Defect Rate', value: '-42%', icon: ShieldCheck },
      { label: 'Compliance', value: '99.2%', icon: ShieldCheck },
      { label: 'Efficiency Gains', value: '$5.1M', icon: BarChart3 },
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
    icon: ShoppingCart,
    accent: '#A8BDBF', // Opal
    description: 'Maintain hygiene standards and optimize line scheduling with AI.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
    metrics: [
      { label: 'Waste Reduction', value: '-38%', icon: Zap },
      { label: 'Changeover', value: '-45%', icon: Activity },
      { label: 'Cost Savings', value: '$1.8M', icon: BarChart3 },
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
    icon: Cpu,
    accent: '#C5D7D9', // Columbia Blue
    description: 'Manage complex PCB assembly with precision and predictive maintenance.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
    metrics: [
      { label: 'Uptime', value: '+52%', icon: Zap },
      { label: 'Quality Index', value: '+31%', icon: ShieldCheck },
      { label: 'Net Savings', value: '$3.7M', icon: BarChart3 },
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
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#0A0A0A] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row"
          >
            {/* Animated Background for Modal */}
            <div className="absolute inset-0 tech-grid-bg tech-grid-anim opacity-10 pointer-events-none" />

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Visual Sidebar */}
            <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
              <Image 
                src={industry.imageUrl}
                alt={industry.name}
                fill
                className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent lg:bg-gradient-to-r" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-black text-white tracking-tighter uppercase">{industry.name}</h2>
                <p className="text-sm font-sans font-bold text-white/40 tracking-widest uppercase mt-2">Intelligence Archive</p>
              </div>
            </div>

            {/* Right: Content Area */}
            <div className="lg:w-3/5 p-8 md:p-12 overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-2 mb-8 text-[10px] font-bold tracking-[0.4em] uppercase text-[#3F7373]">
                <Info className="w-3 h-3" />
                <span>Confidential Case Study Report</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tight leading-none uppercase">
                {industry.caseStudy.title}
              </h3>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-neutral-500 font-sans text-xs font-bold uppercase tracking-wider">
                    <Calendar className="w-3 h-3" /> Duration
                  </div>
                  <p className="text-white font-bold">{industry.caseStudy.duration}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-neutral-500 font-sans text-xs font-bold uppercase tracking-wider">
                    <Target className="w-3 h-3" /> Focus Area
                  </div>
                  <p className="text-white font-bold">Optimization</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 transition-all hover:bg-white/[0.05]">
                  <h4 className="text-sm font-bold text-[#A8BDBF] uppercase tracking-widest mb-3">01. The Challenge</h4>
                  <p className="font-sans text-neutral-400 leading-relaxed italic">"{industry.caseStudy.challenge}"</p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 transition-all hover:bg-white/[0.05]">
                  <h4 className="text-sm font-bold text-[#768C45] uppercase tracking-widest mb-3">02. The Solution</h4>
                  <p className="font-sans text-neutral-400 leading-relaxed">{industry.caseStudy.solution}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">03. Key Results</h4>
                  <div className="space-y-4">
                    {industry.caseStudy.results.map((res, i) => (
                      <div key={i} className="flex items-start gap-4 font-sans">
                        <div className="w-5 h-5 rounded-full bg-[#3F7373]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-[#3F7373]" />
                        </div>
                        <p className="text-neutral-300 text-sm font-medium">{res}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex justify-end">
                <button 
                  onClick={onClose}
                  className="px-8 py-3 rounded-full border border-white/10 text-white font-bold text-xs hover:bg-white/5 transition-all flex items-center gap-2"
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
    <section id="use-cases" className="relative py-24 lg:py-36 bg-black overflow-hidden font-['Cinzel']">
      {/* Background Tech Elements & Image */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
          style={{ backgroundImage: 'url("/images/industrial-success-bg.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3F7373] to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
        <div className="absolute left-1/4 top-0 w-px h-full bg-white/5" />
        <div className="absolute left-3/4 top-0 w-px h-full bg-white/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter mb-6"
            >
              INDUSTRY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F7373] to-[#768C45]">SUCCESS</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-neutral-400 text-lg font-medium font-sans"
            >
              See how OptimeCore transforms manufacturing operations across automotive, pharmaceutical, food & beverage, and electronics industries.
            </motion.p>
          </div>
          
          <div className="flex gap-2">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind)}
                className={cn(
                  "p-3 rounded-xl border transition-all duration-500",
                  activeTab.id === ind.id 
                    ? "bg-white/10 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                    : "border-transparent text-neutral-600 hover:text-neutral-400"
                )}
              >
                <ind.icon className={cn("w-6 h-6", activeTab.id === ind.id && "text-white")} />
              </button>
            ))}
          </div>
        </div>

        {/* Command Center Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Navigation Panel */}
          <div className="lg:col-span-4 space-y-4">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind)}
                className={cn(
                  "w-full text-left p-6 rounded-2xl border transition-all duration-500 group relative overflow-hidden",
                  activeTab.id === ind.id 
                    ? "bg-white/5 border-white/10 shadow-2xl" 
                    : "border-transparent opacity-40 hover:opacity-80"
                )}
              >
                {activeTab.id === ind.id && (
                  <motion.div 
                    layoutId="active-bg"
                    className="absolute inset-0 bg-gradient-to-r from-[#3F7373]/20 to-transparent pointer-events-none"
                  />
                )}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 transition-colors",
                      activeTab.id === ind.id ? "bg-white text-black" : "bg-neutral-900 text-neutral-500"
                    )}>
                      <ind.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={cn(
                        "text-lg font-bold tracking-tight",
                        activeTab.id === ind.id ? "text-white" : "text-neutral-500"
                      )}>
                        {ind.name}
                      </h3>
                    </div>
                  </div>
                  <ArrowRight className={cn(
                    "w-4 h-4 transition-transform",
                    activeTab.id === ind.id ? "text-white translate-x-0" : "text-neutral-800 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
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
                className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-3xl backdrop-blur-sm"
              >
                {/* Background Glow */}
                <div 
                  className="absolute top-0 right-0 w-96 h-96 blur-[120px] opacity-20 pointer-events-none"
                  style={{ background: activeTab.accent }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-[12px] font-bold tracking-[0.3em] uppercase opacity-40">Intelligence Report</span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-[0.9] tracking-tighter uppercase">
                    {activeTab.name} <br />
                    <span className="text-neutral-500">Operation</span>
                  </h3>

                  <p className="text-xl text-neutral-300 font-sans font-medium mb-12 max-w-xl leading-relaxed">
                    {activeTab.description}
                  </p>

                  {/* Metrics Dashboard */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {activeTab.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col gap-4 group hover:border-white/20 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
                          <metric.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">{metric.label}</p>
                          <p className="text-3xl font-black text-white tracking-tighter">{metric.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-neutral-500 font-sans text-sm max-w-md italic">
                      "{activeTab.detail}"
                    </p>
                    <button 
                      onClick={() => setSelectedIndustry(activeTab)}
                      className="mixed-gradient-glow px-8 py-4 rounded-full text-white font-bold tracking-tight text-sm hover:scale-105 transition-transform flex items-center gap-2"
                    >
                      VIEW FULL CASE STUDY <ArrowRight className="w-4 h-4" />
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
