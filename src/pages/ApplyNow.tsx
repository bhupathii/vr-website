import { useState, useRef, type FormEvent } from 'react';
import { CheckCircle, User, Globe, GraduationCap, Wallet, FileText, ArrowRight, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';

interface ApplyErrors {
  name?: string;
  phone?: string;
  email?: string;
  country?: string;
  course?: string;
  qualification?: string;
  budget?: string;
}

function validateApply(form: { name: string; phone: string; email: string; country: string; course: string; qualification: string; budget: string }): ApplyErrors {
  const e: ApplyErrors = {};
  if (!form.name.trim()) e.name = 'Full name is required';
  if (!form.phone.trim()) e.phone = 'Phone number is required';
  else if (!/^\+?[\d\s-]{10,15}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number';
  if (!form.email.trim()) e.email = 'Email address is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Enter a valid email address';
  if (!form.country) e.country = 'Please select a country';
  if (!form.course) e.course = 'Please select a course';
  if (!form.qualification) e.qualification = 'Please select your qualification';
  if (!form.budget) e.budget = 'Please select a budget range';
  return e;
}

const countryOptions = ['USA', 'UK', 'Canada', 'Australia', 'Germany', 'Ireland', 'Not decided yet'];
const courseOptions = ['Engineering', 'Business / MBA', 'IT / Data Science', 'Healthcare', 'Law', 'Arts & Design', 'Other'];
const qualificationOptions = [
  '10+2 (applying for UG)',
  "Bachelor's degree (applying for PG)",
  "Bachelor's + Work experience (applying for MBA)",
  'Diploma',
  'Other',
];
const budgetOptions = [
  'Under ₹20 Lakhs/year',
  '₹20–40 Lakhs/year',
  '₹40–60 Lakhs/year',
  'Above ₹60 Lakhs/year',
  'Not sure / Need guidance',
];

const steps = [
  { step: '1', text: 'Counselor reviews your application within 24 hours', color: 'bg-blue-500' },
  { step: '2', text: 'You receive a call to discuss your profile in detail', color: 'bg-indigo-500' },
  { step: '3', text: 'We send a shortlist of matched universities within 3 days', color: 'bg-purple-500' },
  { step: '4', text: 'You decide how you want to move forward — no pressure', color: 'bg-emerald-500' },
];

export default function ApplyNow() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ApplyErrors>({});
  const firstErrorRef = useRef<HTMLInputElement | HTMLSelectElement | null>(null);
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    country: '', course: '', qualification: '', budget: '', notes: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validateApply(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Auto-focus first error field
      setTimeout(() => firstErrorRef.current?.focus(), 50);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
  };

  if (submitted) {
    return (
      <main id="main-content">
      <SEO title="Apply Now - VR Global Experts" description="Start your study abroad journey. Fill out our application form." />
        <section className="bg-primary text-white py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold">Application Submitted</h1>
          </div>
        </section>
        <section className="section">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5 shadow-md">
              <CheckCircle size={44} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">We've received your application!</h2>
            <p className="text-gray-700 text-sm mb-8">
              A counselor will review your details and contact you within 1 business day.
            </p>
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 text-left text-sm space-y-2 mb-8 max-w-sm mx-auto">
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Your Details</p>
              {[
                { label: 'Name', value: form.name },
                { label: 'Country', value: form.country },
                { label: 'Course', value: form.course },
                { label: 'Qualification', value: form.qualification },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between">
                  <span className="text-gray-700">{label}</span>
                  <span className="font-medium text-gray-800">{value}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: '', phone: '', email: '', country: '', course: '', qualification: '', budget: '', notes: '' });
              }}
              className="btn-outline"
            >
              Submit another application
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main id="main-content">
      {/* Hero with image */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&w=1200&h=400&fit=crop&auto=format&q=70"
            alt="University entrance"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-4 border border-accent/30">
              Free to Apply
            </span>
            <h1 className="text-3xl font-bold mb-3">Start Your Application</h1>
            <p className="text-blue-100 text-sm leading-relaxed max-w-md">
              Fill in your details and we'll get back to you with a personalized university shortlist and plan within 1 business day.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&w=600&h=280&fit=crop&auto=format&q=80"
                alt="Students graduating"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* What Happens Next */}
            <div className="order-2 lg:order-1">
              <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                What Happens Next
              </span>
              <h2 className="text-lg font-bold text-primary mb-5">After you apply</h2>
              <ol className="space-y-4">
                {steps.map(s => (
                  <li key={s.step} className="flex items-start gap-3">
                    <span className={`w-7 h-7 rounded-full ${s.color} text-white text-sm flex items-center justify-center font-bold shrink-0 shadow`}>
                      {s.step}
                    </span>
                    <p className="text-base text-gray-800 mt-0.5 leading-relaxed">{s.text}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-8 bg-gradient-to-br from-primary to-primary-dark rounded-xl p-5 text-white">
                <p className="text-sm text-blue-200 mb-1">Need to talk first?</p>
                <p className="text-base font-bold text-accent">+91 9912174913</p>
                <p className="text-sm text-blue-100 mt-1">Mon – Sat, 10 AM – 6 PM IST</p>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-6">
                <FileText size={18} className="text-primary" />
                <h2 className="text-xl font-bold text-primary">Application Form</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate aria-label="Study abroad application form">
                <div aria-live="polite" className="sr-only">
                  {Object.keys(errors).length > 0 && 'Please correct the errors below before submitting.'}
                </div>

                {/* Personal Details */}
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <h3 className="text-sm font-semibold text-blue-700 flex items-center gap-1.5 mb-4">
                    <User size={14} aria-hidden="true" /> Personal Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="apply-name" className="form-label">Full Name *</label>
                      <input
                        id="apply-name"
                        ref={errors.name ? (el) => { firstErrorRef.current = el; } : undefined}
                        type="text"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className={`form-input bg-white ${errors.name ? 'form-input-error' : ''}`}
                        placeholder="Your full name"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'apply-name-error' : undefined}
                      />
                      {errors.name && <p id="apply-name-error" className="form-error" role="alert">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="apply-phone" className="form-label">Phone Number *</label>
                      <input
                        id="apply-phone"
                        ref={!errors.name && errors.phone ? (el) => { firstErrorRef.current = el; } : undefined}
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className={`form-input bg-white ${errors.phone ? 'form-input-error' : ''}`}
                        placeholder="+91 XXXXX XXXXX"
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'apply-phone-error' : undefined}
                      />
                      {errors.phone && <p id="apply-phone-error" className="form-error" role="alert">{errors.phone}</p>}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="apply-email" className="form-label">Email Address *</label>
                    <input
                      id="apply-email"
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className={`form-input bg-white ${errors.email ? 'form-input-error' : ''}`}
                      placeholder="you@email.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'apply-email-error' : undefined}
                    />
                    {errors.email && <p id="apply-email-error" className="form-error" role="alert">{errors.email}</p>}
                  </div>
                </div>

                {/* Study Preferences */}
                <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
                  <h3 className="text-sm font-semibold text-indigo-700 flex items-center gap-1.5 mb-4">
                    <Globe size={14} aria-hidden="true" /> Study Preferences
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="apply-country" className="form-label">Preferred Country *</label>
                      <select
                        id="apply-country"
                        value={form.country}
                        onChange={e => setForm({ ...form, country: e.target.value })}
                        className={`form-input bg-white ${errors.country ? 'form-input-error' : ''}`}
                        aria-required="true"
                        aria-invalid={!!errors.country}
                      >
                        <option value="">Select country</option>
                        {countryOptions.map(c => <option key={c}>{c}</option>)}
                      </select>
                      {errors.country && <p className="form-error" role="alert">{errors.country}</p>}
                    </div>
                    <div>
                      <label htmlFor="apply-course" className="form-label">Preferred Course *</label>
                      <select
                        id="apply-course"
                        value={form.course}
                        onChange={e => setForm({ ...form, course: e.target.value })}
                        className={`form-input bg-white ${errors.course ? 'form-input-error' : ''}`}
                        aria-required="true"
                        aria-invalid={!!errors.course}
                      >
                        <option value="">Select course</option>
                        {courseOptions.map(c => <option key={c}>{c}</option>)}
                      </select>
                      {errors.course && <p className="form-error" role="alert">{errors.course}</p>}
                    </div>
                  </div>
                </div>

                {/* Academic Background */}
                <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                  <h3 className="text-sm font-semibold text-emerald-700 flex items-center gap-1.5 mb-4">
                    <GraduationCap size={14} aria-hidden="true" /> Academic Background
                  </h3>
                  <div>
                    <label htmlFor="apply-qualification" className="form-label">Highest Qualification *</label>
                    <select
                      id="apply-qualification"
                      value={form.qualification}
                      onChange={e => setForm({ ...form, qualification: e.target.value })}
                      className={`form-input bg-white ${errors.qualification ? 'form-input-error' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.qualification}
                    >
                      <option value="">Select qualification</option>
                      {qualificationOptions.map(q => <option key={q}>{q}</option>)}
                    </select>
                    {errors.qualification && <p className="form-error" role="alert">{errors.qualification}</p>}
                  </div>
                </div>

                {/* Budget */}
                <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                  <h3 className="text-sm font-semibold text-amber-700 flex items-center gap-1.5 mb-4">
                    <Wallet size={14} aria-hidden="true" /> Budget
                  </h3>
                  <div>
                    <label htmlFor="apply-budget" className="form-label">Annual Budget (Tuition + Living) *</label>
                    <select
                      id="apply-budget"
                      value={form.budget}
                      onChange={e => setForm({ ...form, budget: e.target.value })}
                      className={`form-input bg-white ${errors.budget ? 'form-input-error' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.budget}
                    >
                      <option value="">Select budget range</option>
                      {budgetOptions.map(b => <option key={b}>{b}</option>)}
                    </select>
                    {errors.budget && <p className="form-error" role="alert">{errors.budget}</p>}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="apply-notes" className="form-label">Additional Notes</label>
                  <textarea
                    id="apply-notes"
                    value={form.notes}
                    onChange={e => setForm({ ...form, notes: e.target.value })}
                    className="form-input"
                    rows={3}
                    placeholder="Test scores, work experience, or anything else we should know..."
                  />
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-base text-gray-800 mb-3">
                    By submitting, you agree to be contacted by a VR Global Experts counselor via phone or email.
                  </p>
                  <button type="submit" className="btn-primary w-full sm:w-auto px-8 inline-flex items-center gap-2" disabled={loading}>
                    {loading && <Loader2 size={14} className="animate-spin" />}
                    {loading ? 'Submitting…' : <><span>Submit Application</span> <ArrowRight size={14} /></>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
