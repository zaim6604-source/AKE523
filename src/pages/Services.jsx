import { useState } from 'react'
import { Link } from 'react-router-dom'
import RevealOnScroll from '../components/RevealOnScroll'
import SERVICES from '../data/services'

export default function Services() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-primary via-primary to-cta overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full mb-4">
            <i className="fas fa-briefcase" />
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            Comprehensive Recruitment Services
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            From visa processing to pre-departure orientation — we handle everything to get you working abroad.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((svc, idx) => (
              <RevealOnScroll key={svc.id}>
                <ServiceCard svc={svc} idx={idx} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-primary via-primary to-cta overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Need a Service Not Listed?
          </h2>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8">
            Contact us and we&apos;ll find the right solution for your overseas employment needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/923467223031"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent hover:text-ink transition-all shadow-xl"
            >
              <i className="fa-brands fa-whatsapp text-xl" />
              Inquire Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 border-2 border-white/40 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
            >
              <i className="fas fa-envelope text-xl" />
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceCard({ svc }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-primary/10">
      <div className="relative h-44 overflow-hidden">
        {!imgError ? (
          <img
            src={svc.image}
            alt={svc.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm text-white text-lg">
            <i className={`fas ${svc.icon}`} />
          </div>
          <h3 className="text-white font-bold text-base">{svc.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-ink/60 text-sm leading-relaxed mb-4">{svc.desc}</p>
        <a
          href={`https://wa.me/923467223031?text=Hello%20Al-Imran%20International!%20I%20am%20interested%20in%20${encodeURIComponent(svc.title)}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cta hover:text-teal-700 transition-colors"
        >
          <i className="fa-brands fa-whatsapp" />
          Inquire about {svc.title}
        </a>
      </div>
    </div>
  )
}