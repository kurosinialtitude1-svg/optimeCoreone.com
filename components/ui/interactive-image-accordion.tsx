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
        "relative h-[450px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out group/item",
        isActive ? "w-[400px]" : "w-[60px]"
      )}
      onMouseEnter={onMouseEnter}
      onClick={() => isActive && onShowInfo(item)}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
        onError={(e: any) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'; }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 group-hover/item:bg-black/20 transition-colors duration-300"></div>

      {/* Caption Text */}
      <span
        className={cn(
          "absolute text-white text-lg font-bold whitespace-nowrap transition-all duration-300 ease-in-out",
          isActive
            ? "bottom-12 left-1/2 -translate-x-1/2 rotate-0 scale-100 opacity-100"
            : "w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90 scale-90 opacity-60"
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
    <div className="bg-transparent font-['Cinzel']">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#1A1A1A] leading-[0.9] tracking-tighter uppercase">
              SMART FACTORY<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F7373] via-[#768C45] to-[#3F7373]">CAPABILITIES</span>
            </h2>
            <p className="mt-8 text-lg text-neutral-600 max-w-xl mx-auto md:mx-0 font-medium leading-relaxed font-sans">
              Everything you need to optimize production workflows, reduce downtime, and build a smarter factory.
            </p>
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block bg-[#3F7373] hover:bg-[#3F7373]/90 text-[#F2F1F0] font-black tracking-[0.2em] uppercase px-12 py-5 rounded-full shadow-2xl shadow-[#3F7373]/20 hover:scale-105 transition-all duration-300"
              >
                Get Started
              </a>
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
              className="relative w-full max-w-lg glass-panel tech-border-glow overflow-hidden shadow-[0_50px_100px_rgba(63,115,115,0.25)] font-['Cinzel']"
            >
              <div className="relative h-72">
                <img 
                  src={selectedItem.imageUrl} 
                  className="w-full h-full object-cover" 
                  alt={selectedItem.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F2F1F0] via-transparent to-transparent z-10" />
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-6 right-6 p-2 bg-white/80 hover:bg-white backdrop-blur-md rounded-full text-[#3F7373] transition-all border border-[#3F7373]/10 shadow-lg z-30"
                >
                  <X className="w-6 h-6" />
                </button>
                <h3 className="absolute bottom-8 left-10 text-3xl font-black text-[#1A1A1A] uppercase tracking-tighter leading-none pr-10 z-20">
                  {selectedItem.title}
                </h3>
              </div>
              <div className="p-10 pt-6">
                <p className="text-neutral-900 text-lg leading-relaxed font-bold font-sans italic">
                  "{selectedItem.description}"
                </p>
                <div className="mt-10 flex justify-end">
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="px-10 py-4 bg-[#3F7373] text-[#F2F1F0] font-black tracking-widest uppercase rounded-2xl hover:scale-105 transition-all shadow-xl shadow-[#3F7373]/20"
                  >
                    Got it
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
