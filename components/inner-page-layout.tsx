'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, ArrowLeft } from 'lucide-react'
import { StackedCircularFooter } from '@/components/ui/stacked-circular-footer'

// ─── Shared Inner Page Header ──────────────────────────────────────
export function InnerPageHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-[#3F7373]/10 bg-[#F2F1F0]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-[#3F7373] rounded-xl flex items-center justify-center shadow-lg shadow-[#3F7373]/20 group-hover:rotate-12 transition-all duration-300">
            <span className="text-[#F2F1F0] font-black text-lg">O</span>
          </div>
          <span className="tracking-widest uppercase text-[10px] font-black text-[#3F7373]">OPTIMECORE</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-[11px] font-black tracking-widest uppercase text-neutral-400 hover:text-[#3F7373] transition-colors">
            Features
          </Link>
          <Link href="/#pricing" className="text-[11px] font-black tracking-widest uppercase text-neutral-400 hover:text-[#3F7373] transition-colors">
            Pricing
          </Link>
          <Link href="/product"
            className={`text-[11px] font-black tracking-widest uppercase transition-colors ${pathname === '/product' ? 'text-[#3F7373]' : 'text-neutral-400 hover:text-[#3F7373]'}`}
          >
            Platform
          </Link>
          <Link href="/contact"
            className={`text-[11px] font-black tracking-widest uppercase transition-colors ${pathname === '/contact' ? 'text-[#3F7373]' : 'text-neutral-400 hover:text-[#3F7373]'}`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link href="/" className="hidden sm:flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-neutral-400 hover:text-[#3F7373] transition-colors">
            <ArrowLeft className="w-3 h-3" /> Back to Home
          </Link>
          <Link
            href={pathname === '/contact' ? '/product' : '/contact'}
            className="h-10 px-6 bg-[#3F7373] hover:bg-[#768C45] text-[#F2F1F0] text-[11px] font-black tracking-widest uppercase rounded-2xl hover:scale-105 transition-all flex items-center gap-2 group shadow-lg shadow-[#3F7373]/20"
          >
            {pathname === '/contact' ? 'View Platform' : 'Contact Sales'}
            <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </header>
  )
}

// ─── Shared Inner Page Footer ──────────────────────────────────────
export function InnerPageFooter() {
  return (
    <>
      <div className="h-px w-full bg-[#3F7373]/10" />
      <StackedCircularFooter />
    </>
  )
}
