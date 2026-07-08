import { useState } from 'react'

const COUNTRIES = [
  {
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    landmark: 'Riyadh',
    roles: 'Drivers, Labour, Technicians',
    color: 'from-emerald-600 to-emerald-800',
    image: '/images/saudi-arabia.jpg',
  },
  {
    name: 'Qatar',
    flag: '🇶🇦',
    landmark: 'Doha',
    roles: 'Construction, Driving',
    color: 'from-purple-700 to-purple-900',
    image: '/images/qatar.jpg',
  },
  {
    name: 'Oman',
    flag: '🇴🇲',
    landmark: 'Muscat',
    roles: 'Drivers, Labour, Technicians',
    color: 'from-teal-700 to-teal-900',
    image: '/images/oman.jpg',
  },
  {
    name: 'UAE',
    flag: '🇦🇪',
    landmark: 'Dubai',
    roles: 'Drivers, Labour, Sales Staff',
    color: 'from-red-600 to-red-800',
    image: '/images/uae.jpg',
  },
  {
    name: 'Poland',
    flag: '🇵🇱',
    landmark: 'Warsaw',
    roles: 'Manufacturing, Logistics',
    color: 'from-red-700 to-gray-800',
    image: '/images/poland.jpg',
  },
  {
    name: 'Romania',
    flag: '🇷🇴',
    landmark: 'Bucharest',
    roles: 'Construction, Factory',
    color: 'from-blue-600 to-yellow-600',
    image: '/images/romania.jpg',
  },
  {
    name: 'Greece',
    flag: '🇬🇷',
    landmark: 'Athens',
    roles: 'Agriculture, Hospitality',
    color: 'from-blue-600 to-white',
    image: '/images/greece.jpg',
  },
  {
    name: 'South Korea',
    flag: '🇰🇷',
    landmark: 'Seoul',
    roles: 'Factory, Manufacturing',
    color: 'from-red-500 to-blue-600',
    image: '/images/south-korea.jpg',
  },
  {
    name: 'Croatia',
    flag: '🇭🇷',
    landmark: 'Dubrovnik',
    roles: 'Hospitality, Construction',
    color: 'from-red-600 to-white',
    image: '/images/croatia.jpg',
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
            Work visas processed for top destinations across the Gulf, Europe, and Asia.
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
        <div className="flex items-center gap-1.5 text-ink/50 text-xs mb-2">
          <i className="fas fa-landmark" />
          {c.landmark}
        </div>
        <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-3">
          <i className="fas fa-briefcase" />
          {c.roles}
        </div>
        <a
          href="https://wa.me/923256561112"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cta hover:text-cyan-700 transition-colors"
        >
          <i className="fa-brands fa-whatsapp" />
          Apply Now
        </a>
      </div>
    </div>
  )
}