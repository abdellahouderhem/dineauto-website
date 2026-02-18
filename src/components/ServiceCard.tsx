import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

export default function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/40 transition-all hover:transform hover:scale-105 shadow-lg">
      <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-amber-400" size={28} />
      </div>

      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
              <span className="text-amber-400 mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
