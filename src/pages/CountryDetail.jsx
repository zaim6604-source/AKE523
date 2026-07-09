import { useParams, Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import MarqueeBar from '../components/MarqueeBar';

const COUNTRIES_DATA = {
  'saudi-arabia': {
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    capital: 'Riyadh',
    image: '/images/saudi-arabia.jpg',
    desc: 'The largest economy in the Middle East with massive infrastructure projects under Vision 2030. Saudi Arabia offers lucrative opportunities across construction, oil & gas, healthcare, and engineering sectors.',
    roles: [
      { title: 'Construction Workers', count: '500+' },
      { title: 'Heavy Equipment Operators', count: '200+' },
      { title: 'Electricians & Technicians', count: '300+' },
      { title: 'Healthcare Professionals', count: '150+' },
      { title: 'Drivers (Heavy & Light)', count: '400+' },
      { title: 'Engineers (Civil, Mechanical)', count: '100+' },
    ],
    requirements: [
      'Valid passport (min 6 months validity)',
      'Educational certificates attested',
      'Professional experience letters',
      'Medical fitness certificate',
      'Clean police clearance',
      'Age: 22–50 years',
    ],
    salary: 'SAR 1,500 – 5,000+',
  },
  'uae': {
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    capital: 'Abu Dhabi',
    image: '/images/uae.jpg',
    desc: 'A global business and tourism hub, the UAE offers diverse career opportunities across Dubai, Abu Dhabi, and the other emirates. High demand exists in hospitality, construction, retail, and logistics.',
    roles: [
      { title: 'Hospitality Staff', count: '300+' },
      { title: 'Construction Workers', count: '400+' },
      { title: 'Retail Sales Associates', count: '200+' },
      { title: 'Drivers & Delivery Personnel', count: '250+' },
      { title: 'Technicians (AC, Electrical)', count: '150+' },
      { title: 'Security Personnel', count: '100+' },
    ],
    requirements: [
      'Valid passport (min 6 months validity)',
      'Educational certificates attested',
      'Professional experience letters',
      'Medical fitness certificate',
      'Clean police clearance',
      'Age: 22–45 years',
    ],
    salary: 'AED 1,200 – 4,000+',
  },
  'qatar': {
    name: 'Qatar',
    flag: '🇶🇦',
    capital: 'Doha',
    image: '/images/qatar.jpg',
    desc: 'A rapidly developing nation with world-class infrastructure and a thriving economy. Qatar offers excellent opportunities in hospitality, engineering, construction, and service sectors.',
    roles: [
      { title: 'Hospitality Staff', count: '200+' },
      { title: 'Construction Workers', count: '300+' },
      { title: 'Drivers', count: '150+' },
      { title: 'Security Personnel', count: '100+' },
      { title: 'Technicians & Mechanics', count: '120+' },
      { title: 'Engineers', count: '80+' },
    ],
    requirements: [
      'Valid passport (min 6 months validity)',
      'Educational certificates attested',
      'Professional experience letters',
      'Medical fitness certificate',
      'Clean police clearance',
      'Age: 22–48 years',
    ],
    salary: 'QAR 1,500 – 4,500+',
  },
  'kuwait': {
    name: 'Kuwait',
    flag: '🇰🇼',
    capital: 'Kuwait City',
    image: '/images/kuwait.jpg',
    desc: 'A prosperous Gulf nation with a strong oil-based economy. Kuwait offers stable employment opportunities in construction, engineering, security, and technical fields.',
    roles: [
      { title: 'Construction Workers', count: '250+' },
      { title: 'Security Personnel', count: '150+' },
      { title: 'Drivers', count: '200+' },
      { title: 'Technicians', count: '100+' },
      { title: 'Engineers', count: '60+' },
      { title: 'Oil & Gas Workers', count: '80+' },
    ],
    requirements: [
      'Valid passport (min 6 months validity)',
      'Educational certificates attested',
      'Professional experience letters',
      'Medical fitness certificate',
      'Clean police clearance',
      'Age: 22–50 years',
    ],
    salary: 'KWD 150 – 400+',
  },
  'oman': {
    name: 'Oman',
    flag: '🇴🇲',
    capital: 'Muscat',
    image: '/images/oman.jpg',
    desc: 'A stable and welcoming Gulf nation with growing opportunities across oil & gas, tourism, logistics, and infrastructure development. Known for its high quality of life.',
    roles: [
      { title: 'Oil & Gas Workers', count: '150+' },
      { title: 'Technicians', count: '120+' },
      { title: 'Hospitality Staff', count: '100+' },
      { title: 'Logistics Personnel', count: '80+' },
      { title: 'Construction Workers', count: '200+' },
      { title: 'Drivers', count: '100+' },
    ],
    requirements: [
      'Valid passport (min 6 months validity)',
      'Educational certificates attested',
      'Professional experience letters',
      'Medical fitness certificate',
      'Clean police clearance',
      'Age: 22–50 years',
    ],
    salary: 'OMR 200 – 500+',
  },
  'germany': {
    name: 'Germany',
    flag: '🇩🇪',
    capital: 'Berlin',
    image: '/images/germany.jpg',
    desc: 'Europe\'s largest economy offers excellent opportunities for skilled technicians, engineers, IT professionals, and healthcare workers. Germany has a structured immigration pathway for skilled workers.',
    roles: [
      { title: 'IT Professionals', count: '200+' },
      { title: 'Engineers', count: '150+' },
      { title: 'Healthcare Workers', count: '100+' },
      { title: 'Technicians', count: '120+' },
      { title: 'Manufacturing Workers', count: '80+' },
      { title: 'Logistics Personnel', count: '60+' },
    ],
    requirements: [
      'Valid passport (min 6 months validity)',
      'Educational certificates attested & translated',
      'Professional experience letters',
      'German language proficiency (A2/B1 preferred)',
      'Medical fitness certificate',
      'Age: 22–45 years',
    ],
    salary: '€2,000 – 4,500+',
  },
  'poland': {
    name: 'Poland',
    flag: '🇵🇱',
    capital: 'Warsaw',
    image: '/images/poland.jpg',
    desc: 'A rapidly growing European economy with increasing demand for skilled workers in manufacturing, logistics, IT, and construction. Poland offers competitive salaries and EU access.',
    roles: [
      { title: 'Manufacturing Workers', count: '300+' },
      { title: 'Logistics Personnel', count: '150+' },
      { title: 'Construction Workers', count: '200+' },
      { title: 'IT Professionals', count: '80+' },
      { title: 'Technicians', count: '100+' },
      { title: 'Warehouse Operators', count: '120+' },
    ],
    requirements: [
      'Valid passport (min 6 months validity)',
      'Educational certificates',
      'Professional experience letters',
      'Work permit/visa processing',
      'Medical fitness certificate',
      'Age: 22–50 years',
    ],
    salary: 'PLN 4,000 – 8,000+',
  },
  'south-korea': {
    name: 'South Korea',
    flag: '🇰🇷',
    capital: 'Seoul',
    image: '/images/south-korea.jpg',
    desc: 'A technological powerhouse offering diverse opportunities in manufacturing, electronics, shipbuilding, and IT. South Korea has a structured employment permit system for foreign workers.',
    roles: [
      { title: 'Manufacturing Workers', count: '250+' },
      { title: 'Technicians', count: '100+' },
      { title: 'Logistics Personnel', count: '80+' },
      { title: 'IT Professionals', count: '60+' },
      { title: 'Shipbuilding Workers', count: '100+' },
      { title: 'Electronics Assemblers', count: '150+' },
    ],
    requirements: [
      'Valid passport (min 6 months validity)',
      'Educational certificates attested',
      'Professional experience letters',
      'EPS-TOPIK test (Korean language)',
      'Medical fitness certificate',
      'Age: 22–45 years',
    ],
    salary: 'KRW 2,000,000 – 3,500,000+',
  },
  'turkey': {
    name: 'Turkey',
    flag: '🇹🇷',
    capital: 'Ankara',
    image: '/images/turkey.jpg',
    desc: 'A transcontinental hub bridging Europe and Asia with diverse opportunities in hospitality, construction, textiles, manufacturing, and tourism sectors.',
    roles: [
      { title: 'Hospitality Staff', count: '150+' },
      { title: 'Construction Workers', count: '200+' },
      { title: 'Textile Workers', count: '100+' },
      { title: 'Manufacturing Workers', count: '120+' },
      { title: 'Tourism Personnel', count: '80+' },
      { title: 'Drivers', count: '60+' },
    ],
    requirements: [
      'Valid passport (min 6 months validity)',
      'Educational certificates',
      'Professional experience letters',
      'Work permit/visa processing',
      'Medical fitness certificate',
      'Age: 22–50 years',
    ],
    salary: 'TRY 15,000 – 30,000+',
  },
};

export default function CountryDetail() {
  const { slug } = useParams();
  const country = COUNTRIES_DATA[slug];

  if (!country) {
    return (
      <>
        <MarqueeBar />
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold text-[#141414] mb-4 font-poppins">Country Not Found</h1>
          <p className="text-[#444]/70 mb-8 font-inter">The destination you're looking for doesn't exist.</p>
          <Link
            to="/countries"
            className="inline-block bg-[#E10600] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#1C1C1C] transition-all"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>Back to Countries
          </Link>
        </div>
      </>
    );
  }

  const applyWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello Gul Shahzad Corporation! I am interested in applying for opportunities in ${country.name}. Please guide me on the available roles and procedure.`
    );
    window.open(`https://wa.me/92311509987?text=${msg}`, '_blank');
  };

  const chatWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello, I want to know more about ${country.name} job opportunities.`
    );
    window.open(`https://wa.me/92311509987?text=${msg}`, '_blank');
  };

  return (
    <>
      <MarqueeBar />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <FadeUp>
            <div className="flex items-center gap-2 text-sm text-[#444]/60 mb-6 font-inter">
              <Link to="/" className="hover:text-[#E10600] transition-colors">Home</Link>
              <span>/</span>
              <Link to="/countries" className="hover:text-[#E10600] transition-colors">Countries</Link>
              <span>/</span>
              <span className="text-[#141414] font-semibold">{country.name}</span>
            </div>
          </FadeUp>

          {/* Hero image */}
          <FadeUp>
            <div className="relative rounded-2xl overflow-hidden mb-10 h-48 sm:h-56 md:h-72 shadow-lg">
              <img
                src={country.image}
                alt={`${country.name} skyline`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('bg-[#1C1C1C]');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <span className="text-5xl md:text-6xl drop-shadow-lg">{country.flag}</span>
                  <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-poppins drop-shadow-lg">
                      {country.name}
                    </h1>
                    <p className="text-white/80 font-inter flex items-center gap-1.5 mt-1">
                      <i className="fa-solid fa-location-dot text-[#FFD500]"></i>
                      {country.capital}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Left */}
            <div className="flex-1">
              <FadeUp delay={2}>
                <p className="text-[#444]/80 leading-relaxed mb-8 font-inter text-lg">
                  {country.desc}
                </p>
              </FadeUp>

              {/* Roles */}
              <FadeUp delay={3}>
                <h2 className="text-xl font-bold text-[#141414] mb-4 font-poppins">
                  <i className="fa-solid fa-briefcase text-[#E10600] mr-2"></i>
                  Available Positions
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {country.roles.map((role, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-[#E10600] flex justify-between items-center">
                      <span className="font-medium text-[#141414] text-sm font-inter">{role.title}</span>
                      <span className="bg-[#E10600]/10 text-[#E10600] text-xs font-bold px-2.5 py-1 rounded-full">
                        {role.count}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeUp>

              {/* Requirements */}
              <FadeUp delay={4}>
                <h2 className="text-xl font-bold text-[#141414] mb-4 font-poppins">
                  <i className="fa-solid fa-clipboard-list text-[#E10600] mr-2"></i>
                  General Requirements
                </h2>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
                  <ul className="space-y-3">
                    {country.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-inter">
                        <span className="w-5 h-5 rounded-full bg-[#E10600]/10 text-[#E10600] flex items-center justify-center shrink-0 mt-0.5">
                          <i className="fa-solid fa-check text-[10px]"></i>
                        </span>
                        <span className="text-[#444]/80">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            </div>

            {/* Right sidebar */}
            <FadeUp delay={3} className="w-full lg:w-96 shrink-0">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-28">
                <div className="text-center mb-6">
                  <span className="text-5xl block mb-3">{country.flag}</span>
                  <h3 className="font-bold text-[#141414] text-xl font-poppins">{country.name}</h3>
                  <p className="text-[#444]/70 text-sm font-inter">{country.capital}</p>
                </div>

                <div className="bg-[#F5F5F5] rounded-xl p-4 mb-5">
                  <p className="text-xs text-[#444]/60 font-inter mb-1">Expected Salary Range</p>
                  <p className="text-xl font-bold text-[#E10600] font-poppins">{country.salary}</p>
                </div>

                <button
                  onClick={applyWhatsApp}
                  className="w-full bg-[#FFD500] text-[#141414] font-bold py-3.5 rounded-full hover:bg-[#E10600] hover:text-white transition-all shadow-md text-sm mb-3"
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i>Apply via WhatsApp
                </button>

                <button
                  onClick={chatWhatsApp}
                  className="block w-full border-2 border-[#1C1C1C] text-[#141414] font-semibold py-3 rounded-full hover:bg-[#1C1C1C] hover:text-white transition-all text-sm text-center"
                >
                  <i className="fa-brands fa-whatsapp mr-2"></i>Chat with Us
                </button>

                <div className="mt-5 pt-4 border-t border-gray-100 text-xs text-[#444]/60 text-center font-inter">
                  <p>License No. 2263/RWP</p>
                  <p className="mt-1">Gul Shahzad Corporation & Manpower Consultants</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}