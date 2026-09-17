import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Send, 
  Award, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  ArrowDown, 
  Compass, 
  CheckCircle2 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenCV }) {
  const { personal, hero } = portfolioData;

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-blueprint-grid"
    >
      {/* Blueprint Subgrid & Radar Glow */}
      <div className="absolute inset-0 bg-radar-radial pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#00AEEF]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column: Engineering Credentials & Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Status / Accreditation Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0E1B2E]/90 border border-[#36DFFF]/30 w-fit mb-6 shadow-[0_0_15px_rgba(0,174,239,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#36DFFF] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#36DFFF] -ml-4" />
              <span className="text-xs font-mono font-medium tracking-wider text-[#36DFFF] uppercase">
                {personal.degree}
              </span>
            </div>

            {/* Greeting Badge */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-sm sm:text-base font-mono font-semibold tracking-[0.25em] text-[#00AEEF] uppercase mb-2"
            >
              {hero.greeting}
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white tracking-tight leading-[1.08] mb-4"
            >
              {personal.name}
            </motion.h1>

            {/* Subheading / Designation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#00AEEF] to-[#36DFFF]" />
              <span className="text-xl sm:text-2xl font-medium text-[#36DFFF] tracking-wide">
                {personal.title}
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-base sm:text-lg text-[#C7D1DD] leading-relaxed max-w-2xl mb-8"
            >
              {hero.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="#contact"
                onClick={scrollToContact}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-mono text-sm font-semibold text-[#07111F] bg-gradient-to-r from-[#00AEEF] via-[#36DFFF] to-[#00AEEF] shadow-[0_0_25px_rgba(0,174,239,0.45)] hover:shadow-[0_0_35px_rgba(54,223,255,0.6)] transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                <span>CONTACT ME</span>
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-mono text-sm font-semibold text-white bg-[#0E1B2E]/90 border border-[#36DFFF]/30 hover:border-[#36DFFF] hover:bg-[#14253F] hover:shadow-[0_0_20px_rgba(54,223,255,0.25)] transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-[#36DFFF]" />
                <span>DOWNLOAD CV</span>
              </button>
            </motion.div>

            {/* Recruiter Engineering Telemetry Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10"
            >
              {hero.stats.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[11px] font-mono text-[#8A99AD] uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="text-base font-bold text-white font-display">
                    {item.value}
                  </span>
                  <span className="text-[10px] text-[#00AEEF] font-mono">
                    {item.subtext}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Hero Column: High-Impact Framed Portrait with Engineering HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px]">
              
              {/* Radial Cyan Glow behind frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#00AEEF]/20 to-[#36DFFF]/20 rounded-3xl blur-2xl -z-10" />

              {/* Technical Geometric Brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#36DFFF] z-20 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#36DFFF] z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#36DFFF] z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#36DFFF] z-20 pointer-events-none" />

              {/* Framing Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0E1B2E] border border-[#36DFFF]/30 shadow-[0_20px_50px_rgba(7,17,31,0.9)] p-2">
                
                {/* Photo Frame Header HUD */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-[#36DFFF]/15 mb-2 bg-[#07111F]/70 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
                    <span className="text-[10px] font-mono text-[#36DFFF] tracking-wider uppercase">
                      PORTRAIT // ID-2026-EEE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#8A99AD]">
                    50Hz SYNC
                  </span>
                </div>

                {/* The Photo Itself */}
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-[#0E1B2E] to-[#07111F] group">
                  <img
                    src={personal.photoUrl}
                    alt={personal.name}
                    className="w-full h-[460px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Vignette for seamless dark-theme integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent opacity-80" />

                  {/* Subtle Blueprint Grid overlay on bottom edge */}
                  <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#07111F] to-transparent pointer-events-none" />

                  {/* Floating Verification Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0E1B2E]/90 backdrop-blur-md border border-[#36DFFF]/30 shadow-lg flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#00AEEF]/20 border border-[#00AEEF]/50 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-[#36DFFF]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white font-display">
                        Daffodil Polytechnic Institute
                      </span>
                      <span className="text-[11px] font-mono text-[#8A99AD]">
                        Diploma in Electrical Engineering (2026)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Frame Footer Telemetry */}
                <div className="flex items-center justify-between px-3 py-2 mt-2 text-[10px] font-mono text-[#8A99AD] bg-[#07111F]/50 rounded-lg">
                  <span>SPEC: POWER & AUTOMATION</span>
                  <span className="text-[#36DFFF]">STATUS: READY</span>
                </div>
              </div>

              {/* Floating Engineering Satellite Badge */}
              <div className="hidden sm:flex absolute -right-6 top-16 px-3.5 py-2 rounded-xl bg-[#07111F]/90 backdrop-blur-md border border-[#00AEEF]/40 shadow-xl items-center gap-2 z-30">
                <Zap className="w-4 h-4 text-[#36DFFF]" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono text-[#8A99AD]">FOCUS AREA</span>
                  <span className="text-xs font-bold text-white">Power Generation</span>
                </div>
              </div>

              {/* Floating Engineering Satellite Badge 2 */}
              <div className="hidden sm:flex absolute -left-6 bottom-28 px-3.5 py-2 rounded-xl bg-[#07111F]/90 backdrop-blur-md border border-[#00AEEF]/40 shadow-xl items-center gap-2 z-30">
                <Cpu className="w-4 h-4 text-[#00AEEF]" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono text-[#8A99AD]">EXPERTISE</span>
                  <span className="text-xs font-bold text-white">Industrial Automation</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Elegant Scroll Down Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            onClick={scrollToAbout}
            className="group flex flex-col items-center gap-2 text-xs font-mono text-[#8A99AD] hover:text-[#36DFFF] transition-colors"
          >
            <span className="tracking-widest uppercase text-[10px]">SCROLL TO EXPLORE</span>
            <div className="w-6 h-10 rounded-full border border-[#00AEEF]/40 flex items-start justify-center p-1 group-hover:border-[#36DFFF] transition-colors">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-[#36DFFF] shadow-[0_0_8px_#36DFFF]"
              />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
