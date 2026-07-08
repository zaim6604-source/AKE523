import { Link } from 'react-router-dom'
import COUNTRIES from '../data/countries'

export default function Countries() {
  return (
    <div className="space-y-10 animate-fade-up pt-6 lg:pt-10">
      <div>
        <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-xs font-semibold rounded-full mb-3 border border-primary/10">
          Destinations
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mb-4">
          Countries We Serve
        </h1>
        <p className="text-ink/60 leading-relaxed max-w-3xl">
          We recruit for top employers across the Middle East, Europe, and Asia.
          Click a country to explore available roles and requirements.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {COUNTRIES.map(({ slug, name, flag, landmark, image, description }) => (
          <Link
            key={slug}
            to={`/countries/${slug}`}
            className="group block bg-white rounded-2xl overflow-hidden border border-ink/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden bg-ink/5">
              <img
                src={image}
                alt={landmark}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-primary/10 to-cta/10">
                <i className="fas fa-image text-3xl text-ink/20" />
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{flag}</span>
                <h3 className="font-bold text-ink">{name}</h3>
              </div>
              <p className="text-xs text-ink/50 line-clamp-2">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}