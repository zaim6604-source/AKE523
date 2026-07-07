import { useEffect, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';

const steps = [
  { num: '01', icon: 'fa-pen-to-square',  title: 'Apply Online',            desc: 'Fill out our application form with your details and desired country. We\'ll review and reach out promptly.' },
  { num: '02', icon: 'fa-phone',          title: 'Initial Consultation',    desc: 'Our counselors discuss your profile, experience, and preferences to identify the best opportunities.' },
  { num: '03', icon: 'fa-file-contract',  title: 'Documentation & Visa',    desc: 'We assist with compiling documents, attestation, medical checks, and the complete visa application.' },
  { num: '04', icon: 'fa-plane',          title: 'Job Matching & Offer',    desc: 'We connect you with verified employers, arrange interviews, and help you secure your job offer.' },
  { num: '05', icon: 'fa-circle-check',   title: 'Departure & Settlement',  desc: 'Pre-departure briefing, travel arrangements, and post-arrival support to ensure a smooth transition.' },
];

const stepColors = ['#D7263D', '#F46197', '#7768AE', '#02C39A', '#B3001B'];

export default function Process() {
  const ref = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Calculate positions for radial wheel (5 steps around center)
  const radius = 33;
  const centerX = 50;
  const centerY = 50;
  const positions = steps.map((_, i) => {
    const angle = (i * 72 - 90) * (Math.PI / 180);
    return {
      left: `${centerX + radius * Math.cos(angle)}%`,
      top: `${centerY + radius * Math.sin(angle)}%`,
    };
  });

  return (
    <section id="process" className="py-24 relative overflow-hidden" ref={ref}
      style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)' }}>
      {/* Pattern */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.05) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal">
          <SectionHeader tag="How It Works" title="Your Journey With Us"
            sub="A simple, step-by-step process from application to a successful overseas career." light />
        </div>

        {/* Radial wheel - Desktop */}
        <div className="reveal hidden lg:block relative" style={{ height: 440 }}>
          <div className="radial-wheel absolute inset-0">
            {/* Central hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full flex flex-col items-center justify-center text-white shadow-2xl"
              style={{ background: 'rgba(255,255,255,.12)', backdropFilter: 'blur(12px)', border: '2px solid rgba(255,255,255,.2)' }}>
              <i className="fas fa-route text-2xl mb-1" />
              <span className="text-[0.6rem] font-bold uppercase tracking-wider">5 Steps</span>
            </div>

            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} viewBox="0 0 100 100">
              {steps.map((_, i) => {
                const angle = (i * 72 - 90) * (Math.PI / 180);
                const x2 = 50 + radius * Math.cos(angle);
                const y2 = 50 + radius * Math.sin(angle);
                return (
                  <line key={i} x1={50} y1={50} x2={x2} y2={y2}
                    stroke="rgba(255,255,255,.12)" strokeWidth="1" strokeDasharray="4 4" />
                );
              })}
            </svg>

            {/* Step nodes */}
            {steps.map((s, i) => (
              <div key={i}
                className="radial-step absolute"
                style={{ left: positions[i].left, top: positions[i].top, transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}>
                <div className="step-num mx-auto" style={{ background: stepColors[i] }}>
                  {s.num}
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-bold text-white mb-1">{s.title}</h3>
                  {hoveredIndex === i && (
                    <p className="text-[0.65rem] text-white/70 leading-relaxed animate-fadeIn max-w-[140px] mx-auto">{s.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: stacked layout */}
        <div className="lg:hidden flex flex-col gap-4">
          {steps.map((s, i) => (
            <div key={i} className="reveal flex items-center gap-4 p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.1)' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{ background: stepColors[i] }}>
                {s.num}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <i className={`fas ${s.icon} text-white/80 text-sm`} />
                  <h3 className="text-sm font-bold text-white">{s.title}</h3>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}