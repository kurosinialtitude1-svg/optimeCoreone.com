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
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out font-['Cinzel'] rounded-2xl",
        isCenter 
          ? "z-10 bg-[#3F7373] text-[#F2F1FO] border-[#3F7373] shadow-[0_30px_60px_-15px_rgba(63,115,115,0.4)]" 
          : "z-0 bg-white/60 backdrop-blur-md text-[#3F7373] border-neutral-200 hover:border-[#3F7373]/40"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 30px) 0%, 100% 30px, 100% 100%, calc(100% - 0px) 100%, 0px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
          scale(${isCenter ? 1 : 0.9})
        `,
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-[#A8BDBF]/30"
        style={{
          right: -2,
          top: 28,
          width: 42,
          height: 2
        }}
      />
      
      <div className="relative mb-6">
        <Quote className={cn(
          "absolute -top-4 -left-4 w-12 h-12 opacity-10",
          isCenter ? "text-white" : "text-[#3F7373]"
        )} />
        <img
          src={testimonial.imgSrc}
          alt={`${testimonial.by.split(',')[0]}`}
          className="relative z-10 h-16 w-16 grayscale hover:grayscale-0 transition-all duration-300 border-2 border-[#768C45]/30 object-cover rounded-xl"
          style={{
            boxShadow: "4px 4px 0px rgba(118, 140, 69, 0.4)"
          }}
        />
      </div>

      <h3 className={cn(
        "text-lg sm:text-l font-bold leading-tight mb-4",
        isCenter ? "text-white" : "text-[#1A1A1A]"
      )}>
        "{testimonial.testimonial}"
      </h3>
      
      <div className={cn(
        "absolute bottom-8 left-8 right-8",
        isCenter ? "text-white/80" : "text-[#3F7373]/70"
      )}>
         <div className="w-12 h-0.5 bg-[#768C45] mb-2" />
         <p className="text-xs tracking-widest font-black uppercase italic">
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03]">
        <h1 className="text-[20vw] font-black text-[#3F7373] whitespace-nowrap tracking-tighter uppercase font-['Cinzel']">
          TESTIMONIALS
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
      
      <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-6">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center transition-all duration-300",
            "bg-white/80 backdrop-blur-md border border-[#3F7373]/20 text-[#3F7373] hover:bg-[#3F7373] hover:text-white hover:border-[#3F7373]",
            "rounded-full shadow-2xl shadow-[#3F7373]/20"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center transition-all duration-300",
            "bg-white/80 backdrop-blur-md border border-[#3F7373]/20 text-[#3F7373] hover:bg-[#3F7373] hover:text-white hover:border-[#3F7373]",
            "rounded-full shadow-2xl shadow-[#3F7373]/20"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
