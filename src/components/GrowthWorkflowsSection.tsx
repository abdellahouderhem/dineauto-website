import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RefreshCw,
  MessageCircle,
  Zap,
  Calendar,
  Users,
  Gift,
  CheckCircle,
  Star,
  ChevronDown,
} from 'lucide-react';
import SectionTitle from './SectionTitle';

const workflows = [
  { icon: RefreshCw,      text: 'Lead Reactivation Campaigns',    index: 1 },
  { icon: MessageCircle,  text: 'Social Comment Automation',       index: 2 },
  { icon: Zap,            text: 'Promo SMS & Email Sequences',     index: 3 },
  { icon: Calendar,       text: 'WhatsApp Reservation Reminders',  index: 4 },
  { icon: Users,          text: 'WhatsApp Database Revival',       index: 5 },
  { icon: Gift,           text: 'Birthday & VIP Offers',           index: 6 },
  { icon: CheckCircle,    text: 'Appointment Confirmations',       index: 7 },
  { icon: Star,           text: 'Review Request Automation',       index: 8 },
];

export default function GrowthWorkflowsSection() {
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
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* subtle green radial behind section */}
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
                <div
                  className="group relative rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => toggle(i)}
                >
                  {/* row */}
                  <motion.div
                    animate={{
                      backgroundColor: isOpen
                        ? 'rgba(34,197,94,0.07)'
                        : 'rgba(255,255,255,0.02)',
                      borderColor: isOpen
                        ? 'rgba(34,197,94,0.3)'
                        : 'rgba(255,255,255,0.05)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4 px-5 py-4 rounded-xl border"
                  >
                    {/* number */}
                    <span
                      className="text-xs font-black tabular-nums select-none flex-shrink-0 transition-colors duration-300"
                      style={{ color: isOpen ? '#22c55e' : 'rgba(255,255,255,0.12)', minWidth: '2rem' }}
                    >
                      {String(wf.index).padStart(2, '0')}
                    </span>

                    {/* icon */}
                    <motion.div
                      animate={{ scale: isOpen ? 1.15 : 1, color: isOpen ? '#4ade80' : '#6b7280' }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0"
                    >
                      <Icon size={20} />
                    </motion.div>

                    {/* text */}
                    <span
                      className="flex-1 font-semibold text-sm sm:text-base transition-colors duration-300"
                      style={{ color: isOpen ? '#f0fdf4' : '#d1d5db' }}
                    >
                      {wf.text}
                    </span>

                    {/* chevron */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown
                        size={16}
                        style={{ color: isOpen ? '#22c55e' : 'rgba(255,255,255,0.2)' }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* expanded panel */}
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
                          {/* large icon in accent circle */}
                          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-green-500/15 border border-green-500/25 flex items-center justify-center">
                            <Icon size={28} className="text-green-400" />
                          </div>

                          <div>
                            <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-1">
                              Automated Workflow
                            </p>
                            <p className="text-white font-semibold text-base">{wf.text}</p>
                            <p className="text-gray-400 text-sm mt-1">
                              Runs automatically in the background — no manual work required.
                            </p>
                          </div>

                          {/* active badge */}
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
      </div>
    </section>
  );
}
