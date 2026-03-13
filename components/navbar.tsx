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
        // if href is an in-page anchor, change hash; otherwise navigate via Next router
        if (tab.href.startsWith('#')) {
          window.location.hash = tab.href;
        } else {
          router.push(tab.href);
        }
      }
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4 font-['Cinzel']">
      <div className="flex items-center gap-4 bg-white/90 backdrop-blur-xl border border-[#3F7373]/10 p-2 rounded-3xl shadow-[0_10px_40px_rgba(63,115,115,0.08)] ring-1 ring-[#3F7373]/5">
        {/* Logo */}
        <Link href="/" className="pl-2 group flex items-center gap-2">
          <div className="w-9 h-9 bg-[#3F7373] rounded-xl flex items-center justify-center shadow-lg shadow-[#3F7373]/20 group-hover:rotate-12 transition-all duration-300">
            <span className="text-[#F2F1F0] font-bold text-lg">O</span>
          </div>
        </Link>

        {/* Expandable Tabs */}
        <ExpandableTabs 
          tabs={tabs} 
          activeColor="text-[#1A1A1A] font-black"
          className="bg-transparent border-none shadow-none p-0 text-neutral-500"
          onChange={handleTabChange}
        />

        {/* CTA Button */}
        <div className="pr-1">
          <Link href="/product" className="h-10 px-6 bg-[#3F7373] hover:bg-[#3F7373]/90 text-[#F2F1F0] text-[11px] font-black tracking-widest uppercase rounded-2xl hover:scale-105 transition-all flex items-center gap-2 group whitespace-nowrap shadow-lg shadow-[#3F7373]/20">
            Get Started
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
