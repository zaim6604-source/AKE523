import { useState } from 'react';
import FadeUp from './FadeUp';
import SectionBadge from './SectionBadge';

const SERVICES = [
  {
    icon: 'fa-briefcase',
    title: 'Overseas Job Placement',
    desc: 'End-to-end recruitment and placement across Gulf and European countries for skilled and semi-skilled professionals.',
    detail: 'We provide complete job placement services including job matching, employer interviews, offer letter processing, and post-placement support. Our extensive network spans construction, hospitality, healthcare, logistics, manufacturing, and oil & gas sectors.',
    bg: 'bg-[#E10600]',
    textColor: 'text-white',
  },
  {
    icon: 'fa-passport',
    title: 'Visa Processing',
    desc: 'Complete visa documentation and processing support for all destination countries.',
    detail: 'Our visa experts handle the entire visa application process — from document collection and form submission to follow-up with embassies and foreign missions. We ensure accuracy and timeliness for work, visit, and family visas.',
    bg: 'bg-[#1C1C1C]',
    textColor: 'text-white',
  },
  {
    icon: 'fa-file-lines',
    title: 'Document Attestation',
    desc: 'Professional attestation and verification of educational, professional, and personal documents.',
    detail: 'We handle the complete attestation chain including HEC, MOFA, and embassy attestations for educational documents, experience certificates, and personal documents required for international employment.',
    bg: 'bg-[#A30000]',
    textColor: 'text-white',
  },
  {
    icon: 'fa-stethoscope',
    title: 'Medical & Trade Tests',
    desc: 'Arrangement of mandatory medical examinations and trade test certifications.',
    detail: 'We coordinate with approved medical centers for mandatory health screenings and arrange trade test certifications to verify your skills meet international employer standards.',
    bg: 'bg-[#FFD500]',
    textColor: 'text-[#141414]',
  },
  {
    icon: 'fa-plane-departure',
    title: 'Pre-Departure Orientation',
    desc: 'Comprehensive orientation covering cultural adaptation, labor laws, and workplace expectations.',
    detail: 'Our orientation sessions prepare candidates for their new work environment including cultural norms, labor rights, safety practices, and practical tips for living and working abroad.',
    bg: 'bg-[#FF4D4D]',
    textColor: 'text-white',
  },
  {
    icon: 'fa-ticket',
    title: 'Air Ticketing & Travel',
    desc: 'Flight bookings, airport transfers, and travel coordination for a smooth departure.',
    detail: 'We arrange competitive airfare, coordinate airport transfers, provide travel documentation packs, and ensure our candidates have a smooth and stress-free departure experience.',
    bg: 'bg-[#1C1C1C]',
    textColor: 'text-white',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Employer Verification',
    desc: 'Thorough vetting of international employers to ensure legitimate and safe working conditions.',
    detail: 'Every employer in our network undergoes rigorous verification including license validation, site inspections, and reference checks to ensure they offer safe, fair, and legal working conditions.',
    bg: 'bg-[#E10600]',
    textColor: 'text-white',
  },
  {
    icon: 'fa-people-group',
    title: 'Manpower Supply',
    desc: 'Reliable supply of qualified manpower across construction, hospitality, retail, and service sectors.',
    detail: 'We maintain a large database of pre-screened, qualified candidates across multiple trades and professions, enabling us to fulfill bulk manpower requirements quickly and efficiently.',
    bg: 'bg-[#A30000]',
    textColor: 'text-white',
  },
];

export default function Services() {
  const [modalIndex, setModalIndex] = useState(null);

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <SectionBadge text="OUR SERVICES" color="bg-[#E10600]" />
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C]">
            Precision Recruitment Services
          </h2>
          <p className="text-[#1C1C1C]/60 mt-3 max-w-2xl mx-auto">
            From registration to departure — we handle every step of your international employment journey.
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((svc, i) => (
            <FadeUp
              key={i}
              delay={(i % 4) + 1}
            >
              <button
                onClick={() => setModalIndex(i)}
                className={`${svc.bg} ${svc.textColor} rounded-xl p-6 text-left w-full h-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl bg-white/20 mb-4">
                  <i className={`fa-solid ${svc.icon}`}></i>
                </div>
                <h3 className="font-poppins font-bold text-base mb-2">{svc.title}</h3>
                <p className={`text-sm leading-relaxed ${svc.textColor === 'text-white' ? 'text-white/80' : 'text-[#141414]/70'}`}>
                  {svc.desc}
                </p>
                <span className={`inline-flex items-center gap-1 text-xs font-semibold mt-4 ${svc.textColor === 'text-white' ? 'text-white/60' : 'text-[#141414]/60'}`}>
                  Learn more <i className="fa-solid fa-arrow-right text-xs"></i>
                </span>
              </button>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
          onClick={() => setModalIndex(null)}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div
            className="relative bg-white rounded-2xl max-w-lg w-full shadow-2xl modal-content overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`${SERVICES[modalIndex].bg} px-6 py-8 ${SERVICES[modalIndex].textColor}`}>
              <div className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl bg-white/20 mb-4">
                <i className={`fa-solid ${SERVICES[modalIndex].icon}`}></i>
              </div>
              <h3 className="font-poppins font-bold text-xl">{SERVICES[modalIndex].title}</h3>
            </div>
            <div className="p-6">
              <p className="text-[#1C1C1C]/70 leading-relaxed mb-6">
                {SERVICES[modalIndex].detail}
              </p>
              <a
                href="https://wa.me/923009050416"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FFD500] text-[#141414] font-bold px-6 py-3 rounded-full hover:bg-[#E10600] hover:text-white transition-all"
              >
                <i className="fa-brands fa-whatsapp"></i>
                Inquire on WhatsApp
              </a>
              <button
                onClick={() => setModalIndex(null)}
                className="block mt-3 text-sm text-[#1C1C1C]/50 hover:text-[#1C1C1C]"
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