import { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-white font-poppins">
      {count}{suffix}
    </span>
  );
}

const STATS = [
  { icon: 'fa-users', end: 5000, suffix: '+', label: 'Workers Placed' },
  { icon: 'fa-globe', end: 9, suffix: '+', label: 'Countries' },
  { icon: 'fa-building', end: 200, suffix: '+', label: 'Employer Partners' },
  { icon: 'fa-star', end: 98, suffix: '%', label: 'Success Rate' },
];

export default function StatBand() {
  return (
    <section className="bg-[#1C1C1C] py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {STATS.map((stat, i) => (
            <div key={i} className="text-white flex flex-col items-center">
              <div className="tachymeter-ring mb-3">
                <i className={`fa-solid ${stat.icon} text-2xl md:text-3xl text-[#FFD500]`}></i>
              </div>
              <div className="mb-1">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base font-medium text-white/70 font-inter">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}