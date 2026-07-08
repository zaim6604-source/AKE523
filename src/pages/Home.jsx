import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import { countries } from '../data/countries';

const featuredGuides = countries.slice(0, 3);

export default function Home() {
  const featuresRef = useScrollReveal();
  const quoteRef = useScrollReveal();

  return (
    <div className="page-fade">
      {/* Magazine Cover Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#FFF3E0] via-white to-[#FFF3E0] overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#FF1654]/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#FFD400]/10 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-[#FF1654]/30" />
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 rounded-full bg-[#FFD400]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-3xl">
            {/* Masthead line */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#247BA0] font-[Plus+Jakarta+Sans]">
                License 2220/PWR
              </span>
              <span className="w-8 h-px bg-[#247BA0]/30" />
              <span className="text-xs font-medium text-[#247BA0]/60">
                Al-Atique Recruiting Agency
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-[Plus+Jakarta+Sans] text-[#152935] leading-[1.1] mb-6">
              Stories of Work,
              <br />
              <span className="text-[#FF1654]">Written Across Borders</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#152935]/60 max-w-xl mb-8 leading-relaxed">
              From the markets of Thall to the skylines of the Gulf — we connect skilled workers with life-changing opportunities abroad.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="https://wa.me/923005668365?text=Hello%20Al-Atique%2C%20I%20would%20like%20to%20apply%20for%20a%20job."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white bg-[#70C1B3] rounded-full hover:bg-[#5daa9d] hover:shadow-xl hover:shadow-[#70C1B3]/30 transition-all no-underline"
              >
                <i className="fas fa-paper-plane" />
                Start Your Journey
              </a>
              <a
                href="https://wa.me/923005668365"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#247BA0] border-2 border-[#247BA0]/30 rounded-full hover:bg-[#247BA0]/5 transition-all no-underline"
              >
                <i className="fab fa-whatsapp text-lg" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust line */}
            <div className="flex items-center gap-4 mt-10 pt-6 border-t border-[#152935]/10">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF1654] to-[#D60046] flex items-center justify-center text-white text-[10px] font-bold border-2 border-white"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#152935]/50">
                Trusted by <strong className="text-[#152935]">5,000+</strong> workers placed across <strong className="text-[#152935]">9 countries</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section ref={featuresRef} className="reveal py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF1654] font-[Plus+Jakarta+Sans]">
              Destinations
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[Plus+Jakarta+Sans] text-[#152935] mt-2">
              Explore Your Next Chapter
            </h2>
            <p className="text-[#152935]/60 mt-3 leading-relaxed">
              Each country has its own story. Find yours among our featured destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredGuides.map((country) => (
              <Link
                key={country.slug}
                to={`/guides/${country.slug}`}
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#FFF3E0] hover:shadow-xl hover:border-[#FF1654]/20 transition-all no-underline"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={country.hero}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                  <p className="text-sm text-[#152935]/60 mt-1.5 line-clamp-2">
                    {country.headline}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#247BA0] border-2 border-[#247BA0]/20 rounded-full hover:bg-[#247BA0]/5 transition-all no-underline"
            >
              View All Destinations
              <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Quote Band */}
      <section className="py-16 sm:py-20 bg-[#FFF3E0]">
        <div ref={quoteRef} className="reveal max-w-3xl mx-auto px-4 text-center">
          <i className="fas fa-quote-right text-3xl sm:text-4xl text-[#FF1654]/20 mb-4" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold font-[Plus+Jakarta+Sans] text-[#152935] leading-relaxed">
            &ldquo;Every placement is a story — of ambition, courage, and a better life waiting to be written.&rdquo;
          </blockquote>
          <div className="mt-8">
            <a
              href="https://wa.me/923005668365?text=Hello%20Al-Atique%2C%20I%20would%20like%20to%20apply%20for%20a%20job."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-[#FF1654] rounded-full hover:bg-[#D60046] hover:shadow-lg transition-all no-underline"
            >
              <i className="fas fa-pen-fancy" />
              Write Your Story
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}