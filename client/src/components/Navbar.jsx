import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Zap, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenCV }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'career', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Me', href: '#about', id: 'about' },
    { name: 'Contact Me', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07111F]/90 backdrop-blur-md border-b border-[#36DFFF]/15 py-3 shadow-[0_4px_24px_rgba(7,17,31,0.8)]'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="group flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-lg bg-[#0E1B2E] border border-[#00AEEF]/40 flex items-center justify-center text-[#36DFFF] group-hover:border-[#36DFFF] group-hover:shadow-[0_0_15px_rgba(54,223,255,0.4)] transition-all">
            <Zap className="w-5 h-5 text-[#36DFFF] transition-transform group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-white text-base tracking-tight flex items-center gap-1.5">
              Jahidul Islam Jihad
              <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
            </span>
            <span className="text-[11px] font-mono text-[#8A99AD] tracking-wider uppercase">
              EEE Graduate • Sept 2026
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0E1B2E]/60 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-[#C7D1DD] hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00AEEF]/20 to-[#36DFFF]/20 border border-[#36DFFF]/40 shadow-[0_0_12px_rgba(0,174,239,0.3)] -z-10" />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenCV}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium text-[#C7D1DD] bg-[#0E1B2E] border border-[#00AEEF]/30 hover:border-[#36DFFF] hover:text-white hover:shadow-[0_0_15px_rgba(0,174,239,0.25)] transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-[#36DFFF]" />
            <span>DOWNLOAD CV</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium font-mono text-[#07111F] bg-gradient-to-r from-[#00AEEF] to-[#36DFFF] hover:from-[#36DFFF] hover:to-[#00AEEF] shadow-[0_0_20px_rgba(0,174,239,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            <span>GET IN TOUCH</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenCV}
            className="p-2 rounded-lg bg-[#0E1B2E] border border-[#00AEEF]/30 text-[#36DFFF]"
            title="Download CV"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#0E1B2E] border border-white/10 text-white hover:border-[#00AEEF] transition-all"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Responsive Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07111F]/95 backdrop-blur-xl border-b border-[#36DFFF]/20 px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`flex items-center justify-between p-3 rounded-xl text-base font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-[#00AEEF]/15 border border-[#36DFFF]/40 text-white'
                    : 'text-[#C7D1DD] hover:bg-white/5'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#36DFFF]" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-mono font-medium text-white bg-[#0E1B2E] border border-[#00AEEF]/40"
              >
                <FileText className="w-4 h-4 text-[#36DFFF]" />
                <span>DOWNLOAD CV</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-mono font-medium text-[#07111F] bg-gradient-to-r from-[#00AEEF] to-[#36DFFF]"
              >
                <span>CONTACT VIA WHATSAPP</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
