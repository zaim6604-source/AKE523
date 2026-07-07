import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Award } from 'lucide-react';

export default function Hero() {
  const badgeRef = useRef(null);
  const h1Ref = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const els = [badgeRef, h1Ref, subRef, ctaRef, photoRef];
    els.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.opacity = 0;
        ref.current.style.transform = 'translateY(28px)';
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
            ref.current.style.opacity = 1;
            ref.current.style.transform = 'translateY(0)';
          }
        }, 200 + i * 150);
      }
    });
  }, []);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#FFF8E0',
        overflow: 'hidden',
        paddingTop: '90px',
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '-5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,32,110,0.06), transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-8%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(65,234,212,0.08), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Tools/gear motif - subtle SVG pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF206E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: 'none',
        }}
      />

      <div
        className="section-container"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Left content */}
        <div>
          <div ref={badgeRef} className="pill-badge">
            Train • Test • Certify
          </div>

          <h1
            ref={h1Ref}
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(32px, 5vw, 56px)',
              color: '#1A1423',
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              marginBottom: 20,
            }}
          >
            Learn the Skill.{' '}
            <span style={{ color: '#FF206E' }}>Pass the Test.</span>{' '}
            Prove Your Trade.
          </h1>

          <p
            ref={subRef}
            style={{
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              color: '#4B4453',
              lineHeight: 1.7,
              maxWidth: 540,
              marginBottom: 32,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            New Trademan trains and certifies skilled workers in Mardan — hands-on technical training plus professional trade testing employers trust.
          </p>

          <div
            ref={ctaRef}
            style={{
              display: 'flex',
              gap: 14,
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://wa.me/923194139360"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              Enroll / Book Test <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/923194139360"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Right photo */}
        <div ref={photoRef} className="img-hover-zoom" style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: -12,
              left: -12,
              right: 12,
              bottom: 12,
              border: '3px solid #41EAD4',
              borderRadius: 24,
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />
          <img
            src="/images/hero-workshop.jpg"
            alt="Workshop training at New Trademan Mardan"
            style={{
              width: '100%',
              height: 460,
              objectFit: 'cover',
              borderRadius: 20,
              position: 'relative',
              zIndex: 1,
            }}
            loading="eager"
            onError={(e) => { e.target.src = '/images/fallback.jpg'; }}
          />

          {/* Floating stat chips */}
          <div
            style={{
              position: 'absolute',
              bottom: 24,
              left: 24,
              zIndex: 3,
              display: 'flex',
              gap: 10,
            }}
          >
            <div
              style={{
                background: '#fff',
                borderRadius: 10,
                padding: '8px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 12,
                color: '#1A1423',
              }}
            >
              <CheckCircle size={14} color="#41EAD4" /> Certified
            </div>
            <div
              style={{
                background: '#fff',
                borderRadius: 10,
                padding: '8px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 12,
                color: '#1A1423',
              }}
            >
              <Award size={14} color="#FF206E" /> Hands-On
            </div>
          </div>
        </div>
      </div>

      {/* Turquoise accent line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'linear-gradient(90deg, #FF206E, #41EAD4, #FBFF12)',
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          #home .section-container {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}