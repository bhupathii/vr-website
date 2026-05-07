import { ArrowRight, BookOpen, FileText, Globe } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import { blogPosts } from '../data';
import SEO from '../components/SEO';

const guides = [
  {
    title: 'Applying from India: Complete Checklist',
    desc: 'A step-by-step list of all documents and steps needed to apply from India.',
    color: 'bg-blue-600',
    Icon: FileText,
  },
  {
    title: 'IELTS Score Requirements by Country',
    desc: 'Minimum IELTS bands required for admission in 6 major study destinations.',
    color: 'bg-indigo-600',
    Icon: BookOpen,
  },
  {
    title: 'GRE Requirement Changes 2024–2025',
    desc: 'Universities that dropped GRE requirements and what to submit instead.',
    color: 'bg-purple-600',
    Icon: FileText,
  },
  {
    title: 'Post-Study Work Visas: Country Comparison',
    desc: 'How long you can legally work after graduation in each study destination.',
    color: 'bg-emerald-600',
    Icon: Globe,
  },
];

const sopTips = [
  { tip: 'State your academic background and how it connects to the course you are applying for.' },
  { tip: 'Explain why you chose this specific university — be specific, not generic.' },
  { tip: 'Include 1–2 professional or project examples that demonstrate relevant skills.' },
  { tip: 'Do not copy templates. Admissions teams recognize them immediately.' },
  { tip: 'Keep it under 1,000 words unless the university specifies otherwise.' },
  { tip: 'End with a clear statement of what you plan to do after graduation.' },
];

export default function Resources() {
  return (
    <main id="main-content">
      <SEO title="Resources & Guides - VR Global Experts" description="Helpful resources, guides, and tips for your study abroad journey." />
      {/* Header */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&auto=format&fit=crop&q=70"
            alt="Library books and resources"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-3">Resources</h1>
          <p className="text-blue-100 text-sm max-w-xl leading-relaxed">
            Study abroad guides, timelines, SOP tips, and updates to help you prepare.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section bg-gray-50">
        <div className="container-md">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">Blog</span>
            <h2 className="section-title">Latest Articles</h2>
            <p className="section-sub">Guides, updates, and tips from the VR Global Experts team</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map(post => (
              <div key={post.title} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-white/90 backdrop-blur text-sm font-semibold text-gray-700 px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-base text-gray-800 mb-1">{post.date}</p>
                  <h3 className="font-semibold text-gray-800 text-sm mb-2 leading-snug">{post.title}</h3>
                  <p className="text-base text-gray-800 leading-relaxed">{post.summary}</p>
                  <div className="flex items-center gap-1 mt-3 text-sm text-primary font-medium">
                    Read more <ArrowRight size={11} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="text-center mb-10">
            <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">Guides</span>
            <h2 className="section-title">Quick Reference Guides</h2>
            <p className="section-sub">Concise guides on the most common topics students ask about</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guides.map(guide => {
              const Icon = guide.Icon;
              return (
                <div key={guide.title} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                  <div className={`w-10 h-10 ${guide.color} rounded-xl flex items-center justify-center shrink-0 shadow`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">{guide.title}</h3>
                    <p className="text-base text-gray-800 leading-relaxed">{guide.desc}</p>
                    <div className="flex items-center gap-1 mt-2 text-sm text-primary font-medium">
                      Download guide <ArrowRight size={11} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOP Tips */}
      <section className="section bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">SOP Tips</span>
              <h2 className="section-title">Writing a Strong Statement of Purpose</h2>
              <p className="text-base text-gray-800 mb-6">The SOP is one of the most important parts of your application. These are the key principles.</p>
              <div className="space-y-3">
                {sopTips.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-amber-100 shadow-sm">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-sm flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-base text-gray-800">{item.tip}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=700&auto=format&fit=crop&q=80"
                alt="Writing a statement of purpose"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Have questions about documents or deadlines?"
        subtitle="Talk to a counselor who can give you specific guidance based on your profile."
      />
    </main>
  );
}
