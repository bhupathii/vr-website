import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { countries } from '../data';

const countryFlagMap: Record<string, string> = {
  usa: 'us', uk: 'gb', canada: 'ca', australia: 'au', germany: 'de', ireland: 'ie',
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      {/* Top highlight bar */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-accent to-emerald-400" />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="bg-white rounded-xl inline-block px-3 py-2 mb-4 shadow-sm">
              <img
                src="/logo.png"
                alt="VR Global Experts Pvt Ltd"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-blue-100 leading-relaxed mb-4">
              Helping students find the right university and country for their abroad education goals.
            </p>
            <div className="space-y-2 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-accent" />
                <span>+91 9912174913</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={12} className="text-accent" />
                <span>info@vrglobalexperts.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={12} className="text-accent" />
                <span>Kamala Theatre Road, jaggayyapeta, NTR district, Andhrapradesh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Study Abroad', to: '/study-abroad' },
                { label: 'Services', to: '/services' },
                { label: 'Universities', to: '/universities' },
                { label: 'Success Stories', to: '/success-stories' },
                { label: 'Resources', to: '/resources' },
                { label: 'About Us', to: '/about' },
                { label: 'Contact', to: '/contact' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-blue-200 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Destinations with flags */}
          <div>
            <h4 className="font-semibold mb-4 text-sm text-white">Study Destinations</h4>
            <ul className="space-y-2">
              {['usa', 'uk', 'canada', 'australia', 'germany', 'ireland'].map(slug => {
                const country = countries.find(c => c.slug === slug);
                return (
                  <li key={slug}>
                    <Link
                      to={`/study-abroad/country/${slug}`}
                      className="flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors group"
                    >
                      <img
                        src={`https://flagcdn.com/w20/${countryFlagMap[slug]}.png`}
                        alt={country?.name}
                        className="w-5 h-3.5 object-cover rounded-sm border border-white/10"
                      />
                      <span>Study in {country?.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4 text-sm text-white">Get Started</h4>
            <p className="text-sm text-blue-100 mb-4 leading-relaxed">
              Not sure where to begin? Book a free session with a counselor.
            </p>
            <div className="space-y-3">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-accent text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-accent-dark transition-colors"
              >
                Book Free Consultation
              </Link>
              <Link
                to="/apply"
                className="flex items-center justify-center gap-2 border border-blue-400 text-blue-100 text-sm font-medium px-5 py-3 rounded-xl hover:bg-blue-800 transition-colors"
              >
                Apply Now <ArrowRight size={13} />
              </Link>
            </div>
            <p className="text-sm text-blue-200 mt-4">Mon – Sat, 10 AM – 6 PM IST</p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-blue-200">
          <p>© 2025 VR Global Experts Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
