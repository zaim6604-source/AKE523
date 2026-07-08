import useInView from '../hooks/useInView';

const FALLBACK = 'https://placehold.co/800x1000/83C5BE/83C5BE';

const handleImgError = (e) => {
  if (e.target.src !== FALLBACK) e.target.src = FALLBACK;
};

const statCards = [
  { icon: 'fa-solid fa-users', value: '5000+', label: 'Workers Placed' },
  { icon: 'fa-solid fa-flag', value: '9+', label: 'Countries' },
  { icon: 'fa-solid fa-certificate', value: '100%', label: 'Govt. Licensed' },
  { icon: 'fa-solid fa-handshake', value: '12+', label: 'Years Experience' },
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
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm bg-[#006D77] text-white">
                <i className="fa-solid fa-check-circle text-[10px]" />
                Govt. Licensed OEP 2208/RWP
              </span>
            </div>

            {/* Headline */}
            <h1 className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight m-0 text-[#003844]`}>
              Islamabad's{' '}
              <span style={{ color: '#006D77' }}>Trusted Source</span>
              {' '}for Skilled Manpower Abroad
            </h1>

            {/* Subhead */}
            <p className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-2 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl text-[#006D77]/80`}>
              Shah Zaman Manpower connects workers to reliable Gulf and European employers — licensed, honest, complete.
            </p>

            {/* Buttons: coral Apply + outline WhatsApp */}
            <div className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-3 flex flex-wrap gap-4 pt-1`}>
              <a
                href="https://wa.me/923335520190?text="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#E29578' }}
              >
                <i className="fa-regular fa-paper-plane" />
                Apply Now
              </a>
              <a
                href="https://wa.me/923335520190"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 border-2 shadow-sm"
                style={{ borderColor: '#006D77', color: '#006D77' }}
              >
                <i className="fa-brands fa-whatsapp" />
                WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-4 flex flex-wrap items-center gap-5 pt-3`}>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-building-columns text-sm text-[#006D77]" />
                <span className="text-xs sm:text-sm font-medium text-[#006D77]">Govt. Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-globe text-sm text-[#83C5BE]" />
                <span className="text-xs sm:text-sm font-medium text-[#006D77]">9+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-shield-halved text-sm text-[#006D77]" />
                <span className="text-xs sm:text-sm font-medium text-[#006D77]">Trusted Since 2012</span>
              </div>
            </div>
          </div>

          {/* Right — Side Image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden img-hover-zoom shadow-xl relative h-[340px] sm:h-[420px] lg:h-[480px]">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                alt="Professional team"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={handleImgError}
              />
            </div>

            {/* Floating license badge */}
            <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-xl shadow-lg px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-3 border border-[#83C5BE]/50">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-bold bg-[#006D77]">
                SZ
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-semibold text-[#006D77]">License</div>
                <div className="text-xs sm:text-sm font-bold text-[#003844]">2208/RWP</div>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute bottom-6 -left-3 sm:bottom-8 sm:-left-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg px-3 sm:px-4 py-2 sm:py-2.5 border border-[#83C5BE]/30">
              <div className="text-xs sm:text-sm font-bold text-[#006D77]">5000+</div>
              <div className="text-[10px] sm:text-xs font-medium text-[#006D77]/70">Workers Placed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Band — deep-teal */}
      <div style={{ backgroundColor: '#006D77' }}>
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
      <i className={`${stat.icon} text-2xl sm:text-3xl mb-2 sm:mb-3`} style={{ color: '#FFDD00' }} />
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1">
        {visible ? stat.value : '0'}
      </div>
      <div className="text-sm sm:text-base font-medium tracking-wide" style={{ color: '#83C5BE' }}>
        {stat.label}
      </div>
    </div>
  );
}