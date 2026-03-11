'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, Shield, Zap, Box, Terminal, Cpu, Database, Info } from 'lucide-react'
import { cn } from "@/lib/utils"

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    icon: Box,
    monthlyPrice: 149,
    annualPrice: 1490,
    description: 'Perfect for small operations',
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
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: Cpu,
    monthlyPrice: 399,
    annualPrice: 3990,
    description: 'For growing manufacturers',
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
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: Database,
    monthlyPrice: null,
    annualPrice: null,
    description: 'Custom solutions for large enterprises',
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
  },
]

const comparisonData = [
  { feature: 'Production Lines', starter: '5', pro: 'Unlimited', ent: 'Unlimited' },
  { feature: 'AI Predictions', starter: '—', pro: '✓', ent: '✓' },
  { feature: 'API Access', starter: '—', pro: '✓', ent: '✓' },
  { feature: 'On-Premise Option', starter: '—', pro: '—', ent: '✓' },
  { feature: 'Dedicated Support', starter: '—', pro: 'Email', ent: '24/7 Phone' },
]

export function PricingSection() {
  const [activePlan, setActivePlan] = useState(plans[1])
  const [isAnnual, setIsAnnual] = useState(true)

  const currentPrice = (plan: typeof plans[0]) => {
    if (!plan.monthlyPrice) return 'Custom'
    return isAnnual ? `$${plan.annualPrice}` : `$${plan.monthlyPrice}`
  }

  return (
    <section id="pricing" className="relative py-24 lg:py-36 bg-black overflow-hidden font-['Cinzel']">
      {/* Background Elements & Custom Image */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 scale-105"
          style={{ backgroundImage: 'url("/images/industrial-pricing-bg.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        <div className="absolute inset-0 opacity-10 tech-grid-bg tech-grid-anim" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.4em] uppercase text-[#3F7373] mb-6"
          >
            <Shield className="w-3 h-3" />
            <span>Resource Allocation Protocol</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter mb-6 uppercase"
          >
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F7373] to-[#768C45]">Pricing</span>
          </motion.h2>

          {/* Billing Switcher */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button 
              onClick={() => setIsAnnual(false)}
              className={cn(
                "text-xs font-bold tracking-widest transition-all",
                !isAnnual ? "text-white" : "text-neutral-600"
              )}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative h-6 w-12 rounded-full bg-neutral-900 border border-white/10 p-1 transition-all group"
            >
              <motion.div 
                animate={{ x: isAnnual ? 24 : 0 }}
                className="h-full aspect-square rounded-full bg-[#3F7373] shadow-[0_0_10px_rgba(63,115,115,0.5)]"
              />
            </button>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsAnnual(true)}
                className={cn(
                  "text-xs font-bold tracking-widest transition-all",
                  isAnnual ? "text-white" : "text-neutral-600"
                )}
              >
                ANNUAL
              </button>
              <span className="px-2 py-0.5 rounded-sm bg-[#768C45]/20 text-[#768C45] text-[10px] font-black border border-[#768C45]/30">
                -17%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Console Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-32">
          
          {/* Left: Selector Module */}
          <div className="lg:col-span-4 space-y-4">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setActivePlan(plan)}
                className={cn(
                  "w-full text-left p-6 rounded-2xl border transition-all duration-500 group relative overflow-hidden",
                  activePlan.id === plan.id 
                    ? "bg-white/5 border-white/20 shadow-2xl" 
                    : "border-transparent opacity-40 hover:opacity-100 hover:border-white/10"
                )}
              >
                {activePlan.id === plan.id && (
                  <motion.div 
                    layoutId="active-pricing-bg"
                    className="absolute inset-0 bg-gradient-to-r from-[#3F7373]/20 to-transparent pointer-events-none"
                  />
                )}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center border transition-all",
                      activePlan.id === plan.id 
                        ? "bg-white text-black border-transparent" 
                        : "bg-neutral-950 text-neutral-600 border-white/5"
                    )}>
                      <plan.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-neutral-600 tracking-tighter mb-0.5">{plan.serial}</p>
                      <h3 className={cn(
                        "text-lg font-bold tracking-tight uppercase",
                        activePlan.id === plan.id ? "text-white" : "text-neutral-400"
                      )}>
                        {plan.name}
                      </h3>
                    </div>
                  </div>
                  {plan.highlighted && (
                     <div className="px-2 py-1 rounded-sm bg-white/10 border border-white/10 text-[8px] font-black text-white/50 tracking-widest uppercase">
                        STABLE
                     </div>
                  )}
                </div>
              </button>
            ))}
            
            {/* Terminal Preview (Visual Decoration) */}
            <div className="hidden lg:block p-6 rounded-2xl border border-white/5 bg-black/40 font-mono text-[10px] space-y-2 opacity-30">
              <p className="text-[#3F7373] tracking-tighter">&gt; SYSOP CHECK: ALL SYSTEMS NOMINAL</p>
              <p className="text-neutral-600 tracking-tighter">&gt; ALLOCATING SHARES... [OK]</p>
              <p className="text-neutral-600 tracking-tighter">&gt; NODE CONNECTED: 0xF4...A2</p>
            </div>
          </div>

          {/* Right: Stage Display Area */}
          <div className="lg:col-span-8 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlan.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden backdrop-blur-sm shadow-3xl flex flex-col"
              >
                {/* Visual Glow */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#3F7373]/10 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="relative z-10 flex-1">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div>
                      <h4 className="text-sm font-bold text-[#A8BDBF] tracking-[0.2em] uppercase mb-4">Module Details</h4>
                      <h3 className="text-4xl md:text-6xl font-black text-white leading-[0.8] tracking-tighter uppercase mb-2">
                        {activePlan.name}
                      </h3>
                      <p className="text-neutral-500 font-sans font-medium text-lg italic">"{activePlan.description}"</p>
                    </div>
                    <div className="text-right">
                       <div className="flex items-baseline justify-end gap-2">
                          <span className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                            {currentPrice(activePlan)}
                          </span>
                          {activePlan.monthlyPrice && (
                            <span className="text-neutral-500 text-sm font-bold tracking-widest uppercase">
                              / {isAnnual ? 'YR' : 'MO'}
                            </span>
                          )}
                       </div>
                       {activePlan.monthlyPrice && isAnnual && (
                         <p className="text-[10px] font-mono text-neutral-600 tracking-tighter mt-2">
                            EST. ${Math.round(activePlan.annualPrice! / 12)} / MONTH BILLED ANNUALLY
                         </p>
                       )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                    {activePlan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-colors group-hover:border-[#3F7373]">
                          <Check className="w-3 h-3 text-[#3F7373]" />
                        </div>
                        <span className="text-neutral-400 font-sans text-sm font-medium transition-colors group-hover:text-white">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#768C45] animate-pulse" />
                    <p className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">14-Day Free Evaluation Access Available</p>
                  </div>
                  <button className="mixed-gradient-glow w-full md:w-auto px-10 py-5 rounded-full text-white font-black tracking-widest text-xs hover:scale-105 transition-transform flex items-center justify-center gap-3">
                    {activePlan.cta.toUpperCase()} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Industry Audit Log (Comparison) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl font-bold tracking-tight text-white uppercase">Industry Audit Log</h3>
            <div className="h-px flex-1 bg-white/5" />
            <Terminal className="w-5 h-5 text-neutral-700" />
          </div>

          <div className="bg-white/[0.01] border border-white/5 rounded-3xl overflow-hidden backdrop-blur-md">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left font-sans">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <th className="px-8 py-6 text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-500">Feature set</th>
                    <th className="px-8 py-6 text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-500 text-center">Starter</th>
                    <th className="px-8 py-6 text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-500 text-center">Professional</th>
                    <th className="px-8 py-6 text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-500 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono text-[11px]">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-8 py-5 text-neutral-400 font-bold group-hover:text-white transition-colors">{row.feature.toUpperCase()}</td>
                      <td className="px-8 py-5 text-center text-neutral-600">{row.starter}</td>
                      <td className="px-8 py-5 text-center text-white">{row.pro}</td>
                      <td className="px-8 py-5 text-center text-[#A8BDBF]">{row.ent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4 text-[10px] font-bold tracking-widest text-neutral-700 uppercase">
             <Info className="w-3 h-3" />
             <span>All data packets are encrypted via high-level security protocols</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}