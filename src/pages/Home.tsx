import { Link } from 'react-router-dom';
import { CheckCircle, Users, Landmark, Globe, Award, ArrowRight } from 'lucide-react';
import CountryCard from '../components/CountryCard';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import EnquiryForm from '../components/EnquiryForm';
import { countries, services, testimonials } from '../data';
import SEO from '../components/SEO';

const steps = [
  { num: '01', title: 'Book a Free Consultation', desc: 'Talk to a counselor about your profile and goals. No cost, no obligation.', color: 'bg-blue-600' },
  { num: '02', title: 'Get Your Shortlist', desc: 'Receive a curated list of universities and countries based on your profile.', color: 'bg-indigo-600' },
  { num: '03', title: 'Prepare Applications', desc: 'We help with SOP drafting, LOR guidance, documentation, and deadlines.', color: 'bg-purple-600' },
  { num: '04', title: 'Apply and Track', desc: 'Submit applications and track progress across all universities.', color: 'bg-teal-600' },
  { num: '05', title: 'Visa and Pre-Departure', desc: 'Complete your visa and receive a thorough pre-departure briefing.', color: 'bg-emerald-600' },
];

const stats = [
  { value: '2,000+', label: 'Students Placed', Icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  { value: '50+',   label: 'Partner Universities', Icon: Landmark, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
  { value: '6',     label: 'Countries Covered', Icon: Globe, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  { value: '95%',   label: 'Visa Success Rate', Icon: Award, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
];

export default function Home() {
  return (
    <main id="main-content">
      <SEO title="VR Global Experts - Study Abroad Consultancy" description="Expert study abroad guidance for Indian students. University selection, visa assistance, scholarships, and more." />
      {/* ──── HERO ──── */}
      <section className="bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-5 border border-accent/30 tracking-wide">
              Trusted by 2,000+ Students
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Study Abroad Guidance for UG, PG, and MBA Students
            </h1>
            <p className="text-blue-100 mb-8 text-base leading-relaxed max-w-lg">
              VR Global Experts helps you choose the right country, university, and course — and manages the entire process from application to departure.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="bg-white text-primary px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                Book Free Consultation
              </Link>
              <Link to="/apply" className="border border-gold text-gold px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gold hover:text-primary transition-colors">
                Apply Now
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&w=700&h=400&fit=crop&auto=format&q=80"
                alt="Students graduating and studying abroad"
                width={700} height={320}
                fetchPriority="high"
                loading="eager"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-6 bg-white rounded-xl shadow-2xl p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-base text-gray-800">Latest Placement</p>
                  <p className="text-sm font-semibold text-gray-800">MS CS → University of Toronto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── STATS ──── */}
      <section className="py-8 px-4 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ value, label, Icon, color, bg, border }) => (
            <div key={label} className={`${bg} ${border} border rounded-xl p-4 flex items-center gap-3`}>
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                <Icon size={22} className={color} />
              </div>
              <div>
                <p className={`text-2xl font-bold ${color}`}>{value}</p>
                <p className="text-base text-gray-800">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ──── LEADERSHIP ──── */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="text-center mb-10">
            <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-1 rounded-full mb-3">Leadership</span>
            <h2 className="text-2xl font-bold text-primary mb-2">Meet Our Directors</h2>
            <p className="text-gray-700 text-sm">The people behind every student's success story</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CEO */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row">
              <div className="sm:w-2/5 h-72 sm:h-auto relative overflow-hidden shrink-0">
                <img
                  src="/ceo.png"
                  alt="CEO & Founder"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Nishanth Komati</h3>
                <p className="text-primary font-semibold mb-4 text-sm tracking-wide uppercase">CEO & Founder</p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Based in Switzerland with over a decade of experience in overseas education, Nishanth leads our vision to empower students. His strategic direction and global perspective have helped thousands achieve their study abroad dreams.
                </p>
              </div>
            </div>
            {/* MD */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row">
              <div className="sm:w-2/5 h-72 sm:h-auto relative overflow-hidden shrink-0">
                <img
                  src="/md.png"
                  alt="Managing Director"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Vasudev Komati</h3>
                <p className="text-primary font-semibold mb-4 text-sm tracking-wide uppercase">Managing Director</p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Driving operational excellence and building global partnerships, Vasudev ensures that our consulting services remain top-tier, delivering unparalleled value and seamless experiences to our students.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/about" className="inline-flex items-center gap-2 btn-outline">
              Learn More About Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ──── DESTINATIONS ──── */}
      <section className="section bg-gray-50">
        <div className="container-md">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-3 tracking-wide">
              Study Destinations
            </span>
            <h2 className="text-2xl font-bold text-primary mb-2">Choose Your Destination</h2>
            <p className="text-gray-700 text-sm">6 top destinations — with costs, visa guides, and university profiles</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {countries.map(c => (
              <CountryCard key={c.slug} {...c} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/study-abroad" className="inline-flex items-center gap-2 btn-outline">
              Compare All Destinations <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ──── SERVICES ──── */}
      <section className="section bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container-md">
          <div className="text-center mb-10">
            <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mb-3 tracking-wide">
              Our Services
            </span>
            <h2 className="text-2xl font-bold text-primary mb-2">End-to-End Support</h2>
            <p className="text-gray-700 text-sm">From planning to departure — everything handled in one place</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.slice(0, 6).map(s => (
              <ServiceCard key={s.slug} {...s} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              View All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ──── HOW IT WORKS ──── */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Steps */}
            <div>
              <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-3 py-1 rounded-full mb-4 tracking-wide">
                Process
              </span>
              <h2 className="text-2xl font-bold text-primary mb-2">How It Works</h2>
              <p className="text-base text-gray-800 mb-8">A clear, 5-step process from enquiry to departure</p>
              <ol className="space-y-5">
                {steps.map(s => (
                  <li key={s.num} className="flex gap-4 items-start">
                    <div className={`w-11 h-11 rounded-full ${s.color} text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-md`}>
                      {s.num}
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-gray-800 text-sm">{s.title}</p>
                      <p className="text-base text-gray-800 mt-0.5 leading-relaxed">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">Start Your Journey</Link>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&auto=format&fit=crop&q=80"
                alt="One-on-one counseling session"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ──── WHY CHOOSE US ──── */}
      <section className="section bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl hidden lg:block order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&auto=format&fit=crop&q=80"
                alt="Students collaborating"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-3 py-1 rounded-full mb-4 tracking-wide">
                Why Choose Us
              </span>
              <h2 className="text-2xl font-bold text-primary mb-2">Why Students Choose VR Global Experts</h2>
              <p className="text-base text-gray-800 mb-6">Practical reasons backed by track record</p>
              <div className="space-y-3">
                {[
                  'Free initial consultation with no obligation',
                  'University recommendations based on your actual profile',
                  'Application support: SOP, LOR, and documentation',
                  'Visa guidance with 95% approval track record',
                  'Scholarship and education loan connections',
                  'Pre-departure briefing before you fly',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3 bg-white/80 backdrop-blur rounded-lg p-3 border border-orange-100 shadow-sm">
                    <CheckCircle size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                    <p className="text-base text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── TESTIMONIALS ──── */}
      <section className="section bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container-md">
          <div className="text-center mb-10">
            <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full mb-3 tracking-wide">
              Student Stories
            </span>
            <h2 className="text-2xl font-bold text-primary mb-2">What Students Say</h2>
            <p className="text-gray-700 text-sm">Direct feedback from students who used our services</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.slice(0, 3).map((t, i) => (
              <TestimonialCard
                key={t.name}
                {...t}
                index={i}
                colorClass={['border-t-4 border-blue-500', 'border-t-4 border-indigo-500', 'border-t-4 border-purple-500'][i]}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/success-stories" className="btn-outline inline-flex items-center gap-2">
              View All Stories <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ──── ENQUIRY FORM ──── */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4 tracking-wide">
                Get Started
              </span>
              <h2 className="text-2xl font-bold text-primary mb-2">Send an Enquiry</h2>
              <p className="text-base text-gray-800 mb-6">
                Fill in the form and a counselor will contact you within 1 business day.
              </p>
              <EnquiryForm compact />
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white shadow-xl">
              <h3 className="font-semibold mb-5 text-base">What to expect after enquiry</h3>
              <ul className="space-y-4 mb-6">
                {[
                  { step: '1', text: 'Counselor call within 24 hours' },
                  { step: '2', text: 'Profile assessment in first session' },
                  { step: '3', text: 'University shortlist within 3 days' },
                  { step: '4', text: 'Clear cost and timeline overview' },
                ].map(item => (
                  <li key={item.text} className="flex items-start gap-3 text-sm text-blue-100">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center font-bold shrink-0">
                      {item.step}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <div className="border-t border-blue-700 pt-4">
                <p className="text-sm text-blue-200 mb-1">Prefer to call directly?</p>
                <p className="text-sm font-semibold text-accent">+91 9912174913</p>
                <p className="text-sm text-blue-100">info@vrglobalexperts.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── PARTNER UNIVERSITIES STRIP ──── */}
      <section className="py-10 px-4 bg-gray-50 border-t border-gray-100">
        <div className="container-md">
          <p className="text-center text-sm font-semibold text-gray-700 uppercase tracking-widest mb-6">
            Students Placed At
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-semibold text-gray-700">
            {['MIT', 'University of Toronto', 'University of Melbourne', 'TU Munich', 'Imperial College London', 'Stanford', 'McGill University', 'Trinity College Dublin'].map(u => (
              <span key={u} className="bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm text-gray-700 text-sm">
                {u}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
