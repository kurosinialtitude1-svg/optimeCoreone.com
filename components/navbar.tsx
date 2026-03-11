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
      <div className="flex items-center gap-4 bg-black/60 backdrop-blur-xl border border-white/10 p-2 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
        {/* Logo */}
        <Link href="/" className="pl-2 group flex items-center gap-2">
          <img src="/logo.png" alt="Halide Core Logo" className="w-8 h-8 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-primary/40" />
        </Link>

        {/* Expandable Tabs */}
        <ExpandableTabs 
          tabs={tabs} 
          activeColor="text-white font-bold"
          className="bg-transparent border-none shadow-none p-0 text-neutral-400"
          onChange={handleTabChange}
        />

        {/* CTA Button */}
        <div className="pr-1">
          <button className="h-10 px-6 mixed-gradient-glow text-white text-sm font-bold rounded-2xl hover:brightness-110 transition-all flex items-center gap-2 group whitespace-nowrap">
            Get Started
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </nav>
  );
}
