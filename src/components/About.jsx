import useInView from '../hooks/useInView';

const FALLBACK = 'https://placehold.co/600x450/FFB6C1/FFB6C1';
const handleImgError = (e) => {
  if (e.target.src !== FALLBACK) e.target.src = FALLBACK;
};

const features = [
  { icon: 'fa-solid fa-scale-balanced', label: 'Licensed & Legal', color: '#E0218A', bg: '#FFE0F0' },
  { icon: 'fa-solid fa-gauge-high', label: 'Simple Process', color: '#00BFA6', bg: '#E6FCF5' },
  { icon: 'fa-solid fa-coins', label: 'Transparent Fees', color: '#C2055E', bg: '#FFE6EE' },
  { icon: 'fa-solid fa-headset', label: 'End-to-End Support', color: '#FF6FB5', bg: '#FFF0F5' },
];

export default function About() {
  const [ref, visible] = useInView(0.1);
  const [cardsRef, cardsVisible] = useInView(0.1);

  return (
    <section id="about" className="relative">
      {/* Wavy divider top */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,20 C240,60 480,0 720,20 C960,40 1200,0 1440,20 L1440,0 L0,0 Z" fill="#FFEFF6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Pill Badge */}
        <div className="flex justify-center mb-4">
          <span className="pill-2 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider">
            ABOUT US
          </span>
        </div>

        {/* Top Band */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
          <div className={`fade-up ${visible ? 'visible' : ''} space-y-5`}>
            <h2 className="text-3xl sm:text-4xl font-bold m-0 leading-tight" style={{ color: '#3D0A22' }}>
              Your Trusted Partner in{' '}
              <span style={{ color: '#E0218A' }}>Overseas Employment</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#5A1E3A' }}>
              Niaz Recruiting Agency is a government-licensed Overseas Employment Promoter (OEP)
              based in Commercial Market, Rawalpindi. With License No. <strong>2178/RWP</strong>,
              we have been connecting Pakistani workers with reputable employers across the Middle East,
              Asia, and beyond — offering a refreshingly simple, transparent path to overseas employment.
            </p>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#5A1E3A' }}>
              From our office at Nazar Plaza, near Quba Masjid, we provide end-to-end recruitment
              services — from initial consultation and document processing to medical coordination,
              visa processing, and pre-departure orientation. We believe in making the process clear,
              honest, and stress-free.
            </p>
            <a href="tel:0514419415"
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-md"
              style={{ backgroundColor: '#00BFA6', color: 'white' }}>
              <i className="fa-solid fa-phone" />
              Call 051-4419415
            </a>
          </div>

          <div className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-2 relative`}>
            <div className="img-hover-zoom rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://picsum.photos/seed/agency-office/600/450"
                alt="Niaz Recruiting Agency office"
                className="w-full h-[280px] sm:h-[340px] object-cover"
                loading="lazy"
                onError={handleImgError}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-lg px-4 py-3 border-2 border-[#00BFA6]/40">
              <div className="text-xs font-semibold" style={{ color: '#00BFA6' }}>License</div>
              <div className="text-sm font-bold" style={{ color: '#3D0A22' }}>2178/RWP</div>
            </div>
          </div>
        </div>

        {/* Bottom Band — Why Choose Us */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {features.map((f, i) => (
            <div
              key={f.label}
              className={`fade-up ${cardsVisible ? 'visible' : ''} fade-up-delay-${i + 1} rounded-2xl p-6 sm:p-7 text-center transition-transform duration-300 hover:-translate-y-2 shadow-md`}
              style={{ backgroundColor: f.bg }}
            >
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm"
                style={{ backgroundColor: f.color }}
              >
                <i className={`${f.icon} text-white text-xl sm:text-2xl`} />
              </div>
              <h3 className="text-base sm:text-lg font-bold m-0" style={{ color: '#3D0A22' }}>
                {f.label}
              </h3>
              <p className="text-xs sm:text-sm mt-2 leading-relaxed" style={{ color: '#5A1E3A' }}>
                {f.label === 'Licensed & Legal' && 'Fully government-licensed OEP with authentic credentials.'}
                {f.label === 'Simple Process' && 'Straightforward, no-hassle process from start to finish.'}
                {f.label === 'Transparent Fees' && 'Clear pricing with no hidden charges, ever.'}
                {f.label === 'End-to-End Support' && 'Guidance at every step — from application to departure.'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}