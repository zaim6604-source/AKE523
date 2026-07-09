import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import { countries } from '../data/countries';

const regionColors = {
  'Middle East': { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-400' },
  'Europe': { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-400' },
  'Asia': { bg: 'bg-green-50', text: 'text-green-700', dot: 'bg-green-400' },
};

export default function Guides() {
  const revealRef = useScrollReveal();

  return (
    <div>
      {/* Header */}
      <section className="hero-gradient pt-12 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00F5D4] font-[Plus Jakarta Sans]">
            Country Guides
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-[Plus Jakarta Sans] text-white mt-3 mb-3">
            Your Destination Awaits
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
            Detailed guides to every country we recruit for — including roles, salaries, and life on the ground.
          </p>
        </div>
      </section>

      {/* Country Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={revealRef} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {countries.map((country) => {
              const rc = regionColors[country.region] || { bg: 'bg-gray-50', text: 'text-gray-700', dot: 'bg-gray-400' };
              return (
                <Link
                  key={country.slug}
                  to={`/guides/${country.slug}`}
                  className="guide-card group rounded-2xl overflow-hidden bg-white border border-pink-100 hover:shadow-xl hover:border-[#FF3CAC]/20 no-underline"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('img-fallback');
                      }}
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${rc.bg} ${rc.text}`}>
                        {country.region}
                      </span>
                      <span className="text-xs text-[#1A0A1E]/40">{country.currency}</span>
                    </div>
                    <h3 className="text-xl font-bold font-[Plus Jakarta Sans] text-[#1A0A1E] group-hover:text-[#FF3CAC] transition-colors mb-2">
                      {country.name}
                    </h3>
                    <p className="text-sm text-[#1A0A1E]/60 leading-relaxed mb-2">
                      {country.headline}
                    </p>
                    <p className="text-xs text-[#1A0A1E]/50 line-clamp-2">
                      {country.intro}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[#FF3CAC] group-hover:gap-2.5 transition-all">
                      Read Guide
                      <i className="fas fa-arrow-right text-xs" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}