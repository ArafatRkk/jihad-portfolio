import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import CircuitCanvas from './components/CircuitCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CareerInterests from './components/CareerInterests';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#07111F] text-[#FFFFFF] overflow-x-hidden selection:bg-[#00AEEF] selection:text-[#07111F]">
      
      {/* 1. Loading sequence with EEE Oscilloscope & Calibration */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* 2. Custom Engineering Reticle Cursor (Desktop) */}
      <CustomCursor />

      {/* 3. Top Scroll Voltage Progress Line */}
      <ScrollProgress />

      {/* 4. Interactive Background Electrical Circuit Canvas */}
      <CircuitCanvas />

      {/* 5. Sticky Navigation Bar */}
      <Navbar onOpenCV={() => setIsCVOpen(true)} />

      {/* 6. Main Sections */}
      <main className="relative z-10">
        <Hero onOpenCV={() => setIsCVOpen(true)} />
        <About />
        <CareerInterests />
        <Timeline />
        <Contact />
      </main>

      {/* 7. Minimal Premium Footer */}
      <Footer />

      {/* 8. Digital CV Preview & Print Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
