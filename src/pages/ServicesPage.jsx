import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import { services } from '../data/services';

export default function ServicesPage() {
  const revealRef = useScrollReveal();

  return (
    <div className="page-fade">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#FF1654] to-[#D60046] pt-12 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFD400] font-[Plus+Jakarta+Sans]">
            What We Do
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-[Plus+Jakarta+Sans] text-white mt-3 mb-3">
            Our Services
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
            End-to-end recruitment solutions — from first contact to successful placement.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={revealRef} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((svc) => (
              <article
                key={svc.id}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl border border-[#FFF3E0] hover:border-[#FF1654]/20 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${svc.bg} flex items-center justify-center ${svc.color} mb-4`}>
                  <i className={`${svc.icon} text-xl`} />
                </div>
                <h3 className="text-lg font-bold font-[Plus+Jakarta+Sans] text-[#152935] mb-1">
                  {svc.title}
                </h3>
                <p className="text-xs font-semibold text-[#FF1654] uppercase tracking-wider mb-3">
                  {svc.tagline}
                </p>
                <p className="text-sm text-[#152935]/60 leading-relaxed">
                  {svc.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article-style feature */}
      <section className="py-16 sm:py-24 bg-[#FFF3E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF1654] font-[Plus+Jakarta+Sans]">
                Our Approach
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-[Plus+Jakarta+Sans] text-[#152935] mt-2 mb-4">
                More Than Just Recruitment
              </h2>
              <p className="text-sm sm:text-base text-[#152935]/70 leading-relaxed mb-4">
                We believe that successful placement is about more than matching a CV to a job description.
                It&rsquo;s about understanding the candidate&rsquo;s aspirations, the employer&rsquo;s culture,
                and the realities of working in a foreign country.
              </p>
              <p className="text-sm sm:text-base text-[#152935]/70 leading-relaxed mb-4">
                Our team personally interviews every candidate, verifies every employer, and provides
                ongoing support that extends well beyond the day of departure. We don&rsquo;t just
                send workers abroad — we prepare them for success.
              </p>
              <div className="pull-quote text-base sm:text-lg">
                We don&rsquo;t just send workers abroad — we prepare them for success.
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&q=80"
                alt="Team collaboration"
                className="w-full aspect-[4/3] object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('img-fallback');
                }}
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#FF1654] rounded-full hover:bg-[#D60046] transition-all no-underline"
            >
              <i className="fas fa-globe" />
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
