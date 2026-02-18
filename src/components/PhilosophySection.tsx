import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import PremiumButton from './PremiumButton';

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const principles = [
    "We never position ourselves as \"the best.\"",
    "We position ourselves as reliable, disciplined, and accountable.",
    "Every system we build is designed to work in the real world — not on slides.",
    "If something doesn't meet expectations, we fix it.",
    "If it works, we optimize it.",
    "Our goal isn't hype — it's long-term restaurant growth.",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 3D Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-500/10 via-amber-500/10 to-green-500/10 rounded-full blur-[120px] animate-pulse" />

        {/* Floating grid lines - simulating 3D depth */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: 0,
                right: 0,
                transform: `perspective(1000px) rotateX(60deg) translateZ(${i * 20}px)`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Floating particles - data flow */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `particle-flow ${5 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Main Content Container */}
          <div className="relative">
            {/* 3D Floating Badge - "Under-Promise → Over-Deliver" */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-amber-400/20 to-green-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="relative px-8 py-3 rounded-full bg-gradient-to-r from-gray-900 via-black to-gray-900 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <span className="text-gray-400">Under-Promise</span>
                    <ArrowRight className="text-green-500" size={16} />
                    <span className="text-green-400">Over-Deliver</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Card */}
            <div className="relative p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 border border-gray-800/50 backdrop-blur-xl overflow-hidden">
              {/* Inner glow effects */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />

              {/* Content */}
              <div className="relative z-10">
                {/* Mobile badge */}
                <div className="md:hidden text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-green-500/30 text-sm font-semibold">
                    <span className="text-gray-400">Under-Promise</span>
                    <ArrowRight className="text-green-500" size={14} />
                    <span className="text-green-400">Over-Deliver</span>
                  </div>
                </div>

                {/* Headline */}
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-[1.15] py-3 px-4 break-words">
                    We Don't Promise Miracles.
                    <br />
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      We Promise Execution.
                    </span>
                  </h2>

                  <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                    Most agencies sell big promises. We do the opposite — we set clear expectations,
                    focus on execution, and aim to deliver more than we ever promise.
                  </p>
                </div>

                {/* Principles Grid */}
                <div className="max-w-4xl mx-auto mb-10 md:mb-12">
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    {principles.map((principle, index) => (
                      <div
                        key={index}
                        className="group relative"
                        style={{
                          animation: `fade-in-up 0.6s ease-out forwards`,
                          animationDelay: `${0.1 + index * 0.1}s`,
                          opacity: 0,
                        }}
                      >
                        <div className="absolute -inset-px bg-gradient-to-r from-green-500/20 to-amber-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm h-full">
                          <div className="flex gap-3 items-start">
                            <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={20} />
                            <p className="text-gray-300 text-base leading-relaxed">
                              {principle}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Closing Statement */}
                <div className="text-center mb-10">
                  <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-green-400 via-amber-400 to-green-400 bg-clip-text text-transparent">
                    Our reputation is built on results, not claims.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <PremiumButton to="/services" variant="primary">
                    See How We Actually Work
                  </PremiumButton>
                  <PremiumButton to="/pricing" variant="ghost">
                    Our Process
                  </PremiumButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: perspective(1000px) rotateX(60deg) translateZ(0px) translateY(0);
          }
          50% {
            transform: perspective(1000px) rotateX(60deg) translateZ(0px) translateY(-10px);
          }
        }

        @keyframes particle-flow {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100vh) translateX(20px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
