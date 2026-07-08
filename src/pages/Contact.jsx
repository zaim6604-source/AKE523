import { useState } from 'react'
import { Link } from 'react-router-dom'
import RevealOnScroll from '../components/RevealOnScroll'

const WHATSAPP_NUMBER = '923467223031'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=`

const FORM_FIELDS = [
  { name: 'name', label: 'Full Name', icon: 'fa-user', type: 'text' },
  { name: 'phone', label: 'Phone Number', icon: 'fa-phone', type: 'tel' },
  { name: 'country', label: 'Destination Country', icon: 'fa-globe', type: 'text' },
  { name: 'message', label: 'Your Message', icon: 'fa-message', type: 'textarea' },
]

const FAQS = [
  {
    q: 'What documents do I need for a work visa?',
    a: 'Typically you need a valid passport, passport-sized photographs, educational certificates, work experience letters, and a job offer letter. Our team will guide you through exact requirements for your destination.',
  },
  {
    q: 'How long does the visa processing take?',
    a: 'Processing times vary by country. For Gulf countries, it typically takes 2–4 weeks. For European countries, it may take 6–10 weeks. We aim for the fastest possible processing.',
  },
  {
    q: 'Is Al-Imran International government licensed?',
    a: 'Yes, we are fully licensed by the Government of Pakistan. Our license number is 2206/MLK, issued by the Bureau of Immigration & Overseas Employment.',
  },
  {
    q: 'Which countries do you provide work visas for?',
    a: 'We cover Saudi Arabia, UAE, Qatar, Oman, Germany, Romania, Poland, Greece, Malaysia, and many more. Contact us for a specific country not listed.',
  },
  {
    q: 'Do you help with both skilled and unskilled jobs?',
    a: 'Absolutely. We place candidates for skilled positions (IT, healthcare, engineering) and unskilled/general labour roles (drivers, construction, factory workers, cleaners).',
  },
  {
    q: 'What are your service charges?',
    a: 'Our fees are competitive and transparent. We provide a clear breakdown of all charges before starting any process. Contact us for a free consultation.',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', country: '', message: '' })
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hello Al-Imran International!%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ADestination: ${encodeURIComponent(form.country)}%0AMessage: ${encodeURIComponent(form.message)}`
    window.open(WHATSAPP_LINK + text, '_blank')
  }

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx)
  }

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-primary via-primary to-cta overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full mb-4">
            <i className="fas fa-address-card" />
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Visit our office, send a message, or reach out on WhatsApp — we are here to help.
          </p>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <RevealOnScroll>
              <div className="bg-background rounded-2xl p-6 sm:p-8 border border-primary/10">
                <h3 className="text-xl font-bold text-ink mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {FORM_FIELDS.map((field) => (
                    <div key={field.name}>
                      <label className="flex items-center gap-2 text-sm font-medium text-ink/70 mb-1.5">
                        <i className={`fas ${field.icon} text-primary text-xs`} />
                        {field.label}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          rows={4}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-none"
                          placeholder="I need a work visa for..."
                        />
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                          placeholder={`Your ${field.label.toLowerCase()}`}
                        />
                      )}
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-cta text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-teal-600 transition-colors shadow-lg shadow-cta/30"
                  >
                    <i className="fa-brands fa-whatsapp" />
                    Send via WhatsApp
                  </button>
                </form>
                <p className="text-xs text-ink/40 text-center mt-3">
                  Your information will be sent securely via WhatsApp.
                </p>
              </div>
            </RevealOnScroll>

            {/* Contact Info + Map */}
            <div className="space-y-6">
              <RevealOnScroll>
                <div className="grid sm:grid-cols-2 gap-4">
                  <ContactCard
                    icon="fa-location-dot"
                    label="Office Address"
                    value={
                      <>
                        Office B/6-7, First Floor
                        <br />
                        Swat Market, G.T Road
                        <br />
                        Mingora, Swat, KPK
                      </>
                    }
                  />
                  <ContactCard
                    icon="fa-whatsapp"
                    iconBrand
                    label="WhatsApp"
                    value={
                      <>
                        <a
                          href="https://wa.me/923467223031"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          0346-7223031 (Primary)
                        </a>
                        <br />
                        <a
                          href="https://wa.me/923139905002"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          0313-9905002
                        </a>
                      </>
                    }
                  />
                  <ContactCard
                    icon="fa-envelope"
                    label="Email"
                    value={
                      <a
                        href="mailto:info@alimranintl.pk"
                        className="hover:text-primary transition-colors"
                      >
                        info@alimranintl.pk
                      </a>
                    }
                  />
                  <ContactCard
                    icon="fa-phone"
                    label="Phone"
                    value={
                      <span>
                        Call or WhatsApp for
                        <br />
                        fastest response
                      </span>
                    }
                  />
                </div>
              </RevealOnScroll>

              {/* Map */}
              <RevealOnScroll>
                <div className="rounded-2xl overflow-hidden shadow-md border border-primary/10 h-64">
                  <iframe
                    title="Al-Imran International Location"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Swat+Market+GT+Road+Mingora+Swat&zoom=16"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </RevealOnScroll>

              {/* Facebook */}
              <RevealOnScroll>
                <a
                  href="https://www.facebook.com/alimraninternatioanl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#1877F2] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#1664d9] transition-colors"
                >
                  <i className="fa-brands fa-facebook text-lg" />
                  Follow us on Facebook
                </a>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-5 py-2 rounded-full">
                <i className="fas fa-circle-question" />
                FAQs
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-4 mb-3">
                Frequently Asked Questions
              </h2>
            </div>
          </RevealOnScroll>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <RevealOnScroll key={idx}>
                <div className="bg-white rounded-xl border border-primary/10 overflow-hidden transition-shadow hover:shadow-sm">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-ink text-sm sm:text-base pr-4">
                      {faq.q}
                    </span>
                    <i
                      className={`fas fa-chevron-down text-primary text-sm transition-transform duration-300 ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openFaq === idx ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-5 pb-4 text-ink/60 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-primary via-primary to-cta overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Start?
          </h2>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8">
            Contact us today and take the first step toward your overseas career.
          </p>
          <a
            href="https://wa.me/923467223031"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent hover:text-ink transition-all shadow-xl"
          >
            <i className="fa-brands fa-whatsapp text-xl" />
            Message Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}

function ContactCard({ icon, label, value, iconBrand }) {
  return (
    <div className="bg-background rounded-xl p-5 border border-primary/10">
      <div className="flex items-center gap-2.5 mb-2">
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <i className={`${iconBrand ? 'fa-brands' : 'fas'} ${icon}`} />
        </div>
        <span className="text-sm font-semibold text-ink/60">{label}</span>
      </div>
      <p className="text-ink text-sm font-medium leading-relaxed">{value}</p>
    </div>
  )
}