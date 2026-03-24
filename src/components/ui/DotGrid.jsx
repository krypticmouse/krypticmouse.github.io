import { useEffect, useRef } from 'react';

export default function DotGrid({ variant = 'light' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rgb = variant === 'dark' ? '255,255,255' : '0,0,0';

    const SPACING = 32;
    const BASE_R = 1;
    const PEAK_R = 2.6;
    const BASE_ALPHA = 0.055;
    const PEAK_ALPHA = 0.22;
    const INFLUENCE = 160;
    const PUSH = 6;

    let w = 0;
    let h = 0;
    let visible = true;
    let running = true;
    let time = 0;
    const mouse = { x: -9999, y: -9999, active: false };

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      if (!running) return;
      requestAnimationFrame(draw);
      if (!visible) return;
      time += 0.008;

      ctx.clearRect(0, 0, w, h);

      const cols = Math.ceil(w / SPACING) + 1;
      const rows = Math.ceil(h / SPACING) + 1;
      const ox = (w - (cols - 1) * SPACING) / 2;
      const oy = (h - (rows - 1) * SPACING) / 2;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const bx = ox + col * SPACING;
          const by = oy + row * SPACING;

          const wave =
            Math.sin(bx * 0.012 + time * 1.1) *
            Math.cos(by * 0.012 + time * 0.7) *
            2;

          let px = bx;
          let py = by + wave;
          let r = BASE_R;
          let alpha = BASE_ALPHA;

          if (mouse.active) {
            const dx = mouse.x - bx;
            const dy = mouse.y - by;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < INFLUENCE) {
              const t = 1 - dist / INFLUENCE;
              const ease = t * t * (3 - 2 * t);

              r = BASE_R + (PEAK_R - BASE_R) * ease;
              alpha = BASE_ALPHA + (PEAK_ALPHA - BASE_ALPHA) * ease;

              if (dist > 1) {
                px -= (dx / dist) * PUSH * ease;
                py -= (dy / dist) * PUSH * ease;
              }
            }
          }

          ctx.beginPath();
          ctx.arc(px, py, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
          ctx.fill();
        }
      }
    }

    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; };
    const onTouch = (e) => {
      const t = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      mouse.x = t.clientX - rect.left;
      mouse.y = t.clientY - rect.top;
      mouse.active = true;
    };

    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);
    canvas.addEventListener('touchmove', onTouch, { passive: true });
    canvas.addEventListener('touchend', onLeave);

    const obs = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    obs.observe(canvas);

    requestAnimationFrame(draw);

    return () => {
      running = false;
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
      canvas.removeEventListener('touchmove', onTouch);
      canvas.removeEventListener('touchend', onLeave);
      obs.disconnect();
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  );
}
