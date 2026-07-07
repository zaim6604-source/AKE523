const FacebookIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'trades', label: 'Trades' },
  { id: 'training', label: 'Training' },
  { id: 'process', label: 'Process' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Contact' },
];

const trades = [
  'Welder', 'Electrician', 'Plumber', 'Mason',
  'Steel Fixer', 'AC Technician', 'Heavy Driver', 'Auto Mechanic',
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#D4005A',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.04)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(65,234,212,0.08), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1160,
          margin: '0 auto',
          padding: 'clamp(56px,8vw,80px) 24px 40px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 48,
            marginBottom: 56,
          }}
        >
          {/* Brand col */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  background: 'linear-gradient(135deg,#FF206E,#41EAD4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(255,32,110,0.4)',
                  fontWeight: 800,
                  fontSize: 18,
                  color: '#fff',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                NT
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontWeight: 800,
                    fontSize: 17,
                    color: '#fff',
                    lineHeight: 1.1,
                  }}
                >
                  New Trademan
                </div>
                <div
                  style={{
                    display: 'inline-flex',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: 5,
                    padding: '1px 7px',
                    marginTop: 2,
                  }}
                >
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      color: '#41EAD4',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Trade Test & Training • Mardan
                  </span>
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: 13.5,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.7,
                fontFamily: 'Inter, sans-serif',
                marginBottom: 20,
              }}
            >
              Mardan's trusted trade test and technical training centre. Preparing, testing, and certifying skilled workers for jobs at home and abroad.
            </p>
            <a
              href="https://www.facebook.com/p/New-Trade-Man-100064054780648/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 10,
                padding: '9px 14px',
                textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.14)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
              }}
            >
              <FacebookIcon size={15} color="#41EAD4" />
              <span
                style={{
                  fontSize: 12.5,
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  color: '#FFF8E0',
                }}
              >
                Follow on Facebook
              </span>
            </a>
          </div>

          {/* Navigation col */}
          <div>
            <h4
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 700,
                fontSize: 14,
                color: '#fff',
                marginBottom: 20,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.55)',
                    padding: 0,
                    textAlign: 'left',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#41EAD4')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')
                  }
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Trades col */}
          <div>
            <h4
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 700,
                fontSize: 14,
                color: '#fff',
                marginBottom: 20,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Trades
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {trades.map((s) => (
                <button
                  key={s}
                  onClick={() => scrollTo('trades')}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.55)',
                    padding: 0,
                    textAlign: 'left',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#41EAD4')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')
                  }
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Contact col */}
          <div>
            <h4
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 700,
                fontSize: 14,
                color: '#fff',
                marginBottom: 20,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontSize: 13.5, fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.55)' }}>
                📞 0316-9139128
              </div>
              <div style={{ fontSize: 13.5, fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.55)' }}>
                💬 +92-319-4139360
              </div>
              <div style={{ fontSize: 13.5, fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.55)' }}>
                ✉️ newtrademan@gmail.com
              </div>
              <div style={{ fontSize: 13.5, fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
                📍 Faram Stop, Baghdada–Par Hoti Rd<br />Sikandari Hoti, Mardan, 23200, KPK
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: 'rgba(255,255,255,0.08)',
            marginBottom: 28,
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
          }}
        >
          <p
            style={{
              fontSize: 13,
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            © {new Date().getFullYear()} New Trademan Trade Test & Technical Training Centre · All rights reserved
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <p
              style={{
                fontSize: 12,
                fontFamily: 'Inter, sans-serif',
                color: 'rgba(255,255,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: 5,
              }}
            >
              Trade testing & training in Mardan
            </p>

            <button
              onClick={scrollToTop}
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'rgba(65,234,212,0.2)',
                border: '1px solid rgba(65,234,212,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(65,234,212,0.35)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(65,234,212,0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#41EAD4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
