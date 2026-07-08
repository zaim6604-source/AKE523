import { useParams, Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import SafeImage from '../components/SafeImage';

const COUNTRY_DATA = {
  'saudi-arabia': { name: 'Saudi Arabia', flag: '🇸🇦', img: '/images/saudi.jpg', roles: ['Construction Worker', 'Healthcare Professional', 'Engineer', 'IT Specialist', 'Technician', 'Driver'], requirements: ['Valid passport (6+ months)', 'Educational certificates', 'Experience letters', 'CNIC', 'Medical fitness report'] },
  'uae': { name: 'United Arab Emirates', flag: '🇦🇪', img: '/images/uae.jpg', roles: ['Construction Supervisor', 'Hospitality Staff', 'Retail Associate', 'Driver', 'Technician', 'Security Guard'], requirements: ['Valid passport', 'Educational certificates', 'Experience letters', 'CNIC', 'Medical fitness report'] },
  'qatar': { name: 'Qatar', flag: '🇶🇦', img: '/images/qatar.jpg', roles: ['Hospitality Staff', 'Construction Worker', 'Heavy Equipment Operator', 'Engineer', 'Driver', 'Technician'], requirements: ['Valid passport', 'Educational certificates', 'Experience letters', 'CNIC', 'Medical fitness report'] },
  'kuwait': { name: 'Kuwait', flag: '🇰🇼', img: '/images/kuwait.jpg', roles: ['Construction Worker', 'Security Guard', 'Driver', 'Engineer', 'Technician', 'Healthcare Worker'], requirements: ['Valid passport', 'Educational certificates', 'Experience letters', 'CNIC', 'Medical fitness report'] },
  'oman': { name: 'Oman', flag: '🇴🇲', img: '/images/oman.jpg', roles: ['Oil & Gas Worker', 'Technician', 'Hospitality Staff', 'Logistics Coordinator', 'Driver', 'Engineer'], requirements: ['Valid passport', 'Educational certificates', 'Experience letters', 'CNIC', 'Medical fitness report'] },
  'germany': { name: 'Germany', flag: '🇩🇪', img: '/images/germany.jpg', roles: ['Healthcare Professional', 'IT Specialist', 'Engineer', 'Skilled Trade Worker', 'Logistics Staff'], requirements: ['Valid passport', 'Degree certificates', 'Language proficiency (preferred)', 'Experience letters', 'Medical fitness report'] },
  'poland': { name: 'Poland', flag: '🇵🇱', img: '/images/poland.jpg', roles: ['Construction Worker', 'Manufacturing Staff', 'Logistics Worker', 'IT Specialist', 'Warehouse Staff'], requirements: ['Valid passport', 'Educational certificates', 'Experience letters', 'Medical fitness report'] },
  'south-korea': { name: 'South Korea', flag: '🇰🇷', img: '/images/south-korea.jpg', roles: ['Manufacturing Staff', 'IT Engineer', 'Technician', 'Healthcare Worker', 'Logistics Staff'], requirements: ['Valid passport', 'Educational certificates', 'Experience letters', 'Language training (preferred)', 'Medical fitness report'] },
  'turkey': { name: 'Turkey', flag: '🇹🇷', img: '/images/turkey.jpg', roles: ['Hospitality Staff', 'Construction Worker', 'Retail Staff', 'Textile Worker', 'Driver'], requirements: ['Valid passport', 'Educational certificates', 'Experience letters', 'CNIC', 'Medical fitness report'] },
};

export default function CountryDetail() {
  const { slug } = useParams();
  const country = COUNTRY_DATA[slug];

  if (!country) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-[#141414] mb-4">Country Not Found</h1>
        <p className="text-[#141414]/60 mb-6">The country you're looking for isn't listed yet.</p>
        <Link to="/countries" className="bg-[#E10600] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1C1C1C] transition-all">View All Countries</Link>
      </div>
    );
  }

  return (
    <>
      {/* Country Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <SafeImage src={country.img} alt={country.name} className="w-full h-full object-cover" type="landmark" />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <FadeUp>
            <Link to="/countries" className="text-white/60 hover:text-[#FFD500] text-sm mb-4 inline-block transition-colors">
              <i className="fa-solid fa-arrow-left mr-2"></i>Back to Countries
            </Link>
            <span className="text-6xl block mb-3">{country.flag}</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-[Poppins] mb-4">{country.name}</h1>
            <p className="text-white/70 max-w-xl">
              Explore exciting career opportunities in {country.name}. Pak. Arsalan Corporation connects you with verified employers.
            </p>
          </FadeUp>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD500] via-[#E10600] to-transparent"></div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* In-Demand Roles */}
            <FadeUp>
              <span className="inline-block bg-[#E10600]/10 text-[#E10600] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4">
                <i className="fa-solid fa-briefcase mr-1.5"></i>IN-DEMAND ROLES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#141414] mb-6 font-[Poppins]">
                Jobs in {country.name}
              </h2>
              <div className="space-y-3">
                {country.roles.map((role, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border-l-4 border-[#E10600]">
                    <span className="w-8 h-8 rounded-full bg-[#FFD500] text-[#141414] flex items-center justify-center text-sm font-bold">{i + 1}</span>
                    <span className="font-medium text-[#141414]">{role}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Requirements */}
            <FadeUp delay={2}>
              <span className="inline-block bg-[#FFD500]/20 text-[#141414] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4">
                <i className="fa-solid fa-file-lines mr-1.5"></i>REQUIREMENTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#141414] mb-6 font-[Poppins]">
                What You'll Need
              </h2>
              <div className="bg-[#1C1C1C] rounded-2xl p-6 text-white">
                <ul className="space-y-3">
                  {country.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#FFD500] text-[#141414] flex items-center justify-center text-xs font-bold mt-0.5 shrink-0">
                        <i className="fa-solid fa-check"></i>
                      </span>
                      <span className="text-white/80">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>

          {/* Apply CTA */}
          <FadeUp className="text-center mt-12">
            <div className="bg-gradient-to-r from-[#E10600] to-[#1C1C1C] rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[Poppins]">
                Ready to Work in {country.name}?
              </h3>
              <p className="text-white/70 mb-6 max-w-xl mx-auto">
                Apply now and our team in Batagram will guide you through the entire process.
              </p>
              <a href={`https://wa.me/923005096511?text=${encodeURIComponent(`I'm interested in job opportunities in ${country.name}.`)}`}
                target="_blank" rel="noopener noreferrer"
                className="bg-[#FFD500] text-[#141414] font-bold px-8 py-4 rounded-full hover:bg-white transition-all shadow-lg inline-block">
                <i className="fa-brands fa-whatsapp mr-2"></i>Apply Now
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}