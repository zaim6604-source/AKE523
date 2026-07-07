import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Building2, Clock } from 'lucide-react';

const LAT = 24.84621288977973;
const LNG = 67.1965943;

const info = [
  {
    Icon: MapPin, color: '#006BA6', bg: 'rgba(0,107,166,.08)',
    label: 'Office Address',
    lines: ['40/12, Area 1-D Rd, Sector 37-B', 'Landhi Town, Karachi, Sindh'],
  },
  {
    Icon: Phone, color: '#0496FF', bg: 'rgba(4,150,255,.08)',
    label: 'WhatsApp',
    lines: ['0312-1124692'],
  },
  {
    Icon: Mail, color: '#FFBC42', bg: 'rgba(255,188,66,.12)',
    label: 'Email',
    lines: ['info@hr-pro.co'],
  },
  {
    Icon: Clock, color: '#D81159', bg: 'rgba(216,17,89,.08)',
    label: 'Office Hours',
    lines: ['Mon – Fri: 9:00 AM – 6:00 PM', 'Saturday: By Appointment'],
  },
];

export default function Contact() {
  const ref = useRef(null);
  const [formType, setFormType] = useState('business');
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '', interest: '', message: '' });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleChange = (field) => (e) => setForm(p => ({ ...p, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = formType === 'business'
      ? `*HR-Pro Inquiry (Business)*\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nCompany: ${form.company}\nMessage: ${form.message}`
      : `*HR-Pro Inquiry (Professional)*\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nInterest: ${form.interest}\nMessage: ${form.message}`;
    window.open(`https://wa.me/923121124692?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      <style>{`
        .ct-section { background:#fff; padding:96px 24px; }
        .ct-inner { max-width:1200px; margin:0 auto; }
        .ct-layout { display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:start; }
        @media(max-width:900px){ .ct-layout{grid-template-columns:1fr} }
        .ct-company-card { background:linear-gradient(135deg,#006BA6,#0496FF); border-radius:20px; padding:28px; margin-bottom:20px; display:flex; align-items:center; gap:16px; }
        .ct-company-logo { width:56px;height:56px;border-radius:14px;background:rgba(255,255,255,.15);border:2px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:22px;color:#fff;flex-shrink:0; }
        .ct-company-name { font-weight:900; font-size:20px; color:#fff; font-family:"Plus Jakarta Sans",sans-serif; }
        .ct-company-sub  { font-size:13px; color:rgba(255,255,255,.7); margin-top:3px; font-weight:600; }
        .ct-info-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:20px; }
        @media(max-width:480px){ .ct-info-grid{grid-template-columns:1fr} }
        .ct-info-card { background:#fff; border:1px solid rgba(0,107,166,.08); border-radius:16px; padding:20px; transition:border-color .25s,box-shadow .25s,transform .25s; }
        .ct-info-card:hover { border-color:var(--hc,#006BA6); box-shadow:0 8px 24px rgba(0,0,0,.04); transform:translateY(-2px); }
        .ct-info-icon { width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:12px; }
        .ct-info-label { font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px; }
        .ct-info-line  { font-size:13px;color:#555;line-height:1.65; }
        .ct-map { border-radius:20px;overflow:hidden;border:1px solid rgba(0,107,166,.08);box-shadow:0 4px 24px rgba(0,0,0,.04);position:relative; }
        .ct-map-badge { position:absolute;top:14px;left:14px;z-index:10;background:rgba(255,255,255,.95);backdrop-filter:blur(8px);padding:8px 14px;border-radius:10px;font-size:13px;font-weight:600;display:flex;align-items:center;gap:6px;box-shadow:0 2px 12px rgba(0,0,0,.06);border:1px solid rgba(0,107,166,.10); }
        .ct-form-card { background:#E6F3FB; border-radius:20px; padding:28px; margin-bottom:20px; }
        .ct-form-toggle { display:flex; background:rgba(0,107,166,.08); border-radius:12px; padding:4px; margin-bottom:20px; }
        .ct-form-toggle button { flex:1; padding:10px 16px; border-radius:10px; border:none; cursor:pointer; font-weight:700; font-size:13px; transition:all .25s; }
        .ct-field { margin-bottom:12px; }
        .ct-field input, .ct-field textarea { width:100%; padding:12px 16px; border-radius:12px; border:1px solid rgba(0,107,166,.12); font-size:14px; font-family:"Inter",sans-serif; color:#06283D; outline:none; transition:border-color .2s; background:#fff; }
        .ct-field input:focus, .ct-field textarea:focus { border-color:#006BA6; box-shadow:0 0 0 3px rgba(0,107,166,.06); }
        .ct-field textarea { resize:vertical; min-height:80px; }
        .ct-social-btn { display:inline-flex;align-items:center;gap:8px;padding:11px 20px;border-radius:12px;font-size:13px;font-weight:700;text-decoration:none;transition:transform .2s,box-shadow .2s;margin-right:8px;margin-bottom:8px; }
        .ct-social-btn:hover { transform:translateY(-2px); box-shadow:0 8px 20px rgba(0,0,0,.08); }
      `}</style>

      <section id="contact" className="ct-section" ref={ref}>
        <div className="ct-inner">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
            <div className="pill-badge" style={{ margin: '0 auto 18px' }}>
              <span className="pill-dot" />
              GET IN TOUCH
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(30px,4vw,46px)', color: '#06283D', marginBottom: 16 }}>
              Contact <span style={{ color: '#006BA6' }}>HR-Pro</span>
            </h2>
            <p style={{ color: '#555', fontSize: 16, maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
              Reach out via WhatsApp, email, or visit our Landhi office. We're ready to discuss your HR needs.
            </p>
          </div>

          <div className="ct-layout">
            {/* Left: Info + Form */}
            <div className="reveal-l">
              {/* Company badge */}
              <div className="ct-company-card">
                <div className="ct-company-logo">H</div>
                <div>
                  <div className="ct-company-name">HR-Pro Consulting & Services</div>
                  <div className="ct-company-sub">Karachi, Sindh</div>
                </div>
              </div>

              {/* Form */}
              <div className="ct-form-card">
                <div className="ct-form-toggle">
                  <button
                    style={{
                      background: formType === 'business' ? '#006BA6' : 'transparent',
                      color: formType === 'business' ? '#fff' : '#006BA6',
                    }}
                    onClick={() => setFormType('business')}
                  >
                    For Businesses
                  </button>
                  <button
                    style={{
                      background: formType === 'professional' ? '#006BA6' : 'transparent',
                      color: formType === 'professional' ? '#fff' : '#006BA6',
                    }}
                    onClick={() => setFormType('professional')}
                  >
                    For Professionals
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="ct-field">
                    <input placeholder="Your Name *" value={form.name} onChange={handleChange('name')} required />
                  </div>
                  <div className="ct-field">
                    <input placeholder="Phone Number *" value={form.phone} onChange={handleChange('phone')} required />
                  </div>
                  <div className="ct-field">
                    <input placeholder="Email Address" type="email" value={form.email} onChange={handleChange('email')} />
                  </div>
                  {formType === 'business' ? (
                    <div className="ct-field">
                      <input placeholder="Company Name" value={form.company} onChange={handleChange('company')} />
                    </div>
                  ) : (
                    <div className="ct-field">
                      <input placeholder="Area of Interest" value={form.interest} onChange={handleChange('interest')} />
                    </div>
                  )}
                  <div className="ct-field">
                    <textarea placeholder="Your Message" value={form.message} onChange={handleChange('message')} />
                  </div>
                  <button type="submit" className="btn-cta" style={{ width: '100%', justifyContent: 'center', fontSize: 15 }}>
                    <Phone size={16} /> Send via WhatsApp
                  </button>
                </form>
              </div>

              {/* Social */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
                <a href="https://www.linkedin.com/company/hr-pro-consulting-services/" target="_blank" rel="noopener noreferrer" className="ct-social-btn" style={{ background: 'rgba(0,107,166,.08)', color: '#006BA6', border: '1px solid rgba(0,107,166,.15)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> Follow on LinkedIn
                </a>
                <a href="https://www.facebook.com/people/HR-Pro-Consulting-Services/61564620787478/" target="_blank" rel="noopener noreferrer" className="ct-social-btn" style={{ background: 'rgba(4,150,255,.08)', color: '#0496FF', border: '1px solid rgba(4,150,255,.15)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> Follow on Facebook
                </a>
              </div>
            </div>

            {/* Right: Map + Info */}
            <div className="reveal-r" style={{ transitionDelay: '.15s' }}>
              {/* Info grid */}
              <div className="ct-info-grid">
                {info.map(({ Icon, color, bg, label, lines }, i) => (
                  <div key={i} className="ct-info-card" style={{ '--hc': color }}>
                    <div className="ct-info-icon" style={{ background: bg }}>
                      <Icon size={18} color={color} strokeWidth={2} />
                    </div>
                    <div className="ct-info-label" style={{ color }}>{label}</div>
                    {lines.map((l, j) => (
                      <div key={j} className="ct-info-line">{l}</div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="ct-map">
                <div className="ct-map-badge">
                  <MapPin size={14} color="#006BA6" />
                  Landhi Town, Karachi
                </div>
                <iframe
                  title="HR-Pro Location"
                  src={`https://maps.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`}
                  width="100%"
                  height="400"
                  style={{ display: 'block', border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Alternative contact */}
              <div style={{ textAlign: 'center', marginTop: 16 }}>
                <span style={{ fontSize: 13, color: '#999' }}>Or email us at </span>
                <a href="mailto:info@hr-pro.co" style={{ color: '#006BA6', fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>info@hr-pro.co</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}