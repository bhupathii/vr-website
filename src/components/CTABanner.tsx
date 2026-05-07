import { Link } from 'react-router-dom';

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export default function CTABanner({
  title,
  subtitle,
  primaryLabel = 'Book Free Consultation',
  primaryTo = '/contact',
  secondaryLabel = 'Apply Now',
  secondaryTo = '/apply',
}: CTABannerProps) {
  return (
    <section className="bg-primary py-12 px-4">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        {subtitle && <p className="text-blue-100 text-sm mb-6">{subtitle}</p>}
        <div className="flex flex-wrap justify-center gap-3">
          <Link to={primaryTo} className="btn-white">{primaryLabel}</Link>
          <Link to={secondaryTo} className="border border-blue-300 text-blue-100 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
