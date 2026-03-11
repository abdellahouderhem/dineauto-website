import { Shield, CheckCircle2, AlertTriangle, Lock, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import PremiumButton from './PremiumButton';

const FloatingPanel = ({
  title,
  items,
  position,
  delay
}: {
  title: string;
  items: string[];
  position: 'left' | 'right' | 'bottom';
  delay: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const positionClasses = {
    left: 'lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0',
    right: 'lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0',
    bottom: 'lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-0'
  };

  return (
    <div
      className={`relative ${positionClasses[position]} transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Holographic panel */}
      <div className="relative bg-black/40 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-6 lg:p-8 w-full lg:w-80 group hover:border-emerald-400/50 transition-all duration-500">
        {/* Connecting beam effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

        {/* Subtle glow */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/20 to-amber-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

        {/* Content */}
        <div className="relative">
          <h3 className="text-lg lg:text-xl font-bold text-emerald-400 mb-4 tracking-wide uppercase">
            {title}
          </h3>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-slate-300 text-sm lg:text-base">
                <div className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const CinematicCore = () => {
  return (
    <div className="relative w-full h-[600px] lg:h-[700px] flex items-center justify-center">
      {/* Background depth layers */}
      <div className="absolute inset-0">
        {/* Layer 1 - Deepest */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] animate-pulse-slowest" />

        {/* Layer 2 - Mid */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Central Core - Main Focus */}
      <div className="relative z-10">
        {/* Outer ring - slow rotation */}
        <div className="absolute inset-0 animate-spin-very-slow">
          <div className="relative w-64 h-64 lg:w-96 lg:h-96">
            {/* Orbital elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_20px_rgba(52,211,153,0.6)]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.6)]" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_18px_rgba(52,211,153,0.6)]" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-amber-400 rounded-full shadow-[0_0_18px_rgba(251,191,36,0.6)]" />
          </div>
        </div>

        {/* Middle ring - medium rotation */}
        <div className="absolute inset-0 animate-spin-reverse-medium">
          <div className="relative w-64 h-64 lg:w-96 lg:h-96">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-300 rounded-full shadow-[0_0_12px_rgba(110,231,183,0.5)]" />
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-amber-300 rounded-full shadow-[0_0_12px_rgba(252,211,77,0.5)]" />
          </div>
        </div>

        {/* Core shield/vault */}
        <div className="relative w-64 h-64 lg:w-96 lg:h-96 flex items-center justify-center">
          {/* Breathing glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-amber-500/20 rounded-full animate-breathe blur-2xl" />

          {/* Main core structure */}
          <div className="relative">
            {/* Primary shield */}
            <Shield className="w-32 h-32 lg:w-48 lg:h-48 text-emerald-400/90 drop-shadow-[0_0_40px_rgba(52,211,153,0.4)]" strokeWidth={1} />

            {/* Inner lock symbol */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Lock className="w-12 h-12 lg:w-16 lg:h-16 text-amber-400/80 drop-shadow-[0_0_20px_rgba(251,191,36,0.4)] animate-pulse-medium" />
            </div>

            {/* Checkmarks orbiting */}
            <div className="absolute inset-0 animate-spin-slow">
              <CheckCircle2 className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
            </div>

            <div className="absolute inset-0 animate-spin-reverse-slow">
              <Zap className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]" />
            </div>
          </div>

          {/* Hexagonal pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <pattern id="hexagons" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <polygon points="10,0 20,5 20,15 10,20 0,15 0,5" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-emerald-400" />
              </pattern>
              <rect width="100" height="100" fill="url(#hexagons)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Data streams */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-emerald-400/50 to-transparent animate-flow-down" />
        <div className="absolute bottom-1/4 right-1/4 w-px h-32 bg-gradient-to-t from-amber-400/50 to-transparent animate-flow-up" />
      </div>
    </div>
  );
};

export default function GuaranteeSection() {
  const panels = [
    {
      title: "WE GUARANTEE",
      items: [
        "Execution exactly as promised",
        "Transparent performance",
        "Continuous improvement",
        "Direct support"
      ],
      position: 'left' as const
    },
    {
      title: "WE DON'T PROMISE",
      items: [
        "No fake 'overnight success'",
        "No uncontrollable revenue claims",
        "No shortcuts"
      ],
      position: 'right' as const
    },
    {
      title: "OUR COMMITMENT",
      items: [
        "Adjust, improve, or rebuild",
        "Until it meets the agreed standard"
      ],
      position: 'bottom' as const
    }
  ];

  return (
    <section className="relative min-h-screen py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      {/* Deep space background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/20 via-black to-black" />

      {/* Subtle scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(52,211,153,0.02)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Floating headline - Above everything */}
        <div className="text-center mb-12 lg:mb-20 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              A Fair Guarantee.
            </span>
            <span className="block text-white/60 mt-2">
              No Games.
            </span>
          </h2>

          {/* Supporting line with glow */}
          <p className="text-lg lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-400 font-medium animate-shimmer bg-[length:200%_auto]">
            If we don't deliver what we promised — we make it right.
          </p>
        </div>

        {/* Cinematic 3D Core + Floating Panels */}
        <div className="relative mb-20">
          {/* Central core */}
          <CinematicCore />

          {/* Floating panels - hidden on mobile, shown as stack instead */}
          <div className="hidden lg:block">
            {panels.map((panel, index) => (
              <FloatingPanel
                key={index}
                title={panel.title}
                items={panel.items}
                position={panel.position}
                delay={1000 + index * 300}
              />
            ))}
          </div>

          {/* Mobile: Stack panels vertically */}
          <div className="lg:hidden space-y-6 mt-12">
            {panels.map((panel, index) => (
              <div key={index} className="relative bg-black/40 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-emerald-400 mb-4 tracking-wide uppercase">
                  {panel.title}
                </h3>
                <ul className="space-y-3">
                  {panel.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Power statement */}
        <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
          <p className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight">
            We don't win when you sign.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
              We win when your restaurant grows.
            </span>
          </p>
        </div>

        {/* Premium CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '2s' }}>
          <div className="inline-block">
            <PremiumButton
              to="/book-a-call"
              variant="primary"
              className="text-base lg:text-lg px-10 lg:px-14 py-4 lg:py-5 shadow-[0_0_40px_rgba(52,211,153,0.3)] hover:shadow-[0_0_60px_rgba(52,211,153,0.5)] transition-all duration-500"
            >
              Book a Free Strategy Call
            </PremiumButton>
            <p className="text-slate-400 text-sm mt-4">
              No pressure. No commitment. Just clarity.
            </p>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
        }

        @keyframes pulse-slowest {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.08);
          }
        }

        @keyframes pulse-medium {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes spin-very-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse-slow {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes spin-reverse-medium {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes flow-down {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        @keyframes flow-up {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }

        .animate-breathe {
          animation: breathe 6s ease-in-out infinite;
        }

        .animate-pulse-slowest {
          animation: pulse-slowest 10s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-pulse-medium {
          animation: pulse-medium 3s ease-in-out infinite;
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 40s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }

        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 30s linear infinite;
        }

        .animate-spin-reverse-medium {
          animation: spin-reverse-medium 20s linear infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }

        .animate-flow-down {
          animation: flow-down 4s ease-in-out infinite;
        }

        .animate-flow-up {
          animation: flow-up 4s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
