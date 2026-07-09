import { useState } from 'react';
import FadeUp from './FadeUp';
import SectionBadge from './SectionBadge';
import SafeImage from './SafeImage';

const COUNTRIES = [
  {
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    roles: 'Construction • Technicians • Security • Healthcare • Drivers',
    salary: 'SAR 1,500 – 5,000/month',
    requirements: 'Valid passport, educational certs, experience letters, medical fitness',
    processing: '3–6 weeks',
    img: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=600&q=80',
    chipColor: 'bg-[#E10600]',
  },
  {
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    roles: 'Construction • Hospitality • Retail • Drivers • Engineering',
    salary: 'AED 1,200 – 5,000/month',
    requirements: 'Valid passport, educational certs, experience letters, medical fitness',
    processing: '2–5 weeks',
    img: '/images/uae.jpg',
    chipColor: 'bg-[#1C1C1C]',
  },
  {
    name: 'Qatar',
    flag: '🇶🇦',
    roles: 'Hospitality • Construction • Drivers • Engineering • Security',
    salary: 'QAR 1,200 – 4,500/month',
    requirements: 'Valid passport, educational certs, experience letters, medical fitness',
    processing: '3–5 weeks',
    img: '/images/qatar.jpg',
    chipColor: 'bg-[#A30000]',
  },
  {
    name: 'Kuwait',
    flag: '🇰🇼',
    roles: 'Construction • Security • Drivers • Engineering • Hospitality',
    salary: 'KWD 120 – 400/month',
    requirements: 'Valid passport, educational certs, experience letters, medical fitness',
    processing: '3–6 weeks',
    img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80',
    chipColor: 'bg-[#FFD500]',
  },
  {
    name: 'Oman',
    flag: '🇴🇲',
    roles: 'Oil & Gas • Technicians • Hospitality • Logistics • Drivers',
    salary: 'OMR 200 – 600/month',
    requirements: 'Valid passport, educational certs, experience letters, medical fitness',
    processing: '3–6 weeks',
    img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80',
    chipColor: 'bg-[#FF4D4D]',
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    roles: 'Healthcare • IT • Engineering • Hospitality • Skilled Trades',
    salary: '€2,000 – 4,000/month',
    requirements: 'Valid passport, recognized qualifications, German language (B1+), experience',
    processing: '8–16 weeks',
    img: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80',
    chipColor: 'bg-[#1C1C1C]',
  },
  {
    name: 'Poland',
    flag: '🇵🇱',
    roles: 'Manufacturing • Logistics • Construction • Hospitality • Warehousing',
    salary: '€1,200 – 2,500/month',
    requirements: 'Valid passport, experience letters, medical fitness, basic English',
    processing: '6–12 weeks',
    img: 'https://images.unsplash.com/photo-1746945434504-d53bab2c7aa6?w=600&q=80',
    chipColor: 'bg-[#E10600]',
  },
  {
    name: 'South Korea',
    flag: '🇰🇷',
    roles: 'Manufacturing • Shipbuilding • Agriculture • Fisheries • Construction',
    salary: 'KRW 2,000,000 – 3,500,000/month',
    requirements: 'Valid passport, EPS-TOPIK pass, medical fitness, age 18–39',
    processing: '12–24 weeks',
    img: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&q=80',
    chipColor: 'bg-[#A30000]',
  },
  {
    name: 'Turkey',
    flag: '🇹🇷',
    roles: 'Construction • Textiles • Hospitality • Manufacturing • Retail',
    salary: 'TRY 15,000 – 35,000/month',
    requirements: 'Valid passport, educational certs, experience letters, medical fitness',
    processing: '4–8 weeks',
    img: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=600&q=80',
    chipColor: 'bg-[#FFD500]',
  },
];

export default function Countries() {
  const [modalIndex, setModalIndex] = useState(null);

  return (
    <section id="countries" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <SectionBadge text="DESTINATIONS" color="bg-[#E10600]" />
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C]">
            Global Destinations We Serve
          </h2>
          <p className="text-[#1C1C1C]/60 mt-3 max-w-2xl mx-auto">
            We place talent across the Gulf, Europe, and Asia.
          </p>
        </FadeUp>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {COUNTRIES.map((c, i) => (
            <FadeUp key={i} delay={(i % 3) + 1}>
              <button
                onClick={() => setModalIndex(i)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group w-full text-left cursor-pointer"
              >
                <div className="h-48 overflow-hidden img-zoom">
                  <SafeImage
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    type="landmark"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-poppins font-bold text-[#1C1C1C] text-lg mb-1">
                    {c.flag} {c.name}
                  </h3>
                  <p className="text-[#E10600] text-sm font-medium">In-demand roles:</p>
                  <p className="text-[#1C1C1C]/60 text-sm">{c.roles}</p>
                </div>
              </button>
            </FadeUp>
          ))}
        </div>

        {/* Chip grid */}
        <FadeUp className="text-center">
          <p className="text-sm font-semibold text-[#1C1C1C]/50 mb-3 tracking-wider">
            <i className="fa-solid fa-location-dot mr-1.5 text-[#E10600]"></i>
            ALL DESTINATIONS
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {COUNTRIES.map((c, i) => (
              <span
                key={i}
                className={`${c.chipColor} text-sm font-semibold px-4 py-2 rounded-full ${c.chipColor === 'bg-[#FFD500]' ? 'text-[#141414]' : 'text-white'}`}
              >
                {c.flag} {c.name}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Country Detail Modal */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
          onClick={() => setModalIndex(null)}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div
            className="relative bg-white rounded-2xl max-w-lg w-full shadow-2xl modal-content overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <SafeImage
                src={COUNTRIES[modalIndex].img}
                alt={COUNTRIES[modalIndex].name}
                className="w-full h-full object-cover"
                type="landmark"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-poppins font-bold text-white text-2xl">
                  {COUNTRIES[modalIndex].flag} {COUNTRIES[modalIndex].name}
                </h3>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 space-y-4">
              <div>
                <h4 className="font-bold text-[#E10600] text-sm uppercase tracking-wider mb-1">
                  <i className="fa-solid fa-briefcase mr-1.5"></i>In-Demand Roles
                </h4>
                <p className="text-[#1C1C1C]/70 text-sm">{COUNTRIES[modalIndex].roles}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F5F5F5] rounded-xl p-4">
                  <h4 className="font-bold text-[#E10600] text-xs uppercase tracking-wider mb-1">Salary Range</h4>
                  <p className="text-[#1C1C1C] font-semibold text-sm">{COUNTRIES[modalIndex].salary}</p>
                </div>
                <div className="bg-[#F5F5F5] rounded-xl p-4">
                  <h4 className="font-bold text-[#E10600] text-xs uppercase tracking-wider mb-1">Processing</h4>
                  <p className="text-[#1C1C1C] font-semibold text-sm">{COUNTRIES[modalIndex].processing}</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-[#E10600] text-sm uppercase tracking-wider mb-1">
                  <i className="fa-solid fa-check-circle mr-1.5"></i>Requirements
                </h4>
                <p className="text-[#1C1C1C]/70 text-sm">{COUNTRIES[modalIndex].requirements}</p>
              </div>
              <a
                href="https://wa.me/923009050416"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#FFD500] text-[#141414] font-bold text-center py-3.5 rounded-full hover:bg-[#E10600] hover:text-white transition-all"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>Apply for {COUNTRIES[modalIndex].name}
              </a>
              <button
                onClick={() => setModalIndex(null)}
                className="block w-full text-center text-sm text-[#1C1C1C]/50 hover:text-[#1C1C1C] py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}