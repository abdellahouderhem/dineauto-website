import { useEffect, useState } from 'react';
import { TrendingUp, Users, MessageCircle, Star, DollarSign, Calendar } from 'lucide-react';

interface Metric {
  label: string;
  before: number;
  after: number;
  unit: string;
  icon: any;
  color: string;
}

interface CaseStudyChartProps {
  restaurantName: string;
  metrics: Metric[];
  delay?: number;
}

export default function CaseStudyChart({ restaurantName, metrics, delay = 0 }: CaseStudyChartProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>(metrics.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setAnimatedValues(
        metrics.map((metric) => {
          return metric.before + (metric.after - metric.before) * easeProgress;
        })
      );

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedValues(metrics.map((metric) => metric.after));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, metrics]);

  return (
    <div
      className={`relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-amber-400/30 backdrop-blur-xl transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-green-500/5 rounded-3xl" />

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2">{restaurantName}</h3>
        <p className="text-amber-400 mb-8">3-Month Results</p>

        <div className="space-y-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const percentage = ((metric.after - metric.before) / metric.before) * 100;

            let beforeWidth, afterWidth;
            if (metric.unit === '%') {
              beforeWidth = metric.before;
              afterWidth = animatedValues[index];
            } else {
              const maxScale = metric.after * 1.1;
              beforeWidth = (metric.before / maxScale) * 100;
              afterWidth = (animatedValues[index] / maxScale) * 100;
            }

            return (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg bg-${metric.color}-500/20`}>
                      <Icon className={`text-${metric.color}-400`} size={20} />
                    </div>
                    <span className="text-gray-300 font-medium">{metric.label}</span>
                  </div>
                  <span className="text-green-400 font-bold text-sm flex items-center gap-1">
                    <TrendingUp size={16} />
                    +{percentage.toFixed(0)}%
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-slate-400 text-xs w-16 font-medium">Before</span>
                    <div className="flex-1 relative h-9 bg-slate-900/40 rounded-lg overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-slate-500 rounded-lg transition-all duration-300"
                        style={{ width: `${beforeWidth}%` }}
                      />
                      <span className="absolute inset-0 flex items-center justify-end pr-4 text-white text-sm font-semibold">
                        {metric.before}
                        {metric.unit}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-green-400 text-xs w-16 font-semibold">After</span>
                    <div className="flex-1 relative h-11 bg-gray-800/30 rounded-lg overflow-hidden shadow-lg">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-600 to-green-500 rounded-lg transition-all duration-2000 ease-out"
                        style={{ width: `${afterWidth}%` }}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        style={{
                          backgroundSize: '200% 100%',
                          animation: isVisible ? 'shimmer 2s infinite' : 'none',
                        }}
                      />
                      <span className="absolute inset-0 flex items-center justify-end pr-4 text-white text-base font-bold">
                        {Math.round(animatedValues[index])}
                        {metric.unit}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { type Metric };
