import useInView from '../hooks/useInView';

const expertiseAreas = [
  { icon: 'fas fa-user-tie', label: 'Employee Relations', color: '#D90429' },
  { icon: 'fas fa-gavel', label: 'Labor Law & Compliance', color: '#EF233C' },
  { icon: 'fas fa-magnifying-glass', label: 'Talent Acquisition', color: '#FF6B6B' },
  { icon: 'fas fa-sitemap', label: 'Organizational Development', color: '#FFD60A' },
  { icon: 'fas fa-sack-dollar', label: 'Compensation & Benefits', color: '#D90429' },
  { icon: 'fas fa-handshake', label: 'Conflict Resolution', color: '#EF233C' },
];

const industries = [
  { icon: 'fas fa-laptop-code', label: 'IT', color: '#D90429' },
  { icon: 'fas fa-industry', label: 'Manufacturing', color: '#EF233C' },
  { icon: 'fas fa-store', label: 'Retail', color: '#FF6B6B' },
  { icon: 'fas fa-heart-pulse', label: 'Healthcare', color: '#FFD60A' },
  { icon: 'fas fa-building-columns', label: 'Finance', color: '#BF0225' },
  { icon: 'fas fa-utensils', label: 'Hospitality', color: '#D90429' },
];

export default function Expertise() {
  const [ref, inView] = useInView();

  return (
    <>
      <style>{`
        .ex-section{background:#fff;padding:96px 24px}
        .ex-inner{max-width:1200px;margin:0 auto}
        .ex-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:48px}
        @media(max-width:768px){.ex-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:480px){.ex-grid{grid-template-columns:1fr;max-width:320px;margin:0 auto 48px}}
        .ex-chip{display:inline-flex;align-items:center;gap:10px;padding:14px 20px;border-radius:14px;font-size:14px;font-weight:600;transition:transform .25s,box-shadow .25s}
        .ex-chip:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,.1)}
        .ex-section-title{font-family:"Plus Jakarta Sans",sans-serif;font-weight:900;font-size:clamp(22px,2.5vw,28px);color:#2E0507;margin-bottom:24px;text-align:center}
        .ex-photos{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:48px}
        @media(max-width:768px){.ex-photos{grid-template-columns:repeat(2,1fr)}}
        .ex-photo{border-radius:16px;overflow:hidden;height:200px}
        .ex-photo img{width:100%;height:100%;object-fit:cover;transition:transform .5s}
        .ex-photo:hover img{transform:scale(1.08)}
      `}</style>

      <section id="expertise" className="ex-section" ref={ref}>
        <div className="ex-inner">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 48 }} className={`reveal${inView ? ' show' : ''}`}>
            <div className="pill-badge">
              <span className="pill-dot" />
              Expertise
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(30px,4vw,46px)', color: '#2E0507', marginBottom: 16 }}>
              Areas of <span style={{ color: '#D90429' }}>Expertise</span>
            </h2>
            <p style={{ color: '#6B2025', fontSize: 16, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              Deep specialization across HR domains and the industries we serve in Rawalpindi and beyond.
            </p>
          </div>

          {/* Expertise chips */}
          <div className="ex-section-title" style={{ fontSize: 16, textTransform: 'uppercase', letterSpacing: '.08em', color: '#D90429', fontWeight: 700 }}>
            <i className="fas fa-briefcase" style={{ marginRight: 8 }} /> HR Expertise
          </div>
          <div className={`ex-grid reveal${inView ? ' show' : ''}`}>
            {expertiseAreas.map((e, i) => (
              <div key={i} className="ex-chip" style={{
                background: `${e.color}0d`,
                border: `1px solid ${e.color}20`,
                color: e.color,
                transitionDelay: `${i * 0.06}s`,
              }}>
                <i className={e.icon} style={{ fontSize: 16, width: 20, textAlign: 'center' }} />
                {e.label}
              </div>
            ))}
          </div>

          {/* Industries chips */}
          <div className="ex-section-title" style={{ fontSize: 16, textTransform: 'uppercase', letterSpacing: '.08em', color: '#D90429', fontWeight: 700, marginTop: 48 }}>
            <i className="fas fa-building" style={{ marginRight: 8 }} /> Industries Served
          </div>
          <div className={`ex-grid reveal${inView ? ' show' : ''}`} style={{ marginBottom: 0 }}>
            {industries.map((e, i) => (
              <div key={i} className="ex-chip" style={{
                background: `${e.color}0d`,
                border: `1px solid ${e.color}20`,
                color: e.color,
                transitionDelay: `${i * 0.06}s`,
              }}>
                <i className={e.icon} style={{ fontSize: 16, width: 20, textAlign: 'center' }} />
                {e.label}
              </div>
            ))}
          </div>

          {/* Supporting photos */}
          <div className={`ex-photos reveal${inView ? ' show' : ''}`}>
            <div className="ex-photo">
              <img src="/images/meeting.jpg" alt="HR meeting" loading="lazy" onError={(e) => { e.target.src = '/images/fallback.svg'; }} />
            </div>
            <div className="ex-photo">
              <img src="/images/handshake.jpg" alt="Professional handshake" loading="lazy" onError={(e) => { e.target.src = '/images/fallback.svg'; }} />
            </div>
            <div className="ex-photo">
              <img src="/images/workspace.jpg" alt="Modern workspace" loading="lazy" onError={(e) => { e.target.src = '/images/fallback.svg'; }} />
            </div>
            <div className="ex-photo">
              <img src="/images/gallery-2.jpg" alt="Team collaboration" loading="lazy" onError={(e) => { e.target.src = '/images/fallback.svg'; }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}