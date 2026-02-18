import { Check, Zap, TrendingUp, Rocket, ArrowRight } from 'lucide-react';
import PremiumButton from '../components/PremiumButton';
import SectionTitle from '../components/SectionTitle';

export default function Pricing() {
  const plans = [
    {
      name: 'Launch',
      tagline: 'For Single-Location Restaurants',
      icon: Zap,
      features: [
        'AI Chatbot for website & social media',
        'Missed call text-back automation',
        'Basic review management',
        'Simple CRM & guest database',
        'Email automation workflows',
        'SMS appointment reminders',
        'Monthly performance reporting',
        'Email support',
      ],
    },
    {
      name: 'Growth',
      tagline: 'For Restaurants Ready to Scale',
      icon: TrendingUp,
      highlighted: true,
      features: [
        'Everything in Launch',
        'AI Voice Call Handling',
        'Paid ads management (Meta, TikTok, Google)',
        'Custom landing pages & funnels',
        'Advanced automation workflows',
        'WhatsApp database reactivation',
        'Birthday & VIP offer campaigns',
        'Review request automation',
        'Custom dashboards & reporting',
        'Reputation management',
        'Custom music & voiceovers',
        'Strategic marketing consultation',
        'Priority support',
      ],
    },
    {
      name: 'Scale',
      tagline: 'For Multi-Location & Franchises',
      icon: Rocket,
      features: [
        'Everything in Growth',
        'Multi-location setup & management',
        'Custom dashboards & reporting',
        'Custom integrations',
        '24/7 priority support',
      ],
    },
  ];

  return (
    <div className="relative">
      <section className="relative py-16 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.2] py-6 px-4 break-words">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-green-400 pb-2">
                Pricing &
              </span>
              <span className="block text-white mt-4">Packages</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              Choose the plan that fits your restaurant's size and growth goals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black transition-all duration-500 ${
                    plan.highlighted
                      ? 'border-2 border-amber-400 scale-105 shadow-[0_0_60px_rgba(251,191,36,0.3)]'
                      : 'border border-gray-800 hover:border-amber-400/50'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black text-sm font-bold rounded-full">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-amber-400/20 to-green-400/20">
                      <Icon className="text-amber-400" size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{plan.name}</h3>
                      <p className="text-amber-400 font-semibold">{plan.tagline}</p>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check
                          className={`flex-shrink-0 mt-1 ${
                            plan.highlighted ? 'text-amber-400' : 'text-green-400'
                          }`}
                          size={20}
                        />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 mb-6">
                    <p className="text-sm text-gray-400 text-center">
                      Custom pricing based on your location, size, and scope
                    </p>
                  </div>

                  <PremiumButton
                    to="/book-a-call"
                    variant={plan.highlighted ? 'primary' : 'ghost'}
                    className="!w-full !justify-center"
                  >
                    Get Started
                  </PremiumButton>
                </div>
              );
            })}
          </div>

          <SectionTitle
            title="How Pricing Works"
            subtitle="Transparent, customized pricing based on your restaurant's needs"
          />

          <div className="max-w-4xl mx-auto p-10 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800">
            <div className="space-y-6 text-gray-400">
              <p className="text-lg">
                Every restaurant is unique. Your investment is customized based on:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: 'Location & Market', desc: 'Competition, market size, advertising costs' },
                  { label: 'Restaurant Size', desc: 'Seats, covers, current revenue' },
                  { label: 'Service Scope', desc: 'Which AI tools and marketing services' },
                  { label: 'Number of Locations', desc: 'Single vs. multi-location setup' },
                ].map((item, index) => (
                  <div key={index} className="p-6 rounded-xl bg-gray-800/30 border border-gray-700">
                    <div className="text-amber-400 font-bold mb-2">{item.label}</div>
                    <div className="text-sm">{item.desc}</div>
                  </div>
                ))}
              </div>
              <p className="text-white font-semibold text-center text-lg pt-6">
                Get a transparent quote on your free strategy call
              </p>
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
                Ready to Discuss Your Growth Plan?
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                Book a free 30-minute call. We'll analyze your situation and show you exactly what's possible
                with DineAuto.
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
