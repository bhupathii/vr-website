import { useParams, Link } from 'react-router-dom';
import { Compass, GraduationCap, ClipboardList, Shield, Banknote, PenLine, Plane, type LucideIcon, CheckCircle, ArrowRight } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import { services } from '../data';
import SEO from '../components/SEO';

const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  graduation: GraduationCap,
  clipboard: ClipboardList,
  shield: Shield,
  banknote: Banknote,
  pencil: PenLine,
  plane: Plane,
};

export default function ServiceDetail() {
  const { service } = useParams<{ service: string }>();
  const data = services.find(s => s.slug === service);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-20">
      <SEO title="Service Details - VR Global Experts" description="Detailed information about our study abroad services." />
        <p className="text-gray-700 text-sm">Service not found.</p>
        <Link to="/services" className="mt-4 btn-primary">Back to Services</Link>
      </div>
    );
  }

  const Icon = iconMap[data.iconKey] || Compass;

  return (
    <main id="main-content">
      {/* Header */}
      <section className={`${data.iconBg} text-white py-14 px-4`}>
        <div className="max-w-4xl mx-auto">
          <p className="text-white/80 text-sm mb-3">
            <Link to="/services" className="hover:text-white">Services</Link>
            <span className="mx-1">/</span>
            {data.name}
          </p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shadow">
              <Icon size={28} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold">{data.name}</h1>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        {/* What it is */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-3">What This Service Covers</h2>
          <p className="text-base text-gray-800 leading-relaxed">{data.what}</p>
        </section>

        {/* How it helps */}
        <section className={`${data.iconBgLight} border border-gray-100 rounded-xl p-6`}>
          <div className="flex items-start gap-3">
            <CheckCircle size={18} className="text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold text-gray-800 mb-1 text-sm">How It Helps</h2>
              <p className="text-base text-gray-800 leading-relaxed">{data.how}</p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-xl font-bold text-primary mb-4">Process</h2>
          <ol className="space-y-3">
            {data.process.map((step, i) => (
              <li key={step} className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                <span className={`w-7 h-7 rounded-full ${data.iconBg} text-white text-sm flex items-center justify-center font-bold shrink-0`}>
                  {i + 1}
                </span>
                <span className="text-base text-gray-800 mt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Related Services */}
        <section className="border-t border-gray-100 pt-6">
          <p className="text-base text-gray-800 font-semibold mb-3 uppercase tracking-wide">Related Services</p>
          <div className="flex flex-wrap gap-2">
            {services.filter(s => s.slug !== data.slug).slice(0, 4).map(s => {
              const RelIcon = iconMap[s.iconKey] || Compass;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full ${s.iconBgLight} border border-gray-200 hover:shadow-sm transition-shadow`}
                >
                  <RelIcon size={11} className="text-gray-700" />
                  {s.name}
                  <ArrowRight size={10} />
                </Link>
              );
            })}
          </div>
        </section>
      </div>

      <CTABanner
        title={`Ready to get help with ${data.name}?`}
        subtitle="Book a free consultation to understand how this service applies to your situation."
      />
    </main>
  );
}
