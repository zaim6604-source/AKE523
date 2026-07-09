import { useState } from 'react';
import FadeUp from './FadeUp';
import SafeImage from './SafeImage';

const PHOTOS = [
  { src: '/images/gallery-1.jpg', alt: 'Office interior' },
  { src: '/images/gallery-2.jpg', alt: 'Professional team meeting' },
  { src: '/images/gallery-3.jpg', alt: 'Business handshake' },
  { src: '/images/gallery-4.jpg', alt: 'Document processing' },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-10">
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C]">
            Our Office & Team
          </h2>
          <p className="text-[#1C1C1C]/60 mt-3">
            A glimpse into our workspace and the team behind your journey abroad.
          </p>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PHOTOS.map((photo, i) => (
            <FadeUp key={i} delay={(i % 4) + 1}>
              <button
                onClick={() => setLightboxIndex(i)}
                className="rounded-xl overflow-hidden img-zoom shadow-md w-full cursor-pointer"
              >
                <SafeImage
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-48 sm:h-56 object-cover"
                  type="default"
                />
              </button>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop bg-black/80"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl z-10"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            <i className="fa-solid fa-times"></i>
          </button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <SafeImage
              src={PHOTOS[lightboxIndex].src}
              alt={PHOTOS[lightboxIndex].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              type="default"
            />
            <p className="text-white/70 text-sm text-center mt-3">{PHOTOS[lightboxIndex].alt}</p>
          </div>
          {/* Nav */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(lightboxIndex === 0 ? PHOTOS.length - 1 : lightboxIndex - 1);
            }}
            aria-label="Previous"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(lightboxIndex === PHOTOS.length - 1 ? 0 : lightboxIndex + 1);
            }}
            aria-label="Next"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}
    </section>
  );
}