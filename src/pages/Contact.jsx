import { useState } from 'react'

const WHATSAPP = 'https://wa.me/923215344448'
const WHATSAPP_SECONDARY = 'https://wa.me/923125227211'
const PHONE_1 = '0321-5344448'
const PHONE_2 = '0312-5227211'
const PHONE_3 = '0333-5227211'
const FACEBOOK = 'https://www.facebook.com/AlBassamiRecruitingAgency/'
const EMAIL = 'info@albassami.pk'

const FAQS = [
  { q: 'What documents do I need to apply?', a: 'A valid passport (6+ months validity), educational certificates, experience letters, passport photographs, and a medical fitness certificate. Requirements vary by country and role.' },
  { q: 'How long does the visa process take?', a: 'Processing times range from 2–3 weeks for Gulf countries to 6–12 weeks for European destinations, depending on the role and employer.' },
  { q: 'Is Al-Bassami a licensed agency?', a: 'Yes, we are fully licensed by the Government of Pakistan under license number 2251/RWP.' },
  { q: 'What countries do you recruit for?', a: 'We recruit for Saudi Arabia, UAE, Qatar, Oman, Kuwait, Germany, Poland, Italy, and Malaysia.' },
  { q: 'How do I apply for a job?', a: 'You can apply directly through our WhatsApp Quick Apply button, or visit our office in Chandni Chowk, Satellite Town, Rawalpindi.' },
  { q: 'Do you charge any fees?', a: 'Our service fees are transparent and communicated upfront. We believe in ethical recruitment practices with no hidden charges.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hello Al-Bassami! I'm ${form.name} (${form.phone}). ${form.message}`
    )
    window.open(`${WHATSAPP}?text=${text}`, '_blank')
  }

  return (
    <div className="space-y-12 animate-fade-up pt-6 lg:pt-10">
      <div>
        <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-xs font-semibold rounded-full mb-3 border border-primary/10">
          Contact Us
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mb-4">
          Get in Touch
        </h1>
        <p className="text-ink/60 leading-relaxed max-w-3xl">
          Ready to take the next step? Reach out to us — we're here to help you
          find the right opportunity.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 border border-ink/5 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-ink mb-1">Send us a Message</h2>
          <div>
            <label className="block text-xs font-medium text-ink/50 mb-1.5">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-ink/10 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-ink/50 mb-1.5">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-ink/10 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              placeholder="03XX-XXXXXXX"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-ink/50 mb-1.5">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-ink/10 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
              placeholder="Tell us about the position you're looking for..."
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cta hover:bg-cta/90 text-white text-sm font-semibold transition-all shadow-md shadow-cta/20"
          >
            <i className="fab fa-whatsapp" />
            Send via WhatsApp
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl p-6 border border-ink/5 shadow-sm">
            <h2 className="font-bold text-ink mb-4">Contact Details</h2>
            <div className="space-y-3 text-sm">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink/70 hover:text-primary transition-colors">
                <i className="fab fa-whatsapp text-primary text-lg w-5 text-center" />
                <span>{PHONE_1} <span className="text-ink/40 text-xs">(Primary)</span></span>
              </a>
              <a href={WHATSAPP_SECONDARY} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink/70 hover:text-primary transition-colors pl-8">
                <span>{PHONE_2}</span>
              </a>
              <a href={`tel:${PHONE_1}`} className="flex items-center gap-3 text-ink/70 hover:text-primary transition-colors">
                <i className="fas fa-phone text-lg w-5 text-center" />
                <span>{PHONE_1}</span>
              </a>
              <a href={`tel:${PHONE_2}`} className="flex items-center gap-3 text-ink/70 hover:text-primary transition-colors pl-8">
                <span>{PHONE_2}</span>
              </a>
              <a href={`tel:${PHONE_3}`} className="flex items-center gap-3 text-ink/70 hover:text-primary transition-colors pl-8">
                <span>{PHONE_3}</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-ink/70 hover:text-primary transition-colors">
                <i className="fas fa-envelope text-lg w-5 text-center" />
                <span>{EMAIL}</span>
              </a>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink/70 hover:text-primary transition-colors">
                <i className="fab fa-facebook text-[#1877F2] text-lg w-5 text-center" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white rounded-2xl p-6 border border-ink/5 shadow-sm">
            <h2 className="font-bold text-ink mb-3">Head Office</h2>
            <p className="text-sm text-ink/60 leading-relaxed mb-3">
              Office No. 16, 2nd Floor, Resham Plaza,<br />
              Chandni Chowk, Satellite Town,<br />
              Rawalpindi, Punjab
            </p>
            <a
              href="https://www.google.com/maps?q=33.63223406174258,73.07174944232855"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
            >
              <i className="fas fa-map-pin" />
              View on Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-ink mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="bg-white rounded-2xl border border-ink/5 shadow-sm group open:shadow-md transition-shadow">
              <summary className="px-6 py-4 cursor-pointer text-sm font-semibold text-ink flex items-center justify-between list-none">
                {q}
                <i className="fas fa-chevron-down text-xs text-ink/30 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-4 text-sm text-ink/60 leading-relaxed border-t border-ink/5 pt-3">
                {a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}