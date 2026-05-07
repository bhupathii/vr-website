import { Link } from 'react-router-dom';
import { ArrowRight, Compass, GraduationCap, ClipboardList, Shield, Banknote, PenLine, Plane, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  graduation: GraduationCap,
  clipboard: ClipboardList,
  shield: Shield,
  banknote: Banknote,
  pencil: PenLine,
  plane: Plane,
};

interface ServiceCardProps {
  slug: string;
  name: string;
  iconKey: string;
  iconBg: string;
  iconBgLight: string;
  short: string;
}

export default function ServiceCard({ slug, name, iconKey, iconBg, iconBgLight, short }: ServiceCardProps) {
  const Icon = iconMap[iconKey] || Compass;

  return (
    <Link
      to={`/services/${slug}`}
      aria-label={`Learn more about ${name}`}
      className={`block rounded-xl border border-transparent p-5 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group ${iconBgLight}`}
    >
      <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
        <Icon size={22} className="text-white" />
      </div>
      <h3 className="font-semibold text-gray-800 mb-2 text-sm leading-snug">{name}</h3>
      <p className="text-base text-gray-800 leading-relaxed">{short}</p>
      <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
        Learn more <ArrowRight size={11} />
      </div>
    </Link>
  );
}
