"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

// Props interface for the component
interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  images: string[];
  className?: string;
  videoSrc?: string; // Added video background support
  backgroundOverlay?: string; // Added background overlay support
}

// Reusable Button component styled like in the image
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(239, 68, 68, 0.4)" }}
    whileTap={{ scale: 0.95 }}
    className="mt-8 px-8 py-4 rounded-full bg-red-500 text-white font-bold shadow-xl transition-all hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 flex items-center gap-2 group"
  >
    {children}
    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </motion.button>
);

// The main hero component
export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  images,
  className,
  videoSrc,
  backgroundOverlay = "rgba(0,0,0,0.4)",
}) => {
  // Animation variants for the text content
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
  };

  // Duplicate images for a seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <section
      className={cn(
        "relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center text-center px-6",
        className
      )}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center opacity-40 grayscale-[0.5]"
            style={{ backgroundImage: `url(${images[0]})` }}
          />
        )}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" 
          style={{ backgroundColor: backgroundOverlay }}
        />
      </div>

      {/* Content Layer */}
      <div className="z-10 flex flex-col items-center max-w-4xl">
        {/* Tagline */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md shadow-lg"
        >
          {tagline}
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="text-6xl md:text-8xl font-black tracking-tight text-white drop-shadow-2xl leading-[1.1]"
        >
          {typeof title === 'string' ? (
            title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={FADE_IN_ANIMATION_VARIANTS}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))
          ) : (
            title
          )}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className="mt-8 max-w-2xl text-xl text-white/80 font-medium leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.6 }}
        >
          <ActionButton>{ctaText}</ActionButton>
        </motion.div>
      </div>

      {/* Animated Image Marquee */}
      <div className="absolute bottom-12 left-0 w-full z-20 overflow-hidden py-10">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[4/5] h-56 md:h-72 flex-shrink-0 group pointer-events-auto cursor-pointer"
              style={{
                rotate: `${(index % 2 === 0 ? -1 : 3)}deg`,
              }}
            >
              <div className="absolute inset-0 bg-red-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-1 blur-md" />
              <img
                src={src}
                alt={`Showcase image ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-white/10 group-hover:border-red-500/50 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};
