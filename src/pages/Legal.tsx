import ContactStrip from '../components/ContactStrip';
import { Building, User, MapPin, Mail, Shield, AlertCircle } from 'lucide-react';

export default function Legal() {
  return (
    <div>
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Legal &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Company Information
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent information about DARYA LLC and DineAuto
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Company Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4 pb-6 border-b border-amber-500/20">
                <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building className="text-amber-400" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Legal Entity</div>
                  <div className="text-white text-xl font-semibold">DineAuto LLC</div>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-6 border-b border-amber-500/20">
                <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="text-amber-400" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Organizer</div>
                  <div className="text-white text-xl font-semibold">
                    Abdellah Ait-Ali-Ouderhem
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-6 border-b border-amber-500/20">
                <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-amber-400" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Registered Address</div>
                  <div className="text-white text-xl font-semibold">
                    30 N Gould St Ste R
                  </div>
                  <div className="text-white text-xl font-semibold">
                    Sheridan, WY 82801
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-amber-400" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Contact Email</div>
                  <a
                    href="mailto:support@dineauto.com"
                    className="text-amber-400 text-xl font-semibold hover:text-amber-300 transition-colors"
                  >
                    support@dineauto.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Important Disclaimers</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-white font-semibold mb-2">No Guaranteed Results</h3>
                <p>
                  While we work diligently to deliver the best possible results for your
                  restaurant, we do not guarantee specific revenue increases, reservation numbers,
                  or other business outcomes. Results vary based on location, market conditions,
                  restaurant concept, execution, and many other factors outside our control.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">AI Tool Limitations</h3>
                <p>
                  AI tools and automation systems may have limitations and occasional errors. While
                  we implement quality control measures and monitoring, no AI system is perfect. We
                  recommend maintaining human oversight for critical business operations.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Client Responsibilities</h3>
                <p>
                  Clients remain responsible for compliance with all applicable laws and
                  regulations in their jurisdiction, including but not limited to: labor laws, food
                  service regulations, advertising standards, data privacy laws (such as GDPR,
                  CCPA), and telecommunications regulations regarding automated calls and messages.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Third-Party Services</h3>
                <p>
                  DineAuto integrates with various third-party platforms and services. We are not
                  responsible for changes, outages, or issues with third-party platforms beyond our
                  control.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Service Agreement</h3>
                <p>
                  Specific terms of service, payment terms, deliverables, and responsibilities will
                  be outlined in your individual service agreement. The information on this website
                  is for general informational purposes and does not constitute a binding contract.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Legal Matters?</h2>
            <p className="text-gray-300 mb-6">
              If you have specific questions about our legal structure, terms of service, or
              compliance matters, please contact us directly.
            </p>
            <a
              href="mailto:support@dineauto.com"
              className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/30"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <ContactStrip />
    </div>
  );
}
