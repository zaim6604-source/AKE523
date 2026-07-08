import useInView from '../hooks/useInView';

const FALLBACK = 'https://placehold.co/500x350/FFB6C1/FFB6C1';
const handleImgError = (e) => {
  if (e.target.src !== FALLBACK) e.target.src = FALLBACK;
};

const images = [
  {
    src: 'https://picsum.photos/seed/gallery-building/500/350',
    alt: 'Office building exterior',
  },
  {
    src: 'https://picsum.photos/seed/gallery-interior/500/350',
    alt: 'Modern office interior',
  },
  {
    src: 'https://picsum.photos/seed/gallery-team/500/350',
    alt: 'Team collaboration',
  },
  {
    src: 'https://picsum.photos/seed/gallery-travel/500/350',
    alt: 'Travel documents and passports',
  },
];

export default function Gallery() {
  const [ref, visible] = useInView(0.1);

  return (
    <section id="gallery" className="relative">
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,60 720,40 C960,20 1200,60 1440,40 L1440,60 L0,60 Z" fill="#FF6FB5" />
        </svg>
      </div>

      <div style={{ backgroundColor: '#FF6FB5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Pill Badge */}
          <div className="flex justify-center mb-4">
            <span className="pill-3 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider">
              OUR OFFICE
            </span>
          </div>

          <p className="text-center text-base sm:text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#3D0A22' }}>
            A glimpse into our workspace and team.
          </p>

          <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {images.map((img, i) => (
              <div
                key={img.alt}
                className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-${i + 1} img-hover-zoom rounded-2xl overflow-hidden shadow-lg`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-44 sm:h-52 object-cover"
                  loading="lazy"
                  onError={handleImgError}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}