import { useState } from 'react';
import FadeIn from '../components/FadeIn';

const WHATSAPP_NUMBER = '923469358431';

const faqs = [
  {
    q: 'What documents do I need to apply for overseas employment?',
    a: 'You typically need a valid passport (minimum 6 months validity), educational certificates, professional experience letters, and a CV. Specific requirements vary by country and position.',
  },
  {
    q: 'How long does the visa process take?',
    a: 'Visa processing times vary by country. Gulf countries typically take 2–6 weeks, while European countries may take 1–3 months. Our team keeps you updated throughout the process.',
  },
  {
    q: 'What are your fees?',
    a: 'Our fees are transparent and communicated upfront. We believe in no hidden charges. Contact us for a detailed breakdown based on your desired destination and position.',
  },
  {
    q: 'Is accommodation provided in the destination country?',
    a: 'Many employers provide accommodation or accommodation allowances. Specific arrangements are detailed in your employment contract, which we help you review.',
  },
  {
    q: 'Do you provide pre-departure training?',
    a: 'Yes, we provide comprehensive pre-departure orientation covering cultural awareness, labor rights, language basics, and travel guidance for all workers.',
  },
  {
    q: 'How do I apply?',
    a: 'You can apply through our website contact form, WhatsApp, or visit our office in Shergarh. Our team will guide you through the entire process.',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', country: '', message: '' });
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello! I'm interested in overseas employment.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCountry of Interest: ${form.country || 'Not specified'}\nMessage: ${form.message || 'N/A'}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-highlight)] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
            <p className="mt-4 text-[var(--color-secondary)] text-lg max-w-2xl mx-auto">
              Get in touch with our team. We are here to answer your questions and help you get started.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <FadeIn>
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-2">Send Us a Message</h2>
              <p className="text-[var(--color-ink)]/70 mb-6">
                Fill out the form and we will respond via WhatsApp.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 text-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 text-sm"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 text-sm"
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country of Interest"
                    value={form.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 text-sm"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 text-sm resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[var(--color-cta)] text-white font-semibold py-3 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp" />
                  Send via WhatsApp
                </button>
              </form>
              <p className="text-xs text-[var(--color-ink)]/50 mt-3 text-center">
                Alternatively, email us at{' '}
                <a href="mailto:info@talaboverseas.pk" className="text-[var(--color-primary)] underline">
                  info@talaboverseas.pk
                </a>
              </p>
            </div>
          </FadeIn>

          {/* Info */}
          <FadeIn delay={1}>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--color-secondary)]/20">
                <h3 className="font-bold text-lg text-[var(--color-ink)] mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                      <i className="fas fa-map-marker-alt text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-ink)] text-sm">Address</p>
                      <p className="text-sm text-[var(--color-ink)]/70">
                        1st Floor, UBL Bank, Shergarh, 23200, KPK
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                      <i className="fab fa-whatsapp text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-ink)] text-sm">WhatsApp</p>
                      <a
                        href="https://wa.me/923469358431"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--color-primary)] hover:underline"
                      >
                        0346-9358431
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                      <i className="fas fa-envelope text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-ink)] text-sm">Email</p>
                      <a
                        href="mailto:info@talaboverseas.pk"
                        className="text-sm text-[var(--color-primary)] hover:underline"
                      >
                        info@talaboverseas.pk
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-[var(--color-secondary)]/20 h-64">
                <iframe
                  title="Talab Overseas Location"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=34.39208262024003,71.89844387116426&zoom=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-background)] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-ink)] text-center">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-[var(--color-ink)]/70 text-center">
              Find answers to common questions about our services.
            </p>
          </FadeIn>
          <div className="mt-10 space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={Math.min(i + 1, 5)}>
                <div className="bg-white rounded-xl shadow-sm border border-[var(--color-secondary)]/20 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="font-medium text-[var(--color-ink)] text-sm pr-4">
                      {faq.q}
                    </span>
                    <i
                      className={`fas fa-chevron-down text-[var(--color-primary)] transition-transform shrink-0 ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div className={`accordion-content ${openFaq === i ? 'open' : ''}`}>
                    <div>
                      <div className="px-4 pb-4 text-sm text-[var(--color-ink)]/70 leading-relaxed border-t border-[var(--color-secondary)]/10 pt-3">
                        {faq.a}
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