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
    <section id="how-it-works" className="py-24 lg:py-40 bg-[#E3EFF0] overflow-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap');

        .synthesis-title {
          font-family: 'Syncopate', sans-serif;
          font-weight: 700;
          color: #1A1A1A;
          line-height: 0.9;
          letter-spacing: -0.05em;
        }

        .shimmer-synthesis {
          background: linear-gradient(90deg, #3F7373, #768C45, #3F7373, #768C45, #3F7373);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5s linear infinite;
        }

        @keyframes shimmer {
          to { background-position: 200% center; }
        }

        .char-reveal {
          display: inline-block;
          opacity: 0;
        }

        .industrial-glass-light {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(63, 115, 115, 0.1);
          box-shadow: 0 20px 40px rgba(63, 115, 115, 0.05);
        }
      `}</style>

      {/* Dynamic Background Elements - Premium Industrial Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 -left-1/4 w-[1000px] h-[1000px] bg-[#3F7373]/10 blur-[180px] rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], y: [0, -100, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 -right-1/4 w-[900px] h-[900px] bg-[#768C45]/10 blur-[180px] rounded-full" 
        />
        
        {/* Blueprint Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.08]" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(63, 115, 115, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(63, 115, 115, 0.2) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3F7373]/5 border border-[#3F7373]/10 text-[10px] font-bold tracking-[0.4em] uppercase text-[#3F7373] mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#768C45] animate-pulse" />
            Operational Framework_SYS
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl synthesis-title mb-8 tracking-tighter uppercase leading-[0.85]">
            <div className="overflow-hidden">
              {"INDUSTRIAL".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  className="char-reveal"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="overflow-hidden mt-2">
              <motion.span 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="shimmer-synthesis block"
              >
                Synthesis
              </motion.span>
            </div>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1 }}
            className="text-[#1A1A1A] text-lg md:text-xl max-w-3xl mx-auto font-sans font-medium leading-relaxed italic"
          >
            Connect your factory systems in minutes. Our intelligent optimization engine transforms raw operational data into actionable production intelligence.
          </motion.p>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-20 bg-[#3F7373]/5 blur-[120px] rounded-full opacity-40 pointer-events-none" />
          
          <FeatureSteps 
            features={features}
            title=""
            autoPlayInterval={6000}
            imageHeight="h-[600px]"
            className="p-0 md:p-0"
          />
        </div>

        <div className="mt-40 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="inline-flex flex-col md:flex-row items-center gap-10 p-12 industrial-glass-light relative overflow-hidden group rounded-[2.5rem]"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-[#3F7373]/5 via-transparent to-[#768C45]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             <div className="flex -space-x-4 relative z-10">
                {['/testimonial 1.svg', '/testimonial 2.svg', '/testimonial 3.svg', '/testimonial.svg'].map((src, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -8, scale: 1.15, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 rounded-full border-2 border-white bg-white/80 overflow-hidden shadow-xl"
                  >
                    <img src={src} alt="Manufacturing Leader" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
             </div>
             <div className="text-left relative z-10">
               <p className="text-[#1A1A1A] font-sans font-bold text-lg leading-tight">
                 <span className="text-[#3F7373]">Join 250+</span> manufacturing leaders <br />
                 <span className="opacity-50 text-base font-medium">optimizing with OptimeCore_SYS</span>
               </p>
             </div>
             <Link href="/product" className="relative z-10 px-12 py-5 rounded-full bg-[#3F7373] text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#3F7373]/90 transition-all duration-500 shadow-xl active:scale-95 inline-block">
               EXPAND OPERATIONS
             </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
