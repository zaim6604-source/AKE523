import FadeUp from '../components/FadeUp';
import SectionBadge from '../components/SectionBadge';
import MarqueeBar from '../components/MarqueeBar';
import CTABand from '../components/CTABand';

const SERVICES = [
  {
    icon: 'fa-briefcase',
    title: 'Overseas Job Placement',
    desc: 'End-to-end recruitment and placement across the globe for skilled, semi-skilled, and professional candidates. We connect you with verified employers in the Middle East, Europe, and Asia.',
    color: 'bg-[#E10600]',
  },
  {
    icon: 'fa-passport',
    title: 'Visa Processing & Documentation',
    desc: 'Complete visa application support including work visas, family visas, and visit visas. We handle all paperwork, form submissions, and embassy coordination for a smooth process.',
    color: 'bg-[#FF4D4D]',
  },
  {
    icon: 'fa-file-lines',
    title: 'Document Attestation & Legalization',
    desc: 'Professional attestation of educational degrees, professional certificates, experience letters, and personal documents. We manage the entire chain from HEC to foreign ministries.',
    color: 'bg-[#1C1C1C]',
  },
  {
    icon: 'fa-stethoscope',
    title: 'Medical & Trade Test Coordination',
    desc: 'Arrangement of mandatory medical examinations and trade test certifications required for overseas employment. We coordinate with approved medical centers and testing facilities.',
    color: 'bg-[#FFD500]',
    textColor: 'text-[#141414]',
  },
  {
    icon: 'fa-plane-departure',
    title: 'Pre-Departure Orientation',
    desc: 'Comprehensive orientation sessions covering cultural adaptation, labor laws, workplace expectations, and practical tips for living and working abroad successfully.',
    color: 'bg-[#A30000]',
  },
  {
    icon: 'fa-ticket',
    title: 'Travel & Ticketing Support',
    desc: 'Flight bookings, airport transfers, and complete travel coordination. We ensure a smooth departure experience with all logistics handled end-to-end.',
    color: 'bg-[#E10600]',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Employer Verification & Vetting',
    desc: 'Thorough due diligence and verification of overseas employers to ensure legitimate, safe, and fair working conditions. We protect our candidates from fraudulent job offers.',
    color: 'bg-[#FF4D4D]',
  },
  {
    icon: 'fa-people-group',
    title: 'Skilled & Unskilled Manpower Supply',
    desc: 'Reliable supply of qualified manpower across construction, hospitality, manufacturing, logistics, healthcare, retail, and service sectors to meet your workforce needs.',
    color: 'bg-[#1C1C1C]',
  },
];

export default function Services() {
  return (
    <>
      <MarqueeBar />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <SectionBadge text="OUR SERVICES" color="bg-[#E10600]" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141414] font-poppins">
              Consulting-Grade Recruitment Services
            </h1>
            <p className="text-[#444]/70 mt-3 max-w-2xl mx-auto font-inter">
              From registration to departure — we deliver end-to-end manpower solutions with speed and precision.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <FadeUp key={i} delay={(i % 4) + 1} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className={`${svc.color} h-2 w-full`}></div>
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl text-white mb-4 ${svc.color}`}>
                    <i className={`fa-solid ${svc.icon}`}></i>
                  </div>
                  <h3 className="font-bold text-[#141414] text-base mb-2 font-poppins">{svc.title}</h3>
                  <p className="text-[#444]/70 text-sm leading-relaxed font-inter">{svc.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}