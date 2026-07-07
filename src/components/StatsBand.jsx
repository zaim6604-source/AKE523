import { useState, useEffect, useRef } from "react";

function AnimatedCounter({ end, suffix, label, icon, delay }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setTimeout(() => {
            const duration = 2000;
            const steps = 30;
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
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
        <i className={`fas ${icon} text-secondary mr-2 text-xl`}></i>
        {count}
        {suffix}
      </div>
      <p className="text-white/75 text-sm sm:text-base mt-1 font-medium">{label}</p>
    </div>
  );
}

export default function StatsBand() {
  return (
    <section className="bg-primary py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={3000} suffix="+" label="Workers Placed" icon="fa-users" delay={0} />
          <AnimatedCounter end={9} suffix="+" label="Countries" icon="fa-globe" delay={200} />
          <AnimatedCounter end={12} suffix="+" label="Years Experience" icon="fa-calendar" delay={400} />
          <AnimatedCounter end={1} suffix="" label="Govt. Licensed" icon="fa-shield-halved" delay={600} />
        </div>
      </div>
    </section>
  );
}