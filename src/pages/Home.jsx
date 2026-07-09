import Hero from '../components/Hero';
import MarqueeBar from '../components/MarqueeBar';
import StatBand from '../components/StatBand';
import FadeUp from '../components/FadeUp';
import SectionBadge from '../components/SectionBadge';
import CTABand from '../components/CTABand';

const SERVICES_TEASER = [
  { icon: 'fa-briefcase', title: 'Overseas Job Placement', desc: 'End-to-end recruitment across the globe for skilled professionals.' },
  { icon: 'fa-passport', title: 'Visa Processing', desc: 'Complete visa documentation and processing support.' },
  { icon: 'fa-file-lines', title: 'Document Attestation', desc: 'Professional attestation of educational and professional documents.' },
  { icon: 'fa-plane-departure', title: 'Pre-Departure Support', desc: 'Orientation, ticketing, and travel coordination.' },
];

const FEATURED_DESTINATIONS = [
  { name: 'Saudi Arabia', slug: 'saudi-arabia', flag: '🇸🇦', roles: 'Construction • Oil & Gas • Healthcare' },
  { name: 'UAE', slug: 'uae', flag: '🇦🇪', roles: 'Hospitality • Construction • Retail' },
  { name: 'Qatar', slug: 'qatar', flag: '🇶🇦', roles: 'Hospitality • Engineering • Drivers' },
  { name: 'South Korea', slug: 'south-korea', flag: '🇰🇷', roles: 'Manufacturing • Technicians • Logistics' },
];

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBar />
      <StatBand />

      {/* Services Teaser */}
      <section id="services" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <SectionBadge text="WHAT WE DO" color="bg-[#E10600]" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141414] font-poppins">
              Consulting-Grade Recruitment Services
            </h2>
            <p className="text-[#444]/70 mt-3 max-w-2xl mx-auto font-inter">
              From registration to departure — we handle every step of your employment journey.
            </p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES_TEASER.map((svc, i) => (
              <FadeUp key={i} delay={(i % 4) + 1} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-[#E10600]">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#E10600] flex items-center justify-center text-xl text-white mb-4">
                    <i className={`fa-solid ${svc.icon}`}></i>
                  </div>
                  <h3 className="font-bold text-[#141414] text-base mb-2 font-poppins">{svc.title}</h3>
                  <p className="text-[#444]/70 text-sm leading-relaxed font-inter">{svc.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="text-center mt-8">
            <a
              href="/services"
              className="inline-block bg-[#1C1C1C] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#E10600] transition-all shadow-md text-sm"
            >
              View All Services <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </FadeUp>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <SectionBadge text="DESTINATIONS" color="bg-[#1C1C1C]" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141414] font-poppins">
              Global Reach, Local Expertise
            </h2>
            <p className="text-[#444]/70 mt-3 max-w-2xl mx-auto font-inter">
              We place talent across the Middle East, Europe, and Asia.
            </p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED_DESTINATIONS.map((d, i) => (
              <FadeUp key={i} delay={(i % 4) + 1}>
                <a
                  href={`/countries/${d.slug}`}
                  className="block bg-[#F5F5F5] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-[#E10600]/10"
                >
                  <span className="text-3xl mb-3 block">{d.flag}</span>
                  <h3 className="font-bold text-[#141414] text-lg font-poppins">{d.name}</h3>
                  <p className="text-[#444]/70 text-sm mt-1 font-inter">{d.roles}</p>
                  <span className="inline-block mt-3 text-[#E10600] text-sm font-semibold">
                    View Opportunities <i className="fa-solid fa-arrow-right ml-1"></i>
                  </span>
                </a>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="text-center mt-8">
            <a
              href="/countries"
              className="inline-block bg-[#1C1C1C] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#E10600] transition-all shadow-md text-sm"
            >
              All Destinations <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </FadeUp>
        </div>
      </section>

      <CTABand />
    </>
  );
}