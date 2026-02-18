import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-700/30 transition-colors"
      >
        <span className="text-white font-semibold pr-4">{question}</span>
        <ChevronDown
          className={`text-amber-400 flex-shrink-0 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          size={20}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-amber-500/10 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}
