import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import { COMPANY, FAQS } from '../data/siteData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [openIndex, setOpenIndex] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hello ${COMPANY.name}! I am ${form.name} (${form.phone}). ${form.message}`
    )
    window.open(`${COMPANY.whatsappLink}?text=${text}`, '_blank', 'noopener')
  }

  const toggleFaq = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="relative">
      <div className="wavy-divider -mb-1">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-background fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
                <i className="fas fa-address-card" />
                Contact Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
                Two Offices, One Universe of Opportunity
              </h2>
              <p className="text-ink/60 max-w-2xl mx-auto">
                Visit us at Khwaza Khela, Swat or our Rawalpindi branch. Or reach out through any channel below.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <ScrollReveal delay={100}>
              <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/5">
                <h3 className="text-xl font-bold text-ink mb-6 flex items-center gap-2">
                  <i className="fas fa-paper-plane text-primary" />
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-ink/70 mb-1">Your Name</label>
                    <input type="text" id="name" name="name" required value={form.name} onChange={handleChange}
                      placeholder="e.g., Muhammad Khan"
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-ink/70 mb-1">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required value={form.phone} onChange={handleChange}
                      placeholder="e.g., 0310-4444351"
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-ink/70 mb-1">Your Message</label>
                    <textarea id="message" name="message" required rows={4} value={form.message} onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full bg-cta text-white py-3.5 rounded-full font-bold text-base hover:brightness-110 transition-all shadow-lg shadow-cta/30 flex items-center justify-center gap-2">
                    <i className="fab fa-whatsapp" /> Send via WhatsApp
                  </button>
                </form>
                <p className="text-xs text-ink/40 text-center mt-4">
                  <i className="fas fa-shield-alt mr-1" /> Your information is kept confidential. Messages sent via WhatsApp.
                </p>
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <a href={`mailto:${COMPANY.email}`} className="text-xs text-ink/50 hover:text-primary transition-colors flex items-center justify-center gap-1">
                    <i className="fas fa-envelope" /> {COMPANY.email}
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-6">
                {/* Dual Office Info */}
                <div className="bg-background rounded-2xl p-6 shadow-lg border border-primary/5">
                  <h3 className="text-xl font-bold text-ink mb-4">Visit or Call Us</h3>
                  <div className="space-y-4">
                    {/* Head Office */}
                    <div className="p-3 rounded-xl bg-white border-l-4 border-cta">
                      <p className="text-xs font-bold text-cta mb-2">HEAD OFFICE — KHAWAZA KHELA, SWAT</p>
                      <a href={COMPANY.offices.head.mapUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-start gap-3 mb-2 hover:bg-primary/5 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <i className="fas fa-location-dot" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-ink">Address</div>
                          <div className="text-sm text-ink/60">{COMPANY.offices.head.address}</div>
                        </div>
                      </a>
                      <a href={`tel:${COMPANY.offices.head.phone}`}
                        className="flex items-start gap-3 hover:bg-primary/5 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                          <i className="fas fa-phone" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-ink">Phone</div>
                          <div className="text-sm text-ink/60">{COMPANY.offices.head.phone}</div>
                        </div>
                      </a>
                    </div>

                    {/* Branch Office */}
                    <div className="p-3 rounded-xl bg-white border-l-4 border-accent">
                      <p className="text-xs font-bold text-accent mb-2">BRANCH OFFICE — RAWALPINDI</p>
                      <a href={COMPANY.offices.branch.mapUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-start gap-3 mb-2 hover:bg-primary/5 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <i className="fas fa-location-dot" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-ink">Address</div>
                          <div className="text-sm text-ink/60">{COMPANY.offices.branch.address}</div>
                        </div>
                      </a>
                      <a href={`tel:${COMPANY.offices.branch.phone}`}
                        className="flex items-start gap-3 hover:bg-primary/5 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                          <i className="fas fa-phone" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-ink">Phone</div>
                          <div className="text-sm text-ink/60">{COMPANY.offices.branch.phone}</div>
                        </div>
                      </a>
                    </div>

                    {/* Shared WhatsApp */}
                    <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-xl bg-white hover:bg-primary/5 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                        <i className="fab fa-whatsapp" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-ink">WhatsApp (Both Offices)</div>
                        <div className="text-sm text-ink/60">{COMPANY.whatsapp}</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Two Maps */}
                <div className="space-y-4">
                  {/* Khwaza Khela Map */}
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-primary/5">
                    <div className="bg-primary/5 px-4 py-2">
                      <p className="text-xs font-bold text-primary">KHAWAZA KHELA — HEAD OFFICE</p>
                    </div>
                    <iframe title="Khwaza Khela Office Location"
                      src={COMPANY.offices.head.mapEmbed}
                      width="100%" height="220" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade" className="w-full"
                      onError={(e) => { e.target.style.display = 'none' }} />
                    <div className="bg-white p-3 text-center">
                      <a href={COMPANY.offices.head.mapUrl} target="_blank" rel="noopener noreferrer"
                        className="text-sm font-semibold text-primary hover:underline">
                        <i className="fas fa-map-pin mr-1" /> Open in Google Maps
                      </a>
                    </div>
                  </div>

                  {/* Rawalpindi Map */}
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-primary/5">
                    <div className="bg-accent/5 px-4 py-2">
                      <p className="text-xs font-bold text-accent">RAWALPINDI — BRANCH OFFICE</p>
                    </div>
                    <iframe title="Rawalpindi Branch Location"
                      src={COMPANY.offices.branch.mapEmbed}
                      width="100%" height="220" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade" className="w-full"
                      onError={(e) => { e.target.style.display = 'none' }} />
                    <div className="bg-white p-3 text-center">
                      <a href={COMPANY.offices.branch.mapUrl} target="_blank" rel="noopener noreferrer"
                        className="text-sm font-semibold text-primary hover:underline">
                        <i className="fas fa-map-pin mr-1" /> Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>

                <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer"
                  className="block w-full bg-cta text-white py-4 rounded-full font-bold text-center hover:brightness-110 transition-all shadow-lg shadow-cta/30">
                  <i className="fab fa-whatsapp mr-2" /> Quick Apply — Start Now
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-background py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
                <i className="fas fa-question-circle" /> FAQs
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-ink/60 max-w-2xl mx-auto">
                Everything you need to know about working with {COMPANY.name}.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className={`rounded-xl border ${openIndex === i ? 'border-primary/30 bg-primary/[0.02]' : 'border-primary/10 bg-white'} transition-all`}>
                  <button onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between p-4 text-left"
                    aria-expanded={openIndex === i}>
                    <span className="font-semibold text-sm sm:text-base text-ink pr-4">{faq.q}</span>
                    <i className={`fas fa-chevron-down text-primary shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="px-4 pb-4 text-sm text-ink/60 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="wavy-divider -mt-1 rotate-180">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-background fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}