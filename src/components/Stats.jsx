import { useEffect, useState } from 'react';

export default function Stats() {
  const [counts, setCounts] = useState({ served: 0, trained: 0, filled: 0, years: 0 });

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

  return (
    <>
      <style>{`
        .st-section { background:#006BA6; padding:56px 24px; }
        .st-inner { max-width:1000px; margin:0 auto; }
        .st-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:0; }
        @media(max-width:640px){ .st-grid{grid-template-columns:repeat(2,1fr);gap:24px} }
        .st-item { text-align:center; padding:0 16px; }
        .st-item:not(:last-child) { border-right:1px solid rgba(255,255,255,.15); }
        @media(max-width:640px){ .st-item:nth-child(2){border-right:none} .st-item:nth-child(3){border-right:1px solid rgba(255,255,255,.15)} }
        .st-num { font-family:"Plus Jakarta Sans",sans-serif;font-weight:900;font-size:clamp(28px,3.5vw,42px);color:#FFBC42;line-height:1;margin-bottom:6px; }
        .st-label { font-size:13px;font-weight:500;color:rgba(255,255,255,.85);letter-spacing:.02em; }
      `}</style>
      <div className="st-section">
        <div className="st-inner">
          <div className="st-grid">
            <div className="st-item">
              <div className="st-num">{counts.served}+</div>
              <div className="st-label">Organizations Served</div>
            </div>
            <div className="st-item">
              <div className="st-num">{counts.trained.toLocaleString()}+</div>
              <div className="st-label">Professionals Trained</div>
            </div>
            <div className="st-item">
              <div className="st-num">{counts.filled.toLocaleString()}+</div>
              <div className="st-label">Roles Filled</div>
            </div>
            <div className="st-item">
              <div className="st-num">{counts.years}+</div>
              <div className="st-label">Years of Expertise</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}