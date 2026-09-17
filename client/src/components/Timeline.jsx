import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Bot, 
  Building2, 
  Globe2, 
  HeartHandshake, 
  BrainCircuit, 
  FileCheck2, 
  Milestone 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Timeline() {
  const { professionalDevelopment } = portfolioData;

  const sessionIcons = [
    FileCheck2,      // CV Building Session
    BrainCircuit,    // AptiQ Session
    HeartHandshake,  // Art of Living Session
    Globe2,          // Study Abroad Session
    Bot,             // Robotics Session
    Building2,       // Electrical Industry Visit Session
  ];

  return (
    <section id="timeline" className="py-24 relative bg-[#07111F] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-blueprint-subgrid opacity-30 pointer-events-none" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#36DFFF]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1B2E] border border-[#00AEEF]/30 text-xs font-mono text-[#36DFFF] uppercase tracking-widest mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>CONTINUOUS LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            Professional Development & Learning
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8A99AD] max-w-2xl">
            Proactive participation in specialized industry workshops, technical sessions, and hands-on operational tours during academic tenure at Daffodil Polytechnic Institute.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00AEEF] to-[#36DFFF] rounded-full mt-4" />
        </div>

        {/* Vertical Electrical Conduit Timeline */}
        <div className="relative">
          
          {/* Central Conduit Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#00AEEF] via-[#36DFFF] to-[#00AEEF]/20 shadow-[0_0_12px_rgba(54,223,255,0.4)]" />

          <div className="space-y-10 sm:space-y-12">
            {professionalDevelopment.map((session, idx) => {
              const Icon = sessionIcons[idx] || CheckCircle;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={session.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Central Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#07111F] border-2 border-[#36DFFF] shadow-[0_0_15px_#36DFFF] flex items-center justify-center z-20 group">
                    <div className="w-3 h-3 rounded-full bg-[#00AEEF] group-hover:scale-125 transition-transform" />
                  </div>

                  {/* Card Content (Occupies half width on desktop) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pl-12' : 'md:pr-12'
                    } w-full`}
                  >
                    <div className="group rounded-2xl bg-[#0E1B2E]/90 border border-white/10 hover:border-[#00AEEF]/60 p-6 shadow-xl hover:shadow-[0_12px_36px_rgba(0,174,239,0.2)] transition-all">
                      
                      {/* Badge & Order */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#36DFFF] bg-[#00AEEF]/10 border border-[#36DFFF]/20 px-3 py-0.5 rounded-full">
                          {session.badge}
                        </span>
                        <span className="text-xs font-mono text-[#8A99AD]">
                          STAGE 0{idx + 1}
                        </span>
                      </div>

                      {/* Header with Icon */}
                      <div className="flex items-center gap-3.5 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#07111F] border border-[#00AEEF]/30 flex items-center justify-center text-[#36DFFF] group-hover:border-[#36DFFF] group-hover:bg-[#00AEEF]/15 transition-all flex-shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold font-display text-white group-hover:text-[#36DFFF] transition-colors">
                          {session.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[#8A99AD] leading-relaxed mb-4">
                        {session.description}
                      </p>

                      {/* Tags */}
                      {session.skills && session.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                          {session.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#07111F] text-[#C7D1DD] border border-white/5"
                            >
                              #{skill}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
