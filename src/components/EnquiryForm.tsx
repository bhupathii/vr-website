import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

interface EnquiryFormProps {
  compact?: boolean;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  country: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

function validate(form: FormState): FormErrors {
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
  return errors;
}

export default function EnquiryForm({ compact = false }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', country: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div
        className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
        role="status"
        aria-live="polite"
      >
        <p className="text-green-700 font-semibold mb-1">Enquiry Submitted</p>
        <p className="text-green-600 text-sm">We will contact you within 1 business day.</p>
        <button
          className="mt-3 text-sm text-primary underline cursor-pointer"
          onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', country: '', message: '' }); }}
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <div aria-live="polite" className="sr-only">
        {Object.keys(errors).length > 0 && 'Please correct the errors below before submitting.'}
      </div>
      <div className={compact ? 'grid grid-cols-1 sm:grid-cols-2 gap-3' : 'space-y-3'}>
        <div>
          <label htmlFor="enq-name" className="form-label">Name *</label>
          <input
            id="enq-name"
            type="text"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className={`form-input ${errors.name ? 'form-input-error' : ''}`}
            placeholder="Your full name"
            aria-required="true"
            aria-describedby={errors.name ? 'enq-name-error' : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p id="enq-name-error" className="form-error" role="alert">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="enq-phone" className="form-label">Phone *</label>
          <input
            id="enq-phone"
            type="tel"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            className={`form-input ${errors.phone ? 'form-input-error' : ''}`}
            placeholder="+91 XXXXX XXXXX"
            aria-required="true"
            aria-describedby={errors.phone ? 'enq-phone-error' : undefined}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p id="enq-phone-error" className="form-error" role="alert">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="enq-email" className="form-label">Email *</label>
          <input
            id="enq-email"
            type="email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className={`form-input ${errors.email ? 'form-input-error' : ''}`}
            placeholder="you@email.com"
            aria-required="true"
            aria-describedby={errors.email ? 'enq-email-error' : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p id="enq-email-error" className="form-error" role="alert">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="enq-country" className="form-label">Preferred Country</label>
          <select
            id="enq-country"
            value={form.country}
            onChange={e => setForm({ ...form, country: e.target.value })}
            className="form-input"
          >
            <option value="">Select country</option>
            {['USA', 'UK', 'Canada', 'Australia', 'Germany', 'Ireland', 'Not decided'].map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>
      {!compact && (
        <div>
          <label htmlFor="enq-message" className="form-label">Message</label>
          <textarea
            id="enq-message"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            className="form-input"
            rows={3}
            placeholder="Any specific questions or information about your profile..."
          />
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <button type="submit" className="btn-primary flex items-center justify-center gap-2" disabled={loading}>
          {loading && <Loader2 size={14} className="animate-spin" />}
          {loading ? 'Submitting…' : 'Submit Enquiry'}
        </button>
        {compact && (
          <Link to="/apply" className="btn-outline text-center text-sm">Apply Now</Link>
        )}
      </div>
    </form>
  );
}
