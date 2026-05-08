import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Landmark, Globe, Award, ArrowRight } from 'lucide-react';
import CountryCard from '../components/CountryCard';
import HomeDestinationCard from '../components/HomeDestinationCard';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import EnquiryForm from '../components/EnquiryForm';
import { countries, services, testimonials } from '../data';
import SEO from '../components/SEO';

const steps = [
  { num: '01', title: 'Book a Free Consultation', desc: 'Talk to a counselor about your profile and goals. No cost, no obligation.', color: 'bg-blue-600' },
  { num: '02', title: 'Get Your Shortlist', desc: 'Receive a curated list of universities and countries based on your profile.', color: 'bg-indigo-600' },
  { num: '03', title: 'Prepare Applications', desc: 'We help with SOP drafting, LOR guidance, documentation, and deadlines.', color: 'bg-purple-600' },
  { num: '04', title: 'Apply and Track', desc: 'Submit applications and track progress across all universities.', color: 'bg-teal-600' },
  { num: '05', title: 'Visa and Pre-Departure', desc: 'Complete your visa and receive a thorough pre-departure briefing.', color: 'bg-emerald-600' },
];

const stats = [
  { value: '2,000+', label: 'Students Placed', Icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  { value: '50+',   label: 'Partner Universities', Icon: Landmark, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
  { value: '6',     label: 'Countries Covered', Icon: Globe, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  { value: '95%',   label: 'Visa Success Rate', Icon: Award, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
];

/* ── Country flags data for orbiting animation ── */
const FLAGS = [
  { code: 'us', label: 'USA',         emoji: '🇺🇸', angle:   0 },
  { code: 'ca', label: 'Canada',      emoji: '🇨🇦', angle:  45 },
  { code: 'ie', label: 'Ireland',     emoji: '🇮🇪', angle:  90 },
  { code: 'gb', label: 'UK',          emoji: '🇬🇧', angle: 135 },
  { code: 'au', label: 'Australia',   emoji: '🇦🇺', angle: 180 },
  { code: 'de', label: 'Germany',     emoji: '🇩🇪', angle: 225 },
  { code: 'nz', label: 'New Zealand', emoji: '🇳🇿', angle: 270 },
  { code: 'eu', label: 'Europe',      emoji: '🇪🇺', angle: 315 },
];

/* ── Animated Hero Visual: girl student + orbiting country flags ── */
function AnimatedHeroVisual() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 420,
        aspectRatio: '1 / 1',
      }}
      className="mx-auto select-none"
    >
      {/* ── Orange decorative arc (SVG) ── */}
      <svg
        viewBox="0 0 420 420"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        {/* Main orange arc */}
        <path
          d="M 60 330 A 190 190 0 1 1 360 330"
          fill="none"
          stroke="#e8a020"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.9"
        />
        {/* Subtle inner ring */}
        <circle
          cx="210"
          cy="210"
          r="145"
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="2"
        />
      </svg>

      {/* ── Graduation cap decoration ── */}
      <div
        style={{
          position: 'absolute',
          top: '4%',
          right: '14%',
          zIndex: 3,
          animation: 'hero-float 3.6s ease-in-out infinite',
        }}
        aria-hidden="true"
      >
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <polygon points="22,5 44,17 22,29 0,17" fill="#e8a020"/>
          <rect x="5" y="17" width="34" height="16" rx="3" fill="#e8a020" opacity="0.85"/>
          <line x1="39" y1="17" x2="39" y2="32" stroke="#e8a020" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="39" cy="33" r="2.5" fill="#e8a020"/>
        </svg>
      </div>

      {/* ── Girl student image – circular crop ── */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '55%',
          height: '55%',
          borderRadius: '50%',
          overflow: 'hidden',
          zIndex: 2,
          boxShadow: '0 8px 48px rgba(0,0,0,0.38)',
          border: '5px solid rgba(255,255,255,0.22)',
          background: '#f8f8f8',
        }}
      >
        <img
          src="/hero-girl.png"
          alt="Happy student ready to study abroad"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 15%',
          }}
          loading="eager"
          fetchPriority="high"
        />
        {/* Subtle bottom gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 55%, rgba(15,23,42,0.25))',
          }}
        />
      </div>

      {/* ── Orbiting country flag circles ── */}
      {FLAGS.map((flag) => (
        <div
          key={flag.code}
          className="hero-flag"
          style={
            {
              '--start-angle': `${flag.angle}deg`,
              '--orbit-r': '142px',
              '--orbit-duration': '18s',
              '--orbit-delay': '0s',
              zIndex: 4,
            } as React.CSSProperties
          }
          aria-label={flag.label}
        >
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid white',
              boxShadow: '0 4px 16px rgba(0,0,0,0.28)',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 26,
              lineHeight: 1,
            }}
            title={flag.label}
          >
            {flag.emoji}
          </div>
        </div>
      ))}

    </div>
  );
}

export default function Home() {
  return (
    <main id="main-content">
      <SEO title="VR Global Experts - Study Abroad Consultancy" description="Expert study abroad guidance for Indian students. University selection, visa assistance, scholarships, and more." />
      {/* ──── HERO ──── */}
      <section className="bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-5 border border-accent/30 tracking-wide">
              Trusted by 2,000+ Students
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Study Abroad Guidance for UG, PG, and MBA Students
            </h1>
            <p className="text-blue-100 mb-8 text-base leading-relaxed max-w-lg">
              VR Global Experts helps you choose the right country, university, and course — and manages the entire process from application to departure.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="bg-white text-primary px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                Book Free Consultation
              </Link>
              <Link to="/apply" className="border border-gold text-gold px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gold hover:text-primary transition-colors">
                Apply Now
              </Link>
            </div>
          </div>

          {/* ── Animated Hero Visual (girl + orbiting country flags) ── */}
          <div className="flex items-center justify-center py-6 lg:py-4 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none mx-auto lg:mx-0">
            <AnimatedHeroVisual />
          </div>
        </div>
      </section>

      {/* ──── STATS ──── */}
      <section className="py-8 px-4 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ value, label, Icon, color, bg, border }) => (
            <div key={label} className={`${bg} ${border} border rounded-xl p-4 flex items-center gap-3`}>
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                <Icon size={22} className={color} />
              </div>
              <div>
                <p className={`text-2xl font-bold ${color}`}>{value}</p>
                <p className="text-base text-gray-800">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ──── LEADERSHIP ──── */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="text-center mb-10">
            <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-1 rounded-full mb-3">Leadership</span>
            <h2 className="text-2xl font-bold text-primary mb-2">Meet Our Directors</h2>
            <p className="text-gray-700 text-sm">The people behind every student's success story</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CEO */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row">
              <div className="sm:w-2/5 h-72 sm:h-auto relative overflow-hidden shrink-0">
                <img
                  src="/ceo.png"
                  alt="CEO & Founder"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Nishanth Komati</h3>
                <p className="text-primary font-semibold mb-4 text-sm tracking-wide uppercase">CEO & Founder</p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Based in Switzerland with over a decade of experience in overseas education, Nishanth leads our vision to empower students. His strategic direction and global perspective have helped thousands achieve their study abroad dreams.
                </p>
              </div>
            </div>
            {/* MD */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row">
              <div className="sm:w-2/5 h-72 sm:h-auto relative overflow-hidden shrink-0">
                <img
                  src="/md.png"
                  alt="Managing Director"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Vasudev Komati</h3>
                <p className="text-primary font-semibold mb-4 text-sm tracking-wide uppercase">Managing Director</p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Driving operational excellence and building global partnerships, Vasudev ensures that our consulting services remain top-tier, delivering unparalleled value and seamless experiences to our students.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/about" className="inline-flex items-center gap-2 btn-outline">
              Learn More About Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ──── VISION & MISSION ──── */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-primary to-primary-light relative overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-36 sm:w-56 h-36 sm:h-56 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" aria-hidden="true" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-accent/20 text-accent border border-accent/30 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-full mb-3 sm:mb-4 tracking-wide">
              Our Purpose
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Vision &amp; Mission</h2>
            <p className="text-blue-200 text-sm max-w-xl mx-auto px-2">
              The principles that drive every decision we make and every student we serve
            </p>
          </div>

          {/* Cards — stacked on mobile, side by side on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

            {/* Vision Card */}
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 sm:p-8 hover:bg-white/15 transition-all duration-300 group overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gold/20 rounded-full blur-2xl group-hover:bg-gold/30 transition-all duration-500" aria-hidden="true" />

              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/20 border border-gold/30 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 relative z-10">
                <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" stroke="#e8a020" strokeWidth="2.2" fill="none"/>
                  <line x1="16.5" y1="16.5" x2="24" y2="24" stroke="#e8a020" strokeWidth="2.2" strokeLinecap="round"/>
                  <circle cx="11" cy="11" r="3" fill="#e8a020" opacity="0.5"/>
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gold text-xs font-bold uppercase tracking-widest">Vision</span>
                  <div className="flex-1 h-px bg-gold/30" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 leading-snug">
                  To Be India's Most Trusted Study Abroad Partner
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  We envision a world where every ambitious Indian student has access to world-class international education — regardless of their background, city, or financial starting point. We aim to be the bridge that makes that possible, one student at a time.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 sm:p-8 hover:bg-white/15 transition-all duration-300 group overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/30 transition-all duration-500" aria-hidden="true" />

              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/20 border border-accent/30 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 relative z-10">
                <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <circle cx="14" cy="14" r="11" stroke="#0369a1" strokeWidth="2.2" fill="none"/>
                  <circle cx="14" cy="14" r="7"  stroke="#0369a1" strokeWidth="2.2" fill="none"/>
                  <circle cx="14" cy="14" r="3"  fill="#0369a1"/>
                  <line x1="14" y1="3"  x2="14" y2="0"  stroke="#0369a1" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="14" y1="25" x2="14" y2="28" stroke="#0369a1" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="25" y1="14" x2="28" y2="14" stroke="#0369a1" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3"  y1="14" x2="0"  y2="14" stroke="#0369a1" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest">Mission</span>
                  <div className="flex-1 h-px bg-accent/40" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 leading-snug">
                  Expert Guidance at Every Step of the Journey
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  To provide honest, personalised counselling that covers every step — from choosing the right country and university, to crafting standout applications, securing visas, and preparing for departure — so students arrive abroad with confidence, clarity, and zero surprises.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──── DESTINATIONS (Redesigned as per screenshot) ──── */}
      <section className="section bg-gray-50 overflow-hidden">
        <div className="container-md max-w-4xl mx-auto px-4">
          <div className="mb-10 text-center sm:text-left">
            <span className="text-[#d15f3e] font-bold text-sm tracking-widest uppercase block mb-3">
              Best Consultancy Services
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111827] mb-6 font-serif leading-tight">
              Experience, embrace, <br className="hidden sm:block" />
              <span className="relative whitespace-nowrap">
                enrich with foreign
                {/* Orange brush underline */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#e8a020]" viewBox="0 0 200 9" fill="none" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2.00034 6.78657C34.8018 3.51866 94.6648 0.655866 198.053 2.10093" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>{' '}
              <br className="hidden sm:block" />
              consultancy
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl leading-relaxed">
              Transformative consultancy awaits. Reserve your exclusive slot for personalized guidance. Elevate aspirations, secure success now!
            </p>
          </div>

          <div className="mt-12">
            {/* Sub-label with animated airplane trail */}
            <div className="flex items-center gap-3 mb-8">
              <p className="text-[#374151] text-lg font-medium tracking-wide">
                choose your dream country
              </p>
              <div className="flex items-center flex-1 max-w-[160px] relative">
                {/* Animated dashed trail */}
                <svg className="w-full h-4" viewBox="0 0 160 16" fill="none" aria-hidden="true">
                  <path
                    d="M0 8 Q40 2, 80 8 Q120 14, 155 6"
                    stroke="#9ca3af"
                    strokeWidth="1.5"
                    strokeDasharray="5 4"
                    fill="none"
                    className="airplane-trail"
                  />
                </svg>
                {/* Airplane icon that flies along the path */}
                <div className="airplane-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="#374151"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Country Cards Grid/Row */}
            <div className="flex flex-nowrap overflow-x-auto pb-6 sm:pb-0 no-scrollbar snap-x snap-mandatory sm:flex-wrap sm:justify-start gap-6 sm:gap-10">
              {[
                { name: 'USA', flagUrl: 'https://flagcdn.com/w320/us.png', mapMaskUrl: '/maps/us.svg' },
                { name: 'UK', flagUrl: 'https://flagcdn.com/w320/gb.png', mapMaskUrl: '/maps/gb.svg' },
                { name: 'Canada', flagUrl: 'https://flagcdn.com/w320/ca.png', mapMaskUrl: '/maps/ca.svg' },
                { name: 'Australia', flagUrl: 'https://flagcdn.com/w320/au.png', mapMaskUrl: '/maps/au.svg' },
                { name: 'Germany', flagUrl: 'https://flagcdn.com/w320/de.png', mapMaskUrl: '/maps/de.svg' },
                { name: 'Ireland', flagUrl: 'https://flagcdn.com/w320/ie.png', mapMaskUrl: '/maps/ie.svg', bgColor: '#16a34a' },
              ].map(c => (
                <Link to="/study-abroad" key={c.name} className="block group shrink-0 snap-start">
                  <HomeDestinationCard name={c.name} flagUrl={c.flagUrl} mapMaskUrl={c.mapMaskUrl} bgColor={c.bgColor} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──── SERVICES ──── */}
      <section className="section bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container-md">
          <div className="text-center mb-10">
            <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mb-3 tracking-wide">
              Our Services
            </span>
            <h2 className="text-2xl font-bold text-primary mb-2">End-to-End Support</h2>
            <p className="text-gray-700 text-sm">From planning to departure — everything handled in one place</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.slice(0, 6).map(s => (
              <ServiceCard key={s.slug} {...s} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              View All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ──── HOW IT WORKS ──── */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Steps */}
            <div>
              <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-3 py-1 rounded-full mb-4 tracking-wide">
                Process
              </span>
              <h2 className="text-2xl font-bold text-primary mb-2">How It Works</h2>
              <p className="text-base text-gray-800 mb-8">A clear, 5-step process from enquiry to departure</p>
              <ol className="space-y-5">
                {steps.map(s => (
                  <li key={s.num} className="flex gap-4 items-start">
                    <div className={`w-11 h-11 rounded-full ${s.color} text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-md`}>
                      {s.num}
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-gray-800 text-sm">{s.title}</p>
                      <p className="text-base text-gray-800 mt-0.5 leading-relaxed">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">Start Your Journey</Link>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&auto=format&fit=crop&q=80"
                alt="One-on-one counseling session"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ──── WHY CHOOSE US ──── */}
      <section className="section bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl hidden lg:block order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&auto=format&fit=crop&q=80"
                alt="Students collaborating"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-3 py-1 rounded-full mb-4 tracking-wide">
                Why Choose Us
              </span>
              <h2 className="text-2xl font-bold text-primary mb-2">Why Students Choose VR Global Experts</h2>
              <p className="text-base text-gray-800 mb-6">Practical reasons backed by track record</p>
              <div className="space-y-3">
                {[
                  'Free initial consultation with no obligation',
                  'University recommendations based on your actual profile',
                  'Application support: SOP, LOR, and documentation',
                  'Visa guidance with 95% approval track record',
                  'Scholarship and education loan connections',
                  'Pre-departure briefing before you fly',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3 bg-white/80 backdrop-blur rounded-lg p-3 border border-orange-100 shadow-sm">
                    <CheckCircle size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                    <p className="text-base text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── TESTIMONIALS ──── */}
      <section className="section bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container-md">
          <div className="text-center mb-10">
            <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full mb-3 tracking-wide">
              Student Stories
            </span>
            <h2 className="text-2xl font-bold text-primary mb-2">What Students Say</h2>
            <p className="text-gray-700 text-sm">Direct feedback from students who used our services</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.slice(0, 3).map((t, i) => (
              <TestimonialCard
                key={t.name}
                {...t}
                index={i}
                colorClass={['border-t-4 border-blue-500', 'border-t-4 border-indigo-500', 'border-t-4 border-purple-500'][i]}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/success-stories" className="btn-outline inline-flex items-center gap-2">
              View All Stories <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ──── ENQUIRY FORM ──── */}
      <section className="section bg-white">
        <div className="container-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4 tracking-wide">
                Get Started
              </span>
              <h2 className="text-2xl font-bold text-primary mb-2">Send an Enquiry</h2>
              <p className="text-base text-gray-800 mb-6">
                Fill in the form and a counselor will contact you within 1 business day.
              </p>
              <EnquiryForm compact />
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white shadow-xl">
              <h3 className="font-semibold mb-5 text-base">What to expect after enquiry</h3>
              <ul className="space-y-4 mb-6">
                {[
                  { step: '1', text: 'Counselor call within 24 hours' },
                  { step: '2', text: 'Profile assessment in first session' },
                  { step: '3', text: 'University shortlist within 3 days' },
                  { step: '4', text: 'Clear cost and timeline overview' },
                ].map(item => (
                  <li key={item.text} className="flex items-start gap-3 text-sm text-blue-100">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center font-bold shrink-0">
                      {item.step}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <div className="border-t border-blue-700 pt-4">
                <p className="text-sm text-blue-200 mb-1">Prefer to call directly?</p>
                <p className="text-sm font-semibold text-accent">+91 9912174913</p>
                <p className="text-sm text-blue-100">info@vrglobalexperts.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── PARTNER UNIVERSITIES STRIP ──── */}
      <section className="py-10 px-4 bg-gray-50 border-t border-gray-100">
        <div className="container-md">
          <p className="text-center text-sm font-semibold text-gray-700 uppercase tracking-widest mb-6">
            Students Placed At
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-semibold text-gray-700">
            {['MIT', 'University of Toronto', 'University of Melbourne', 'TU Munich', 'Imperial College London', 'Stanford', 'McGill University', 'Trinity College Dublin'].map(u => (
              <span key={u} className="bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm text-gray-700 text-sm">
                {u}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
