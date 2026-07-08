import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import countries from '../assets/countries';

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

export default function Guides() {
  return (
    <div className="page-enter-active">
      <section className="bg-background pt-12 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="pill-badge bg-primary text-white mb-6 mx-auto" style={{ width: 'fit-content' }}>
              <i className="fas fa-globe" />
              Country Guides
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-ink text-center leading-tight max-w-4xl mx-auto">
              Explore Destinations{' '}
              <span className="text-primary">We Serve</span>
            </h1>
            <p className="text-ink/60 text-center mt-4 max-w-2xl mx-auto editorial-body">
              In-depth guides to every country where we place workers — from the Gulf to Europe and Asia
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-16 md:pb-24 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((c, i) => (
              <FadeUp key={c.slug} delay={i * 60}>
                <Link to={`/guides/${c.slug}`} className="block article-card rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100">
                  <div className="h-44 overflow-hidden">
                    <img
                      src={getCountryImage(c.name)}
                      alt={c.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = 'linear-gradient(135deg, #D7263D, #B3001B)';
                        e.target.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:white;font-size:3rem;font-weight:800">${c.flag}</div>`;
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{c.flag}</span>
                      <h3 className="text-lg font-extrabold text-ink">{c.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {c.roles.slice(0, 3).map((r) => (
                        <span key={r} className="bg-background text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                          {r}
                        </span>
                      ))}
                      <span className="bg-background text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                        +{c.roles.length - 3} more
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-cta font-bold mt-4">
                      Read Guide <i className="fas fa-arrow-right text-[10px]" />
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}