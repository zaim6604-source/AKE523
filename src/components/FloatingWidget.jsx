import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

export default function FloatingWidget() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', interest: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Innovative World!\n\nName: ${form.name}\nPhone: ${form.phone}\nInterest: ${form.interest || 'Not specified'}`
    );
    window.open(`https://wa.me/923335553256?text=${msg}`, '_blank');
    setOpen(false);
    setForm({ name: '', phone: '', interest: '' });
  };

  const interestOptions = [
    'Recruitment & Placement',
    'Staffing Solutions',
    'Career Consultancy',
    'Document Support',
    'Corporate Services',
    'Manpower Supply',
    'Other',
  ];

  return (
    <div className="floating-widget">
      {/* Modal */}
      {open && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in-up">
          <div className="bg-[#D7263D] px-5 py-4 flex items-center justify-between">
            <h3 className="text-white font-heading font-bold text-sm">Get Started</h3>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <FaTimes />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-5 space-y-3">
            <div>
              <label className="block text-xs font-semibold text-[#340710] mb-1">Name *</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required
                placeholder="Your name"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-[#D7263D] focus:ring-2 focus:ring-[#D7263D]/20 transition-all" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#340710] mb-1">Phone *</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                placeholder="03XX-XXXXXXX"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-[#D7263D] focus:ring-2 focus:ring-[#D7263D]/20 transition-all" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#340710] mb-1">Interest</label>
              <select name="interest" value={form.interest} onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-[#D7263D] focus:ring-2 focus:ring-[#D7263D]/20 transition-all appearance-none">
                <option value="">Select...</option>
                {interestOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <button type="submit"
              className="w-full bg-[#02C39A] hover:bg-[#02b38d] text-white font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 text-sm">
              <FaWhatsapp /> Send via WhatsApp
            </button>
          </form>
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#02C39A] hover:bg-[#02b38d] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center"
        aria-label="Get Started"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
}
