import { useEffect, useRef } from 'react';
import { MapPin, Award, Lightbulb, Target } from 'lucide-react';

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ab-section { background:#fff; padding:96px 24px; }
        .ab-inner { max-width:1200px; margin:0 auto; }
        .ab-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
        @media(max-width:900px){ .ab-grid{grid-template-columns:1fr; gap:48px} }
        .ab-img-wrap { position:relative; }
        .ab-img { width:100%; height:480px; object-fit:cover; border-radius:24px; display:block; border:1px solid rgba(0,107,166,.10); box-shadow:0 4px 20px rgba(0,0,0,.04); }
        .ab-img-badge { position:absolute; background:#fff; border:1px solid rgba(0,107,166,.12); border-radius:16px; padding:14px 20px; box-shadow:0 8px 32px rgba(0,0,0,.06); }
        .ab-badge-n { font-weight:900; font-size:24px; color:#006BA6; line-height:1; font-family:"Plus Jakarta Sans",sans-serif; }
        .ab-badge-l { font-size:12px; color:#555; font-weight:600; margin-top:3px; }
        .ab-title { font-family:"Plus Jakarta Sans",sans-serif; font-weight:900; font-size:clamp(26px,3.2vw,38px); color:#06283D; margin-bottom:16px; }
        .ab-body  { font-size:15px; line-height:1.8; color:#555; margin-bottom:14px; }
        .ab-trust { display:flex; gap:12px; flex-wrap:wrap; margin-top:28px; }
        .ab-trust-chip { display:flex; align-items:center; gap:8px; padding:8px 16px; border-radius:99px; background:rgba(0,107,166,.06); border:1px solid rgba(0,107,166,.12); font-size:13px; font-weight:600; color:#006BA6; }
      `}</style>

      <section id="about" className="ab-section" ref={ref}>
        <div className="ab-inner">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
            <div className="pill-badge" style={{ margin: '0 auto 18px' }}>
              <span className="pill-dot" />
              WHO WE ARE
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(30px,4vw,46px)', color: '#06283D', marginBottom: 16 }}>
              About <span style={{ color: '#006BA6' }}>HR-Pro Consulting</span>
            </h2>
            <p style={{ color: '#555', fontSize: 16, maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
              Karachi-based HR transformation partner delivering research-driven, state-of-the-art HR solutions for businesses and people.
            </p>
          </div>

          {/* Two column */}
          <div className="ab-grid">
            {/* Image */}
            <div className="ab-img-wrap reveal-l">
              <div className="img-zoom-wrap" style={{ borderRadius: 24 }}>
                <img
                  src="/images/about.jpg"
                  alt="HR-Pro Consulting office"
                  className="ab-img"
                  onError={(e) => { e.target.src = '/images/workshop.jpg'; }}
                />
              </div>
              <div className="ab-img-badge float" style={{ top: -20, right: -20 }}>
                <div className="ab-badge-n">150+</div>
                <div className="ab-badge-l">Organizations</div>
              </div>
              <div className="ab-img-badge float" style={{ bottom: -20, left: -20, animationDelay: '2s' }}>
                <div className="ab-badge-n">15+</div>
                <div className="ab-badge-l">Years Expertise</div>
              </div>
            </div>

            {/* Text */}
            <div className="reveal-r">
              <h3 className="ab-title">
                Research-Driven HR Solutions<br />
                <span style={{ color: '#006BA6' }}>for Business & People</span>
              </h3>
              <p className="ab-body">
                HR-Pro Consulting & Services delivers innovative, state-of-the-art HR solutions designed to transform organizations.
                We combine research-based insights with experienced resources and varied strategies to solve complex business
                and people challenges.
              </p>
              <p className="ab-body">
                Headquartered in Landhi, Karachi, our team brings deep expertise across staff & payroll outsourcing,
                recruitment & executive search, blended learning, and strategic HR consulting through our dedicated
                consulting arm, <strong style={{ color: '#006BA6' }}>Think HR</strong>.
              </p>

              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 18px', background: 'rgba(0,107,166,.04)', border: '1px solid rgba(0,107,166,.10)', borderRadius: 14, marginTop: 20 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(0,107,166,.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={18} color="#006BA6" />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: '#999', marginBottom: 3 }}>Office Address</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#555', lineHeight: 1.5 }}>40/12, Area 1-D Rd, Sector 37-B<br />Landhi Town, Karachi, Sindh</div>
                </div>
              </div>

              {/* Trust chips */}
              <div className="ab-trust">
                <div className="ab-trust-chip"><Award size={14} /> Research-Based</div>
                <div className="ab-trust-chip"><Target size={14} /> Experienced Resources</div>
                <div className="ab-trust-chip"><Lightbulb size={14} /> Tailored Strategies</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}