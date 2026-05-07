import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CountryCardProps {
  slug: string;
  name: string;
  flagCode: string;
  image: string;
  universities: string;
  avgCost: string;
  intake: string;
}

export default function CountryCard({ slug, name, flagCode, image, universities, avgCost, intake }: CountryCardProps) {
  return (
    <Link
      to={`/study-abroad/country/${slug}`}
      className="block rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-primary transition-all duration-300 group bg-white"
    >
      {/* Country Image */}
      <div className="relative h-32 overflow-hidden">
        <img
          src={image}
          alt={`Study in ${name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-2 left-3 flex items-center gap-2">
          <img
            src={`https://flagcdn.com/w40/${flagCode}.png`}
            alt={`${name} flag`}
            className="w-7 h-5 object-cover rounded-sm shadow-md border border-white/30"
          />
          <span className="text-white font-bold text-sm drop-shadow-md">{name}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-3">
        <ul className="text-base text-gray-800 space-y-1">
          <li>
            <span className="font-semibold text-gray-700">Universities: </span>{universities}
          </li>
          <li>
            <span className="font-semibold text-gray-700">Cost: </span>{avgCost}
          </li>
          <li>
            <span className="font-semibold text-gray-700">Intakes: </span>{intake}
          </li>
        </ul>
        <div className="flex items-center gap-1 mt-3 text-sm text-primary font-semibold group-hover:gap-2 transition-all">
          Explore <ArrowRight size={11} />
        </div>
      </div>
    </Link>
  );
}
