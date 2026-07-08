import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import FadeUp from '../components/FadeUp'
import { getCountryBySlug } from '../assets/countries'

const WA_NUMBER = '923338608944'

function CountryHero({ country }) {
  const [error, setError] = useState(false)
  const src = `/images/countries/${country.slug}.jpg`

  return (
    <div className="dashboard-card p-0 overflow-hidden relative">
      {!error ? (
        <img
          src={src}
          alt={country.name}
          className="w-full h-48 sm:h-56 object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <div className={`w-full h-48 sm:h-56 bg-gradient-to-br ${country.color}`} />
      )}
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <Link
          to="/destinations"
          className="inline-flex items-center gap-1 text-xs font-semibold text-white/70 hover:text-white mb-3 transition-colors"
        >
          <i className="fas fa-arrow-left text-[10px]" />
          Back to Destinations
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-5xl">{country.flag}</span>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{country.name}</h1>
            <p className="text-white/70 text-sm mt-1">Work opportunities & requirements</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DestinationDetail() {
  const { slug } = useParams()
  const country = getCountryBySlug(slug)

  if (!country) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center dashboard-card">
          <div className="text-6xl font-extrabold text-primary/20">404</div>
          <h1 className="text-xl font-extrabold text-ink mt-3">Country Not Found</h1>
          <p className="text-ink/60 text-sm mt-1">The destination you're looking for doesn't exist.</p>
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 mt-5 bg-primary text-white font-bold px-5 py-2.5 rounded-full text-sm hover:brightness-110 transition-all"
          >
            <i className="fas fa-arrow-left" /> Back to Destinations
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Hero Card */}
      <FadeUp>
        <CountryHero country={country} />
      </FadeUp>

      {/* Quick Info Cards */}
      <FadeUp delay={100}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="dashboard-card text-center">
            <div className="text-xs font-semibold text-ink/50 uppercase tracking-wider">Salary Range</div>
            <div className="text-sm font-extrabold text-primary mt-1">{country.salary}</div>
          </div>
          <div className="dashboard-card text-center">
            <div className="text-xs font-semibold text-ink/50 uppercase tracking-wider">Visa Type</div>
            <div className="text-sm font-extrabold text-primary mt-1">{country.visa}</div>
          </div>
          <div className="dashboard-card text-center">
            <div className="text-xs font-semibold text-ink/50 uppercase tracking-wider">Roles Available</div>
            <div className="text-sm font-extrabold text-primary mt-1">{country.roles.length}</div>
          </div>
        </div>
      </FadeUp>

      {/* Working in country */}
      <FadeUp delay={150}>
        <div className="dashboard-card">
          <h2 className="text-lg font-extrabold text-ink mb-3">
            <i className="fas fa-info-circle text-primary mr-2" />
            Working in {country.name}
          </h2>
          <p className="text-sm leading-relaxed text-ink/60">{country.life}</p>
        </div>
      </FadeUp>

      {/* Available Roles */}
      <FadeUp delay={200}>
        <div className="dashboard-card">
          <h2 className="text-lg font-extrabold text-ink mb-3">
            <i className="fas fa-briefcase text-primary mr-2" />
            Available Roles
          </h2>
          <div className="flex flex-wrap gap-2">
            {country.roles.map((r) => (
              <span key={r} className="bg-background text-primary text-sm font-semibold px-3.5 py-1.5 rounded-full">
                {r}
              </span>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* Apply CTA */}
      <FadeUp delay={250}>
        <div className="dashboard-card bg-gradient-to-r from-primary via-secondary to-highlight text-white text-center p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-extrabold">
            Ready to Work in {country.name}?
          </h3>
          <p className="text-white/85 mt-2 text-sm">
            Send us a message on WhatsApp and we'll help you take the first step
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%20Kotli%20Associates%2C%20I%27m%20interested%20in%20working%20in%20${encodeURIComponent(country.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cta text-ink font-extrabold px-7 py-3 rounded-full text-sm hover:brightness-110 transition-all shadow-lg mt-5"
          >
            <i className="fab fa-whatsapp" />
            Apply for {country.name}
          </a>
        </div>
      </FadeUp>
    </div>
  )
}