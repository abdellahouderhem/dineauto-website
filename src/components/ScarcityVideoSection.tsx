import { useEffect, useRef, useState } from 'react';

export default function ScarcityVideoSection() {
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

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
              This Is Happening Right Now Inside Our Funnel
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-2">
              Real daily traffic. Real strategy calls. Real restaurants taking action.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto">
              Opportunities are limited due to onboarding capacity.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75" />
              </div>
              <span className="text-xs text-green-400 font-medium bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-green-500/30">
                Live funnel activity
              </span>
            </div>

            <div className="absolute bottom-4 right-4 z-20">
              <span className="text-xs text-amber-400 font-medium bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-400/30 animate-pulse">
                Calls booked today
              </span>
            </div>

            <div className="absolute -inset-3 bg-gradient-to-r from-green-500/30 via-amber-400/30 to-green-500/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-700 animate-pulse" />

            <div className="absolute -inset-1.5 bg-gradient-to-r from-green-400/20 via-amber-400/20 to-green-400/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500" />

            <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black border-2 border-green-500/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(34,197,94,0.2),0_20px_60px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_90px_rgba(34,197,94,0.3),0_25px_70px_rgba(0,0,0,0.9)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-amber-400/5 opacity-50" />

              <div className="aspect-video w-full relative">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/lQBh81x0IK8"
                  title="DineAuto Funnel Activity"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-green-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
