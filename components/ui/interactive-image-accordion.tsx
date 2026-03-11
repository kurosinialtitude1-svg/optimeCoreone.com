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
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Machine Performance Monitoring',
    description: 'Track machine usage and operational metrics in real-time across every production line. Gain complete visibility into equipment utilization, cycle times, and performance degradation trends.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Maintenance Schedule Intelligence',
    description: 'Move from reactive to predictive maintenance. OptimeCore analyzes equipment health signals to optimize maintenance timing, eliminate unplanned downtime, and extend machine lifespan.',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c46ed71c35c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Factory Performance Analytics',
    description: 'Real-time performance dashboards give factory managers complete operational visibility. Optimize production planning, measure OEE, and drive data-informed decisions across the entire facility.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad868676d183?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Industrial System Integration',
    description: 'Seamlessly integrate OptimeCore with ERP, MES, and existing factory data sources through our scalable API. Connect IoT sensors, PLCs, and industrial databases without disrupting operations.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
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
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/30 flex items-center gap-2 transition-all"
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
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[0.9] tracking-tighter">
              POWERFUL<br />FEATURES
            </h2>
            <p className="mt-8 text-lg text-neutral-400 max-w-xl mx-auto md:mx-0 font-medium leading-relaxed">
              Everything you need to optimize your production and transform your factory into an Industry 4.0 powerhouse.
            </p>
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block mixed-gradient-glow text-white font-bold px-10 py-4 rounded-xl shadow-xl hover:brightness-110 transition-all duration-300"
              >
                Contact Us
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

      {/* Info Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedItem(null)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(63,115,115,0.2)] font-['Cinzel']"
            >
              <div className="relative h-72">
                <img 
                  src={selectedItem.imageUrl} 
                  className="w-full h-full object-cover" 
                  alt={selectedItem.title} 
                />
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-6 right-6 p-2 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full text-white transition-all border border-white/10"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                <h3 className="absolute bottom-8 left-10 text-4xl font-black text-white uppercase tracking-tighter">
                  {selectedItem.title}
                </h3>
              </div>
              <div className="p-10 pt-4">
                <p className="text-neutral-300 text-lg leading-relaxed font-medium">
                  {selectedItem.description}
                </p>
                <div className="mt-10 flex justify-end">
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="px-8 py-3 mixed-gradient-glow text-white font-bold rounded-2xl hover:brightness-110 transition-all shadow-xl"
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
