import useInView from '../hooks/useInView';

const FALLBACK = 'https://placehold.co/800x1000/FFB6C1/FFB6C1';

const handleImgError = (e) => {
  if (e.target.src !== FALLBACK) e.target.src = FALLBACK;
};

const statCards = [
  { icon: 'fa-solid fa-users', value: '3000+', label: 'Workers Placed' },
  { icon: 'fa-solid fa-flag', value: '10+', label: 'Countries' },
  { icon: 'fa-solid fa-certificate', value: '100%', label: 'Govt. Licensed' },
  { icon: 'fa-solid fa-handshake', value: '15+', label: 'Years Experience' },
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
                style={{ backgroundColor: '#E0218A', color: 'white' }}>
                <i className="fa-solid fa-check-circle text-[10px]" />
                Govt. Licensed OEP 2178/RWP
              </span>
            </div>

            {/* Headline */}
            <h1 className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight m-0`}
              style={{ color: '#3D0A22' }}>
              A{' '}
              <span style={{ color: '#E0218A' }}>Simpler</span>
              {' '}Way Abroad
            </h1>

            {/* Subhead */}
            <p className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-2 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl`}
              style={{ color: '#6B3A52' }}>
              Connecting Rawalpindi's skilled workforce with trusted employers across the globe —
              a refreshingly simple, transparent path to overseas employment.
            </p>

            {/* Buttons */}
            <div className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-3 flex flex-wrap gap-4 pt-1`}>
              <a href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#00BFA6' }}>
                <i className="fa-regular fa-paper-plane" />
                Apply Now
              </a>
              <a href="tel:0514419415"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 border-2 shadow-sm"
                style={{ borderColor: '#E0218A', color: '#E0218A' }}>
                <i className="fa-solid fa-phone" />
                Call Now
              </a>
            </div>

            {/* Trust badges */}
            <div className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-4 flex flex-wrap items-center gap-5 pt-3`}>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-building-columns text-sm" style={{ color: '#00BFA6' }} />
                <span className="text-xs sm:text-sm font-medium" style={{ color: '#5A1E3A' }}>Govt. Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-globe text-sm" style={{ color: '#E0218A' }} />
                <span className="text-xs sm:text-sm font-medium" style={{ color: '#5A1E3A' }}>10+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-shield-halved text-sm" style={{ color: '#00BFA6' }} />
                <span className="text-xs sm:text-sm font-medium" style={{ color: '#5A1E3A' }}>Trusted Since 2010</span>
              </div>
            </div>
          </div>

          {/* Right — Triple Photo Strips */}
          <div className="lg:col-span-5 relative">
            <div className="flex gap-2 sm:gap-3 h-[340px] sm:h-[420px] lg:h-[480px]">
              {/* Strip 1 */}
              <div className="flex-1 rounded-2xl overflow-hidden img-hover-zoom shadow-lg relative"
                style={{ backgroundColor: '#FFB6C1' }}>
                <img
                  src="https://picsum.photos/seed/departures/400/800"
                  alt="Departures"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={handleImgError}
                />
              </div>
              {/* Strip 2 */}
              <div className="flex-1 rounded-2xl overflow-hidden img-hover-zoom shadow-lg relative mt-6 lg:mt-8"
                style={{ backgroundColor: '#FF6FB5' }}>
                <img
                  src="https://picsum.photos/seed/worker/400/800"
                  alt="Professional"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={handleImgError}
                />
              </div>
              {/* Strip 3 */}
              <div className="flex-1 rounded-2xl overflow-hidden img-hover-zoom shadow-lg relative"
                style={{ backgroundColor: '#E0218A' }}>
                <img
                  src="https://picsum.photos/seed/office/400/800"
                  alt="Office"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={handleImgError}
                />
              </div>
            </div>

            {/* Floating stat chip */}
            <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-xl shadow-lg px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-3 border border-[#FFB6C1]/50">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-bold"
                style={{ backgroundColor: '#E0218A' }}>
                N
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-semibold" style={{ color: '#E0218A' }}>License</div>
                <div className="text-xs sm:text-sm font-bold" style={{ color: '#3D0A22' }}>2178/RWP</div>
              </div>
            </div>

            {/* Floating stat 1 */}
            <div className="absolute bottom-6 -left-3 sm:bottom-8 sm:-left-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg px-3 sm:px-4 py-2 sm:py-2.5 border border-[#00BFA6]/30">
              <div className="text-xs sm:text-sm font-bold" style={{ color: '#00BFA6' }}>3000+</div>
              <div className="text-[10px] sm:text-xs font-medium" style={{ color: '#5A1E3A' }}>Workers Placed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Band */}
      <div style={{ backgroundColor: '#E0218A' }}>
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
      <i className={`${stat.icon} text-2xl sm:text-3xl mb-2 sm:mb-3`} style={{ color: '#00BFA6' }} />
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1">
        {visible ? stat.value : '0'}
      </div>
      <div className="text-sm sm:text-base font-medium tracking-wide" style={{ color: '#FFB6C1' }}>
        {stat.label}
      </div>
    </div>
  );
}