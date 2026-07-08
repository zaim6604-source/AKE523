import { useState } from 'react'

const categories = [
  'Construction Worker', 'Driver', 'Technician', 'Hospitality Staff',
  'Factory Worker', 'Security Guard', 'Healthcare Professional',
  'Engineer', 'IT Professional', 'Other',
]

export default function QuickApply() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `*Quick Apply - Mian Enterprises*%0A%0A_Name:_ ${encodeURIComponent(name)}%0A_Phone:_ ${encodeURIComponent(phone)}%0A_Category:_ ${encodeURIComponent(category)}`
    window.open(`https://wa.me/923009326122?text=${text}`, '_blank')
    setOpen(false)
  }

  return (
    <div className="fixed bottom-5 right-4 md:right-6 z-50 flex flex-col items-end">
      {open && (
        <div className="mb-3 bg-white rounded-2xl shadow-2xl p-5 w-72 md:w-80 border border-primary/20 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-primary text-sm">Quick Apply</h4>
            <button onClick={() => setOpen(false)} className="text-ink/40 hover:text-cta transition-colors">
              <i className="fas fa-times" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" placeholder="Your Name" required value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-primary/20 text-sm outline-none focus:border-secondary bg-background text-ink" />
            <input type="tel" placeholder="Phone Number" required value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-primary/20 text-sm outline-none focus:border-secondary bg-background text-ink" />
            <select required value={category} onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-primary/20 text-sm outline-none focus:border-secondary bg-background text-ink">
              <option value="">Job Category</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <button type="submit" className="w-full bg-cta text-white font-bold py-2.5 rounded-lg text-sm hover:opacity-90 transition-all shadow-md">
              <i className="fab fa-whatsapp mr-1" /> Apply Now
            </button>
          </form>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-cta text-white shadow-lg hover:opacity-90 transition-all flex items-center justify-center text-2xl shadow-cta/40 animate-bounce-subtle"
        aria-label="Quick Apply"
      >
        <i className={`fas ${open ? 'fa-times' : 'fa-file-pen'}`} />
      </button>
    </div>
  )
}