import { useState } from 'react';
import { useEffect, useRef } from 'react';

const galleryImages = [
  { src: '/images/community-volunteers.jpg', alt: 'Community volunteers in action' },
  { src: '/images/helping-hands.jpg', alt: 'Helping hands' },
  { src: '/images/food-relief.jpg', alt: 'Food relief distribution' },
  { src: '/images/community-group.jpg', alt: 'Community group' },
];

export default function Gallery() {
  const ref = useRef(null);
  const [errs, setErrs] = useState({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-white py-20 px-6" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10 reveal">
          <div className="pill-badge mx-auto mb-[18px]">
            <span className="pill-dot" />
            IN ACTION
          </div>
          <h2 className="font-heading font-black text-[clamp(24px,3vw,36px)] text-ink mb-2">
            Our <span className="text-primary">Gallery</span>
          </h2>
        </div>
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="gal-card h-60 relative cursor-pointer reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <img
                src={errs[i] ? '/images/fallback.svg' : img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover block transition-transform duration-500 hover:scale-105"
                onError={() => setErrs(p => ({ ...p, [i]: true }))}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}