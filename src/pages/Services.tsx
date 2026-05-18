import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Film,
  Target,
  Bot,
  Star,
  Zap,
  Globe,
  Users,
  TrendingUp,
  RefreshCw,
  MessageCircle,
  Calendar,
  Gift,
  CheckCircle,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import PremiumButton from '../components/PremiumButton';
import SectionTitle from '../components/SectionTitle';
import { Helmet } from 'react-helmet-async';

// ─── Data ────────────────────────────────────────────────────────────────────

const aiServices = [
  {
    icon: Film,
    title: 'AI Content Creation',
    description:
      'We create scroll-stopping content for your restaurant — Reels, TikToks, ads, and posts that make people hungry and drive them through your doors.',
  },
  {
    icon: Target,
    title: 'Paid Advertising',
    description:
      'Meta, TikTok, and Google campaigns built specifically for restaurants — local awareness, events, and reservations that actually fill tables.',
  },
  {
    icon: Bot,
    title: 'AI Customer Support & Booking',
    description:
      'Smart AI chatbot and voice agent that answers questions 24/7, takes bookings, handles FAQs, and captures leads on your website, social media, and phone — automatically.',
  },
  {
    icon: Star,
    title: 'Reputation & Review Automation',
    description:
      'Track all reviews, respond faster, and automatically request 5-star feedback from happy guests across every platform.',
  },
  {
    icon: Zap,
    title: 'Workflow & Automation',
    description:
      'Done-for-you automation that nurtures guests, drives repeat visits, sends promos, manages reservations, and maximizes lifetime revenue — all on autopilot.',
  },
];

const workflows = [
  { icon: RefreshCw,     text: 'Lead Reactivation Campaigns',       index: 1 },
  { icon: MessageCircle, text: 'Social Comment Automation',          index: 2 },
  { icon: Zap,           text: 'Promo SMS & Email Sequences',        index: 3 },
  { icon: Calendar,      text: 'WhatsApp Reservation Reminders',     index: 4 },
  { icon: Users,         text: 'WhatsApp Database Revival',          index: 5 },
  { icon: Gift,          text: 'Birthday & VIP Offers',              index: 6 },
  { icon: CheckCircle,   text: 'Appointment Confirmations',          index: 7 },
  { icon: Star,          text: 'Review Request Automation',          index: 8 },
];

const strategicFeatures = [
  'Irresistible offer creation',
  'Customer acquisition optimization',
  'Lifetime value maximization',
  'Ethical sales frameworks',
];

// ─── Accordion (Growth Workflows) ───────────────────────────────────────────

function WorkflowAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      className="space-y-2"
    >
      {workflows.map((wf, i) => {
        const isOpen = openIndex === i;
        const Icon = wf.icon;
        return (
          <motion.div key={i} variants={itemVariants}>
            <div className="group relative rounded-xl overflow-hidden cursor-pointer" onClick={() => toggle(i)}>
              <motion.div
                animate={{
                  backgroundColor: isOpen ? 'rgba(34,197,94,0.07)' : 'rgba(255,255,255,0.02)',
                  borderColor: isOpen ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.05)',
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4 px-5 py-4 rounded-xl border"
              >
                <span className="text-xs font-black tabular-nums select-none flex-shrink-0 transition-colors duration-300"
                  style={{ color: isOpen ? '#22c55e' : 'rgba(255,255,255,0.12)', minWidth: '2rem' }}>
                  {String(wf.index).padStart(2, '0')}
                </span>
                <motion.div animate={{ scale: isOpen ? 1.15 : 1, color: isOpen ? '#4ade80' : '#6b7280' }} transition={{ duration: 0.25 }} className="flex-shrink-0">
                  <Icon size={20} />
                </motion.div>
                <span className="flex-1 font-semibold text-sm sm:text-base transition-colors duration-300"
                  style={{ color: isOpen ? '#f0fdf4' : '#d1d5db' }}>
                  {wf.text}
                </span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="flex-shrink-0">
                  <ChevronDown size={16} style={{ color: isOpen ? '#22c55e' : 'rgba(255,255,255,0.2)' }} />
                </motion.div>
              </motion.div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="expanded"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-center gap-6 px-5 py-5 bg-green-500/5 border-x border-b border-green-500/20 rounded-b-xl">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-green-500/15 border border-green-500/25 flex items-center justify-center">
                        <Icon size={28} className="text-green-400" />
                      </div>
                      <div>
                        <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-1">Automated Workflow</p>
                        <p className="text-white font-semibold text-base">{wf.text}</p>
                        <p className="text-gray-400 text-sm mt-1">Runs automatically in the background — no manual work required.</p>
                      </div>
                      <div className="ml-auto flex-shrink-0 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/25">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-green-400 text-xs font-semibold">Active</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <div className="relative">
      <Helmet>
        <title>AI Services for Restaurants — DineAuto</title>
        <meta name="description" content="AI content creation, paid ads, customer support automation, review automation, and growth workflows built exclusively for independent restaurant owners." />
        <link rel="canonical" href="https://dineauto.com/services" />
        <meta property="og:title" content="AI Services for Restaurants — DineAuto" />
        <meta property="og:description" content="AI content creation, paid ads, customer support automation, review automation, and growth workflows built exclusively for independent restaurant owners." />
        <meta property="og:url" content="https://dineauto.com/services" />
      </Helmet>

      {/* ── Hero ── */}
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
              From AI content and paid ads to full automation systems, DineAuto gives your restaurant the tools to grow on autopilot.
            </p>
          </div>
        </div>
      </section>

      {/* ── AI Automation Suite — Staggered numbered timeline ── */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <SectionTitle
              title="AI Automation Suite"
              subtitle="Your restaurant gets an AI team that never sleeps, never forgets, and always follows the playbook."
            />
          </motion.div>

          <div className="space-y-4">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -48 : 48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex items-center gap-5 md:gap-8 p-5 md:p-7 rounded-2xl border border-white/5 hover:border-green-500/25 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 cursor-default overflow-hidden"
              >
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-green-500 rounded-full origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 + 0.3 }}
                />
                <span className="hidden sm:block text-5xl md:text-6xl font-black text-white/5 group-hover:text-green-500/10 transition-colors duration-500 leading-none select-none w-14 text-right flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-shrink-0 p-3 rounded-xl bg-green-500/10 group-hover:bg-green-500/20 border border-green-500/10 group-hover:border-green-500/30 transition-all duration-300">
                  <service.icon className="text-green-400" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-green-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                <motion.div
                  className="hidden md:flex flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <ArrowRight className="text-green-500" size={18} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Growth Workflows — Expandable accordion ── */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-green-500/4 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <SectionTitle
              title="Growth Workflows"
              subtitle="Done-for-you automation that nurtures guests, drives repeat visits, and maximizes revenue"
            />
          </motion.div>
          <WorkflowAccordion />
        </div>
      </section>

      {/* ── Marketing That Moves Numbers — Bento grid ── */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <SectionTitle
              title="Marketing That Moves Numbers"
              subtitle="Combine AI with proven marketing strategies to fill tables, increase ticket size, and build loyalty"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-4 md:gap-5">
            {/* Paid Ads — wide */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-2 group relative p-7 md:p-10 rounded-2xl border border-white/5 hover:border-green-500/30 bg-gradient-to-br from-green-950/30 to-black/60 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.08)]"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="p-3 w-fit rounded-xl bg-green-500/10 border border-green-500/15 mb-5 group-hover:bg-green-500/20 transition-colors duration-300">
                <Target className="text-green-400" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Paid Ads Mastery</h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
                Meta, TikTok, and Google campaigns built specifically for restaurants — local awareness, events, and reservations that actually fill tables.
              </p>
              <div className="mt-6 flex gap-2 flex-wrap">
                {['Meta Ads', 'TikTok', 'Google'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* CRM */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-7 rounded-2xl border border-white/5 hover:border-amber-400/25 bg-gradient-to-br from-amber-950/20 to-black/60 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(251,191,36,0.06)]"
            >
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="p-3 w-fit rounded-xl bg-amber-500/10 border border-amber-500/15 mb-5 group-hover:bg-amber-500/20 transition-colors duration-300">
                <Users className="text-amber-400" size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">CRM + Automation</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Centralize guest data, segment audiences, and send perfectly-timed messages via email, SMS, and WhatsApp.
              </p>
            </motion.div>

            {/* High-Converting Websites */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-7 rounded-2xl border border-white/5 hover:border-green-500/25 bg-gradient-to-br from-gray-900/60 to-black/60 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.06)]"
            >
              <div className="p-3 w-fit rounded-xl bg-white/5 border border-white/8 mb-5 group-hover:bg-green-500/10 group-hover:border-green-500/15 transition-all duration-300">
                <Globe className="text-gray-300 group-hover:text-green-400 transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">High-Converting Websites</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Beautiful restaurant websites with online reservations, menus, tracking, and SEO built in.
              </p>
            </motion.div>

            {/* Funnel Building — wide */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-2 group relative p-7 md:p-10 rounded-2xl border border-white/5 hover:border-amber-400/25 bg-gradient-to-br from-gray-900/60 to-amber-950/10 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(251,191,36,0.05)]"
            >
              <div className="absolute top-0 right-0 w-56 h-32 bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="p-3 w-fit rounded-xl bg-amber-500/10 border border-amber-500/15 group-hover:bg-amber-500/20 transition-colors duration-300 flex-shrink-0">
                  <Zap className="text-amber-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Funnel Building</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    Landing pages and promo funnels for holidays, events, and special offers that actually convert.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Strategic Framework — full width */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-3 group relative p-7 md:p-10 rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-500/5 via-green-500/5 to-black/80 overflow-hidden transition-all duration-500 hover:border-amber-400/35 hover:shadow-[0_0_60px_rgba(251,191,36,0.07)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.06),transparent_60%)] pointer-events-none" />
              <div className="relative flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-amber-400/15 to-green-400/15 border border-amber-400/20">
                    <TrendingUp className="text-amber-400" size={36} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Strategic Marketing Framework</h3>
                  <p className="text-gray-400 text-base md:text-lg mb-6 max-w-2xl">
                    High-level growth strategies similar to what top industry experts teach — implemented specifically for restaurants.
                  </p>
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {strategicFeatures.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-green-500/20 hover:bg-white/5 transition-all duration-300">
                        <CheckCircle className="text-green-400 flex-shrink-0" size={16} />
                        <span className="text-gray-300 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative p-10 sm:p-14 md:p-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900 to-black border-2 border-amber-400/30 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/5 to-green-500/5" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-green-500/20 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.15] py-2 px-4 break-words">
                Which service is right for you?
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                Every restaurant is different. Let's talk about your specific needs, challenges, and goals.
              </p>
              <PremiumButton href="https://funnel.dineauto.com" variant="primary" icon={ArrowRight} className="!text-xl">
                See How We Help Restaurants Grow
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
