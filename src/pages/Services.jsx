import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import SafeImage from '../components/SafeImage';

const SERVICES = [
  { icon: 'fa-briefcase', title: 'Overseas Job Placement', desc: 'End-to-end recruitment and placement for skilled and semi-skilled professionals across global markets.', img: '/images/services-1.jpg' },
  { icon: 'fa-passport', title: 'Visa Processing', desc: 'Complete visa documentation, application, and processing support for all destination countries.', img: '/images/services-2.jpg' },
  { icon: 'fa-file-lines', title: 'Document Attestation', desc: 'Professional verification and attestation of educational, professional, and personal documents.', img: '/images/services-3.jpg' },
  { icon: 'fa-stethoscope', title: 'Medical & Trade Tests', desc: 'Coordination of mandatory medical exams and trade test certifications for overseas employment.', img: '/images/services-4.jpg' },
  { icon: 'fa-plane-departure', title: 'Pre-Departure Orientation', desc: 'Comprehensive orientation covering cultural adaptation, labor laws, and workplace expectations abroad.', img: '/images/services-5.jpg' },
  { icon: 'fa-ticket', title: 'Air Ticketing & Travel', desc: 'Flight bookings, transit coordination, and travel support for a smooth departure experience.', img: '/images/services-6.jpg' },
  { icon: 'fa-shield-halved', title: 'Employer Verification', desc: 'Thorough vetting of overseas employers to ensure legitimate, safe, and fair working conditions.', img: '/images/services-7.jpg' },
  { icon: 'fa-people-group', title: 'Manpower Supply', desc: 'Reliable supply of qualified manpower across construction, hospitality, healthcare, and industrial sectors.', img: '/images/services-8.jpg' },
];

export default function Services() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative py-20 lg:py-28 bg-[#1C1C1C] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <SafeImage src="/images/services-1.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="inline-block bg-[#FFD500]/20 text-[#FFD500] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-4">
              <i className="fa-solid fa-certificate mr-1.5"></i>SERVICES
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-[Poppins] mb-4">
              Our Services
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Comprehensive overseas employment services from Pak. Arsalan Corporation — designed to get you from application to departure.
            </p>
          </FadeUp>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD500] via-[#E10600] to-transparent"></div>
      </section>

      {/* Service Cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <FadeUp key={i} delay={(i % 4) + 1}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="h-44 overflow-hidden img-zoom">
                    <SafeImage src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" type="default" />
                  </div>
                  <div className="p-5">
                    <div className="w-10 h-10 rounded-lg bg-[#E10600] flex items-center justify-center text-white mb-3">
                      <i className={`fa-solid ${svc.icon}`}></i>
                    </div>
                    <h3 className="font-bold text-[#141414] text-base mb-2 font-[Poppins]">{svc.title}</h3>
                    <p className="text-[#141414]/60 text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#E10600] to-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-[Poppins]">Ready to Get Started?</h2>
            <p className="text-white/80 mb-8">Take the first step toward your international career today.</p>
            <a href="https://wa.me/923005096511" target="_blank" rel="noopener noreferrer"
              className="bg-[#FFD500] text-[#141414] font-bold px-8 py-4 rounded-full hover:bg-white transition-all shadow-lg inline-block">
              <i className="fa-brands fa-whatsapp mr-2"></i>Apply via WhatsApp
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  );
}