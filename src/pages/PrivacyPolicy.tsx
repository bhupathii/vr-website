import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <main id="main-content">
      <SEO title="Privacy Policy - VR Global Experts" description="Privacy policy and data protection for VR Global Experts." />
      <section className="bg-primary text-white py-12 px-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <Shield size={28} className="text-accent shrink-0" />
          <div>
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
            <p className="text-blue-100 text-sm mt-1">Last updated: April 2025</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto prose prose-sm text-gray-700 space-y-8">

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">1. Information We Collect</h2>
            <p className="leading-relaxed">
              When you use our website or submit an enquiry, we may collect personal information including your name, email address, phone number, and details about your study abroad interests. We collect this information solely to provide our consultancy services to you.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1 leading-relaxed">
              <li>To respond to your enquiries and provide consultancy services</li>
              <li>To send relevant information about universities, visas, and scholarships</li>
              <li>To improve our services and website experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">3. Data Sharing</h2>
            <p className="leading-relaxed">
              We do not sell or rent your personal information to third parties. We may share your information with partner universities or financial institutions only with your explicit consent, as part of the application process.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">4. Data Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">5. Your Rights</h2>
            <p className="leading-relaxed">
              You have the right to access, correct, or request deletion of your personal data at any time. To exercise these rights, contact us at <a href="mailto:info@vrglobalexperts.com" className="text-accent hover:underline">info@vrglobalexperts.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">6. Cookies</h2>
            <p className="leading-relaxed">
              Our website may use cookies to improve your browsing experience. You can disable cookies in your browser settings at any time.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">7. Contact</h2>
            <p className="leading-relaxed">
              For any privacy-related questions, please contact us at <a href="mailto:info@vrglobalexperts.com" className="text-accent hover:underline">info@vrglobalexperts.com</a> or visit our <Link to="/contact" className="text-accent hover:underline">Contact page</Link>.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
