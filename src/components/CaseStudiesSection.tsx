import { Users, MessageCircle, Star, DollarSign, Calendar, TrendingUp } from 'lucide-react';
import CaseStudyChart, { type Metric } from './CaseStudyChart';
import SectionTitle from './SectionTitle';

export default function CaseStudiesSection() {
  const caseStudy1: Metric[] = [
    {
      label: 'Monthly Revenue',
      before: 48000,
      after: 67000,
      unit: '$',
      icon: DollarSign,
      color: 'green',
    },
    {
      label: 'Reservations',
      before: 280,
      after: 385,
      unit: '',
      icon: Calendar,
      color: 'amber',
    },
    {
      label: 'Response Rate',
      before: 52,
      after: 89,
      unit: '%',
      icon: MessageCircle,
      color: 'blue',
    },
    {
      label: 'Repeat Customers',
      before: 31,
      after: 52,
      unit: '%',
      icon: Users,
      color: 'purple',
    },
  ];

  const caseStudy2: Metric[] = [
    {
      label: 'Online Orders',
      before: 195,
      after: 312,
      unit: '',
      icon: TrendingUp,
      color: 'green',
    },
    {
      label: 'Average Rating',
      before: 4.1,
      after: 4.6,
      unit: '★',
      icon: Star,
      color: 'amber',
    },
    {
      label: 'Customer Inquiries',
      before: 420,
      after: 685,
      unit: '',
      icon: MessageCircle,
      color: 'blue',
    },
    {
      label: 'Revenue Growth',
      before: 55000,
      after: 78000,
      unit: '$',
      icon: DollarSign,
      color: 'green',
    },
  ];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Real Results, Real Restaurants"
          subtitle="See how AI automation transformed these restaurants in just 90 days"
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <CaseStudyChart
            restaurantName="The Golden Fork"
            metrics={caseStudy1}
            delay={200}
          />
          <CaseStudyChart
            restaurantName="Bella Trattoria"
            metrics={caseStudy2}
            delay={400}
          />
        </div>

        <div className="relative p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-green-900/20 to-amber-900/20 border-2 border-green-400/30 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-amber-500/5 rounded-2xl sm:rounded-3xl" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Average Results Across All Clients
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-12">
              <div className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-400">+38%</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-300">Revenue Increase</div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-400">+41%</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-300">More Reservations</div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400">87%</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-300">Response Rate</div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400">+52%</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-300">Repeat Customers</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-8 sm:mt-10 md:mt-12 italic px-4">
              "These results are based on real data from restaurants using DineAuto's AI automation and marketing systems over a 3-month period."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
