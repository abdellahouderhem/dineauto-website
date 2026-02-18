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
  BarChart,
  ArrowRight,
} from 'lucide-react';
import FloatingCard from '../components/FloatingCard';
import PremiumButton from '../components/PremiumButton';
import SectionTitle from '../components/SectionTitle';

export default function Services() {
  const aiServices = [
    {
      icon: Bot,
      title: 'AI Chatbot for Restaurants',
      description:
        'Smart website & social media chat that answers FAQs, captures leads, books tables 24/7, and handles menu questions automatically.',
    },
    {
      icon: PhoneCall,
      title: 'AI Voice Call Handling',
      description:
        'AI answers your phone in human-like speech, takes bookings, handles FAQs, and transfers important calls to staff.',
    },
    {
      icon: MessageSquare,
      title: 'Missed Call Text-Back',
      description:
        'Instant personalized SMS to every missed call with booking link and menu info. Never lose a reservation again.',
    },
    {
      icon: Music,
      title: 'Custom Restaurant Music',
      description:
        'Original branded tracks for your Reels, TikToks, ads, and in-store ambiance. Royalty-free music you own.',
    },
    {
      icon: Mic,
      title: 'Professional AI Voiceovers',
      description:
        'Studio-quality voiceovers for videos, ads, and promos. Multiple voice styles, fast turnaround, consistent brand voice.',
    },
    {
      icon: Star,
      title: 'Reputation Management',
      description:
        'Monitor all reviews, automated review requests, response templates, sentiment tracking across Google, Yelp, and Facebook.',
    },
  ];

  const workflows = [
    { icon: RefreshCw, text: 'Lead Reactivation Campaigns' },
    { icon: MessageCircle, text: 'Facebook & Instagram Comment Reply Automation' },
    { icon: Zap, text: 'Promo SMS & Email Automation' },
    { icon: Calendar, text: 'WhatsApp Reservation Reminders' },
    { icon: Users, text: 'WhatsApp Database Revival' },
    { icon: Gift, text: 'Birthday & VIP Offer Automation' },
    { icon: CheckCircle, text: 'Appointment Confirmation Workflows' },
    { icon: Star, text: 'Review Request Automation' },
    { icon: Target, text: 'No-Show Reduction Campaigns' },
    { icon: MessageSquare, text: 'Special Event Invitations' },
    { icon: TrendingUp, text: 'Loyalty Program Automation' },
    { icon: Users, text: 'Feedback Collection Workflows' },
  ];

  const marketingServices = [
    {
      icon: Target,
      title: 'Paid Ads (Meta, TikTok, Google)',
      description:
        'Restaurant-focused campaigns: local awareness, geo-targeting, event promotions, menu launches, and retargeting for past customers.',
    },
    {
      icon: Users,
      title: 'CRM + Marketing Automation',
      description:
        'Customer database management, behavioral segmentation, multi-channel messaging (email, SMS, WhatsApp), and automated journeys.',
    },
    {
      icon: Globe,
      title: 'Website Building',
      description:
        'Mobile-responsive restaurant sites with online reservations, digital menus, SEO optimization, and conversion tracking baked in.',
    },
    {
      icon: Zap,
      title: 'Funnel Building',
      description:
        'High-converting landing pages for holidays, events, and special offers. Lead capture and nurture sequences included.',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Marketing Blueprint',
      description:
        'High-value offer creation, customer acquisition optimization, lifetime value maximization, and growth frameworks.',
    },
    {
      icon: BarChart,
      title: 'Sales Strategy & Playbooks',
      description:
        'Upsell scripts and training, event booking strategies, catering and group sales systems, and staff training materials.',
    },
  ];

  return (
    <div className="relative">
      <section className="relative py-16 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] py-4 px-4 break-words">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-green-400">
                Services Built for
              </span>
              <span className="block text-white mt-4">Restaurant Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              From AI hosts to full marketing systems, DineAuto gives your restaurant the tools to grow
              on autopilot.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="AI Automation Services"
            subtitle="Your AI team that works 24/7 to handle calls, chats, and customer follow-ups"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <FloatingCard key={index} {...service} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Automation Workflows"
            subtitle="Done-for-you systems that run your restaurant marketing on autopilot"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {workflows.map((workflow, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 hover:border-green-400/50 transition-all duration-500 hover:-translate-y-1 hover:scale-105"
              >
                <workflow.icon className="text-green-400 mb-4 group-hover:scale-110 transition-transform" size={28} />
                <p className="text-white font-semibold text-sm leading-relaxed">{workflow.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Marketing & Growth Services"
            subtitle="Full-service strategies that bring guests back and increase ticket size"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <FloatingCard key={index} {...service} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative p-16 rounded-3xl bg-gradient-to-br from-gray-900 to-black border-2 border-amber-400/30 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/5 to-green-500/5" />

            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.15] py-2 px-4 break-words">
                Which service is right for you?
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                Every restaurant is different. Let's talk about your specific needs, challenges, and goals.
              </p>
              <PremiumButton to="/book-a-call" variant="primary" icon={ArrowRight} className="!text-xl">
                Book a Free Strategy Call
              </PremiumButton>
              <p className="text-sm text-gray-500 mt-6">
                We'll identify which combination of AI + marketing will deliver the best ROI for your restaurant.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
