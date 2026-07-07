import { useEffect, useRef } from 'react';
import { Users, DollarSign, Search, GraduationCap, Building2, GitBranch, Award, Shield } from 'lucide-react';

const services = [
  { Icon: Users, title: 'Staff Outsourcing', desc: 'Flexible, vetted staffing solutions to meet your operational needs with speed and quality.', color: '#006BA6' },
  { Icon: DollarSign, title: 'Payroll Outsourcing', desc: 'End-to-end payroll management — accurate, compliant, and hassle-free for your business.', color: '#0496FF' },
  { Icon: Search, title: 'Recruitment & Executive Search', desc: 'Talent acquisition from entry-level to C-suite, leveraging our extensive network and research.', color: '#FFBC42' },
  { Icon: GraduationCap, title: 'Blended Learning & Training', desc: 'Innovative learning programs combining digital and in-person modalities for maximum impact.', color: '#D81159' },
  { Icon: Building2, title: 'HR Management Solutions', desc: 'Comprehensive HR systems, processes, and frameworks tailored to your organization.', color: '#00897B' },
  { Icon: GitBranch, title: 'Organization Development', desc: 'Strategic OD interventions to enhance effectiveness, culture, and performance.', color: '#006BA6' },
  { Icon: Award, title: 'Talent Assessment', desc: 'Psychometric testing, skills assessment, and competency mapping for informed decisions.', color: '#0496FF' },
  { Icon: Shield, title: 'HR Advisory & Compliance', desc: 'Expert guidance on labor laws, policy development, and regulatory compliance.', color: '#FFBC42' },
];

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const wa = () => window.open('https://wa.me/923121124692', '_blank');

  return (
    <>
      <style>{`
        .sv-section { background:#E6F3FB; padding:96px 24px; }
        .sv-inner { max-width:1200px; margin:0 auto; }
        .sv-masonry { columns: 2; column-gap: 20px; }
        @media(max-width:768px){ .sv-masonry{columns:1} }
        .sv-card { break-inside:avoid; margin-bottom:20px; border-radius:20px; padding:32px 28px; transition:transform .35s,box-shadow .35s; cursor:default; display:inline-block; width:100%; }
        .sv-card:hover { transform:translateY(-6px); box-shadow:0 16px 48px rgba(0,0,0,.10); }
        .sv-card-icon { width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:16px; }
        .sv-card-title { font-family:"Plus Jakarta Sans",sans-serif;font-weight:800;font-size:17px;margin-bottom:8px; }
        .sv-card-desc { font-size:14px;line-height:1.7; }
      `}</style>

      <section id="services" className="sv-section" ref={ref}>
        <div className="sv-inner">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
            <div className="pill-badge" style={{ margin: '0 auto 18px' }}>
              <span className="pill-dot" />
              OUR SERVICES
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(30px,4vw,46px)', color: '#06283D', marginBottom: 16 }}>
              Comprehensive <span style={{ color: '#006BA6' }}>HR Solutions</span>
            </h2>
            <p style={{ color: '#555', fontSize: 16, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              From outsourcing to executive search and strategic consulting — everything you need under one roof.
            </p>
          </div>

          {/* Masonry grid */}
          <div className="sv-masonry">
            {services.map((s, i) => (
              <div
                key={i}
                className="sv-card reveal"
                style={{
                  background: `${s.color}${i % 3 === 0 ? '15' : i % 3 === 1 ? '0D' : '0A'}`,
                  border: `1px solid ${s.color}20`,
                  transitionDelay: `${(i % 4) * 0.08}s`,
                }}
              >
                <div className="sv-card-icon" style={{ background: `${s.color}18` }}>
                  <s.Icon size={22} color={s.color} strokeWidth={2} />
                </div>
                <div className="sv-card-title" style={{ color: s.color }}>{s.title}</div>
                <div className="sv-card-desc" style={{ color: '#555' }}>{s.desc}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal" style={{ textAlign: 'center', marginTop: 48 }}>
            <button className="btn-cta" onClick={wa} style={{ fontSize: 15, padding: '15px 32px' }}>
              Enquire About Our Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}