"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info } from "lucide-react";

// --- Data for the industry-focused image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'AI Production Optimization',
    description: 'OptimeCore\'s intelligent engine continuously analyzes production workflows to identify bottlenecks and inefficiencies, automatically recommending optimizations that increase throughput and reduce energy waste.',
    imageUrl: '/AI Production Optimization.svg',
  },
  {
    id: 2,
    title: 'Machine Performance Monitoring',
    description: 'Track machine usage and operational metrics in real-time across every production line. Gain complete visibility into equipment utilization, cycle times, and performance degradation trends.',
    imageUrl: '/Machine Performance Monitoring.svg',
  },
  {
    id: 3,
    title: 'Maintenance Schedule Intelligence',
    description: 'Move from reactive to predictive maintenance. OptiCoreX analyzes equipment health signals and machine performance data to optimize maintenance timing, prevent unexpected downtime, and extend the lifespan of critical factory machines.',
    imageUrl: '/Maintenance Schedule Intelligence.svg',
  },
  {
    id: 4,
    title: 'Factory Performance Analytics',
    description: 'Real-time performance dashboards give factory managers complete operational visibility. Optimize production planning, measure OEE, and drive data-informed decisions across the entire facility.',
    imageUrl: '/Factory Performance Analytics.svg',
  },
  {
    id: 5,
    title: 'Industrial System Integration',
    description: 'Seamlessly integrate OptimeCore with ERP, MES, and existing factory data sources through our scalable API. Connect IoT sensors, PLCs, and industrial databases without disrupting operations.',
    imageUrl: '/Industrial System Integration.svg',
  },
];

interface AccordionItemProps {
  item: typeof accordionItems[0];
  isActive: boolean;
  onMouseEnter: () => void;
  onShowInfo: (item: typeof accordionItems[0]) => void;
}

const AccordionItem = ({ item, isActive, onMouseEnter, onShowInfo }: AccordionItemProps) => {
  return (
    <div
      className={cn(
        "relative h-[450px] rounded-2xl border-[3px] border-double border-[#528081]/30 overflow-hidden cursor-pointer transition-all duration-700 ease-in-out group/item",
        isActive ? "w-[400px] border-[#528081]/50 shadow-[0_20px_50px_rgba(82,128,129,0.15)]" : "w-[60px]"
      )}
      onMouseEnter={onMouseEnter}
      onClick={() => isActive && onShowInfo(item)}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/item:scale-105 opacity-80 group-hover/item:opacity-100"
        onError={(e: any) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'; }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover/item:from-black/40 transition-colors duration-500"></div>

      {/* Caption Text */}
      <span
        className={cn(
          "absolute text-white text-[10px] font-bold tracking-[0.3em] uppercase whitespace-nowrap transition-all duration-500 ease-out font-['Syncopate']",
          isActive
            ? "bottom-14 left-1/2 -translate-x-1/2 rotate-0 scale-100 opacity-100"
            : "w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90 scale-90 opacity-40"
        )}
      >
        {item.title}
      </span>

      {/* Info Button for Active Item */}
      <AnimatePresence>
        {isActive && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-panel industrial-pulse text-white px-6 py-2 rounded-full text-sm font-medium border border-white/30 flex items-center gap-2 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                onShowInfo(item);
              }}
            >
            <Info className="w-4 h-4" />
            Learn More
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(2); 
  const [selectedItem, setSelectedItem] = useState<typeof accordionItems[0] | null>(null);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-transparent font-['Syncopate'] px-6 lg:px-12">
      <section className="container mx-auto py-12 md:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-5/12 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#528081]/10 border border-[#528081]/20 text-[8px] font-bold tracking-[0.4em] uppercase text-[#528081] mb-8"
            >
              <div className="w-1 h-1 rounded-full bg-[#768C45] animate-ping" />
              CAPABILITIES_SYS_NODE
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] leading-[0.9] tracking-tighter uppercase mb-10 overflow-hidden">
               {"SMART".split("").map((char, i) => (
                <motion.span
                  key={`smart-${i}`}
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
               {"FACTORY".split("").map((char, i) => (
                <motion.span
                  key={`factory-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (i * 0.03) }}
                  className="inline-block text-[#528081]"
                >
                  {char}
                </motion.span>
               ))}
            </h2>

            <div className="relative pl-6 border-l-2 border-[#528081]/10 mb-12">
               <p className="text-sm md:text-base text-neutral-600 max-w-xl mx-auto md:mx-0 font-medium leading-relaxed font-sans italic">
                Everything you need to optimize production workflows, reduce downtime, and build a smarter factory through our decentralized intelligence mesh.
               </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <a
                href="#contact"
                className="group relative px-10 py-4 bg-[#528081] text-white text-[10px] font-bold tracking-[0.3em] uppercase rounded-full shadow-2xl shadow-[#528081]/20 overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">GET_STARTED</span>
                <div className="absolute inset-0 bg-[#768C45] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
              <div className="flex items-center gap-3">
                 <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <img
                        key={i}
                        src={`/testimonial ${i}.svg`}
                        alt={`User ${i}`}
                        className="w-8 h-8 rounded-full border-2 border-white bg-neutral-100 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    ))}
                 </div>
                 <span className="text-[9px] font-bold text-[#528081] tracking-widest uppercase opacity-70">200+ DEPLOYED</span>
              </div>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-4 py-4 min-h-[500px]">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                  onShowInfo={setSelectedItem}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Modal - Refined Light Theme */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setSelectedItem(null)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative w-full max-w-lg bg-white/90 backdrop-blur-3xl border border-[#528081]/30 overflow-hidden shadow-[0_50px_100px_rgba(82,128,129,0.2)] font-['Syncopate'] rounded-3xl"
            >
              <div className="relative h-64">
                <img 
                  src={selectedItem.imageUrl} 
                  className="w-full h-full object-cover grayscale-[0.5]" 
                  alt={selectedItem.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-6 right-6 p-2 bg-white/50 hover:bg-white backdrop-blur-md rounded-full text-[#528081] transition-all border border-[#528081]/20 shadow-lg z-30"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-6 left-8 right-8 z-20">
                  <div className="text-[8px] font-bold tracking-[0.4em] text-[#528081] uppercase mb-2">Detailed_Analysis_v1.0</div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] uppercase tracking-tighter leading-none">
                    {selectedItem.title}
                  </h3>
                </div>
              </div>
              <div className="p-8 pb-10">
                <div className="p-6 bg-[#528081]/5 rounded-2xl border border-[#528081]/10">
                  <p className="text-neutral-700 text-sm leading-relaxed font-medium font-sans italic">
                    {selectedItem.description}
                  </p>
                </div>
                <div className="mt-8 flex justify-end">
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="px-12 py-4 bg-[#528081] text-white text-[10px] font-bold tracking-[0.3em] uppercase rounded-xl hover:scale-105 transition-all shadow-xl shadow-[#528081]/20"
                  >
                    CONFIRM_DETAILS
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
