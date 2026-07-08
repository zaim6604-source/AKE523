import { useState } from 'react';

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Quick Apply - Rais Brothers%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AI'm interested in overseas employment opportunities.`
    );
    window.open(`https://wa.me/923009219780?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const reset = () => {
    setForm({ name: '', phone: '' });
    setSubmitted(false);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded form */}
      <div
        className={`quick-apply-form bg-white rounded-2xl shadow-2xl overflow-hidden ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
        style={{ maxWidth: '300px', width: '100%', border: '1px solid rgba(225, 6, 0, 0.2)' }}
      >
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold m-0" style={{ color: 'var(--color-accent)', fontFamily: "'Poppins', sans-serif" }}>Quick Apply</h4>
              <button type="button" onClick={reset} className="text-sm cursor-pointer" style={{ color: 'var(--color-primary)', background: 'none', border: 'none' }}>
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-3 py-2.5 rounded-lg border-2 text-xs outline-none"
              style={{ borderColor: 'rgba(225, 6, 0, 0.2)', color: 'var(--color-ink)' }}
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full px-3 py-2.5 rounded-lg border-2 text-xs outline-none"
              style={{ borderColor: 'rgba(225, 6, 0, 0.2)', color: 'var(--color-ink)' }}
            />
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg text-xs font-bold shadow-md transition-all duration-200 hover:shadow-lg cursor-pointer"
              style={{ backgroundColor: 'var(--color-cta)', color: 'var(--color-accent)', border: 'none' }}
            >
              <i className="fab fa-whatsapp mr-2" />
              Apply via WhatsApp
            </button>
          </form>
        ) : (
          <div className="p-4 sm:p-5 text-center space-y-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto" style={{ backgroundColor: 'var(--color-cta)' }}>
              <i className="fa-solid fa-check text-black" />
            </div>
            <p className="text-xs font-semibold" style={{ color: 'var(--color-accent)' }}>WhatsApp opened!</p>
            <p className="text-[10px]" style={{ color: '#888' }}>Send the message to connect with us.</p>
            <button
              onClick={reset}
              className="text-xs underline cursor-pointer"
              style={{ color: 'var(--color-primary)', background: 'none', border: 'none' }}
            >
              Close
            </button>
          </div>
        )}
      </div>

      {/* FAB Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110 cursor-pointer"
        style={{ backgroundColor: open ? 'var(--color-primary)' : 'var(--color-cta)', border: 'none' }}
        aria-label="Quick Apply"
      >
        <i className={`fa-brands fa-whatsapp transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
           style={{ color: open ? 'white' : 'var(--color-accent)' }} />
      </button>
    </div>
  );
}