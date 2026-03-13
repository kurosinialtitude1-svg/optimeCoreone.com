"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        {title && (
          <h2 className="text-3xl md:text-5xl font-black mb-16 text-center font-['Cinzel'] text-[#1A1A1A] uppercase tracking-tighter">
            {title}
          </h2>
        )}

        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1 space-y-10 relative">
            {/* Connecting Line */}
            <div className="absolute left-[19px] md:left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-[#3F7373]/20 via-[#3F7373]/10 to-transparent" />

            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-8 relative z-10 cursor-pointer group"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.4 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  setCurrentFeature(index)
                  setProgress(0)
                }}
              >
                <div className="relative">
                  <motion.div
                    className={cn(
                      "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 transition-all duration-500 shadow-sm relative overflow-hidden",
                      index === currentFeature
                        ? "bg-[#3F7373] border-[#3F7373] text-[#F2F1F0] scale-110 shadow-lg shadow-[#3F7373]/20"
                        : "bg-white border-[#3F7373]/10 text-[#3F7373] group-hover:border-[#3F7373]/30",
                    )}
                    style={{
                      clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                    }}
                  >
                    {index < currentFeature ? (
                      <span className="text-xl font-black">✓</span>
                    ) : (
                      <span className="text-lg font-black">{index + 1}</span>
                    )}
                    {index === currentFeature && (
                      <motion.div 
                        className="absolute inset-0 bg-white/20"
                        animate={{ opacity: [0, 0.4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                  
                  {/* Progress Ring / Bar for active step */}
                  {index === currentFeature && (
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#3F7373]/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-[#768C45]"
                      />
                    </div>
                  )}
                </div>

                <div className="flex-1 pt-1">
                  <h3 className={cn(
                    "text-xl md:text-2xl font-black tracking-tight mb-2 transition-colors duration-300",
                    index === currentFeature ? "text-[#1A1A1A]" : "text-neutral-400"
                  )}>
                    {feature.title || feature.step}
                  </h3>
                  <p className={cn(
                    "text-sm md:text-base font-sans font-medium leading-relaxed transition-colors duration-300",
                    index === currentFeature ? "text-neutral-600" : "text-neutral-400"
                  )}>
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden rounded-[3rem] border border-[#3F7373]/10 shadow-2xl bg-[#F2F1F0] p-4"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#C5D7D9]/20 to-transparent opacity-50" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-inner flex items-center justify-center bg-white"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={features[currentFeature].image}
                  alt={features[currentFeature].step}
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  width={1200}
                  height={800}
                  priority
                />
                
                {/* CRT Scanner / Interface Overlay */}
                <div className="absolute inset-0 pointer-events-none z-20">
                  {/* Scanlines */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, #1A1A1A 2px)' }} />
                  
                  {/* Corner Brackets */}
                  <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#3F7373] rounded-tl-xl" />
                  <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[#3F7373] rounded-tr-xl" />
                  <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[#3F7373] rounded-bl-xl" />
                  <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#3F7373] rounded-br-xl" />
                  
                  {/* Status Indicator */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#3F7373] text-[#F2F1F0] text-[8px] font-black tracking-[0.3em] uppercase rounded-full flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#768C45] animate-ping" />
                    Live Optimization Stream
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel border-white/40 shadow-2xl z-30">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#768C45] animate-pulse shadow-[0_0_8px_rgba(118,140,69,0.4)]" />
                    <span className="text-[10px] font-black tracking-widest text-[#3F7373] uppercase">Machine Intelligence Overlay</span>
                  </div>
                  <p className="text-[#1A1A1A] text-[11px] font-bold font-mono tracking-tight">
                    ANALYZING PRODUCTION NODE: 0x{features[currentFeature].step.toUpperCase().replace(' ', '_')}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
