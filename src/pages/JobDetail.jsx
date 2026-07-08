import { useParams, Link } from 'react-router-dom';
import { countries } from '../data/countries';

export default function GuideDetail() {
  const { slug } = useParams();
  const country = countries.find((c) => c.slug === slug);

  if (!country) {
    return (
      <div className="page-fade min-h-[60vh] flex items-center justify-center bg-[#FFF3E0]">
        <div className="text-center px-4">
          <i className="fas fa-map-marked-alt text-5xl text-[#FF1654] mb-4" />
          <h1 className="text-2xl font-bold font-[Plus+Jakarta+Sans] text-[#152935] mb-2">Guide Not Found</h1>
          <p className="text-sm text-[#152935]/60 mb-6">We don&apos;t have a guide for this destination yet.</p>
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#FF1654] rounded-full hover:bg-[#D60046] transition-all no-underline"
          >
            <i className="fas fa-arrow-left" />
            Back to Guides
          </Link>
        </div>
      </div>
    );
  }

  const waText = `Hello Al-Atique! I am interested in working in ${country.name}. Please guide me about the opportunities.`;

  return (
    <div className="page-fade">
      {/* Hero Image */}
      <section className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        <img
          src={country.hero}
          alt={country.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('img-fallback');
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#152935]/80 via-[#152935]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-7xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFD400] font-[Plus+Jakarta+Sans]">
              {country.region}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-[Plus+Jakarta+Sans] text-white mt-2">
              {country.name}
            </h1>
            <p className="text-base sm:text-lg text-white/80 mt-1">{country.headline}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Quick Info */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="chip bg-[#FFF3E0]">
              <i className="fas fa-map-pin text-[#FF1654]" /> {country.capital}
            </div>
            <div className="chip bg-[#FFF3E0]">
              <i className="fas fa-language text-[#FF1654]" /> {country.language}
            </div>
            <div className="chip bg-[#FFF3E0]">
              <i className="fas fa-money-bill-wave text-[#FF1654]" /> {country.currency}
            </div>
            <div className="chip bg-[#FFF3E0]">
              <i className="fas fa-clock text-[#FF1654]" /> {country.timezone}
            </div>
          </div>

          {/* Intro */}
          <div className="prose prose-sm sm:prose-base max-w-none mb-10">
            <p className="text-base sm:text-lg text-[#152935]/70 leading-relaxed">
              {country.intro}
            </p>
          </div>

          {/* Salary range */}
          <div className="bg-[#70C1B3]/10 border border-[#70C1B3]/20 rounded-2xl p-5 sm:p-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#70C1B3] flex items-center justify-center text-white">
                <i className="fas fa-hand-holding-usd" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#70C1B3] font-[Plus+Jakarta+Sans]">
                  Typical Salary Range
                </span>
                <p className="text-base sm:text-lg font-bold font-[Plus+Jakarta+Sans] text-[#152935]">
                  {country.salaryRange}
                </p>
              </div>
            </div>
          </div>

          {/* Common Roles */}
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF1654] font-[Plus+Jakarta+Sans]">
              In-Demand Roles
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-[Plus+Jakarta+Sans] text-[#152935] mt-2 mb-4">
              Jobs We Recruit For in {country.name}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {country.roles.map((role, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#FFF3E0]">
                  <div className="w-8 h-8 rounded-lg bg-[#FF1654]/10 flex items-center justify-center text-[#FF1654] flex-shrink-0">
                    <i className="fas fa-check text-xs" />
                  </div>
                  <span className="text-sm font-medium text-[#152935]">{role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Life There */}
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#247BA0] font-[Plus+Jakarta+Sans]">
              Life & Culture
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-[Plus+Jakarta+Sans] text-[#152935] mt-2 mb-4">
              What to Know About Life in {country.name}
            </h2>

            {/* Pull quote style note */}
            <div className="pull-quote text-base sm:text-lg">
              Everything you need to know before you arrive.
            </div>

            <ul className="space-y-3 mt-6">
              {country.lifeNotes.map((note, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#152935]/70">
                  <i className="fas fa-circle text-[6px] text-[#FF1654] mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#FF1654] to-[#D60046] rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold font-[Plus+Jakarta+Sans] text-white mb-2">
              Ready to Work in {country.name}?
            </h3>
            <p className="text-sm text-white/80 mb-6 max-w-md mx-auto">
              Take the first step. Send us a message on WhatsApp and we&apos;ll guide you through the process.
            </p>
            <a
              href={`https://wa.me/923005668365?text=${encodeURIComponent(waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-[#152935] bg-[#FFD400] rounded-full hover:bg-[#e6bf00] hover:shadow-lg transition-all no-underline"
            >
              <i className="fab fa-whatsapp" />
              Apply Now via WhatsApp
            </a>
          </div>

          {/* Back link */}
          <div className="mt-8 text-center">
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#247BA0] hover:underline no-underline"
            >
              <i className="fas fa-arrow-left text-xs" />
              Back to All Country Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
