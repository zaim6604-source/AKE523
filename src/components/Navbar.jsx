import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const FacebookIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'trades', label: 'Trades' },
  { id: 'training', label: 'Training' },
  { id: 'process', label: 'Process' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = links.map((l) => l.id);
      const scrollPos = window.scrollY + 120;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navBg = scrolled
    ? 'rgba(255,248,224,0.92)'
    : 'rgba(255,248,224,0)';

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'background 0.3s, box-shadow 0.3s, backdrop-filter 0.3s',
          background: navBg,
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
          boxShadow: scrolled ? '0 1px 30px rgba(255,32,110,0.08)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,32,110,0.08)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            height: 70,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #FF206E, #D4005A)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(255,32,110,0.35)',
                fontWeight: 800,
                fontSize: 18,
                color: '#fff',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
            >
              NT
            </div>
            <div style={{ textAlign: 'left' }}>
              <div
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 800,
                  fontSize: 17,
                  color: '#1A1423',
                  letterSpacing: '-0.3px',
                  lineHeight: 1.1,
                }}
              >
                New Trademan
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  background: '#FF206E',
                  borderRadius: 6,
                  padding: '1px 7px',
                  marginTop: 2,
                }}
              >
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: '#fff',
                    letterSpacing: '0.06em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Trade Test & Training • Mardan
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
            }}
            className="hidden-mobile"
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="nav-link"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: 13.5,
                  color: active === l.id ? '#FF206E' : '#4B4453',
                  padding: '4px 0',
                  transition: 'color 0.3s',
                  position: 'relative',
                }}
              >
                {l.label}
                {active === l.id && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: '#FF206E',
                      borderRadius: 99,
                    }}
                  />
                )}
              </button>
            ))}
            <FacebookIcon size={18} color="#FF206E" />
            <a
              href="https://wa.me/923194139360"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: 13, borderRadius: 10 }}
            >
              <Phone size={14} />
              Enroll / Book Test
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#1A1423',
              display: 'none',
              padding: 4,
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: 'fixed',
          top: 70,
          left: 0,
          right: 0,
          zIndex: 999,
          background: 'rgba(255,248,224,0.97)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: '1px solid rgba(255,32,110,0.1)',
          padding: menuOpen ? '20px 24px 24px' : '0 24px',
          maxHeight: menuOpen ? 480 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.35s ease, padding 0.35s ease',
          boxShadow: '0 8px 30px rgba(255,32,110,0.08)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              style={{
                background: active === l.id ? 'rgba(255,32,110,0.07)' : 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: 15,
                color: active === l.id ? '#FF206E' : '#4B4453',
                padding: '12px 16px',
                borderRadius: 10,
                textAlign: 'left',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              {l.label}
            </button>
          ))}
          <a
            href="https://wa.me/923194139360"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginTop: 8, justifyContent: 'center', width: '100%' }}
          >
            <Phone size={14} />
            Enroll / Book Test
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}