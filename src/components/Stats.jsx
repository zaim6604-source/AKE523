import { useEffect, useRef } from 'react';

const stats = [
  { n: '5000+', l: 'Trainees & Tested' },
  { n: '15+', l: 'Trades Covered' },
  { n: '10,000+', l: 'Certificates Issued' },
  { n: '8+', l: 'Years of Service' },
];

function AnimatedCounter({ end, suffix }) {
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let current = 0;
          const step = Math.ceil(end / 40);
          const timer = setInterval(() => {
            current += step;
            if (current >= end) {
              current = end;
              clearInterval(timer);
            }
            if (el) el.textContent = current.toLocaleString() + suffix;
          }, 30);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  return (
    <section
      style={{
        background: '#FF206E',
        padding: '48px 24px',
      }}
    >
      <div
        className="section-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: 32,
          textAlign: 'center',
        }}
      >
        {stats.map((s) => (
          <div key={s.l}>
            <div
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 40px)',
                color: '#fff',
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              <AnimatedCounter end={parseInt(s.n)} suffix={s.n.replace(/[\d,]/g, '')} />
            </div>
            <div
              style={{
                fontSize: 13,
                color: '#FBFF12',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
