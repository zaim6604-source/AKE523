import { useParams, Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import { countries } from '../data/countries';

export default function GuideDetail() {
  const { slug } = useParams();
  const country = countries.find((c) => c.slug === slug);
  const revealRef = useScrollReveal();
  const rolesRef = useScrollReveal();

  if (!country) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#FFD6F0]">
        <div className="text-center px-4">
          <i className="fas fa-map-marked-alt text-5xl text-[#FF3CAC]/30 mb-4" />
          <h1 className="text-2xl font-bold font-[Plus Jakarta Sans] text-[#1A0A1E] mb-2">Country Not Found</h1>
          <p className="text-sm text-[#1A0A1E]/60 mb-6">The guide you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#2B86C5] rounded-full hover:bg-[#2470a5] transition-all no-underline"
          >
            <i className="fas fa-arrow-left" />
            Back to Guides
          </Link>
        </div>
      </div>
    );
  }

  const whatsappText = `Hello Parwaz Recruiting Agency! I am interested in working in ${country.name}. Please guide me about available roles and the application process.`;

  return (
    <div>
      {/* Hero Image */}
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src={country.image}
          alt={country.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('img-fallback');
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A1E] via-[#1A0A1E]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-5xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00F5D4] font-[Plus Jakarta Sans]">
              {country.region}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-[Plus Jakarta Sans] text-white mt-2 leading-tight">
              {country.name}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mt-1">{country.headline}</p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-white border-b border-pink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: 'Capital', value: country.capital, icon: 'fas fa-city' },
              { label: 'Language', value: country.language, icon: 'fas fa-language' },
              { label: 'Currency', value: country.currency, icon: 'fas fa-coins' },
              { label: 'Timezone', value: country.timezone, icon: 'fas fa-clock' },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-3 sm:p-4 bg-[#FFD6F0] rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-[#FF3CAC]/10 flex items-center justify-center text-[#FF3CAC] flex-shrink-0">
                  <i className={`${f.icon} text-sm`} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs font-semibold text-[#1A0A1E]/50 uppercase tracking-wider">{f.label}</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#1A0A1E] truncate">{f.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div ref={revealRef} className="reveal">
                <h2 className="text-2xl sm:text-3xl font-bold font-[Plus Jakarta Sans] text-[#1A0A1E] mb-6">
                  Working in {country.name}
                </h2>
                <div className="article-body">
                  <p>{country.intro}</p>
                </div>

                {/* Salary range */}
                <div className="bg-[#FFD6F0] rounded-2xl p-5 sm:p-6 my-8">
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-wallet text-[#FF3CAC] text-xl" />
                    <h3 className="text-lg font-bold font-[Plus Jakarta Sans] text-[#1A0A1E]">Expected Salary Range</h3>
                  </div>
                  <p className="text-base sm:text-lg font-semibold text-[#FF3CAC]">{country.salaryRange}</p>
                </div>
              </div>

              {/* Roles */}
              <div ref={rolesRef} className="reveal">
                <h3 className="text-xl font-bold font-[Plus Jakarta Sans] text-[#1A0A1E] mb-4">
                  Available Roles
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {country.roles.map((role, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3.5 bg-white border border-pink-100 rounded-xl hover:border-[#FF3CAC]/30 hover:shadow-sm transition-all"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#FF3CAC] flex-shrink-0" />
                      <span className="text-sm text-[#1A0A1E]/80">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Apply CTA */}
                <div className="bg-[#1A0A1E] rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mx-auto mb-4">
                    <i className="fas fa-feather-alt text-xl" />
                  </div>
                  <h3 className="text-lg font-bold font-[Plus Jakarta Sans] text-white mb-2">
                    Ready to Apply?
                  </h3>
                  <p className="text-sm text-white/70 mb-5">
                    Contact us today and start your journey to {country.name}.
                  </p>
                  <a
                    href={`https://wa.me/923339319471?text=${encodeURIComponent(whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#2B86C5] rounded-full hover:bg-[#2470a5] transition-all w-full justify-center no-underline"
                  >
                    <i className="fab fa-whatsapp" />
                    Apply via WhatsApp
                  </a>
                </div>

                {/* Life Notes */}
                <div className="bg-white rounded-2xl p-6 border border-pink-100">
                  <h3 className="text-base font-bold font-[Plus Jakarta Sans] text-[#1A0A1E] mb-4 flex items-center gap-2">
                    <i className="fas fa-info-circle text-[#FF3CAC]" />
                    Life in {country.name}
                  </h3>
                  <ul className="space-y-3">
                    {country.lifeNotes.map((note, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#1A0A1E]/70">
                        <i className="fas fa-check-circle text-[#FF3CAC] mt-0.5 flex-shrink-0" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Back link */}
                <Link
                  to="/guides"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#FF3CAC] border border-[#FF3CAC]/20 rounded-xl hover:bg-pink-50 transition-all no-underline"
                >
                  <i className="fas fa-arrow-left text-xs" />
                  Back to All Guides
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}