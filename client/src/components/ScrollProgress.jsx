import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const percent = Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100);
        setScrollPercent(percent);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-1 bg-[#07111F]/60">
      <div
        className="h-full bg-gradient-to-r from-[#00AEEF] via-[#36DFFF] to-[#00AEEF] transition-all duration-100 ease-out shadow-[0_0_10px_#36DFFF]"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
}
