import { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ end, suffix = '', label }) {
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
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-heading font-extrabold text-white">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-white/80 mt-1 font-medium">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-[#D7263D] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <AnimatedCounter end={500} suffix="+" label="Trusted Clients" />
          <AnimatedCounter end={1200} suffix="+" label="Skilled Candidates" />
          <AnimatedCounter end={8} suffix="+" label="Years of Service" />
          <AnimatedCounter end={98} suffix="%" label="Satisfaction" />
        </div>
      </div>
    </section>
  );
}
