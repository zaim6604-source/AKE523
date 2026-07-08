import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import SectionBadge from '../components/SectionBadge';
import MarqueeBar from '../components/MarqueeBar';

const COUNTRIES = [
  {
    name: 'Saudi Arabia',
    slug: 'saudi-arabia',
    flag: '🇸🇦',
    capital: 'Riyadh',
    roles: 'Construction • Oil & Gas • Healthcare • Engineering • Technicians',
    desc: 'The largest economy in the Middle East with massive demand for skilled professionals across construction, oil & gas, healthcare, and engineering sectors.',
    image: '/images/saudi-arabia.jpg',
    chipColor: 'bg-[#E10600]',
  },
  {
    name: 'United Arab Emirates',
    slug: 'uae',
    flag: '🇦🇪',
    capital: 'Abu Dhabi',
    roles: 'Hospitality • Construction • Retail • Drivers • Technicians',
    desc: 'A global hub for business and tourism, offering diverse opportunities in hospitality, construction, retail, and logistics across Dubai, Abu Dhabi, and beyond.',
    image: '/images/uae.jpg',
    chipColor: 'bg-[#FF4D4D]',
  },
  {
    name: 'Qatar',
    slug: 'qatar',
    flag: '🇶🇦',
    capital: 'Doha',
    roles: 'Hospitality • Construction • Engineering • Drivers • Security',
    desc: 'A rapidly growing economy with world-class infrastructure projects and high demand for hospitality, engineering, and construction professionals.',
    image: '/images/qatar.jpg',
    chipColor: 'bg-[#1C1C1C]',
  },
  {
    name: 'Kuwait',
    slug: 'kuwait',
    flag: '🇰🇼',
    capital: 'Kuwait City',
    roles: 'Construction • Security • Engineering • Drivers • Technicians',
    desc: 'A prosperous Gulf nation with a strong oil economy and ongoing demand for skilled workers in construction, engineering, and technical fields.',
    image: '/images/kuwait.jpg',
    chipColor: 'bg-[#A30000]',
  },
  {
    name: 'Oman',
    slug: 'oman',
    flag: '🇴🇲',
    capital: 'Muscat',
    roles: 'Oil & Gas • Technicians • Hospitality • Logistics • Construction',
    desc: 'A stable and welcoming Gulf nation with growing opportunities in oil & gas, tourism, logistics, and infrastructure development.',
    image: '/images/oman.jpg',
    chipColor: 'bg-[#E10600]',
  },
  {
    name: 'Germany',
    slug: 'germany',
    flag: '🇩🇪',
    capital: 'Berlin',
    roles: 'Technicians • Engineering • IT • Healthcare • Manufacturing',
    desc: 'Europe\'s largest economy with high demand for skilled technicians, engineers, IT professionals, and healthcare workers.',
    image: '/images/germany.jpg',
    chipColor: 'bg-[#FF4D4D]',
  },
  {
    name: 'Poland',
    slug: 'poland',
    flag: '🇵🇱',
    capital: 'Warsaw',
    roles: 'Manufacturing • Logistics • Construction • IT • Technicians',
    desc: 'A growing European economy with increasing opportunities in manufacturing, logistics, IT, and construction sectors.',
    image: '/images/poland.jpg',
    chipColor: 'bg-[#1C1C1C]',
  },
  {
    name: 'South Korea',
    slug: 'south-korea',
    flag: '🇰🇷',
    capital: 'Seoul',
    roles: 'Manufacturing • Technicians • Logistics • IT • Engineering',
    desc: 'A technological powerhouse offering opportunities in manufacturing, electronics, shipbuilding, and IT sectors.',
    image: '/images/south-korea.jpg',
    chipColor: 'bg-[#A30000]',
  },
  {
    name: 'Turkey',
    slug: 'turkey',
    flag: '🇹🇷',
    capital: 'Ankara',
    roles: 'Hospitality • Construction • Textiles • Manufacturing • Tourism',
    desc: 'A transcontinental hub bridging Europe and Asia with diverse opportunities in hospitality, construction, textiles, and tourism.',
    image: '/images/turkey.jpg',
    chipColor: 'bg-[#E10600]',
  },
];

export default function Countries() {
  return (
    <>
      <MarqueeBar />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <SectionBadge text="DESTINATIONS" color="bg-[#1C1C1C]" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141414] font-poppins">
              Countries We Serve
            </h1>
            <p className="text-[#444]/70 mt-3 max-w-2xl mx-auto font-inter">
              Explore career opportunities across our global destination network.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.map((c, i) => (
              <FadeUp key={i} delay={(i % 3) + 1}>
                <Link
                  to={`/countries/${c.slug}`}
                  className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                >
                  <div className="h-36 relative overflow-hidden img-zoom">
                    <img
                      src={c.image}
                      alt={`${c.name} skyline`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('bg-[#1C1C1C]', 'flex', 'items-center', 'justify-center');
                        const span = document.createElement('span');
                        span.className = 'text-6xl';
                        span.textContent = c.flag;
                        e.target.parentElement.appendChild(span);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <span className="text-2xl drop-shadow-lg">{c.flag}</span>
                      <span className="text-white font-bold text-sm drop-shadow-lg font-poppins">{c.name}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#141414] text-lg font-poppins mb-2">{c.name}</h3>
                    <p className="text-[#E10600] text-sm font-semibold font-inter mb-1">
                      <i className="fa-solid fa-briefcase mr-1"></i>In-demand roles:
                    </p>
                    <p className="text-[#444]/70 text-sm mb-3 font-inter">{c.roles}</p>
                    <p className="text-[#444]/70 text-xs leading-relaxed font-inter line-clamp-2">{c.desc}</p>
                    <span className="inline-block mt-3 text-[#E10600] text-sm font-semibold font-poppins group-hover:gap-2 transition-all">
                      View Opportunities <i className="fa-solid fa-arrow-right ml-1"></i>
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="text-center mt-12">
            <p className="text-sm font-semibold text-[#444]/60 mb-3 tracking-wider font-inter">
              <i className="fa-solid fa-location-dot mr-1.5 text-[#E10600]"></i>
              ALL DESTINATIONS
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {COUNTRIES.map((c, i) => (
                <Link
                  key={i}
                  to={`/countries/${c.slug}`}
                  className={`${c.chipColor} text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-all font-poppins`}
                >
                  {c.flag} {c.name}
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}