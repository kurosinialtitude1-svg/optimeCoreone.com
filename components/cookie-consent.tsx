"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Settings, X, Check, ShieldCheck } from 'lucide-react';
import { cn } from "@/lib/utils";

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem('optime-cookie-consent');
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      setPreferences(JSON.parse(savedConsent));
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { essential: true, analytics: true, marketing: true };
    saveConsent(allAccepted);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
    setIsOpen(false);
  };

  const saveConsent = (data: typeof preferences) => {
    localStorage.setItem('optime-cookie-consent', JSON.stringify(data));
    setPreferences(data);
    setShowBanner(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'essential') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Floating Trigger Icon (Desktop Always Visible per requirement) */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-[100] p-2.5 md:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#3F7373] shadow-lg hover:shadow-[#3F7373]/20 flex items-center justify-center group"
        title="Cookie Preferences"
      >
        <Cookie className="w-5 h-5 md:w-6 md:h-6 group-hover:text-white transition-colors" />
      </motion.button>

      {/* Initial Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 inset-x-0 z-[110] p-4 md:p-6"
          >
            <div className="max-w-7xl mx-auto p-6 md:p-8 rounded-2xl bg-black/80 backdrop-blur-2xl border border-[#3F7373]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#3F7373]/20 border border-[#3F7373]/40">
                  <ShieldCheck className="w-8 h-8 text-[#3F7373]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Cookie Preferences</h3>
                  <p className="text-white/60 text-sm max-w-2xl">
                    We use cookies to enhance your experience, analyze site traffic, and serve personalized content. 
                    Choose your preferences below or accept all to continue.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <button
                  onClick={() => setIsOpen(true)}
                  className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white/80 text-sm font-medium transition-all flex-1 md:flex-none"
                >
                  Customize
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-8 py-3 rounded-xl bg-[#3F7373] hover:bg-[#3F7373]/80 text-white text-sm font-bold shadow-lg shadow-[#3F7373]/20 transition-all flex-1 md:flex-none"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preference Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-[#0a0a0a] border border-[#3F7373]/30 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3F7373]/10 blur-3xl rounded-full -mr-16 -mt-16" />
              
              <div className="flex items-center justify-between mb-6 md:mb-8 shrink-0">
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 md:w-6 md:h-6 text-[#3F7373]" />
                  <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Privacy Settings</h2>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-all"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              <div className="space-y-4 md:space-y-6 mb-8 md:mb-10 overflow-y-auto pr-2 custom-scrollbar">
                {/* Essential */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#3F7373]/30 transition-all">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-semibold">Essential Cookies</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#3F7373]/20 text-[#3F7373] border border-[#3F7373]/30 uppercase font-bold">Required</span>
                    </div>
                    <p className="text-xs text-white/50 leading-relaxed">Necessary for the website to function correctly (auth, security, etc).</p>
                  </div>
                  <div className="ml-4 w-12 h-6 rounded-full bg-[#3F7373] flex items-center justify-end px-1 opacity-50 cursor-not-allowed">
                    <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                  </div>
                </div>

                {/* Analytics */}
                <div 
                  onClick={() => togglePreference('analytics')}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#3F7373]/30 transition-all cursor-pointer group"
                >
                  <div className="flex-1">
                    <span className="text-white font-semibold block mb-1">Analytics</span>
                    <p className="text-xs text-white/50 leading-relaxed">Help us understand how visitors interact with the site.</p>
                  </div>
                  <div className={cn(
                    "ml-4 w-12 h-6 rounded-full transition-all flex items-center px-1",
                    preferences.analytics ? "bg-[#3F7373]" : "bg-white/10"
                  )}>
                    <motion.div 
                      animate={{ x: preferences.analytics ? 24 : 0 }}
                      className="w-4 h-4 rounded-full bg-white shadow-sm" 
                    />
                  </div>
                </div>

                {/* Marketing */}
                <div 
                  onClick={() => togglePreference('marketing')}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#3F7373]/30 transition-all cursor-pointer group"
                >
                  <div className="flex-1">
                    <span className="text-white font-semibold block mb-1">Marketing</span>
                    <p className="text-xs text-white/50 leading-relaxed">Used to deliver more relevant advertisements to you.</p>
                  </div>
                  <div className={cn(
                    "ml-4 w-12 h-6 rounded-full transition-all flex items-center px-1",
                    preferences.marketing ? "bg-[#3F7373]" : "bg-white/10"
                  )}>
                    <motion.div 
                      animate={{ x: preferences.marketing ? 24 : 0 }}
                      className="w-4 h-4 rounded-full bg-white shadow-sm" 
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 py-4 rounded-2xl border border-[#3F7373]/30 hover:bg-[#3F7373]/10 text-white text-sm font-bold transition-all"
                >
                  Accept All
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 py-4 rounded-2xl bg-[#3F7373] hover:bg-[#3F7373]/80 text-white text-sm font-bold shadow-lg shadow-[#3F7373]/20 transition-all"
                >
                  Save Settings
                </button>
              </div>
              
              <p className="text-[10px] text-center text-white/30 mt-6 tracking-widest uppercase">OptimeCore Privacy Module v1.0</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
