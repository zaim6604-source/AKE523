import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Think HR', id: 'thinkhr' },
  { label: 'Process', id: 'process' },
  { label: 'FAQs', id: 'faqs' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const fn = () => {
      setSolid(window.scrollY > 50);
      const ids = ['home', 'about', 'services', 'thinkhr', 'process', 'faqs', 'contact'];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 130) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  const wa = () => window.open('https://wa.me/923121124692', '_blank');

  return (
    <>
      <style>{`
        .nb-wrap { position:fixed;top:0;left:0;right:0;z-index:9999;transition:background .35s,box-shadow .35s,backdrop-filter .35s; }
        .nb-wrap.solid { background:rgba(255,255,255,.92);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);box-shadow:0 1px 0 rgba(0,107,166,.08),0 4px 24px rgba(0,107,166,.06); }
        .nb-inner { max-width:1200px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;transition:height .3s; }
        .hbg { background:none;border:none;cursor:pointer;padding:8px;display:none; }
        .hbg-bar { display:block;height:2px;border-radius:2px;transition:all .25s; }
        .mob-menu { background:#fff;overflow:hidden;transition:max-height .35s ease,box-shadow .35s;border-bottom:1px solid rgba(0,107,166,.10); }
        @media(max-width:1024px){
          .nb-links{display:none!important}
          .hbg{display:block!important}
        }
      `}</style>

      <nav className={`nb-wrap${solid ? ' solid' : ''}`}>
        <div className="nb-inner" style={{ height: solid ? 64 : 76 }}>
          {/* Logo */}
          <button onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'none', border: 'none', cursor: 'pointer' }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: 'linear-gradient(135deg, #006BA6, #0496FF)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(0,107,166,.30)',
              flexShrink: 0, color: '#fff', fontWeight: 900, fontSize: 18,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>H</div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 900, fontSize: 18, lineHeight: 1.1, color: '#06283D', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                HR-Pro
              </div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.05em', color: '#006BA6', marginTop: 1 }}>
                Consulting & Services
              </div>
            </div>
            <span style={{
              fontSize: 10, fontWeight: 800, letterSpacing: '.04em',
              padding: '3px 10px', borderRadius: 99,
              background: 'rgba(0,107,166,.10)', color: '#006BA6',
              border: '1px solid rgba(0,107,166,.20)',
              fontFamily: "'Inter', sans-serif",
            }}>
              Karachi
            </span>
          </button>

          {/* Desktop nav */}
          <div className="nb-links" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`nav-link ${active === l.id ? 'active' : ''}`}
                style={{
                  color: active === l.id ? '#006BA6' : '#555',
                  background: active === l.id ? 'rgba(0,107,166,.08)' : 'transparent',
                }}
              >
                {l.label}
              </button>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 8 }}>
              <a href="https://www.linkedin.com/company/hr-pro-consulting-services/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(0,107,166,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#006BA6', transition: 'background .2s' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.facebook.com/people/HR-Pro-Consulting-Services/61564620787478/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(0,107,166,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#006BA6', transition: 'background .2s' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <button className="btn-cta" onClick={wa} style={{ padding: '9px 18px', fontSize: 13, borderRadius: 10 }}>
                <Phone size={14} /> Get Started
              </button>
            </div>
          </div>

          {/* Hamburger */}
          <button className="hbg" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={24} color="#06283D" /> : <Menu size={24} color="#06283D" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className="mob-menu" style={{ maxHeight: open ? 480 : 0, boxShadow: open ? '0 8px 30px rgba(0,0,0,.08)' : 'none', borderTop: open ? '1px solid rgba(0,107,166,.10)' : 'none' }}>
          <div style={{ padding: '12px 20px 20px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {links.map(l => (
              <button key={l.id} onClick={() => go(l.id)} style={{
                background: active === l.id ? 'rgba(0,107,166,.08)' : 'none',
                border: 'none', cursor: 'pointer',
                textAlign: 'left', padding: '12px 16px', borderRadius: 10,
                fontWeight: 600, fontSize: 15,
                color: active === l.id ? '#006BA6' : '#555',
                transition: 'background .2s',
              }}>{l.label}</button>
            ))}
            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              <a href="https://www.linkedin.com/company/hr-pro-consulting-services/" target="_blank" rel="noopener noreferrer"
                style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(0,107,166,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#006BA6' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.facebook.com/people/HR-Pro-Consulting-Services/61564620787478/" target="_blank" rel="noopener noreferrer"
                style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(0,107,166,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#006BA6' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
            <button className="btn-cta" onClick={wa} style={{ marginTop: 8, justifyContent: 'center', borderRadius: 10, fontSize: 15 }}>
              <Phone size={16} /> Get Started on WhatsApp
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}