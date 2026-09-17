import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Mail, Phone, MapPin, Award, CheckCircle2, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CVModal({ isOpen, onClose }) {
  const { personal, about, careerInterests, strengths, professionalDevelopment } = portfolioData;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
        
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0E1B2E] border border-[#36DFFF]/30 rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#07111F] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#36DFFF] animate-pulse" />
              <span className="text-xs font-mono text-[#36DFFF] uppercase tracking-wider font-semibold">
                CURRICULUM VITAE // DIGITAL PREVIEW
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono text-white bg-[#14253F] border border-white/10 hover:border-[#36DFFF] transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-[#36DFFF]" />
                <span className="hidden sm:inline">PRINT / SAVE PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-[#14253F] border border-white/10 text-[#8A99AD] hover:text-white transition-colors"
                title="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable CV Document Content */}
          <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto bg-[#0A1626] text-[#C7D1DD] space-y-8 print:bg-white print:text-black">
            
            {/* Header / Contact */}
            <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold font-display text-white print:text-black">
                  {personal.name}
                </h1>
                <p className="text-base text-[#36DFFF] font-medium mt-0.5 print:text-blue-700">
                  {personal.title}
                </p>
                <p className="text-xs font-mono text-[#8A99AD] mt-1 print:text-gray-600">
                  {personal.institution} • Completed {personal.graduationDate}
                </p>
              </div>

              <div className="text-xs font-mono space-y-1 text-[#8A99AD] print:text-gray-700">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#36DFFF]" />
                  <span>{personal.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#36DFFF]" />
                  <span>{personal.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#36DFFF]" />
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#00AEEF] mb-2 font-bold print:text-blue-700">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-sm text-[#C7D1DD] leading-relaxed print:text-gray-800">
                {about.bio}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#00AEEF] mb-3 font-bold print:text-blue-700">
                EDUCATION
              </h2>
              <div className="p-4 rounded-xl bg-[#0E1B2E] border border-white/5 print:border-gray-300 print:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-bold text-white print:text-black">
                      Diploma in Electrical Engineering (EEE)
                    </h3>
                    <p className="text-xs font-medium text-[#36DFFF] print:text-blue-600">
                      Daffodil Polytechnic Institute
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#8A99AD] print:text-gray-600">
                    Completed September 2026
                  </span>
                </div>
                <p className="text-xs text-[#8A99AD] mt-2 leading-relaxed print:text-gray-700">
                  Major focus on Power Systems, Industrial Automation, Electrical Maintenance, Transformer Maintenance, PLC programming, Substation Protection, and Switchgear Operations.
                </p>
              </div>
            </div>

            {/* Core Competencies & Interests */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#00AEEF] mb-3 font-bold print:text-blue-700">
                ENGINEERING COMPETENCIES & DOMAINS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {careerInterests.map((interest) => (
                  <div
                    key={interest.id}
                    className="p-3 rounded-lg bg-[#0E1B2E] border border-white/5 print:border-gray-300 print:bg-gray-50"
                  >
                    <div className="text-xs font-bold text-white mb-1 print:text-black">
                      {interest.title}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {interest.specs.map((s, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#07111F] text-[#36DFFF] print:text-blue-700 print:bg-gray-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Development & Specialized Sessions */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#00AEEF] mb-3 font-bold print:text-blue-700">
                PROFESSIONAL DEVELOPMENT SESSIONS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {professionalDevelopment.map((s) => (
                  <div
                    key={s.id}
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-[#0E1B2E] border border-white/5 text-xs text-[#C7D1DD] print:border-gray-300 print:bg-gray-50 print:text-black"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36DFFF] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white print:text-black">{s.title}</span>
                      <span className="text-[#8A99AD] text-[11px] block mt-0.5">({s.badge})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#00AEEF] mb-2 font-bold print:text-blue-700">
                CORE ATTRIBUTES & STRENGTHS
              </h2>
              <div className="flex flex-wrap gap-2">
                {strengths.map((st, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-[#0E1B2E] border border-white/10 text-white print:border-gray-400 print:text-black"
                  >
                    {st.title}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Action */}
          <div className="px-6 py-4 bg-[#07111F] border-t border-white/10 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-mono text-[#C7D1DD] hover:text-white transition-colors"
            >
              CLOSE
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-mono font-bold text-[#07111F] bg-gradient-to-r from-[#00AEEF] to-[#36DFFF] hover:shadow-[0_0_20px_rgba(54,223,255,0.4)] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>PRINT OR SAVE AS PDF</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
