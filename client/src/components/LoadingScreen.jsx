import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phaseText, setPhaseText] = useState('CALIBRATING GRID FREQUENCY (50Hz)...');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 12) + 6;
        if (next > 30 && next < 70) {
          setPhaseText('SYNCHRONIZING POWER SYSTEMS & AUTOMATION...');
        } else if (next >= 70) {
          setPhaseText('PORTFOLIO TELEMETRY READY // ALL SYSTEMS NORMAL');
        }
        return Math.min(next, 100);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07111F] text-[#FFFFFF] select-none"
      >
        {/* Engineering Background Blueprint Grid */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
          {/* Animated Oscilloscope / Sine Wave Icon */}
          <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-2xl border border-[#00AEEF]/30 bg-[#0E1B2E]/80 shadow-[0_0_30px_rgba(0,174,239,0.25)] flex items-center justify-center">
              <svg className="w-12 h-12 text-[#36DFFF]" viewBox="0 0 100 100" fill="none">
                <motion.path
                  d="M10 50 Q 25 20, 35 50 T 60 50 T 85 50 L 90 50"
                  stroke="#36DFFF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
                />
                <circle cx="35" cy="50" r="3.5" fill="#00AEEF" />
                <circle cx="60" cy="50" r="3.5" fill="#00AEEF" />
              </svg>
            </div>
            <div className="absolute -inset-1 rounded-2xl border border-[#36DFFF]/20 animate-pulse-slow" />
          </div>

          {/* Engineer Title */}
          <div className="text-xs uppercase tracking-[0.3em] text-[#00AEEF] font-mono mb-2">
            EEE INDUSTRIAL PORTFOLIO
          </div>
          <h1 className="text-2xl font-bold tracking-tight font-display text-white mb-6">
            Jahidul Islam Jihad
          </h1>

          {/* Progress Bar with Digital Readout */}
          <div className="w-64 bg-[#0E1B2E] p-1 rounded-full border border-[#00AEEF]/20 mb-4 shadow-inner">
            <motion.div
              className="h-2 rounded-full bg-gradient-to-r from-[#00AEEF] to-[#36DFFF] shadow-[0_0_12px_#36DFFF]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          <div className="flex items-center justify-between w-64 text-xs font-mono text-[#8A99AD] mb-3">
            <span>SYS_INIT</span>
            <span className="text-[#36DFFF] font-semibold">{progress}%</span>
          </div>

          <div className="text-[11px] font-mono text-[#8A99AD] tracking-wide animate-pulse">
            {phaseText}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
