import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    side: 'right' as const,
    title: 'Step 1 — Professional Content',
    description:
      'You snap a photo with your phone. We turn it into studio-quality videos with custom music.',
  },
  {
    number: 2,
    side: 'left' as const,
    title: 'Step 2 — Targeted Ads',
    description:
      'We run ads with that content using proven strategies that bring customers in at the lowest possible cost.',
  },
  {
    number: 3,
    side: 'right' as const,
    title: 'Step 3 — 24/7 AI Reservation Machine',
    description:
      'Our AI answers questions and handles bookings around the clock. No missed calls. No lost reservations.',
  },
  {
    number: 4,
    side: 'left' as const,
    title: 'Step 4 — Automatic Review Generation',
    description:
      'After every visit automatic review requests go out. Our AI responds. More 5-stars means stronger SEO and more trust.',
  },
  {
    number: 5,
    side: 'right' as const,
    title: 'Step 5 — Customer Comeback System',
    description:
      'Automated personalized offers bring customers back again and again. More visits. More revenue. Higher lifetime value.',
  },
];

function useInView(threshold = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => { if (ref.current) obs.unobserve(ref.current); };
  }, [threshold]);
  return { ref, inView };
}

function VideoPlaceholder() {
  return (
    <div className="relative group mt-5">
      <div className="absolute -inset-3 rounded-2xl bg-green-500/20 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700 animate-breathe" />
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-500/30 via-green-400/20 to-green-500/30 blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-green-500/25 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.1)] group-hover:shadow-[0_0_60px_rgba(34,197,94,0.2)] transition-shadow duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5" />
        <div className="aspect-video flex items-center justify-center relative">
          <div className="text-center z-10">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center group-hover:bg-green-500/25 transition-all duration-300">
              <Play className="text-green-400 ml-0.5" size={22} fill="currentColor" />
            </div>
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase">
              Video Coming Soon
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-green-500/10 rounded-full blur-2xl" />
    </div>
  );
}

function TimelineStop({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, inView } = useInView(0.2);
  const isRight = step.side === 'right';

  return (
    <div
      ref={ref}
      className={`relative flex items-start mb-16 md:mb-24 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-x-0' : isRight ? 'opacity-0 translate-x-16' : 'opacity-0 -translate-x-16'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="hidden md:flex w-1/2 justify-end pr-10">
        {!isRight && (
          <div className="w-full max-w-sm">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-green-500/20 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:border-green-500/40 hover:shadow-[0_0_50px_rgba(34,197,94,0.08)] transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              <VideoPlaceholder />
            </div>
          </div>
        )}
      </div>

      <div className="relative flex-shrink-0 flex flex-col items-center z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-green-500/40 rounded-full blur-lg animate-pulse-node" />
          <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 border-2 border-green-400 flex items-center justify-center text-white font-bold text-base md:text-lg shadow-[0_0_20px_rgba(34,197,94,0.6)]">
            {step.number}
          </div>
        </div>

        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-green-500/60 to-transparent" style={{ width: '2.5rem', right: '100%', marginRight: '-1px' }} />
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-l from-green-500/60 to-transparent" style={{ width: '2.5rem', left: '100%', marginLeft: '-1px' }} />
      </div>

      <div className="hidden md:flex w-1/2 pl-10">
        {isRight && (
          <div className="w-full max-w-sm">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-green-500/20 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:border-green-500/40 hover:shadow-[0_0_50px_rgba(34,197,94,0.08)] transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              <VideoPlaceholder />
            </div>
          </div>
        )}
      </div>

      <div className="md:hidden ml-4 flex-1">
        <div className="bg-gradient-to-br from-gray-900 to-black border border-green-500/20 rounded-2xl p-5 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:border-green-500/40 transition-all duration-500">
          <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
          <VideoPlaceholder />
        </div>
      </div>
    </div>
  );
}

export default function RoadmapSection() {
  const { ref: titleRef, inView: titleInView } = useInView(0.3);
  const { ref: closingRef, inView: closingInView } = useInView(0.2);

  return (
    <section className="relative py-24 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-20 md:mb-28 transition-all duration-1000 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-[1.1]">
            One System. Five Steps.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
              Total Restaurant Growth.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Everything we build for you — from first impression to loyal customer.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/30 to-transparent" />
            <div className="absolute inset-0 bg-green-500/20" />
            <div className="absolute w-full animate-energy-flow" style={{ height: '200%', top: '-100%', background: 'linear-gradient(to bottom, transparent 0%, rgba(34,197,94,0) 30%, rgba(34,197,94,0.9) 50%, rgba(74,222,128,1) 52%, rgba(34,197,94,0.9) 54%, rgba(34,197,94,0) 70%, transparent 100%)' }} />
          </div>

          <div className="relative pl-8 md:pl-0">
            {steps.map((step, index) => (
              <TimelineStop key={step.number} step={step} index={index} />
            ))}
          </div>

          <div className="flex justify-start md:justify-center mb-16 pl-4 md:pl-0">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/60 rounded-full blur-xl animate-pulse" />
              <div className="relative w-5 h-5 rounded-full bg-green-500 border-2 border-green-300 shadow-[0_0_25px_rgba(34,197,94,0.9)]" />
            </div>
          </div>
        </div>

        <div
          ref={closingRef}
          className={`text-center max-w-3xl mx-auto mt-12 space-y-6 transition-all duration-1000 ${
            closingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
            From doing everything manually and losing money at every step…
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500 leading-snug">
            To a system that runs itself while you focus on the food.
          </p>

          <div className="pt-6">
            <a
              href="https://funnel.dineauto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 text-base md:text-lg font-bold text-black overflow-hidden rounded-full transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-green-400/40 blur-2xl rounded-full animate-breathe group-hover:bg-green-400/60 transition-all duration-500" />
              <span className="relative z-10">Watch the Full Case Study — See It In Action</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes energy-flow {
          0% { transform: translateY(0%); }
          100% { transform: translateY(100%); }
        }
        .animate-energy-flow {
          animation: energy-flow 2.5s linear infinite;
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.65; transform: scale(1.04); }
        }
        .animate-breathe {
          animation: breathe 4s ease-in-out infinite;
        }
        @keyframes pulse-node {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.15); }
        }
        .animate-pulse-node {
          animation: pulse-node 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
