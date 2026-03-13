'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { FeatureSteps } from "@/components/ui/feature-steps"

const features = [
  { 
    step: 'Step 1', 
    title: 'Connect Factory Systems',
    content: 'Users connect factory systems, production equipment data, and operational databases through our universal IoT integration layer — supporting OPC-UA, MQTT, and all major PLC protocols.', 
    image: '/Connect Factory Systems.svg' 
  },
  { 
    step: 'Step 2',
    title: 'Real-Time Data Collection',
    content: 'Stream live production metrics, machine usage data, and operational workflow events to the OptimeCore platform for instant processing and structured analysis.',
    image: '/real time data collection.svg'
  },
  { 
    step: 'Step 3',
    title: 'AI-Powered Production Analysis',
    content: 'OptiCoreX leverages its GPU-accelerated AI engine to analyze production workflows and machine performance through flow maps, equipment efficiency graphs, and optimization node mapping, delivering actionable insights to optimize your factory operations.',
    image: '/AI-Powered Production Analysis.svg'
  },
  { 
    step: 'Step 4',
    title: 'Maintenance Schedule Optimization',
    content: 'Intelligently optimize maintenance schedules based on real equipment health data. Eliminate reactive maintenance cycles and reduce unplanned downtime with AI-generated preventive action plans.',
    image: '/Maintenance Schedule Optimization.svg'
  },
  { 
    step: 'Step 5',
    title: 'Continuous Performance Intelligence',
    content: 'Track production efficiency gains over time with factory performance dashboards. Continuously refine machine utilization strategies, production planning, and operational workflows at scale.',
    image: '/Continuous Performance Intelligence.svg'
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 lg:py-40 bg-[#F2F1F0] overflow-hidden relative">
      {/* Dynamic Background Elements - Premium Industrial Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#C5D7D9]/30 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-[#3F7373]/10 blur-[180px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#768C45]/05 blur-[200px] rounded-full" />
        
        {/* Blueprint Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.07]" 
          style={{ 
            backgroundImage: `linear-gradient(#3F7373 1px, transparent 1px), linear-gradient(90deg, #3F7373 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#3F7373 1px, transparent 1px), linear-gradient(90deg, #3F7373 1px, transparent 1px)`,
            backgroundSize: '200px 200px',
            border: '1px solid rgba(63, 115, 115, 0.1)'
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#3F7373]/10 text-[10px] font-black tracking-[0.3em] uppercase text-[#3F7373] mb-6 shadow-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#768C45] animate-pulse" />
            Operational Framework
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-black text-[#1A1A1A] mb-8 font-['Cinzel'] tracking-tighter uppercase leading-[0.9]">
            Industrial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F7373] via-[#768C45] to-[#3F7373]">Synthesis</span>
          </h2>
          
          <p className="text-neutral-500 text-lg md:text-xl max-w-3xl mx-auto font-sans font-medium italic leading-relaxed">
            Connect your factory systems in minutes. Our intelligent optimization engine transforms raw operational data into actionable production intelligence.
          </p>
        </div>
        
        <div className="relative">
          {/* Subtle decorative glow behind the steps */}
          <div className="absolute -inset-10 bg-[#3F7373]/5 blur-[100px] rounded-[5rem] opacity-50 pointer-events-none" />
          
          <FeatureSteps 
            features={features}
            title=""
            autoPlayInterval={6000}
            imageHeight="h-[550px]"
            className="p-0 md:p-0"
          />
        </div>

        {/* Bottom Callout - Glass Panel Enhancement */}
        <div className="mt-32 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex flex-col md:flex-row items-center gap-8 p-10 glass-panel relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-[#3F7373]/5 via-transparent to-[#768C45]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <div className="flex -space-x-4 relative z-10">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5, scale: 1.1, zIndex: 10 }}
                    className="w-14 h-14 rounded-full border-2 border-white bg-neutral-100 overflow-hidden shadow-xl"
                  >
                    <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="User" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
             </div>
             <p className="text-[#1A1A1A] font-sans font-bold text-base relative z-10">
               <span className="text-[#3F7373]">Join 250+</span> manufacturing leaders <br className="hidden md:block" /> optimizing with OptimeCore
             </p>
             <Link href="/product" className="relative z-10 px-10 py-4 rounded-full bg-[#3F7373] text-[#F2F1F0] text-xs font-black tracking-widest uppercase hover:bg-[#3F7373]/90 transition-all shadow-2xl shadow-[#3F7373]/40 active:scale-95 inline-block">
               Expand Operations
             </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
