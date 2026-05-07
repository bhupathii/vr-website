import { Filter } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import { universities, countries } from '../data';
import { useState } from 'react';
import SEO from '../components/SEO';

const countryNames = ['All', ...countries.map(c => c.name)];

export default function Universities() {
  const [typeFilter, setTypeFilter] = useState<'All' | 'Top' | 'Partner'>('All');
  const [countryFilter, setCountryFilter] = useState('All');

  const filtered = universities.filter(u => {
    const matchType = typeFilter === 'All' || u.type === typeFilter;
    const matchCountry = countryFilter === 'All' || u.country === countryFilter;
    return matchType && matchCountry;
  });

  const typeColors: Record<string, string> = {
    Top: 'bg-amber-100 text-amber-700 border-amber-200',
    Partner: 'bg-blue-100 text-blue-700 border-blue-200',
  };

  const countryFlagMap: Record<string, string> = {
    USA: 'us', UK: 'gb', Canada: 'ca', Australia: 'au', Germany: 'de', Ireland: 'ie',
  };

  return (
    <main id="main-content">
      <SEO title="Top Partner Universities - VR Global Experts" description="Discover top global universities for your higher education." />
      {/* Header */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&auto=format&fit=crop&q=70"
            alt="University campus building"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-3">Universities</h1>
          <p className="text-blue-100 text-sm max-w-xl leading-relaxed">
            Browse top-ranked and partner universities across all 6 study destinations.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="section bg-gray-50">
        <div className="container-md">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="flex items-center gap-2 text-base text-gray-800">
              <Filter size={14} />
              <span className="font-medium">Filter:</span>
            </div>
            {(['All', 'Top', 'Partner'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  typeFilter === t
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                {t}
              </button>
            ))}
            <select
              value={countryFilter}
              onChange={e => setCountryFilter(e.target.value)}
              className="form-input text-sm py-1.5 rounded-full border-gray-200 w-44"
            >
              {countryNames.map(c => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <span className="text-base text-gray-800 ml-auto">{filtered.length} results</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(u => {
              const flagCode = countryFlagMap[u.country];
              return (
                <div key={u.name} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 overflow-hidden border border-gray-200">
                    {flagCode && (
                      <img
                        src={`https://flagcdn.com/w40/${flagCode}.png`}
                        alt={u.country}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-gray-800 text-sm leading-snug">{u.name}</h3>
                      <span className={`inline-block text-sm font-semibold px-2 py-0.5 rounded border shrink-0 ${typeColors[u.type]}`}>
                        {u.type}
                      </span>
                    </div>
                    <p className="text-base text-gray-800 mt-1">{u.country}</p>
                    <p className="text-base text-gray-800">{u.ranking}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section bg-white">
        <div className="container-md">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
            <p className="text-sm text-blue-700">
              <strong>Note:</strong> Rankings shown are based on QS World University Rankings 2025.
              Partner universities have an established relationship with VR Global Experts.
              Contact us for a full list of partner institutions.
            </p>
          </div>
        </div>
      </div>

      <CTABanner
        title="Looking for a specific university?"
        subtitle="Talk to a counselor to check admission requirements and eligibility for your profile."
      />
    </main>
  );
}
