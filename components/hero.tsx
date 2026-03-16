"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section 
      id="home" 
      className={cn("relative w-full h-screen overflow-hidden flex items-center justify-center font-sans", className)}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap');

        :root {
          --bg: #0a0a0a;
          --silver: #e0e0e0;
          --accent: #3F7373;
          --accent-glow: rgba(63, 115, 115, 0.4);
          --grain-opacity: 0.05;
        }

        .halide-body {
          color: var(--silver);
          font-family: 'Syncopate', sans-serif;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .halide-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(10, 10, 10, 0.1) 0%, rgba(10, 10, 10, 0.5) 100%);
          z-index: 1;
        }

        .halide-grain {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 100;
          opacity: var(--grain-opacity);
        }

        /* --- Interface Grid (Responsive) --- */
        .interface-grid {
          position: absolute;
          inset: 0;
          padding: 1rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          z-index: 10;
          pointer-events: none;
        }

        @media (min-width: 480px) {
          .interface-grid { padding: 1.5rem; }
        }

        @media (min-width: 768px) {
          .interface-grid { padding: 3rem; }
        }

        @media (min-width: 1024px) {
          .interface-grid { padding: 4rem; }
        }

        /* --- Hero Title (Fluid Scaling) --- */
        .hero-title {
          grid-column: 1 / -1;
          align-self: center;
          font-size: clamp(2.2rem, 10vw, 9rem);
          line-height: 0.9;
          letter-spacing: -0.04em;
          font-weight: 700;
          text-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        /* --- Shimmer Effect --- */
        .shimmer-text {
          background: linear-gradient(90deg, #3F7373, #768C45, #ffffff, #768C45, #3F7373);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5s linear infinite;
        }

        @keyframes shimmer {
          to { background-position: 200% center; }
        }

        /* --- Glow Animation --- */
        .industrial-glow {
          text-shadow: 0 0 15px var(--accent-glow), 0 0 30px var(--accent-glow);
          animation: pulse-glow 3s infinite ease-in-out;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.8; text-shadow: 0 0 10px var(--accent-glow); }
          50% { opacity: 1; text-shadow: 0 0 25px var(--accent-glow); }
        }

        /* --- CTA Button (Responsive) --- */
        .cta-button {
          pointer-events: auto;
          background: rgba(224, 224, 224, 0.9);
          backdrop-filter: blur(5px);
          color: var(--bg);
          padding: 0.8rem 1.4rem;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          clip-path: polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          white-space: nowrap;
        }

        @media (min-width: 768px) {
          .cta-button {
            padding: 1.2rem 2.5rem;
            font-size: 0.75rem;
            letter-spacing: 0.2em;
          }
        }

        .cta-button:hover { 
          background: var(--accent); 
          color: #ffffff;
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 40px var(--accent-glow);
        }

        /* --- Scroll Hint --- */
        .scroll-hint {
          position: absolute;
          bottom: 2rem; left: 50%;
          width: 1px; height: 60px;
          background: linear-gradient(to bottom, var(--silver), transparent);
          animation: flow 2s infinite ease-in-out;
          z-index: 20;
        }

        @keyframes flow {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
        }

        /* --- Status Bar (hide detail on very small screens) --- */
        .status-detail {
          display: none;
        }

        @media (min-width: 480px) {
          .status-detail {
            display: block;
          }
        }

        /* --- Bottom info bar responsive --- */
        .hero-bottom-bar {
          grid-column: 1 / -1;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .hero-bottom-bar {
            justify-content: space-between;
          }
        }

        .hero-tagline {
          display: none;
        }

        @media (min-width: 640px) {
          .hero-tagline {
            display: block;
          }
        }

        .char-reveal {
          display: inline-block;
          opacity: 0;
        }
      `}</style>

      <div className="halide-body relative w-full h-full">
        {/* Background Video */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full overflow-hidden z-0"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/hero%20section.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>

        <div className="halide-overlay" />
        
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div className="halide-grain" style={{ filter: 'url(#grain)' }}></div>

        <div className="interface-grid">
          {/* Top Left: System Status */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse flex-shrink-0" />
            <span style={{ fontWeight: 700, fontSize: '0.5rem', letterSpacing: '0.25em' }} className="hidden xs:block sm:inline">OPTIMECORE_SYS v2.0</span>
          </motion.div>

          {/* Top Right: Intelligence Overlay */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ textAlign: 'right', fontFamily: 'monospace', color: 'var(--accent)' }}
          >
            <div className="industrial-glow" style={{ fontSize: '0.55rem', letterSpacing: '0.15em' }}>SYS: OPTIMAL</div>
            <div className="status-detail" style={{ opacity: 0.6, fontSize: '0.45rem', letterSpacing: '0.1em' }}>INTELLIGENCE: ACTIVE</div>
          </motion.div>

          {/* Center: Main Title */}
          <h1 className="hero-title">
            <div className="overflow-hidden">
              {"OPTIMIZE".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="char-reveal"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="overflow-hidden">
              {"YOUR".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="char-reveal"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="shimmer-text block mt-1 md:mt-2"
              >
                FACTORY
              </motion.span>
            </div>
          </h1>

          {/* Bottom Bar: Tagline + CTA */}
          <div className="hero-bottom-bar">
            {/* Tagline — hidden on very small screens */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="hero-tagline"
              style={{ fontFamily: 'monospace', maxWidth: '260px' }}
            >
              <p className="text-white mb-1" style={{ letterSpacing: '0.4em', fontSize: '0.5rem', fontWeight: 700 }}>[ OPTICOREX_AI ]</p>
              <p style={{ opacity: 0.7, lineHeight: 1.6, fontSize: '0.55rem' }}>Smarter machines, smoother operations.</p>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <a href="#features" className="cta-button">INITIALIZE PLATFORM</a>
            </motion.div>
          </div>
        </div>

        <div className="scroll-hint"></div>
      </div>
    </section>
  );
}
