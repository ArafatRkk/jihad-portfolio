import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on pointer-capable non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]');
      setIsHovered(!!isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smooth lerp for trailing target circle
  useEffect(() => {
    let animationFrame;
    const lerp = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animationFrame = requestAnimationFrame(lerp);
    };
    animationFrame = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <div
        className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            isHovered
              ? 'w-2 h-2 bg-[#36DFFF] shadow-[0_0_12px_#36DFFF]'
              : 'w-1.5 h-1.5 bg-[#00AEEF]'
          }`}
        />
      </div>

      {/* Engineering Reticle Outer Ring */}
      <div
        className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      >
        <div
          className={`relative border rounded-full transition-all duration-300 ${
            isHovered
              ? 'w-10 h-10 border-[#36DFFF] bg-[#36DFFF]/10 scale-125'
              : 'w-7 h-7 border-[#00AEEF]/40 scale-100'
          }`}
        >
          {/* Reticle tick marks */}
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#36DFFF]/50" />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#36DFFF]/50" />
          <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-1 h-0.5 bg-[#36DFFF]/50" />
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-1 h-0.5 bg-[#36DFFF]/50" />
        </div>
      </div>
    </>
  );
}
