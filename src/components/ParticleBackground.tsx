import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationId: number;
    let W = 0, H = 0, dpr = 1;
    let nodes: Node[] = [];
    let mouseX = -9999, mouseY = -9999;

    const isMobile = () => window.innerWidth < 768;
    const getCount = () => (isMobile() ? 28 : 50);
    const getBottomCount = () => (isMobile() ? 6 : 12);
    const getMaxDist = () => (isMobile() ? 120 : 150);
    const MOUSE_RADIUS = 180;

    const createNode = (w: number, h: number, bottomOnly = false): Node => {
      const bvx = (Math.random() - 0.5) * 0.3;
      const bvy = (Math.random() - 0.5) * 0.25;
      const y = bottomOnly
        ? Math.random() * h * 0.4 + h * 0.6
        : Math.random() < 0.65 ? Math.random() * h * 0.6 : Math.random() * h;
      return {
        x: Math.random() * w,
        y,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.4 + 0.3,
        vx: bvx,
        vy: bvy,
        baseVx: bvx,
        baseVy: bvy,
      };
    };

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
      nodes = [
        ...Array.from({ length: getCount() }, () => createNode(W, H, false)),
        ...Array.from({ length: getBottomCount() }, () => createNode(W, H, true)),
      ];
    };

    const drawGlow = () => {
      const grd = ctx.createRadialGradient(W * 0.5, H * 0.05, 0, W * 0.5, H * 0.05, Math.max(W, H) * 0.7);
      grd.addColorStop(0,   'rgba(34,197,94,0.07)');
      grd.addColorStop(0.4, 'rgba(13,59,34,0.04)');
      grd.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);
    };

    const drawFrame = (doAnimate: boolean) => {
      ctx.clearRect(0, 0, W, H);
      drawGlow();

      const maxDist = getMaxDist();
      const maxDist2 = maxDist * maxDist;
      const mobile = isMobile();
      const hasMouseInteraction = !mobile && mouseX >= 0;

      // --- Node-to-node lines (drawn first, below nodes) ---
      ctx.shadowBlur = 4;
      ctx.shadowColor = 'rgba(34,197,94,0.4)';
      ctx.lineWidth = 0.7;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < maxDist2) {
            const lineOpacity = (1 - Math.sqrt(dist2) / maxDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(34,197,94,${lineOpacity.toFixed(3)})`;
            ctx.stroke();
          }
        }
      }

      // --- Mouse-to-node lines (desktop only) ---
      if (hasMouseInteraction) {
        const mr2 = MOUSE_RADIUS * MOUSE_RADIUS;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(34,197,94,0.6)';
        ctx.lineWidth = 0.9;
        for (const n of nodes) {
          const dx = mouseX - n.x, dy = mouseY - n.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < mr2) {
            const dist = Math.sqrt(dist2);
            const lineOpacity = (1 - dist / MOUSE_RADIUS) * 0.5;
            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(n.x, n.y);
            ctx.strokeStyle = `rgba(34,197,94,${lineOpacity.toFixed(3)})`;
            ctx.stroke();
          }
        }
      }
      ctx.shadowBlur = 0;

      // --- Nodes (drawn last, on top of lines) ---
      for (const n of nodes) {
        if (doAnimate) {
          // Soft mouse gravity: smoothly pull toward cursor, spring back when away
          let targetVx = n.baseVx;
          let targetVy = n.baseVy;
          if (hasMouseInteraction) {
            const dx = mouseX - n.x, dy = mouseY - n.y;
            const dist2 = dx * dx + dy * dy;
            if (dist2 < MOUSE_RADIUS * MOUSE_RADIUS) {
              const dist = Math.sqrt(dist2) || 1;
              const strength = (1 - dist / MOUSE_RADIUS) * 0.38;
              targetVx = n.baseVx + (dx / dist) * strength;
              targetVy = n.baseVy + (dy / dist) * strength;
            }
          }
          // Lerp current velocity toward target — creates smooth pull + spring-back
          n.vx += (targetVx - n.vx) * 0.08;
          n.vy += (targetVy - n.vy) * 0.08;

          n.x += n.vx;
          n.y += n.vy;

          if (n.x < -10) n.x = W + 10;
          else if (n.x > W + 10) n.x = -10;
          if (n.y < -10) n.y = H + 10;
          else if (n.y > H + 10) n.y = -10;
        }

        // Glowing dot — shadowBlur varies with node size for a natural bloom
        ctx.shadowBlur = 12 + n.size * 2;
        ctx.shadowColor = '#22c55e';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34,197,94,${n.opacity.toFixed(3)})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const loop = () => {
      drawFrame(true);
      animationId = requestAnimationFrame(loop);
    };

    resize();
    prefersReducedMotion ? drawFrame(false) : loop();

    const onMouseMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    const onMouseLeave = () => { mouseX = -9999; mouseY = -9999; };

    if (!isMobile()) {
      window.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseleave', onMouseLeave);
    }
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        backgroundColor: '#0a0a0a',
        backgroundImage:
          'linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
}
