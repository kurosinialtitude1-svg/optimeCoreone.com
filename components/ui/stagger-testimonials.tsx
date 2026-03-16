"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Our smart factory is running smoother than ever! OptiCoreX reduced unplanned downtime by 40% in just three months, and predictive maintenance alone saves us over $2M every year.",
    by: "Oliver Winslow, Operations Director at Global Auto Manufacturing",
    imgSrc: "/testimonial 1.svg"
  },
  {
    tempId: 1,
    testimonial: "Thanks to OptiCoreX’s AI scheduling optimization, our production planning has never been smoother! We boosted OEE by 50% and cut changeover times dramatically.",
    by: "Jullian Veyla, Plant Manager at Precision Electronics Corp",
    imgSrc: "/testimonial 2.svg"
  },
  {
    tempId: 2,
    testimonial: "Implementing OptimeCore was seamless. The team provided excellent support, and we saw results immediately. Highly recommended.",
    by: "David Martinez, Manufacturing Engineer at Advanced Pharma Solutions",
    imgSrc: "/testimonial 3.svg"
  },
  {
    tempId: 3,
    testimonial: "The real-time monitoring and custom alerts from OptiCoreX give us peace of mind. Several potential failures were caught before they could impact production.",
    by: "Aurora Wilson, Plant Supervisor at Premium Food Industries",
    imgSrc: "/testimonial 4.svg"
  },
  {
    tempId: 4,
    testimonial: "The ROI we've seen with OptiCoreX is incredible. It's paid for itself many times over in efficiency gains.",
    by: "Victor, Finance Analyst at ProfitPeak Industrial",
    imgSrc: "/testimonial 5.svg"
  },
  {
    tempId: 5,
    testimonial: "I appreciate how OptimeCore continually innovates. They're always one step ahead of the manufacturing curve.",
    by: "Naomi, Innovation Lead at FutureTech Systems",
    imgSrc: "/testimonial 6.svg"
  },
  {
    tempId: 6,
    testimonial: "The scalability of this solution is impressive. It grows with our global production requirements seamlessly.",
    by: "Trevor, Scaling Officer at GrowthGurus Manufacturing",
    imgSrc: "/testimonial 7.svg"
  },
  {
    tempId: 7,
    testimonial: "I would be lost without OptiCoreX's in-depth analytics. The ROI is EASILY 10X for our processing lines.",
    by: "Daniel, Data Scientist at AnalyticsPro Industrial",
    imgSrc: "/testimonial.svg"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-[2px] border-[#528081]/30 p-10 transition-all duration-700 ease-[0.16,1,0.3,1] font-['Syncopate'] rounded-[2.5rem]",
        isCenter 
          ? "z-20 bg-[#528081] text-white border-white/20 shadow-[0_40px_80px_-15px_rgba(82,128,129,0.3)] scale-105" 
          : "z-10 bg-white/60 backdrop-blur-2xl text-[#528081] border-[#528081]/10 hover:border-[#528081]/30 opacity-60 hover:opacity-100"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.4) * position}px)
          translateY(${isCenter ? -70 : position % 2 ? 0 : 0}px)
          rotate(${isCenter ? 0 : position * 2}deg)
          scale(${isCenter ? 1.05 : 0.85})
        `,
      }}
    >
      <div className="absolute top-8 left-10 flex items-center gap-2">
         <div className={cn("w-1 h-1 rounded-full", isCenter ? "bg-white animate-pulse" : "bg-[#528081]/40")} />
         <span className={cn("text-[7px] font-bold tracking-[0.4em] uppercase opacity-60", isCenter ? "text-white" : "text-[#528081]")}>
           FEEDBACK_STREAM_v2
         </span>
      </div>

      <div className="relative mt-4 mb-8">
        <Quote className={cn(
          "absolute -top-6 -left-6 w-16 h-16 opacity-10",
          isCenter ? "text-white" : "text-[#528081]"
        )} />
        <div className="relative">
            <div className="absolute inset-0 bg-[#768C45]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src={testimonial.imgSrc}
              alt={`${testimonial.by.split(',')[0]}`}
              className="relative z-10 h-16 w-16 grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/20 object-cover rounded-2xl shadow-xl"
            />
        </div>
      </div>

      <h3 className={cn(
        "text-lg sm:text-xl font-bold leading-tight mb-8 tracking-tight",
        isCenter ? "text-white" : "text-[#1A1A1A]"
      )}>
        "{testimonial.testimonial}"
      </h3>
      
      <div className={cn(
        "absolute bottom-10 left-10 right-10",
        isCenter ? "text-white/80" : "text-[#528081]/70"
      )}>
         <div className={cn("w-10 h-0.5 mb-4", isCenter ? "bg-white/40" : "bg-[#528081]/30")} />
         <p className="text-[9px] tracking-[0.2em] font-bold uppercase">
           {testimonial.by}
        </p>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(380);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 380 : 300);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-transparent"
      style={{ height: 650 }}
    >
      {/* Background Decorative Text */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03]">
        <h1 className="text-[18vw] font-bold text-[#528081] whitespace-nowrap tracking-tighter uppercase font-['Syncopate']">
          VALIDATION
        </h1>
      </div>

      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      
      <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 gap-8">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-16 w-16 items-center justify-center transition-all duration-500 transform hover:scale-110 active:scale-95",
            "bg-white/40 backdrop-blur-3xl border border-[#528081]/20 text-[#528081] hover:bg-[#528081] hover:text-white hover:border-[#528081]",
            "rounded-2xl shadow-xl shadow-[#528081]/10"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-16 w-16 items-center justify-center transition-all duration-500 transform hover:scale-110 active:scale-95",
            "bg-white/40 backdrop-blur-3xl border border-[#528081]/20 text-[#528081] hover:bg-[#528081] hover:text-white hover:border-[#528081]",
            "rounded-2xl shadow-xl shadow-[#528081]/10"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};
