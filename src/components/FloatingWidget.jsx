import { useState } from 'react';
import { Heart, X } from 'lucide-react';

export default function FloatingWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*Awaz e Insan — Quick Inquiry*\n\nName: ${name}\nPhone: ${phone}\nInterest: ${interest || 'General'}`;
    window.open(`https://wa.me/923159942780?text=${encodeURIComponent(text)}`, '_blank');
    setOpen(false);
    setName('');
    setPhone('');
    setInterest('');
  };

  return (
    <>
      <style>{`
        .fw-card { transform-origin: bottom right; }
      `}</style>
      <div className="fixed bottom-6 right-6 z-[9998] flex flex-col items-end gap-3">
        <div className={`fw-card bg-white rounded-2xl p-5 w-[300px] shadow-[0_12px_40px_rgba(0,0,0,.12)] border border-primary/8 transition-all duration-250 ${open ? 'scale-100 translate-y-0 opacity-100' : 'scale-75 translate-y-5 opacity-0 pointer-events-none'}`}>
          <div className="font-heading font-extrabold text-[15px] text-ink mb-1">Get Involved</div>
          <div className="text-xs text-[#555] mb-3.5">Connect with us on WhatsApp</div>
          <form onSubmit={handleSubmit}>
            <div className="mb-2.5">
              <input placeholder="Your name" value={name} onChange={e => setName(e.target.value)} required
                className="w-full px-3.5 py-2.5 rounded-xl border border-primary/10 text-[13px] font-body text-ink outline-none transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_2px_rgba(0,109,119,.06)] box-border" />
            </div>
            <div className="mb-2.5">
              <input placeholder="Phone number" value={phone} onChange={e => setPhone(e.target.value)} required
                className="w-full px-3.5 py-2.5 rounded-xl border border-primary/10 text-[13px] font-body text-ink outline-none transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_2px_rgba(0,109,119,.06)] box-border" />
            </div>
            <div className="mb-2.5">
              <input placeholder="Donate / Volunteer / Help" value={interest} onChange={e => setInterest(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-primary/10 text-[13px] font-body text-ink outline-none transition-all duration-200 focus:border-primary focus:shadow-[0_0_0_2px_rgba(0,109,119,.06)] box-border" />
            </div>
            <button type="submit" className="w-full py-2.5 rounded-xl border-none bg-primary text-white font-bold text-[13px] cursor-pointer flex items-center justify-center gap-2 transition-transform duration-200 hover:-translate-y-0.5">
              <Heart size={14} /> Send
            </button>
          </form>
        </div>

        <button className="w-14 h-14 rounded-full border-none cursor-pointer flex items-center justify-center shadow-[0_6px_24px_rgba(226,149,120,.35)] transition-all duration-250 hover:scale-110 hover:shadow-[0_8px_30px_rgba(226,149,120,.5)] bg-cta text-white relative z-2"
          onClick={() => setOpen(!open)} aria-label="Get Involved">
          {open ? <X size={22} /> : <Heart size={22} fill="currentColor" />}
        </button>
      </div>
    </>
  );
}