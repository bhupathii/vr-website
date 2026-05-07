import { Quote, Clock, MapPin } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import CTABanner from '../components/CTABanner';
import { testimonials, caseStudies } from '../data';
import SEO from '../components/SEO';

const colors = [
  'border-t-4 border-blue-500',
  'border-t-4 border-indigo-500',
  'border-t-4 border-purple-500',
  'border-t-4 border-emerald-500',
  'border-t-4 border-amber-500',
  'border-t-4 border-teal-500',
];

const stats = [
  { value: '2,000+', label: 'Students Placed', bg: 'bg-blue-50', color: 'text-blue-600' },
  { value: '95%', label: 'Visa Success Rate', bg: 'bg-green-50', color: 'text-green-600' },
  { value: '50+', label: 'Partner Universities', bg: 'bg-indigo-50', color: 'text-indigo-600' },
  { value: '8', label: 'Years Experience', bg: 'bg-amber-50', color: 'text-amber-600' },
];

export default function SuccessStories() {
  return (
    <main id="main-content">
      <SEO title="Student Success Stories - VR Global Experts" description="Read testimonials and success stories from our students studying abroad." />
      {/* Header */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&auto=format&fit=crop&q=70"
            alt="Graduating students"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-3">Success Stories</h1>
          <p className="text-blue-100 text-sm max-w-xl leading-relaxed">
            Real students, real outcomes. See how VR Global Experts helped them get where they are.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map(s => (
            <div key={s.label} className={`${s.bg} rounded-xl p-4 text-center`}>
              <p className={`text-3xl font-bold ${s.color} mb-1`}>{s.value}</p>
              <p className="text-base text-gray-800">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container-md">
          <div className="text-center mb-10">
            <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">Testimonials</span>
            <h2 className="section-title">What Students Say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} colorClass={colors[i % colors.length]} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">Case Studies</span>
            <h2 className="section-title">Detailed Cases</h2>
            <p className="section-sub">How specific students were guided from profile assessment to admission</p>
          </div>
          <div className="space-y-5">
            {caseStudies.map((c, i) => {
              const borderColors = ['border-l-4 border-blue-500', 'border-l-4 border-emerald-500', 'border-l-4 border-indigo-500'];
              return (
                <div key={c.student} className={`bg-white rounded-xl border border-gray-100 shadow-sm p-6 ${borderColors[i]}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shrink-0 shadow">
                      {c.student.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-800 text-sm">{c.student}</h3>
                        <span className="inline-flex items-center gap-1 text-base text-gray-800">
                          <Clock size={11} /> {c.timeline}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                        <div className="bg-blue-50 rounded-lg p-2.5">
                          <p className="text-blue-500 font-semibold mb-1 uppercase tracking-wide text-[10px]">Profile</p>
                          <p className="text-gray-700">{c.profile}</p>
                        </div>
                        <div className="bg-indigo-50 rounded-lg p-2.5">
                          <p className="text-indigo-500 font-semibold mb-1 uppercase tracking-wide text-[10px]">Goal</p>
                          <p className="text-gray-700">{c.goal}</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-2.5">
                          <p className="text-green-600 font-semibold mb-1 uppercase tracking-wide text-[10px]">Outcome</p>
                          <p className="text-gray-700">{c.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="section bg-gray-50">
        <div className="container-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=700&auto=format&fit=crop&q=80"
                alt="Graduating students celebration"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <Quote size={32} className="text-gray-700 mb-4" />
              <p className="text-lg font-medium text-gray-700 italic leading-relaxed mb-4">
                "These students came from diverse backgrounds — different scores, different budgets, different goals. What they had in common was clarity on where they wanted to go."
              </p>
              <p className="text-base text-gray-800">VR Global Experts Counseling Team</p>
              <div className="flex items-center gap-1 mt-4 text-base text-gray-800">
                <MapPin size={11} /> Jaggayyapeta, Andhra Pradesh, India
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Your success story starts here"
        subtitle="Book a consultation and we will help you build the right plan for your profile."
      />
    </main>
  );
}
