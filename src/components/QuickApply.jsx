import { useState } from 'react';

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(`Quick Apply:%0A%0AName: ${form.name}%0APhone: ${form.phone}`);
    window.open(`https://wa.me/923009050416?text=${body}`, '_blank');
    setSubmitted(true);
  };

  const handleReset = () => {
    setOpen(false);
    setSubmitted(false);
    setForm({ name: '', phone: '' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded form */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl p-5 mb-3 w-72 border border-[#FFD500]/30">
          {!submitted ? (
            <>
              <h4 className="font-bold text-[#1C1C1C] text-sm mb-3">Quick Apply</h4>
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 focus:border-[#E10600]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#FFD500] text-[#141414] text-sm font-bold py-2.5 rounded-lg hover:bg-[#E10600] hover:text-white transition-all"
                >
                  <i className="fa-brands fa-whatsapp mr-1.5"></i>Apply via WhatsApp
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-2">
              <p className="text-sm font-semibold text-[#1C1C1C] mb-1">Application Sent!</p>
              <p className="text-xs text-gray-500 mb-3">
                Your WhatsApp has been opened.
              </p>
              <a
                href="tel:0512806263"
                className="block w-full bg-[#E10600] text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-[#A30000] transition-all mb-2"
              >
                <i className="fa-solid fa-phone mr-1.5"></i>Call Us Instead
              </a>
              <button
                onClick={handleReset}
                className="text-xs text-gray-500 hover:text-[#E10600]"
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
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-[#141414] text-xl transition-all ${
          open ? 'bg-[#E10600] rotate-45 text-white' : 'bg-[#FFD500] hover:bg-[#E10600] hover:text-white'
        }`}
        aria-label="Quick Apply"
      >
        <i className={`fa-brands ${open ? 'fa-times' : 'fa-whatsapp'}`}></i>
      </button>
    </div>
  );
}