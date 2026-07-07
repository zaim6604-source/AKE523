import { useState } from 'react';
import { Phone, Menu, X, Heart } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Our Work' },
  { id: 'involve', label: 'Get Involved' },
  { id: 'impact', label: 'Impact' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setOpen(false);
  };
  const wa = () => window.open('https://wa.me/923159942780', '_blank');

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white/88 backdrop-blur-xl border-b border-primary/8">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 h-[70px]">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => go('home')}>
            <div className="w-[38px] h-[38px] rounded-xl bg-primary flex items-center justify-center text-white text-lg">
              <Heart size={18} fill="currentColor" />
            </div>
            <div>
              <div className="font-heading font-black text-lg text-ink leading-tight">Awaz e Insan</div>
              <div className="text-[10px] font-semibold text-primary tracking-wide uppercase">Voice of Humanity</div>
            </div>
            <span className="desktop-only inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1 text-[10px] font-bold text-primary tracking-wide uppercase ml-2.5">
              <span className="w-[5px] h-[5px] rounded-full bg-primary shrink-0" />
              Peshawar
            </span>
          </div>

          <div className="desktop-only flex items-center gap-0.5">
            {links.map(l => (
              <button key={l.id}
                className={`nav-link ${active === l.id ? 'active' : ''}`}
                style={{ color: active === l.id ? '#006D77' : '#555' }}
                onClick={() => go(l.id)}>
                {l.label}
              </button>
            ))}
            <div className="flex items-center gap-1.5 ml-2">
              <a href="https://www.facebook.com/awaze.insan/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center text-primary hover:bg-primary/16 transition-colors"
                aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <button className="btn-cta" onClick={wa} style={{ padding: '9px 18px', fontSize: 13, borderRadius: 10 }}>
                <Phone size={14} /> Donate / Help
              </button>
            </div>
          </div>

          <button className="mobile-only bg-transparent border-none cursor-pointer p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={24} color="#003844" /> : <Menu size={24} color="#003844" />}
          </button>
        </div>

        <div className="mobile-only overflow-hidden transition-all duration-350"
          style={{
            maxHeight: open ? 480 : 0,
            boxShadow: open ? '0 8px 30px rgba(0,0,0,.08)' : 'none',
            borderTop: open ? '1px solid rgba(0,109,119,.10)' : 'none',
          }}>
          <div className="p-5 pt-3 flex flex-col gap-1">
            {links.map(l => (
              <button key={l.id} onClick={() => go(l.id)}
                className="border-none cursor-pointer text-left px-4 py-3 rounded-xl font-semibold text-[15px] transition-colors"
                style={{
                  background: active === l.id ? 'rgba(0,109,119,.08)' : 'none',
                  color: active === l.id ? '#006D77' : '#555',
                }}>
                {l.label}
              </button>
            ))}
            <div className="flex gap-2 mt-2">
              <a href="https://www.facebook.com/awaze.insan/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
            <button className="btn-cta mt-2 justify-center rounded-xl text-[15px]" onClick={wa}>
              <Phone size={16} /> Donate / Help on WhatsApp
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}