import React from 'react';
import { Zap, ArrowUp, MessageCircle } from 'lucide-react';
import { FaLinkedinIn, FaFacebookF, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040B15] border-t border-white/5 py-12 text-[#8A99AD] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-blueprint-subgrid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-8 h-8 rounded-lg bg-[#0E1B2E] border border-[#00AEEF]/40 flex items-center justify-center text-[#36DFFF]">
                <Zap className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">
                {personal.name}
              </span>
            </div>
            <p className="text-xs font-mono text-[#36DFFF]">
              {personal.title}
            </p>
            <p className="text-xs text-[#8A99AD] mt-1">
              Daffodil Polytechnic Institute • Completed September 2026
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#0E1B2E] border border-white/10 flex items-center justify-center text-[#C7D1DD] hover:text-[#36DFFF] hover:border-[#36DFFF]/40 hover:shadow-[0_0_15px_rgba(54,223,255,0.2)] transition-all"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>

            {/* Facebook */}
            <a
              href={personal.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#0E1B2E] border border-white/10 flex items-center justify-center text-[#C7D1DD] hover:text-[#36DFFF] hover:border-[#36DFFF]/40 hover:shadow-[0_0_15px_rgba(54,223,255,0.2)] transition-all"
              aria-label="Facebook Profile"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>

            {/* GitHub */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#0E1B2E] border border-white/10 flex items-center justify-center text-[#C7D1DD] hover:text-[#36DFFF] hover:border-[#36DFFF]/40 hover:shadow-[0_0_15px_rgba(54,223,255,0.2)] transition-all"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${personal.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#0E1B2E] border border-[#00AEEF]/40 flex items-center justify-center text-[#36DFFF] hover:scale-105 hover:shadow-[0_0_15px_rgba(54,223,255,0.3)] transition-all"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0E1B2E] border border-white/10 text-xs font-mono text-[#C7D1DD] hover:text-white hover:border-[#36DFFF]/50 transition-all"
            title="Return to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#36DFFF]" />
          </button>
        </div>

        {/* Copyright & Specs */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#8A99AD] gap-3">
          <div>
            © 2026 Jahidul Islam Jihad. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEM OPERATIONAL
            </span>
            <span>POWER & AUTOMATION ENGINEERING</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
