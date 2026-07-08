import ScrollReveal from '../components/ScrollReveal'
import { SERVICES } from '../data/siteData'

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&auto=format',
]

export default function Services() {
  return (
    <section className="relative">
      <div className="wavy-divider -mb-1">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-background fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
                <i className="fas fa-briefcase" />
                Our Services
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
                Everything You Need for Overseas Employment
              </h2>
              <p className="text-ink/60 max-w-2xl mx-auto">
                End-to-end recruitment services designed to make your journey abroad seamless.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 50}>
                <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-background parallax-card">
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/60 to-accent/60">
                    <img
                      src={SERVICE_IMAGES[i]}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => { e.target.style.display = 'none' }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-3 left-4 text-white z-20">
                      <i className={`fas ${svc.icon} text-2xl`} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-ink mb-2">{svc.title}</h3>
                    <p className="text-sm text-ink/60 leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="wavy-divider -mt-1 rotate-180">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-background fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}