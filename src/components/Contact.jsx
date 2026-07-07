import { useEffect } from 'react';
import { MapPin, Phone, Mail, Navigation2, ExternalLink } from 'lucide-react';

const FacebookIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const contactItems = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Faram Stop, Baghdada–Par Hoti Rd, Sikandari Hoti, Mardan, 23200, KPK',
    accent: '#FF206E',
    bg: 'rgba(255,32,110,0.08)',
    link: null,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '0316-9139128',
    accent: '#41EAD4',
    bg: 'rgba(65,234,212,0.08)',
    link: 'tel:+923169139128',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+92-319-4139360',
    accent: '#FBFF12',
    bg: 'rgba(251,255,18,0.08)',
    link: 'https://wa.me/923194139360',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'newtrademan@gmail.com',
    accent: '#FF6B35',
    bg: 'rgba(255,107,53,0.08)',
    link: 'mailto:newtrademan@gmail.com',
  },
  {
    icon: FacebookIcon,
    label: 'Facebook',
    value: 'New Trade Man',
    accent: '#7B2D8E',
    bg: 'rgba(123,45,142,0.08)',
    link: 'https://www.facebook.com/p/New-Trade-Man-100064054780648/',
  },
];

export default function Contact() {
  useEffect(() => {
    const els = document.querySelectorAll('.ct-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('show');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(80px,10vw,130px) 24px',
        background: '#FFF8E0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -200,
          left: -200,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,32,110,0.05), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container">
        <div
          className="ct-reveal reveal"
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span className="pill-badge">GET IN TOUCH</span>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,46px)',
              color: '#1A1423',
              marginTop: 16,
              marginBottom: 16,
              letterSpacing: '-0.8px',
            }}
          >
            Contact{' '}
            <span style={{ color: '#FF206E' }}>Us</span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#4B4453',
              maxWidth: 520,
              margin: '0 auto',
              lineHeight: 1.7,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Visit our training centre in Mardan or reach out via phone, WhatsApp, or email.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,460px),1fr))',
            gap: 40,
            alignItems: 'start',
          }}
        >
          {/* Left - contact details */}
          <div className="ct-reveal reveal-l">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                marginBottom: 32,
              }}
            >
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div
                    key={item.label}
                    style={{
                      background: '#fff',
                      border: '1px solid rgba(255,32,110,0.1)',
                      borderRadius: 18,
                      padding: '20px 22px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 16,
                      boxShadow: '0 4px 20px rgba(255,32,110,0.06)',
                      transition: 'transform 0.25s, box-shadow 0.25s',
                      cursor: item.link ? 'pointer' : 'default',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 12px 36px rgba(255,32,110,0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,32,110,0.06)';
                    }}
                  >
                    <div
                      style={{
                        minWidth: 46,
                        height: 46,
                        borderRadius: 13,
                        background: item.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} color={item.accent} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: 11,
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 600,
                          color: '#94a3b8',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          marginBottom: 4,
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 600,
                          fontSize: 14.5,
                          color: item.link ? item.accent : '#1e293b',
                          lineHeight: 1.5,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {item.value}
                        {item.link && (
                          <ExternalLink
                            size={12}
                            style={{ marginLeft: 5, display: 'inline', verticalAlign: 'middle' }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );

                return item.link ? (
                  <a
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <a
              href="https://www.google.com/maps?q=Baghdada+Par+Hoti+Road+Sikandari+Hoti+Mardan&hl=en&z=15"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}
            >
              <Navigation2 size={16} />
              Get Directions on Google Maps
            </a>
          </div>

          {/* Right - map */}
          <div
            className="ct-reveal reveal-r"
            style={{
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(255,32,110,0.12)',
              border: '1px solid rgba(255,32,110,0.1)',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg,#FF206E,#D4005A)',
                padding: '16px 22px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <MapPin size={16} color="rgba(255,255,255,0.8)" />
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.9)',
                }}
              >
                New Trademan — Sikandari Hoti, Mardan
              </span>
            </div>
            <iframe
              title="New Trademan Location"
              src="https://www.google.com/maps?q=Baghdada+Par+Hoti+Road+Sikandari+Hoti+Mardan&hl=en&z=15&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
