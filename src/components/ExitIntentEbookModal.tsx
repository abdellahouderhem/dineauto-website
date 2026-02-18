import { useState, useEffect } from 'react';
import { X, BookOpen, CheckCircle2 } from 'lucide-react';

interface ExitIntentEbookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExitIntentEbookModal({ isOpen, onClose }: ExitIntentEbookModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.length >= 8;
  };

  const validateForm = () => {
    const newErrors = {
      fullName: '',
      email: '',
      phone: '',
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Phone must be at least 8 digits';
    }

    setErrors(newErrors);
    return !newErrors.fullName && !newErrors.email && !newErrors.phone;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        source: 'Exit Intent Ebook',
        page: window.location.pathname,
      };

      console.log('Sending lead payload:', payload);

      await fetch(
        'https://script.google.com/macros/s/AKfycbzNcpYToKLN7xiK4_g32sXL48T1Dja0ryXDu2zccgPe3JKUOIp8K9ecd3RpE95sVlLgug/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      console.log('Lead submitted successfully to Google Sheets');

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({ fullName: '', email: '', phone: '' });
      }, 3000);
    } catch (error) {
      console.error('Lead submit error:', error);
      setErrors({ ...errors, email: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-4 sm:py-6 animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg max-h-[90vh] sm:max-h-[85vh] overflow-y-auto bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl shadow-[0_0_60px_rgba(34,197,94,0.3)] border border-green-500/30 p-6 animate-scaleIn">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 via-transparent to-green-500/5 pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {!isSuccess ? (
          <>
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <BookOpen className="text-amber-400" size={48} />
                <div className="absolute inset-0 blur-xl bg-amber-400/40" />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-green-400">
              Before you go — grab the free Restaurant Marketing eBook
            </h2>

            <p className="text-gray-300 text-center mb-4 leading-relaxed">
              Learn how to increase sales without wasting more money on ads — using smart marketing psychology.
            </p>

            <ul className="space-y-2 mb-5">
              {[
                'Proven restaurant psychology tactics',
                'Offers & menu strategies that boost profit',
                'Simple follow-ups that bring customers back',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.fullName ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors`}
                />
                {errors.fullName && (
                  <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.email ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border ${
                    errors.phone ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors`}
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-amber-400 to-green-500 text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Me The eBook'}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 text-gray-400 hover:text-white transition-colors text-sm"
              >
                No thanks
              </button>

              <p className="text-gray-500 text-xs text-center mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle2 className="text-green-400" size={64} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Perfect — check your email. Your eBook is on the way.
            </h3>
            <p className="text-gray-400 text-sm">
              If you don't see it in 2 minutes, check spam/promotions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function useExitIntent(onExitIntent: () => void) {
  useEffect(() => {
    const hasShownPopup = localStorage.getItem('ebookModalShown');
    if (hasShownPopup === '1') return;

    let hasTriggered = false;
    let rafId: number | null = null;

    const triggerPopup = () => {
      if (!hasTriggered) {
        hasTriggered = true;
        localStorage.setItem('ebookModalShown', '1');
        onExitIntent();
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (hasTriggered) return;
      if (e.clientY <= 0) {
        triggerPopup();
      }
    };

    const handleScroll = () => {
      if (hasTriggered || rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / documentHeight) * 100;

        if (scrollPercentage >= 60) {
          triggerPopup();
        }

        rafId = null;
      });
    };

    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [onExitIntent]);
}
