import { useEffect, useState } from 'react';

export default function AnimatedGrid() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
      />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      <div className={`absolute top-0 left-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[80px] hidden md:block ${!prefersReducedMotion && 'animate-pulse'}`} style={{ willChange: 'opacity' }} />
      <div className={`absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[80px] hidden md:block ${!prefersReducedMotion && 'animate-pulse'}`} style={{ animationDelay: '2s', willChange: 'opacity' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] hidden md:block" />
    </div>
  );
}
