import React, { useEffect, useRef } from 'react';

/**
 * CircuitCanvas: Renders an engineering PCB/circuit trace background
 * with nodes, animated voltage pulses, and subtle grid lines.
 */
export default function CircuitCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNetwork();
    };

    window.addEventListener('resize', handleResize);

    // Nodes & Lines configuration
    const NODE_COUNT = Math.min(Math.floor((width * height) / 22000), 55);
    let nodes = [];
    let pulses = [];

    const initNetwork = () => {
      nodes = [];
      pulses = [];

      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 1.2,
          isHub: Math.random() > 0.85,
        });
      }

      // Pre-seed some active pulses
      for (let i = 0; i < 8; i++) {
        addPulse();
      }
    };

    function addPulse() {
      if (nodes.length < 2) return;
      const startIdx = Math.floor(Math.random() * nodes.length);
      let endIdx = Math.floor(Math.random() * nodes.length);
      while (endIdx === startIdx) {
        endIdx = Math.floor(Math.random() * nodes.length);
      }

      pulses.push({
        start: nodes[startIdx],
        end: nodes[endIdx],
        progress: 0,
        speed: 0.006 + Math.random() * 0.009,
        color: Math.random() > 0.3 ? '#36DFFF' : '#00AEEF',
      });
    }

    initNetwork();

    let lastPulseTime = 0;

    const render = (time) => {
      ctx.clearRect(0, 0, width, height);

      // Spawn periodic pulses
      if (time - lastPulseTime > 700) {
        if (pulses.length < 16) {
          addPulse();
        }
        lastPulseTime = time;
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isHub ? '#36DFFF' : 'rgba(0, 174, 239, 0.45)';
        ctx.fill();

        if (node.isHub) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 3, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(54, 223, 255, 0.2)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw circuit connections (manhattan or direct lines)
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.16;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 174, 239, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw & update voltage pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const currX = pulse.start.x + (pulse.end.x - pulse.start.x) * pulse.progress;
        const currY = pulse.start.y + (pulse.end.y - pulse.start.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(currX, currY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = pulse.color;
        ctx.shadowColor = pulse.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
