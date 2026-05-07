import ServiceCard from '../components/ServiceCard';
import CTABanner from '../components/CTABanner';
import { services } from '../data';
import SEO from '../components/SEO';

export default function Services() {
  return (
    <main id="main-content">
      <SEO title="Our Services - VR Global Experts" description="End-to-end support for study abroad: University selection, visa, and more." />
      {/* Header with background image */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&auto=format&fit=crop&q=70"
            alt="Consultancy services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-3">Services</h1>
          <p className="text-blue-100 text-sm max-w-xl leading-relaxed">
            End-to-end support from initial planning to departure — applications, visas, scholarships, and more.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container-md">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">All Services</span>
            <h2 className="section-title">What We Offer</h2>
            <p className="section-sub">Select a service to learn more about how it works</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(s => (
              <ServiceCard key={s.slug} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Table */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="text-center mb-10">
            <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">Timeline</span>
            <h2 className="section-title">How Services Work Together</h2>
            <p className="section-sub">Services are delivered in sequence based on your progress</p>
          </div>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-5 py-3.5 text-sm font-semibold">Stage</th>
                  <th className="text-left px-5 py-3.5 text-sm font-semibold">Service</th>
                  <th className="text-left px-5 py-3.5 text-sm font-semibold">Typical Timeline</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Planning', 'Career Counseling, University Selection', 'Week 1–2'],
                  ['Preparation', 'Application Support, Test Preparation', 'Week 3–8'],
                  ['Application', 'Application Support, Scholarships', 'Week 6–12'],
                  ['Post-Admit', 'Visa Assistance, Education Loans', 'After acceptance'],
                  ['Departure', 'Pre-Departure Support', '2–4 weeks before travel'],
                ].map(([stage, service, timeline], i) => (
                  <tr key={stage} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3 font-semibold text-primary text-sm">{stage}</td>
                    <td className="px-5 py-3 text-gray-700 text-sm">{service}</td>
                    <td className="px-5 py-3 text-gray-700 text-sm">{timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Image section */}
      <section className="section bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-3">From Zero to Departure</h2>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Most students work with us for 4–8 months before departure. We coordinate all services so nothing falls through the gaps — from your first profile assessment to the day you board your flight.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/contact" className="bg-white text-primary px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100">
                  Book Consultation
                </a>
                <a href="/apply" className="border border-white text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-white/10">
                  Apply Now
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&auto=format&fit=crop&q=80"
                alt="Student counseling session"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need help deciding which services apply to you?"
        subtitle="Book a free consultation and we will walk you through what you need."
      />
    </main>
  );
}
