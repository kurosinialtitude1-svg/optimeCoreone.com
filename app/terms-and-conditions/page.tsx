import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Terminal, ShieldAlert, FileCheck, Scale, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms & Conditions — OptimeCore Intelligence Platform',
  description: 'Terms of service and usage conditions for the OptimeCore industrial AI platform.',
}

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-black font-['Cinzel'] text-[#F2F1F0] selection:bg-[#768C45]/30">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] rounded-full blur-[180px] opacity-[0.05] bg-[#768C45] -top-64 -right-64" />
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.04] bg-[#3F7373] bottom-0 left-0" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.3em] uppercase text-[#A8BDBF]/60 hover:text-[#F2F1F0] transition-colors mb-12"
        >
          <ArrowLeft className="w-3 h-3" /> Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#768C45]/10 border border-[#768C45]/30 text-[9px] font-black tracking-[0.4em] uppercase text-[#768C45] mb-6">
            <Terminal className="w-3 h-3" />
            <span>sys.legal.framework</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#768C45] to-[#A8BDBF]">Conditions</span>
          </h1>
          <p className="text-[#A8BDBF]/40 text-sm font-sans tracking-widest uppercase">
            Agreement Rev: 2026.03.A
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-12 font-sans text-[#A8BDBF]/80 leading-relaxed max-w-3xl">
          <section>
            <h2 className="text-xl font-black text-[#F2F1F0] uppercase tracking-tight mb-4 flex items-center gap-3 font-['Cinzel']">
              <span className="w-1.5 h-6 bg-[#768C45]" /> 01. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the OptimeCore Intelligence Platform, you agree to be bound by these Terms and Conditions. OptimeCore provides a cloud-native industrial AI engine designed for manufacturing optimization. Unauthorized use of this system is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#F2F1F0] uppercase tracking-tight mb-4 flex items-center gap-3 font-['Cinzel']">
              <span className="w-1.5 h-6 bg-[#3F7373]" /> 02. Service Usage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-5 border border-white/5 bg-white/[0.01] rounded-lg">
                <ShieldAlert className="w-6 h-6 text-[#3F7373] mb-3" />
                <h3 className="text-sm font-bold text-[#F2F1F0] uppercase mb-2">Authorized Access</h3>
                <p className="text-xs">Users are responsible for maintaining the confidentiality of their credentials and all activities under their account.</p>
              </div>
              <div className="p-5 border border-white/5 bg-white/[0.01] rounded-lg">
                <AlertCircle className="w-6 h-6 text-[#768C45] mb-3" />
                <h3 className="text-sm font-bold text-[#F2F1F0] uppercase mb-2">Usage Limits</h3>
                <p className="text-xs">Service levels are governed by your selected tier (Starter, Pro, or Enterprise) as defined in the pricing schedule.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#F2F1F0] uppercase tracking-tight mb-4 flex items-center gap-3 font-['Cinzel']">
              <span className="w-1.5 h-6 bg-[#A8BDBF]" /> 03. Intellectual Property
            </h2>
            <p>
              All software, algorithms, and interface designs are the exclusive property of OptimeCore. Users are granted a non-exclusive, non-transferable license to use the platform solely for internal business operations during the subscription term.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#F2F1F0] uppercase tracking-tight mb-4 flex items-center gap-3 font-['Cinzel']">
              <span className="w-1.5 h-6 bg-[#C5D7D9]" /> 04. Limitation of Liability
            </h2>
            <p>
              While OptimeCore utilizes advanced AI for predictive maintenance and efficiency modeling, we do not guarantee specific industrial outcomes. OptimeCore is not liable for production downtime, machine failure, or data loss resulting from variables outside of our software environment.
            </p>
          </section>

          <section className="p-6 bg-gradient-to-r from-[#768C45]/10 to-transparent border-l-2 border-[#768C45]">
            <h3 className="text-sm font-bold text-[#F2F1F0] uppercase tracking-[0.2em] mb-2 flex items-center gap-2 font-['Cinzel']">
              <Scale className="w-4 h-4" /> Governing Law
            </h3>
            <p className="text-xs">
              These terms are governed by the laws of the State of Michigan, United States, without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </div>

      {/* Footer Minimal */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-bold tracking-[0.3em] text-[#A8BDBF]/20 uppercase">
            © 2026 OptimeCore Intelligence Platform
          </p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="text-[9px] font-bold tracking-[0.3em] text-[#A8BDBF]/40 hover:text-[#F2F1F0] uppercase transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-[9px] font-bold tracking-[0.3em] text-[#A8BDBF]/40 hover:text-[#F2F1F0] uppercase transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
