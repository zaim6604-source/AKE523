import useInView from '../hooks/useInView';
import PillBadge from './PillBadge';
import LazyImage from './LazyImage';

const COUNTRIES = [
  { name: 'Saudi Arabia', flag: '🇸🇦', roles: ['Construction', 'Healthcare', 'Drivers', 'Hospitality'], image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400&q=80' },
  { name: 'UAE', flag: '🇦🇪', roles: ['Construction', 'Hospitality', 'Drivers', 'Retail'], image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80' },
  { name: 'Qatar', flag: '🇶🇦', roles: ['Construction', 'Hospitality', 'Security', 'Technicians'], image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80' },
  { name: 'Germany', flag: '🇩🇪', roles: ['Healthcare', 'IT', 'Engineers', 'Manufacturing'], image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=80' },
  { name: 'Poland', flag: '🇵🇱', roles: ['Manufacturing', 'Logistics', 'Construction', 'Factory'], image: 'https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?w=400&q=80' },
  { name: 'Italy', flag: '🇮🇹', roles: ['Manufacturing', 'Hospitality', 'Caregivers', 'Construction'], image: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=400&q=80' },
  { name: 'Malaysia', flag: '🇲🇾', roles: ['Manufacturing', 'IT', 'Hospitality', 'Healthcare'], image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&q=80' },
  { name: 'South Korea', flag: '🇰🇷', roles: ['Manufacturing', 'Construction', 'Technicians', 'Agriculture'], image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=400&q=80' },
  { name: 'Oman', flag: '🇴🇲', roles: ['Construction', 'Drivers', 'Hospitality', 'Oil & Gas'], image: 'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=400&q=80' },
];

const CHIP_COLORS = [
  'bg-[#FFD23F] text-[#2B1200]',
  'bg-[#00B4D8] text-white',
  'bg-[#FF4500] text-white',
  'bg-[#FF7F11] text-white',
  'bg-[#E63600] text-white',
];

export default function CountryGuide() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="countries" className="bg-[#FFF3E6] py-16 sm:py-20 lg:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PillBadge text="DESTINATIONS" index={3} />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B1200] mt-4 leading-tight">
            Where We Take{' '}
            <span className="text-[#FF7F11]">You</span>
          </h2>
          <p className="text-[#2B1200]/60 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
            From the Gulf to Europe and Asia — we open doors to the world's most in-demand job markets.
          </p>
        </div>

        {/* Country Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {COUNTRIES.map((country, i) => (
            <div
              key={country.name}
              className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image with hover zoom */}
              <div className="h-40 sm:h-44 overflow-hidden relative">
                <LazyImage
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  containerClass="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="text-2xl drop-shadow-lg">{country.flag}</span>
                  <span className="text-white font-bold text-sm drop-shadow-lg">{country.name}</span>
                </div>
              </div>
              {/* Roles */}
              <div className="p-4">
                <div className="flex flex-wrap gap-1.5">
                  {country.roles.map((role) => (
                    <span
                      key={role}
                      className="text-[10px] font-medium bg-[#FFF3E6] text-[#2B1200]/70 px-2.5 py-1 rounded-full"
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
          <p className="text-sm font-semibold text-[#2B1200]/50 mb-4">ALL DESTINATIONS</p>
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