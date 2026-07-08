import useInView from '../hooks/useInView';

const FALLBACK = 'https://placehold.co/400x300/FFB6C1/FFB6C1';
const handleImgError = (e) => {
  if (e.target.src !== FALLBACK) e.target.src = FALLBACK;
};

const countries = [
  { name: 'Saudi Arabia', flag: '🇸🇦', roles: 'Construction, Hospitality, Drivers, Technicians', img: 'https://picsum.photos/seed/saudi-arabia/400/300' },
  { name: 'UAE', flag: '🇦🇪', roles: 'Construction, Hospitality, Logistics, Retail', img: 'https://picsum.photos/seed/uae/400/300' },
  { name: 'Qatar', flag: '🇶🇦', roles: 'Construction, Oil & Gas, Hospitality, Security', img: 'https://picsum.photos/seed/qatar/400/300' },
  { name: 'Malaysia', flag: '🇲🇾', roles: 'Manufacturing, IT, Hospitality, Healthcare', img: 'https://picsum.photos/seed/malaysia/400/300' },
  { name: 'South Korea', flag: '🇰🇷', roles: 'Manufacturing, Agriculture, Fisheries, Construction', img: 'https://picsum.photos/seed/south-korea/400/300' },
  { name: 'Oman', flag: '🇴🇲', roles: 'Construction, Hospitality, Transport, Healthcare', img: 'https://picsum.photos/seed/oman/400/300' },
  { name: 'Kuwait', flag: '🇰🇼', roles: 'Construction, Oil & Gas, Hospitality, Drivers', img: 'https://picsum.photos/seed/kuwait/400/300' },
  { name: 'Bahrain', flag: '🇧🇭', roles: 'Construction, Finance, Hospitality, IT', img: 'https://picsum.photos/seed/bahrain/400/300' },
  { name: 'Italy', flag: '🇮🇹', roles: 'Hospitality, Manufacturing, Agriculture, Logistics', img: 'https://picsum.photos/seed/italy/400/300' },
];

const chipColors = ['#E0218A', '#FF6FB5', '#00BFA6', '#C2055E', '#FFB6C1', '#E0218A', '#00BFA6', '#FF6FB5', '#C2055E'];

export default function Countries() {
  const [ref, visible] = useInView(0.05);
  const [chipsRef, chipsVisible] = useInView(0.1);

  return (
    <section id="countries" className="relative">
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,20 C240,60 480,0 720,20 C960,40 1200,0 1440,20 L1440,0 L0,0 Z" fill="#FFEFF6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Pill Badge */}
        <div className="flex justify-center mb-4">
          <span className="pill-4 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider">
            DESTINATIONS
          </span>
        </div>

        <p className="text-center text-base sm:text-lg mb-10 sm:mb-12 max-w-2xl mx-auto" style={{ color: '#5A1E3A' }}>
          We recruit for top employers across these global destinations.
        </p>

        {/* Country Cards Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {countries.slice(0, 9).map((c, i) => (
            <div
              key={c.name}
              className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-${(i % 3) + 1} rounded-2xl overflow-hidden shadow-md bg-white transition-transform duration-300 hover:-translate-y-2`}
            >
              <div className="img-hover-zoom h-40 sm:h-44">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={handleImgError}
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-bold m-0 flex items-center gap-2" style={{ color: '#3D0A22' }}>
                  <span className="text-xl">{c.flag}</span> {c.name}
                </h3>
                <p className="text-xs sm:text-sm mt-2 leading-relaxed" style={{ color: '#5A1E3A' }}>
                  <span className="font-semibold">In-demand:</span> {c.roles}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Country Chip Grid */}
        <div ref={chipsRef} className={`fade-up ${chipsVisible ? 'visible' : ''} flex flex-wrap justify-center gap-3`}>
          {countries.map((c, i) => (
            <span
              key={c.name}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm transition-transform duration-200 hover:scale-105"
              style={{ backgroundColor: chipColors[i % chipColors.length] + '20', color: chipColors[i % chipColors.length], border: `1px solid ${chipColors[i % chipColors.length]}40` }}
            >
              <span className="text-base">{c.flag}</span>
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}