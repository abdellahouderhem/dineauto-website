import ContactStrip from '../components/ContactStrip';
import { Shield, Lock, Eye, Database, Phone, CreditCard, Users, Globe, FileText, Mail } from 'lucide-react';

export default function Privacy() {
  return (
    <div>
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Shield className="text-amber-400 mr-4" size={48} />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Privacy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy matters. We're committed to protecting your personal information and being transparent about how we use it.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last Updated: December 19, 2024
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Introduction</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                DineAuto, operated by DineAuto LLC ("we," "us," or "our"), respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any capacity.
              </p>
              <p>
                This policy applies to all visitors, leads, prospective clients, and customers who engage with DineAuto through any channel, including our website, phone communications, email, SMS, and social media platforms.
              </p>
              <p>
                By using our services or providing your information to us, you acknowledge that you have read and understood this Privacy Policy and consent to the practices described herein.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Personal Information</h3>
                <p className="mb-2">When you interact with DineAuto, we may collect the following personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Full name and business name</li>
                  <li>Email address</li>
                  <li>Phone number (mobile and/or business)</li>
                  <li>Restaurant or business information (name, address, type of cuisine, size)</li>
                  <li>Job title or role</li>
                  <li>Communication preferences</li>
                  <li>Any other information you voluntarily provide through forms, calls, or direct communication</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Payment Information</h3>
                <p>
                  Payment transactions are processed securely through <strong className="text-white">Stripe</strong>, our third-party payment processor. We do NOT store, process, or have access to your full credit card details. Stripe handles all payment data in accordance with PCI-DSS standards. We may receive limited transaction information such as the last four digits of your card, transaction amount, and payment status for record-keeping and billing purposes.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Technical and Usage Data</h3>
                <p className="mb-2">We automatically collect certain technical information when you visit our website or use our services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address and approximate geographic location</li>
                  <li>Browser type, version, and language settings</li>
                  <li>Device information (type, operating system, screen resolution)</li>
                  <li>Referring website or source</li>
                  <li>Pages visited, time spent on pages, and navigation patterns</li>
                  <li>Date and time stamps of visits</li>
                  <li>Clickstream data and interaction with website elements</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Cookies & Tracking Technologies</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                DineAuto uses cookies, pixels, web beacons, and similar tracking technologies to enhance your browsing experience, analyze website performance, and deliver personalized marketing content.
              </p>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Types of Tracking Technologies We Use:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Essential Cookies:</strong> Required for website functionality, navigation, and access to secure areas</li>
                  <li><strong className="text-white">Analytics Cookies:</strong> Google Analytics and similar tools to measure traffic, user behavior, and site performance</li>
                  <li><strong className="text-white">Marketing Pixels:</strong> Meta (Facebook) Pixel, TikTok Pixel, and other advertising pixels to track conversions and optimize ad campaigns</li>
                  <li><strong className="text-white">Performance Cookies:</strong> Tools to test variations and improve user experience</li>
                  <li><strong className="text-white">Third-Party Cookies:</strong> Set by partners like Google, Meta, and other service providers for advertising and analytics</li>
                </ul>
              </div>

              <p>
                You can control cookie settings through your browser preferences. However, disabling cookies may limit certain features and functionality of our website. For more information on managing cookies, visit your browser's help documentation.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>We use the information we collect for the following legitimate business purposes:</p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Service Delivery:</strong> To provide, maintain, and improve our AI automation, marketing, and consulting services
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Communication:</strong> To respond to inquiries, provide customer support, send service updates, and maintain ongoing client relationships
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Marketing & Outreach:</strong> To send promotional materials, newsletters, special offers, case studies, and educational content related to restaurant marketing and AI automation
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Analytics & Optimization:</strong> To analyze website traffic, user behavior, and campaign performance to improve our services and marketing effectiveness
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Business Operations:</strong> To process payments, manage accounts, maintain records, and fulfill contractual obligations
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Legal Compliance:</strong> To comply with applicable laws, regulations, legal processes, and governmental requests
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Security & Fraud Prevention:</strong> To protect against unauthorized access, maintain data security, and prevent fraudulent activity
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-500/30 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">SMS, Phone Communications & TCPA Compliance</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg font-semibold text-white">
                This section is critical for transparency and compliance with U.S. telecommunications laws.
              </p>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Collection of Phone Numbers</h3>
                <p>
                  You may voluntarily provide your phone number through website forms, booking requests, consultation calls, or direct communication with our team. By providing your phone number, you acknowledge that we may use it to contact you for the purposes described below.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">How We Use Phone Numbers</h3>
                <p className="mb-2">We may use your phone number to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide customer support and respond to service inquiries</li>
                  <li>Confirm appointments, strategy calls, and scheduled consultations</li>
                  <li>Send service-related updates, reminders, and notifications</li>
                  <li>Follow up on leads, quotes, and business proposals</li>
                  <li>Deliver marketing messages, promotional offers, and educational content (where consent has been obtained)</li>
                  <li>Conduct satisfaction surveys and gather feedback</li>
                </ul>
              </div>

              <div className="bg-slate-900/50 border border-amber-500/30 rounded-xl p-6 mt-6">
                <h3 className="text-white font-semibold text-lg mb-3">TCPA Compliance & Your Rights</h3>
                <p className="mb-4">
                  DineAuto complies with the Telephone Consumer Protection Act (TCPA) and related federal and state regulations governing telecommunications. We are committed to lawful, ethical communication practices.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong className="text-white">Consent:</strong> By providing your phone number and submitting a form or inquiry, you consent to receive communications from DineAuto at the number provided. For marketing messages, express written consent may be required in certain circumstances.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong className="text-white">Not a Condition of Purchase:</strong> Consent to receive marketing calls or text messages is NOT required as a condition of purchasing any goods or services from DineAuto.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong className="text-white">Message & Data Rates:</strong> Standard message and data rates may apply depending on your mobile carrier and plan. DineAuto is not responsible for carrier charges.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong className="text-white">Opt-Out:</strong> You may opt out of marketing text messages at any time by replying <strong className="text-white">STOP</strong> to any SMS message. You may also contact us directly at <a href="mailto:support@dineauto.com" className="text-amber-400 hover:text-amber-300 underline">support@dineauto.com</a> to request removal from our communication lists.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong className="text-white">No Unlawful Robocalling:</strong> We do NOT engage in unlawful automated calling practices, prerecorded voice messages to cell phones without consent, or any other prohibited telecommunications activities under the TCPA.</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm italic">
                Note: Transactional and service-related messages (such as appointment confirmations or critical account updates) may still be sent even if you opt out of marketing communications.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Payment Processing & Stripe Compliance</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                All payment transactions for DineAuto services are processed securely through <strong className="text-white">Stripe</strong>, a leading payment processor that is fully compliant with the Payment Card Industry Data Security Standard (PCI-DSS).
              </p>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">What This Means for You:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>DineAuto does NOT store, process, or have access to your full credit card numbers, CVV codes, or other sensitive payment details</li>
                  <li>All payment information is transmitted directly to Stripe using secure, encrypted connections</li>
                  <li>Stripe handles all payment data in accordance with the highest industry security standards</li>
                  <li>We may receive limited transaction metadata (such as the last four digits of your card, transaction amount, payment status, and billing information) for accounting, invoicing, and customer service purposes</li>
                  <li>For more information on how Stripe protects your payment data, please review <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">Stripe's Privacy Policy</a></li>
                </ul>
              </div>

              <p>
                By making a payment through our website, you acknowledge that your payment information will be processed by Stripe in accordance with their terms and privacy policy.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Data Sharing & Third Parties</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                DineAuto values your privacy and does NOT sell, rent, or trade your personal information to third parties for their own marketing purposes.
              </p>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">We May Share Your Information With:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Service Providers:</strong> Trusted third-party companies that help us operate our business, such as payment processors (Stripe), email marketing platforms, CRM systems, analytics tools, hosting providers, and automation software</li>
                  <li><strong className="text-white">Marketing & Analytics Partners:</strong> Google Analytics, Meta (Facebook), TikTok, and other advertising platforms to measure campaign performance and optimize marketing efforts</li>
                  <li><strong className="text-white">Legal Obligations:</strong> Law enforcement, regulatory authorities, or other parties when required by law, court order, or legal process</li>
                  <li><strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, sale of assets, or bankruptcy, your information may be transferred to the successor entity</li>
                  <li><strong className="text-white">With Your Consent:</strong> Any other parties to whom you explicitly authorize us to share your information</li>
                </ul>
              </div>

              <p>
                All third-party service providers are contractually obligated to protect your data and use it only for the purposes we specify. We conduct due diligence to ensure our partners maintain appropriate security and privacy standards.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Data Security</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Protecting your personal information is a top priority. DineAuto implements industry-standard security measures to safeguard your data against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Our Security Practices Include:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Secure Socket Layer (SSL) encryption for data transmission</li>
                  <li>Restricted access to personal information on a need-to-know basis</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Use of secure, password-protected servers and databases</li>
                  <li>Employee training on data privacy and security best practices</li>
                  <li>Compliance with industry standards and regulatory requirements</li>
                </ul>
              </div>

              <p>
                However, please be aware that no method of electronic transmission or storage is 100% secure. While we strive to protect your personal data, we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials and should notify us immediately of any unauthorized access.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Your Privacy Rights</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Depending on your location and applicable law, you may have certain rights regarding your personal information:
              </p>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">You Have the Right To:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong className="text-white">Correction:</strong> Request that we correct or update inaccurate or incomplete information</li>
                  <li><strong className="text-white">Deletion:</strong> Request that we delete your personal data, subject to legal and contractual obligations</li>
                  <li><strong className="text-white">Opt-Out:</strong> Unsubscribe from marketing emails and text messages at any time</li>
                  <li><strong className="text-white">Data Portability:</strong> Request your data in a structured, commonly used format</li>
                  <li><strong className="text-white">Object to Processing:</strong> Object to certain uses of your personal information, such as direct marketing</li>
                  <li><strong className="text-white">Withdraw Consent:</strong> Where processing is based on consent, you may withdraw it at any time</li>
                </ul>
              </div>

              <p>
                To exercise any of these rights, please contact us at <a href="mailto:support@dineauto.com" className="text-amber-400 hover:text-amber-300 underline">support@dineauto.com</a>. We will respond to your request within a reasonable timeframe and in accordance with applicable law.
              </p>

              <p className="text-sm italic">
                Note: Certain requests may be subject to verification of your identity to protect your privacy and security. We may also need to retain certain information for legal, accounting, or operational purposes.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Children's Privacy</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                DineAuto's services are intended for businesses and individuals who are at least 18 years of age or older. We do not knowingly collect, use, or solicit personal information from individuals under the age of 18.
              </p>
              <p>
                If we become aware that we have inadvertently collected personal information from a minor without proper parental consent, we will take immediate steps to delete such information from our records.
              </p>
              <p>
                If you believe that a minor has provided personal information to us, please contact us immediately at <a href="mailto:support@dineauto.com" className="text-amber-400 hover:text-amber-300 underline">support@dineauto.com</a>.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Policy Updates & Changes</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                DineAuto reserves the right to update or modify this Privacy Policy at any time to reflect changes in our practices, legal requirements, or business operations.
              </p>
              <p>
                When we make material changes to this policy, we will update the "Last Updated" date at the top of this page and may notify you through email, website banner, or other appropriate means.
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of our services after any changes constitutes your acceptance of the updated policy.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Contact Information</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us:
              </p>

              <div className="bg-slate-900/50 border border-amber-500/20 rounded-xl p-6">
                <div className="space-y-3">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Business Name</div>
                    <div className="text-white text-lg font-semibold">DineAuto LLC</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Privacy & Legal Inquiries</div>
                    <a
                      href="mailto:support@dineauto.com"
                      className="text-amber-400 text-lg font-semibold hover:text-amber-300 transition-colors"
                    >
                      support@dineauto.com
                    </a>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Mailing Address</div>
                    <div className="text-white">
                      30 N Gould St Ste R<br />
                      Sheridan, WY 82801
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm">
                We will respond to your inquiry within a reasonable timeframe and work to address your concerns in accordance with applicable privacy laws.
              </p>
            </div>
          </div>

        </div>
      </section>

      <ContactStrip />
    </div>
  );
}
