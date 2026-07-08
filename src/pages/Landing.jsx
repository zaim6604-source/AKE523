import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import MarqueeBand from '../components/MarqueeBand'
import { COMPANY, STATS, COUNTRIES, SERVICES } from '../data/siteData'
import { useState, useEffect, useRef } from 'react'

function Counter({ target, suffix, label, icon }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-center text-white animate-count-up">
      <i className={`fas ${icon} text-2xl mb-2 opacity-80`} />
      <div className="text-2xl sm:text-3xl font-extrabold">{count}{suffix}</div>
      <div className="text-xs font-medium opacity-80 mt-1">{label}</div>
    </div>
  )
}

export default function Landing() {
  return (
    <>
      <MarqueeBand />

      {/* Full-bleed hero */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/afaq-hero/1600/900"
            alt="New horizons await"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-primary/40 to-transparent z-[2]" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-accent/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-5 backdrop-blur">
                <i className="fas fa-badge-check" />
                Government Licensed — {COMPANY.license}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-5">
                New Horizons Begin{' '}
                <span className="text-cta">the Day You Apply</span>
              </h1>
              <p className="text-base sm:text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
                {COMPANY.heroTagline}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cta text-white px-7 py-3.5 rounded-full font-bold text-base hover:brightness-110 hover:scale-105 transition-all shadow-xl shadow-cta/40"
                >
                  <i className="fab fa-whatsapp text-lg" />
                  Apply Now
                </a>
                <a
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-white/60 text-white px-7 py-3.5 rounded-full font-bold hover:bg-white hover:text-primary transition-all"
                >
                  <i className="fab fa-whatsapp text-lg" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-reveal stat strip */}
      <section className="bg-gradient-to-r from-primary via-secondary to-accent py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {STATS.map((stat) => {
              const iconMap = {
                'Candidates Placed': 'fa-user-check',
                'Partner Employers': 'fa-building',
                'Destination Countries': 'fa-globe',
                'Years of Service': 'fa-star',
              }
              const target = parseInt(stat.value)
              return (
                <Counter
                  key={stat.label}
                  icon={iconMap[stat.label]}
                  target={isNaN(target) ? 500 : target}
                  suffix={stat.value.replace(/[0-9]/g, '')}
                  label={stat.label}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
                <i className="fas fa-briefcase" />
                Our Services
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
                Comprehensive Recruitment Services
              </h2>
              <p className="text-ink/60 max-w-2xl mx-auto">
                From visa processing to post-placement care — we handle everything.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 50}>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary text-xl mb-4">
                    <i className={`fas ${svc.icon}`} />
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">{svc.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{svc.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg">
              View All Services <i className="fas fa-arrow-right text-sm" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured destinations */}
      <section className="py-16 lg:py-24 bg-white">
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
                From the Gulf to Europe and Asia — opportunities across continents.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.slice(0, 6).map((country, i) => (
              <ScrollReveal key={country.name} delay={i * 60}>
                <Link to={`/destinations/${country.slug}`} className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative h-44 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-60 z-[1]" />
                    <img
                      src={`https://picsum.photos/seed/${country.slug}/600/400`}
                      alt={country.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-[2]" />
                    <div className="absolute bottom-4 left-4 z-10">
                      <h3 className="text-white font-extrabold text-xl">{country.flag} {country.name}</h3>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-10">
            <Link to="/destinations" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg">
              View All Destinations <i className="fas fa-arrow-right text-sm" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="wavy-divider -mb-1">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-white fill-current">
            <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
        <div className="bg-gradient-to-r from-primary via-secondary to-cta py-16 lg:py-20 relative">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Ready to Start Your Journey?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Take the first step toward a well-paid career abroad. Contact us today for a free consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-extrabold text-lg hover:shadow-2xl hover:scale-105 transition-all"
                >
                  <i className="fab fa-whatsapp text-2xl" />
                  Chat on WhatsApp
                </a>
                <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/40 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                  <i className="fas fa-phone" /> Call {COMPANY.phone}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="wavy-divider -mt-1 rotate-180">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-background fill-current">
            <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>
    </>
  )
}