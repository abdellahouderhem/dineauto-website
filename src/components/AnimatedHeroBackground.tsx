import { useEffect, useRef, useState } from 'react';
import {
  Calendar,
  MessageSquare,
  Phone,
  Star,
  UtensilsCrossed,
  Clock,
  Sparkles,
  Bot
} from 'lucide-react';

export default function AnimatedHeroBackground() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
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
      { threshold: 0 }
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
        const moveX = (clientX - centerX) / 80;
        const moveY = (clientY - centerY) / 80;
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
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div ref={parallaxRef} className="absolute inset-0 transition-transform duration-200 ease-out hidden lg:block">
        {/* AI Robot Hologram */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] animate-float-slow">
          <div className="relative w-full h-full">
            {/* Robot Core */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/20 to-green-500/20 backdrop-blur-3xl animate-pulse-glow" />

            {/* Robot Body */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <Bot className="text-amber-400 w-32 h-32 animate-float drop-shadow-[0_0_30px_rgba(251,191,36,0.6)]" />
                <div className="absolute inset-0 blur-2xl bg-amber-400/40 animate-pulse" />
              </div>
            </div>

            {/* Orbiting Elements */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8">
                <UtensilsCrossed className="text-green-400 w-8 h-8 animate-float-reverse drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]" />
              </div>
            </div>

            <div className="absolute inset-0 animate-spin-reverse">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8">
                <Calendar className="text-amber-400 w-8 h-8 animate-float drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Restaurant Elements */}
        <FloatingElement icon={MessageSquare} delay="0s" x="15%" y="20%" color="amber" label="AI Chat" />
        <FloatingElement icon={Phone} delay="2s" x="20%" y="60%" color="green" label="Voice Agent" />
        <FloatingElement icon={Star} delay="4s" x="80%" y="30%" color="amber" label="5-Star Reviews" />
        <FloatingElement icon={Clock} delay="1s" x="75%" y="70%" color="green" label="24/7 Active" />
        <FloatingElement icon={Calendar} delay="3s" x="10%" y="80%" color="amber" label="Reservations" />
        <FloatingElement icon={Sparkles} delay="5s" x="85%" y="15%" color="green" label="AI Powered" />

        {/* Holographic Text Labels */}
        <HolographicLabel text="24/7 AI Assistant" x="12%" y="15%" delay="0s" />
        <HolographicLabel text="Instant Booking" x="78%" y="25%" delay="1s" />
        <HolographicLabel text="Smart Upselling" x="15%" y="75%" delay="2s" />
        <HolographicLabel text="Guest Intelligence" x="82%" y="65%" delay="3s" />

        {/* Particle Effects */}
        {shouldAnimate && <Particles />}

        {/* Neon Grid Lines */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse-slow" />
          <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-400/50 to-transparent animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green-400/50 to-transparent animate-pulse-slow" style={{ animationDelay: '3s' }} />
        </div>

        {/* Ambient Glow Orbs */}
        <div className="absolute top-[20%] left-[30%] w-[300px] h-[300px] bg-amber-500/20 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-[20%] right-[25%] w-[350px] h-[350px] bg-green-500/20 rounded-full blur-[100px] animate-float-reverse" />
      </div>
    </div>
  );
}

function FloatingElement({
  icon: Icon,
  delay,
  x,
  y,
  color,
  label
}: {
  icon: any;
  delay: string;
  x: string;
  y: string;
  color: 'amber' | 'green';
  label: string;
}) {
  const colorClass = color === 'amber' ? 'text-amber-400' : 'text-green-400';
  const glowColor = color === 'amber' ? 'rgba(251,191,36,0.6)' : 'rgba(34,197,94,0.6)';

  return (
    <div
      className="absolute group"
      style={{
        left: x,
        top: y,
        animation: `float 6s ease-in-out infinite`,
        animationDelay: delay
      }}
    >
      <div className="relative">
        <div className={`${colorClass} transition-transform group-hover:scale-125 duration-300`}>
          <Icon className="w-12 h-12" style={{ filter: `drop-shadow(0 0 20px ${glowColor})` }} />
        </div>
        <div
          className="absolute inset-0 blur-xl opacity-60"
          style={{ background: glowColor }}
        />

        {/* Label on hover */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          <div className="px-3 py-1 bg-black/80 backdrop-blur-sm border border-amber-400/30 rounded-full text-xs text-amber-400 font-semibold">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

function HolographicLabel({ text, x, y, delay }: { text: string; x: string; y: string; delay: string }) {
  return (
    <div
      className="absolute text-xs font-bold text-amber-400/60 tracking-wider animate-float-slow"
      style={{
        left: x,
        top: y,
        animationDelay: delay,
        textShadow: '0 0 20px rgba(251, 191, 36, 0.5)'
      }}
    >
      {text}
    </div>
  );
}

function Particles() {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-amber-400/40 rounded-full animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
}
