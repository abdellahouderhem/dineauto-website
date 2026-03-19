import {
  Bot,
  PhoneCall,
  MessageSquare,
  Star,
  Music,
  Mic,
  Zap,
  Target,
  Globe,
  Users,
  TrendingUp,
  RefreshCw,
  MessageCircle,
  Calendar,
  Gift,
  CheckCircle,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import FloatingCard from '../components/FloatingCard';
import PremiumButton from '../components/PremiumButton';
import SectionTitle from '../components/SectionTitle';
import CaseStudiesSection from '../components/CaseStudiesSection';
import RoadmapSection from '../components/RoadmapSection';
import ScarcityVideoSection from '../components/ScarcityVideoSection';
import PhilosophySection from '../components/PhilosophySection';
import GuaranteeSection from '../components/GuaranteeSection';
import TestimonialsMarquee from '../components/TestimonialsMarquee';

const aiServices = [
  {
    icon: Bot,
    title: 'AI Chatbot',
    description:
      'Smart AI that answers questions 24/7 on your website and social media, captures leads, and books tables automatically.',
  },
  {
    icon: PhoneCall,
    title: 'AI Voice Assistant',
    description:
      'Human-like AI voice agent that answers your restaurant phone, takes bookings, and handles FAQs in natural conversation.',
  },
  {
    icon: MessageSquare,
    title: 'Missed Call Text-Back',
    description:
      'Every missed call gets an instant personalized SMS with booking link and menu info — never lose another reservation.',
  },
  {
    icon: Music,
    title: 'Custom Music Creation',
    description:
      'Original branded background tracks and music for your Reels, TikToks, ads, and in-store ambiance.',
  },
  {
    icon: Mic,
    title: 'AI Voiceovers',
    description:
      'Studio-quality professional voiceovers for videos, ads, and promos that match your brand voice perfectly.',
  },
  {
    icon: Star,
    title: 'Reputation Management',
    description:
      'Track all reviews, respond faster, and automatically request 5-star feedback from happy guests across platforms.',
  },
];

const automationWorkflows = [
  { icon: RefreshCw, text: 'Lead Reactivation Campaigns' },
  { icon: MessageCircle, text: 'Social Comment Automation' },
  { icon: Zap, text: 'Promo SMS & Email Sequences' },
  { icon: Calendar, text: 'WhatsApp Reservation Reminders' },
  { icon: Users, text: 'WhatsApp Database Revival' },
  { icon: Gift, text: 'Birthday & VIP Offers' },
  { icon: CheckCircle, text: 'Appointment Confirmations' },
  { icon: Star, text: 'Review Request Automation' },
];

const marketingServices = [
  {
    icon: Target,
    title: 'Paid Ads Mastery',
    description:
      'Meta, TikTok, and Google campaigns built specifically for restaurants — local awareness, events, and reservations.',
  },
  {
    icon: Users,
    title: 'CRM + Automation',
    description:
      'Centralize guest data, segment audiences, and send perfectly-timed messages via email, SMS, and WhatsApp.',
  },
  {
    icon: Globe,
    title: 'High-Converting Websites',
    description:
      'Beautiful restaurant websites with online reservations, menus, tracking, and SEO built in.',
  },
  {
    icon: Zap,
    title: 'Funnel Building',
    description:
      'Landing pages and promo funnels for holidays, events, and special offers that actually convert.',
  },
];

const strategicFeatures = [
  'Irresistible offer creation',
  'Customer acquisition optimization',
  'Lifetime value maximization',
  'Ethical sales frameworks',
];

const heroStats = [
  { value: '24/7', label: 'AI Availability' },
  { value: '10x', label: 'ROI Potential' },
  { value: '100%', label: 'Automation' },
];

export default function Home() {

  return (
    <div className="relative overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px] animate-pulse hidden md:block" />
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-green-500/20 rounded-full blur-[100px] animate-pulse hidden md:block" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative container mx-auto text-center py-8 sm:py-12 lg:py-20 lg:min-h-screen flex flex-col justify-center">
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
            <PremiumButton to="/book-a-call" variant="primary" icon={ArrowRight}>
              Book a Free Strategy Call
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

      <RoadmapSection />

      <PhilosophySection />

      <GuaranteeSection />

      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="AI Automation Suite"
            subtitle="Your restaurant gets an AI team that never sleeps, never forgets, and always follows the playbook."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <FloatingCard key={index} {...service} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <SectionTitle
            title="Growth Workflows"
            subtitle="Done-for-you automation that nurtures guests, drives repeat visits, and maximizes revenue"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {automationWorkflows.map((workflow, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-1"
              >
                <workflow.icon className="text-green-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" size={28} />
                <p className="text-white font-semibold text-sm sm:text-base leading-relaxed">{workflow.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Marketing That Moves Numbers"
            subtitle="Combine AI with proven marketing strategies to fill tables, increase ticket size, and build loyalty"
          />

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {marketingServices.map((service, index) => (
              <FloatingCard key={index} {...service} delay={index * 100} />
            ))}
          </div>

          <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500/10 via-green-500/10 to-amber-500/10 border-2 border-amber-400/30 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-amber-400/20 to-green-400/20">
                <TrendingUp className="text-amber-400" size={32} />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Strategic Marketing Framework</h3>
                <p className="text-gray-400 text-base sm:text-lg">
                  High-level growth strategies similar to what top industry experts teach — implemented
                  specifically for restaurants.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {strategicFeatures.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={18} />
                  <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CaseStudiesSection />

      <TestimonialsMarquee />

      <ScarcityVideoSection />

      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
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
              <PremiumButton to="/book-a-call" variant="primary" icon={ArrowRight} className="!text-base sm:!text-lg md:!text-xl">
                Book Your Free Strategy Call
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
