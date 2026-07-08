import { useState } from 'react';

const jobCategories = [
  'Construction Worker',
  'Driver',
  'Technician',
  'Hospitality Staff',
  'Factory Worker',
  'Security Guard',
  'Healthcare Professional',
  'IT Professional',
  'Other',
];

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', category: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Quick Apply%0AName: ${form.name}%0APhone: ${form.phone}%0AJob Category: ${form.category}`
    );
    window.location.href = `https://wa.me/923335520190?text=${text}`;
    setSubmitted(true);
  };

  const reset = () => {
    setForm({ name: '', phone: '', category: '' });
    setSubmitted(false);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded form */}
      <div
        className={`quick-apply-form bg-white rounded-2xl shadow-2xl overflow-hidden ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
        style={{ maxWidth: '300px', width: '100%', border: '1px solid #83C5BE' }}
      >
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-sm font-bold m-0 text-[#003844]">Quick Apply</h4>
              <button type="button" onClick={reset} className="text-sm cursor-pointer text-[#E29578]" style={{ background: 'none', border: 'none' }}>
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
              style={{ borderColor: '#83C5BE', color: '#003844' }}
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full px-3 py-2.5 rounded-lg border-2 text-xs outline-none"
              style={{ borderColor: '#83C5BE', color: '#003844' }}
            />
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 rounded-lg border-2 text-xs outline-none"
              style={{ borderColor: '#83C5BE', color: '#003844' }}
            >
              <option value="">Job Category</option>
              {jobCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg text-xs font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg cursor-pointer"
              style={{ backgroundColor: '#E29578', border: 'none' }}
            >
              <i className="fa-brands fa-whatsapp mr-2" />
              Apply via WhatsApp
            </button>
          </form>
        ) : (
          <div className="p-4 sm:p-5 text-center space-y-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto" style={{ backgroundColor: '#006D77' }}>
              <i className="fa-solid fa-check text-white" />
            </div>
            <p className="text-xs font-semibold text-[#003844]">Application sent!</p>
            <a href="tel:0514442289"
              className="block w-full py-2 rounded-lg text-xs font-semibold text-white shadow-md transition-all duration-200"
              style={{ backgroundColor: '#E29578' }}>
              <i className="fa-solid fa-phone mr-2" />
              Call Us Instead
            </a>
            <button
              onClick={reset}
              className="text-xs underline cursor-pointer text-[#006D77]"
              style={{ background: 'none', border: 'none' }}
            >
              Close
            </button>
          </div>
        )}
      </div>

      {/* FAB Button — coral */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110 cursor-pointer"
        style={{ backgroundColor: open ? '#E29578' : '#E29578', border: 'none' }}
        aria-label="Quick Apply"
      >
        <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bolt'} transition-transform duration-300 ${open ? 'rotate-90' : ''}`} />
      </button>
    </div>
  );
}