import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

interface PricingCardProps {
  plan: string;
  tagline: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({ plan, tagline, description, features, highlighted }: PricingCardProps) {
  return (
    <div
      className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 ${
        highlighted
          ? 'border-2 border-amber-500 shadow-2xl shadow-amber-500/20 transform scale-105'
          : 'border border-amber-500/20'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 text-sm font-bold px-4 py-1 rounded-full">
            MOST POPULAR
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-2">{plan}</h3>
        <p className="text-amber-400 font-semibold mb-3">{tagline}</p>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="text-amber-400 flex-shrink-0 mt-1" size={20} />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="bg-slate-700/30 border border-amber-500/20 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-400 text-center">
          Pricing customized based on location, size, and scope. Get a quote on your free strategy call.
        </p>
      </div>

      <Link
        to="/book-a-call"
        className={`block w-full py-4 text-center font-semibold rounded-lg transition-all ${
          highlighted
            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/30'
            : 'bg-slate-700 text-white hover:bg-slate-600'
        }`}
      >
        Book a Free Strategy Call
      </Link>
    </div>
  );
}
