import { useState } from 'react';

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', category: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Quick Application - Arabian Gulf International');
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nJob Category: ${form.category}`
    );
    window.open(`mailto:info@arabiangulfinternational.pk?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  const handleReset = () => {
    setOpen(false);
    setSubmitted(false);
    setForm({ name: '', phone: '', category: '' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded form */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl p-5 mb-3 w-72 border border-[#7B2D8E]/20">
          {!submitted ? (
            <>
              <h4 className="font-bold text-[#3D0A1E] text-sm mb-3">Quick Apply</h4>
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7B2D8E]/30 focus:border-[#7B2D8E]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7B2D8E]/30 focus:border-[#7B2D8E]"
                />
                <select
                  required
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7B2D8E]/30 focus:border-[#7B2D8E]"
                >
                  <option value="">Job Category</option>
                  <option value="Construction">Construction</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Drivers">Drivers</option>
                  <option value="Technicians">Technicians</option>
                  <option value="Security">Security</option>
                  <option value="Retail">Retail</option>
                  <option value="Other">Other</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-[#7B2D8E] text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-[#E0115F] transition-all"
                >
                  Submit Application
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-2">
              <p className="text-sm font-semibold text-[#3D0A1E] mb-1">Application Sent!</p>
              <p className="text-xs text-gray-500 mb-3">
                Your email client has been opened.
              </p>
              <a
                href="tel:0514938271"
                className="block w-full bg-[#E0115F] text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-[#7B2D8E] transition-all mb-2"
              >
                <i className="fa-solid fa-phone mr-1.5"></i>Call Us Instead
              </a>
              <button
                onClick={handleReset}
                className="text-xs text-gray-500 hover:text-[#7B2D8E]"
              >
                Close
              </button>
            </div>
          )}
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => { setOpen(!open); setSubmitted(false); }}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white text-xl transition-all ${
          open ? 'bg-[#E0115F] rotate-45' : 'bg-[#7B2D8E] hover:bg-[#E0115F]'
        }`}
        aria-label="Quick Apply"
      >
        <i className={`fa-solid ${open ? 'fa-times' : 'fa-paper-plane'}`}></i>
      </button>
    </div>
  );
}