'use client'

import { FeatureSteps } from "@/components/ui/feature-steps"

const features = [
  { 
    step: 'Step 1', 
    title: 'Connect Factory Systems',
    content: 'Users connect factory systems, production equipment data, and operational databases through our universal IoT integration layer — supporting OPC-UA, MQTT, and all major PLC protocols.', 
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    step: 'Step 2',
    title: 'Real-Time Data Collection',
    content: 'Stream live production metrics, machine usage data, and operational workflow events to the OptimeCore platform for instant processing and structured analysis.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 3',
    title: 'AI-Powered Production Analysis',
    content: 'OptimeCore\'s GPU-accelerated AI engine analyzes production workflows and machine performance through production flow maps, equipment efficiency graphs, and optimization node mapping — powered by NVIDIA SDK.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 4',
    title: 'Maintenance Schedule Optimization',
    content: 'Intelligently optimize maintenance schedules based on real equipment health data. Eliminate reactive maintenance cycles and reduce unplanned downtime with AI-generated preventive action plans.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 5',
    title: 'Continuous Performance Intelligence',
    content: 'Track production efficiency gains over time with factory performance dashboards. Continuously refine machine utilization strategies, production planning, and operational workflows at scale.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop'
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-['Cinzel'] tracking-tighter">
            HOW IT WORKS
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-medium">
            Connect your factory systems in minutes. OptimeCore's intelligent optimization engine transforms raw operational data into actionable production intelligence.
          </p>
        </div>
        
        <FeatureSteps 
          features={features}
          title=""
          autoPlayInterval={5000}
          imageHeight="h-[450px]"
          className="p-0 md:p-0"
        />
      </div>
    </section>
  )
}
