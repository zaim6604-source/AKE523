import { useParams, Link } from 'react-router-dom'
import COUNTRIES from '../data/countries'

export default function CountryDetail() {
  const { slug } = useParams()
  const country = COUNTRIES.find((c) => c.slug === slug)

  if (!country) {
    return (
      <div className="text-center py-20 animate-fade-up pt-6 lg:pt-10">
        <i className="fas fa-map-marked-alt text-5xl text-ink/20 mb-4" />
        <h2 className="text-2xl font-bold text-ink mb-2">Country Not Found</h2>
        <p className="text-ink/50 mb-6">We don't currently have listings for this destination.</p>
        <Link
          to="/countries"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          <i className="fas fa-arrow-left" />
          Back to Countries
        </Link>
      </div>
    )
  }

  const whatsappMsg = encodeURIComponent(
    `Hello Al-Bassami! I'm interested in opportunities in ${country.name}. Please share details about available roles and the application process.`
  )
  const whatsappUrl = `https://wa.me/923215344448?text=${whatsappMsg}`

  return (
    <div className="space-y-8 animate-fade-up pt-6 lg:pt-10">
      {/* Breadcrumb */}
      <div className="text-xs text-ink/40 flex items-center gap-2">
        <Link to="/countries" className="hover:text-primary transition-colors">Countries</Link>
        <span>/</span>
        <span className="text-ink/60">{country.name}</span>
      </div>

      {/* Header */}
      <div className="flex items-start gap-4">
        <span className="text-5xl">{country.flag}</span>
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink">{country.name}</h1>
          <p className="text-ink/40 text-sm mt-1">
            <i className="fas fa-landmark mr-1" />
            {country.landmark}
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="rounded-2xl overflow-hidden aspect-video bg-ink/5">
        <img
          src={country.image}
          alt={country.landmark}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-primary/10 to-cta/10">
          <i className="fas fa-image text-4xl text-ink/20" />
        </div>
      </div>

      {/* Description */}
      <p className="text-ink/60 leading-relaxed">{country.description}</p>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Available Roles */}
        <div className="bg-white rounded-2xl p-6 border border-ink/5 shadow-sm">
          <h2 className="font-bold text-ink mb-4 flex items-center gap-2">
            <i className="fas fa-briefcase text-primary" />
            Available Roles
          </h2>
          <ul className="space-y-2">
            {country.roles.map((role) => (
              <li key={role} className="flex items-center gap-2 text-sm text-ink/70">
                <i className="fas fa-check text-primary text-xs" />
                {role}
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-2xl p-6 border border-ink/5 shadow-sm">
          <h2 className="font-bold text-ink mb-4 flex items-center gap-2">
            <i className="fas fa-clipboard-list text-secondary" />
            Requirements
          </h2>
          <ul className="space-y-2">
            {country.requirements.map((req) => (
              <li key={req} className="flex items-start gap-2 text-sm text-ink/70">
                <i className="fas fa-circle text-[6px] text-secondary mt-1.5" />
                {req}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Processing Time & CTA */}
      <div className="bg-gradient-to-br from-primary/5 to-cta/5 rounded-2xl p-6 sm:p-8 border border-primary/10 text-center">
        <div className="text-sm text-ink/50 mb-2">
          <i className="far fa-clock mr-1" />
          Estimated Processing Time
        </div>
        <div className="text-2xl font-extrabold text-primary mb-5">
          {country.processingTime}
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cta hover:bg-cta/90 text-white text-sm font-semibold transition-all shadow-lg shadow-cta/20"
        >
          <i className="fab fa-whatsapp text-lg" />
          Apply for {country.name}
        </a>
      </div>
    </div>
  )
}