interface Stat {
  label: string;
  value: string;
  description?: string;
}

interface StatsBarProps {
  stats: Stat[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-amber-500/20 rounded-xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-2">
              {stat.value}
            </div>
            <div className="text-white font-semibold mb-1">{stat.label}</div>
            {stat.description && (
              <div className="text-sm text-gray-400">{stat.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
