import ContactStrip from '../components/ContactStrip';
import { CreditCard, CheckCircle, XCircle, AlertTriangle, Mail } from 'lucide-react';

export default function RefundPolicy() {
  return (
    <div>
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <CreditCard className="text-amber-400 mr-4" size={48} />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Refund{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please review this policy carefully before purchasing DineAuto services.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last Updated: January 10, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Refund Policy</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                DineAuto LLC provides professional marketing, automation, and digital services that often involve custom setup, time-based work, and third-party platform costs. This Refund Policy explains when refunds may or may not be available.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">General Refund Policy</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Unless otherwise stated in a written agreement, proposal, or invoice, <strong className="text-white">all payments are non-refundable once work has started or a service has been delivered</strong>, in whole or in part.
              </p>
              <p>
                Because DineAuto's services are digital and frequently customized (including strategy, setup, integrations, campaigns, automation, and creative work), refunds are not guaranteed after services have begun.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Eligible Refund Scenarios (If Applicable)</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                A refund may be considered only if:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>A duplicate or incorrect charge occurred</li>
                <li>A service was paid for but was not initiated and no work was performed</li>
                <li>A written agreement explicitly includes a refund or satisfaction guarantee</li>
              </ul>
              <p className="mt-4">
                Approved refunds will be issued to the original payment method when possible.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-500/30 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Non-Refundable Items</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Refunds are not provided for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Setup, onboarding, or implementation fees</li>
                <li>Services that have already started or been completed</li>
                <li>Strategy sessions, audits, or consultations</li>
                <li>Creative deliverables (ads, landing pages, copy, videos, voiceovers, AI content)</li>
                <li>Advertising spend paid to third-party platforms (Meta, Google, TikTok, etc.)</li>
                <li>Third-party software, SMS, phone, email, or platform usage fees</li>
                <li>Delays caused by missing access, approvals, or required client input</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Subscriptions & Ongoing Services</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Recurring services may be cancelled with 30 days' written notice, unless otherwise stated in a service agreement.
              </p>
              <p>
                All charges incurred up to the cancellation date remain payable.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-500/30 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Chargebacks & Payment Disputes</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                If you have a billing concern, please contact us first so we can resolve it promptly.
              </p>
              <p>
                Initiating a chargeback for services already delivered or initiated may result in:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Immediate suspension of services and access</li>
                <li>Collection efforts for unpaid balances</li>
                <li>Submission of documentation to Stripe and the payment network to dispute the chargeback</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Contact Information</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                For billing questions or refund requests, contact:
              </p>

              <div className="bg-slate-900/50 border border-amber-500/20 rounded-xl p-6">
                <div className="space-y-3">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Business Name</div>
                    <div className="text-white text-lg font-semibold">DineAuto LLC</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Email</div>
                    <a
                      href="mailto:support@dineauto.com"
                      className="text-amber-400 text-lg font-semibold hover:text-amber-300 transition-colors"
                    >
                      support@dineauto.com
                    </a>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Address</div>
                    <div className="text-white">
                      30 N Gould St Ste R<br />
                      Sheridan, WY 82801<br />
                      United States
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <ContactStrip />
    </div>
  );
}
