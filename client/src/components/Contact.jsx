import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Please fill in all required fields (Name, Email, and Message).',
      });
      return;
    }

    setStatus({ submitting: true, error: null, submitted: false });

    // Construct the WhatsApp message exactly as requested
    const prefilledText = `Hello Jahidul Islam Jihad,\nMy name is ${formData.name}.\nI visited your portfolio website and would like to connect with you.\nMessage:\n${formData.message}`;
    const whatsappTargetUrl = `https://wa.me/8801981810157?text=${encodeURIComponent(prefilledText)}`;

    // Post to backend API to persist inquiry (resilient in-memory or MongoDB Atlas)
    try {
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch((err) => {
        console.warn('Backend logging notice (non-blocking):', err);
      });
    } catch (e) {
      // Non-blocking for WhatsApp redirection
    }

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00AEEF', '#36DFFF', '#FFFFFF'],
      });
    } catch (err) {}

    setStatus({ submitting: false, submitted: true, error: null });

    // Open WhatsApp in new tab / redirect
    setTimeout(() => {
      window.open(whatsappTargetUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#07111F] overflow-hidden">
      {/* Blueprint Grid & Circuit Aura */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[#00AEEF]/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1B2E] border border-[#00AEEF]/30 text-xs font-mono text-[#36DFFF] uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>RECRUITER & INDUSTRIAL OUTREACH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            Contact Me
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8A99AD] max-w-2xl">
            Have an open engineering role, plant maintenance opening, or automation project? Let’s connect directly.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00AEEF] to-[#36DFFF] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Recruiter Telemetry & Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Engineer Profile Card */}
            <div className="p-7 rounded-2xl bg-[#0E1B2E] border border-[#36DFFF]/20 shadow-2xl relative overflow-hidden">
              <div className="text-xs font-mono text-[#00AEEF] uppercase tracking-wider mb-2">
                ENGINEER IDENTIFIER
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-1">
                {personal.name}
              </h3>
              <p className="text-sm font-medium text-[#36DFFF] mb-6">
                {personal.title}
              </p>

              <div className="space-y-4 pt-4 border-t border-white/5">
                {/* Phone / WhatsApp */}
                <a
                  href={`https://wa.me/${personal.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#07111F]/70 border border-white/5 hover:border-[#36DFFF]/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00AEEF]/15 flex items-center justify-center text-[#36DFFF] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#8A99AD]">PHONE & WHATSAPP</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#36DFFF] transition-colors">
                      {personal.phone}
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[#07111F]/70 border border-white/5 hover:border-[#36DFFF]/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00AEEF]/15 flex items-center justify-center text-[#36DFFF] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#8A99AD]">OFFICIAL INQUIRY EMAIL</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#36DFFF] transition-colors break-all">
                      {personal.email}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#07111F]/70 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#00AEEF]/15 flex items-center justify-center text-[#36DFFF]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#8A99AD]">PRIMARY LOCATION</div>
                    <div className="text-sm font-semibold text-white">
                      {personal.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Recruitment Response Time */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#8A99AD]">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Clock className="w-3.5 h-3.5" /> Fast Response
                </span>
                <span>Typically under 2 hours</span>
              </div>
            </div>

            {/* Verification Guarantee */}
            <div className="p-5 rounded-xl bg-[#0E1B2E]/50 border border-white/5 flex items-center gap-3.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-xs text-[#8A99AD] leading-relaxed">
                Direct route to personal WhatsApp. No intermediary agencies or delays.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Recruiter Form with Direct WhatsApp Routing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0E1B2E] border border-[#36DFFF]/20 shadow-2xl relative">
              
              <div className="mb-6">
                <span className="text-xs font-mono uppercase text-[#00AEEF] tracking-wider">
                  DIRECT TRANSMISSION
                </span>
                <h3 className="text-2xl font-bold font-display text-white mt-1">
                  Send a Direct Message
                </h3>
                <p className="text-sm text-[#8A99AD] mt-1">
                  Filling this form instantly opens WhatsApp with your preformatted message.
                </p>
              </div>

              {status.error && (
                <div className="mb-6 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
                  {status.error}
                </div>
              )}

              {status.submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Connecting to WhatsApp... Check your new tab or phone app!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-[#C7D1DD] uppercase tracking-wider mb-2"
                  >
                    Your Name / Company *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe / Meghna Power Plant Ltd."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-white/10 text-white placeholder-[#586A82] text-sm focus:outline-none focus:border-[#36DFFF] focus:ring-1 focus:ring-[#36DFFF] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-[#C7D1DD] uppercase tracking-wider mb-2"
                  >
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. recruiter@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-white/10 text-white placeholder-[#586A82] text-sm focus:outline-none focus:border-[#36DFFF] focus:ring-1 focus:ring-[#36DFFF] transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-[#C7D1DD] uppercase tracking-wider mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your engineering role, industrial maintenance requirement, or collaboration details..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-white/10 text-white placeholder-[#586A82] text-sm focus:outline-none focus:border-[#36DFFF] focus:ring-1 focus:ring-[#36DFFF] transition-all resize-none"
                  />
                </div>

                {/* Submit Button: Send via WhatsApp */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-4 px-6 rounded-xl font-mono text-sm font-bold text-[#07111F] bg-gradient-to-r from-[#00AEEF] via-[#36DFFF] to-[#00AEEF] hover:shadow-[0_0_30px_rgba(54,223,255,0.5)] transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {status.submitting ? 'GENERATING PROTOCOL...' : 'SEND VIA WHATSAPP'}
                  </span>
                </button>
              </form>

              {/* WhatsApp Bridge Notice */}
              <div className="mt-5 text-center text-[11px] font-mono text-[#8A99AD]">
                Target: <span className="text-[#36DFFF]">+880 1981-810157</span> (Official WhatsApp Link)
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
