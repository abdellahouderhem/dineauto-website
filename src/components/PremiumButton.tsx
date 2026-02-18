import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

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
    'group relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 overflow-hidden inline-flex items-center gap-3 justify-center';

  const variants = {
    primary:
      'bg-gradient-to-r from-green-500 to-green-600 text-black hover:from-green-400 hover:to-green-500 shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:shadow-[0_0_60px_rgba(34,197,94,0.6)] hover:scale-105 transform',
    secondary:
      'bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] hover:scale-105 transform',
    ghost:
      'neon-border text-white hover:bg-green-500/10 backdrop-blur-sm hover:scale-105 transform',
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
