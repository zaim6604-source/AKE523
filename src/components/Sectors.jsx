import { useEffect, useRef } from 'react';
import { Building2, Briefcase, Cpu, Shirt, Heart, Smartphone, Zap, Users } from 'lucide-react';

const sectors = [
  { Icon: Building2, name: 'Banking & Finance', color: '#006BA6', bg: 'rgba(0,107,166,.12)' },
  { Icon: Cpu, name: 'IT & Tech', color: '#0496FF', bg: 'rgba(4,150,255,.12)' },
  { Icon: Briefcase, name: 'Manufacturing', color: '#FFBC42', bg: 'rgba(255,188,66,.15)' },
  { Icon: Shirt, name: 'FMCG & Retail', color: '#D81159', bg: 'rgba(216,17,89,.10)' },
  { Icon: Heart, name: 'Healthcare', color: '#00897B', bg: 'rgba(0,137,123,.12)' },
  { Icon: Smartphone, name: 'Telecom', color: '#006BA6', bg: 'rgba(0,107,166,.12)' },
  { Icon: Zap, name: 'Energy', color: '#FFBC42', bg: 'rgba(255,188,66,.15)' },
  { Icon: Users, name: 'Services', color: '#0496FF', bg: 'rgba(4,150,255,.12)' },
];

export default function Sectors() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .se-section { background:#fff; padding:80px 24px; }
        .se-inner { max-width:900px; margin:0 auto; }
        .se-grid { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; }
      `}</style>

      <section className="se-section" ref={ref}>
        <div className="se-inner">
          <div style={{ textAlign: 'center', marginBottom: 40 }} className="reveal">
            <div className="pill-badge" style={{ margin: '0 auto 18px' }}>
              <span className="pill-dot" />
              SECTORS WE SERVE
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(26px,3.2vw,38px)', color: '#06283D', marginBottom: 10 }}>
              Industries We <span style={{ color: '#006BA6' }}>Partner With</span>
            </h2>
            <p style={{ color: '#555', fontSize: 15, maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
              Deep industry expertise across sectors to deliver relevant, impactful HR solutions.
            </p>
          </div>

          <div className="se-grid">
            {sectors.map((s, i) => (
              <div key={i} className="sector-chip reveal" style={{ background: s.bg, color: s.color, transitionDelay: `${i * 0.06}s` }}>
                <s.Icon size={18} strokeWidth={2} />
                {s.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}