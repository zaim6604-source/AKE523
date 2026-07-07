import { useState } from 'react';
import useInView from '../hooks/useInView';

const images = [
  { src: '/images/meeting.jpg', alt: 'Team collaboration and meeting' },
  { src: '/images/handshake.jpg', alt: 'Client handshake deal' },
  { src: '/images/workspace.jpg', alt: 'Modern workspace environment' },
  { src: '/images/hero-office.jpg', alt: 'Office team at work' },
];

export default function Gallery() {
  const [imgErrors, setImgErrors] = useState({});
  const [ref, inView] = useInView();

  const handleError = (index) => {
    setImgErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="pill-badge bg-[#F46197]/10 text-[#F46197] mb-4">GALLERY</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-[#340710]">
            A Glimpse of <span className="text-[#D7263D]">Our Work</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden group shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                {imgErrors[i] ? (
                  <div className="w-full h-full bg-[#D7263D]/10 flex items-center justify-center">
                    <span className="text-[#D7263D]/30 text-2xl">●</span>
                  </div>
                ) : (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    onError={() => handleError(i)}
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
