import { useState } from 'react'
import useInView from '../hooks/useInView'

const categories = [
  'Construction Worker', 'Driver', 'Technician', 'Hospitality Staff',
  'Factory Worker', 'Security Guard', 'Healthcare Professional',
  'Engineer', 'IT Professional', 'Other',
]

const faqs = [
  { q: 'Is Mian Enterprises government licensed?', a: 'Yes, Mian Enterprises is a registered Overseas Employment Promoter (OEP) holding Government of Pakistan License No. 2215/MLK.' },
  { q: 'Which countries do you recruit for?', a: 'We recruit for Saudi Arabia, UAE, Qatar, Oman, Germany, Italy, Poland, Greece, Romania, and more.' },
  { q: 'Where is your office located?', a: 'Our office is at Office No. 01, First Floor, Malak Market, Munda Chowk, Timergara, Lower Dir, KPK. Visit us during business hours for a consultation.' },
  { q: 'What documents are required to apply?', a: 'Typically: valid passport (6+ months validity), CNIC, passport-size photographs, educational certificates, and experience letters (if any).' },
  { q: 'How long does the process take?', a: 'Processing times vary by country and job category, typically ranging from 2 weeks to 2 months. We keep you updated at every stage.' },
  { q: 'Are there any service fees?', a: 'Any applicable service fees are clearly communicated upfront during your initial consultation. We believe in complete transparency.' },
]

function AnimateOnView({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.1 })
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function Apply() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', message: '' })
  const [faqOpen, setFaqOpen] = useState(null)

  const update = (key, val) => setForm((f) => ({ ...f, [key]: val }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `*New Inquiry - Mian Enterprises*%0A%0A_Name:_ ${encodeURIComponent(form.name)}%0A_Phone:_ ${encodeURIComponent(form.phone)}%0A_Email:_ ${encodeURIComponent(form.email)}%0A_Job Category:_ ${encodeURIComponent(form.category)}%0A_Message:_ ${encodeURIComponent(form.message)}`
    window.open(`https://wa.me/923009326122?text=${text}`, '_blank')
  }

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <AnimateOnView>
        <div className="mb-2">
          <span className="inline-block bg-cta text-white text-xs font-bold px-3 py-1 rounded-full mb-3">GET IN TOUCH</span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-primary">Apply Now</h1>
          <p className="text-ink/60 mt-2 text-sm md:text-base">Ready to start your journey? Reach out today.</p>
        </div>
      </AnimateOnView>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form + FAQ */}
        <div className="space-y-8">
          <AnimateOnView delay={50}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-5 md:p-7 border border-primary/10 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Full Name *</label>
                <input type="text" required value={form.name} onChange={(e) => update('name', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none bg-background text-ink transition-all" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Phone *</label>
                <input type="tel" required value={form.phone} onChange={(e) => update('phone', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none bg-background text-ink transition-all" placeholder="03XX-XXXXXXX" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Email</label>
                <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none bg-background text-ink transition-all" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Job Category *</label>
                <select required value={form.category} onChange={(e) => update('category', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none bg-background text-ink transition-all">
                  <option value="">Select a category</option>
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Message</label>
                <textarea rows={3} value={form.message} onChange={(e) => update('message', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none bg-background text-ink transition-all resize-none" placeholder="Your message..." />
              </div>
              <button type="submit" className="w-full bg-cta text-white font-bold px-6 py-3.5 rounded-xl hover:opacity-90 transition-all shadow-md shadow-cta/30 flex items-center justify-center gap-2 text-sm">
                <i className="fab fa-whatsapp" /> Send via WhatsApp
              </button>
              <p className="text-xs text-ink/40 text-center">
                By submitting, you'll be redirected to WhatsApp. Alternatively, email <a href="mailto:info@mianenterprises.pk" className="text-secondary underline">info@mianenterprises.pk</a>
              </p>
            </form>
          </AnimateOnView>

          <AnimateOnView delay={100}>
            <div className="bg-white rounded-2xl shadow-md p-5 md:p-7 border border-primary/10">
              <h2 className="font-bold text-lg text-primary mb-4">Frequently Asked Questions</h2>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-primary/10 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                      className="w-full flex items-center gap-3 p-3.5 text-left hover:bg-primary/5 transition-colors"
                    >
                      <span className="font-semibold text-ink text-sm flex-1">{faq.q}</span>
                      <i className={`fas fa-chevron-down text-primary text-xs transition-transform ${faqOpen === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${faqOpen === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="px-3.5 pb-3.5 text-ink/60 text-sm leading-relaxed border-t border-primary/10 pt-3">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnView>
        </div>

        {/* Contact Info + Map */}
        <div className="space-y-6">
          <AnimateOnView delay={100}>
            <div className="bg-white rounded-2xl shadow-md p-5 md:p-7 border border-primary/10 space-y-4">
              <h3 className="font-bold text-lg text-primary">Contact Details</h3>
              <a href="https://wa.me/923009326122" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-ink/80 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <i className="fab fa-whatsapp text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-ink/40">WhatsApp</p>
                  <p className="font-semibold text-sm">0300-9326122</p>
                </div>
              </a>
              <a href="tel:0945831871" className="flex items-center gap-3 text-ink/80 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <i className="fas fa-phone text-primary" />
                </div>
                <div>
                  <p className="text-xs text-ink/40">Phone</p>
                  <p className="font-semibold text-sm">0945-831871</p>
                </div>
              </a>
              <a href="mailto:info@mianenterprises.pk" className="flex items-center gap-3 text-ink/80 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <i className="fas fa-envelope text-secondary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-ink/40">Email</p>
                  <p className="font-semibold text-sm truncate">info@mianenterprises.pk</p>
                </div>
              </a>
              <div className="flex items-start gap-3 text-ink/80">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fas fa-map-marker-alt text-accent" />
                </div>
                <div>
                  <p className="text-xs text-ink/40">Address</p>
                  <p className="font-semibold text-sm">Office No. 01, First Floor, Malak Market, Munda Chowk, Timergara, Lower Dir, KPK</p>
                </div>
              </div>
            </div>
          </AnimateOnView>

          <AnimateOnView delay={150}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-primary/10 h-72">
              <iframe
                title="Mian Enterprises Location"
                src="https://www.google.com/maps?q=Malak+Market+Munda+Chowk+Timergara+Lower+Dir+Khyber+Pakhtunkhwa&hl=en&z=15&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimateOnView>
        </div>
      </div>
    </div>
  )
}