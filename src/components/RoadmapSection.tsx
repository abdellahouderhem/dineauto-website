import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

const roadmapSteps = [
  {
    number: 1,
    side: 'right',
    title: 'Step 1 — Professional Content',
    description: 'You snap a photo with your phone. We turn it into studio-quality videos with custom music. No photographer needed.',
  },
  {
    number: 2,
    side: 'left',
    title: 'Step 2 — Targeted Ads',
    description: 'We run ads with that content using proven strategies that bring customers in at the lowest possible cost.',
  },
  {
    number: 3,
    side: 'right',
    title: 'Step 3 — 24/7 AI Reservation Machine',
    description: 'Our AI answers customer questions instantly and handles bookings around the clock. No missed calls. No lost reservations.',
  },
  {
    number: 4,
    side: 'left',
    title: 'Step 4 — Automatic Review Generation',
    description: 'After every visit we send automatic review requests. Our AI responds to reviews. More 5-stars means stronger SEO and more trust.',
  },
  {
    number: 5,
    side: 'right',
    title: 'Step 5 — Customer Comeback System',
    description: 'We automatically send personalized offers to bring customers back again and again. Higher visits. More revenue. Better lifetime value.',
  },
];

function RoadmapStop({ step, index }: { step: typeof roadmapSteps[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const stopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (stopRef.current) {
      observer.observe(stopRef.current);
    }

    return () => {
      if (stopRef.current) {
        observer.unobserve(stopRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={stopRef}
      className={`relative z-10 transition-all duration-1000 delay-${index * 100} ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : step.side === 'right'
          ? 'opacity-0 translate-x-12'
          : 'opacity-0 -translate-x-12'
      }`}
    >
      <div className={`flex ${step.side === 'left' ? 'flex-row-reverse' : 'flex-row'} items-center gap-4 md:gap-8 mb-20 md:mb-32`}>
        <div className={`flex-1 ${step.side === 'left' ? 'text-right' : 'text-left'}`}>
          <div className={`flex ${step.side === 'left' ? 'justify-end' : 'justify-start'} mb-6`}>
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/30 rounded-full blur-xl animate-pulse" />
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-[0_0_40px_rgba(34,197,94,0.5)]">
                {step.number}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-radial from-green-500/40 via-green-500/20 to-transparent rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-700 animate-pulse-slow" />

            <div className="absolute -inset-1 bg-gradient-to-r from-green-400/30 via-green-500/30 to-green-400/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500" />

            <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black border-2 border-green-500/20 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(34,197,94,0.15),0_20px_60px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_80px_rgba(34,197,94,0.25),0_25px_70px_rgba(0,0,0,0.9)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5 opacity-50" />

              <div className="aspect-video w-full relative flex items-center justify-center bg-black/50">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-all duration-300">
                    <Play className="text-green-400 group-hover:scale-110 transition-transform duration-300" size={32} fill="currentColor" />
                  </div>
                  <p className="text-gray-400 text-sm md:text-base font-semibold">VIDEO COMING SOON</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-green-500/15 rounded-full blur-2xl" />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mt-6 mb-3">{step.title}</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md mx-auto">{step.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function RoadmapSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            One System. Five Steps.{' '}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Total Restaurant Growth.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Here is exactly what we build for you — from start to finish.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-32 md:w-48">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#1f2937', stopOpacity: 0.8 }} />
                  <stop offset="50%" style={{ stopColor: '#374151', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#1f2937', stopOpacity: 0.8 }} />
                </linearGradient>
              </defs>
              <path
                d="M 60,0 Q 100,100 60,200 T 60,400 Q 20,500 60,600 T 60,800 Q 100,900 60,1000 T 60,1200 Q 20,1300 60,1400 T 60,1600"
                fill="url(#roadGradient)"
                className="drop-shadow-2xl"
              />
              <path
                d="M 60,0 Q 100,100 60,200 T 60,400 Q 20,500 60,600 T 60,800 Q 100,900 60,1000 T 60,1200 Q 20,1300 60,1400 T 60,1600"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="20 30"
                strokeLinecap="round"
                opacity="0.4"
                className="animate-road-dash"
              />
            </svg>
          </div>

          <div className="relative">
            {roadmapSteps.map((step, index) => (
              <RoadmapStop key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-32 text-center space-y-8">
          <p className="text-2xl md:text-3xl text-gray-400 leading-relaxed">
            From doing everything manually and losing money at every step…
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 leading-tight">
            To a system that runs itself and grows your restaurant while you focus on the food.
          </p>

          <div className="pt-8">
            <a
              href="https://funnel.dineauto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-5 text-lg md:text-xl font-bold text-black bg-gradient-to-r from-green-400 to-green-600 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,197,94,0.6)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">Watch the Full Case Study — See It In Action</span>
              <svg className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-green-400/30 blur-2xl rounded-full animate-pulse-slow" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes road-dash {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -50;
          }
        }
        .animate-road-dash {
          animation: road-dash 2s linear infinite;
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          svg path {
            d: path("M 60,0 L 60,1600");
          }
        }
      `}</style>
    </section>
  );
}
