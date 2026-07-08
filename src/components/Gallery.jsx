import useScrollReveal from '../hooks/useScrollReveal';
import OptimizedImage from './OptimizedImage';

const items = [
  { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop&q=80', icon: 'fas fa-building', label: 'Visa Processing Center' },
  { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop&q=80', icon: 'fas fa-users', label: 'Client Consultations' },
  { src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&q=80', icon: 'fas fa-passport', label: 'Document Processing' },
  { src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop&q=80', icon: 'fas fa-plane', label: 'Travel Arrangements' },
  { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop&q=80', icon: 'fas fa-handshake', label: 'Client Meetings' },
  { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=400&h=300&fit=crop&q=80', icon: 'fas fa-graduation-cap', label: 'Orientation Sessions' },
];

export default function Gallery() {
  const revealRef = useScrollReveal();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0496FF]/10 text-[#0496FF] rounded-full text-xs font-semibold mb-4">
            <i className="fas fa-images" />
            Gallery
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#062A45] mb-3">
            A Glimpse Into Our Work
          </h2>
          <p className="text-sm sm:text-base text-[#062A45]/60 max-w-xl mx-auto">
            Moments from our offices and client service operations.
          </p>
        </div>

        <div ref={revealRef} className="reveal gallery-scroll pb-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="w-56 sm:w-64 flex-shrink-0 rounded-2xl overflow-hidden bg-white border border-blue-100 shadow-md hover:shadow-lg transition-shadow"
            >
              <OptimizedImage
                src={item.src}
                alt={item.label}
                className="w-full h-32 sm:h-36"
                icon={item.icon}
              />
              <div className="p-3 text-center">
                <span className="text-sm font-medium text-[#062A45]/70">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
