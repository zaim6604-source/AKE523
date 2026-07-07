import { useEffect, useRef } from 'react';

const steps = [
  { num: '01', icon: 'fa-pen-to-square', title: 'Contact & Brief', desc: 'Reach out via WhatsApp or the contact form. Share the details of your legal matter for an initial assessment.' },
  { num: '02', icon: 'fa-file-lines', title: 'Case Review & Assessment', desc: 'We review the facts, applicable law, and precedents to provide a clear assessment of your case and legal options.' },
  { num: '03', icon: 'fa-scale-balanced', title: 'Legal Strategy', desc: 'A tailored legal strategy is formulated, outlining the approach, timelines, and required documentation.' },
  { num: '04', icon: 'fa-building-columns', title: 'Representation & Filing', desc: 'We prepare and file the necessary pleadings, appear before the relevant court or forum, and pursue your matter diligently.' },
  { num: '05', icon: 'fa-circle-check', title: 'Resolution & Follow-up', desc: 'Post-resolution follow-up, including compliance monitoring, further appeals if needed, and ongoing counsel.' },
];

export default function Process() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" className="relative py-24 overflow-hidden"
      style={{ background: 'var(--color-primary)' }}
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.03) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'var(--color-accent)' }} />

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-14">
          <span className="section-pill"
            style={{ background: 'rgba(201,162,39,.12)', borderColor: 'rgba(201,162,39,.25)', color: 'var(--color-accent)' }}>
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white">
            Consultation Process
          </h2>
          <div className="gold-divider mt-4" />
          <p className="text-sm mt-4 max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,.55)' }}>
            A structured approach to understanding, preparing, and pursuing your legal matter.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {steps.map((s, i) => (
            <div key={i}
              className="reveal flex items-start gap-6 p-6 rounded-2xl"
              style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', transitionDelay: `${i * 0.1}s` }}>

              {/* Gold numeral */}
              <div className="flex-shrink-0 w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center"
                style={{ background: 'rgba(201,162,39,.12)', border: '2px solid rgba(201,162,39,.3)' }}>
                <span className="text-[0.45rem] font-bold uppercase tracking-wider" style={{ color: 'rgba(201,162,39,.7)' }}>
                  Step
                </span>
                <span className="text-xl font-black" style={{ color: 'var(--color-accent)' }}>
                  {s.num}
                </span>
              </div>

              <div className="flex-1 min-w-0 pt-2">
                <div className="flex items-center gap-3 mb-1">
                  <i className={`fas ${s.icon}`} style={{ color: 'var(--color-accent)' }} />
                  <h3 className="text-base font-bold text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,.6)' }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}