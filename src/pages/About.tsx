import { MapPin, Phone, Mail, Target, Users, Award, Globe } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import SEO from '../components/SEO';

const values = [
  { title: 'Student First', desc: 'Every recommendation is based on what is actually best for the student, not inflated metrics.', Icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  { title: 'Clarity Over Hype', desc: 'We give honest assessments of chances, costs, and career outcomes — not just what you want to hear.', Icon: Target, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { title: 'End-to-End Support', desc: 'We stay involved from initial consultation through to departure, not just the application.', Icon: Globe, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { title: 'Track Record', desc: '2,000+ students placed. Results over promises.', Icon: Award, color: 'text-amber-600', bg: 'bg-amber-50' },
];

export default function About() {
  return (
    <main id="main-content">
      <SEO title="About Us - VR Global Experts" description="Learn about VR Global Experts, your trusted study abroad consultancy." />
      {/* Header with image */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&auto=format&fit=crop&q=70"
            alt="Consulting office team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-3">About VR Global Experts</h1>
          <p className="text-blue-100 text-sm max-w-xl leading-relaxed">
            A Jaggayyapeta-based overseas education consultancy helping students study abroad since 2015.
          </p>
        </div>
      </section>

      {/* Story + Image */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">Our Story</span>
              <h2 className="section-title">Started With a Single Consultation</h2>
              <div className="space-y-3 text-base text-gray-800 leading-relaxed">
                <p>
                  VR Global Experts was founded in Jaggayyapeta in 2015 by Venkat R., who had personally experienced the confusion and lack of clear guidance during his own study abroad process.
                </p>
                <p>
                  Starting with five students in the first year, the company grew through word of mouth and a focus on genuinely useful, personalized advice rather than generic templates.
                </p>
                <p>
                  Today, we have placed over 2,000 students across 6 countries, with a team of specialists covering counseling, applications, visas, and pre-departure preparation.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&auto=format&fit=crop&q=80"
                alt="Team in office"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray-50">
        <div className="container-md">
          <div className="text-center mb-10">
            <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">Values</span>
            <h2 className="section-title">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map(v => {
              const Icon = v.Icon;
              return (
                <div key={v.title} className={`${v.bg} rounded-xl p-5 border border-transparent flex items-start gap-4`}>
                  <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    <Icon size={22} className={v.color} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">{v.title}</h3>
                    <p className="text-base text-gray-800 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="text-center mb-12">
            <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-1 rounded-full mb-3">Leadership</span>
            <h2 className="section-title">Meet Our Directors</h2>
            <p className="section-sub">Guiding the vision and strategy of VR Global Experts</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group">
              <div className="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden shrink-0">
                <img
                  src="/ceo.png"
                  alt="CEO & Founder"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Nishanth Komati</h3>
                <p className="text-primary font-semibold mb-4 text-sm tracking-wide uppercase">CEO & Founder</p>
                <p className="text-gray-600 leading-relaxed">
                  Based in Switzerland with over a decade of experience in overseas education, Nishanth leads our vision to empower students. His strategic direction and global perspective have helped thousands achieve their study abroad dreams across the world.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group">
              <div className="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden shrink-0">
                <img
                  src="/md.png"
                  alt="Managing Director"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Vasudev Komati</h3>
                <p className="text-primary font-semibold mb-4 text-sm tracking-wide uppercase">Managing Director</p>
                <p className="text-gray-600 leading-relaxed">
                  Driving operational excellence and building global partnerships, Vasudev ensures that our consulting services remain top-tier, delivering unparalleled value and seamless experiences to our students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="section bg-gray-50">
        <div className="container-md">
          <div className="bg-primary rounded-2xl p-8 text-white grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Phone size={24} className="text-accent" />
              <p className="text-sm text-blue-200">Call us</p>
              <p className="font-semibold text-center">+91 9912174913</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail size={24} className="text-accent" />
              <p className="text-sm text-blue-200">Email us</p>
              <p className="font-semibold">info@vrglobalexperts.com</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin size={24} className="text-accent" />
              <p className="text-sm text-blue-200">Visit us</p>
              <p className="font-semibold text-center">Kamala Theatre Road, jaggayyapeta</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to know more before starting?"
        subtitle="Schedule a free 30-minute call with one of our counselors."
      />
    </main>
  );
}
