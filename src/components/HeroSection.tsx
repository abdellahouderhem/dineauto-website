import { Link } from 'react-router-dom';
import { MessageSquare, PhoneCall, CalendarCheck, Sparkles, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950/60 to-slate-950/90 md:from-transparent md:via-slate-950/40 md:to-slate-950/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-amber-400 text-sm font-semibold mb-4 animate-glow-pulse">
              <Sparkles className="w-4 h-4" />
              <span>The First AI-Powered Restaurant Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-glow">
              AI-Powered Growth Engine for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-green-400 animate-pulse-slow">
                Restaurants
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Turn every call into a reservation, every guest into a regular. Our AI handles bookings, answers questions, sends reminders, and brings back customers - while you focus on the kitchen and service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book-a-call"
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] text-center transform hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  Book a Free Strategy Call
                  <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <button className="hidden sm:block px-8 py-4 neon-border text-amber-400 font-bold rounded-xl hover:bg-amber-500/10 transition-all duration-300 backdrop-blur-sm transform hover:scale-105">
                Watch 2-Min Overview
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6">
              <div className="glass-effect rounded-xl p-3 sm:p-4 transform hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] sm:text-xs text-green-400 font-bold">ACTIVE 24/7</span>
                </div>
                <p className="text-white font-bold text-sm sm:text-base md:text-lg">AI Receptionist</p>
                <p className="text-gray-400 text-xs sm:text-sm">Never miss a call</p>
              </div>

              <div className="glass-effect rounded-xl p-3 sm:p-4 transform hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-[10px] sm:text-xs text-amber-400 font-bold">AUTOMATED</span>
                </div>
                <p className="text-white font-bold text-sm sm:text-base md:text-lg">Smart Marketing</p>
                <p className="text-gray-400 text-xs sm:text-sm">Fill tables fast</p>
              </div>

              <div className="glass-effect rounded-xl p-3 sm:p-4 transform hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] sm:text-xs text-green-400 font-bold">INTELLIGENT</span>
                </div>
                <p className="text-white font-bold text-sm sm:text-base md:text-lg">Guest Insights</p>
                <p className="text-gray-400 text-xs sm:text-sm">Know your diners</p>
              </div>

              <div className="glass-effect rounded-xl p-3 sm:p-4 transform hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-[10px] sm:text-xs text-amber-400 font-bold">PROVEN</span>
                </div>
                <p className="text-white font-bold text-sm sm:text-base md:text-lg">5-Star System</p>
                <p className="text-gray-400 text-xs sm:text-sm">Boost reviews</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 space-y-6">
              <div className="glass-effect rounded-2xl p-6 shadow-[0_0_40px_rgba(251,191,36,0.3)] backdrop-blur-xl transform hover:scale-105 transition-all duration-500 animate-fade-up hover:shadow-[0_0_60px_rgba(251,191,36,0.5)] border-2 border-amber-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-amber-500/20">
                    <MessageSquare className="text-amber-400 w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-white font-bold text-lg">AI Chat Active</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-green-400">Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="bg-black/40 rounded-xl p-4 border border-amber-500/20">
                  <p className="text-gray-300 text-sm mb-3">"Do you have gluten-free options?"</p>
                  <div className="bg-amber-500/10 rounded-lg p-3 border-l-4 border-amber-400">
                    <p className="text-amber-300 text-sm font-medium">
                      "Yes! We have 5 gluten-free dishes. Would you like to see our full menu or make a reservation?"
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6 shadow-[0_0_40px_rgba(34,197,94,0.3)] backdrop-blur-xl transform hover:scale-105 transition-all duration-500 animate-fade-up hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] border-2 border-green-500/20" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <PhoneCall className="text-green-400 w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-white font-bold text-lg">Incoming Call</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-green-400">Answered by AI Host</span>
                    </div>
                  </div>
                </div>
                <div className="bg-black/40 rounded-xl p-4 border border-green-500/20">
                  <p className="text-green-300 text-sm font-medium">
                    Call automatically handled, booking confirmed in 30 seconds
                  </p>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6 shadow-[0_0_50px_rgba(251,191,36,0.4)] backdrop-blur-xl transform hover:scale-105 transition-all duration-500 border-2 border-amber-500/50 animate-fade-up hover:shadow-[0_0_70px_rgba(251,191,36,0.6)] animate-glow-pulse" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-amber-500/30">
                    <CalendarCheck className="text-amber-400 w-6 h-6" />
                  </div>
                  <span className="text-white font-bold text-lg">Reservation Confirmed</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl text-white font-bold">Table for 4</div>
                    <div className="text-amber-400 text-xl font-semibold mt-1">7:30 PM · Tonight</div>
                  </div>
                  <div className="text-5xl">✓</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
