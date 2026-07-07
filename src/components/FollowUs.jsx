import useInView from '../hooks/useInView';

const socials = [
  { icon: 'fab fa-facebook-f', label: 'Facebook', url: 'https://www.facebook.com/Bluerealeye', handle: '@Bluerealeye', color: '#1877F2' },
  { icon: 'fab fa-instagram', label: 'Instagram', url: 'https://www.instagram.com/bluerealeye', handle: '@bluerealeye', color: '#E4405F' },
  { icon: 'fab fa-youtube', label: 'YouTube', url: 'https://www.youtube.com/@bluerealeyeinfo', handle: '@bluerealeyeinfo', color: '#FF0000' },
  { icon: 'fab fa-tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@Bluerealeyepak', handle: '@Bluerealeyepak', color: '#000000' },
];

export default function FollowUs() {
  const [ref, inView] = useInView();

  return (
    <>
      <style>{`
        .fu-section{background:#fff;padding:80px 24px}
        .fu-inner{max-width:800px;margin:0 auto;text-align:center}
        .fu-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:40px}
        @media(max-width:640px){.fu-grid{grid-template-columns:repeat(2,1fr);max-width:400px;margin:40px auto 0}}
        .fu-card{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:32px 20px;border-radius:20px;border:1px solid rgba(217,4,41,.06);background:#FFF0F0;text-decoration:none;transition:transform .3s,box-shadow .3s}
        .fu-card:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(0,0,0,.08)}
        .fu-icon{width:56px;height:56px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;transition:transform .3s}
        .fu-card:hover .fu-icon{transform:scale(1.1)}
        .fu-handle{font-weight:700;font-size:15px;color:#2E0507}
        .fu-label{font-size:12px;color:#6B2025;font-weight:500}
      `}</style>

      <section className="fu-section" ref={ref}>
        <div className="fu-inner">
          <div className={`reveal${inView ? ' show' : ''}`}>
            <div className="pill-badge">
              <span className="pill-dot" />
              Stay Connected
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(28px,3.5vw,42px)', color: '#2E0507', marginBottom: 14 }}>
              Follow <span style={{ color: '#D90429' }}>Us</span>
            </h2>
            <p style={{ color: '#6B2025', fontSize: 15, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Connect with Blue Real Eye on social media for HR tips, updates, and insights.
            </p>
          </div>

          <div className="fu-grid">
            {socials.map((s, i) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`fu-card reveal${inView ? ' show' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="fu-icon" style={{ background: s.color }}>
                  <i className={s.icon} />
                </div>
                <div className="fu-handle">{s.handle}</div>
                <div className="fu-label">{s.label}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}