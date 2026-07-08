import { useState } from 'react';

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', destination: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Shafay International! Quick Apply — Name: ${form.name || 'N/A'}, Phone: ${form.phone || 'N/A'}, Destination: ${form.destination || 'Not specified'}.`;
    window.open(`https://wa.me/923002141262?text=${encodeURIComponent(text)}`, '_blank');
    setOpen(false);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#FB5607] text-white shadow-lg hover:shadow-xl hover:bg-[#e04e06] transition-all flex items-center justify-center text-xl"
        aria-label="Quick Apply"
      >
        <i className="fab fa-whatsapp" />
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-[#FB5607]/30 overflow-hidden">
          <div className="bg-[#FB5607] px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <i className="fab fa-whatsapp text-white text-sm" />
              <span className="text-sm font-bold font-[Plus_Jakarta_Sans] text-white">Quick Apply</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close"
            >
              <i className="fas fa-times" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-5 space-y-3">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#FB5607] focus:ring-2 focus:ring-[#FB5607]/20 outline-none transition-all text-sm"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#FB5607] focus:ring-2 focus:ring-[#FB5607]/20 outline-none transition-all text-sm"
            />
            <input
              type="text"
              name="destination"
              value={form.destination}
              onChange={handleChange}
              placeholder="Destination Country (optional)"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#FB5607] focus:ring-2 focus:ring-[#FB5607]/20 outline-none transition-all text-sm"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#FB5607] rounded-xl hover:bg-[#e04e06] hover:shadow-lg transition-all"
            >
              <i className="fab fa-whatsapp" />
              Send via WhatsApp
            </button>
          </form>
        </div>
      )}
    </>
  );
}
