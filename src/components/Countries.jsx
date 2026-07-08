import FadeUp from './FadeUp';
import SectionBadge from './SectionBadge';
import SafeImage from './SafeImage';

const COUNTRIES = [
  {
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    roles: 'Construction • Hospitality • Retail • Drivers',
    img: '/images/uae.jpg',
  },
  {
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    roles: 'Construction • Technicians • Security • Healthcare',
    img: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=600&q=80',
  },
  {
    name: 'Qatar',
    flag: '🇶🇦',
    roles: 'Hospitality • Construction • Drivers • Engineering',
    img: '/images/qatar.jpg',
  },
  {
    name: 'Oman',
    flag: '🇴🇲',
    roles: 'Oil & Gas • Technicians • Hospitality • Logistics',
    img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80',
  },
  {
    name: 'Kuwait',
    flag: '🇰🇼',
    roles: 'Construction • Security • Drivers • Engineering',
    img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80',
  },
  {
    name: 'Bahrain',
    flag: '🇧🇭',
    roles: 'Retail • Technicians • Hospitality • Finance',
    img: 'https://images.unsplash.com/photo-1503152394-c571994fd383?w=800',
  },
];

const CHIP_COLORS = [
  'bg-[#E0115F]',
  'bg-[#7B2D8E]',
  'bg-[#FFD700]',
  'bg-[#FF5C8A]',
  'bg-[#B8004F]',
  'bg-[#E0115F]',
];


export default function Countries() {
  return (
    <section id="countries" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <SectionBadge text="DESTINATIONS" color="bg-[#FF5C8A]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D0A1E]">
            Gulf Destinations We Serve
          </h2>
          <p className="text-[#5C1A32]/70 mt-3 max-w-2xl mx-auto">
            We place talent across all six Gulf Cooperation Council countries.
          </p>
        </FadeUp>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {COUNTRIES.map((c, i) => (
            <FadeUp key={i} delay={(i % 3) + 1}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 overflow-hidden img-zoom">
                  <SafeImage
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    type="landmark"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#3D0A1E] text-lg mb-1">
                    {c.flag} {c.name}
                  </h3>
                  <p className="text-[#E0115F] text-sm font-medium">In-demand roles:</p>
                  <p className="text-[#5C1A32]/70 text-sm">{c.roles}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Chip grid */}
        <FadeUp className="text-center">
          <p className="text-sm font-semibold text-[#5C1A32]/60 mb-3 tracking-wider">
            <i className="fa-solid fa-location-dot mr-1.5 text-[#E0115F]"></i>
            ALL DESTINATIONS
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {COUNTRIES.map((c, i) => (
              <span
                key={i}
                className={`${CHIP_COLORS[i]} text-white text-sm font-semibold px-4 py-2 rounded-full`}
              >
                {c.flag} {c.name}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}