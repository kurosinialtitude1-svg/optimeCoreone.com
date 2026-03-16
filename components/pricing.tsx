'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, Shield, Zap, Box, Terminal, Cpu, Database, Info } from 'lucide-react'
import { cn } from "@/lib/utils"

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    iconUrl: '/Starter icon.svg',
    monthlyPrice: 149,
    annualPrice: 1490,
    description: 'Perfect for small operations entering Industry 4.0.',
    features: [
      'Up to 5 production lines',
      'Real-time monitoring',
      'Email alerts',
      'Basic analytics',
      'Mobile app access',
      'Community support',
    ],
    cta: 'Start Free Trial',
    serial: 'MOD-01-STR',
    accent: '#A8BDBF',
  },
  {
    id: 'professional',
    name: 'Professional',
    iconUrl: '/Professional icon.svg',
    monthlyPrice: 399,
    annualPrice: 3990,
    description: 'For growing manufacturers scaling OptimeCore intelligence.',
    features: [
      'Unlimited production lines',
      'AI-powered predictions',
      'Custom alerts & webhooks',
      'Advanced analytics & reports',
      'Role-based dashboards',
      'API access',
      'Priority support',
      'SSO & audit logs',
    ],
    cta: 'Start Free Trial',
    serial: 'MOD-02-PRO',
    highlighted: true,
    accent: '#3F7373',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    iconUrl: '/Enterprise icon.svg',
    monthlyPrice: null,
    annualPrice: null,
    description: 'Custom solutions for large-scale industrial enterprises.',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom integrations',
      'On-premise deployment',
      'Advanced security & compliance',
      'SLA guarantees',
      'Training & consulting',
      '24/7 phone support',
    ],
    cta: 'Contact Sales',
    serial: 'MOD-03-ENT',
    accent: '#768C45',
  },
]

const comparisonData = [
  { feature: 'Production Lines', starter: '5', pro: 'Unlimited', ent: 'Unlimited' },
  { feature: 'AI Predictions', starter: '—', pro: '✓', ent: '✓' },
  { feature: 'API Access', starter: '—', pro: '✓', ent: '✓' },
  { feature: 'On-Premise Option', starter: '—', pro: '—', ent: '✓' },
  { feature: 'Dedicated Support', starter: '—', pro: 'Email', ent: '24/7 Phone' },
  { feature: 'Custom Logic', starter: '—', pro: '—', ent: '✓' },
  { feature: 'SLA Guarantee', starter: '—', pro: '99.9%', ent: '99.99%' },
]

export function PricingSection() {
  const [activePlan, setActivePlan] = useState(plans[1])
  const [isAnnual, setIsAnnual] = useState(true)

  const currentPrice = (plan: typeof plans[0]) => {
    if (!plan.monthlyPrice) return 'CUSTOM_QUOTE'
    return isAnnual ? `$${plan.annualPrice}` : `$${plan.monthlyPrice}`
  }

  return (
    <section id="pricing" className="relative py-24 lg:py-56 bg-[#E3EFF0] overflow-hidden font-['Syncopate']">
      {/* Background Elements & Custom Image - Enhanced Visibility */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.05] grayscale"
          style={{ backgroundImage: 'url("/Optimizing Factories.svg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#E3EFF0] via-transparent to-[#E3EFF0]" />
        <div className="absolute inset-0 opacity-[0.03] tech-grid-bg" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#528081]/10 border border-[#528081]/20 text-[8px] font-bold tracking-[0.4em] uppercase text-[#528081] mb-10 shadow-sm"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>RESOURCE_ALLOCATION_v3.2</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-10 uppercase tracking-tighter leading-[0.85] overflow-hidden">
             {"TRANSPARENT".split("").map((char, i) => (
                <motion.span
                  key={`trans-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
             ))}
             <span className="text-[#528081]"> PRICING_MESH</span>
          </h2>

          <div className="flex justify-center mb-12">
             <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#528081] to-transparent opacity-30" />
          </div>

          {/* Billing Switcher - Refined for Light Theme */}
          <div className="flex items-center justify-center gap-10">
            <button 
              onClick={() => setIsAnnual(false)}
              className={cn(
                "text-[10px] font-bold tracking-[0.3em] transition-all",
                !isAnnual ? "text-[#528081]" : "text-neutral-400"
              )}
            >
              MONTHLY_ACCESS
            </button>
            <div className="relative group">
                <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative h-8 w-16 rounded-xl bg-white/40 border border-[#528081]/30 p-1.5 transition-all shadow-inner overflow-hidden"
                >
                <div className="absolute inset-0 bg-[#528081]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div 
                    animate={{ x: isAnnual ? 32 : 0 }}
                    className="h-full aspect-square rounded-lg bg-[#528081] shadow-lg shadow-[#528081]/30"
                />
                </button>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsAnnual(true)}
                className={cn(
                  "text-[10px] font-bold tracking-[0.3em] transition-all",
                  isAnnual ? "text-[#528081]" : "text-neutral-400"
                )}
              >
                ANNUAL_COMMITMENT
              </button>
              <div className="relative">
                 <div className="absolute inset-0 bg-[#768C45]/20 blur-md rounded-full animate-pulse" />
                 <span className="relative px-3 py-1 rounded-lg bg-[#768C45] text-white text-[8px] font-bold tracking-widest border border-white/20">
                    -17%_EFFICIENCY_BOOST
                 </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Console Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-40">
          
          {/* Left: Selector Module - Refined Light Cards */}
          <div className="lg:col-span-4 space-y-6">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setActivePlan(plan)}
                className={cn(
                  "w-full text-left p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border transition-all duration-700 ease-[0.16,1,0.3,1] group relative overflow-hidden",
                  activePlan.id === plan.id 
                    ? "bg-white border-[#528081] shadow-2xl shadow-[#528081]/15 scale-[1.02] z-10" 
                    : "bg-white/40 border-[#528081]/10 opacity-70 hover:opacity-100 hover:bg-white/60 hover:border-[#528081]/30"
                )}
              >
                {activePlan.id === plan.id && (
                  <motion.div 
                    layoutId="active-pricing-bg"
                    className="absolute inset-0 bg-[#528081]/5 pointer-events-none"
                  />
                )}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500",
                      activePlan.id === plan.id 
                        ? "bg-[#528081] border-[#528081] shadow-xl shadow-[#528081]/30 rotate-3" 
                        : "bg-white/80 border-[#528081]/10 shadow-sm"
                    )}>
                      <img 
                        src={plan.iconUrl} 
                        className={cn(
                           "w-7 h-7 transition-all duration-500",
                           activePlan.id === plan.id ? "invert brightness-200" : "brightness-0 opacity-40 grayscale"
                        )} 
                        alt={plan.name} 
                      />
                    </div>
                    <div>
                      <p className={cn(
                         "text-[8px] font-bold tracking-[0.2em] mb-1 uppercase opacity-40",
                         activePlan.id === plan.id ? "text-[#528081]" : "text-neutral-500"
                      )}>{plan.serial}</p>
                      <h3 className={cn(
                        "text-xl font-bold tracking-tighter uppercase transition-colors duration-500",
                        activePlan.id === plan.id ? "text-[#1A1A1A]" : "text-neutral-500 group-hover:text-[#528081]"
                      )}>
                        {plan.name}
                      </h3>
                    </div>
                  </div>
                  {plan.highlighted && (
                     <div className="w-2 h-2 rounded-full bg-[#768C45] animate-ping" />
                  )}
                </div>
              </button>
            ))}
            
            {/* Terminal Preview (Visual Decoration) - Light Theme */}
            <div className="hidden lg:block p-10 rounded-[2.5rem] border border-[#528081]/10 bg-white/30 backdrop-blur-3xl shadow-sm text-[10px] space-y-4 opacity-30 font-mono">
              <p className="text-[#528081] font-bold">&gt; PACKET_ALLOC_SYS_ACTIVE</p>
              <div className="h-[1px] w-full bg-[#528081]/20" />
              <p className="text-neutral-500">&gt; NODE_STATUS: SYNCED</p>
              <p className="text-neutral-500">&gt; LATENCY: 0.12ms</p>
            </div>
          </div>

          {/* Right: Stage Display Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlan.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              className="bg-white/60 backdrop-blur-3xl border border-[#528081]/20 rounded-[2.5rem] md:rounded-[4rem] p-7 md:p-12 lg:p-20 relative overflow-hidden shadow-[0_60px_100px_-20px_rgba(82,128,129,0.1)]"
              >
                {/* Visual Accent */}
                <div 
                  className="absolute top-0 right-0 w-[400px] h-[400px] blur-[150px] opacity-[0.2] pointer-events-none transition-all duration-1000"
                  style={{ background: activePlan.accent }}
                />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-16">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-6">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#528081]" />
                         <span className="text-[9px] font-bold tracking-[0.4em] text-[#528081]/60 uppercase">LICENSE_CONFIG__{activePlan.name}</span>
                      </div>
                      <h3 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-8 tracking-tighter uppercase leading-[0.85]">
                        {activePlan.name}
                      </h3>
                      <p className="text-lg text-neutral-600 font-sans font-medium italic leading-relaxed max-w-md border-l-[3px] border-[#528081]/10 pl-8">
                        "{activePlan.description}"
                      </p>
                    </div>
                    <div className="text-right">
                       <div className="inline-flex flex-col items-end">
                           <div className="flex items-baseline gap-4 mb-2">
                              <span className={cn(
                                "font-bold text-[#1A1A1A] tracking-tighter transition-all duration-700",
                                currentPrice(activePlan) === 'CUSTOM_QUOTE' 
                                  ? "text-4xl md:text-5xl border-b-[4px] border-[#528081]" 
                                  : "text-5xl md:text-8xl leading-[0.8]"
                              )}>
                                {currentPrice(activePlan)}
                              </span>
                              {activePlan.monthlyPrice && (
                                <span className="text-[#528081] text-[10px] font-bold tracking-[0.3em] uppercase opacity-60">
                                  /_{isAnnual ? 'UNIT_YEAR' : 'UNIT_MONTH'}
                                </span>
                              )}
                           </div>
                           {activePlan.monthlyPrice && isAnnual && (
                             <div className="px-4 py-2 rounded-lg bg-[#528081]/5 border border-[#528081]/10 mt-6">
                                <p className="text-[10px] font-bold text-[#528081] tracking-widest uppercase">
                                   EST. ${Math.round(activePlan.annualPrice! / 12)} / PERIODIC_CREDIT
                                </p>
                             </div>
                           )}
                       </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-20">
                    {activePlan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-5 group">
                        <div className="w-8 h-8 rounded-xl bg-white border border-[#528081]/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#528081] group-hover:border-[#528081] group-hover:shadow-lg group-hover:shadow-[#528081]/30">
                          <Check className="w-4 h-4 text-[#528081] group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-[#1A1A1A]/80 font-sans text-base font-semibold transition-colors group-hover:text-[#1A1A1A] tracking-tight">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-12 border-t border-[#528081]/10 flex flex-col md:flex-row items-center justify-between gap-12">
                  <div className="flex items-center gap-6">
                    <div className="flex -space-x-3">
                       {[1,2,3].map(i => (
                          <div key={i} className="w-10 h-10 rounded-full border-[3px] border-white bg-[#A8BDBF] overflow-hidden">
                             <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" className="w-full h-full object-cover grayscale" />
                          </div>
                       ))}
                    </div>
                    <p className="text-[9px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                       <span className="text-[#528081]">2.4K+_ORGS</span> ACTIVATED__NODES
                    </p>
                  </div>
                  <button className="group/btn relative bg-[#528081] w-full md:w-auto px-16 py-7 rounded-2xl text-white font-bold tracking-[0.3em] text-[11px] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-[#528081]/30 flex items-center justify-center gap-4 overflow-hidden">
                     <span className="relative z-10">{activePlan.cta.toUpperCase().replace(' ', '_')}</span>
                     <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                     <div className="absolute inset-0 bg-[#768C45] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Industry Audit Log (Comparison) - Refined Light Table */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative mt-40"
        >
          <div className="flex items-center gap-10 mb-14">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1A1A1A] uppercase">AUDIT_LOG_COMPARISON</h3>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-[#528081]/40 via-[#528081]/5 to-transparent" />
            <Terminal className="w-8 h-8 text-[#528081] opacity-40" />
          </div>

          <div className="bg-white/40 backdrop-blur-3xl border border-[#528081]/20 rounded-[4rem] overflow-hidden shadow-2xl shadow-[#528081]/5">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left font-sans">
                <thead>
                  <tr className="border-b border-[#528081]/10 bg-[#E3EFF0]/50">
                    <th className="px-12 py-10 text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-400">FEATURE_SPEC</th>
                    <th className="px-12 py-10 text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-400 text-center border-l border-[#528081]/10">STARTER_01</th>
                    <th className="px-12 py-10 text-[10px] font-bold tracking-[0.4em] uppercase text-[#528081] text-center border-l border-[#528081]/10 bg-[#528081]/5">PROFESSIONAL_02</th>
                    <th className="px-12 py-10 text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-400 text-center border-l border-[#528081]/10">ENTERPRISE_03</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#528081]/10 font-sans">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#E3EFF0]/40 transition-all duration-300 group">
                      <td className="px-12 py-8 text-[#1A1A1A] font-bold text-base tracking-tight group-hover:translate-x-1 transition-transform">{row.feature.toUpperCase()}</td>
                      <td className="px-12 py-8 text-center text-neutral-500 font-medium border-l border-[#528081]/10">{row.starter}</td>
                      <td className="px-12 py-8 text-center text-[#528081] font-bold border-l border-[#528081]/10 bg-[#528081]/5">{row.pro}</td>
                      <td className="px-12 py-8 text-center text-neutral-600 font-bold border-l border-[#528081]/10">{row.ent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-6 text-[10px] font-bold tracking-[0.3em] text-[#528081]/60 uppercase">
             <Shield className="w-5 h-5 text-[#768C45] opacity-60" />
             <span>END_TO_END_ENCRYPTION_ACTIVE_BY_DEFAULT__v4.0</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}