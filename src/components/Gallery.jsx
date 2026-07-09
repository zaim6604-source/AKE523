import { useState } from 'react';

const photos = [
  { src: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=400&fit=crop', alt: 'Office team meeting' },
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop', alt: 'Team collaboration' },
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop', alt: 'Office workspace' },
  { src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop', alt: 'Staff meeting' },
  { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop', alt: 'Modern office' },
  { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop', alt: 'Consultation' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const [errors, setErrors] = useState({});

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-primary text-white mb-5">
            GALLERY
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink font-display">
            A Glimpse of <span className="text-primary">Zanib</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={errors[i] ? 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop' : photo.src}
                alt={photo.alt}
                className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                onError={() => setErrors((p) => ({ ...p, [i]: true }))}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay" onClick={() => setLightbox(null)}>
          <div className="max-w-3xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img
              src={errors[lightbox] ? 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop' : photos[lightbox].src}
              alt={photos[lightbox].alt}
              className="w-full h-auto rounded-2xl shadow-2xl max-h-[80vh] object-contain"
            />
            <div className="flex justify-between items-center mt-4">
              <p className="text-white/80 text-sm">{photos[lightbox].alt}</p>
              <div className="flex gap-3">
                <button
                  onClick={(e) => { e.stopPropagation(); setLightbox(lightbox > 0 ? lightbox - 1 : photos.length - 1); }}
                  className="text-white/80 hover:text-white text-xl"
                >
                  <i className="fas fa-chevron-left" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setLightbox(lightbox < photos.length - 1 ? lightbox + 1 : 0); }}
                  className="text-white/80 hover:text-white text-xl"
                >
                  <i className="fas fa-chevron-right" />
                </button>
                <button onClick={() => setLightbox(null)} className="text-white/80 hover:text-white text-xl">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
