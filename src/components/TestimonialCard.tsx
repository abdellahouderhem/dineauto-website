import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  restaurant: string;
}

export default function TestimonialCard({ quote, author, role, restaurant }: TestimonialCardProps) {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/40 transition-all shadow-lg">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="text-amber-400 fill-amber-400" size={20} />
        ))}
      </div>

      <p className="text-gray-300 text-lg mb-6 italic leading-relaxed">"{quote}"</p>

      <div className="border-t border-amber-500/20 pt-4">
        <div className="font-semibold text-white">{author}</div>
        <div className="text-sm text-gray-400">{role}</div>
        <div className="text-sm text-amber-400">{restaurant}</div>
      </div>
    </div>
  );
}
