import { useState } from 'react'
import FadeUp from '../components/FadeUp'

const WA_NUMBER = '923338608944'
const PHONE_1 = '055-4273677'
const PHONE_2 = '055-3234535'
const EMAIL = 'info@kotliassociates.pk'

const faqs = [
  { q: "What documents do I need to apply?", a: "You'll need your CNIC, passport (valid for at least 2 years), educational certificates, experience letters (if any), and passport-sized photographs. We'll guide you through the complete list." },
  { q: "How long does the visa process take?", a: "Processing times vary by country. Gulf countries typically take 2-6 weeks, while European destinations may take 2-4 months. We keep you updated at every stage." },
  { q: "Do you charge any fees?", a: "Our service charges are transparent and communicated upfront. We do not charge any hidden fees. Payment is made in installments as services are delivered." },
  { q: "Which countries do you recruit for?", a: "We currently recruit for Saudi Arabia, UAE, Qatar, Oman, Germany, Poland, Italy, Greece, and Romania. We're expanding to new destinations regularly." },
  { q: "Can I visit your office?", a: "Absolutely! Our office is at Rehman Centre, Chowk Kotli Behram, Sialkot, Punjab. We're open Monday to Saturday, 9 AM to 6 PM." },
  { q: "What if I already have a job offer?", a: "We can help with visa processing, documentation, and travel arrangements even if you already have an employer. Contact us to discuss your situation." },
]

export default function Apply() {
  const [form, setForm] = useState({ name: '', phone: '', country: '', message: '' })
  const [openFAQ, setOpenFAQ] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hi Kotli Associates! I'm ${form.name || 'a candidate'}. Phone: ${form.phone || 'N/A'}. Interested in: ${form.country || 'N/A'}. ${form.message ? `Message: ${form.message}` : ''}`
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <FadeUp>
        <div className="dashboard-card">
          <div className="pill-badge bg-primary text-white mb-4">
            <i className="fas fa-phone" />
            Get in Touch
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-ink leading-tight">
            Let's Start Your{' '}
            <span className="text-primary">Journey Abroad</span>
          </h1>
          <p className="text-ink/60 mt-2 max-w-2xl">
            Reach out via WhatsApp, visit our office, or send us a message — we're here to help
          </p>
        </div>
      </FadeUp>

      {/* Form + Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form */}
        <FadeUp>
          <div className="dashboard-card">
            <h2 className="text-lg font-extrabold text-ink mb-5">Send us a Message</h2>
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
                  <option value="Italy">Italy</option>
                  <option value="Greece">Greece</option>
                  <option value="Romania">Romania</option>
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
                className="w-full bg-cta text-ink font-extrabold py-3.5 rounded-full text-sm hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <i className="fab fa-whatsapp" />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </FadeUp>

        {/* Contact Details */}
        <FadeUp delay={150}>
          <div className="space-y-4">
            <div className="dashboard-card">
              <h2 className="text-lg font-extrabold text-ink mb-4">Contact Details</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">Address</div>
                    <div className="text-sm text-ink/60">Rehman Centre, Chowk Kotli Behram, Sialkot, Punjab</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center shrink-0">
                    <i className="fas fa-phone" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">Phone</div>
                    <a href={`tel:${PHONE_1.replace(/-/g, '')}`} className="text-sm text-ink/60 hover:text-primary block">{PHONE_1}</a>
                    <a href={`tel:${PHONE_2.replace(/-/g, '')}`} className="text-sm text-ink/60 hover:text-primary block">{PHONE_2}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cta text-white flex items-center justify-center shrink-0">
                    <i className="fab fa-whatsapp" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">WhatsApp</div>
                    <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-sm text-cta font-semibold hover:underline">0333-8608944</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center shrink-0">
                    <i className="fas fa-envelope" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">Email</div>
                    <a href={`mailto:${EMAIL}`} className="text-sm text-ink/60 hover:text-primary">{EMAIL}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-highlight text-white flex items-center justify-center shrink-0">
                    <i className="fas fa-certificate" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">License</div>
                    <div className="text-sm text-ink/60">2279/SKT — Government Licensed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="dashboard-card p-0 overflow-hidden h-56">
              <iframe
                title="Kotli Associates Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=74.5200%2C32.4900%2C74.5400%2C32.5100&amp;layer=mapnik&amp;marker=32.5000%2C74.5300"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <a
              href="https://www.openstreetmap.org/?query=Rehman+Centre+Chowk+Kotli+Behram+Sialkot"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-xs text-ink/40 hover:text-primary"
            >
              <i className="fas fa-external-link-alt" /> Open in OpenStreetMap
            </a>
          </div>
        </FadeUp>
      </div>

      {/* FAQs */}
      <FadeUp delay={200}>
        <div className="dashboard-card">
          <div className="pill-badge bg-primary text-white mb-4 mx-auto" style={{ width: 'fit-content' }}>
            <i className="fas fa-question-circle" />
            FAQs
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-ink text-center leading-tight mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-2 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
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
            ))}
          </div>
        </div>
      </FadeUp>
    </div>
  )
}