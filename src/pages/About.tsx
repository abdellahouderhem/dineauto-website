import { Target, Zap, BarChart, Shield, Sparkles, ArrowRight } from 'lucide-react';
import FloatingCard from '../components/FloatingCard';
import PremiumButton from '../components/PremiumButton';
import SectionTitle from '../components/SectionTitle';

export default function About() {
  const whyDineAuto = [
    {
      icon: Target,
      title: 'Built for Restaurants',
      description:
        "We're not a generic agency. Every tool, strategy, and workflow is designed specifically for the restaurant industry.",
    },
    {
      icon: Zap,
      title: 'Deep Focus on Automation',
      description:
        'Most agencies just run ads. We automate the entire customer journey so you make more money without adding staff.',
    },
    {
      icon: BarChart,
      title: 'AI + Human Strategy',
      description:
        'We combine cutting-edge AI with proven marketing frameworks that actually work in the restaurant space.',
    },
    {
      icon: Shield,
      title: 'Clear Numbers, Not Vanity Metrics',
      description:
        'We track what matters: reservations, revenue, repeat customers, and ROI — not just likes and impressions.',
    },
  ];

  return (
    <div className="relative">
      <section className="relative py-16 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] py-4 px-4 break-words">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-green-400">
                Built by a
              </span>
              <span className="block text-white mt-4">Restaurant-Focused Marketer</span>
              <span className="block text-white mt-4">Obsessed with Systems</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="p-10 rounded-3xl bg-black/40 backdrop-blur-xl border-2 border-amber-400/40 shadow-[0_0_60px_rgba(251,191,36,0.15)]">
              <SectionTitle
                title="The DineAuto Story"
                centered={false}
                gradient={false}
              />
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  DineAuto was founded by <strong className="text-amber-400">Abdellah Ait-Ali-Ouderhem</strong>,
                  organizer of DineAuto LLC, with a mission: give restaurant owners access to the kind of AI automation
                  and marketing systems usually only big chains can afford.
                </p>
                <p>
                  After years studying high-level marketing frameworks and investing in strategic education,
                  Abdellah saw a massive gap — most restaurants were stuck with basic social media management
                  or generic agencies that didn't understand the restaurant business.
                </p>
                <p>
                  DineAuto solves this by combining AI automation (chatbots, voice agents, workflows) with proven
                  marketing strategies adapted specifically for restaurants.
                </p>
                <p className="text-white font-semibold text-xl">
                  Our goal: help restaurant owners increase revenue, save time, and grow predictably — without
                  the chaos.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-10 rounded-3xl bg-black/40 backdrop-blur-xl border-2 border-amber-400/40 shadow-[0_0_60px_rgba(251,191,36,0.15)]">
                <Sparkles className="text-amber-400 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Empower restaurant owners with AI-powered automation and marketing systems that drive real
                  growth — more reservations, repeat guests, and revenue while freeing up time to focus on great
                  food and exceptional guest experiences.
                </p>
              </div>

              <div className="p-10 rounded-3xl bg-black/40 backdrop-blur-xl border-2 border-amber-400/40 shadow-[0_0_60px_rgba(251,191,36,0.15)]">
                <h3 className="text-2xl font-bold text-white mb-3">Leadership</h3>
                <div className="space-y-2">
                  <div className="text-white font-semibold text-lg">Abdellah Ait-Ali-Ouderhem</div>
                  <div className="text-amber-400">Founder & Organizer, DineAuto LLC</div>
                  <p className="text-gray-300 text-sm mt-3">
                    Expert in marketing automation, AI implementation, and strategic growth systems for restaurants.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <SectionTitle
            title="Why DineAuto vs a Normal Agency?"
            subtitle="We're not just another marketing agency — we're a growth partner"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {whyDineAuto.map((item, index) => (
              <FloatingCard key={index} {...item} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-gray-900 to-black border-2 border-green-400/30">
            <h2 className="text-4xl font-bold text-white mb-6">Company Information</h2>
            <div className="space-y-4 text-gray-400">
              <p><strong className="text-white">Company:</strong> DARYA LLC</p>
              <p><strong className="text-white">Organizer:</strong> Abdellah Ait-Ali-Ouderhem</p>
              <p><strong className="text-white">Address:</strong> 30 N Gould St Ste R, Sheridan, WY 82801</p>
              <p><strong className="text-white">Email:</strong> <a href="mailto:support@dineauto.com" className="text-amber-400 hover:text-amber-300">support@dineauto.com</a></p>
              <p><strong className="text-white">Phone (SMS):</strong> <a href="sms:+19179470263" className="text-amber-400 hover:text-amber-300">+1 (917) 947-0263</a></p>
              <p><strong className="text-white">WhatsApp:</strong> <a href="https://wa.me/212656152114" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">+212 656-152114</a></p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative p-16 rounded-3xl bg-gradient-to-br from-gray-900 to-black border-2 border-amber-400/30 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/5 to-green-500/5" />

            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.15] py-2 px-4 break-words">
                Let's Build Your Growth System
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                Book a free 30-minute strategy call and see exactly how AI and better marketing can transform
                your restaurant.
              </p>
              <PremiumButton to="/book-a-call" variant="primary" icon={ArrowRight} className="!text-xl">
                Book a Free Strategy Call
              </PremiumButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
