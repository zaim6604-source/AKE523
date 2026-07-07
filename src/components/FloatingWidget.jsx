import { useState } from 'react';

const interests = [
  'HR Consulting',
  'Recruitment & Staffing',
  'Payroll & Benefits',
  'Policy & Compliance',
  'Training & Development',
  'Career Consultation',
  'Other',
];

export default function FloatingWidget() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', interest: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Name: ${form.name}%0APhone: ${form.phone}%0AInterest: ${form.interest}`;
    window.open(`https://wa.me/923353465095?text=${encodeURIComponent(text.replace(/%0A/g, '\n'))}`, '_blank');
    setSubmitted(true);
  };

  const reset = () => {
    setForm({ name: '', phone: '', interest: '' });
    setSubmitted(false);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded form */}
      <div
        className={`quick-apply-form bg-white rounded-2xl shadow-2xl overflow-hidden ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
        style={{ maxWidth: '300px', width: '100%', border: '1px solid #C9CCD5' }}
      >
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold m-0" style={{ color: '#0B2436' }}>Get Started</h4>
              <button type="button" onClick={reset} className="text-sm cursor-pointer" style={{ color: '#FF6B35', background: 'none', border: 'none' }}>
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
              style={{ borderColor: '#C9CCD5', color: '#0B2436' }}
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full px-3 py-2.5 rounded-lg border-2 text-xs outline-none"
              style={{ borderColor: '#C9CCD5', color: '#0B2436' }}
            />
            <select
              name="interest"
              value={form.interest}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 rounded-lg border-2 text-xs outline-none"
              style={{ borderColor: '#C9CCD5', color: '#0B2436' }}
            >
              <option value="">I&apos;m interested in...</option>
              {interests.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg text-xs font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg cursor-pointer"
              style={{ backgroundColor: '#FF6B35', border: 'none' }}
            >
              <i className="fa-brands fa-whatsapp mr-2" />
              Send
            </button>
          </form>
        ) : (
          <div className="p-4 sm:p-5 text-center space-y-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto" style={{ backgroundColor: '#FF6B35' }}>
              <i className="fa-brands fa-whatsapp text-white" />
            </div>
            <p className="text-xs font-semibold" style={{ color: '#0B2436' }}>Sent via WhatsApp!</p>
            <button
              onClick={reset}
              className="text-xs underline cursor-pointer"
              style={{ color: '#4A5C6B', background: 'none', border: 'none' }}
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
        style={{ backgroundColor: open ? '#1B4965' : '#FF6B35', border: 'none' }}
        aria-label="Get Started"
      >
        <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-brands fa-whatsapp'} transition-transform duration-300 ${open ? 'rotate-90' : ''}`} />
      </button>
    </div>
  );
}