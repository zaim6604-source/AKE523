import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import StatBand from '../components/StatBand';

export default function Story() {
  const revealRef = useScrollReveal();
  const valuesRef = useScrollReveal();

  return (
    <div className="page-fade">
      {/* Editorial Header */}
      <section className="bg-gradient-to-br from-[#FF1654] to-[#D60046] pt-16 sm:pt-20 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFD400] font-[Plus+Jakarta+Sans]">
            Our Story
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-[Plus+Jakarta+Sans] text-white mt-3 mb-4 leading-tight">
            Building Bridges,<br />One Placement at a Time
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-lg mx-auto leading-relaxed">
            From the heart of Hangu to the world — the story of Al-Atique Recruiting Agency.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="-mt-10 relative z-10">
        <StatBand />
      </div>

      {/* Editorial Narrative */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div ref={revealRef} className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#FF1654]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF1654] font-[Plus+Jakarta+Sans]">
                License 2220/PWR
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-[Plus+Jakarta+Sans] text-[#152935] mb-6">
              A Licensed Overseas Employment Promoter
            </h2>
            <p className="text-base sm:text-lg text-[#152935]/70 leading-relaxed mb-4">
              Al-Atique Recruiting Agency was founded with a simple belief: that every worker deserves a fair chance
              at a better life. Based in <strong>Qasmi Market, Tehsil Thall, District Hangu, KPK</strong>, we are a
              government-licensed Overseas Employment Promoter (<strong>License 2220/PWR</strong>) dedicated to
              connecting the skilled and determined workers of Khyber Pakhtunkhwa with reputable employers across
              the Middle East and Europe.
            </p>
            <p className="text-base sm:text-lg text-[#152935]/70 leading-relaxed mb-6">
              Our journey began in the bustling markets of Thall, where we saw the ambition and drive of local
              workers seeking opportunities beyond borders. With a deep understanding of both the local community
              and international labor markets, we built an agency that prioritizes transparency, integrity, and
              genuine care for every candidate we place.
            </p>

            {/* Pull quote */}
            <div className="pull-quote">
              &ldquo;We don&rsquo;t just fill positions — we change lives, one placement at a time.&rdquo;
            </div>

            <p className="text-base sm:text-lg text-[#152935]/70 leading-relaxed mb-4">
              Today, we have placed over <strong>5,000 workers</strong> across <strong>9 countries</strong>,
              building a reputation as one of the most trusted recruitment agencies in the region. Our success
              is measured not just in numbers, but in the stories of workers who have transformed their lives
              and supported their families through overseas employment.
            </p>
            <p className="text-base sm:text-lg text-[#152935]/70 leading-relaxed">
              Whether it&rsquo;s a cattle herder heading to Saudi Arabia, a thermal insulation technician
              working on Qatar&rsquo;s skyline, or a driver navigating the roads of Dubai — every placement
              is a story of courage, ambition, and hope. And we&rsquo;re proud to be part of it.
            </p>
          </div>
        </div>
      </section>

      {/* Office + Values */}
      <section className="py-16 sm:py-24 bg-[#FFF3E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start mb-16">
            {/* Office photo */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=80"
                alt="Al-Atique Recruiting Agency office"
                className="w-full aspect-[4/3] object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('img-fallback');
                }}
              />
            </div>
            {/* Address card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-[#FF1654]/10 flex items-center justify-center text-[#FF1654] mb-4">
                <i className="fas fa-map-marker-alt text-xl" />
              </div>
              <h3 className="text-xl font-bold font-[Plus+Jakarta+Sans] text-[#152935] mb-2">Visit Our Office</h3>
              <p className="text-base text-[#152935]/70 leading-relaxed mb-4">
                Qasmi Market, Tehsil Thall,<br />
                District Hangu, KPK<br />
                Pakistan
              </p>
              <div className="space-y-2 text-sm text-[#152935]/60">
                <div className="flex items-center gap-2">
                  <i className="fas fa-phone text-[#70C1B3] w-4" />
                  <span>0925-510726</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fab fa-whatsapp text-[#70C1B3] w-4" />
                  <span>0300-5668365</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div ref={valuesRef} className="reveal">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF1654] font-[Plus+Jakarta+Sans]">
                Our Values
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-[Plus+Jakarta+Sans] text-[#152935] mt-2">
                What We Stand For
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: 'fas fa-certificate', title: 'Government Licensed', desc: 'Registered under License 2220/PWR — fully compliant with all regulations.' },
                { icon: 'fas fa-search-dollar', title: 'Transparent Fees', desc: 'No hidden charges. All costs communicated clearly upfront.' },
                { icon: 'fas fa-handshake', title: 'Verified Employers', desc: 'We personally vet every employer to ensure authentic job offers.' },
                { icon: 'fas fa-tachometer-alt', title: 'Fast Processing', desc: 'Efficient documentation and visa processing — get deployed quickly.' },
                { icon: 'fas fa-users', title: 'Local Roots', desc: 'Based in Thall, Hangu — we understand the local community and its needs.' },
                { icon: 'fas fa-headset', title: 'Post-Placement Support', desc: 'We stay with you even after you reach your destination.' },
              ].map((v, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-[#FFF3E0] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF1654]/10 flex items-center justify-center text-[#FF1654] mb-3">
                    <i className={v.icon} />
                  </div>
                  <h3 className="text-base font-bold font-[Plus+Jakarta+Sans] text-[#152935] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#152935]/60 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#247BA0] to-[#152935]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-[Plus+Jakarta+Sans] text-white mb-4">
            Ready to Write Your Story?
          </h2>
          <p className="text-sm sm:text-base text-white/80 mb-8 max-w-lg mx-auto">
            Take the first step. Contact us today and let us help you find the right job abroad.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#152935] bg-[#FFD400] rounded-full hover:bg-[#e6bf00] transition-all no-underline"
            >
              <i className="fas fa-globe" />
              Explore Destinations
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border-2 border-white/40 rounded-full hover:bg-white/10 transition-all no-underline"
            >
              <i className="fas fa-envelope" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}