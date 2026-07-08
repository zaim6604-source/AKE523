import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import FallbackImage from '../components/FallbackImage'
import { COUNTRIES } from '../data/siteData'

const UNSPlASH_IDS = [
  '1574958269340-fa927503f3dd',
  '1512453979798-5ea266f8880c',
  '1611735341450-74d61e660ad2',
  '1602002418082-a4443e081dd1',
  '1467269204594-9661b134dd2b',
  '1561948955-570b270e7c36',
  '1555992336-03a23c7b20ee',
  '1596422846543-75c6fc197f07',
  '1600791623437-8ca5c7b67e41',
]

export default function Countries() {
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
                Explore opportunities across the Gulf and Europe. Click on a country to see available roles and requirements.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.map((country, i) => (
              <ScrollReveal key={country.slug} delay={i * 60}>
                <Link to={`/countries/${country.slug}`} className="block bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-40 bg-gradient-to-br from-primary to-secondary overflow-hidden">
                    <FallbackImage
                      src={`https://images.unsplash.com/photo-${UNSPlASH_IDS[i]}?w=600&h=400&fit=crop&auto=format`}
                      alt={country.name}
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                      icon="fa-globe"
                      bgClass="from-primary/30 to-secondary/30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <h3 className="text-white font-extrabold text-xl">{country.flag} {country.name}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-ink/60 leading-relaxed mb-3">{country.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {country.roles.slice(0, 3).map((role) => (
                        <span key={role} className="text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {role}
                        </span>
                      ))}
                      {country.roles.length > 3 && (
                        <span className="text-[10px] font-semibold bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                          +{country.roles.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                      <span>View Details & Apply</span>
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