import { useEffect, useRef, useState } from 'react';

export default function DramaticBackground() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0, rootMargin: '50px' }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !isVisible || window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        if (!parallaxRef.current) return;
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const moveX = (clientX - centerX) / 100;
        const moveY = (clientY - centerY) / 100;
        parallaxRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion, isVisible]);

  const shouldAnimate = isVisible && !prefersReducedMotion;

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(251,191,36,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />

      <div ref={parallaxRef} className="absolute inset-0 transition-transform duration-200 ease-out hidden md:block">
        <div className="absolute top-[15%] right-[20%] w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[10%] left-[15%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] animate-float-reverse" />
        <div className="absolute top-[50%] right-[40%] w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] animate-pulse-glow" />

        <div className="absolute top-[20%] left-[15%] animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin-slow">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)]"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 45}deg) translateY(-90px) translateX(-50%)`,
                  }}
                >
                  <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping" />
                </div>
              ))}
            </div>
            <div className="absolute inset-4 rounded-full border-2 border-dashed border-green-400/30 animate-spin-reverse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-[0_0_40px_rgba(6,182,212,0.6)] flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute top-[25%] right-[15%] animate-orbital-slow">
          <div className="relative w-40 h-40">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-24 bg-gradient-to-b from-slate-700 to-slate-800 rounded-lg shadow-[0_0_30px_rgba(6,182,212,0.3)] border-2 border-cyan-400/40">
              <div className="absolute top-2 left-2 right-2 h-16 bg-gradient-to-b from-cyan-500/40 to-blue-600/40 rounded overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-amber-400 rounded-full animate-spin" style={{ borderTopColor: 'transparent' }} />
                </div>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-0.5 bg-green-400/60 animate-scan"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                ))}
              </div>
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-green-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-12 bg-slate-600" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full shadow-2xl border-2 border-cyan-400/30">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-slate-600 to-slate-700" />
            </div>
          </div>
        </div>

        <div className="absolute top-[55%] left-[10%] animate-float-reverse" style={{ animationDelay: '1s' }}>
          <div className="relative w-44 h-44">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-16 bg-gradient-to-b from-slate-600 to-slate-700 rounded-t-xl border-2 border-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse" />
              </div>
              <div className="absolute top-14 left-1/2 -translate-x-1/2 w-3 h-8 bg-slate-600" />
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-16 h-4 bg-gradient-to-b from-slate-600 to-slate-700 rounded border border-cyan-400/30" />
              <div className="absolute top-24 left-1/2 -translate-x-1/2">
                <div className="relative w-32 h-20">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-3 bg-slate-700 rounded-full shadow-xl" />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-t-3xl border-2 border-cyan-400/40 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                    <div className="absolute inset-2 bg-gradient-to-br from-orange-600/60 to-orange-700/60 rounded-t-3xl">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-yellow-300 shadow-[0_0_20px_rgba(253,224,71,0.8)]" />
                      </div>
                    </div>
                  </div>
                  <svg className="absolute top-0 right-0 w-16 h-16 text-cyan-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[20%] right-[20%] animate-orbital-reverse" style={{ animationDelay: '0.7s' }}>
          <div className="relative w-48 h-48">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-cyan-400/40 bg-gradient-to-br from-slate-700 to-slate-800 shadow-[0_0_40px_rgba(6,182,212,0.3)] flex items-center justify-center">
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-amber-400/40 animate-spin-slow" />
              <div className="relative z-10 flex items-center justify-center">
                <svg className="w-12 h-12 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20" />
            </div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg border-2 border-cyan-400/40 shadow-[0_0_30px_rgba(6,182,212,0.3)] rotate-12">
              <div className="absolute inset-2 bg-gradient-to-br from-orange-600 to-orange-700 rounded" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
                <div className="absolute w-3 h-3 bg-red-500 rounded-full top-1/4 left-1/4" />
                <div className="absolute w-2.5 h-2.5 bg-yellow-200 rounded-full bottom-1/4 right-1/3" />
              </div>
              <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-16 h-2 bg-slate-600 rounded-full origin-left rotate-45" />
          </div>
        </div>

        <div className="absolute top-[40%] right-[35%] animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg border-2 border-green-400/40 shadow-[0_0_40px_rgba(16,185,129,0.3)] rotate-12">
              <div className="absolute inset-2 bg-gradient-to-br from-slate-600/80 to-slate-700/80 rounded flex items-center justify-center">
                <svg className="w-16 h-16 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-[0_0_25px_rgba(6,182,212,0.8)] flex items-center justify-center animate-pulse">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 blur-2xl bg-green-500/20" />
          </div>
        </div>

        <div className="absolute bottom-[35%] left-[25%] animate-orbital-slow" style={{ animationDelay: '2s' }}>
          <div className="relative w-36 h-36">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full border-2 border-cyan-400/30 bg-gradient-to-br from-slate-800 to-slate-900 shadow-[0_0_50px_rgba(6,182,212,0.4)]">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-600/30" />
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.8)] flex items-center justify-center">
                  <svg className="w-10 h-10 text-white animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.6" />
              <stop offset="50%" stopColor="rgb(16, 185, 129)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(251, 191, 36)" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path d="M 15% 25% L 35% 20%" stroke="url(#techGradient)" strokeWidth="2" fill="none" className="animate-pulse-slow" />
          <circle cx="15%" cy="25%" r="4" fill="rgb(6, 182, 212)" className="animate-pulse" />
          <circle cx="35%" cy="20%" r="4" fill="rgb(16, 185, 129)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />

          <path d="M 85% 30% L 65% 40%" stroke="url(#techGradient)" strokeWidth="2" fill="none" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <circle cx="85%" cy="30%" r="4" fill="rgb(6, 182, 212)" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="65%" cy="40%" r="4" fill="rgb(251, 191, 36)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />

          <path d="M 20% 70% Q 30% 65%, 40% 70%" stroke="url(#techGradient)" strokeWidth="2" fill="none" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <circle cx="20%" cy="70%" r="4" fill="rgb(16, 185, 129)" className="animate-pulse" style={{ animationDelay: '2s' }} />
          <circle cx="40%" cy="70%" r="4" fill="rgb(6, 182, 212)" className="animate-pulse" style={{ animationDelay: '2.5s' }} />
        </svg>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px),
              linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} />
        </div>

        {shouldAnimate && <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => {
            const colors = ['rgba(6, 182, 212, 0.6)', 'rgba(16, 185, 129, 0.6)', 'rgba(251, 191, 36, 0.6)'];
            return (
              <div
                key={i}
                className="absolute rounded-full animate-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  background: colors[Math.floor(Math.random() * colors.length)],
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${8 + Math.random() * 10}s`,
                  boxShadow: `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`
                }}
              />
            );
          })}
        </div>}

        {shouldAnimate && <div className="absolute inset-0 overflow-hidden opacity-40">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-data-stream"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${100 + Math.random() * 200}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </div>
  );
}
