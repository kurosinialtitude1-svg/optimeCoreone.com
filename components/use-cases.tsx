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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 font-['Syncopate']">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-white/40 backdrop-blur-3xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#E3EFF0]/90 backdrop-blur-2xl border border-[#528081]/30 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(82,128,129,0.2)] flex flex-col lg:flex-row"
          >
            {/* Animated Background for Modal */}
            <div className="absolute inset-0 tech-grid-bg opacity-[0.05] pointer-events-none" />

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 z-30 p-2.5 rounded-full bg-white/50 border border-[#528081]/20 text-[#528081] hover:bg-white hover:scale-110 transition-all shadow-lg backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left: Visual Sidebar */}
            <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
              <Image 
                src={industry.imageUrl}
                alt={industry.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#E3EFF0] via-transparent to-transparent lg:bg-gradient-to-r" />
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="w-14 h-14 rounded-2xl bg-[#528081] flex items-center justify-center mb-6 shadow-2xl shadow-[#528081]/30 border border-white/20">
                  <img src={industry.iconUrl} className="w-7 h-7 invert brightness-200" alt={industry.name} />
                </div>
                <h2 className="text-4xl font-bold text-[#1A1A1A] tracking-tighter uppercase leading-none">{industry.name}</h2>
                <p className="text-[8px] font-bold text-[#528081] tracking-[0.4em] uppercase mt-4 opacity-70">Industrial Intelligence Node</p>
              </div>
            </div>

            {/* Right: Content Area */}
            <div className="lg:w-3/5 p-12 md:p-20 overflow-y-auto custom-scrollbar relative z-10">
              <div className="flex items-center gap-3 mb-12 text-[9px] font-bold tracking-[0.5em] uppercase text-[#528081]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#768C45] animate-pulse" />
                <span>CONFIDENTIAL_CASE_STUDY_v4.0</span>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-12 tracking-tighter leading-[0.9] uppercase">
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
                <div className="p-8 rounded-[2.5rem] bg-white/50 border border-[#528081]/10 transition-all hover:bg-white/80 hover:border-[#528081]/30 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#528081]/5 rounded-bl-[100px] transition-all group-hover:scale-110" />
                  <h4 className="text-[10px] font-bold text-[#A8BDBF] uppercase tracking-[0.4em] mb-4">01. THE_CHALLENGE</h4>
                  <p className="font-sans text-neutral-600 leading-relaxed italic text-lg relative z-10">"{industry.caseStudy.challenge}"</p>
                </div>

                <div className="p-8 rounded-[2.5rem] bg-white/50 border border-[#528081]/10 transition-all hover:bg-white/80 hover:border-[#528081]/30 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#768C45]/5 rounded-bl-[100px] transition-all group-hover:scale-110" />
                  <h4 className="text-[10px] font-bold text-[#768C45] uppercase tracking-[0.4em] mb-4">02. THE_SOLUTION</h4>
                  <p className="font-sans text-neutral-600 leading-relaxed text-lg relative z-10">{industry.caseStudy.solution}</p>
                </div>

                <div className="pt-4">
                  <h4 className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-[0.4em] mb-10 border-l-4 border-[#528081] pl-6">03. KEY_RESULTS_METRICS</h4>
                  <div className="space-y-6">
                    {industry.caseStudy.results.map((res, i) => (
                      <div key={i} className="flex items-start gap-6 font-sans group">
                        <div className="w-7 h-7 rounded-xl bg-[#528081]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#528081] transition-all border border-[#528081]/10">
                          <CheckCircle2 className="w-4 h-4 text-[#528081] group-hover:text-white" />
                        </div>
                        <p className="text-neutral-700 text-lg font-bold tracking-tight">{res}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-20 pt-12 border-t border-[#528081]/10 flex justify-end">
                <button 
                  onClick={onClose}
                  className="px-12 py-5 rounded-2xl bg-[#528081] text-white font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-[#528081]/90 transition-all shadow-2xl shadow-[#528081]/20 active:scale-95"
                >
                  EXPEDITE_CLOSE
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
    <section id="use-cases" className="relative py-24 lg:py-40 bg-[#E3EFF0] overflow-hidden font-['Syncopate']">
      {/* Background Tech Elements & Image - Enhanced Visibility */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
          style={{ backgroundImage: 'url("/Optimizing Factories.svg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#E3EFF0]/80 via-[#E3EFF0]/40 to-[#E3EFF0]/80" />
        
        {/* Animated Lines */}
        <motion.div 
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#528081]/40 to-transparent" 
        />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#528081]/10" />
        <div className="absolute left-1/4 top-0 w-px h-full bg-[#528081]/10" />
        <div className="absolute left-3/4 top-0 w-px h-full bg-[#528081]/10" />

        {/* Floating Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[100px] -right-[100px] w-[500px] h-[500px] bg-[#528081]/10 blur-[180px] rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -left-[200px] w-[600px] h-[600px] bg-[#768C45]/5 blur-[200px] rounded-full" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-24 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#528081]/10 border border-[#528081]/20 text-[8px] font-bold tracking-[0.4em] uppercase text-[#528081] mb-8"
            >
              <div className="w-1 h-1 rounded-full bg-[#768C45] animate-ping" />
              SECTOR_OPTIMIZATION_ENGINE
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] leading-[0.85] tracking-tighter mb-10 uppercase overflow-hidden">
               {"OPTIMIZING".split("").map((char, i) => (
                <motion.span
                  key={`optimizing-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.03 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
               ))}
               <br />
               <span className="text-[#528081]">ACROSS_SECTORS</span>
            </h2>
            <p className="text-neutral-600 text-lg md:text-xl font-medium font-sans italic leading-relaxed max-w-2xl border-l-[3px] border-[#528081]/10 pl-8">
              "Leveraging decentralized intelligence to solve industry-specific operational complexity at a global scale."
            </p>
          </div>
          
          <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-center">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind)}
                className={cn(
                  "flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all duration-500 min-w-[140px] backdrop-blur-md relative overflow-hidden group",
                  activeTab.id === ind.id 
                    ? "bg-white border-[#528081] shadow-[0_20px_40px_rgba(82,128,129,0.1)] scale-105" 
                    : "bg-white/40 border-[#528081]/10 text-neutral-800 hover:border-[#528081]/30"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500",
                  activeTab.id === ind.id ? "bg-[#528081] scale-110" : "bg-white/80 group-hover:bg-[#528081]/10"
                )}>
                  <img 
                    src={ind.iconUrl} 
                    className={cn(
                      "w-5 h-5 transition-all duration-300", 
                      activeTab.id === ind.id ? "invert brightness-200" : "brightness-0 opacity-40 group-hover:opacity-100"
                    )} 
                    alt={ind.name}
                  />
                </div>
                <span className={cn(
                  "text-[9px] font-bold uppercase tracking-[0.2em] transition-all",
                  activeTab.id === ind.id ? "text-[#1A1A1A]" : "text-neutral-500"
                )}>
                  {ind.name}
                </span>
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
                  "w-full text-left p-8 rounded-[2.5rem] border transition-all duration-500 group relative overflow-hidden backdrop-blur-md",
                  activeTab.id === ind.id 
                    ? "bg-white border-[#528081] shadow-2xl shadow-[#528081]/10" 
                    : "bg-white/40 border-[#528081]/10 opacity-70 hover:opacity-100 hover:bg-white/60 hover:border-[#528081]/30"
                )}
              >
                {activeTab.id === ind.id && (
                  <motion.div 
                    layoutId="active-bg"
                    className="absolute inset-0 bg-gradient-to-r from-[#528081]/5 to-transparent pointer-events-none"
                  />
                )}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center border transition-all shadow-sm",
                      activeTab.id === ind.id ? "bg-[#528081] border-[#528081] shadow-lg shadow-[#528081]/20" : "bg-white border-[#528081]/10"
                    )}>
                      <img 
                        src={ind.iconUrl} 
                        className={cn(
                          "w-6 h-6 transition-all", 
                          activeTab.id === ind.id ? "invert brightness-200" : "brightness-0 opacity-40"
                        )} 
                        alt={ind.name}
                      />
                    </div>
                    <div>
                      <h3 className={cn(
                        "text-lg font-bold tracking-tight uppercase transition-all duration-300",
                        activeTab.id === ind.id ? "text-[#1A1A1A]" : "text-neutral-500 group-hover:text-[#528081]"
                      )}>
                        {ind.name}
                      </h3>
                      <div className={cn(
                        "h-[2px] w-0 bg-[#528081]/50 transition-all duration-500",
                        activeTab.id === ind.id && "w-full"
                      )} />
                    </div>
                  </div>
                  <ArrowRight className={cn(
                    "w-5 h-5 transition-all duration-500",
                    activeTab.id === ind.id ? "text-[#528081] translate-x-0" : "text-neutral-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#528081]"
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
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/80 border-[3px] border-double border-[#528081]/20 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-[0_40px_80px_-15px_rgba(82,128,129,0.12)] backdrop-blur-2xl group"
              >
                {/* Sector Specific Background - Dynamic Visibility */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08] pointer-events-none grayscale transition-opacity duration-1000 group-hover:opacity-[0.12]"
                  style={{ backgroundImage: `url("${activeTab.imageUrl}")` }}
                />
                
                {/* Background Glow */}
                <div 
                  className="absolute top-0 right-0 w-[500px] h-[500px] blur-[150px] opacity-[0.1] pointer-events-none transition-all duration-1000 group-hover:opacity-[0.15]"
                  style={{ background: activeTab.accent }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-12">
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#528081] opacity-60">ANALYSIS_LOG_0x{(activeTab.id).toUpperCase()}</span>
                    <div className="h-px flex-1 bg-[#528081]/20" />
                  </div>

                  <h3 
                    className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-10 leading-[0.85] tracking-tighter uppercase relative z-20"
                  >
                    {activeTab.name} <br />
                    <span className="text-[#528081] opacity-70">SYNERGY</span>
                  </h3>

                  <p className="text-xl text-neutral-600 font-sans font-medium mb-16 max-w-xl leading-relaxed italic border-l-2 border-[#528081]/10 pl-10">
                    "{activeTab.description}"
                  </p>

                  {/* Metrics Dashboard */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {activeTab.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-white/40 border-2 border-[#528081]/20 rounded-[2.5rem] p-8 flex flex-col gap-6 group/metric hover:border-[#528081] transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-[#528081]/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-[#528081]/5 rounded-bl-3xl transition-transform group-hover/metric:scale-125" />
                        <div className="w-12 h-12 rounded-2xl bg-[#528081] flex items-center justify-center shadow-2xl shadow-[#528081]/10 overflow-hidden shrink-0 border border-white/20 relative z-10 transition-transform group-hover/metric:rotate-12">
                          <img src={metric.iconUrl} className="w-6 h-6 invert brightness-200" alt={metric.label} />
                        </div>
                        <div className="relative z-10">
                          <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#A8BDBF] mb-3">{metric.label}</p>
                          <p className="text-4xl font-bold text-[#1A1A1A] tracking-tighter">{metric.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-12 border-t border-[#528081]/10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex items-center gap-6 max-w-md">
                        <div className="w-[3px] h-12 bg-gradient-to-b from-[#528081] to-transparent opacity-40 rounded-full" />
                        <p className="text-neutral-500 font-sans text-sm md:text-base italic leading-relaxed">
                          "{activeTab.detail}"
                        </p>
                    </div>
                    <button 
                      onClick={() => setSelectedIndustry(activeTab)}
                      className="group relative bg-[#528081] px-10 py-5 rounded-2xl text-white font-bold tracking-[0.3em] text-[10px] uppercase hover:scale-105 transition-all shadow-2xl shadow-[#528081]/20 flex items-center gap-4 overflow-hidden"
                    >
                      <span className="relative z-10">VIEW_FULL_REPORT</span> 
                      <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 bg-[#768C45] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
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
