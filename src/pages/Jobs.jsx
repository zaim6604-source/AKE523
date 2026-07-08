import { Link } from 'react-router-dom';
import { countries } from '../data/countries';

export default function Guides() {
  return (
    <div className="page-fade">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#FF1654] to-[#D60046] pt-12 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFD400] font-[Plus+Jakarta+Sans]">
            Country Guides
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-[Plus+Jakarta+Sans] text-white mt-3 mb-3">
            Explore Your Next Destination
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
            In-depth guides to the countries we recruit for — with roles, salaries, and local insights.
          </p>
        </div>
      </section>

      {/* Country Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {countries.map((country) => (
              <Link
                key={country.slug}
                to={`/guides/${country.slug}`}
                className="group rounded-2xl overflow-hidden bg-white border border-[#FFF3E0] hover:shadow-xl hover:border-[#FF1654]/20 transition-all no-underline"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={country.hero}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('img-fallback');
                    }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="pill-badge bg-[#FF1654]/10 text-[#FF1654]">
                      {country.region}
                    </span>
                    <span className="text-xs text-[#152935]/40">{country.currency}</span>
                  </div>
                  <h3 className="text-lg font-bold font-[Plus+Jakarta+Sans] text-[#152935] group-hover:text-[#FF1654] transition-colors">
                    {country.name}
                  </h3>
                  <p className="text-sm text-[#152935]/60 mt-1.5 line-clamp-2 leading-relaxed">
                    {country.headline}
                  </p>
                  <div className="mt-3 pt-3 border-t border-[#FFF3E0] flex items-center justify-between">
                    <span className="text-xs font-medium text-[#247BA0]">{country.capital}</span>
                    <span className="text-xs font-semibold text-[#70C1B3] group-hover:underline">
                      Read Guide <i className="fas fa-arrow-right ml-1 text-[10px]" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
