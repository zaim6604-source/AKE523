import { useEffect, useRef } from 'react';
import { Lightbulb, RefreshCw, TrendingUp, Users, Target, Building2 } from 'lucide-react';

const thinkServices = [
  { Icon: Building2, title: 'Organization Design & Restructuring', desc: 'Reimagining structures to align with strategy, improve efficiency, and drive growth.' },
  { Icon: Lightbulb, title: 'Innovation', desc: 'Fostering a culture of innovation with frameworks that turn ideas into measurable business results.' },
  { Icon: RefreshCw, title: 'Leading Change', desc: 'Change management expertise to navigate transitions smoothly and build organizational resilience.' },
  { Icon: TrendingUp, title: 'Leadership Development', desc: 'Programs that build capable, inspiring leaders at every level of your organization.' },
  { Icon: Users, title: 'Executive Coaching', desc: 'One-on-one coaching for senior leaders to unlock potential and drive peak performance.' },
  { Icon: Target, title: 'Culture & Transformation', desc: 'Holistic culture transformation to create workplaces where people and business thrive.' },
];

export default function ThinkHR() {
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
        .th-section { background:linear-gradient(160deg, #005580 0%, #006BA6 100%); padding:96px 24px; position:relative; overflow:hidden; }
        .th-inner { max-width:1200px; margin:0 auto; position:relative; z-index:2; }
        .th-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        @media(max-width:900px){ .th-grid{grid-template-columns:repeat(2,1fr)} }
        @media(max-width:560px){ .th-grid{grid-template-columns:1fr} }
        .th-card { background:rgba(255,255,255,.06); backdrop-filter:blur(8px); border:1px solid rgba(255,255,255,.10); border-radius:20px; padding:28px 24px; transition:transform .3s,background .3s,border-color .3s; }
        .th-card:hover { transform:translateY(-5px); background:rgba(255,255,255,.10); border-color:rgba(255,255,255,.20); }
        .th-card-icon { width:44px;height:44px;border-radius:12px;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;margin-bottom:16px; }
        .th-card-title { font-family:"Plus Jakarta Sans",sans-serif;font-weight:800;font-size:16px;color:#FFBC42;margin-bottom:8px; }
        .th-card-desc { font-size:14px;line-height:1.7;color:rgba(255,255,255,.85); }
        .th-circle { position:absolute;border-radius:50%;background:rgba(255,255,255,.02);pointer-events:none; }
      `}</style>

      <section id="thinkhr" className="th-section" ref={ref}>
        <div className="th-circle" style={{ width: 400, height: 400, top: '-150px', right: '-100px' }} />
        <div className="th-circle" style={{ width: 300, height: 300, bottom: '-80px', left: '-80px' }} />

        <div className="th-inner">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 48 }} className="reveal">
            <div className="pill-badge" style={{ margin: '0 auto 18px', background: 'rgba(255,255,255,.10)', borderColor: 'rgba(255,255,255,.20)', color: '#FFBC42' }}>
              <span className="pill-dot" style={{ background: '#FFBC42' }} />
              THINK HR
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(28px,3.5vw,42px)', color: '#fff', marginBottom: 14 }}>
              Strategic Consulting by <span style={{ color: '#FFBC42' }}>Think HR</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,.8)', fontSize: 15, maxWidth: 620, margin: '0 auto', lineHeight: 1.7 }}>
              Our dedicated consulting arm offers high-impact strategic advisory in organization design, innovation, change
              leadership, and executive development — helping leaders build future-ready organizations.
            </p>
          </div>

          {/* Cards */}
          <div className="th-grid">
            {thinkServices.map((s, i) => (
              <div key={i} className="th-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="th-card-icon">
                  <s.Icon size={20} color="#FFBC42" strokeWidth={2} />
                </div>
                <div className="th-card-title">{s.title}</div>
                <div className="th-card-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}