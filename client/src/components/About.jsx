import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Target, 
  Sparkles, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Cpu, 
  Zap, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  Compass, 
  Users 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, about, strengths } = portfolioData;

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <section id="about" className="py-24 relative bg-[#07111F] overflow-hidden">
      
      {/* Decorative Technical Grid Lines */}
      <div className="absolute inset-0 bg-blueprint-subgrid pointer-events-none opacity-40" />
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-[#00AEEF]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1B2E] border border-[#00AEEF]/30 text-xs font-mono text-[#36DFFF] uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENGINEERING PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00AEEF] to-[#36DFFF] rounded-full mt-4" />
        </div>

        {/* Premium Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Side: Photo Integration with Blueprint Framing & Schematics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative sticky top-28">
              
              {/* Technical Schematic Backdrop */}
              <div className="relative rounded-2xl bg-[#0E1B2E]/90 border border-[#36DFFF]/20 p-3 shadow-2xl overflow-hidden">
                
                {/* Blueprint Header */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#07111F]/80 rounded-lg border border-white/5 mb-3 text-xs font-mono text-[#8A99AD]">
                  <span className="flex items-center gap-1.5 text-[#36DFFF]">
                    <Zap className="w-3.5 h-3.5" /> SPEC: EEE-DPI-2026
                  </span>
                  <span>DHAKA, BANGLADESH</span>
                </div>

                {/* Framing Image */}
                <div className="relative rounded-xl overflow-hidden bg-navy-950">
                  <img
                    src={personal.photoUrl}
                    alt={personal.name}
                    className="w-full h-[400px] object-cover object-top filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2E] via-transparent to-transparent opacity-70" />
                </div>

                {/* Sub-Card Details */}
                <div className="p-4 mt-2 bg-[#07111F]/60 rounded-xl border border-white/5 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C7D1DD]">
                    <GraduationCap className="w-4 h-4 text-[#36DFFF]" />
                    <span>Daffodil Polytechnic Institute</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C7D1DD]">
                    <Calendar className="w-4 h-4 text-[#00AEEF]" />
                    <span>Completed: September 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C7D1DD]">
                    <MapPin className="w-4 h-4 text-[#36DFFF]" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>

                {/* Technical Corner Brackets */}
                <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#36DFFF]" />
                <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#36DFFF]" />
                <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#36DFFF]" />
                <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#36DFFF]" />
              </div>

              {/* Status Badge */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#0E1B2E]/70 border border-[#00AEEF]/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-white">READY FOR EMPLOYMENT</span>
                </div>
                <span className="text-[11px] font-mono text-[#36DFFF]">FULL-TIME / PLANT ROLES</span>
              </div>

            </div>
          </motion.div>

          {/* Right Side: Narrative & Animated Information Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* About Narrative Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#0E1B2E]/80 border border-[#36DFFF]/15 shadow-xl relative"
            >
              <div className="text-xs font-mono text-[#00AEEF] uppercase tracking-wider mb-2">
                EXECUTIVE SUMMARY
              </div>
              <p className="text-base sm:text-lg text-white leading-relaxed font-normal">
                {about.bio}
              </p>
            </motion.div>

            {/* CARD 1: Education Card */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-6 sm:p-7 rounded-2xl bg-[#0E1B2E] border border-[#00AEEF]/20 hover:border-[#36DFFF]/50 hover:shadow-[0_10px_30px_rgba(0,174,239,0.15)] transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 flex items-center justify-center text-[#36DFFF] group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-[#00AEEF] tracking-wider">
                      ACADEMIC CREDENTIAL
                    </span>
                    <h3 className="text-xl font-bold font-display text-white">
                      Education
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#00AEEF]/15 text-[#36DFFF] border border-[#36DFFF]/30">
                  Sept 2026
                </span>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-white/5">
                <div className="text-lg font-semibold text-white">
                  Diploma in Electrical Engineering (EEE)
                </div>
                <div className="text-sm font-medium text-[#36DFFF] flex items-center gap-2">
                  <span>Daffodil Polytechnic Institute</span>
                </div>
                <p className="text-xs sm:text-sm text-[#8A99AD] leading-relaxed">
                  Rigorous comprehensive technical curriculum encompassing AC/DC electrical machinery, power plant engineering, switchgear protection, transmission systems, industrial electrical maintenance, and programmable logic control.
                </p>
              </div>
            </motion.div>

            {/* CARD 2: Career Interest Card */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-6 sm:p-7 rounded-2xl bg-[#0E1B2E] border border-[#00AEEF]/20 hover:border-[#36DFFF]/50 hover:shadow-[0_10px_30px_rgba(0,174,239,0.15)] transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 flex items-center justify-center text-[#36DFFF] group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#00AEEF] tracking-wider">
                    TARGET DOMAINS
                  </span>
                  <h3 className="text-xl font-bold font-display text-white">
                    Career Interests
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/5">
                {[
                  { title: "Power Generation & Power Plant", icon: Zap },
                  { title: "Industrial Automation", icon: Cpu },
                  { title: "Electrical Maintenance", icon: Layers },
                  { title: "Power Distribution & Transmission", icon: Compass },
                  { title: "Industrial Electrical Systems", icon: ShieldCheck },
                ].map((interest, idx) => {
                  const Icon = interest.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#07111F]/80 border border-white/5 hover:border-[#00AEEF]/40 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#00AEEF]/10 flex items-center justify-center text-[#36DFFF] flex-shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-medium text-[#C7D1DD] leading-snug">
                        {interest.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* CARD 3: Strength Card */}
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-6 sm:p-7 rounded-2xl bg-[#0E1B2E] border border-[#00AEEF]/20 hover:border-[#36DFFF]/50 hover:shadow-[0_10px_30px_rgba(0,174,239,0.15)] transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 flex items-center justify-center text-[#36DFFF] group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#00AEEF] tracking-wider">
                    ENGINEERING DISCIPLINE
                  </span>
                  <h3 className="text-xl font-bold font-display text-white">
                    Core Strengths
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2 border-t border-white/5">
                {[
                  { name: "Quick Learner", desc: "Rapid absorption of technical systems" },
                  { name: "Responsible", desc: "Committed to plant safety & rigor" },
                  { name: "Adaptable", desc: "Agile in new technical environments" },
                  { name: "Team Player", desc: "Seamless cross-functional coordination" },
                  { name: "Problem Solver", desc: "First-principles fault diagnosis" },
                ].map((s, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#07111F]/80 border border-white/5 flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#36DFFF]" />
                      <span className="text-xs font-bold text-white font-display">
                        {s.name}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#8A99AD] leading-tight">
                      {s.desc}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
