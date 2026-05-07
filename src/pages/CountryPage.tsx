import { useParams, Link } from 'react-router-dom';
import { MapPin, DollarSign, Calendar, BookOpen, ArrowRight } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import { countries } from '../data';
import SEO from '../components/SEO';

export default function CountryPage() {
  const { country } = useParams<{ country: string }>();
  const data = countries.find(c => c.slug === country);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-20">
      <SEO title="Study Destination Guide - VR Global Experts" description="Comprehensive guide to studying in your chosen country." />
        <p className="text-gray-700 text-sm">Country not found.</p>
        <Link to="/study-abroad" className="mt-4 btn-primary">Back to Study Abroad</Link>
      </div>
    );
  }

  return (
    <main id="main-content">
      {/* Hero with country image */}
      <section className="relative text-white overflow-hidden h-64 sm:h-72">
        <img
          src={data.image}
          alt={`Study in ${data.name}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 h-full flex flex-col justify-end pb-8">
          <p className="text-white/80 text-sm mb-2">
            <Link to="/study-abroad" className="hover:text-white">Study Abroad</Link>
            <span className="mx-1">/</span>
            {data.name}
          </p>
          <div className="flex items-center gap-3">
            <img
              src={`https://flagcdn.com/w40/${data.flagCode}.png`}
              alt={`${data.name} flag`}
              className="w-10 h-7 object-cover rounded shadow-lg border border-white/20"
            />
            <h1 className="text-3xl font-bold drop-shadow-lg">Study in {data.name}</h1>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        {/* Overview */}
        <section>
          <h2 className="section-title">Overview</h2>
          <p className="text-base text-gray-800 leading-relaxed">{data.overview}</p>
        </section>

        {/* Key Facts */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Universities', value: data.universities, Icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Intakes', value: data.intake, Icon: Calendar, color: 'text-indigo-600', bg: 'bg-indigo-50' },
            { label: 'Tuition/Year', value: data.tuitionRange, Icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { label: 'Living/Year', value: data.livingCost, Icon: MapPin, color: 'text-amber-600', bg: 'bg-amber-50' },
          ].map(({ label, value, Icon, color, bg }) => (
            <div key={label} className={`${bg} rounded-xl p-4 border border-transparent`}>
              <Icon size={18} className={`${color} mb-2`} />
              <p className="text-base text-gray-800 mb-0.5">{label}</p>
              <p className="font-semibold text-gray-800 text-sm leading-snug">{value}</p>
            </div>
          ))}
        </section>

        {/* Popular Universities */}
        <section>
          <h2 className="section-title">Top Universities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.popular.map((u, i) => (
              <div key={u} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <span className="font-medium text-gray-800 text-sm">{u}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Courses */}
        <section>
          <h2 className="section-title">Popular Courses</h2>
          <div className="flex flex-wrap gap-2">
            {data.courses.map(c => (
              <span key={c} className="inline-block bg-blue-50 text-primary text-sm font-medium px-3 py-1.5 rounded-full border border-blue-100">
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Intakes */}
        <section>
          <h2 className="section-title">Intakes</h2>
          <div className="flex flex-wrap gap-3">
            {data.intakes.map(intake => (
              <span key={intake} className="flex items-center gap-2 bg-emerald-50 text-emerald-700 text-sm px-4 py-2 rounded-full border border-emerald-200 font-medium">
                <Calendar size={14} />
                {intake}
              </span>
            ))}
          </div>
        </section>

        {/* Visa Process */}
        <section>
          <h2 className="section-title">Visa Process</h2>
          <ol className="space-y-3">
            {data.visa.map((step, i) => (
              <li key={step} className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                <span className="w-7 h-7 rounded-full bg-primary text-white text-sm flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </span>
                <span className="text-base text-gray-800 mt-0.5">{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-base text-gray-800 mt-3">
            * Visa requirements change. Always verify with the official embassy website.
          </p>
        </section>

        {/* Related Links */}
        <section className="flex flex-wrap gap-3 pt-2">
          <Link to="/services/visa-assistance" className="inline-flex items-center gap-1.5 btn-outline text-sm">
            Visa Assistance <ArrowRight size={11} />
          </Link>
          <Link to="/services/application-support" className="inline-flex items-center gap-1.5 btn-outline text-sm">
            Application Support <ArrowRight size={11} />
          </Link>
          <Link to="/universities" className="inline-flex items-center gap-1.5 btn-outline text-sm">
            View Universities <ArrowRight size={11} />
          </Link>
        </section>
      </div>

      <CTABanner
        title={`Ready to study in ${data.name}?`}
        subtitle="Book a consultation. We will guide you through the application and visa process."
      />
    </main>
  );
}
