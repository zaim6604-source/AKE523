import { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';

const stats = [
  { icon: 'fa-users', value: 5000, suffix: '+', label: 'Workers Placed' },
  { icon: 'fa-globe-asia', value: 9, suffix: '+', label: 'Countries' },
  { icon: 'fa-certificate', value: 100, suffix: '%', label: 'Govt. Licensed' },
  { icon: 'fa-calendar-check', value: 12, suffix: '+', label: 'Years Experience' },
];

function AnimatedCounter({ value: end, suffix, icon, label, inView, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.floor(end / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(current);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div className={`text-center fade-up ${inView ? 'in-view' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <i className={`fas ${icon} text-3xl md:text-4xl text-accent mb-3`} />
      <div className="text-3xl md:text-4xl font-extrabold text-white">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm md:text-base text-white/80 font-medium mt-1">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="bg-primary py-14 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <AnimatedCounter key={s.label} {...s} inView={inView} delay={i * 150} />
        ))}
      </div>
    </div>
  );
}
