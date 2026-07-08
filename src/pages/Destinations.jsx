import { Link } from 'react-router-dom'
import { useState } from 'react'
import FadeUp from '../components/FadeUp'
import countries from '../assets/countries'

function CountryImage({ slug, name, className }) {
  const [error, setError] = useState(false)
  const src = `/images/countries/${slug}.jpg`
  const country = countries.find(c => c.slug === slug)

  if (error) {
    return (
      <div className={`${className} bg-gradient-to-br ${country?.color || 'from-primary to-highlight'} flex items-center justify-center`}>
        <span className="text-5xl">{country?.flag || '🌍'}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={name}
      className={className}
      loading="lazy"
      onError={() => setError(true)}
    />
  )
}

export default function Destinations() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <FadeUp>
        <div className="dashboard-card">
          <div className="pill-badge bg-primary text-white mb-4">
            <i className="fas fa-globe" />
            Destinations
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-ink leading-tight">
            Explore Destinations{' '}
            <span className="text-primary">We Serve</span>
          </h1>
          <p className="text-ink/60 mt-2 max-w-2xl">
            In-depth guides to every country where we place workers — from the Gulf to Europe
          </p>
        </div>
      </FadeUp>

      {/* Country Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {countries.map((c, i) => (
          <FadeUp key={c.slug} delay={i * 60}>
            <Link to={`/destinations/${c.slug}`} className="block">
              <div className="dashboard-card p-0 overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all group">
                {/* Country photo */}
                <CountryImage
                  slug={c.slug}
                  name={c.name}
                  className="h-32 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-ink group-hover:text-primary transition-colors">
                    {c.name}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {c.roles.slice(0, 3).map((r) => (
                      <span key={r} className="bg-background text-primary text-[11px] font-semibold px-2.5 py-1 rounded-full">
                        {r}
                      </span>
                    ))}
                    {c.roles.length > 3 && (
                      <span className="bg-background text-primary text-[11px] font-semibold px-2.5 py-1 rounded-full">
                        +{c.roles.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-cta font-bold mt-4">
                    View Details <i className="fas fa-arrow-right text-[10px]" />
                  </div>
                </div>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </div>
  )
}