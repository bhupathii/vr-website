import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  course: string;
  university: string;
  country: string;
  text: string;
  year: string;
  colorClass?: string;
  index?: number;
}

const defaultColors = [
  'border-t-4 border-blue-500',
  'border-t-4 border-emerald-500',
  'border-t-4 border-indigo-500',
  'border-t-4 border-amber-500',
  'border-t-4 border-purple-500',
  'border-t-4 border-teal-500',
];

export default function TestimonialCard({ name, course, university, country, text, year, colorClass, index = 0 }: TestimonialCardProps) {
  const color = colorClass || defaultColors[index % defaultColors.length];

  return (
    <div className={`bg-white rounded-xl shadow-sm p-5 ${color} hover:shadow-md transition-shadow`}>
      <div className="flex items-center justify-between mb-3">
        <Quote size={20} className="text-gray-700" aria-hidden="true" />
        <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
          {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-amber-400 fill-amber-400" />)}
        </div>
      </div>
      <p className="text-base text-gray-800 leading-relaxed mb-4">"{text}"</p>
      <div className="flex items-center gap-3 border-t border-gray-100 pt-3">
        <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
          {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">{name}</p>
          <p className="text-base text-gray-800">{course}</p>
          <p className="text-base text-gray-800">{university}, {country} · {year}</p>
        </div>
      </div>
    </div>
  );
}
