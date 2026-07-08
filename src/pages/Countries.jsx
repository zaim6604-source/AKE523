import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { countries } from '../data/countries';

const countryMeta = {
  'saudi-arabia': { flag: '🇸🇦', tags: ['Construction', 'Oil & Gas', 'Hospitality'] },
  'uae': { flag: '🇦🇪', tags: ['Construction', 'Hospitality', 'Logistics'] },
  'qatar': { flag: '🇶🇦', tags: ['Construction', 'Energy', 'Hospitality'] },
  'oman': { flag: '🇴🇲', tags: ['Construction', 'Tourism', 'Transport'] },
  'kuwait': { flag: '🇰🇼', tags: ['Construction', 'Oil & Gas', 'Drivers'] },
  'germany': { flag: '🇩🇪', tags: ['Healthcare', 'Engineering', 'IT'] },
  'malaysia': { flag: '🇲🇾', tags: ['Manufacturing', 'IT', 'Hospitality'] },
  'romania': { flag: '🇷🇴', tags: ['Manufacturing', 'Logistics', 'Construction'] },
  'turkey': { flag: '🇹🇷', tags: ['Construction', 'Hospitality', 'Manufacturing'] },
};

export default function Countries() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="pt-24 pb-16 md:pb-20" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'var(--color-cta)' }}>
              <i className="fa-solid fa-globe" />
              Destinations
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Our Destinations</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Explore employment opportunities in our partner countries across the Gulf and Europe.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Country Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((c, i) => {
            const meta = countryMeta[c.slug] || { flag: '🌍', tags: [] };
            return (
              <FadeIn key={c.slug} delay={Math.min(i + 1, 6)}>
                <Link
                  to={`/countries/${c.slug}`}
                  className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white border"
                  style={{ borderColor: 'rgba(225, 6, 0, 0.08)' }}
                >
                  <div className="img-hover-zoom h-48">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{meta.flag}</span>
                      <h3 className="text-xl font-bold" style={{ color: 'var(--color-accent)' }}>{c.name}</h3>
                    </div>
                    <p className="text-sm leading-relaxed mb-3 line-clamp-2" style={{ color: 'var(--color-ink-light)' }}>
                      {c.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {meta.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: 'rgba(225, 6, 0, 0.06)', color: 'var(--color-primary)' }}>
                          {t}
                        </span>
                      ))}
                      <span className="text-xs px-2 py-1 rounded-full font-semibold" style={{ backgroundColor: 'var(--color-cta)', color: 'var(--color-accent)' }}>
                        Hiring
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Quick Browse */}
      <section className="py-12" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--color-accent)' }}>Quick Browse</h3>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-3">
            {countries.map((c, i) => {
              const meta = countryMeta[c.slug] || { flag: '🌍' };
              return (
                <FadeIn key={c.slug} delay={Math.min(i + 1, 5)}>
                  <Link
                    to={`/countries/${c.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border transition-all hover:shadow text-sm font-medium"
                    style={{ borderColor: 'rgba(225, 6, 0, 0.15)', color: 'var(--color-ink)' }}
                  >
                    <span>{meta.flag}</span>
                    {c.name}
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}