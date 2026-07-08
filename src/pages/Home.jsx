import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import FallbackImage from '../components/FallbackImage'
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
      <i className={`fas ${icon} text-3xl mb-2 opacity-80`} />
      <div className="text-3xl sm:text-4xl font-extrabold">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium opacity-80 mt-1">{label}</div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <MarqueeBand />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cta/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
            <ScrollReveal className="lg:col-span-2 lg:row-span-2 bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-primary/5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-800 text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                <i className="fas fa-badge-check" />
                License {COMPANY.license}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink leading-tight mb-4">
                {COMPANY.tagline.split('for')[0]}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  for a Future Abroad
                </span>
              </h1>
              <p className="text-base lg:text-lg text-ink/70 max-w-xl mb-6 leading-relaxed">
                {COMPANY.heroTagline}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cta text-white px-6 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg shadow-cta/30"
                >
                  <i className="fab fa-whatsapp" />
                  Apply Now
                </a>
                <a
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all"
                >
                  <i className="fab fa-whatsapp" />
                  WhatsApp
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal className="relative rounded-2xl overflow-hidden shadow-lg" delay={100}>
              <div className="h-52 lg:h-72">
                <FallbackImage
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&auto=format"
                  alt="Construction workers on site"
                  className="w-full h-full"
                  icon="fa-users"
                  bgClass="from-primary to-secondary"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold text-ink flex items-center gap-1">
                  <i className="fas fa-star text-accent" /> Trusted Since 2012
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="relative rounded-2xl overflow-hidden shadow-lg" delay={200}>
              <div className="h-52 lg:h-72">
                <FallbackImage
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&auto=format"
                  alt="Modern office building"
                  className="w-full h-full"
                  icon="fa-building"
                  bgClass="from-secondary to-accent"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold text-ink flex items-center gap-1">
                  <i className="fas fa-location-dot text-primary" /> Usmania Plaza, Chakwal
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 shadow-lg text-white flex flex-col justify-center items-center text-center" delay={150}>
              <div className="text-4xl font-extrabold">500+</div>
              <div className="text-sm font-medium opacity-90 mt-1">Workers Placed</div>
              <div className="w-12 h-0.5 bg-white/30 rounded-full my-3" />
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star" />)}
              </div>
            </ScrollReveal>

            <ScrollReveal className="bg-white rounded-2xl p-4 shadow-lg border border-accent/30 flex items-center justify-center gap-3" delay={250}>
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xl">
                <i className="fas fa-certificate" />
              </div>
              <div className="text-left">
                <div className="text-xs text-ink/60 font-medium">Government Licensed</div>
                <div className="font-extrabold text-ink text-sm">{COMPANY.license}</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stat Band */}
      <section className="bg-gradient-to-r from-primary to-secondary py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Services Teaser */}
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
                <div className="gradient-border-card p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg"
            >
              View All Services
              <i className="fas fa-arrow-right text-sm" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Destinations */}
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
                From the Gulf to Europe — opportunities across continents.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.slice(0, 6).map((country, i) => (
              <ScrollReveal key={country.name} delay={i * 60}>
                <Link to={`/countries/${country.slug}`} className="block bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-36 bg-gradient-to-br from-primary to-secondary overflow-hidden">
                    <FallbackImage
                      src={`https://images.unsplash.com/photo-${i === 0 ? '1574958269340-fa927503f3dd' : i === 1 ? '1512453979798-5ea266f8880c' : i === 2 ? '1611735341450-74d61e660ad2' : i === 3 ? '1602002418082-a4443e081dd1' : i === 4 ? '1467269204594-9661b134dd2b' : '1561948955-570b270e7c36'}?w=600&h=400&fit=crop&auto=format`}
                      alt={country.name}
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                      icon="fa-globe"
                      bgClass="from-primary/30 to-secondary/30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <h3 className="text-white font-extrabold text-lg">{country.flag} {country.name}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-ink/60 line-clamp-2">{country.description}</p>
                    <div className="flex items-center gap-2 text-xs text-primary font-semibold mt-3">
                      <span>View Opportunities</span>
                      <i className="fas fa-arrow-right text-[10px]" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-10">
            <Link
              to="/countries"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg"
            >
              View All Countries
              <i className="fas fa-arrow-right text-sm" />
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
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/40 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
                >
                  <i className="fas fa-phone" />
                  Call {COMPANY.phone}
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