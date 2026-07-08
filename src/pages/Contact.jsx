import { useState } from 'react';
import FadeIn from '../components/FadeIn';

const faqs = [
  {
    q: 'What is License 2234/KAR?',
    a: 'This is the official Government of Pakistan license held by Rais Brothers, authorizing us to operate as a Travel & Tours operator and Overseas Employment Promoter. You can verify our license with the relevant authorities.',
  },
  {
    q: 'Which countries do you recruit for?',
    a: 'We currently recruit for Saudi Arabia, UAE, Qatar, Oman, Kuwait, Germany, Malaysia, Romania, and Turkey. Our network continues to expand as we identify new, verified opportunities for our workers.',
  },
  {
    q: 'Where is your office located?',
    a: 'Our office is at M-1, Mehran Estate, Mezzanine Floor, Dr. Dawood Pota Road, Cantt, Karachi South, Sindh. We warmly welcome walk-in inquiries during business hours.',
  },
  {
    q: 'What documents do I need to apply?',
    a: 'You typically need a valid passport (minimum 6 months validity), educational certificates, professional experience letters, and a CV. Requirements vary by country and position — contact us for a personalized checklist.',
  },
  {
    q: 'How long does the process take?',
    a: 'Processing times vary by destination. Gulf countries typically take 2–6 weeks, while European countries may take 1–3 months. Our team keeps you updated throughout and works to expedite every step.',
  },
  {
    q: 'What are your fees?',
    a: 'Our fees are transparent and communicated upfront. There are no hidden charges. Contact us for a detailed fee breakdown based on your desired destination and position. We believe in honest, ethical pricing.',
  },
];

const jobCategories = [
  'Construction Worker',
  'Driver',
  'Hospitality Staff',
  'Nurse / Medical',
  'Skilled Trade',
  'Factory Worker',
  'Security Staff',
  'IT Professional',
  'General Labour',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', message: '' });
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Contact Form - Rais Brothers%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email || 'N/A'}%0AJob Category: ${form.category || 'Not specified'}%0AMessage: ${form.message || 'N/A'}`
    );
    window.open(`https://wa.me/923009219780?text=${text}`, '_blank');
  };

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="pt-24 pb-16 md:pb-20" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'var(--color-cta)' }}>
              <i className="fa-solid fa-phone" />
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Contact Us</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Have questions? Ready to apply? Reach out to our team and we&rsquo;ll respond promptly.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Form */}
          <FadeIn>
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--color-accent)' }}>Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: 'var(--color-accent)' }}>
                      Your Name <span style={{ color: 'var(--color-primary)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                      style={{ borderColor: 'rgba(225, 6, 0, 0.2)', color: 'var(--color-ink)' }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(225, 6, 0, 0.2)'}
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: 'var(--color-accent)' }}>
                      Phone Number <span style={{ color: 'var(--color-primary)' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="03XX-XXXXXXX"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                      style={{ borderColor: 'rgba(225, 6, 0, 0.2)', color: 'var(--color-ink)' }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(225, 6, 0, 0.2)'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: 'var(--color-accent)' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                    style={{ borderColor: 'rgba(225, 6, 0, 0.2)', color: 'var(--color-ink)' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(225, 6, 0, 0.2)'}
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: 'var(--color-accent)' }}>
                    Job Category
                  </label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                    style={{ borderColor: 'rgba(225, 6, 0, 0.2)', color: 'var(--color-ink)' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(225, 6, 0, 0.2)'}
                  >
                    <option value="">Select category</option>
                    {jobCategories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: 'var(--color-accent)' }}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your background and preferred destination..."
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200 resize-none"
                    style={{ borderColor: 'rgba(225, 6, 0, 0.2)', color: 'var(--color-ink)' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(225, 6, 0, 0.2)'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: 'var(--color-cta)', color: 'var(--color-accent)', border: 'none' }}
                >
                  <i className="fab fa-whatsapp" />
                  Send via WhatsApp
                </button>
              </form>
              <p className="text-center sm:text-left mt-4 text-sm" style={{ color: 'var(--color-ink-light)' }}>
                Or email: <a href="mailto:raisbrothers2009@yahoo.com" style={{ color: 'var(--color-primary)' }}>raisbrothers2009@yahoo.com</a>
              </p>
            </div>
          </FadeIn>

          {/* Info */}
          <div className="space-y-4">
            <FadeIn delay={1}>
              <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: 'rgba(225, 6, 0, 0.08)' }}>
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: 'var(--color-accent)' }}>
                  <i className="fa-solid fa-phone" style={{ color: 'var(--color-primary)' }} /> Phone
                </h4>
                <p className="text-sm">
                  <a href="tel:02135214272" style={{ color: 'var(--color-ink-light)' }}>021-35214272</a>
                  <span className="mx-2">/</span>
                  <a href="tel:02135214346" style={{ color: 'var(--color-ink-light)' }}>021-35214346</a>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={2}>
              <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: 'rgba(225, 6, 0, 0.08)' }}>
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: 'var(--color-accent)' }}>
                  <i className="fab fa-whatsapp" style={{ color: 'var(--color-primary)' }} /> WhatsApp
                </h4>
                <p>
                  <a href="https://wa.me/923009219780" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>0300-9219780</a>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={3}>
              <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: 'rgba(225, 6, 0, 0.08)' }}>
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: 'var(--color-accent)' }}>
                  <i className="fab fa-facebook" style={{ color: 'var(--color-primary)' }} /> Facebook
                </h4>
                <a
                  href="https://www.facebook.com/p/Rais-brothers-tarvels-and-tours-100053261996924/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                  style={{ color: 'var(--color-ink-light)' }}
                >
                  Rais Brothers Travels & Tours
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={4}>
              <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: 'rgba(225, 6, 0, 0.08)' }}>
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: 'var(--color-accent)' }}>
                  <i className="fa-solid fa-envelope" style={{ color: 'var(--color-primary)' }} /> Email
                </h4>
                <p className="text-sm">
                  <a href="mailto:raisbrothers2009@yahoo.com" style={{ color: 'var(--color-ink-light)' }}>raisbrothers2009@yahoo.com</a>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={5}>
              <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: 'rgba(225, 6, 0, 0.08)' }}>
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: 'var(--color-accent)' }}>
                  <i className="fa-solid fa-location-dot" style={{ color: 'var(--color-primary)' }} /> Address
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  M-1, Mehran Estate, Mezzanine Floor, Dr. Dawood Pota Road, Cantt, Karachi South, Sindh
                </p>
              </div>
            </FadeIn>

            {/* Map */}
            <FadeIn delay={6}>
              <div className="rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: 'rgba(225, 6, 0, 0.08)' }}>
                <iframe
                  title="Rais Brothers Location"
                  src="https://www.google.com/maps?q=Mehran+Estate+Dr+Dawood+Pota+Road+Cantt+Karachi&hl=en&z=15&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: 'rgba(225, 6, 0, 0.08)', color: 'var(--color-primary)' }}>
              <i className="fa-solid fa-circle-question" />
              FAQs
            </span>
            <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-accent)' }}>Frequently Asked Questions</h2>
            <p className="text-base mb-10" style={{ color: 'var(--color-ink-light)' }}>Quick answers to common questions.</p>
          </FadeIn>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={Math.min(i + 1, 4)}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300" style={{ borderLeft: '4px solid var(--color-primary)' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer"
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                  >
                    <span className="text-sm sm:text-base font-semibold pr-4" style={{ color: 'var(--color-accent)' }}>
                      {faq.q}
                    </span>
                    <i
                      className={`fa-solid fa-chevron-down text-sm transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`}
                      style={{ color: 'var(--color-primary)' }}
                    />
                  </button>
                  <div className={`accordion-content ${openFaq === i ? 'open' : ''}`}>
                    <div>
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                        <p className="text-sm leading-relaxed m-0" style={{ color: 'var(--color-ink-light)' }}>
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}