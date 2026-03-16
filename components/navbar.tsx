"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  Layers, 
  Settings, 
  HelpCircle, 
  Shield, 
  MessageSquare, 
  User, 
  FileText, 
  Lock,
  ChevronRight
} from "lucide-react";
import { ExpandableTabs, TabItem } from "@/components/ui/expandable-tabs";
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const tabs: TabItem[] = [
    { title: "Home", icon: Home, href: "#home" },
    { title: "Features", icon: Layers, href: "#features" },
    { type: "separator" },
    { title: "Settings", icon: Settings, href: "#pricing" },
    { title: "Support", icon: HelpCircle, href: "#faq" },
    { title: "Security", icon: Shield, href: "#testimonials" },
    { type: "separator" },
    { title: "Contact", icon: MessageSquare, href: "/contact" },
  ];

  const router = useRouter();

  const handleTabChange = (index: number | null) => {
    if (index !== null) {
      const tab = tabs[index];
      if (tab && 'href' in tab && tab.href) {
        if (tab.href.startsWith('#')) {
          window.location.hash = tab.href;
        } else {
          router.push(tab.href);
        }
      }
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4 font-['Syncopate']">
      <div className="flex items-center gap-4 bg-white/40 backdrop-blur-2xl border border-[#528081]/30 p-2 rounded-3xl shadow-[0_15px_40px_rgba(82,128,129,0.1)] ring-1 ring-[#528081]/10">
        {/* Logo & Status */}
        <div className="flex items-center gap-3 pl-2">
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-9 h-9 bg-[#528081] rounded-xl flex items-center justify-center shadow-lg shadow-[#528081]/30 group-hover:rotate-12 transition-all duration-500">
              <span className="text-white font-bold text-lg">O</span>
            </div>
          </Link>
          <div className="hidden md:flex flex-col">
            <span className="text-[7px] font-bold tracking-[0.2em] text-[#528081] uppercase leading-none">OptimeCore</span>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="w-1 h-1 rounded-full bg-[#768C45] animate-pulse" />
              <span className="text-[6px] font-bold text-[#768C45] tracking-widest uppercase opacity-80">SYS_READY</span>
            </div>
          </div>
        </div>

        {/* Expandable Tabs */}
        <ExpandableTabs 
          tabs={tabs} 
          activeColor="text-[#1A1A1A] font-bold"
          className="bg-transparent border-none shadow-none p-0 text-neutral-500/80"
          onChange={handleTabChange}
        />

        {/* CTA Button */}
        <div className="pr-1">
          <Link href="/product" className="h-10 px-6 bg-[#528081] hover:bg-[#528081]/90 text-white text-[9px] font-bold tracking-[0.2em] uppercase rounded-2xl hover:scale-105 transition-all flex items-center gap-2 group whitespace-nowrap shadow-xl shadow-[#528081]/20 border border-[#528081]/30">
            INITIALIZE
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
