import ContactStrip from '../components/ContactStrip';
import { FileText, CheckCircle, AlertTriangle, CreditCard, Phone, Shield, Scale, Bell, Mail } from 'lucide-react';

export default function Terms() {
  return (
    <div>
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Scale className="text-amber-400 mr-4" size={48} />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Terms &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Conditions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using DineAuto's services. By accessing or using our website and services, you agree to be bound by these Terms & Conditions.
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
              <CheckCircle className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                Welcome to DineAuto, operated by DineAuto LLC. These Terms & Conditions ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and DineAuto regarding your access to and use of our website, services, products, and related offerings.
              </p>
              <p>
                By accessing our website at any DineAuto domain, submitting an inquiry, booking a consultation, engaging our services, or making a payment, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy.
              </p>
              <p>
                These Terms apply to all visitors, prospective clients, paying customers, and any other users of our website and services. If you do not agree to these Terms, you must immediately cease using our website and services.
              </p>
              <p className="text-sm italic text-gray-400">
                IMPORTANT: By continuing to use DineAuto's services, you represent that you are at least 18 years of age and have the legal capacity to enter into this agreement.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Services Description</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                DineAuto provides a comprehensive suite of marketing, artificial intelligence (AI) automation, customer relationship management (CRM), paid advertising, website development, and related consulting services specifically designed for the restaurant and hospitality industry.
              </p>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Our Services Include, But Are Not Limited To:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AI-powered chatbots and voice assistants for customer engagement</li>
                  <li>Automated SMS and email marketing campaigns</li>
                  <li>Social media management and advertising (Meta, TikTok, Instagram, Facebook)</li>
                  <li>Google Ads and search engine marketing</li>
                  <li>Reputation management and review automation</li>
                  <li>CRM setup, database management, and lead nurturing workflows</li>
                  <li>Website design, development, and optimization</li>
                  <li>Landing page and funnel creation</li>
                  <li>Marketing strategy consulting and implementation</li>
                  <li>AI-generated content, voiceovers, and music creation</li>
                  <li>Appointment scheduling and reservation automation</li>
                  <li>Analytics, reporting, and performance tracking</li>
                </ul>
              </div>

              <p>
                DineAuto reserves the right to modify, expand, reduce, or discontinue any service offerings at any time without prior notice. Service specifications, features, and deliverables will be outlined in individual service agreements or statements of work.
              </p>
              <p className="text-sm italic text-gray-400">
                Note: The scope of services provided to each client may vary based on the selected package, custom agreement, and individual business needs.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-500/30 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">No Guaranteed Results Disclaimer</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg font-semibold text-white">
                CRITICAL NOTICE: DineAuto makes NO guarantees regarding specific business outcomes, revenue increases, or performance results.
              </p>

              <p>
                While we are committed to delivering high-quality services and implementing proven strategies, marketing and business success depend on numerous factors outside of our control, including but not limited to:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Market conditions, competition, and economic factors</li>
                <li>Restaurant location, concept, pricing, and menu quality</li>
                <li>Service quality, staff performance, and customer experience</li>
                <li>Brand reputation, existing customer base, and historical performance</li>
                <li>Industry trends, seasonal fluctuations, and consumer behavior</li>
                <li>Client execution, follow-through, and operational efficiency</li>
                <li>External events, regulations, and unforeseen circumstances</li>
              </ul>

              <div className="bg-slate-900/50 border border-amber-500/30 rounded-xl p-6 mt-6">
                <h3 className="text-white font-semibold text-lg mb-3">What We Provide:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong className="text-white">Expert Strategy:</strong> Proven frameworks and best practices for restaurant marketing and automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong className="text-white">Professional Execution:</strong> High-quality implementation of agreed-upon services and deliverables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong className="text-white">Ongoing Optimization:</strong> Continuous monitoring, testing, and improvement of campaigns and systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong className="text-white">Support & Guidance:</strong> Access to our team for questions, troubleshooting, and strategic advice</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm italic">
                Any case studies, testimonials, earnings claims, or success stories presented on our website or marketing materials represent specific results achieved by individual clients under unique circumstances. These examples are provided for illustrative purposes only and should NOT be interpreted as typical, average, or guaranteed outcomes.
              </p>

              <p className="font-semibold text-white">
                By engaging our services, you acknowledge that you understand and accept these limitations and assume full responsibility for your business results.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">User Responsibilities</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                As a user of DineAuto's website and services, you agree to the following responsibilities:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">Accurate Information</h3>
                  <p>
                    You must provide accurate, complete, and up-to-date information when submitting forms, creating accounts, or communicating with our team. You are responsible for maintaining the confidentiality of any login credentials and notifying us immediately of any unauthorized access to your account.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">Legal Compliance</h3>
                  <p>
                    You are solely responsible for ensuring that your use of DineAuto's services complies with all applicable federal, state, and local laws and regulations, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Food service and restaurant industry regulations</li>
                    <li>Advertising standards and truth-in-advertising laws</li>
                    <li>Data privacy laws (GDPR, CCPA, etc.)</li>
                    <li>Telecommunications regulations (TCPA, CAN-SPAM, etc.)</li>
                    <li>Intellectual property and trademark laws</li>
                    <li>Labor and employment laws</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">Prohibited Activities</h3>
                  <p className="mb-2">You agree NOT to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use our services for any unlawful, fraudulent, or malicious purpose</li>
                    <li>Attempt to gain unauthorized access to our systems, networks, or data</li>
                    <li>Interfere with or disrupt the functionality of our website or services</li>
                    <li>Copy, reproduce, or redistribute our proprietary materials without permission</li>
                    <li>Send spam, unsolicited communications, or engage in unethical marketing practices</li>
                    <li>Violate any third-party rights or terms of service</li>
                    <li>Misrepresent your identity or affiliation with any person or entity</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">Cooperation</h3>
                  <p>
                    You agree to cooperate with DineAuto in good faith, provide timely access to necessary information and resources, and respond to reasonable requests to ensure successful service delivery.
                  </p>
                </div>
              </div>

              <p className="text-sm italic text-gray-400 pt-4">
                Failure to comply with these responsibilities may result in suspension or termination of services without refund.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Payments & Billing</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                All payments for DineAuto services are processed securely through <strong className="text-white">Stripe</strong>, a third-party payment processor that complies with PCI-DSS standards.
              </p>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Payment Terms</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>DineAuto does NOT store, process, or have access to your full credit card information</li>
                  <li>Payment amounts, billing cycles, and due dates will be specified in your service agreement or invoice</li>
                  <li>Payment is due upon receipt unless otherwise stated in writing</li>
                  <li>Recurring services (subscriptions, retainers, monthly packages) will be billed automatically on the agreed schedule</li>
                  <li>You authorize DineAuto to charge your payment method on file for all applicable fees and charges</li>
                  <li>Prices are subject to change with 30 days' notice for ongoing services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Late Payments & Non-Payment</h3>
                <p>
                  Failure to make timely payments may result in:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Late fees as specified in your agreement</li>
                  <li>Suspension or termination of services until payment is received</li>
                  <li>Referral to collections or legal action for outstanding balances</li>
                  <li>Reporting to credit bureaus for delinquent accounts</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Taxes</h3>
                <p>
                  All fees are exclusive of applicable federal, state, and local taxes, duties, or levies. You are responsible for payment of all such taxes unless you provide a valid tax exemption certificate.
                </p>
              </div>

              <p className="text-sm italic text-gray-400">
                For questions about billing, invoices, or payment methods, please contact us at <a href="mailto:support@dineauto.com" className="text-amber-400 hover:text-amber-300 underline">support@dineauto.com</a>.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Refunds & Cancellations</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                DineAuto's refund and cancellation policies are as follows:
              </p>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">General Refund Policy</h3>
                <p>
                  Refunds are NOT guaranteed and are provided at DineAuto's sole discretion. Due to the nature of digital services, marketing campaigns, and custom work, most services are non-refundable once delivered or initiated.
                </p>
                <p className="mt-2">
                  Any specific refund terms, satisfaction guarantees, or money-back policies will be explicitly stated in your individual service agreement or proposal. If no refund terms are mentioned, the service is considered non-refundable.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Cancellations</h3>
                <p>
                  You may cancel ongoing services by providing written notice to DineAuto. Cancellation terms, notice periods, and any applicable fees will be outlined in your service agreement. Unless otherwise specified:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Recurring subscriptions require 30 days' written notice to cancel</li>
                  <li>You remain responsible for payment of all services rendered up to the cancellation date</li>
                  <li>Prepaid services are non-refundable unless otherwise stated</li>
                  <li>Cancellation does not entitle you to a prorated refund unless explicitly agreed upon</li>
                </ul>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                <h3 className="text-white font-semibold text-lg mb-3">Chargebacks & Disputes</h3>
                <p>
                  Initiating a chargeback or payment dispute for services already delivered is considered a breach of these Terms and may result in:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Immediate termination of all services</li>
                  <li>Suspension of access to all accounts, systems, and deliverables</li>
                  <li>Legal action to recover owed amounts plus fees and legal costs</li>
                  <li>Reporting to collections agencies and credit bureaus</li>
                </ul>
                <p className="mt-4">
                  If you have a billing dispute, please contact us directly at <a href="mailto:support@dineauto.com" className="text-amber-400 hover:text-amber-300 underline">support@dineauto.com</a> before initiating a chargeback. We are committed to resolving issues fairly and promptly.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-500/30 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">SMS, Phone Communications & TCPA Compliance</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                DineAuto complies with the Telephone Consumer Protection Act (TCPA) and related telecommunications regulations.
              </p>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Phone Number Collection & Use</h3>
                <p>
                  By voluntarily providing your phone number through our website, forms, or direct communication, you consent to receive calls, text messages (SMS), and other communications from DineAuto for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Service-related updates, notifications, and support</li>
                  <li>Appointment confirmations and reminders</li>
                  <li>Follow-ups on inquiries, consultations, and proposals</li>
                  <li>Account and billing information</li>
                  <li>Marketing messages, promotional offers, and educational content (where consent is provided)</li>
                </ul>
              </div>

              <div className="bg-slate-900/50 border border-amber-500/30 rounded-xl p-6">
                <h3 className="text-white font-semibold text-lg mb-3">Your Rights & Consent</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong className="text-white">Consent Is Not Required to Purchase:</strong> Agreeing to receive marketing communications is NOT a condition of purchasing any services from DineAuto.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong className="text-white">Message & Data Rates May Apply:</strong> Standard messaging and data rates from your mobile carrier may apply to SMS messages. DineAuto is not responsible for carrier charges.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong className="text-white">Opt-Out Anytime:</strong> You may opt out of marketing text messages at any time by replying <strong className="text-white">STOP</strong> to any SMS. You may also email us at <a href="mailto:support@dineauto.com" className="text-amber-400 hover:text-amber-300 underline">support@dineauto.com</a> to request removal from all communication lists.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong className="text-white">Transactional Messages:</strong> Even after opting out of marketing communications, you may still receive transactional messages related to your active services, such as appointment confirmations or critical account updates.</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm italic">
                DineAuto does NOT engage in unlawful robocalling, unsolicited telemarketing, or prohibited automated communications. We respect your communication preferences and comply with all applicable regulations.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Intellectual Property</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                All content, materials, branding, designs, logos, trademarks, software, systems, processes, templates, and proprietary information displayed on the DineAuto website or provided through our services are the exclusive property of DineAuto LLC / DineAuto or its licensors.
              </p>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Your Rights to Deliverables</h3>
                <p>
                  When you purchase services from DineAuto, you receive a limited, non-exclusive, non-transferable license to use the deliverables (such as ad creatives, landing pages, or custom content) solely for your own restaurant's marketing purposes, unless otherwise specified in a written agreement.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Restrictions</h3>
                <p className="mb-2">You may NOT:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Copy, reproduce, modify, or create derivative works from DineAuto's proprietary systems, processes, or methodologies</li>
                  <li>Resell, redistribute, or sublicense any DineAuto services or materials</li>
                  <li>Reverse-engineer, decompile, or attempt to extract source code from our software or systems</li>
                  <li>Remove or alter any copyright, trademark, or proprietary notices</li>
                  <li>Use DineAuto's branding, trademarks, or intellectual property without explicit written permission</li>
                </ul>
              </div>

              <p className="text-sm italic text-gray-400">
                Unauthorized use of DineAuto's intellectual property may result in legal action, including claims for damages and injunctive relief.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg font-semibold text-white">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, DINEAUTO AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AND PARTNERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF OUR SERVICES.
              </p>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">This Includes, But Is Not Limited To:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Loss of profits, revenue, sales, or business opportunities</li>
                  <li>Loss of data, goodwill, or reputation</li>
                  <li>Service interruptions, errors, or downtime</li>
                  <li>Third-party service failures or platform outages</li>
                  <li>Unauthorized access to or use of your data</li>
                  <li>Any damages resulting from your reliance on our services or advice</li>
                </ul>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                <h3 className="text-white font-semibold text-lg mb-3">Maximum Liability Cap</h3>
                <p>
                  In no event shall DineAuto's total aggregate liability to you for all claims arising out of or related to these Terms or your use of our services exceed the total amount you have paid to DineAuto in the twelve (12) months preceding the claim.
                </p>
              </div>

              <p>
                These limitations apply regardless of the legal theory of liability (contract, tort, negligence, strict liability, or otherwise) and even if DineAuto has been advised of the possibility of such damages.
              </p>

              <p className="text-sm italic text-gray-400">
                Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities. In such jurisdictions, the above limitations may not apply to you, and DineAuto's liability will be limited to the greatest extent permitted by law.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Third-Party Tools & Platforms</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                DineAuto's services may integrate with, rely on, or utilize third-party platforms, tools, and services, including but not limited to:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment processors (Stripe)</li>
                <li>Advertising platforms (Meta, Google Ads, TikTok)</li>
                <li>CRM and automation tools (GoHighLevel, Zapier, etc.)</li>
                <li>Analytics and tracking services (Google Analytics, Facebook Pixel)</li>
                <li>Website hosting and cloud infrastructure providers</li>
                <li>AI and machine learning APIs</li>
                <li>Email and SMS delivery services</li>
              </ul>

              <div className="bg-slate-900/50 border border-gray-700 rounded-xl p-6 mt-6">
                <h3 className="text-white font-semibold text-lg mb-3">Disclaimer of Third-Party Responsibility</h3>
                <p>
                  DineAuto is NOT responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>The availability, performance, or functionality of third-party services</li>
                  <li>Changes to third-party APIs, policies, pricing, or terms of service</li>
                  <li>Outages, downtime, bugs, or technical issues with external platforms</li>
                  <li>Data breaches, security vulnerabilities, or privacy issues at third-party providers</li>
                  <li>Any actions, errors, or omissions by third-party vendors</li>
                </ul>
              </div>

              <p>
                Your use of third-party services is subject to those providers' respective terms of service and privacy policies. DineAuto makes no warranties or representations regarding third-party services and disclaims all liability related to their use.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Termination</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Termination by DineAuto</h3>
                <p>
                  DineAuto reserves the right to suspend, terminate, or refuse service to any user at any time, with or without notice, for any reason, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Violation of these Terms & Conditions</li>
                  <li>Non-payment or late payment of fees</li>
                  <li>Abusive, threatening, or inappropriate conduct toward our team</li>
                  <li>Fraudulent activity or misuse of services</li>
                  <li>Legal, regulatory, or business reasons</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Termination by User</h3>
                <p>
                  You may terminate your use of DineAuto's services at any time by providing written notice in accordance with your service agreement. Termination does not relieve you of any obligations to pay for services already rendered or fees incurred prior to termination.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Effects of Termination</h3>
                <p>
                  Upon termination of services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Your access to DineAuto accounts, dashboards, and systems will be revoked</li>
                  <li>All outstanding balances become immediately due and payable</li>
                  <li>DineAuto may cease providing any ongoing support, maintenance, or services</li>
                  <li>Provisions regarding payment, intellectual property, confidentiality, and liability shall survive termination</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Governing Law & Dispute Resolution</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Governing Law</h3>
                <p>
                  These Terms & Conditions shall be governed by and construed in accordance with the laws of the <strong className="text-white">State of Wyoming</strong> and the <strong className="text-white">United States of America</strong>, without regard to conflict of law principles.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Jurisdiction & Venue</h3>
                <p>
                  You agree that any legal action, dispute, or claim arising out of or related to these Terms or your use of DineAuto's services shall be brought exclusively in the state or federal courts located in <strong className="text-white">Sheridan County, Wyoming</strong>. You consent to the personal jurisdiction and venue of such courts.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Dispute Resolution</h3>
                <p>
                  In the event of a dispute, both parties agree to make a good-faith effort to resolve the matter informally before pursuing formal legal action. Contact us at <a href="mailto:support@dineauto.com" className="text-amber-400 hover:text-amber-300 underline">support@dineauto.com</a> to initiate informal resolution.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">Waiver of Class Actions</h3>
                <p>
                  You agree to resolve disputes with DineAuto on an individual basis only. You waive any right to bring or participate in any class action, collective action, or representative proceeding against DineAuto.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Updates to These Terms</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                DineAuto reserves the right to update, modify, or revise these Terms & Conditions at any time, for any reason, without prior notice. Changes may be necessary due to legal requirements, business operations, service updates, or other factors.
              </p>
              <p>
                When we make material changes to these Terms, we will update the "Last Updated" date at the top of this page. We may also notify you via email, website banner, or other appropriate means.
              </p>
              <p>
                Your continued use of DineAuto's website or services after any changes to these Terms constitutes your acceptance of the updated Terms. If you do not agree to the revised Terms, you must immediately cease using our services.
              </p>
              <p className="text-sm italic text-gray-400">
                We recommend reviewing these Terms periodically to stay informed of any updates.
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
                If you have any questions, concerns, or inquiries regarding these Terms & Conditions, your service agreement, billing matters, or any other legal or contractual issues, please contact us:
              </p>

              <div className="bg-slate-900/50 border border-amber-500/20 rounded-xl p-6">
                <div className="space-y-3">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Business Name</div>
                    <div className="text-white text-lg font-semibold">DineAuto LLC</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Email (Legal & Support)</div>
                    <a
                      href="mailto:support@dineauto.com"
                      className="text-amber-400 text-lg font-semibold hover:text-amber-300 transition-colors"
                    >
                      support@dineauto.com
                    </a>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Registered Address</div>
                    <div className="text-white">
                      30 N Gould St Ste R<br />
                      Sheridan, WY 82801<br />
                      United States
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm">
                We will respond to your inquiry within a reasonable timeframe. For urgent matters, please clearly indicate "URGENT" in your email subject line.
              </p>
            </div>
          </div>

        </div>
      </section>

      <ContactStrip />
    </div>
  );
}
