import SERVICES from '../data/services'

export default function Services() {
  return (
    <div className="space-y-10 animate-fade-up pt-6 lg:pt-10">
      <div>
        <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-xs font-semibold rounded-full mb-3 border border-primary/10">
          Our Services
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mb-4">
          What We Offer
        </h1>
        <p className="text-ink/60 leading-relaxed max-w-3xl">
          Comprehensive recruitment and support services designed to make your
          overseas employment journey smooth, transparent, and successful.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {SERVICES.map(({ id, title, desc, icon, color }) => (
          <div key={id} className="flip-card h-64 group">
            <div className="flip-card-inner h-full">
              {/* Front */}
              <div
                className="flip-card-front rounded-2xl p-6 flex flex-col justify-center items-center text-center border"
                style={{ backgroundColor: color, borderColor: color }}
              >
                <i className={`fas ${icon} text-4xl text-white mb-4`} />
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="text-xs text-white/70 mt-2">Hover to learn more</p>
              </div>
              {/* Back */}
              <div
                className="flip-card-back rounded-2xl p-6 flex flex-col justify-center items-center text-center text-white border"
                style={{ backgroundColor: color, borderColor: color }}
              >
                <i className={`fas ${icon} text-2xl text-white/40 mb-3`} />
                <p className="text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}