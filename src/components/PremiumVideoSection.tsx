import { useEffect, useRef, useState } from 'react';

export default function PremiumVideoSection() {
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
      className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Watch How DineAuto Transforms Restaurant Growth
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              A real breakdown of our AI systems, funnels, and automation in action.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-green-500/40 via-amber-400/40 to-green-500/40 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-700" />

            <div className="absolute -inset-1 bg-gradient-to-r from-green-400/30 via-amber-400/30 to-green-400/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500" />

            <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black border-2 border-green-500/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(34,197,94,0.15),0_20px_60px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_80px_rgba(34,197,94,0.25),0_25px_70px_rgba(0,0,0,0.9)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-amber-400/5 opacity-50" />

              <div className="aspect-video w-full relative">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/uxthCyCiCgE"
                  title="DineAuto Restaurant Growth Platform"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-green-500/15 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
