import { useEffect, useRef } from 'react';

const reasons = [
  { icon: 'fa-scale-balanced', title: 'Supreme Court Standing', desc: 'Direct access to advocacy at the highest judicial forum in Pakistan.' },
  { icon: 'fa-calendar', title: '25+ Years\' Experience', desc: 'Over two decades of legal practice across diverse areas of law and jurisdictions.' },
  { icon: 'fa-globe', title: 'National & Multinational Clients', desc: 'Trusted legal counsel for individuals, corporations, and institutions nationwide.' },
  { icon: 'fa-handshake', title: 'Trusted Counsel', desc: 'A reputation built on integrity, diligence, and successful outcomes for clients.' },
  { icon: 'fa-gavel', title: 'Bar Leadership', desc: 'Former President of IDBA and Pioneer IHC Bar Association with international Bar experience.' },
  { icon: 'fa-file-shield', title: 'Confidential & Discreet', desc: 'All client communications and case details handled with the utmost confidentiality.' },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="why-us" className="py-24 relative overflow-hidden" style={{ background: 'var(--color-background)' }} ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-14">
          <span className="section-pill">WHY US</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-[#0B2545]">
            Why Choose Our Chambers
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={i}
              className="reveal white-card rounded-2xl p-7"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg mb-4"
                style={{ background: 'rgba(201, 162, 39, 0.1)', color: 'var(--color-accent)' }}>
                <i className={`fas ${r.icon}`} />
              </div>
              <h3 className="text-base font-bold text-[#0B2545] mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}