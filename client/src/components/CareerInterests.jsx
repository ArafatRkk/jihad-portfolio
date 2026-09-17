import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Wrench, 
  Cpu, 
  Network, 
  Sliders, 
  ChevronRight, 
  Radio, 
  Check, 
  Activity 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CareerInterests() {
  const { careerInterests } = portfolioData;

  const iconMap = {
    Zap: Zap,
    Wrench: Wrench,
    Cpu: Cpu,
    Network: Network,
    Sliders: Sliders,
  };

  return (
    <section id="career" className="py-24 relative bg-[#0A1626]/60 border-t border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-64 bg-[#00AEEF]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1B2E] border border-[#00AEEF]/30 text-xs font-mono text-[#36DFFF] uppercase tracking-widest mb-3">
            <Radio className="w-3.5 h-3.5" />
            <span>SPECIALIZED DISCIPLINES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            Career Interests & Focus
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8A99AD] max-w-2xl">
            Targeting key engineering domains where modern industrial technology meets mission-critical reliability.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00AEEF] to-[#36DFFF] rounded-full mt-4" />
        </div>

        {/* 5 Deep-Dive Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerInterests.map((interest, idx) => {
            const Icon = iconMap[interest.icon] || Zap;
            return (
              <motion.div
                key={interest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl bg-[#0E1B2E]/90 border border-white/10 hover:border-[#00AEEF]/60 p-6 sm:p-7 shadow-xl hover:shadow-[0_12px_40px_rgba(0,174,239,0.18)] transition-all flex flex-col justify-between"
              >
                {/* Subtle top indicator line */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#00AEEF]/0 to-transparent group-hover:via-[#36DFFF] transition-all duration-500" />

                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#07111F] border border-[#00AEEF]/30 flex items-center justify-center text-[#36DFFF] group-hover:border-[#36DFFF] group-hover:bg-[#00AEEF]/10 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider text-[#8A99AD] uppercase bg-[#07111F] px-3 py-1 rounded-full border border-white/5">
                      {interest.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-[#36DFFF] transition-colors">
                    {interest.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#8A99AD] leading-relaxed mb-6">
                    {interest.description}
                  </p>
                </div>

                {/* Technical Competencies / Specs */}
                <div>
                  <div className="text-[11px] font-mono text-[#00AEEF] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>SYSTEM COMPETENCIES</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {interest.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#07111F] border border-white/5 text-[#C7D1DD]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Recruiter Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl bg-gradient-to-br from-[#0E1B2E] via-[#14253F] to-[#07111F] border border-[#36DFFF]/30 p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/20 text-[#36DFFF] text-xs font-mono mb-4">
                <span>RECRUITER NOTE</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-3">
                Ready to Contribute
              </h3>
              <p className="text-sm text-[#C7D1DD] leading-relaxed">
                Equipped with foundational EEE coursework, practical lab demonstrations, safety guidelines, and active industrial exposure from Daffodil Polytechnic Institute.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 relative z-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#36DFFF] hover:text-white transition-colors"
              >
                <span>INITIATE RECRUITMENT DISCUSSIONS</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Circuit Glow Overlay */}
            <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#00AEEF]/10 rounded-full blur-2xl pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
