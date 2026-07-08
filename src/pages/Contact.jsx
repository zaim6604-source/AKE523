import { useState } from 'react';
import FadeUp from '../components/FadeUp';

const faqs = [
  { q: "What documents do I need to apply?", a: "You'll need your CNIC, passport (valid for at least 2 years), educational certificates, experience letters (if any), and passport-sized photographs. We'll guide you through the complete list." },
  { q: "How long does the visa process take?", a: "Processing times vary by country. Gulf countries typically take 2-6 weeks, while European destinations may take 2-4 months. We keep you updated at every stage." },
  { q: "Do you charge any fees?", a: "Our service charges are transparent and communicated upfront. We do not charge any hidden fees. Payment is made in installments as services are delivered." },
  { q: "Which countries do you recruit for?", a: "We currently recruit for Saudi Arabia, UAE, Qatar, Oman, Germany, Poland, Greece, Croatia, and Malaysia. We're expanding to new destinations regularly." },
  { q: "Can I visit your office?", a: "Absolutely! Our office is at Office #4, Abaseen Hotel, Khyber Bazar Rd, Peshawar. We're open Monday to Saturday, 9 AM to 6 PM." },
  { q: "What if I already have a job offer?", a: "We can help with visa processing, documentation, and travel arrangements even if you already have an employer. Contact us to discuss your situation." },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', country: '', message: '' });
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Malgeey Overseas! I'm ${form.name || 'a candidate'}. Phone: ${form.phone || 'N/A'}. Interested in: ${form.country || 'N/A'}. ${form.message ? `Message: ${form.message}` : ''}`;
    window.open(`https://wa.me/923005947249?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="page-enter-active">
      {/* ── Header ── */}
      <section className="bg-background pt-12 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="pill-badge bg-primary text-white mb-6 mx-auto" style={{ width: 'fit-content' }}>
              <i className="fas fa-phone" />
              Get in Touch
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-ink text-center leading-tight max-w-4xl mx-auto">
              Let's Start Your{' '}
              <span className="text-primary">Journey Abroad</span>
            </h1>
            <p className="text-ink/60 text-center mt-4 max-w-2xl mx-auto editorial-body">
              Reach out via WhatsApp, visit our office, or send us a message — we're here to help
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Contact + Map ── */}
      <section className="pb-16 md:pb-24 -mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <FadeUp>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                <h2 className="text-xl font-extrabold text-ink mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-ink/60 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Muhammad Ali"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-ink/60 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g. 0300-1234567"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-ink/60 mb-1.5">Country Interested In</label>
                    <select
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="">Select a country</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="UAE">UAE</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Oman">Oman</option>
                      <option value="Germany">Germany</option>
                      <option value="Poland">Poland</option>
                      <option value="Greece">Greece</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Malaysia">Malaysia</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-ink/60 mb-1.5">Message (optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any questions or specific requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-cta text-white font-extrabold py-3.5 rounded-full text-base hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <i className="fab fa-whatsapp" />
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </FadeUp>

            {/* Contact info + Map */}
            <FadeUp delay={150}>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                  <h2 className="text-xl font-extrabold text-ink mb-4">Contact Details</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-ink">Address</div>
                        <div className="text-sm text-ink/60">Office #4, Abaseen Hotel, Khyber Bazar Rd, Shoba, Peshawar, KPK</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                        <i className="fab fa-whatsapp" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-ink">WhatsApp</div>
                        <a href="https://wa.me/923005947249" target="_blank" rel="noopener noreferrer" className="text-sm text-cta font-semibold hover:underline">0300-5947249</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                        <i className="fas fa-envelope" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-ink">Email</div>
                        <a href="mailto:info@malgeeyoverseas.pk" className="text-sm text-ink/60 hover:text-primary">info@malgeeyoverseas.pk</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64">
                  <iframe
                    title="Malgeey Overseas Location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=71.5595%2C34.0042%2C71.5698%2C34.0143&amp;layer=mapnik&amp;marker=34.00925%2C71.56470"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <a
                  href="https://www.openstreetmap.org/?mlat=34.00925&mlon=71.56470&zoom=16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-xs text-ink/40 hover:text-primary"
                >
                  <i className="fas fa-external-link-alt" /> Open in OpenStreetMap
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section id="faqs" className="pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="pill-badge bg-primary text-white mb-4 mx-auto" style={{ width: 'fit-content' }}>
              <i className="fas fa-question-circle" />
              FAQs
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center leading-tight mb-8">
              Frequently Asked Questions
            </h2>
          </FadeUp>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 50}>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="text-sm font-bold text-ink">{faq.q}</span>
                    <i className={`fas fa-chevron-down text-xs text-ink/30 transition-transform ${openFAQ === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`accordion-content ${openFAQ === i ? 'open' : ''}`}>
                    <div>
                      <div className="px-5 pb-4 text-sm text-ink/60 leading-relaxed">{faq.a}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}