import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { countries } from '../data/countries';

const countryMeta = {
  'saudi-arabia': { flag: '\u{1F1F8}\u{1F1E6}', tags: ['Construction', 'Oil & Gas', 'Hospitality'] },
  'uae': { flag: '\u{1F1E6}\u{1F1EA}', tags: ['Construction', 'Hospitality', 'Logistics'] },
  'qatar': { flag: '\u{1F1F6}\u{1F1E6}', tags: ['Construction', 'Energy', 'Hospitality'] },
  'oman': { flag: '\u{1F1F4}\u{1F1F2}', tags: ['Construction', 'Tourism', 'Transport'] },
  'germany': { flag: '\u{1F1E9}\u{1F1EA}', tags: ['Healthcare', 'Engineering', 'IT'] },
  'poland': { flag: '\u{1F1F5}\u{1F1F1}', tags: ['Manufacturing', 'Logistics', 'Construction'] },
  'romania': { flag: '\u{1F1F7}\u{1F1F4}', tags: ['Manufacturing', 'Logistics', 'Construction'] },
  'greece': { flag: '\u{1F1EC}\u{1F1F7}', tags: ['Tourism', 'Hospitality', 'Agriculture'] },
  'malaysia': { flag: '\u{1F1F2}\u{1F1FE}', tags: ['Manufacturing', 'IT', 'Hospitality'] },
};

export default function Countries() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="pt-24 pb-16 md:pb-20" style={{ backgroundColor: '#006D77' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFDD00' }}>
              <i className="fa-solid fa-globe" />
              Destinations
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>Our Destinations</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Explore employment opportunities in our partner countries across the Gulf, Europe, and Asia.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Country Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((c, i) => {
            const meta = countryMeta[c.slug] || { flag: '\u{1F30D}', tags: [] };
            return (
              <FadeIn key={c.slug} delay={Math.min(i + 1, 6)}>
                <Link
                  to={`/countries/${c.slug}`}
                  className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white border"
                  style={{ borderColor: '#83C5BE30' }}
                >
                  <div className="img-hover-zoom h-48">
                    <img src={c.image} alt={c.name} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{meta.flag}</span>
                      <h3 className="text-xl font-bold" style={{ color: '#003844' }}>{c.name}</h3>
                    </div>
                    <p className="text-sm leading-relaxed mb-3 line-clamp-2" style={{ color: '#006D77' }}>{c.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {meta.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: '#006D7710', color: '#006D77' }}>{t}</span>
                      ))}
                      <span className="text-xs px-2 py-1 rounded-full font-semibold text-white" style={{ backgroundColor: '#E29578' }}>Hiring</span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Quick Browse */}
      <section className="py-12" style={{ backgroundColor: '#EDF6F9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h3 className="text-lg font-bold mb-6" style={{ color: '#003844' }}>Quick Browse</h3>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-3">
            {countries.map((c, i) => {
              const meta = countryMeta[c.slug] || { flag: '\u{1F30D}' };
              return (
                <FadeIn key={c.slug} delay={Math.min(i + 1, 5)}>
                  <Link
                    to={`/countries/${c.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border transition-all hover:shadow text-sm font-medium"
                    style={{ borderColor: '#83C5BE', color: '#003844' }}
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
