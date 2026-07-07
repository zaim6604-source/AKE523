import useInView from '../hooks/useInView';
import { BarChart3, Users2, Layers, TrendingUp } from 'lucide-react';

const features = [
  {
    Icon: BarChart3,
    title: 'Research-Driven',
    desc: 'Every solution is grounded in data, research, and proven methodologies — not guesswork. We measure what matters.',
    color: '#006BA6',
  },
  {
    Icon: Users2,
    title: 'Experienced Consultants',
    desc: 'Our team brings decades of combined HR experience across industries, sectors, and geographies.',
    color: '#0496FF',
  },
  {
    Icon: Layers,
    title: 'End-to-End HR',
    desc: 'From outsourcing to strategic consulting, we cover the full HR spectrum — so you have one trusted partner.',
    color: '#FFBC42',
  },
  {
    Icon: TrendingUp,
    title: 'Measurable Impact',
    desc: 'We don\'t just advise — we deliver. Every engagement is tied to clear KPIs, outcomes, and business results.',
    color: '#D81159',
  },
];

export default function WhyUs() {
  const [ref, inView] = useInView();

  return (
    <>
      <style>{`
        .wu-section { background:#E6F3FB; padding:96px 24px; }
        .wu-inner { max-width:1200px; margin:0 auto; }
        .wu-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; }
        @media(max-width:1024px){ .wu-grid{grid-template-columns:repeat(2,1fr)} }
        @media(max-width:560px){ .wu-grid{grid-template-columns:1fr; max-width:400px; margin:0 auto} }
        .wu-card { background:#fff; border-radius:20px; padding:32px 24px; border:1px solid rgba(0,107,166,.08); transition:transform .3s,box-shadow .3s,border-color .3s; }
        .wu-card:hover { transform:translateY(-6px); border-color:var(--wc,rgba(0,107,166,.2)); box-shadow:0 20px 48px rgba(0,107,166,.06); }
        .wu-icon { width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:20px; }
        .wu-title { font-family:"Plus Jakarta Sans",sans-serif;font-weight:800;font-size:17px;color:#06283D;margin-bottom:10px; }
        .wu-desc { font-size:14px;line-height:1.7;color:#555; }
      `}</style>

      <section className="wu-section" ref={ref}>
        <div className="wu-inner">
          <div style={{ textAlign: 'center', marginBottom: 56 }} className={`reveal${inView ? ' show' : ''}`}>
            <div className="pill-badge" style={{ margin: '0 auto 18px' }}>
              <span className="pill-dot" />
              WHY HR-PRO
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(30px,4vw,46px)', color: '#06283D', marginBottom: 16 }}>
              Why Choose <span style={{ color: '#006BA6' }}>Us</span>
            </h2>
            <p style={{ color: '#555', fontSize: 16, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              What sets HR-Pro apart as your HR transformation partner in Karachi.
            </p>
          </div>

          <div className="wu-grid">
            {features.map((f, i) => (
              <div
                key={i}
                className={`wu-card reveal${inView ? ' show' : ''}`}
                style={{ '--wc': f.color, transitionDelay: `${i * 0.1}s` }}
              >
                <div className="wu-icon" style={{ background: `${f.color}0d`, color: f.color }}>
                  <f.Icon size={24} strokeWidth={2} />
                </div>
                <div className="wu-title">{f.title}</div>
                <div className="wu-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}