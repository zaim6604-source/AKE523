import { useState } from 'react'

const WHATSAPP_NUMBER = '923467223031'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=`

export default function QuickApply() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', country: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Quick Apply - Al-Imran International%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ADestination: ${encodeURIComponent(form.country)}`
    window.open(WHATSAPP_LINK + text, '_blank')
    setOpen(false)
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-cta text-white px-5 py-3 rounded-full shadow-xl shadow-cta/40 hover:bg-teal-600 transition-all hover:-translate-y-0.5"
        aria-label="Quick Apply"
      >
        <i className="fa-brands fa-whatsapp text-lg" />
        <span className="text-sm font-semibold">Quick Apply</span>
      </button>

      {/* Modal overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative animate-fade-up">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-ink/50 hover:bg-gray-200 transition-colors"
              aria-label="Close"
            >
              <i className="fas fa-times" />
            </button>

            <div className="flex items-center gap-2.5 mb-5">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary text-lg">
                <i className="fa-brands fa-whatsapp" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">Quick Apply</h3>
                <p className="text-xs text-ink/50">We&apos;ll respond within minutes</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <InputField
                name="name"
                icon="fa-user"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <InputField
                name="phone"
                icon="fa-phone"
                placeholder="Your phone number"
                value={form.phone}
                onChange={handleChange}
                required
              />
              <InputField
                name="country"
                icon="fa-globe"
                placeholder="Destination country"
                value={form.country}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-cta text-white px-5 py-3.5 rounded-xl font-semibold hover:bg-teal-600 transition-colors shadow-lg shadow-cta/30"
              >
                <i className="fa-brands fa-whatsapp" />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

function InputField({ name, icon, placeholder, value, onChange, required }) {
  return (
    <div className="relative">
      <i className={`fas ${icon} absolute left-3.5 top-1/2 -translate-y-1/2 text-primary/50 text-sm`} />
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 rounded-xl border border-primary/20 bg-background text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm"
      />
    </div>
  )
}