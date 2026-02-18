import { memo } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
}

function SectionTitle({ title, subtitle, centered = true, gradient = true }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] py-2 px-2 break-words ${
          gradient
            ? 'bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'
            : 'text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default memo(SectionTitle);
