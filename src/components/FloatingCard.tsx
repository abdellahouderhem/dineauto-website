import { memo } from 'react';
import { LucideIcon } from 'lucide-react';

interface FloatingCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

function FloatingCard({ icon: Icon, title, description, delay = 0 }: FloatingCardProps) {
  return (
    <div
      className="group relative"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black
        border border-gray-800 backdrop-blur-sm
        transition-all duration-500 ease-out
        hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20
        hover:-translate-y-1"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 group-hover:scale-110 group-hover:border-green-500/50 transition-all duration-500">
          <Icon className="text-green-500 group-hover:text-green-400 transition-colors" size={32} />
        </div>

        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-green-400 group-hover:to-amber-400 transition-all duration-500">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}

export default memo(FloatingCard);
