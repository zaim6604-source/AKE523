import FadeUp from './FadeUp';

const countries = [
  { name: 'Saudi Arabia', tag: 'Construction · Oil & Gas', color: 'bg-primary' },
  { name: 'Qatar', tag: 'Hospitality · Construction', color: 'bg-secondary' },
  { name: 'Oman', tag: 'Muscat · Logistics · Retail', color: 'bg-highlight' },
  { name: 'UAE', tag: 'Dubai · Abu Dhabi · Services', color: 'bg-primary' },
  { name: 'Poland', tag: 'Manufacturing · IT', color: 'bg-secondary' },
  { name: 'Romania', tag: 'Construction · Hospitality', color: 'bg-highlight' },
  { name: 'Greece', tag: 'Tourism · Maritime', color: 'bg-primary' },
  { name: 'South Korea', tag: 'Seoul · Factory · Manufacturing', color: 'bg-secondary' },
  { name: 'Croatia', tag: 'Dubrovnik · Tourism · Hospitality', color: 'bg-highlight' },
];

export default function CountryGuide() {
  return (
    <section id="countries" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="pill-badge bg-primary text-white mb-4 mx-auto" style={{ width: 'fit-content' }}>
            <i className="fas fa-globe" />
            Country Guide
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center leading-tight">
            Destinations We Serve
          </h2>
          <p className="text-ink/60 text-center mt-3 max-w-2xl mx-auto">
            Trusted recruitment corridors to destinations across the Gulf and Europe
          </p>
        </FadeUp>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {countries.map((c, i) => (
            <FadeUp key={c.name} delay={i * 60}>
              <div className="rounded-2xl shadow-lg hover:scale-[1.02] transition-transform overflow-hidden bg-white border border-gray-100">
                {/* Country flag image */}
                <div className="h-40 overflow-hidden">
                  <img
                    src={`/images/country-${c.name === 'Saudi Arabia' ? '0' : c.name === 'Qatar' ? '1' : c.name === 'Oman' ? '2' : c.name === 'UAE' ? '3' : c.name === 'Poland' ? '4' : c.name === 'Romania' ? '5' : c.name === 'Greece' ? '6' : c.name === 'South Korea' ? '7' : '8'}.jpg`}
                    alt={c.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Info */}
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-ink">{c.name}</h3>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {c.tag.split('·').map((t) => (
                      <span key={t} className="bg-background text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                        {t.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden country-scroll mt-8 pb-2">
          {countries.map((c) => (
            <div key={c.name} className="rounded-2xl shadow-lg w-64 shrink-0 bg-white border border-gray-100 overflow-hidden">
              <div className="h-32 overflow-hidden">
                <img
                  src={`/images/country-${c.name === 'Saudi Arabia' ? '0' : c.name === 'Qatar' ? '1' : c.name === 'Oman' ? '2' : c.name === 'UAE' ? '3' : c.name === 'Poland' ? '4' : c.name === 'Romania' ? '5' : c.name === 'Greece' ? '6' : c.name === 'South Korea' ? '7' : '8'}.jpg`}
                  alt={c.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-extrabold text-ink">{c.name}</h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {c.tag.split('·').map((t) => (
                    <span key={t} className="bg-background text-primary text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}