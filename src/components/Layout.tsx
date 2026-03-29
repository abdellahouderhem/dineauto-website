import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { useState } from 'react';
import DramaticBackground from './DramaticBackground';
import MobileParticleCanvas from './MobileParticleCanvas';
import PremiumButton from './PremiumButton';
import ExitIntentEbookModal, { useExitIntent } from './ExitIntentEbookModal';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ebookModalOpen, setEbookModalOpen] = useState(false);
  const location = useLocation();

  useExitIntent(() => setEbookModalOpen(true));

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-black text-white relative">
      <MobileParticleCanvas />
      <DramaticBackground />

      <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto bg-black/40 backdrop-blur-xl rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.5)] border border-cyan-500/20 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative">
                <UtensilsCrossed className="text-amber-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                <div className="absolute inset-0 blur-lg bg-amber-400/30 group-hover:bg-amber-400/50 transition-all" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-green-400">
                DineAuto
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {[
                { path: '/', label: 'Home' },
                { path: '/services', label: 'Services' },
                { path: '/pricing', label: 'Pricing' },
                { path: '/about', label: 'About' },
                { path: '/faq', label: 'FAQ' },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-[15px] font-semibold transition-all duration-300 ${
                    isActive(item.path) ? 'text-amber-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/book-a-call"
                className="px-8 py-3 bg-gradient-to-r from-amber-400 to-green-500 text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:scale-105 transition-all duration-300"
              >
                Book Intro Call
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-amber-400 transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-black/40 backdrop-blur-xl rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.5)] border border-cyan-500/20 overflow-hidden">
            <div className="px-6 py-6 space-y-4">
              {[
                { path: '/', label: 'Home' },
                { path: '/services', label: 'Services' },
                { path: '/pricing', label: 'Pricing' },
                { path: '/about', label: 'About' },
                { path: '/faq', label: 'FAQ' },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-lg font-semibold transition-colors ${
                    isActive(item.path) ? 'text-amber-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/book-a-call"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center px-8 py-3 bg-gradient-to-r from-amber-400 to-green-500 text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all duration-300"
              >
                Book Intro Call
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="relative pt-20 md:pt-32">{children}</main>

      <footer className="relative mt-32 border-t border-cyan-500/20 bg-black/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <UtensilsCrossed className="text-amber-400" size={24} />
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-green-400">
                  DineAuto
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Automate reservations, boost reviews, fill tables - 24/7 AI that handles calls, texts, and marketing so you can focus on serving great food.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
              <div className="space-y-3">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/services', label: 'Services' },
                  { to: '/pricing', label: 'Pricing' },
                  { to: '/about', label: 'About' },
                  { to: '/faq', label: 'FAQ' },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Legal</h3>
              <div className="space-y-3">
                {[
                  { to: '/legal', label: 'Company Info' },
                  { to: '/privacy', label: 'Privacy Policy' },
                  { to: '/terms', label: 'Terms & Conditions' },
                  { to: '/refund-policy', label: 'Refund Policy' },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <p>
                  <a href="mailto:support@dineauto.com" className="hover:text-amber-400 transition-colors">
                    support@dineauto.com
                  </a>
                </p>
                <p>
                  <a href="sms:+19179470263" className="hover:text-amber-400 transition-colors">
                    +1 (917) 947-0263 (SMS)
                  </a>
                </p>
                <p>
                  <a
                    href="https://wa.me/212656152114"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors"
                  >
                    WhatsApp
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Follow Us</h3>
              <div className="space-y-3">
                {[
                  { href: 'https://www.instagram.com/dine_auto/', label: 'Instagram' },
                  { href: 'https://x.com/abduouderhem', label: 'X (Twitter)' },
                  { href: 'https://www.facebook.com/profile.php?id=61585765130166', label: 'Facebook' },
                  { href: 'https://www.youtube.com/@Dine-Auto', label: 'YouTube' },
                ].map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
                <button
                  onClick={() => setEbookModalOpen(true)}
                  className="block text-left text-amber-400 hover:text-amber-300 transition-colors font-semibold"
                >
                  Get Free eBook
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="text-center text-gray-500 text-sm">
              <p className="mb-2">DineAuto LLC · 30 N Gould St Ste R, Sheridan, WY 82801</p>
              <p>© {new Date().getFullYear()} DineAuto. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <Link
        to="/book-a-call"
        className="lg:hidden fixed bottom-6 right-6 z-40 px-6 py-3 bg-gradient-to-r from-amber-400 to-green-500 text-black font-bold rounded-full shadow-[0_0_40px_rgba(251,191,36,0.6)] hover:scale-110 transition-transform"
      >
        Book Call
      </Link>

      <ExitIntentEbookModal
        isOpen={ebookModalOpen}
        onClose={() => setEbookModalOpen(false)}
      />

      {/* TODO: Paste GHL chat widget <script> snippet here */}
    </div>
  );
}
