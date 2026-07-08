import { useState } from 'react';

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', category: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*Quick Application - Gul Shahzad Corporation*\n\nName: ${form.name}\nPhone: ${form.phone}\nJob Category: ${form.category}`
    );
    window.open(`https://wa.me/92311509987?text=${text}`, '_blank');
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
        <div className="bg-white rounded-2xl shadow-2xl p-5 mb-3 w-72 border border-[#FFD500]/30">
          {!submitted ? (
            <>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E10600] racing-dot"></div>
                <h4 className="font-bold text-[#141414] text-sm font-poppins">Quick Apply</h4>
              </div>
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600] font-inter"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600] font-inter"
                />
                <select
                  required
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600] font-inter"
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
                  className="w-full bg-[#FFD500] text-[#141414] text-sm font-bold py-2.5 rounded-full hover:bg-[#E10600] hover:text-white transition-all"
                >
                  <i className="fa-brands fa-whatsapp mr-1.5"></i>Apply via WhatsApp
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-2">
              <p className="text-sm font-semibold text-[#141414] mb-1 font-poppins">Application Sent!</p>
              <p className="text-xs text-gray-500 mb-3 font-inter">
                WhatsApp has been opened with your details.
              </p>
              <a
                href="tel:0514933684"
                className="block w-full bg-[#E10600] text-white text-sm font-semibold py-2.5 rounded-full hover:bg-[#1C1C1C] transition-all mb-2"
              >
                <i className="fa-solid fa-phone mr-1.5"></i>Call Us Instead
              </a>
              <button
                onClick={handleReset}
                className="text-xs text-gray-500 hover:text-[#E10600] font-inter"
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
          open ? 'bg-[#E10600] rotate-45' : 'bg-[#FFD500] hover:bg-[#E10600]'
        }`}
        aria-label="Quick Apply"
      >
        <i className={`fa-brands ${open ? 'fa-times' : 'fa-whatsapp'}`}></i>
      </button>
    </div>
  );
}