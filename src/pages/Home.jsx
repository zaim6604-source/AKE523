import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import SafeImage from '../components/SafeImage';
import countries from '../assets/countries';

const services = [
  { icon: 'fa-user-plus', title: 'Manpower Supply', desc: 'Skilled & semi-skilled workers for global employers', color: 'from-primary to-highlight' },
  { icon: 'fa-passport', title: 'Visa Processing', desc: 'End-to-end work visa documentation and submission', color: 'from-secondary to-primary' },
  { icon: 'fa-file-contract', title: 'Contract Facilitation', desc: 'Employment contract verification and authentication', color: 'from-accent to-secondary' },
  { icon: 'fa-plane-departure', title: 'Travel & Logistics', desc: 'Flight booking, airport transfers, and pre-departure', color: 'from-primary to-accent' },
];

export default function Home() {
  return (
    <div className="page-enter-active">
      {/* ── Magazine Cover Hero ── */}
      <section className="relative bg-background pt-8 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left — masthead */}
            <div className="flex-1 text-center lg:text-left">
              <FadeUp>
                <div className="pill-badge bg-primary text-white mb-4">
                  <i className="fas fa-globe-asia" />
                  AL ASAD INTERNATIONAL · RAWALPINDI
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-ink leading-[1.05] mt-4">
                  The Strength Behind{' '}
                  <span className="text-primary">Your Journey Abroad</span>
                </h1>
                <p className="text-base sm:text-lg text-ink/70 mt-5 max-w-xl mx-auto lg:mx-0 leading-relaxed editorial-body">
                  Al Asad International places workers from Rawalpindi, Islamabad, and across Punjab
                  with trusted employers in the Gulf, Europe, and Asia — building careers that cross
                  borders and transform futures. License <strong>2241/RWP</strong>.
                </p>
              </FadeUp>

              <FadeUp delay={150}>
                <div className="flex flex-wrap items-center gap-3 mt-7 justify-center lg:justify-start">
                  <a
                    href="https://wa.me/923015445751"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-cta text-white font-extrabold px-7 py-3.5 rounded-full text-base hover:brightness-110 transition-all shadow-lg"
                  >
                    <i className="fas fa-paper-plane" />
                    Apply Now
                  </a>
                  <a
                    href="https://wa.me/923015445751"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-7 py-3.5 rounded-full text-base hover:bg-primary hover:text-white transition-all"
                  >
                    <i className="fab fa-whatsapp" />
                    WhatsApp
                  </a>
                </div>
              </FadeUp>
            </div>

            {/* Right — magazine cover visual */}
            <FadeUp delay={100}>
              <div className="relative shrink-0">
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-3">
                    <SafeImage
                      src="/images/hero.jpg"
                      alt="Al Asad International — Global Recruitment"
                      className="w-full h-full object-cover"
                      fallbackType="hero"
                    />
                  </div>
                  <div className="absolute -top-3 -right-3 bg-cta text-white font-extrabold text-xs px-3 py-1.5 rounded-full shadow-lg">
                    <i className="fas fa-check-circle" /> Apply Now
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Featured "Articles" (Services teasers) ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="pill-badge bg-primary text-white mb-4 mx-auto" style={{ width: 'fit-content' }}>
              <i className="fas fa-newspaper" />
              Featured Articles
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center leading-tight">
              What We Offer
            </h2>
            <p className="text-ink/60 text-center mt-3 max-w-2xl mx-auto editorial-body">
              From registration to departure — our services cover every chapter of your journey abroad
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 80}>
                <div className="article-card rounded-2xl bg-gradient-to-br text-white p-6 shadow-lg relative overflow-hidden group cursor-pointer" style={{ backgroundImage: `linear-gradient(135deg, var(--color-primary), var(--color-highlight))` }}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-6 -mt-6" />
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl mb-4">
                    <i className={`fas ${s.icon}`} />
                  </div>
                  <h3 className="text-lg font-extrabold mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed opacity-85">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-xs font-bold mt-4 text-white/70 hover:text-white transition-colors">
                    Read More <i className="fas fa-arrow-right text-[10px]" />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Country Guide Teaser ── */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="pill-badge bg-primary text-white mb-4 mx-auto" style={{ width: 'fit-content' }}>
              <i className="fas fa-globe" />
              Destinations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center leading-tight">
              Explore Our Country Guides
            </h2>
            <p className="text-ink/60 text-center mt-3 max-w-2xl mx-auto editorial-body">
              In-depth guides to every destination we serve — from the Gulf to Europe and Asia
            </p>
          </FadeUp>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {countries.map((c) => (
              <Link
                key={c.slug}
                to={`/guides/${c.slug}`}
                className="article-card bg-white rounded-2xl p-4 shadow-md border border-gray-100 text-center hover:shadow-xl min-w-[120px]"
              >
                <span className="text-3xl block">{c.flag}</span>
                <h3 className="text-sm font-extrabold text-ink mt-2">{c.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Stats ── */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: '2,000+', label: 'Workers Placed' },
              { num: '9', label: 'Countries' },
              { num: '10+', label: 'Years Experience' },
              { num: '97%', label: 'Success Rate' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-white">{s.num}</div>
                <div className="text-sm text-white/75 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}