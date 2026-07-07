import { useEffect, useRef } from 'react';

const photos = [
  { src: '/src/assets/images/law-library.jpg', alt: 'Law Library' },
  { src: '/src/assets/images/courthouse.jpg', alt: 'Courthouse' },
  { src: '/src/assets/images/scales.jpg', alt: 'Scales of Justice' },
  { src: '/src/assets/images/chambers.jpg', alt: 'Chambers Office' },
];

const fallbacks = [
  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
  'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
];

export default function Gallery() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-background)' }} ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-14">
          <span className="section-pill">CHAMBERS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-[#0B2545]">
            Our Chambers
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((p, i) => (
            <div key={i} className="reveal relative rounded-2xl overflow-hidden shadow-md"
              style={{ transitionDelay: `${i * 0.1}s` }}>
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-56 object-cover"
                loading="lazy"
                onError={(e) => { e.target.src = fallbacks[i]; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}