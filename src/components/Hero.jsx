import { useEffect, useRef, useState } from 'react';
import { Phone, ArrowRight, TrendingUp, Users, Award, Building2 } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const [counts, setCounts] = useState({ served: 0, trained: 0, filled: 0, years: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.querySelectorAll('.h-rev').forEach((el, i) => {
        setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, i * 120);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const targets = { served: 150, trained: 5000, filled: 2000, years: 15 };
    const duration = 2000;
    const steps = 40;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts({
        served: Math.min(Math.floor((targets.served / steps) * step), targets.served),
        trained: Math.min(Math.floor((targets.trained / steps) * step), targets.trained),
        filled: Math.min(Math.floor((targets.filled / steps) * step), targets.filled),
        years: Math.min(Math.floor((targets.years / steps) * step), targets.years),
      });
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  const wa = () => window.open('https://wa.me/923121124692', '_blank');

  return (
    <>
      <style>{`
        .h-rev { opacity:0; transform:translateY(28px); transition:opacity .7s ease, transform .7s ease; }
        .h-float { position:absolute; display:flex; align-items:center; gap:10px; background:rgba(255,255,255,.92); backdrop-filter:blur(12px); border:1px solid rgba(0,107,166,.15); padding:12px 18px; border-radius:14px; box-shadow:0 4px 20px rgba(0,0,0,.05); animation:floatY 4s ease-in-out infinite; }
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .h-ring { position:absolute; border-radius:50%; border:1px solid rgba(0,107,166,.08); pointer-events:none; }
        .h-ring-1 { width:500px; height:500px; top:50%; left:50%; margin-left:-250px; margin-top:-250px; animation:spinSlow 25s linear infinite; }
        .h-ring-2 { width:750px; height:750px; top:50%; left:50%; margin-left:-375px; margin-top:-375px; animation:spinSlow 35s linear infinite reverse; }
        @keyframes spinSlow { to{transform:rotate(360deg)} }
        @media(max-width:900px){ .h-float{display:none!important} }
      `}</style>

      <section id="home" ref={ref} style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', padding: '120px 24px 60px',
        background: 'linear-gradient(160deg, #E6F3FB 0%, #f0f8ff 50%, #E6F3FB 100%)',
      }}>
        {/* Decorative rings */}
        <div className="h-ring h-ring-1" />
        <div className="h-ring h-ring-2" />

        {/* Floating stat chips */}
        <div className="h-float" style={{ top: '22%', left: '4%', animationDelay: '0s' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(0,107,166,.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#006BA6' }}>
            <Building2 size={18} />
          </div>
          <div><div style={{ fontSize: 13, fontWeight: 700, color: '#06283D' }}>150+ Clients</div><div style={{ fontSize: 11, opacity: .55, color: '#555' }}>Trusted Partner</div></div>
        </div>
        <div className="h-float" style={{ top: '20%', right: '4%', animationDelay: '1.2s' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(4,150,255,.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0496FF' }}>
            <TrendingUp size={18} />
          </div>
          <div><div style={{ fontSize: 13, fontWeight: 700, color: '#06283D' }}>End-to-End HR</div><div style={{ fontSize: 11, opacity: .55, color: '#555' }}>Full Service</div></div>
        </div>
        <div className="h-float" style={{ bottom: '28%', left: '3%', animationDelay: '2s' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,188,66,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e6a000' }}>
            <Award size={18} />
          </div>
          <div><div style={{ fontSize: 13, fontWeight: 700, color: '#06283D' }}>Research-Based</div><div style={{ fontSize: 11, opacity: .55, color: '#555' }}>Insights Driven</div></div>
        </div>
        <div className="h-float" style={{ bottom: '30%', right: '3%', animationDelay: '0.7s' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(216,17,89,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D81159' }}>
            <Users size={18} />
          </div>
          <div><div style={{ fontSize: 13, fontWeight: 700, color: '#06283D' }}>5,000+ Trained</div><div style={{ fontSize: 11, opacity: .55, color: '#555' }}>Professionals</div></div>
        </div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1200, width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          {/* Left content */}
          <div>
            <div className="h-rev" style={{ marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(0,107,166,.10)', border: '1px solid rgba(0,107,166,.20)', color: '#006BA6', fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', padding: '7px 18px', borderRadius: 999 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#006BA6' }} />
              Transform Your Organization
            </div>

            <h1 className="h-rev" style={{
              fontWeight: 900, fontSize: 'clamp(34px, 5vw, 56px)',
              color: '#06283D', lineHeight: 1.08, marginBottom: 16,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transitionDelay: '.08s',
            }}>
              State-of-the-Art HR Solutions<br />
              <span style={{ color: '#006BA6' }}>That Transform Organizations</span>
            </h1>

            <p className="h-rev" style={{
              fontSize: 'clamp(15px, 1.6vw, 18px)', color: '#555',
              lineHeight: 1.7, maxWidth: 560, marginBottom: 12,
              transitionDelay: '.16s',
            }}>
              HR-Pro blends research-driven insight with experienced resources — outsourcing, executive search,
              learning, and strategic HR consulting under one roof.
            </p>

            <div className="h-rev" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32, transitionDelay: '.24s' }}>
              <button className="btn-cta" onClick={wa} style={{ fontSize: 15, padding: '15px 32px' }}>
                <Phone size={16} /> Get Started
              </button>
              <button className="btn-outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ fontSize: 15, padding: '14px 32px' }}>
                Explore Services <ArrowRight size={16} />
              </button>
            </div>

            {/* Amber accent line */}
            <div className="h-rev" style={{ marginTop: 40, width: 80, height: 3, borderRadius: 99, background: '#FFBC42', transitionDelay: '.32s' }} />
          </div>

          {/* Right image */}
          <div className="h-rev" style={{ position: 'relative', transitionDelay: '.12s' }}>
            <div className="img-zoom-wrap" style={{ borderRadius: 24, boxShadow: '0 8px 40px rgba(0,107,166,.15)' }}>
              <img
                src="/images/hero-office.jpg"
                alt="HR-Pro Consulting team"
                style={{ width: '100%', height: 480, objectFit: 'cover', borderRadius: 24, display: 'block' }}
                onError={(e) => { e.target.src = '/images/hero-team.jpg'; }}
              />
            </div>
            {/* Floating stat chips on image */}
            <div className="float" style={{ position: 'absolute', top: -16, right: -16, background: '#fff', borderRadius: 16, padding: '14px 20px', boxShadow: '0 8px 32px rgba(0,0,0,.08)', border: '1px solid rgba(0,107,166,.10)' }}>
              <div style={{ fontWeight: 900, fontSize: 24, color: '#006BA6', lineHeight: 1, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{counts.years}+</div>
              <div style={{ fontSize: 11, color: '#555', fontWeight: 600, marginTop: 2 }}>Years of Expertise</div>
            </div>
            <div className="float" style={{ position: 'absolute', bottom: -16, left: -16, background: '#fff', borderRadius: 16, padding: '14px 20px', boxShadow: '0 8px 32px rgba(0,0,0,.08)', border: '1px solid rgba(0,107,166,.10)', animationDelay: '2s' }}>
              <div style={{ fontWeight: 900, fontSize: 24, color: '#D81159', lineHeight: 1, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{counts.filled}+</div>
              <div style={{ fontSize: 11, color: '#555', fontWeight: 600, marginTop: 2 }}>Roles Filled</div>
            </div>
          </div>
        </div>

        {/* WhatsApp button */}
        <div className="h-rev" style={{ maxWidth: 1200, width: '100%', marginTop: 48, transitionDelay: '.4s' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
            background: 'rgba(0,107,166,.06)', borderRadius: 20,
            border: '1px solid rgba(0,107,166,.08)',
            backdropFilter: 'blur(8px)',
          }}>
            {[
              { n: counts.served + '+', l: 'Organizations Served', c: '#006BA6' },
              { n: counts.trained.toLocaleString() + '+', l: 'Professionals Trained', c: '#0496FF' },
              { n: counts.filled + '+', l: 'Roles Filled', c: '#FFBC42' },
              { n: counts.years + '+', l: 'Years of Expertise', c: '#D81159' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '20px 16px', textAlign: 'center',
                borderRight: i < 3 ? '1px solid rgba(0,107,166,.08)' : 'none',
              }}>
                <div className="counter-num" style={{ color: s.c }}>{s.n}</div>
                <div style={{ fontSize: 12, fontWeight: 500, color: '#555', marginTop: 3 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}