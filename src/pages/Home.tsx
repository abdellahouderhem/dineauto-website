import { lazy, Suspense } from 'react';
import { ArrowRight } from 'lucide-react';
import PremiumButton from '../components/PremiumButton';
import { Helmet } from 'react-helmet-async';

const RoadmapSection = lazy(() => import('../components/RoadmapSection'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const TestimonialsMarquee = lazy(() => import('../components/TestimonialsMarquee'));
const PhilosophySection = lazy(() => import('../components/PhilosophySection'));
const GuaranteeSection = lazy(() => import('../components/GuaranteeSection'));

const heroStats = [
  { value: '24/7', label: 'AI Availability' },
  { value: '10x', label: 'ROI Potential' },
  { value: '100%', label: 'Automation' },
];

export default function Home() {

  return (
    <div className="relative overflow-hidden">
      <Helmet>
        <title>DineAuto — AI Growth System for Restaurants</title>
        <meta name="description" content="DineAuto automates your restaurant's marketing, bookings, and reviews with AI — saving owners 20–40 hours/month. Done-for-you systems, real results." />
        <link rel="canonical" href="https://dineauto.com/" />
        <meta property="og:title" content="DineAuto — AI Growth System for Restaurants" />
        <meta property="og:description" content="DineAuto automates your restaurant's marketing, bookings, and reviews with AI — saving owners 20–40 hours/month." />
        <meta property="og:url" content="https://dineauto.com/" />
      </Helmet>

      <section className="relative px-4 sm:px-6 lg:px-8">

        <div className="relative container mx-auto text-center pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-14 lg:pb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-[1.15] py-4 px-4 break-words">
            <span className="block text-white mb-3 sm:mb-4">The First</span>
            <span className="relative inline-block">
              <span className="block text-green-500 rotate-2 sm:rotate-3 lg:rotate-6 mb-3 sm:mb-4">
                AI-Powered
              </span>
            </span>
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Growth Platform
            </span>
            <span className="block text-white mt-3 sm:mt-4">for Restaurants</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed px-4">
            Increase sales, reduce workload, and automate your restaurant with smart AI systems that
            work 24/7 while you focus on what matters.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <PremiumButton href="https://funnel.dineauto.com" variant="primary" icon={ArrowRight}>
              See How We Help Restaurants Grow
            </PremiumButton>
            <PremiumButton to="/services" variant="ghost">
              See How It Works
            </PremiumButton>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto px-4">
            {heroStats.map((stat, index) => (
              <div
                key={index}
                className="p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 backdrop-blur-sm hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <RoadmapSection />
      </Suspense>

      <Suspense fallback={null}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={null}>
        <TestimonialsMarquee />
      </Suspense>

      <Suspense fallback={null}>
        <PhilosophySection />
      </Suspense>

      <Suspense fallback={null}>
        <GuaranteeSection />
      </Suspense>



      <section className="relative py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900 to-black border-2 border-amber-400/30 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/5 to-green-500/5" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-green-500/20 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-[1.15] py-2 px-4 break-words">
                You've already taken the first step by exploring how AI can help your restaurant grow.
                The next step is simply seeing how this applies to your restaurant.
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                Book a free 30-minute strategy call and discover where AI can add the most revenue to
                your restaurant in the next 90 days.
              </p>
              <PremiumButton href="https://funnel.dineauto.com" variant="primary" icon={ArrowRight} className="!text-base sm:!text-lg md:!text-xl">
                See How We Help Restaurants Grow
              </PremiumButton>
              <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
                No pressure. No long pitch. Just a focused consultation for your restaurant.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
