import useInView from '../hooks/useInView';
import PillBadge from './PillBadge';
import LazyImage from './LazyImage';

const COUNTRIES = [
  { name: 'Saudi Arabia', flag: '🇸🇦', landmark: 'Riyadh Skyline', roles: ['Construction', 'Healthcare', 'Drivers', 'Hospitality'], image: '/images/saudi-arabia.jpg' },
  { name: 'UAE', flag: '🇦🇪', landmark: 'Dubai Marina', roles: ['Construction', 'Hospitality', 'Drivers', 'Retail'], image: '/images/uae.jpg' },
  { name: 'Qatar', flag: '🇶🇦', landmark: 'Doha Skyline', roles: ['Construction', 'Hospitality', 'Security', 'Technicians'], image: '/images/qatar.jpg' },
  { name: 'Oman (Muscat)', flag: '🇴🇲', landmark: 'Sultan Qaboos Grand Mosque', roles: ['Construction', 'Drivers', 'Hospitality', 'Oil & Gas'], image: '/images/oman.jpg' },
  { name: 'Germany', flag: '🇩🇪', landmark: 'Berlin Gate', roles: ['Healthcare', 'IT', 'Engineers', 'Manufacturing'], image: '/images/germany.jpg' },
  { name: 'Poland', flag: '🇵🇱', landmark: 'Warsaw Old Town', roles: ['Manufacturing', 'Logistics', 'Construction', 'Factory'], image: '/images/poland.jpg' },
  { name: 'Greece', flag: '🇬🇷', landmark: 'Santorini Coast', roles: ['Hospitality', 'Construction', 'Agriculture', 'Seafarer'], image: '/images/greece.jpg' },
  { name: 'Malaysia (KL)', flag: '🇲🇾', landmark: 'Petronas Towers', roles: ['Manufacturing', 'IT', 'Hospitality', 'Healthcare'], image: '/images/malaysia.jpg' },
];

const CHIP_COLORS = [
  'bg-[#1B4965] text-white',
  'bg-[#5FA8D3] text-white',
  'bg-[#FF6B35] text-white',
  'bg-[#0B3954] text-white',
  'bg-[#C9CCD5] text-[#1B4965]',
];

export default function CountryGuide() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="countries" className="bg-[#F2F6F9] py-16 sm:py-20 lg:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PillBadge text="DESTINATIONS" index={3} />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2436] mt-4 leading-tight">
            Where We Take{' '}
            <span className="text-[#1B4965]">You</span>
          </h2>
          <p className="text-[#0B2436]/60 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
            From the Gulf to Europe and Asia — we open doors to the world's most in-demand job markets.
          </p>
        </div>

        {/* Country Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {COUNTRIES.map((country, i) => (
            <div
              key={country.name}
              className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image with landmark overlay */}
              <div className="h-40 sm:h-44 overflow-hidden relative">
                <LazyImage
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  containerClass="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-2xl drop-shadow-lg block">{country.flag}</span>
                  <span className="text-white font-bold text-sm drop-shadow-lg">{country.name}</span>
                  <span className="text-white/70 text-[10px] block drop-shadow-lg">{country.landmark}</span>
                </div>
              </div>
              {/* Roles */}
              <div className="p-4">
                <div className="flex flex-wrap gap-1.5">
                  {country.roles.map((role) => (
                    <span
                      key={role}
                      className="text-[10px] font-medium bg-[#F2F6F9] text-[#0B2436]/70 px-2.5 py-1 rounded-full"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Country Chip Grid */}
        <div className="mt-10 text-center">
          <p className="text-sm font-semibold text-[#0B2436]/50 mb-4">ALL DESTINATIONS</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {COUNTRIES.map((country, i) => (
              <span
                key={country.name}
                className={`${CHIP_COLORS[i % CHIP_COLORS.length]} px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm inline-flex items-center gap-1.5`}
              >
                <span>{country.flag}</span> {country.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
