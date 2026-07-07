import useInView from '../hooks/useInView';

const FALLBACK = '/images/office.jpg';
const handleImgError = (e) => {
  if (e.target.src !== FALLBACK) e.target.src = FALLBACK;
};

const trustChips = [
  { icon: 'fa-solid fa-medal', label: 'Experienced', color: '#1B4965' },
  { icon: 'fa-solid fa-wand-magic-sparkles', label: 'Tailored', color: '#5FA8D3' },
  { icon: 'fa-solid fa-lock', label: 'Confidential', color: '#FF6B35' },
];

export default function About() {
  const [ref, visible] = useInView(0.1);

  return (
    <section id="about" className="relative">
      {/* Wavy divider top */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,20 C240,60 480,0 720,20 C960,40 1200,0 1440,20 L1440,0 L0,0 Z" fill="#F2F6F9" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Pill Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider"
            style={{ backgroundColor: '#1B4965', color: 'white' }}>
            WHO WE ARE
          </span>
        </div>

        {/* Content */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
          <div className={`fade-up ${visible ? 'visible' : ''} order-2 lg:order-1`}>
            <div className="img-hover-zoom rounded-2xl overflow-hidden shadow-xl relative">
              <img
                src="/images/office.jpg"
                alt="M & L Consultants office"
                className="w-full h-[280px] sm:h-[340px] object-cover"
                loading="lazy"
                onError={handleImgError}
              />
            </div>
          </div>

          <div className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-2 space-y-5 order-1 lg:order-2`}>
            <h2 className="text-3xl sm:text-4xl font-bold m-0 leading-tight" style={{ color: '#0B2436' }}>
              Islamabad&apos;s Trusted{' '}
              <span style={{ color: '#1B4965' }}>HR Consulting Partner</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#4A5C6B' }}>
              M &amp; L Consultants is a human-resource consulting firm based in Islamabad, dedicated to helping organizations and professionals achieve their people-management goals. We provide practical, tailored HR solutions that align with your business needs.
            </p>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#4A5C6B' }}>
              From recruitment and payroll to policy development and training, our experienced consultants work closely with you to build stronger, more capable teams. We believe in straightforward, results-driven HR that makes a real difference.
            </p>
          </div>
        </div>

        {/* Trust Chips */}
        <div className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-3 flex flex-wrap justify-center gap-3 sm:gap-4`}>
          {trustChips.map((chip) => (
            <span
              key={chip.label}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm transition-transform duration-200 hover:scale-105"
              style={{ backgroundColor: chip.color + '12', color: chip.color, border: `1px solid ${chip.color}30` }}
            >
              <i className={`${chip.icon} text-xs`} />
              {chip.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}