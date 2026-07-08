import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import { countries } from '../data/countries';

const featuredGuides = countries.slice(0, 3);

export default function Home() {
  const featuresRef = useScrollReveal();
  const quoteRef = useScrollReveal();

  return (
    <div>
      {/* Magazine Cover Hero */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#0496FF]/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#FFBE0B]/5 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#FB5607]/5 blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 w-full">
          <div className="max-w-3xl">
            {/* Masthead line */}
            <div className="hero-masthead pb-4 mb-8 inline-block">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFBE0B] font-[Plus Jakarta Sans]">
                  License 2282/RWP
                </span>
                <span className="w-8 h-px bg-[#FFBE0B]/50" />
                <span className="text-xs font-medium text-[#FFBE0B]/70">
                  Govt. Registered
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-[Plus Jakarta Sans] text-white leading-[1.1] mb-6">
              Recruitment You
              <br />
              <span className="text-[#FFBE0B]">Can Rely On</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-xl mb-8 leading-relaxed">
              From the streets of Rawalpindi to the skylines of the Gulf and Europe — we connect skilled workers with life-changing opportunities abroad.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="https://wa.me/923158547604?text=Hello%20Reliance%20Overseas%2C%20I%20would%20like%20to%20apply%20for%20a%20job."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white bg-[#FB5607] rounded-full hover:bg-[#e04e06] hover:shadow-xl hover:shadow-[#FB5607]/30 transition-all no-underline"
              >
                <i className="fas fa-paper-plane" />
                Start Your Journey
              </a>
              <a
                href="https://wa.me/923158547604"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all no-underline"
              >
                <i className="fab fa-whatsapp text-lg" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust line */}
            <div className="flex items-center gap-4 mt-10 pt-6 border-t border-white/10">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0496FF] to-[#0077CC] flex items-center justify-center text-white text-[10px] font-bold border-2 border-[#062A45]"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-white/50">
                Trusted by <strong className="text-white">thousands</strong> of workers placed across <strong className="text-white">9 countries</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section ref={featuresRef} className="reveal py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0496FF] font-[Plus Jakarta Sans]">
              Destinations
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[Plus Jakarta Sans] text-[#062A45] mt-2">
              Explore Your Next Chapter
            </h2>
            <p className="text-[#062A45]/60 mt-3 leading-relaxed">
              Each country has its own story. Find yours among our featured destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredGuides.map((country) => (
              <Link
                key={country.slug}
                to={`/guides/${country.slug}`}
                className="group guide-card relative rounded-2xl overflow-hidden bg-white border border-blue-100 hover:shadow-xl hover:border-[#0496FF]/20 no-underline"
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
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0496FF] bg-blue-50 px-2.5 py-1 rounded-full">
                      {country.region}
                    </span>
                    <span className="text-xs text-[#062A45]/40">{country.currency}</span>
                  </div>
                  <h3 className="text-lg font-bold font-[Plus Jakarta Sans] text-[#062A45] group-hover:text-[#0496FF] transition-colors">
                    {country.name}
                  </h3>
                  <p className="text-sm text-[#062A45]/60 mt-1.5 line-clamp-2">
                    {country.headline}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#0496FF] border-2 border-[#0496FF]/20 rounded-full hover:bg-blue-50 transition-all no-underline"
            >
              View All Destinations
              <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Quote Band */}
      <section className="py-16 sm:py-20 bg-[#E8F5FF]">
        <div ref={quoteRef} className="reveal max-w-3xl mx-auto px-4 text-center">
          <i className="fas fa-quote-right text-3xl sm:text-4xl text-[#0496FF]/20 mb-4" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold font-[Plus Jakarta Sans] text-[#062A45] leading-relaxed">
            &ldquo;Every placement is a story — of ambition, courage, and a better life waiting to be written.&rdquo;
          </blockquote>
          <div className="mt-8">
            <a
              href="https://wa.me/923158547604?text=Hello%20Reliance%20Overseas%2C%20I%20would%20like%20to%20apply%20for%20a%20job."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-[#FB5607] rounded-full hover:bg-[#e04e06] hover:shadow-lg transition-all no-underline"
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