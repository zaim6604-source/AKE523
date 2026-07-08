import useInView from '../hooks/useInView';
import LazyImage from './LazyImage';

const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=600&q=80', alt: 'Office team meeting', caption: 'Our Team at Work' },
  { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80', alt: 'Candidates departing', caption: 'Successful Departures' },
  { src: 'https://images.unsplash.com/photo-1573164574572-cb89e39549b9?w=600&q=80', alt: 'Training session', caption: 'Pre-Departure Orientation' },
  { src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80', alt: 'Office facade', caption: 'Al-Riaz Plaza Office' },
];

export default function Gallery() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="bg-[#FFF3E6] py-12 sm:py-16 lg:py-20 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {PHOTOS.map((photo, i) => (
            <div
              key={photo.src}
              className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="aspect-[4/3]">
                <LazyImage
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  containerClass="w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                <span className="text-white text-xs sm:text-sm font-semibold">{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}