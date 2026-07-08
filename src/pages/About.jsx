import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  const revealRef = useScrollReveal();
  const valuesRef = useScrollReveal();

  return (
    <div>
      {/* Editorial Header */}
      <section className="hero-gradient pt-16 sm:pt-20 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFBE0B] font-[Plus Jakarta Sans]">
            Our Story
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-[Plus Jakarta Sans] text-white mt-3 mb-4 leading-tight">
            Building Bridges,<br />One Placement at a Time
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-lg mx-auto leading-relaxed">
            From the heart of Rawalpindi to the world — the story of Reliance Overseas Manpower Recruiting Agency.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-b border-blue-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: '9+', label: 'Countries' },
              { number: '5000+', label: 'Workers Placed' },
              { number: '15+', label: 'Years Experience' },
              { number: '2282/RWP', label: 'License No.' },
            ].map((s, i) => (
              <div key={i} className="stat-line">
                <span className="stat-number">{s.number}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Editorial Narrative */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div ref={revealRef} className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#0496FF]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0496FF] font-[Plus Jakarta Sans]">
                License 2282/RWP
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-[Plus Jakarta Sans] text-[#062A45] mb-6">
              A Licensed Overseas Employment Agency
            </h2>
            <div className="article-body drop-cap">
              <p>
                <strong>Reliance Overseas Manpower Recruiting Agency</strong> was founded with a simple belief: that every worker deserves a fair chance at a better life. Based in <strong>Satellite Town, Rawalpindi</strong>, we are a government-licensed Overseas Employment Agency (<strong>License 2282/RWP</strong>) dedicated to connecting the skilled and determined workers of Pakistan with reputable employers across the Middle East and Europe.
              </p>
              <p>
                Our journey began in the bustling commercial hub of 6th Road, Rawalpindi, where we saw the ambition and drive of Pakistani workers seeking opportunities beyond borders. With a deep understanding of both the local community and international labor markets, we built an agency that prioritizes transparency, integrity, and genuine care for every candidate we place.
              </p>
            </div>

            {/* Pull quote */}
            <div className="pull-quote">
              &ldquo;We don&rsquo;t just fill positions — we change lives, one placement at a time.&rdquo;
            </div>

            <div className="article-body">
              <p>
                Today, we have placed thousands of workers across 9 countries, building a reputation as one of the most trusted recruitment agencies in Rawalpindi and beyond. Our success is measured not just in numbers, but in the stories of workers who have transformed their lives and supported their families through overseas employment.
              </p>
              <p>
                Whether it is a construction worker heading to Saudi Arabia, a thermal insulation technician working on Qatar&rsquo;s skyline, or a driver navigating the roads of Dubai — every placement is a story of courage, ambition, and hope. And we are proud to be part of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office + Values */}
      <section className="py-16 sm:py-24 bg-[#E8F5FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start mb-16">
            {/* Office photo */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/office.jpg"
                alt="Reliance Overseas Manpower Recruiting Agency office"
                className="w-full aspect-[4/3] object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('img-fallback');
                }}
              />
            </div>
            {/* Address card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-[#0496FF]/10 flex items-center justify-center text-[#0496FF] mb-4">
                <i className="fas fa-map-marker-alt text-xl" />
              </div>
              <h3 className="text-xl font-bold font-[Plus Jakarta Sans] text-[#062A45] mb-2">Visit Our Office</h3>
              <p className="text-base text-[#062A45]/70 leading-relaxed mb-4">
                Office No. 20, 2nd Floor, 78A<br />
                Ali Arcade Plaza, Opp. Habib Bank<br />
                6th Road, Satellite Town<br />
                Rawalpindi, Punjab, Pakistan
              </p>
              <div className="space-y-2 text-sm text-[#062A45]/60">
                <div className="flex items-center gap-2">
                  <i className="fas fa-phone text-[#0496FF] w-4" />
                  <span>051-4852599</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fab fa-whatsapp text-[#0496FF] w-4" />
                  <span>0315-8547604</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-envelope text-[#0496FF] w-4" />
                  <span>reliance.oep@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div ref={valuesRef} className="reveal">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0496FF] font-[Plus Jakarta Sans]">
                Our Values
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-[Plus Jakarta Sans] text-[#062A45] mt-2">
                What We Stand For
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: 'fas fa-certificate', title: 'Government Licensed', desc: 'Registered under License 2282/RWP — fully compliant with all regulations.' },
                { icon: 'fas fa-search-dollar', title: 'Transparent Fees', desc: 'No hidden charges. All costs communicated clearly upfront.' },
                { icon: 'fas fa-handshake', title: 'Verified Employers', desc: 'We personally vet every employer to ensure authentic job offers.' },
                { icon: 'fas fa-tachometer-alt', title: 'Fast Processing', desc: 'Efficient documentation and visa processing — get deployed quickly.' },
                { icon: 'fas fa-users', title: 'Local Roots', desc: 'Based in Rawalpindi — we understand the local community and its needs.' },
                { icon: 'fas fa-headset', title: 'Post-Placement Support', desc: 'We stay with you even after you reach your destination.' },
              ].map((v, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-blue-100 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0496FF]/10 flex items-center justify-center text-[#0496FF] mb-3">
                    <i className={v.icon} />
                  </div>
                  <h3 className="text-base font-bold font-[Plus Jakarta Sans] text-[#062A45] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#062A45]/60 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-[Plus Jakarta Sans] text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-sm sm:text-base text-white/80 mb-8 max-w-lg mx-auto">
            Take the first step. Contact us today and let us help you find the right job abroad.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#FB5607] rounded-full hover:bg-[#e04e06] transition-all no-underline"
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