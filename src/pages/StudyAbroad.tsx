import CountryCard from '../components/CountryCard';
import CTABanner from '../components/CTABanner';
import { countries } from '../data';
import { BookOpen, GraduationCap, Stethoscope, Cpu, Briefcase, Scale } from 'lucide-react';
import SEO from '../components/SEO';

const courses = [
  { name: 'Engineering', desc: 'BEng, MEng, MS – available in all 6 destinations', Icon: Cpu, color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'Business / MBA', desc: 'Full-time, part-time, and 1-year MBA programs', Icon: Briefcase, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { name: 'IT / Data Science', desc: 'High-demand courses in USA, Canada, and UK', Icon: BookOpen, color: 'text-purple-600', bg: 'bg-purple-50' },
  { name: 'Healthcare', desc: 'Nursing, pharmacy, and allied health courses', Icon: Stethoscope, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { name: 'Law', desc: 'LLM programs in UK and Australia', Icon: Scale, color: 'text-amber-600', bg: 'bg-amber-50' },
  { name: 'Arts & Design', desc: 'Various programs across UK and Australia', Icon: GraduationCap, color: 'text-teal-600', bg: 'bg-teal-50' },
];

const levels = [
  { name: 'Undergraduate (UG)', desc: "Bachelor's degrees (3–4 years). Requires 10+2 completion.", badge: 'bg-blue-100 text-blue-700' },
  { name: 'Postgraduate (PG)', desc: "Master's degrees (1–2 years). Requires bachelor's degree.", badge: 'bg-indigo-100 text-indigo-700' },
  { name: 'MBA', desc: 'Business administration programs. Work experience often required.', badge: 'bg-purple-100 text-purple-700' },
  { name: 'Diploma', desc: 'Short-term programs (6–18 months). Pathway to further study.', badge: 'bg-emerald-100 text-emerald-700' },
];

export default function StudyAbroad() {
  return (
    <main id="main-content">
      <SEO title="Study Abroad Destinations - VR Global Experts" description="Explore top study destinations including USA, UK, Canada, Australia, Germany, and Ireland." />
      {/* Header with image */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&auto=format&fit=crop&q=70"
            alt="University campus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-3">Study Abroad</h1>
          <p className="text-blue-100 text-sm max-w-xl leading-relaxed">
            Compare countries, courses, and study levels to find the right path for your profile and budget.
          </p>
        </div>
      </section>

      {/* Countries */}
      <section className="section bg-gray-50">
        <div className="container-md">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">Destinations</span>
            <h2 className="section-title">Choose by Country</h2>
            <p className="section-sub">Select a country to see universities, costs, intakes, and visa information</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {countries.map(c => (
              <CountryCard key={c.slug} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="text-center mb-10">
            <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">Courses</span>
            <h2 className="section-title">Choose by Course</h2>
            <p className="section-sub">Popular courses available across all major destinations</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map(c => {
              const Icon = c.Icon;
              return (
                <div key={c.name} className={`card flex items-start gap-4 ${c.bg} border-0`}>
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0">
                    <Icon size={18} className={c.color} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">{c.name}</h3>
                    <p className="text-base text-gray-800">{c.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="section bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container-md">
          <div className="text-center mb-10">
            <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">Study Level</span>
            <h2 className="section-title">Choose by Level</h2>
            <p className="section-sub">Select the level that matches your current qualification</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {levels.map(l => (
              <div key={l.name} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
                <span className={`inline-block text-sm font-semibold px-2 py-0.5 rounded mb-2 ${l.badge}`}>{l.name}</span>
                <p className="text-base text-gray-800 leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="text-center mb-10">
            <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">Cost Guide</span>
            <h2 className="section-title">Country Cost Comparison</h2>
            <p className="section-sub">Approximate annual costs including tuition and living expenses</p>
          </div>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-5 py-3.5 text-sm font-semibold">Country</th>
                  <th className="text-left px-5 py-3.5 text-sm font-semibold">Tuition (per year)</th>
                  <th className="text-left px-5 py-3.5 text-sm font-semibold">Living Cost</th>
                  <th className="text-left px-5 py-3.5 text-sm font-semibold">Intakes</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((c, i) => (
                  <tr key={c.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <img
                          src={`https://flagcdn.com/w20/${c.flagCode}.png`}
                          alt={c.name}
                          className="w-5 h-3.5 object-cover rounded-sm border border-gray-200"
                        />
                        <span className="font-medium text-gray-800">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-gray-700 text-sm">{c.avgCost}</td>
                    <td className="px-5 py-3 text-gray-700 text-sm">Varies by city</td>
                    <td className="px-5 py-3 text-gray-700 text-sm">{c.intake}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTABanner
        title="Not sure which country suits you?"
        subtitle="Book a free consultation. We will assess your profile and recommend options."
      />
    </main>
  );
}
