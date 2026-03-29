import { Link } from 'react-router-dom';
import { Video as LucideIcon } from 'lucide-react';

interface PremiumButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export default function PremiumButton({
  children,
  href,
  to,
  variant = 'primary',
  icon: Icon,
  onClick,
  className = '',
}: PremiumButtonProps) {
  const baseClasses =
    'group relative px-8 py-4 rounded-[10px] font-bold text-lg transition-all duration-200 ease-in-out overflow-hidden inline-flex items-center gap-3 justify-center';

  const variants = {
    primary:
      'bg-[#00FF85] text-black hover:brightness-110 shadow-[0_0_18px_rgba(0,255,133,0.35)] hover:shadow-[0_0_28px_rgba(0,255,133,0.5)] hover:scale-105 transform',
    secondary:
      'bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] hover:scale-105 transform',
    ghost:
      'bg-black/60 border-[0.5px] border-[#00FF85] text-white hover:bg-[rgba(0,255,133,0.08)] backdrop-blur-sm hover:scale-105 transform',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-3">
        {children}
        {Icon && <Icon size={20} className="group-hover:translate-x-1 transition-transform duration-300" />}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
