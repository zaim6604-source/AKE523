import ScrollReveal from './ScrollReveal'
import FallbackImage from './FallbackImage'

const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop&auto=format', label: 'Office at Tahir Plaza' },
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop&auto=format', label: 'Candidate Counseling' },
  { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=450&fit=crop&auto=format', label: 'Pre-Departure Orientation' },
  { src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=450&fit=crop&auto=format', label: 'Documentation Center' },
  { src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=450&fit=crop&auto=format', label: 'Visa Processing' },
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=450&fit=crop&auto=format', label: 'Team at Work' },
]

export default function Gallery() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
              <i className="fas fa-images" />
              Gallery
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
              A Glimpse of Our Work
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {GALLERY.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 60}>
              <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer aspect-[4/3]">
                <FallbackImage
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                  icon="fa-image"
                  bgClass="from-primary/20 to-secondary/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-semibold">{item.label}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}