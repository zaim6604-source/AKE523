import { useState } from 'react'

const STAT_CHIPS = [
  { icon: 'fa-globe', label: 'Gulf &amp; Europe' },
  { icon: 'fa-bolt', label: 'Fast Processing' },
  { icon: 'fa-building', label: 'Licensed 2300/LHR' },
  { icon: 'fa-users', label: 'Trusted Team' },
]

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {!imgError ? (
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-highlight" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-secondary/60" />
        <div className="absolute inset-0 bg-dot-pattern" />
      </div>

      {/* Geometric shapes collage */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 border border-white/10 rounded-full" />
        <div className="absolute top-40 right-40 w-48 h-48 border border-white/10 rotate-45" />
        <div className="absolute bottom-32 left-10 w-72 h-72 border border-white/10 rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-white/10 -rotate-12" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
            <i className="fas fa-check-circle text-accent" />
            Licensed Agency · 2300/LHR
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-5">
            Rising Opportunities for{' '}
            <span className="text-accent">Pir Mahal's Workforce</span>
          </h1>

          {/* Sub */}
          <p className="text-lg sm:text-xl text-white/85 max-w-xl mb-8 leading-relaxed">
            Al Rabaz International connects local workers to trusted Gulf and European employers — licensed, honest, complete.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="https://wa.me/923256561112"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-cta text-white px-7 py-3.5 rounded-full text-base font-semibold hover:bg-cyan-600 transition-all shadow-xl shadow-cta/40 hover:shadow-cta/60 hover:-translate-y-0.5"
            >
              <i className="fa-brands fa-whatsapp text-lg" />
              Apply via WhatsApp
            </a>
            <a
              href="https://wa.me/923256561112"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border-2 border-white/40 text-white px-7 py-3.5 rounded-full text-base font-semibold hover:bg-white/10 hover:border-white/60 transition-all"
            >
              <i className="fa-brands fa-whatsapp text-lg" />
              Outline WhatsApp
            </a>
          </div>

          {/* Stat chips */}
          <div className="flex flex-wrap gap-3">
            {STAT_CHIPS.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-white/15"
              >
                <i className={`fas ${chip.icon} text-accent`} />
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}