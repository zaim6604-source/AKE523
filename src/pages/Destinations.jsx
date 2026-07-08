import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { COUNTRIES } from '../data/siteData'

const DEST_IMAGES = [
  'https://picsum.photos/seed/saudi-arabia/600/500',
  'https://picsum.photos/seed/uae/600/500',
  'https://picsum.photos/seed/qatar/600/500',
  'https://picsum.photos/seed/oman/600/500',
  'https://picsum.photos/seed/kuwait/600/500',
  'https://picsum.photos/seed/germany/600/500',
  'https://picsum.photos/seed/poland/600/500',
  'https://picsum.photos/seed/romania/600/500',
  'https://picsum.photos/seed/malaysia/600/500',
]

export default function Destinations() {
  return (
    <section className="relative animate-page-enter">
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
                <i className="fas fa-globe-asia" />
                Destinations
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
                Countries We Serve
              </h2>
              <p className="text-ink/60 max-w-2xl mx-auto">
                Explore opportunities across the Gulf, Europe, and Asia. Click to see available roles.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.map((country, i) => (
              <ScrollReveal key={country.slug} delay={i * 60}>
                <Link to={`/destinations/${country.slug}`} className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/60 to-accent/60">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-40 z-[1]" />
                    <img
                      src={DEST_IMAGES[i]}
                      alt={country.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => { e.target.style.display = 'none' }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-[2] pointer-events-none" />
                    <div className="absolute bottom-4 left-4 z-10">
                      <h3 className="text-white font-extrabold text-2xl">{country.flag} {country.name}</h3>
                    </div>
                    <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-cta text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        View Roles
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-background">
                    <p className="text-sm text-ink/60 leading-relaxed">{country.description}</p>
                    <div className="flex items-center gap-2 text-xs text-primary font-semibold mt-3">
                      <span>View Details</span>
                      <i className="fas fa-arrow-right text-[10px]" />
                    </div>
                  </div>
                </Link>
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