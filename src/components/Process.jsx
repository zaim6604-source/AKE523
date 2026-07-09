import FadeUp from './FadeUp';
import SectionBadge from './SectionBadge';

const STEPS = [
  { icon: 'fa-handshake', label: 'Register & Consult', desc: 'Walk in or WhatsApp us for a free consultation about your career goals.' },
  { icon: 'fa-file-contract', label: 'Documents & Visa', desc: 'We handle all paperwork, attestation, and visa application.' },
  { icon: 'fa-stethoscope', label: 'Medical & Trade Test', desc: 'Coordinated medical checkups and skill verification.' },
  { icon: 'fa-check-circle', label: 'Employer Confirmation', desc: 'Vetted employer match with offer letter and contract.' },
  { icon: 'fa-plane-departure', label: 'Ticketing & Departure', desc: 'Flight booking, orientation, and airport assistance.' },
];

export default function Process() {
  return (
    <section id="process" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Diagonal band background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1C] via-[#E10600] to-[#A30000]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 40px)',
        }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <SectionBadge text="HOW IT WORKS" color="bg-[#FFD500]" />
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Your 5-Step Journey Abroad
          </h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">
            A streamlined process designed to get you from application to departure with confidence.
          </p>
        </FadeUp>

        {/* Diagonal layout */}
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-5 md:gap-4 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#FFD500]/60 via-[#FFD500]/30 to-transparent"></div>

          {STEPS.map((step, i) => (
            <FadeUp
              key={i}
              delay={(i % 5) + 1}
              className="relative"
            >
              <div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 text-center border border-white/10 hover:bg-white/15 transition-all h-full"
                style={{ marginTop: i % 2 === 1 ? '2rem' : '0' }}
              >
                {/* Number circle */}
                <div className="w-12 h-12 rounded-full bg-[#FFD500] flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-[#141414] font-poppins font-bold text-lg">{i + 1}</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-xl text-[#FFD500] mx-auto mb-3">
                  <i className={`fa-solid ${step.icon}`}></i>
                </div>
                <h3 className="text-white font-poppins font-bold text-sm mb-2">{step.label}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}