import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function ContactStrip() {
  return (
    <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border-y border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <a
            href="sms:+19179470263"
            className="flex items-center gap-2 text-gray-300 hover:text-amber-400 transition-colors"
          >
            <Phone size={18} />
            <span className="text-sm font-medium">+1 (917) 947-0263</span>
          </a>

          <a
            href="mailto:support@dineauto.com"
            className="flex items-center gap-2 text-gray-300 hover:text-amber-400 transition-colors"
          >
            <Mail size={18} />
            <span className="text-sm font-medium">support@dineauto.com</span>
          </a>

          <a
            href="https://wa.me/212656152114"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-amber-400 transition-colors"
          >
            <MessageCircle size={18} />
            <span className="text-sm font-medium">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
