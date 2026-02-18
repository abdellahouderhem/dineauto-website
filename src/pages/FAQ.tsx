import { useState } from 'react';
import { ChevronDown, Sparkles, Zap, Shield, Clock, TrendingUp, MessageCircle, Phone, Mail, Calendar } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import SectionTitle from '../components/SectionTitle';

interface FAQItemProps {
  question: string;
  answer: string;
  icon: React.ElementType;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, icon: Icon, isOpen, onClick }: FAQItemProps) {
  return (
    <div
      className="group relative bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-transparent backdrop-blur-sm rounded-2xl border border-cyan-500/20 overflow-hidden hover:border-amber-400/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(251,191,36,0.15)]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-green-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <button
        onClick={onClick}
        className="relative w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-start gap-3 sm:gap-4 text-left"
      >
        <div className="relative flex-shrink-0 mt-1">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500/20 to-green-500/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="text-amber-400 group-hover:text-green-400 transition-colors" size={20} />
          </div>
          <div className="absolute inset-0 blur-xl bg-amber-400/20 group-hover:bg-green-400/30 transition-all duration-300" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-green-400 transition-all duration-300 pr-2 sm:pr-4 leading-[1.3] break-words">
            {question}
          </h3>
        </div>

        <ChevronDown
          className={`flex-shrink-0 mt-1 text-amber-400 transition-transform duration-500 ${
            isOpen ? 'rotate-180' : ''
          }`}
          size={20}
        />
      </button>

      <div
        className={`relative overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 pl-16 sm:pl-20 md:pl-24">
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: Sparkles,
      question: "What exactly is DineAuto?",
      answer: "DineAuto is an AI-powered automation system designed specifically for restaurants. We handle everything from answering calls and texts 24/7, managing reservations, responding to reviews, and running targeted marketing campaigns - all while you focus on serving amazing food. Think of it as having a tireless assistant who never sleeps."
    },
    {
      icon: Zap,
      question: "How quickly can we get started?",
      answer: "Most restaurants are up and running within 48-72 hours. We handle all the technical setup, train the AI on your menu and policies, and integrate with your existing systems. You'll have a dedicated onboarding session where we customize everything to match your restaurant's voice and style."
    },
    {
      icon: Clock,
      question: "Does the AI really work 24/7?",
      answer: "Absolutely. Our AI never sleeps, takes breaks, or calls in sick. Whether it's 2 PM or 2 AM, your customers get instant responses to calls, texts, and inquiries. This means you never miss a reservation opportunity, even during your busiest dinner rush when staff can't answer the phone."
    },
    {
      icon: Phone,
      question: "What happens if the AI can't handle something?",
      answer: "Our AI is trained to handle 95% of common customer interactions, but if it encounters something unusual, it seamlessly escalates to your team with full context of the conversation. You can also set custom rules for when to transfer calls or flag certain requests for manual review."
    },
    {
      icon: TrendingUp,
      question: "How do you help us get more customers?",
      answer: "We run multi-channel marketing campaigns including SMS promotions to your customer database, automated email campaigns for special occasions, review generation to boost your online reputation, and targeted ads to bring in new diners. Everything is tracked so you can see exactly what's driving results."
    },
    {
      icon: Calendar,
      question: "Does it work with our current reservation system?",
      answer: "Yes! We integrate with all major reservation platforms including OpenTable, Resy, Yelp Reservations, and more. If you don't have a system yet, we can set one up for you. The AI syncs in real-time to prevent double-bookings and keeps everything organized in one place."
    },
    {
      icon: Shield,
      question: "Is our customer data secure?",
      answer: "Security is our top priority. We use bank-level encryption, comply with all data protection regulations including GDPR and CCPA, and never sell or share your customer data. You own all your data, and we provide regular backups so you're always in control."
    },
    {
      icon: MessageCircle,
      question: "Can customers tell they're talking to AI?",
      answer: "Our AI is incredibly natural and conversational - most customers can't tell the difference. However, we're always transparent if asked directly. The key is that customers get fast, accurate answers and seamless service, which is what really matters. We can also customize how 'human' you want the AI to sound."
    },
    {
      icon: Mail,
      question: "What kind of support do you provide?",
      answer: "You get dedicated support via email, phone, and WhatsApp. During onboarding, you'll work directly with a specialist to get everything perfect. After launch, our team monitors your AI's performance and makes optimizations. We also provide monthly strategy sessions to help you maximize results."
    },
    {
      icon: Sparkles,
      question: "What if we want to make changes later?",
      answer: "Changes are easy and included in your plan. Want to update menu items? Adjust your hours? Change promotional messaging? You can make simple updates yourself through the dashboard, or request changes from our team anytime. We treat your system as a living tool that grows with your business."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative">
          <ScrollAnimation animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-500/10 to-green-500/10 rounded-full border border-amber-400/20 mb-6 sm:mb-8">
              <Sparkles className="text-amber-400" size={18} />
              <span className="text-amber-400 font-semibold text-xs sm:text-sm">Got Questions? We've Got Answers</span>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-green-400 leading-[1.15] py-4 px-4 break-words">
              Frequently Asked Questions
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Everything you need to know about DineAuto's AI automation system for restaurants.
              Can't find what you're looking for?
              <a href="mailto:support@dineauto.com" className="text-amber-400 hover:text-green-400 transition-colors ml-1 underline">
                Reach out to us
              </a>.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 50}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  icon={faq.icon}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animation="fade-up">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-green-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-amber-400/30 p-6 sm:p-8 md:p-12 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-[1.15] py-2 px-4 break-words">
                  Still Have Questions?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                  Book a free 30-minute call with our team. We'll answer all your questions and show you exactly how DineAuto can transform your restaurant.
                </p>
                <a
                  href="/book-a-call"
                  className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-gradient-to-r from-amber-400 to-green-500 text-black font-bold text-base sm:text-lg rounded-full hover:shadow-[0_0_50px_rgba(251,191,36,0.6)] hover:scale-105 transition-all duration-300"
                >
                  Book Your Free Call
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
