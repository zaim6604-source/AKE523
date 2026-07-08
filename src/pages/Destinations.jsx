import { useState } from 'react'
import { Link } from 'react-router-dom'
import RevealOnScroll from '../components/RevealOnScroll'
import COUNTRIES from '../data/countries'

export default function Destinations() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-primary via-primary to-cta overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full mb-4">
            <i className="fas fa-globe" />
            Destinations
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            Countries We Cover
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            Work visas processed for top destinations across the Middle East, Europe, and Asia.
          </p>
        </div>
      </section>

      {/* Country Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.map((c, idx) => (
              <RevealOnScroll key={c.slug}>
                <CountryCard country={c} />
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
            Country Not Listed?
          </h2>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8">
            We process visas for many more countries. Contact us for your specific destination.
          </p>
          <a
            href="https://wa.me/923467223031"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent hover:text-ink transition-all shadow-xl"
          >
            <i className="fa-brands fa-whatsapp text-xl" />
            Ask About Your Country
          </a>
        </div>
      </section>
    </>
  )
}

function CountryCard({ country: c }) {
  const [imgError, setImgError] = useState(false)

  return (
    <Link
      to={`/destinations/${c.slug}`}
      className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white block"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {!imgError ? (
          <img
            src={c.image}
            alt={c.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/40 to-secondary/40" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <span className="text-2xl">{c.flag}</span>
          <h3 className="text-white font-bold text-lg">{c.name}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {c.roles.slice(0, 3).map((role) => (
            <span
              key={role}
              className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {role}
            </span>
          ))}
          {c.roles.length > 3 && (
            <span className="text-xs text-ink/40 font-medium">+{c.roles.length - 3} more</span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-ink/50">
            <i className="fas fa-clock mr-1" />
            {c.processingTime}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
            View Details
            <i className="fas fa-arrow-right text-xs" />
          </span>
        </div>
      </div>
    </Link>
  )
}