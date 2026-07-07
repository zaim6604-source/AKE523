import { useEffect, useRef } from 'react';

const areas = [
  { icon: 'fa-scale-balanced', title: 'Constitutional & Public Interest Litigation', desc: 'Expert representation in constitutional matters and public interest cases before the Supreme Court and High Courts.' },
  { icon: 'fa-file-lines', title: 'Civil Litigation', desc: 'Comprehensive civil litigation services including property disputes, contracts, torts, and recovery proceedings.' },
  { icon: 'fa-building', title: 'Corporate & Commercial Law', desc: 'Legal counsel for corporate entities on commercial transactions, contracts, and regulatory compliance.' },
  { icon: 'fa-landmark', title: 'Banking & Finance', desc: 'Representation in banking disputes, financial regulatory matters, and recovery proceedings.' },
  { icon: 'fa-gavel', title: 'Regulatory & Administrative Matters', desc: 'Appearances before regulatory bodies, tribunals, and quasi-judicial forums on administrative issues.' },
  { icon: 'fa-tower-broadcast', title: 'Media & Telecom Law', desc: 'Specialized counsel on media regulation, telecommunications law, and broadcasting compliance.' },
  { icon: 'fa-house-chimney', title: 'Property & Land Disputes', desc: 'Resolution of property disputes, land acquisition matters, and title verification.' },
  { icon: 'fa-building-columns', title: 'Appeals & High Court Practice', desc: 'Strategic appellate practice before High Courts and the Supreme Court of Pakistan.' },
];

export default function PracticeAreas() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="practice-areas" className="py-24 relative overflow-hidden"
      style={{ background: 'var(--color-background)' }}
      ref={ref}
    >
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-14">
          <span className="section-pill">PRACTICE AREAS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-[#0B2545]">
            Areas of Practice
          </h2>
          <div className="gold-divider mt-4" />
          <p className="text-sm mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Comprehensive legal services spanning constitutional, civil, corporate, and regulatory practice areas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {areas.map((a, i) => (
            <div key={i}
              className="reveal navy-card rounded-2xl p-7"
              style={{ transitionDelay: `${(i % 4) * 0.06}s` }}>
              <div className="card-icon w-12 h-12 rounded-xl flex items-center justify-center text-lg mb-4"
                style={{ background: 'rgba(201, 162, 39, 0.1)' }}>
                <i className={`fas ${a.icon}`} />
              </div>
              <h3 className="text-sm font-bold text-white mb-2 leading-snug"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                {a.title}
              </h3>
              <p className="text-xs leading-[1.7]" style={{ color: 'rgba(255,255,255,.6)' }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Compact chip grid */}
        <div className="reveal mt-10">
          <div className="flex flex-wrap justify-center gap-2.5">
            {areas.map(a => (
              <span key={a.title}
                className="text-[0.65rem] font-semibold px-3.5 py-1.5 rounded-full"
                style={{ background: 'rgba(201, 162, 39, 0.08)', color: 'var(--color-accent)' }}>
                {a.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}