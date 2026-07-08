import { useParams, Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { COUNTRIES, COMPANY } from '../data/siteData'

const HERO_IMAGES = {
  'saudi-arabia': 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=1600&h=800&fit=crop&auto=format',
  'uae': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&h=800&fit=crop&auto=format',
  'qatar': 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=1600&h=800&fit=crop&auto=format',
  'oman': 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1600&h=800&fit=crop&auto=format',
  'kuwait': 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=1600&h=800&fit=crop&auto=format',
  'germany': 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1600&h=800&fit=crop&auto=format',
  'poland': 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=1600&h=800&fit=crop&auto=format',
  'romania': 'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=1600&h=800&fit=crop&auto=format',
  'malaysia': 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1600&h=800&fit=crop&auto=format',
}

export default function DestinationDetail() {
  const { slug } = useParams()
  const country = COUNTRIES.find((c) => c.slug === slug)

  if (!country) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-map-marked-alt text-6xl text-primary/30 mb-4" />
          <h2 className="text-2xl font-extrabold text-ink mb-2">Destination Not Found</h2>
          <p className="text-ink/60 mb-6">The destination you're looking for doesn't exist.</p>
          <Link to="/destinations" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:brightness-110 transition-all">
            <i className="fas fa-arrow-left" /> Back to Destinations
          </Link>
        </div>
      </div>
    )
  }

  const whatsappText = encodeURIComponent(
    `Hello ${COMPANY.name}! I am interested in applying for ${country.name}. Please guide me on the available roles and process.`
  )

  return (
    <section className="relative">
      {/* Full-bleed country hero */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGES[country.slug]}
            alt={country.name}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-highlight/80 via-primary/40 to-transparent z-[2]" />
        <div className="relative z-10 h-full flex items-end pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
            <div className="flex items-center gap-2 text-sm text-white/60 mb-3">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <i className="fas fa-chevron-right text-[10px]" />
              <Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link>
              <i className="fas fa-chevron-right text-[10px]" />
              <span className="text-cta font-semibold">{country.name}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-2">
              {country.flag} {country.name}
            </h1>
            <p className="text-white/80 text-lg max-w-xl">{country.description}</p>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <div className="bg-background rounded-2xl p-6 lg:p-8">
                  <h2 className="text-2xl font-bold text-ink mb-4 flex items-center gap-2">
                    <i className="fas fa-briefcase text-primary" />
                    Available Roles
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {country.roles.map((role) => (
                      <div key={role} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-primary/5">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <i className="fas fa-user-check" />
                        </div>
                        <span className="font-medium text-sm text-ink">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="bg-background rounded-2xl p-6 lg:p-8">
                  <h2 className="text-2xl font-bold text-ink mb-4 flex items-center gap-2">
                    <i className="fas fa-clipboard-check text-accent" />
                    Requirements
                  </h2>
                  <ul className="space-y-3">
                    {country.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                          <i className="fas fa-check text-[10px]" />
                        </div>
                        <span className="text-sm text-ink/70">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 lg:p-8 border border-primary/10">
                  <h2 className="text-xl font-bold text-ink mb-3 flex items-center gap-2">
                    <i className="fas fa-landmark text-primary" />
                    Famous Landmark
                  </h2>
                  <p className="text-ink/70 text-sm leading-relaxed">
                    {country.landmark} — a must-visit destination when you arrive in {country.name}.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/5 sticky top-24">
                  <h3 className="text-lg font-bold text-ink mb-4">Ready to Apply?</h3>
                  <p className="text-sm text-ink/60 mb-4">
                    Apply now for {country.name} positions. Our team will guide you through the entire process.
                  </p>
                  <a
                    href={`${COMPANY.whatsappLink}?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-cta text-white py-3.5 rounded-full font-bold text-center hover:brightness-110 transition-all shadow-lg shadow-cta/30 mb-3"
                  >
                    <i className="fab fa-whatsapp mr-2" />
                    Apply for {country.name}
                  </a>
                  <a
                    href={COMPANY.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border-2 border-primary text-primary py-3 rounded-full font-bold text-center hover:bg-primary hover:text-white transition-all"
                  >
                    <i className="fab fa-whatsapp mr-2" />
                    General Inquiry
                  </a>
                  <div className="mt-4 pt-4 border-t border-primary/10 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-ink/60">
                      <i className="fas fa-phone text-primary" />
                      <a href={`tel:${COMPANY.offices.head.phone}`} className="hover:text-primary transition-colors">{COMPANY.offices.head.phone}</a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-ink/60">
                      <i className="fas fa-phone text-secondary" />
                      <a href={`tel:${COMPANY.offices.branch.phone}`} className="hover:text-primary transition-colors">{COMPANY.offices.branch.phone}</a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}