import { useState } from 'react'

const COUNTRIES = [
  {
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    roles: 'Drivers, Labour',
    color: 'from-emerald-600 to-emerald-800',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80',
  },
  {
    name: 'UAE',
    flag: '🇦🇪',
    roles: 'Drivers, Labour',
    color: 'from-red-600 to-red-800',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
  },
  {
    name: 'Qatar',
    flag: '🇶🇦',
    roles: 'Construction, Driving',
    color: 'from-purple-700 to-purple-900',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80',
  },
  {
    name: 'Kuwait',
    flag: '🇰🇼',
    roles: 'Labour, Driving',
    color: 'from-green-700 to-green-900',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80',
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    roles: 'Healthcare, IT, Skilled',
    color: 'from-yellow-600 to-gray-800',
    image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&q=80',
  },
  {
    name: 'Italy',
    flag: '🇮🇹',
    roles: 'Agriculture, Hospitality',
    color: 'from-green-600 to-red-600',
    image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&q=80',
  },
  {
    name: 'Poland',
    flag: '🇵🇱',
    roles: 'Manufacturing, Logistics',
    color: 'from-red-600 to-white',
    image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600&q=80',
  },
  {
    name: 'South Korea',
    flag: '🇰🇷',
    roles: 'Factory (Seoul)',
    color: 'from-red-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80',
  },
  {
    name: 'Turkey',
    flag: '🇹🇷',
    roles: 'Textiles (Istanbul)',
    color: 'from-red-600 to-amber-600',
    image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600&q=80',
  },
]

export default function CountryGuide() {
  return (
    <section id="countries" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section pill */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-5 py-2 rounded-full">
            <i className="fas fa-globe" />
            Country Guide
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-4 mb-3">
            Destinations We Cover
          </h2>
          <p className="text-ink/60 max-w-xl mx-auto">
            Work visas processed for top destinations across the Middle East, Europe, and Asia.
          </p>
        </div>

        {/* Country cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COUNTRIES.map((c) => (
            <CountryCard key={c.name} country={c} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CountryCard({ country: c }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        {!imgError ? (
          <img
            src={c.image}
            alt={c.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${c.color}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <span className="text-2xl">{c.flag}</span>
          <h3 className="text-white font-bold text-lg">{c.name}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-3">
          <i className="fas fa-briefcase" />
          {c.roles}
        </div>
        <a
          href="https://wa.me/923344925559"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cta hover:text-green-700 transition-colors"
        >
          <i className="fa-brands fa-whatsapp" />
          Apply Now
        </a>
      </div>
    </div>
  )
}