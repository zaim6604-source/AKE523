import { useState, useEffect, useRef } from 'react';

function Counter({ end, suffix = '', duration = 2200, label }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else { setCount(start); }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, visible]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-3xl sm:text-4xl font-black text-white">{count}{suffix}</span>
      <span className="block text-white/70 text-sm font-medium mt-1.5">{label}</span>
    </div>
  );
}

const stats = [
  { end: 25, suffix: '+', label: 'Years Practicing' },
  { end: 5, suffix: '', label: 'High Courts & Supreme Court' },
  { end: 1, suffix: '', label: 'Pioneer IHC Bar President 2011–12' },
  { end: 1, suffix: '', label: 'IDBA President 2006–07' },
];

export default function StatBand() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden py-14" ref={ref}
      style={{ background: 'var(--color-primary)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.04) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'var(--color-accent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'var(--color-accent)' }} />

      <div className="relative z-10 max-w-[1180px] mx-auto px-6">
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Counter key={s.label} end={s.end} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}