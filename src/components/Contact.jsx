import { useState } from 'react'

const WHATSAPP_NUMBER = '923344925559'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=`

const FORM_FIELDS = [
  { name: 'name', label: 'Full Name', icon: 'fa-user', type: 'text' },
  { name: 'phone', label: 'Phone Number', icon: 'fa-phone', type: 'tel' },
  { name: 'country', label: 'Destination Country', icon: 'fa-globe', type: 'text' },
  { name: 'message', label: 'Your Message', icon: 'fa-message', type: 'textarea' },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    country: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hello Malakand Recruiting Agency!%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ADestination: ${encodeURIComponent(form.country)}%0AMessage: ${encodeURIComponent(form.message)}`
    window.open(WHATSAPP_LINK + text, '_blank')
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section pill */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-5 py-2 rounded-full">
            <i className="fas fa-address-card" />
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-4 mb-3">
            Get in Touch
          </h2>
          <p className="text-ink/60 max-w-xl mx-auto">
            Visit our office, call us, or send a message — we are here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
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
                className="w-full inline-flex items-center justify-center gap-2 bg-cta text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-green-600 transition-colors shadow-lg shadow-cta/30"
              >
                <i className="fa-brands fa-whatsapp" />
                Send via WhatsApp
              </button>
            </form>
            <p className="text-xs text-ink/40 text-center mt-3">
              Your information will be sent securely via WhatsApp.
            </p>
          </div>

          {/* Contact info + Map */}
          <div className="space-y-6">
            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <ContactCard
                icon="fa-location-dot"
                label="Office Address"
                value={
                  <>
                    Office 17-U, Twin City Plaza
                    <br />
                    Faizabad, Murree Road
                    <br />
                    Rawalpindi, Punjab
                  </>
                }
              />
              <ContactCard
                icon="fa-phone"
                label="Phone"
                value={
                  <>
                    <a href="tel:0514575696" className="hover:text-primary transition-colors">
                      051-4575696
                    </a>
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
                      href="https://wa.me/923344925559"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      0334-4925559
                    </a>
                    <br />
                    <a
                      href="https://wa.me/923009520855"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      0300-9520855
                    </a>
                  </>
                }
              />
              <ContactCard
                icon="fa-envelope"
                label="Email"
                value={
                  <>
                    <a
                      href="mailto:mra2166@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      mra2166@gmail.com
                    </a>
                    <br />
                    <span className="text-ink/40">info@malakandra.pk</span>
                  </>
                }
              />
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-primary/10 h-64">
              <iframe
                title="Malakand Recruiting Agency Location"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=33.66380226916132,73.08428402698567&zoom=16"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Facebook link */}
            <a
              href="https://www.facebook.com/p/Malakand-Recruiting-Agency-61555126926683/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#1877F2] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#1664d9] transition-colors"
            >
              <i className="fa-brands fa-facebook text-lg" />
              Follow us on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
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