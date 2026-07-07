import useInView from '../hooks/useInView';

const FALLBACK = '/images/hero-team.jpg';
const handleImgError = (e) => {
  if (e.target.src !== FALLBACK) e.target.src = FALLBACK;
};

const statCards = [
  { icon: 'fa-solid fa-building', value: '100+', label: 'Clients Advised' },
  { icon: 'fa-solid fa-industry', value: '12+', label: 'Industries Served' },
  { icon: 'fa-solid fa-calendar-check', value: '8+', label: 'Years of Experience' },
  { icon: 'fa-solid fa-face-smile', value: '95%', label: 'Satisfaction' },
];

export default function Hero() {
  const [ref, visible] = useInView(0.1);

  return (
    <section id="hero">
      {/* Hero Main */}
      <div className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Kicker Pill */}
            <div className={`fade-up ${visible ? 'visible' : ''}`}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm"
                style={{ backgroundColor: '#1B4965', color: 'white' }}>
                <i className="fa-solid fa-handshake text-[10px]" />
                Your HR Partner in Islamabad
              </span>
            </div>

            {/* Headline */}
            <h1 className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight m-0`}
              style={{ color: '#0B2436' }}>
              Smarter{' '}
              <span style={{ color: '#1B4965' }}>HR Decisions</span>
              ,<br />Backed by Expert Consulting
            </h1>

            {/* Subhead */}
            <p className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-2 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl`}
              style={{ color: '#4A5C6B' }}>
              M &amp; L Consultants helps Islamabad&apos;s organizations hire, manage, and grow their people — practical HR consulting tailored to your business.
            </p>

            {/* Buttons */}
            <div className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-3 flex flex-wrap gap-4 pt-1`}>
              <a href="https://wa.me/923353465095" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#FF6B35' }}>
                <i className="fa-brands fa-whatsapp" />
                Get Started
              </a>
              <a href="https://wa.me/923353465095" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 border-2 shadow-sm"
                style={{ borderColor: '#1B4965', color: '#1B4965' }}>
                <i className="fa-brands fa-whatsapp" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-4 flex flex-wrap items-center gap-5 pt-3`}>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-sm" style={{ color: '#FF6B35' }} />
                <span className="text-xs sm:text-sm font-medium" style={{ color: '#4A5C6B' }}>Islamabad</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-handshake text-sm" style={{ color: '#1B4965' }} />
                <span className="text-xs sm:text-sm font-medium" style={{ color: '#4A5C6B' }}>100+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-shield-halved text-sm" style={{ color: '#FF6B35' }} />
                <span className="text-xs sm:text-sm font-medium" style={{ color: '#4A5C6B' }}>Trusted Partner</span>
              </div>
            </div>
          </div>

          {/* Right — Image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden img-hover-zoom shadow-xl relative"
              style={{ backgroundColor: '#C9CCD5' }}>
              <img
                src="/images/hero-team.jpg"
                alt="M & L Consultants team meeting"
                className="w-full h-[340px] sm:h-[420px] lg:h-[480px] object-cover"
                loading="lazy"
                onError={handleImgError}
              />
            </div>

            {/* Floating stat chip */}
            <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-xl shadow-lg px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-3 border border-[#5FA8D3]/50">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-bold"
                style={{ backgroundColor: '#1B4965' }}>
                M&L
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-semibold" style={{ color: '#1B4965' }}>HR Consulting</div>
                <div className="text-xs sm:text-sm font-bold" style={{ color: '#0B2436' }}>Islamabad</div>
              </div>
            </div>

            {/* Floating stat 1 */}
            <div className="absolute bottom-6 -left-3 sm:bottom-8 sm:-left-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg px-3 sm:px-4 py-2 sm:py-2.5 border border-[#FF6B35]/30">
              <div className="text-xs sm:text-sm font-bold" style={{ color: '#FF6B35' }}>100+</div>
              <div className="text-[10px] sm:text-xs font-medium" style={{ color: '#4A5C6B' }}>Clients Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Band */}
      <div style={{ backgroundColor: '#1B4965' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {statCards.map((stat, i) => (
              <StatCounter key={stat.label} stat={stat} delay={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCounter({ stat, delay }) {
  const [ref, visible] = useInView(0.3);
  return (
    <div ref={ref} className={`text-center fade-up ${visible ? 'visible' : ''} fade-up-delay-${delay + 1}`}>
      <i className={`${stat.icon} text-2xl sm:text-3xl mb-2 sm:mb-3`} style={{ color: '#FF6B35' }} />
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1">
        {visible ? stat.value : '0'}
      </div>
      <div className="text-sm sm:text-base font-medium tracking-wide" style={{ color: '#5FA8D3' }}>
        {stat.label}
      </div>
    </div>
  );
}