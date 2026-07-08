import { useEffect, useRef, useState } from 'react';
import FadeUp from './FadeUp';

function Counter({ end, suffix = '', label, icon }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center text-white">
      <i className={`fas ${icon} text-2xl sm:text-3xl mb-2 opacity-80`} />
      <div className="counter-value">
        {count}{suffix}
      </div>
      <div className="text-sm sm:text-base font-semibold opacity-90 mt-1">{label}</div>
    </div>
  );
}

export default function StatBand() {
  const stats = [
    { end: 500, suffix: '+', label: 'Workers Placed', icon: 'fa-users' },
    { end: 9, label: 'Countries', icon: 'fa-flag' },
    { end: 12, suffix: '+', label: 'Years Experience', icon: 'fa-calendar' },
    { end: 98, suffix: '%', label: 'Satisfaction', icon: 'fa-star' },
  ];

  return (
    <section className="bg-primary py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s) => (
              <Counter key={s.label} {...s} />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}