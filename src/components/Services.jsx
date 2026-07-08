import FadeUp from './FadeUp';
import SectionBadge from './SectionBadge';

const SERVICES = [
  {
    icon: 'fa-briefcase',
    title: 'Overseas Job Placement',
    desc: 'End-to-end recruitment and placement across Gulf countries for skilled and semi-skilled professionals.',
    barColor: 'bg-[#E0115F]',
  },
  {
    icon: 'fa-passport',
    title: 'Visa Processing',
    desc: 'Complete visa documentation and processing support for all Gulf destination countries.',
    barColor: 'bg-[#7B2D8E]',
  },
  {
    icon: 'fa-file-lines',
    title: 'Document Attestation',
    desc: 'Professional attestation and verification of educational, professional, and personal documents.',
    barColor: 'bg-[#FFD700]',
  },
  {
    icon: 'fa-stethoscope',
    title: 'Medical & Trade Test Coordination',
    desc: 'Arrangement of mandatory medical examinations and trade test certifications for Gulf employment.',
    barColor: 'bg-[#FF5C8A]',
  },
  {
    icon: 'fa-plane-departure',
    title: 'Pre-Departure Orientation',
    desc: 'Comprehensive orientation sessions covering cultural adaptation, labor laws, and workplace expectations.',
    barColor: 'bg-[#B8004F]',
  },
  {
    icon: 'fa-ticket',
    title: 'Air Ticketing & Travel Support',
    desc: 'Flight bookings, airport transfers, and travel coordination for a smooth departure experience.',
    barColor: 'bg-[#E0115F]',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Employer Verification',
    desc: 'Thorough vetting of Gulf employers to ensure legitimate, safe, and fair working conditions.',
    barColor: 'bg-[#7B2D8E]',
  },
  {
    icon: 'fa-people-group',
    title: 'Skilled & Unskilled Manpower Supply',
    desc: 'Reliable supply of qualified manpower across construction, hospitality, retail, and service sectors.',
    barColor: 'bg-[#FF5C8A]',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <SectionBadge text="OUR SERVICES" color="bg-[#E0115F]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D0A1E]">
            Comprehensive Gulf Recruitment Services
          </h2>
          <p className="text-[#5C1A32]/70 mt-3 max-w-2xl mx-auto">
            From registration to departure — we handle every step of your Gulf employment journey.
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((svc, i) => (
            <FadeUp
              key={i}
              delay={(i % 4) + 1}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`${svc.barColor} h-2 w-full`}></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl text-white mb-4" style={{ backgroundColor: svc.barColor.replace('bg-[', '').replace(']', '') }}>
                  <i className={`fa-solid ${svc.icon}`}></i>
                </div>
                <h3 className="font-bold text-[#3D0A1E] text-base mb-2">{svc.title}</h3>
                <p className="text-[#5C1A32]/70 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}