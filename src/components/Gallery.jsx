import { useState } from 'react';
import useReveal from '../hooks/useReveal';

const IMAGES = [
  { src: '/images/gallery-welding.jpg', alt: 'Welding Workshop' },
  { src: '/images/gallery-electrical.jpg', alt: 'Electrical Workshop' },
  { src: '/images/gallery-training.jpg', alt: 'Training Classroom' },
  { src: '/images/gallery-mechanic.jpg', alt: 'Mechanic Workshop' },
];

export default function Gallery() {
  useReveal('.gll-reveal');
  const [errors, setErrors] = useState({});

  return (
    <section className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 gll-reveal reveal">
          <span className="pill-badge">OUR FACILITY</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#1A1423' }}>
            Facility &amp; Workshop
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#4B4453' }}>
            A look inside our training centre and workshop facilities in Mardan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className="gll-reveal reveal rounded-2xl overflow-hidden group img-hover-zoom"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {!errors[i] ? (
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={() => setErrors((p) => ({ ...p, [i]: true }))}
                />
              ) : (
                <div className="w-full h-64 md:h-72 flex items-center justify-center rounded-2xl" style={{ background: '#FFF8E0' }}>
                  <span className="text-sm font-medium" style={{ color: '#FF206E' }}>{img.alt}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}