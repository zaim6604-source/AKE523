import { useState } from 'react';

export default function FloatingWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [matter, setMatter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    const text = `Hello Ashraf Gujjar Law Associates,\nMy name is ${name}.\nPhone: ${phone}\nMatter: ${matter || 'Not specified'}`;
    window.open(`https://wa.me/923335107178?text=${encodeURIComponent(text)}`, '_blank');
    setOpen(false);
    setName('');
    setPhone('');
    setMatter('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Widget form */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl p-5 w-[300px]"
          style={{ border: '1px solid rgba(201,162,39,.15)' }}>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-[#0B2545]"
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
              Book Consultation
            </h4>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
              <i className="fas fa-times text-xs" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input type="text" placeholder="Your Name" value={name}
              onChange={e => setName(e.target.value)}
              className="form-input text-xs" required />
            <input type="tel" placeholder="Phone Number" value={phone}
              onChange={e => setPhone(e.target.value)}
              className="form-input text-xs" required />
            <input type="text" placeholder="Matter (optional)" value={matter}
              onChange={e => setMatter(e.target.value)}
              className="form-input text-xs" />
            <button type="submit"
              className="btn-gold w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-white">
              <i className="fab fa-whatsapp" /> Send via WhatsApp
            </button>
          </form>
        </div>
      )}

      {/* Toggle button */}
      <button onClick={() => setOpen(!open)}
        className="flex items-center gap-3 px-5 py-3.5 rounded-full shadow-2xl transition-all duration-200 hover:scale-105 btn-gold text-white">
        <i className="fas fa-scale-balanced text-base" />
        <span className="text-sm font-bold whitespace-nowrap">Book Consultation</span>
      </button>
    </div>
  );
}