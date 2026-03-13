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
    if (!plan.monthlyPrice) return 'Custom'
    return isAnnual ? `$${plan.annualPrice}` : `$${plan.monthlyPrice}`
  }

  return (
    <section id="pricing" className="relative py-24 lg:py-36 bg-[#E5EFF1] overflow-hidden font-['Cinzel']">
      {/* Background Elements & Custom Image - Enhanced Visibility */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] scale-105 grayscale"
          style={{ backgroundImage: 'url("/images/industrial-pricing-bg.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#E5EFF1] via-transparent to-[#E5EFF1]" />
        <div className="absolute inset-0 opacity-[0.03] tech-grid-bg" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#3F7373]/20 text-[11px] font-black tracking-[0.5em] uppercase text-[#3F7373] mb-8 shadow-sm"
          >
            <Shield className="w-4 h-4" />
            <span>Resource Allocation Protocol</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-[#1A1A1A] leading-none tracking-tighter mb-8 uppercase"
          >
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F7373] via-[#768C45] to-[#3F7373]">Pricing</span>
          </motion.h2>

          {/* Billing Switcher - Refined for Light Theme */}
          <div className="flex items-center justify-center gap-8 mt-10">
            <button 
              onClick={() => setIsAnnual(false)}
              className={cn(
                "text-xs font-black tracking-[0.2em] transition-all",
                !isAnnual ? "text-[#3F7373]" : "text-neutral-400"
              )}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative h-7 w-14 rounded-full bg-white border border-[#3F7373]/20 p-1 transition-all group shadow-inner"
            >
              <motion.div 
                animate={{ x: isAnnual ? 28 : 0 }}
                className="h-full aspect-square rounded-full bg-[#3F7373] shadow-lg shadow-[#3F7373]/30"
              />
            </button>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsAnnual(true)}
                className={cn(
                  "text-xs font-black tracking-[0.2em] transition-all",
                  isAnnual ? "text-[#3F7373]" : "text-neutral-400"
                )}
              >
                ANNUAL
              </button>
              <span className="px-3 py-1 rounded-full bg-[#768C45] text-[#F2F1F0] text-[10px] font-black tracking-wider shadow-md shadow-[#768C45]/20">
                -17% OFF
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Console Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-32">
          
          {/* Left: Selector Module - Refined Light Cards */}
          <div className="lg:col-span-4 space-y-5">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setActivePlan(plan)}
                className={cn(
                  "w-full text-left p-8 rounded-[2rem] border transition-all duration-500 group relative overflow-hidden backdrop-blur-md",
                  activePlan.id === plan.id 
                    ? "bg-white border-[#3F7373] shadow-2xl shadow-[#3F7373]/20" 
                    : "bg-white/70 border-neutral-300 opacity-90 hover:opacity-100 hover:bg-white hover:border-[#3F7373]/50"
                )}
              >
                {activePlan.id === plan.id && (
                  <motion.div 
                    layoutId="active-pricing-bg"
                    className="absolute inset-0 bg-gradient-to-r from-[#3F7373]/5 to-transparent pointer-events-none"
                  />
                )}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center border transition-all shadow-sm",
                      activePlan.id === plan.id 
                        ? "bg-[#3F7373] border-[#3F7373]" 
                        : "bg-white border-neutral-100"
                    )}>
                      <img 
                        src={plan.iconUrl} 
                        className={cn(
                           "w-6 h-6 transition-all",
                           activePlan.id === plan.id ? "invert brightness-200" : "brightness-0 opacity-60"
                        )} 
                        alt={plan.name} 
                      />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-[#3F7373] font-black tracking-tighter mb-1 uppercase opacity-80">{plan.serial}</p>
                      <h3 className={cn(
                        "text-xl font-black tracking-tight uppercase transition-all duration-300 group-hover:translate-x-1",
                        activePlan.id === plan.id ? "text-[#1A1A1A]" : "text-neutral-900 group-hover:text-[#3F7373]"
                      )}>
                        {plan.name}
                      </h3>
                    </div>
                  </div>
                  {plan.highlighted && (
                     <div className="px-3 py-1 rounded-full bg-[#3F7373]/10 border border-[#3F7373]/20 text-[9px] font-black text-[#3F7373] tracking-widest uppercase shadow-sm">
                        STABLE
                     </div>
                  )}
                </div>
              </button>
            ))}
            
            {/* Terminal Preview (Visual Decoration) - Light Theme */}
            <div className="hidden lg:block p-8 rounded-[2rem] border border-[#3F7373]/5 bg-white shadow-sm font-mono text-[11px] space-y-3 opacity-40">
              <p className="text-[#3F7373] font-bold">&gt; SYSOP CHECK: ALL SYSTEMS NOMINAL</p>
              <p className="text-neutral-400">&gt; ALLOCATING SHARES... [OK]</p>
              <p className="text-neutral-400">&gt; NODE CONNECTED: 0xF4...A2</p>
            </div>
          </div>

          {/* Right: Stage Display Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white border border-[#3F7373]/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(63,115,115,0.12)]"
              >
                {/* Visual Accent */}
                <div 
                  className="absolute top-0 right-0 w-80 h-80 blur-[100px] opacity-[0.15] pointer-events-none"
                  style={{ background: activePlan.accent }}
                />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
                    <div>
                      <h3 className="text-4xl md:text-6xl font-black text-[#1A1A1A] mb-4 tracking-tighter uppercase leading-none">
                        {activePlan.name}
                      </h3>
                      <p className="text-lg text-neutral-900 font-sans font-medium italic">
                        "{activePlan.description}"
                      </p>
                    </div>
                    <div className="text-right">
                       <div className="flex items-baseline justify-end gap-3 [text-shadow:0_1px_2px_rgba(255,255,255,0.8)]">
                          <span className={cn(
                            "font-black text-[#1A1A1A] tracking-tighter transition-all duration-500",
                            currentPrice(activePlan) === 'Custom' 
                              ? "text-4xl md:text-6xl px-10 py-4 rounded-[2rem] bg-white/50 border border-[#3F7373]/20 shadow-inner backdrop-blur-sm" 
                              : "text-5xl md:text-7xl leading-tight"
                          )}>
                            {currentPrice(activePlan)}
                          </span>
                          {activePlan.monthlyPrice && (
                            <span className="text-[#1A1A1A] text-base font-black tracking-widest uppercase">
                              / {isAnnual ? 'YR' : 'MO'}
                            </span>
                          )}
                       </div>
                       {activePlan.monthlyPrice && isAnnual && (
                         <p className="text-sm font-bold text-[#1A1A1A] tracking-wider mt-3 uppercase [text-shadow:0_1px_1px_rgba(255,255,255,0.5)]">
                            EST. ${Math.round(activePlan.annualPrice! / 12)} / MONTH BILLED ANNUALLY
                         </p>
                       )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-14">
                    {activePlan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-6 h-6 rounded-lg bg-[#3F7373]/5 border border-[#3F7373]/10 flex items-center justify-center transition-all group-hover:bg-[#3F7373] group-hover:border-[#3F7373]">
                          <Check className="w-3.5 h-3.5 text-[#3F7373] group-hover:text-[#F2F1F0]" />
                        </div>
                        <span className="text-neutral-600 font-sans text-base font-semibold transition-colors group-hover:text-[#1A1A1A]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-10 border-t border-[#3F7373]/10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#768C45] animate-pulse shadow-[0_0_10px_rgba(118,140,69,0.5)]" />
                    <p className="text-[11px] font-black tracking-[0.2em] text-[#A8BDBF] uppercase">System Access: Trial Ready</p>
                  </div>
                  <button className="bg-[#3F7373] hover:bg-[#3F7373]/90 w-full md:w-auto px-12 py-5 rounded-full text-[#F2F1F0] font-black tracking-widest text-xs hover:scale-105 transition-all shadow-2xl shadow-[#3F7373]/30 flex items-center justify-center gap-3">
                    {activePlan.cta.toUpperCase()} <ArrowRight className="w-5 h-5" />
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
          className="relative mt-32"
        >
          <div className="flex items-center gap-6 mb-10">
            <h3 className="text-3xl font-black tracking-tight text-[#1A1A1A] uppercase">Industry Audit Log</h3>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-[#3F7373]/20 via-[#3F7373]/5 to-transparent" />
            <Terminal className="w-6 h-6 text-[#A8BDBF]" />
          </div>

          <div className="bg-white border border-[#3F7373]/10 rounded-[3rem] overflow-hidden shadow-2xl shadow-[#3F7373]/5 backdrop-blur-md">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left font-sans">
                <thead>
                  <tr className="border-b border-[#3F7373]/10 bg-[#E5EFF1]/50">
                    <th className="px-10 py-8 text-[11px] font-black tracking-[0.4em] uppercase text-[#A8BDBF]">Feature Set</th>
                    <th className="px-10 py-8 text-[11px] font-black tracking-[0.4em] uppercase text-[#A8BDBF] text-center border-l border-[#3F7373]/5">Starter</th>
                    <th className="px-10 py-8 text-[11px] font-black tracking-[0.4em] uppercase text-[#3F7373] text-center border-l border-[#3F7373]/5 bg-[#3F7373]/5">Professional</th>
                    <th className="px-10 py-8 text-[11px] font-black tracking-[0.4em] uppercase text-[#A8BDBF] text-center border-l border-[#3F7373]/5">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#3F7373]/5 font-sans">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#E5EFF1]/30 transition-all duration-300 group">
                      <td className="px-10 py-6 text-[#1A1A1A] font-black text-sm group-hover:translate-x-1 transition-transform">{row.feature.toUpperCase()}</td>
                      <td className="px-10 py-6 text-center text-neutral-500 font-medium border-l border-[#3F7373]/5">{row.starter}</td>
                      <td className="px-10 py-6 text-center text-[#3F7373] font-black border-l border-[#3F7373]/5 bg-[#3F7373]/5">{row.pro}</td>
                      <td className="px-10 py-6 text-center text-neutral-600 font-bold border-l border-[#3F7373]/5">{row.ent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-10 flex items-center justify-center gap-4 text-[11px] font-black tracking-widest text-[#A8BDBF] uppercase">
             <Shield className="w-4 h-4 text-[#768C45]" />
             <span>All operational data is processed via end-to-end encrypted OptimeCore pipelines</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}