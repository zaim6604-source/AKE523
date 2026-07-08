import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import useInView from '../hooks/useInView';

const stats = [
  { value: '1000+', label: 'Workers Placed' },
  { value: '9', label: 'Countries' },
  { value: '15+', label: 'Years Experience' },
  { value: '2234/KAR', label: 'Licensed Operator' },
];

const featuredServices = [
  { title: 'Overseas Job Placement', icon: 'fa-briefcase', desc: 'Connecting skilled workers with verified employers across the Gulf and Europe.', color: 'var(--color-primary)' },
  { title: 'Air Ticketing & Travel', icon: 'fa-plane', desc: 'Competitive airfare, travel support, and full coordination for your journey.', color: 'var(--color-cta)' },
  { title: 'Visa Processing', icon: 'fa-passport', desc: 'Complete visa application support, documentation, and embassy follow-up.', color: 'var(--color-highlight)' },
];

const featuredDestinations = [
  { name: 'Saudi Arabia', slug: 'saudi-arabia', image: '/src/assets/images/saudi.jpg', flag: '🇸🇦' },
  { name: 'UAE', slug: 'uae', image: '/src/assets/images/uae.jpg', flag: '🇦🇪' },
  { name: 'Qatar', slug: 'qatar', image: '/src/assets/images/qatar.jpg', flag: '🇶🇦' },
  { name: 'Germany', slug: 'germany', image: '/src/assets/images/germany.jpg', flag: '🇩🇪' },
  { name: 'Malaysia', slug: 'malaysia', image: '/src/assets/images/saudi.jpg', flag: '🇲🇾' },
  { name: 'Turkey', slug: 'turkey', image: '/src/assets/images/romania.jpg', flag: '🇹🇷' },
];

export default function Home() {
  const [statsRef, statsVisible] = useInView(0.2);

  return (
    <div className="page-transition">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ backgroundColor: 'var(--color-background)' }}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, var(--color-primary) 1px, transparent 1px), radial-gradient(circle at 75% 75%, var(--color-primary) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-6 sm:space-y-7">
              <FadeIn>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                  <i className="fa-solid fa-flag-checkered text-[10px]" />
                  Travel & Tours + Overseas Employment
                </span>
              </FadeIn>

              <FadeIn delay={1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight m-0" style={{ color: 'var(--color-accent)' }}>
                  Full Speed from{' '}
                  <span style={{ color: 'var(--color-primary)' }}>Karachi</span>
                  {' '}to a Career Abroad
                </h1>
              </FadeIn>

              <FadeIn delay={2}>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg" style={{ color: 'var(--color-ink-light)' }}>
                  Rais Brothers — licensed since 2010, powered by trust. We turn your ambitions into departures with speed, transparency, and heart.
                </p>
              </FadeIn>

              <FadeIn delay={3}>
                <div className="flex flex-wrap gap-4 pt-1">
                  <a
                    href="https://wa.me/923009219780"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: 'var(--color-cta)', color: 'var(--color-accent)' }}
                  >
                    <i className="fab fa-whatsapp" />
                    Apply Now
                  </a>
                  <a
                    href="https://wa.me/923009219780"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 border-2"
                    style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
                  >
                    <i className="fab fa-whatsapp" />
                    WhatsApp Us
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={4}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(225, 6, 0, 0.08)', color: 'var(--color-primary)' }}>
                    <i className="fa-solid fa-certificate" />
                    License 2234/KAR
                  </span>
                  <span className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--color-ink-light)' }}>
                    <i className="fa-solid fa-building-columns" style={{ color: 'var(--color-cta)' }} />
                    Govt. Licensed
                  </span>
                  <span className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--color-ink-light)' }}>
                    <i className="fa-solid fa-globe" style={{ color: 'var(--color-primary)' }} />
                    9 Countries
                  </span>
                </div>
              </FadeIn>
            </div>

            {/* Right — Visual */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Chronograph dial */}
                <div className="w-80 h-80 mx-auto rounded-full relative" style={{ border: '3px solid rgba(225, 6, 0, 0.1)' }}>
                  <div className="tachymeter-ring" />
                  <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl" style={{ border: '4px solid var(--color-cta)' }}>
                    <img
                      src="/src/assets/images/hero.jpg"
                      alt="Global opportunities"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  {/* Center hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full z-10" style={{ backgroundColor: 'var(--color-primary)', border: '3px solid var(--color-cta)' }} />
                  {/* Logo */}
                  <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg px-3 py-2 z-10 border" style={{ borderColor: 'rgba(225, 6, 0, 0.15)' }}>
                    <div className="text-[10px] font-bold" style={{ color: 'var(--color-primary)' }}>License</div>
                    <div className="text-xs font-bold" style={{ color: 'var(--color-accent)' }}>2234/KAR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAND ===== */}
      <section ref={statsRef} style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((s, i) => (
              <div key={s.label} className={`text-center fade-up ${statsVisible ? 'visible' : ''} fade-up-delay-${i + 1}`}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {statsVisible ? s.value : '0'}
                </div>
                <div className="text-sm sm:text-base font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES TEASER ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <FadeIn>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: 'rgba(225, 6, 0, 0.08)', color: 'var(--color-primary)' }}>
            <i className="fa-solid fa-concierge-bell" />
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold m-0 leading-tight" style={{ color: 'var(--color-accent)' }}>
            Everything You Need
          </h2>
          <p className="text-base sm:text-lg mt-3 max-w-xl" style={{ color: 'var(--color-ink-light)' }}>
            From consultation to departure — we handle every detail of your overseas journey.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10">
          {featuredServices.map((s, i) => (
            <FadeIn key={s.title} delay={Math.min(i + 1, 3)}>
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 border" style={{ borderColor: 'rgba(225, 6, 0, 0.08)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm" style={{ backgroundColor: s.color, color: s.color === 'var(--color-cta)' ? 'var(--color-accent)' : 'white' }}>
                  <i className={`fas ${s.icon} text-lg`} />
                </div>
                <h3 className="text-lg font-bold m-0 mb-2" style={{ color: 'var(--color-accent)' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
          <FadeIn delay={3}>
            <Link to="/services" className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-dashed flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md group" style={{ borderColor: 'rgba(225, 6, 0, 0.2)' }}>
              <i className="fa-solid fa-arrow-right text-2xl mb-2 group-hover:translate-x-1 transition-transform" style={{ color: 'var(--color-primary)' }} />
              <span className="text-sm font-bold" style={{ color: 'var(--color-primary)' }}>View All Services</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== FEATURED DESTINATIONS ===== */}
      <section style={{ backgroundColor: 'var(--color-accent)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: 'rgba(255, 213, 0, 0.15)', color: 'var(--color-cta)' }}>
              <i className="fa-solid fa-globe" />
              Destinations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold m-0 leading-tight text-white">
              Explore Opportunities
            </h2>
            <p className="text-base sm:text-lg mt-3 max-w-xl" style={{ color: '#999' }}>
              From the Gulf to Europe — discover your next career destination.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
            {featuredDestinations.map((d, i) => (
              <FadeIn key={d.name} delay={Math.min(i + 1, 4)}>
                <Link to={`/countries/${d.slug}`} className="group block rounded-xl overflow-hidden shadow-md bg-white/10 hover:bg-white/20 transition-all duration-300">
                  <div className="h-24 sm:h-28 overflow-hidden">
                    <img
                      src={d.image}
                      alt={d.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <div className="p-2.5 text-center">
                    <span className="text-lg">{d.flag}</span>
                    <p className="text-xs font-bold text-white mt-1">{d.name}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={4}>
            <div className="text-center mt-10">
              <Link to="/countries" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'var(--color-cta)', color: 'var(--color-accent)' }}>
                View All Destinations <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="py-16 sm:py-20 lg:py-24 px-4" style={{ background: 'linear-gradient(135deg, #E10600 0%, #A30000 50%, #1C1C1C 100%)' }}>
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-7">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white m-0 leading-tight">
              Ready to Take the Fast Lane?
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
              One message is all it takes. Let Rais Brothers accelerate your career abroad.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href="https://wa.me/923009219780"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'var(--color-cta)', color: 'var(--color-accent)' }}
              >
                <i className="fab fa-whatsapp" />
                Apply Now
              </a>
              <Link to="/contact" className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold text-white border-2 border-white/40 transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <i className="fa-regular fa-paper-plane" />
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}