import ScrollReveal from './ScrollReveal'
import FallbackImage from './FallbackImage'

const COUNTRIES = [
  {
    name: 'Saudi Arabia',
    cities: 'Riyadh, Jeddah, Dammam',
    image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=600&h=400&fit=crop&auto=format',
    sectors: 'Construction, Healthcare, Hospitality',
  },
  {
    name: 'United Arab Emirates',
    cities: 'Dubai, Abu Dhabi, Sharjah',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop&auto=format',
    sectors: 'Construction, Logistics, Retail',
  },
  {
    name: 'Qatar',
    cities: 'Doha',
    image: 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=600&h=400&fit=crop&auto=format',
    sectors: 'Hospitality, Construction, Oil & Gas',
  },
  {
    name: 'Oman',
    cities: 'Muscat, Salalah',
    image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&h=400&fit=crop&auto=format',
    sectors: 'Tourism, Logistics, Fisheries',
  },
  {
    name: 'Kuwait',
    cities: 'Kuwait City',
    image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=600&h=400&fit=crop&auto=format',
    sectors: 'Oil & Gas, Healthcare, Engineering',
  },
  {
    name: 'Germany',
    cities: 'Berlin, Munich, Frankfurt',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop&auto=format',
    sectors: 'Healthcare, IT, Engineering',
  },
  {
    name: 'Poland',
    cities: 'Warsaw, Kraków, Wrocław',
    image: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=600&h=400&fit=crop&auto=format',
    sectors: 'Manufacturing, Logistics, IT',
  },
  {
    name: 'Croatia',
    cities: 'Dubrovnik, Zagreb, Split',
    image: 'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=600&h=400&fit=crop&auto=format',
    sectors: 'Tourism, Hospitality, Construction',
  },
  {
    name: 'Malaysia',
    cities: 'Kuala Lumpur, Penang, Johor',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=400&fit=crop&auto=format',
    sectors: 'Electronics, Manufacturing, IT',
  },
]

export default function CountryGuide() {
  return (
    <section id="countries" className="py-16 lg:py-24 bg-white">
      {/* Wavy divider top */}
      <div className="wavy-divider -mb-1 -mt-16 lg:-mt-24">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-white fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
              <i className="fas fa-globe-asia" />
              Country Guide
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
              Destinations We Serve
            </h2>
            <p className="text-ink/60 max-w-2xl mx-auto">
              From the Gulf to Europe and Southeast Asia — opportunities across the globe.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COUNTRIES.map((country, i) => (
            <ScrollReveal key={country.name} delay={i * 60}>
              <div className="bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                {/* Flag area */}
                <div className="relative h-36 bg-gradient-to-br from-primary to-secondary overflow-hidden">
                  <FallbackImage
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    icon="fa-globe"
                    bgClass="from-primary/30 to-secondary/30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-white font-extrabold text-lg">{country.name}</h3>
                    <p className="text-white/80 text-xs">{country.cities}</p>
                  </div>
                </div>
                {/* Content */}
                <div className="p-4">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {country.sectors.split(', ').map((sector) => (
                      <span
                        key={sector}
                        className="text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ink/50 mt-2">
                    <i className="fas fa-map-pin text-primary/60" />
                    <span>Key cities: {country.cities}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Wavy divider bottom */}
      <div className="wavy-divider -mt-1 rotate-180">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-white fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}