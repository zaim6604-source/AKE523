import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import RevealOnScroll from '../components/RevealOnScroll'
import SERVICES from '../data/services'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80'

const STATS = [
  { value: 50, suffix: '+', label: 'Countries', icon: 'fa-globe' },
  { value: 15, suffix: '+', label: 'Years Experience', icon: 'fa-calendar-check' },
  { value: 8000, suffix: '+', label: 'Workers Placed', icon: 'fa-users' },
  { value: 7, suffix: ' Days', label: 'Fast Processing', icon: 'fa-bolt' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const counted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
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
    <span ref={ref} className="text-3xl sm:text-4xl font-extrabold text-white">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Home() {
  const [heroError, setHeroError] = useState(false)

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0">
          {!heroError ? (
            <img
              src={HERO_IMAGE}
              alt=""
              className="w-full h-full object-cover"
              onError={() => setHeroError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary to-highlight" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-cta/60" />
          <div className="absolute inset-0 bg-dot-pattern" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
              <i className="fas fa-check-circle text-accent" />
              Licensed Agency &middot; 2206/MLK
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-5">
              From the Valleys of Swat to the{' '}
              <span className="text-accent">World&apos;s Doorstep</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/85 max-w-xl mb-8 leading-relaxed">
              Al-Imran International offers comprehensive overseas recruitment services with an experienced, qualified team — licensed and trusted.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://wa.me/923467223031?text=Hello%20Al-Imran%20International!%20I%20am%20interested%20in%20overseas%20employment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-cta text-white px-7 py-3.5 rounded-full text-base font-semibold hover:bg-teal-600 transition-all shadow-xl shadow-cta/40 hover:shadow-cta/60 hover:-translate-y-0.5"
              >
                <i className="fa-brands fa-whatsapp text-lg" />
                Apply via WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 border-2 border-white/40 text-white px-7 py-3.5 rounded-full text-base font-semibold hover:bg-white/10 hover:border-white/60 transition-all"
              >
                <i className="fas fa-chevron-right text-lg" />
                Get in Touch
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {['All Countries', 'Fast Processing', 'Licensed Agency', '8k+ Placed'].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-white/15"
                >
                  <i className="fas fa-check-circle text-accent" />
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STAT BAND ===== */}
      <section className="relative bg-primary py-14 md:py-18">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg viewBox="0 0 1440 60" className="relative block w-full h-[40px] md:h-[60px]">
            <path fill="#FFEFF6" d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <i className={`fas ${stat.icon} text-accent text-2xl`} />
                <Counter target={stat.value} suffix={stat.suffix} />
                <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="relative block w-full h-[40px] md:h-[60px]">
            <path fill="#FFEFF6" d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ===== SERVICES TEASER ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-5 py-2 rounded-full">
                <i className="fas fa-briefcase" />
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-4 mb-3">
                What We Offer
              </h2>
              <p className="text-ink/60 max-w-xl mx-auto">
                End-to-end recruitment and visa services tailored to get you working abroad — fast.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.slice(0, 4).map((svc) => (
              <ServiceTeaserCard key={svc.id} svc={svc} />
            ))}
          </div>

          <RevealOnScroll>
            <div className="mt-10 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold hover:bg-highlight transition-colors shadow-lg shadow-primary/30"
              >
                View All Services
                <i className="fas fa-arrow-right text-sm" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-primary via-primary to-cta overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Work Abroad?
          </h2>
          <p className="text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Get in touch with us today and start your journey to a better career overseas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/923467223031"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent hover:text-ink transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              <i className="fa-brands fa-whatsapp text-xl" />
              Apply on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 border-2 border-white/40 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/60 transition-all"
            >
              <i className="fas fa-phone text-xl" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceTeaserCard({ svc }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        {!imgError ? (
          <img
            src={svc.image}
            alt={svc.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-secondary" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-lg">{svc.title}</h3>
          <p className="text-white/70 text-sm">{svc.subtitle}</p>
        </div>
      </div>
      <div className="p-4 bg-white">
        <p className="text-ink/60 text-sm leading-relaxed line-clamp-2">{svc.desc}</p>
      </div>
    </div>
  )
}