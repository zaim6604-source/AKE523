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
    <span ref={ref} className="counter-value font-poppins font-extrabold text-3xl md:text-4xl lg:text-5xl text-white">
      {count}{suffix}
    </span>
  );
}

function TachymeterRing({ color = '#FFD500', delay = 0 }) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
      <circle
        cx="50" cy="50" r="45"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="283"
        strokeDashoffset="283"
        strokeLinecap="round"
        opacity="0.3"
        style={{
          animation: `dash 2s ease-out ${delay}s forwards`,
        }}
      />
    </svg>
  );
}

const STATS = [
  { icon: 'fa-users', end: 5000, suffix: '+', label: 'Workers Placed', ringColor: '#FFD500' },
  { icon: 'fa-globe', end: 9, suffix: '+', label: 'Countries', ringColor: '#FF4D4D' },
  { icon: 'fa-certificate', end: 100, suffix: '%', label: 'Govt. Licensed', ringColor: '#FFD500' },
  { icon: 'fa-star', end: 0, suffix: '', label: 'Blue Area, Islamabad', always: 'Trusted', ringColor: '#FF4D4D' },
];

export default function StatBand() {
  return (
    <section className="bg-[#1C1C1C] py-10 md:py-14 relative overflow-hidden">
      {/* Tachymeter grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #FFD500 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {STATS.map((stat, i) => (
            <div key={i} className="text-white relative">
              <div className="relative inline-flex items-center justify-center mb-2">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#FFD500]/20 flex items-center justify-center relative">
                  <TachymeterRing color={stat.ringColor} delay={i * 0.3} />
                  <i className={`fa-solid ${stat.icon} text-xl md:text-2xl text-[#FFD500]`}></i>
                </div>
              </div>
              <div className="mb-1">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base font-medium text-[#F5F5F5]/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}