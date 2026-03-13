"use client";

import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Mouse Parallax Logic
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;

      // Rotate the 3D Canvas
      canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;

      // Apply depth shift to layers
      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = (index + 1) * 15;
        const moveX = x * (index + 1) * 0.2;
        const moveY = y * (index + 1) * 0.2;
        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
      });
    };

    // Entrance Animation
    canvas.style.opacity = '0';
    canvas.style.transform = 'rotateX(90deg) rotateZ(0deg) scale(0.8)';

    const timeout = setTimeout(() => {
      canvas.style.transition = 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
      canvas.style.opacity = '1';
      canvas.style.transform = 'rotateX(55deg) rotateZ(-25deg) scale(1)';
    }, 300);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section id="home" className={cn("relative w-full h-screen overflow-hidden dynamic-mesh-bg flex items-center justify-center font-sans", className)}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;800;900&display=swap');

        :root {
          --bg: #000000;
          --text: #F2F1F0;
          --accent: #3F7373; /* Ming */
          --accent-secondary: #768C45; /* Palm Leaf */
          --grain-opacity: 0.12;
        }

        .halide-container {
          background-color: transparent;
          color: var(--text);
          font-family: 'Cinzel', serif;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .halide-grain {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 100;
          opacity: var(--grain-opacity);
        }

        .viewport {
          perspective: 2000px;
          width: 100vw; height: 100vh;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }

        .canvas-3d {
          position: relative;
          width: 800px; height: 500px;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .layer {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(63, 115, 115, 0.2);
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
          border-radius: 2rem;
        }

        .layer-1 { background-image: url('/'); filter: brightness(1.05) contrast(1.05); }
        .layer-2 { background-image: url('/'); filter: brightness(1.1) contrast(1.1); opacity: 0.3; mix-blend-mode: soft-light; }
        .layer-3 { background-image: url('/'); filter: brightness(1.2) contrast(1.2); opacity: 0.2; mix-blend-mode: overlay; }

        .contours {
          position: absolute;
          width: 200%; height: 200%;
          top: -50%; left: -50%;
          background-image: repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 40px, rgba(63,115,115,0.05) 41px, transparent 42px);
          transform: translateZ(120px);
          pointer-events: none;
        }

        .interface-grid {
          position: absolute;
          inset: 0;
          padding: 4rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          z-index: 10;
          pointer-events: none;
        }

        .hero-title {
          grid-column: 1 / -1;
          align-self: center;
          font-size: clamp(3rem, 10vw, 10rem);
          line-height: 0.85;
          letter-spacing: -0.04em;
          mix-blend-mode: normal;
          font-weight: 900;
          color: var(--text);
          text-shadow: 0 10px 30px rgba(63,115,115,0.1);
        }

        .cta-button {
          pointer-events: auto;
          background: var(--accent);
          color: #F2F1F0;
          padding: 1.25rem 3rem;
          text-decoration: none;
          font-weight: 900;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          clip-path: polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%);
          transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: inline-block;
          box-shadow: 0 20px 40px rgba(63, 115, 115, 0.2);
          font-size: 0.75rem;
        }

        .cta-button:hover { 
          background: var(--accent-secondary); 
          transform: translateY(-5px) scale(1.05); 
          box-shadow: 0 30px 60px rgba(118, 140, 69, 0.25);
        }

        .hero-backdrop {
          position: absolute;
          inset: 0;
          background-image: url('/We Architect The Future.svg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          opacity: 0.08;
          filter: blur(2px) saturate(0.8);
          z-index: 0;
        }

        .hero-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
          z-index: 1;
          pointer-events: none;
        }
      `}</style>

      <div className="hero-backdrop" />
      <div className="hero-vignette" />

      {/* Hero Section Foreground Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: "url('/herosectionbg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        opacity: 0.55,
        zIndex: 2,
        pointerEvents: 'none',
        mixBlendMode: 'luminosity',
      }} />

      <div className="halide-container">
        {/* SVG Filter for Grain */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div className="halide-grain" style={{ filter: 'url(#grain)' }}></div>

        <div className="interface-grid">
          <div className="font-black flex items-center gap-3">
            <div className="w-10 h-10 bg-[#3F7373] rounded-xl flex items-center justify-center shadow-lg shadow-[#3F7373]/20">
              <span className="text-[#F2F1F0] font-bold text-xl">O</span>
            </div>
            <span className="tracking-widest uppercase text-xs font-black text-[#3F7373]">OPTIMECORE</span>
          </div>
          <div className="text-right font-mono text-[10px] space-y-1" style={{ color: 'var(--accent)' }}>
            <div className="opacity-60">SYSTEM STATUS: OPTIMAL</div>
            <div className="font-bold">INTELLIGENCE OVERLAY: ACTIVE</div>
          </div>

          <h1 className="hero-title">
            <span style={{ color: '#000000' }}>Optimize Your</span><br />
            <span style={{ color: '#000000' }}>Factory with</span>
            {' '}
            <span className="text-transparent bg-clip-text inline-flex"
              style={{ backgroundImage: 'linear-gradient(90deg, #A8BDBF, #3F7373, #768C45, #C5D7D9, #3F7373)' }}>
              {"OptiCoreX".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.2,
                    delay: 2 + index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div className="font-mono text-[10px] tracking-tight text-neutral-400 max-w-xs leading-relaxed">
              <p className="font-black text-[#3F7373] mb-1">[ OPTICOREX ]</p>
              <p>Smarter machines, smoother operations, better results.</p>
            </div>
            <a href="#features" className="cta-button industrial-pulse">Initialize Platform</a>
          </div>
        </div>

        <div className="viewport">
          <div className="canvas-3d" ref={canvasRef}>
            <div className="layer layer-1" ref={(el: any) => { layersRef.current[0] = el!; }}></div>
            <div className="layer layer-2" ref={(el: any) => { layersRef.current[1] = el!; }}></div>
            <div className="layer layer-3" ref={(el: any) => { layersRef.current[2] = el!; }}></div>
            <div className="contours"></div>
          </div>
        </div>

        <Link 
          href="#features"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 group cursor-pointer"
        >
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="text-[10px] font-black tracking-[0.4em] uppercase text-[#3F7373] opacity-60 group-hover:opacity-100 transition-opacity"
          >
            Explore Intelligence
          </motion.span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 h-10 rounded-full border border-[#3F7373]/20 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:border-[#3F7373]/50 transition-colors"
          >
            <ChevronDown className="w-5 h-5 text-[#3F7373]" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
