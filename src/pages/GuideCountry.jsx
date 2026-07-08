import { useParams, Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import { getCountryBySlug } from '../assets/countries';

const WA_NUMBER = '923015445751';

function getCountryImage(name) {
  const map = {
    'Saudi Arabia': '/images/guide-saudi.jpg',
    'UAE': '/images/guide-uae.jpg',
    'Qatar': '/images/guide-qatar.jpg',
    'Oman': '/images/guide-oman.jpg',
    'Germany': '/images/guide-germany.jpg',
    'Poland': '/images/guide-poland.jpg',
    'Greece': '/images/guide-greece.jpg',
    'Croatia': '/images/guide-croatia.jpg',
    'Malaysia': '/images/guide-malaysia.jpg',
  };
  return map[name] || '';
}

export default function GuideCountry() {
  const { slug } = useParams();
  const country = getCountryBySlug(slug);

  if (!country) {
    return (
      <div className="page-enter-active min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-ink">Country Not Found</h1>
          <p className="text-ink/60 mt-2">The guide you're looking for doesn't exist.</p>
          <Link to="/guides" className="inline-flex items-center gap-2 mt-6 bg-primary text-white font-bold px-6 py-3 rounded-full text-sm hover:brightness-110 transition-all">
            <i className="fas fa-arrow-left" /> Back to Guides
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-enter-active">
      {/* ── Hero image ── */}
      <section className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
        <img
          src={getCountryImage(country.name)}
          alt={country.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = `linear-gradient(135deg, var(--color-primary), var(--color-highlight))`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-7xl mx-auto">
            <FadeUp>
              <span className="text-4xl sm:text-5xl">{country.flag}</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2">
                {country.name}
              </h1>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Article content ── */}
      <section className="py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-gray-100">
              {/* Quick info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-background rounded-xl p-4 text-center">
                  <div className="text-xs font-semibold text-ink/50 uppercase tracking-wider">Salary Range</div>
                  <div className="text-sm font-extrabold text-ink mt-1">{country.salary}</div>
                </div>
                <div className="bg-background rounded-xl p-4 text-center">
                  <div className="text-xs font-semibold text-ink/50 uppercase tracking-wider">Visa Type</div>
                  <div className="text-sm font-extrabold text-ink mt-1">{country.visa}</div>
                </div>
                <div className="bg-background rounded-xl p-4 text-center">
                  <div className="text-xs font-semibold text-ink/50 uppercase tracking-wider">Roles Available</div>
                  <div className="text-sm font-extrabold text-ink mt-1">{country.roles.length}</div>
                </div>
              </div>

              {/* Life there */}
              <h2 className="text-xl sm:text-2xl font-extrabold text-ink mb-3">
                <i className="fas fa-info-circle text-primary mr-2" />
                Working in {country.name}
              </h2>
              <div className="editorial-body">
                <p>{country.life}</p>
              </div>

              {/* Roles */}
              <h2 className="text-xl sm:text-2xl font-extrabold text-ink mt-8 mb-3">
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

              {/* Apply CTA */}
              <div className="mt-10 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-6 sm:p-8 text-center shadow-xl">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Ready to Work in {country.name}?
                </h3>
                <p className="text-white/85 mt-2 text-sm">
                  Send us a message on WhatsApp and we'll help you take the first step
                </p>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Hi%20Al%20Asad%20International%2C%20I%27m%20interested%20in%20working%20in%20${encodeURIComponent(country.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cta text-white font-extrabold px-7 py-3.5 rounded-full text-base hover:brightness-110 transition-all shadow-lg mt-5"
                >
                  <i className="fab fa-whatsapp" />
                  Apply for {country.name}
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}