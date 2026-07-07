import { useEffect, useRef } from 'react';
import { Wrench, ClipboardCheck, Award } from 'lucide-react';

const trustChips = [
  { icon: Wrench, label: 'Hands-On Training', accent: '#FF206E' },
  { icon: ClipboardCheck, label: 'Certified Testing', accent: '#41EAD4' },
  { icon: Award, label: 'Experienced Instructors', accent: '#FBFF12' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.ab-reveal');
    if (!els?.length) return;
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
      id="about"
      ref={sectionRef}
      style={{
        padding: 'clamp(80px,10vw,130px) 24px',
        background: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,32,110,0.04), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container">
        {/* Header */}
        <div
          className="ab-reveal reveal"
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <span className="pill-badge">WHO WE ARE</span>
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
            About{' '}
            <span style={{ color: '#FF206E' }}>New Trademan</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,450px), 1fr))',
            gap: 56,
            alignItems: 'center',
          }}
        >
          {/* Image */}
          <div
            className="ab-reveal reveal-l"
            style={{ position: 'relative' }}
          >
            <div className="img-hover-zoom" style={{ borderRadius: 20, boxShadow: '0 20px 60px rgba(255,32,110,0.12)' }}>
              <img
                src="/images/about-classroom.jpg"
                alt="New Trademan training centre in Mardan"
                style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block' }}
                onError={(e) => { e.target.src = '/images/fallback.jpg'; }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="ab-reveal reveal-r">
            <p
              style={{
                fontSize: 15,
                color: '#4B4453',
                lineHeight: 1.75,
                fontFamily: 'Inter, sans-serif',
                marginBottom: 20,
              }}
            >
              Located at <strong>Sikandari Hoti, Mardan</strong>, New Trademan Trade Test & Technical Training Centre is a premier skill development institute dedicated to preparing, testing, and certifying skilled workers for both local and international job markets.
            </p>
            <p
              style={{
                fontSize: 15,
                color: '#4B4453',
                lineHeight: 1.75,
                fontFamily: 'Inter, sans-serif',
                marginBottom: 32,
              }}
            >
              We provide hands-on technical training across 12+ trades combined with professional trade testing that employers trust. Whether you're starting a new skill or certifying existing experience, New Trademan gives you the credentials you need to succeed.
            </p>

            {/* Trust chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {trustChips.map((chip) => {
                const Icon = chip.icon;
                return (
                  <div
                    key={chip.label}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 7,
                      padding: '8px 16px',
                      borderRadius: 10,
                      background: `${chip.accent}12`,
                      border: `1px solid ${chip.accent}25`,
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: 13,
                      color: '#1A1423',
                    }}
                  >
                    <Icon size={14} color={chip.accent} />
                    {chip.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
