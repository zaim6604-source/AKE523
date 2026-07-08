import { useState } from 'react'

const PHOTOS = [
  { src: '/images/gallery-1.jpg', alt: 'Document processing' },
  { src: '/images/gallery-2.jpg', alt: 'Staff group' },
  { src: '/images/gallery-3.jpg', alt: 'Team meeting' },
  { src: '/images/gallery-4.jpg', alt: 'Client consultation' },
]

export default function Gallery() {
  const [errored, setErrored] = useState({})

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section pill */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-5 py-2 rounded-full">
            <i className="fas fa-camera" />
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-4 mb-3">
            Our Office &amp; Team
          </h2>
        </div>

        {/* Photo strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PHOTOS.map((photo) => (
            <div key={photo.src} className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
              {!errored[photo.src] ? (
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={() => setErrored((prev) => ({ ...prev, [photo.src]: true }))}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <i className="fas fa-image text-3xl text-primary/40" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}