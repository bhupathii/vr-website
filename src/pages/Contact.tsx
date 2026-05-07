import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, MessageSquare, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

function validate(form: { name: string; phone: string; email: string; message: string }): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.phone.trim()) {
    errors.phone = 'Phone is required';
  } else if (!/^\+?[\d\s-]{10,15}$/.test(form.phone.trim())) {
    errors.phone = 'Enter a valid phone number';
  }
  if (!form.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Enter a valid email address';
  }
  if (!form.message.trim()) errors.message = 'Message is required';
  return errors;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const contactInfo = [
    {
      Icon: Phone,
      label: 'Phone / WhatsApp',
      value: '+91 9912174913',
      sub: 'WhatsApp also available',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      Icon: Mail,
      label: 'Email',
      value: 'info@vrglobalexperts.com',
      sub: 'Reply within 1 business day',
      color: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
    },
    {
      Icon: MapPin,
      label: 'Office',
      value: 'Kamala Theatre Road, jaggayyapeta',
      sub: 'NTR district, Andhrapradesh',
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      Icon: Clock,
      label: 'Office Hours',
      value: 'Mon – Sat: 10 AM – 6 PM',
      sub: 'Sunday: Closed',
      color: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
  ];

  return (
    <main id="main-content">
      <SEO title="Contact Us - VR Global Experts" description="Get in touch with our expert counselors for free study abroad guidance." />
      {/* Hero with background image */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&w=1200&h=400&fit=crop&auto=format&q=70"
            alt="Modern office"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl font-bold mb-3">Contact Us</h1>
            <p className="text-blue-100 text-sm leading-relaxed max-w-md">
              Book a free consultation or send us a message. A counselor will respond within 24 hours.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&w=600&h=280&fit=crop&auto=format&q=80"
                alt="Team ready to help"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map(({ Icon, label, value, sub, color, iconColor }) => (
            <div key={label} className={`${color} rounded-xl p-4 border border-transparent`}>
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm mb-3">
                <Icon size={16} className={iconColor} />
              </div>
              <p className="text-base text-gray-800 mb-0.5">{label}</p>
              <p className="text-sm font-semibold text-gray-800 leading-snug">{value}</p>
              <p className="text-base text-gray-800 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Info */}
      <section className="section bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left – Info */}
            <div className="space-y-5">
              <div>
                <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  Free Consultation
                </span>
                <h2 className="text-xl font-bold text-primary mb-2">Why reach out?</h2>
                <p className="text-base text-gray-800 leading-relaxed">
                  Whether you're just starting to explore study abroad or have a specific university in mind — a 30-minute call can give you clarity.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  'No cost for the initial consultation',
                  'Get a profile assessment in the first session',
                  'Understand which countries suit your budget',
                  'Learn the exact steps to apply',
                ].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                    <p className="text-base text-gray-800">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-5 text-white">
                <p className="text-sm text-blue-200 mb-1">Call us directly</p>
                <p className="text-lg font-bold text-accent">+91 9912174913</p>
                <p className="text-sm text-blue-100 mt-1">Mon – Sat, 10 AM – 6 PM</p>
              </div>
            </div>

            {/* Right – Form */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-5">
                <MessageSquare size={18} className="text-primary" />
                <h2 className="text-xl font-bold text-primary">Send a Message</h2>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle size={44} className="text-green-500 mx-auto mb-4" />
                  <h3 className="font-bold text-green-800 text-lg mb-2">Message Sent!</h3>
                  <p className="text-green-700 text-sm mb-5">
                    We've received your message and will respond within 1 business day.
                  </p>
                  <button
                    className="btn-outline text-sm"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', phone: '', email: '', subject: '', message: '' });
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate aria-label="Contact form">
                  <div aria-live="polite" className="sr-only">
                    {Object.keys(errors).length > 0 && 'Please correct the errors below before submitting.'}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="form-label">Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                        placeholder="Your full name"
                        aria-required="true"
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && <p id="contact-name-error" className="form-error" role="alert">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="form-label">Phone *</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className={`form-input ${errors.phone ? 'form-input-error' : ''}`}
                        placeholder="+91 XXXXX XXXXX"
                        aria-required="true"
                        aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && <p id="contact-phone-error" className="form-error" role="alert">{errors.phone}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="form-label">Email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                        placeholder="you@email.com"
                        aria-required="true"
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p id="contact-email-error" className="form-error" role="alert">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="form-label">Topic</label>
                      <select
                        id="contact-subject"
                        value={form.subject}
                        onChange={e => setForm({ ...form, subject: e.target.value })}
                        className="form-input"
                      >
                        <option value="">Select topic</option>
                        <option>Book a Consultation</option>
                        <option>University Enquiry</option>
                        <option>Visa Assistance</option>
                        <option>Scholarship Information</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="form-label">Message *</label>
                    <textarea
                      id="contact-message"
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className={`form-input ${errors.message ? 'form-input-error' : ''}`}
                      rows={4}
                      placeholder="Describe your situation or what you'd like help with..."
                      aria-required="true"
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <p id="contact-message-error" className="form-error" role="alert">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto px-8 flex items-center gap-2" disabled={loading}>
                    {loading && <Loader2 size={14} className="animate-spin" />}
                    {loading ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-64 relative overflow-hidden bg-gray-200">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&w=1400&h=300&fit=crop&auto=format&q=70"
          alt="Jaggayyapeta city map location"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-2xl px-6 py-4 text-center">
            <MapPin size={20} className="text-primary mx-auto mb-1" />
            <p className="text-sm font-semibold text-primary">Kamala Theatre Road, jaggayyapeta</p>
            <p className="text-base text-gray-800">NTR district, Andhrapradesh</p>
          </div>
        </div>
      </section>
    </main>
  );
}
