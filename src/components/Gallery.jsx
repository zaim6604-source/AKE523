import FadeUp from './FadeUp';
import SafeImage from './SafeImage';

const PHOTOS = [
  {
    src: '/images/gallery-1.jpg',
    alt: 'Office interior',
  },
  {
    src: '/images/gallery-2.jpg',
    alt: 'Professional team meeting',
  },
  {
    src: '/images/gallery-3.jpg',
    alt: 'Business handshake',
  },
  {
    src: '/images/gallery-4.jpg',
    alt: 'Document processing',
  },
];

export default function Gallery() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D0A1E]">
            Our Office & Team
          </h2>
          <p className="text-[#5C1A32]/70 mt-3">
            A glimpse into our workspace and the team behind your Gulf journey.
          </p>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PHOTOS.map((photo, i) => (
            <FadeUp key={i} delay={(i % 4) + 1}>
              <div className="rounded-xl overflow-hidden img-zoom shadow-md">
                <SafeImage
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-48 sm:h-56 object-cover"
                  type="default"
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}