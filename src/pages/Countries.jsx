import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import SafeImage from '../components/SafeImage';

const COUNTRIES = [
  { slug: 'saudi-arabia', name: 'Saudi Arabia', flag: '🇸🇦', roles: 'Construction · Healthcare · Engineering · IT', img: '/images/saudi.jpg' },
  { slug: 'uae', name: 'United Arab Emirates', flag: '🇦🇪', roles: 'Construction · Hospitality · Retail · Drivers', img: '/images/uae.jpg' },
  { slug: 'qatar', name: 'Qatar', flag: '🇶🇦', roles: 'Hospitality · Construction · Engineering · Drivers', img: '/images/qatar.jpg' },
  { slug: 'kuwait', name: 'Kuwait', flag: '🇰🇼', roles: 'Construction · Security · Engineering · Drivers', img: '/images/kuwait.jpg' },
  { slug: 'oman', name: 'Oman', flag: '🇴🇲', roles: 'Oil & Gas · Technicians · Hospitality · Logistics', img: '/images/oman.jpg' },
  { slug: 'germany', name: 'Germany', flag: '🇩🇪', roles: 'Healthcare · IT · Engineering · Skilled Trades', img: '/images/germany.jpg' },
  { slug: 'poland', name: 'Poland', flag: '🇵🇱', roles: 'Construction · Manufacturing · Logistics · IT', img: '/images/poland.jpg' },
  { slug: 'south-korea', name: 'South Korea', flag: '🇰🇷', roles: 'Manufacturing · IT · Engineering · Healthcare', img: '/images/south-korea.jpg' },
  { slug: 'turkey', name: 'Turkey', flag: '🇹🇷', roles: 'Hospitality · Construction · Retail · Textiles', img: '/images/turkey.jpg' },
];

export default function Countries() {
  return (
    <>
      <section className="relative py-20 lg:py-28 bg-[#1C1C1C] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <SafeImage src="/images/uae.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="inline-block bg-[#FFD500]/20 text-[#FFD500] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4">
              <i className="fa-solid fa-certificate mr-1.5"></i>COUNTRIES
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-[Poppins] mb-4">
              Global Destinations
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Explore opportunities across the Gulf, Europe, and Asia. We connect talent to the world.
            </p>
          </FadeUp>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD500] via-[#E10600] to-transparent"></div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.map((c, i) => (
              <FadeUp key={i} delay={(i % 3) + 1}>
                <Link to={`/countries/${c.slug}`} className="block group">
                  <div className="relative h-72 rounded-xl overflow-hidden shadow-md">
                    <SafeImage src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" type="landmark" />
                    <div className="absolute inset-0 tile-overlay"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                      <span className="text-3xl mb-1 block">{c.flag}</span>
                      <h3 className="text-xl font-bold text-white font-[Poppins]">{c.name}</h3>
                      <p className="text-white/70 text-sm mt-1">{c.roles}</p>
                      <span className="inline-block mt-2 text-[#FFD500] text-sm font-semibold">
                        View Opportunities <i className="fa-solid fa-arrow-right ml-1"></i>
                      </span>
                    </div>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E10600] to-[#FFD500]"></div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}