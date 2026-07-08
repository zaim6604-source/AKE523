import { GALLERY_IMAGES } from './constants';
import useInView from './useInView';

export default function GalleryStrip() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-main" ref={ref}>
        <div className="text-center mb-4">
          <span className="pill-badge">
            <i className="fas fa-camera text-[10px] mr-1.5"></i>
            OUR OFFICE & TRAVELS
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#2A1033] mb-4">
          A Glimpse Into Our Operations
        </h2>
        <p className="text-center text-[#2A1033]/60 max-w-2xl mx-auto mb-10">
          Behind the scenes at our Mingora and Rawalpindi offices and workers departing for international opportunities.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={i}
              className={`img-hover-zoom rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="aspect-square bg-gradient-to-br from-[#CE93D8] to-[#9C27B0]">
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#CE93D8] to-[#9C27B0] flex items-center justify-center -z-10">
                  <i className="fas fa-image text-4xl text-white/60"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}