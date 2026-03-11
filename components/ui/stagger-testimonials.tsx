"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Smart Factory reduced our unplanned downtime by 40% within three months. The predictive maintenance alone saved us over $2M annually.",
    by: "Michael Chen, Operations Director at Global Auto Manufacturing",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 1,
    testimonial: "The AI scheduling optimization transformed our production planning. We increased OEE by 50% and reduced changeover times significantly.",
    by: "Sarah Johnson, Plant Manager at Precision Electronics Corp",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 2,
    testimonial: "Implementing Smart Factory was seamless. The team provided excellent support, and we saw results immediately. Highly recommended.",
    by: "David Martinez, Manufacturing Engineer at Advanced Pharma Solutions",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 3,
    testimonial: "The real-time monitoring and custom alerts keep us informed 24/7. We caught several potential failures before they impacted production.",
    by: "Emma Wilson, Plant Supervisor at Premium Food Industries",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 4,
    testimonial: "The ROI we've seen with Smart Factory is incredible. It's paid for itself many times over in efficiency gains.",
    by: "Victor, Finance Analyst at ProfitPeak Industrial",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 5,
    testimonial: "I appreciate how OptimeCore continually innovates. They're always one step ahead of the manufacturing curve.",
    by: "Naomi, Innovation Lead at FutureTech Systems",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 6,
    testimonial: "The scalability of this solution is impressive. It grows with our global production requirements seamlessly.",
    by: "Trevor, Scaling Officer at GrowthGurus Manufacturing",
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    tempId: 7,
    testimonial: "I would be lost without Smart Factory's in-depth analytics. The ROI is EASILY 10X for our processing lines.",
    by: "Daniel, Data Scientist at AnalyticsPro Industrial",
    imgSrc: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=150&h=150&auto=format&fit=crop"
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
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out font-['Cinzel']",
        isCenter 
          ? "z-10 bg-[#3F7373] text-[#F2F1FO] border-[#3F7373] shadow-[0_20px_50px_rgba(63,115,115,0.3)]" 
          : "z-0 bg-black/40 backdrop-blur-md text-[#A8BDBF] border-[#A8BDBF]/20 hover:border-[#3F7373]/50"
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
          className="relative z-10 h-16 w-16 grayscale hover:grayscale-0 transition-all duration-300 border-2 border-[#768C45]/30 object-cover"
          style={{
            boxShadow: "4px 4px 0px rgba(118, 140, 69, 0.4)"
          }}
        />
      </div>

      <h3 className={cn(
        "text-lg sm:text-xl font-bold leading-tight mb-4",
        isCenter ? "text-white" : "text-[#C5D7D9]"
      )}>
        "{testimonial.testimonial}"
      </h3>
      
      <div className={cn(
        "absolute bottom-8 left-8 right-8",
        isCenter ? "text-white/80" : "text-[#A8BDBF]/60"
      )}>
         <div className="w-12 h-0.5 bg-[#768C45] mb-2" />
         <p className="text-xs tracking-widest font-bold uppercase italic">
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
        <h1 className="text-[20vw] font-black text-white whitespace-nowrap tracking-tighter uppercase font-['Cinzel']">
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
      
      <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-4">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center transition-all duration-300",
            "bg-black/50 backdrop-blur-md border border-[#A8BDBF]/30 text-[#A8BDBF] hover:bg-[#3F7373] hover:text-white hover:border-[#3F7373]",
            "rounded-full shadow-lg"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center transition-all duration-300",
            "bg-black/50 backdrop-blur-md border border-[#A8BDBF]/30 text-[#A8BDBF] hover:bg-[#3F7373] hover:text-white hover:border-[#3F7373]",
            "rounded-full shadow-lg"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
