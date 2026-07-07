import { useState, useEffect, useRef } from 'react';

const contactItems = [
  { icon: 'fab fa-whatsapp', label: 'WhatsApp', lines: ['0333-5107178'] },
  { icon: 'fas fa-map-marker-alt', label: 'Chamber Address', lines: [
    'Chamber No. 7, Ashraf Gujjar Law Associates',
    'Muslim Block, Johar Rd, near Bar Room / Tehsildar Office',
    'F-8 Markaz, Islamabad',
  ]},
  { icon: 'fas fa-envelope', label: 'Email', lines: ['info@ashrafgujjarlaw.pk'] },
  { icon: 'fas fa-clock', label: 'Working Hours', lines: ['Mon – Sat: 9:00 AM – 6:00 PM'] },
];

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '', matter: '', message: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    const text =
`Hello Ashraf Gujjar Law Associates,
My name is ${form.name}.
Phone: ${form.phone}
Email: ${form.email}
Matter Type: ${form.matter || 'Not specified'}
Message: ${form.message || 'N/A'}`;
    window.open(`https://wa.me/923335107178?text=${encodeURIComponent(text)}`, '_blank');
  };

  const set = (key) => (e) => {
    setForm(p => ({ ...p, [key]: e.target.value }));
    setErrors(p => ({ ...p, [key]: '' }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'var(--color-background)' }} ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-14">
          <span className="section-pill">GET IN TOUCH</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-[#0B2545]">
            Contact Our Chambers
          </h2>
          <div className="gold-divider mt-4" />
          <p className="text-sm mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            All enquiries treated in strict confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
          {/* Info panel */}
          <div className="reveal rounded-[1.5rem] p-10 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}>
            <h3 className="text-xl font-bold mb-8 relative z-10"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
              Chamber Details
            </h3>
            {contactItems.map(item => (
              <div key={item.label} className="flex items-start gap-4 mb-7 relative z-10">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(201,162,39,.15)' }}>
                  <i className={item.icon} style={{ color: 'var(--color-accent)' }} />
                </div>
                <div>
                  <strong className="block text-xs text-white/50 uppercase tracking-wider mb-1">{item.label}</strong>
                  {item.lines.map(l => <span key={l} className="block text-sm text-white/85">{l}</span>)}
                </div>
              </div>
            ))}

            {/* LinkedIn */}
            <div className="mt-8 relative z-10">
              <a href="https://www.linkedin.com/in/ch-muhammad-ashraf-gujjar-22791170/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{ background: 'rgba(201,162,39,.15)', color: 'var(--color-accent)' }}>
                <i className="fab fa-linkedin-in" /> Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="reveal bg-white rounded-[1.5rem] p-10 shadow-xl"
            style={{ border: '1px solid rgba(201,162,39,.1)' }}>
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-semibold text-[#0B2545]">
                  Full Name <span style={{ color: 'var(--color-accent)' }}>*</span>
                </label>
                <input id="name" type="text" placeholder="Enter your full name"
                  value={form.name} onChange={set('name')}
                  className={`form-input ${errors.name ? 'error' : ''}`} />
                {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-semibold text-[#0B2545]">
                    Phone Number <span style={{ color: 'var(--color-accent)' }}>*</span>
                  </label>
                  <input id="phone" type="tel" placeholder="+92 300 0000000"
                    value={form.phone} onChange={set('phone')}
                    className={`form-input ${errors.phone ? 'error' : ''}`} />
                  {errors.phone && <span className="text-xs text-red-500">{errors.phone}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-[#0B2545]">
                    Email Address <span style={{ color: 'var(--color-accent)' }}>*</span>
                  </label>
                  <input id="email" type="email" placeholder="your@email.com"
                    value={form.email} onChange={set('email')}
                    className={`form-input ${errors.email ? 'error' : ''}`} />
                  {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="matter" className="text-sm font-semibold text-[#0B2545]">Matter Type</label>
                <select id="matter" value={form.matter} onChange={set('matter')}
                  className="form-input appearance-none">
                  <option value="">Select matter type (optional)</option>
                  <option>Constitutional / Public Interest</option>
                  <option>Civil Litigation</option>
                  <option>Corporate / Commercial</option>
                  <option>Banking & Finance</option>
                  <option>Regulatory / Administrative</option>
                  <option>Media & Telecom</option>
                  <option>Property / Land Dispute</option>
                  <option>Appellate Practice</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-[#0B2545]">Brief Description</label>
                <textarea id="message" rows={4}
                  placeholder="Briefly describe your legal matter..."
                  value={form.message} onChange={set('message')}
                  className="form-input resize-y min-h-[110px]" />
              </div>

              <p className="text-[0.65rem] text-gray-400 leading-relaxed">
                <i className="fas fa-lock text-[0.5rem] mr-1" />
                Your information is encrypted and sent via WhatsApp. All enquiries treated in strict confidence.
              </p>

              <button type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm transition-all duration-200 btn-gold">
                <i className="fab fa-whatsapp text-base" /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="reveal mt-12 rounded-[1.5rem] overflow-hidden shadow-xl"
          style={{ border: '1px solid rgba(201,162,39,.1)' }}>
          <iframe
            src="https://www.google.com/maps?q=33.711921206376985,73.03885754232856&hl=en&z=16&output=embed"
            width="100%" height="400"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ashraf Gujjar Law Associates - Chamber Location"
          />
        </div>
      </div>
    </section>
  );
}