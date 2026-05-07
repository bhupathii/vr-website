import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <main id="main-content">
      <SEO title="Terms & Conditions - VR Global Experts" description="Terms of service for VR Global Experts website." />
      <section className="bg-primary text-white py-12 px-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <FileText size={28} className="text-accent shrink-0" />
          <div>
            <h1 className="text-2xl font-bold">Terms of Use & Disclaimer</h1>
            <p className="text-blue-100 text-sm mt-1">Last updated: April 2025</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-gray-700 space-y-8">

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using this website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">2. Services</h2>
            <p className="leading-relaxed">
              VR Global Experts Pvt Ltd provides study abroad consultancy services. Our guidance is advisory in nature — final admissions and visa decisions are made solely by universities and government authorities. We do not guarantee admission or visa approval.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">3. Disclaimer</h2>
            <p className="leading-relaxed">
              The information provided on this website is for general informational purposes only. While we strive to keep information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, or reliability of the information. University rankings, tuition fees, and visa requirements change frequently — always verify directly with the respective institution or embassy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">4. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on this website — including text, graphics, logos, and images — is the property of VR Global Experts Pvt Ltd and is protected by applicable intellectual property laws. Reproduction without prior written consent is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">5. Third-Party Links</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">6. Limitation of Liability</h2>
            <p className="leading-relaxed">
              VR Global Experts Pvt Ltd shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services or website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">7. Governing Law</h2>
            <p className="leading-relaxed">
              These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Jaggayyapeta, NTR district, Andhra Pradesh.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">8. Contact</h2>
            <p className="leading-relaxed">
              Questions about these terms? Contact us at <a href="mailto:info@vrglobalexperts.com" className="text-accent hover:underline">info@vrglobalexperts.com</a> or visit our <Link to="/contact" className="text-accent hover:underline">Contact page</Link>.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
