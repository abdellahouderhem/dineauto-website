import { Calendar, CheckCircle, MessageCircle, Clock, Shield, Zap } from 'lucide-react';
import CalendarEmbed from '../components/CalendarEmbed';
import PremiumButton from '../components/PremiumButton';

export default function BookACall() {

  return (
    <div className="relative">
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-br from-amber-400/20 to-green-400/20">
                <Calendar className="text-amber-400" size={48} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-green-400">
                Book Your
              </span>
              <span className="block text-white mt-2">Intro Call</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pick a time that works — the call is short, practical, and focused on growth.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 mb-16">
            {/* Left sidebar - What to expect */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Clock className="text-amber-400" size={28} />
                  What to Expect
                </h2>
                <div className="space-y-5">
                  {[
                    { icon: CheckCircle, text: 'Quick 20-30 minute call' },
                    { icon: Zap, text: 'Identify growth opportunities' },
                    { icon: Shield, text: 'Zero pressure, zero pitch' },
                    { icon: Calendar, text: 'Custom proposal within 24h' },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="p-2.5 rounded-lg bg-gradient-to-br from-amber-400/20 to-green-400/20 group-hover:scale-110 transition-transform flex-shrink-0">
                          <Icon className="text-amber-400" size={20} />
                        </div>
                        <span className="text-gray-300 text-base leading-relaxed pt-1">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-amber-500/5 border-2 border-green-400/20">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Shield className="text-green-400" size={24} />
                  No Pressure. No Pitch.
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Just clarity. If we're not a fit, I'll tell you. This is a genuine consultation focused on what actually works for your restaurant.
                </p>
              </div>

              {/* WhatsApp Alternative */}
              <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="text-green-400" size={24} />
                  <h4 className="text-white font-bold text-lg">Prefer WhatsApp?</h4>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Message us and we'll send you a booking link directly.
                </p>
                <PremiumButton
                  href="https://wa.me/212656152114"
                  variant="secondary"
                  className="!w-full !justify-center"
                >
                  Message on WhatsApp
                </PremiumButton>
              </div>
            </div>

            {/* Right side - Calendar embed */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <div className="relative rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-400/30 overflow-hidden shadow-[0_0_40px_rgba(251,191,36,0.15)]">
                  {/* Subtle gradient glow at top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-green-400 to-amber-400"></div>

                  {/* Calendar container */}
                  <div className="p-6 sm:p-8">
                    <div className="rounded-xl overflow-hidden">
                      <CalendarEmbed />
                    </div>
                  </div>
                </div>

                {/* Reassurance card below calendar */}
                <div className="mt-6 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-amber-400/20 to-green-400/20 flex-shrink-0">
                      <Shield className="text-amber-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">100% Risk-Free Consultation</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        No credit card required. No commitment. Just honest advice about what will actually move the needle for your restaurant.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section - What happens next */}
          <div className="max-w-5xl mx-auto mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-green-400">
                What Happens
              </span>
              <span className="text-white"> After Your Call?</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  number: '1',
                  title: 'Custom Proposal',
                  description: "Within 24 hours, you'll receive a customized proposal with transparent pricing and clear implementation roadmap.",
                },
                {
                  number: '2',
                  title: 'Your Decision',
                  description: "Take your time to review. Ask questions. Zero pressure to move forward if it's not the right fit.",
                },
                {
                  number: '3',
                  title: 'Fast Implementation',
                  description: 'If you decide to move forward, we can have your AI systems live and campaigns running within 2 weeks.',
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-400 to-green-500 flex items-center justify-center text-black text-2xl font-bold mb-6 shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
