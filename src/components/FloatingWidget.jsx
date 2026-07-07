import { useState } from 'react';

export default function FloatingWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [need, setNeed] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    const msg = encodeURIComponent(
      `Hello ZB HR Services! I'd like to get started.%0A%0AName: ${name}%0APhone: ${phone}%0ANeed: ${need || 'Not specified'}`
    );
    window.open(`https://wa.me/923008582313?text=${msg}`, '_blank');
    setOpen(false);
    setName('');
    setPhone('');
    setNeed('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-ink shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${open ? 'bg-ink rotate-45 text-white' : 'bg-cta'}`}
        aria-label="Get Started"
      >
        <i className={`fas ${open ? 'fa-times' : 'fa-bolt'} text-xl`} />
      </button>

      <div className={`absolute bottom-16 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-primary/10 overflow-hidden transition-all duration-300 ${open ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}>
        <div className="bg-gradient-to-r from-primary to-accent p-4">
          <h3 className="text-white font-bold font-heading text-sm">Quick Start</h3>
          <p className="text-white/80 text-xs">We'll connect on WhatsApp</p>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          <select value={need} onChange={(e) => setNeed(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none">
            <option value="">I need…</option>
            <option value="Hiring">Hiring</option>
            <option value="Job Seeking">Job Seeking</option>
            <option value="HR Consulting">HR Consulting</option>
            <option value="Other">Other</option>
          </select>
          <button type="submit"
            className="w-full bg-primary hover:bg-highlight text-white font-semibold py-3 rounded-xl text-sm transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2">
            <i className="fab fa-whatsapp" /> Get Started
          </button>
        </form>
      </div>
    </div>
  );
}
