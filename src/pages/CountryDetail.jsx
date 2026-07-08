import { useParams, Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { countries } from '../data/countries';

const countryMeta = {
  'saudi-arabia': { flag: '🇸🇦' },
  'uae': { flag: '🇦🇪' },
  'qatar': { flag: '🇶🇦' },
  'oman': { flag: '🇴🇲' },
  'kuwait': { flag: '🇰🇼' },
  'germany': { flag: '🇩🇪' },
  'malaysia': { flag: '🇲🇾' },
  'romania': { flag: '🇷🇴' },
  'turkey': { flag: '🇹🇷' },
};

export default function CountryDetail() {
  const { slug } = useParams();
  const country = countries.find((c) => c.slug === slug);
  const meta = countryMeta[slug] || { flag: '🌍' };

  if (!country) {
    return (
      <div className="page-transition max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-accent)' }}>Country Not Found</h1>
        <p className="mb-8" style={{ color: 'var(--color-ink-light)' }}>The destination you are looking for does not exist.</p>
        <Link
          to="/countries"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all"
          style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
        >
          <i className="fas fa-arrow-left" />
          View All Countries
        </Link>
      </div>
    );
  }

  const applyText = encodeURIComponent(
    `Hello Rais Brothers! I'm interested in applying for employment in ${country.name}. Please provide me with more information about available opportunities in ${country.headline}.`
  );

  return (
    <div className="page-transition">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={country.image}
          alt={country.name}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3">
                <span className="text-4xl">{meta.flag}</span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">{country.name}</h1>
              </div>
              <p className="text-lg text-white/70 mt-2">{country.headline}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Main */}
          <div className="md:col-span-2 space-y-10">
            {/* Description */}
            <FadeIn>
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-accent)' }}>Overview</h2>
                <p className="leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>{country.description}</p>
              </div>
            </FadeIn>

            {/* In-Demand Roles */}
            <FadeIn delay={1}>
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-accent)' }}>In-Demand Roles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {country.roles.map((role) => (
                    <div key={role} className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: 'rgba(225, 6, 0, 0.04)', border: '1px solid rgba(225, 6, 0, 0.1)' }}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(225, 6, 0, 0.08)' }}>
                        <i className="fas fa-check text-xs" style={{ color: 'var(--color-primary)' }} />
                      </div>
                      <span className="text-sm font-medium" style={{ color: 'var(--color-ink)' }}>{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Requirements */}
            <FadeIn delay={2}>
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-accent)' }}>Requirements</h2>
                <ul className="space-y-3">
                  {country.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3">
                      <i className="fa-solid fa-circle-check mt-1" style={{ color: 'var(--color-primary)' }} />
                      <span style={{ color: 'var(--color-ink-light)' }}>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div>
            <FadeIn delay={1}>
              <div className="sticky top-24 bg-white rounded-2xl shadow-lg border p-6" style={{ borderColor: 'rgba(225, 6, 0, 0.1)' }}>
                <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-accent)' }}>
                  Apply for {country.name}
                </h3>
                <p className="text-sm mb-6" style={{ color: 'var(--color-ink-light)' }}>
                  Ready to start your journey? Apply now and our team will guide you through the process.
                </p>
                <a
                  href={`https://wa.me/923009219780?text=${applyText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all mb-3"
                  style={{ backgroundColor: 'var(--color-cta)', color: 'var(--color-accent)' }}
                >
                  <i className="fab fa-whatsapp" />
                  Apply via WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold border-2 transition-all"
                  style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
                >
                  <i className="fa-regular fa-paper-plane" />
                  Contact Form
                </Link>
                <div className="mt-6 pt-4 border-t" style={{ borderColor: 'rgba(225, 6, 0, 0.1)' }}>
                  <Link to="/countries" className="text-sm font-medium flex items-center gap-1" style={{ color: 'var(--color-primary)' }}>
                    <i className="fas fa-arrow-left" />
                    Back to all countries
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}