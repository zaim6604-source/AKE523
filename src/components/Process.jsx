import FadeUp from './FadeUp';
import SectionBadge from './SectionBadge';

const STEPS = [
  { icon: 'fa-handshake', label: 'Register & Consult', color: 'bg-[#E0115F]' },
  { icon: 'fa-file-contract', label: 'Documents & Visa', color: 'bg-[#7B2D8E]' },
  { icon: 'fa-stethoscope', label: 'Medical & Trade Test', color: 'bg-[#FFD700]' },
  { icon: 'fa-check-circle', label: 'Employer Confirmation', color: 'bg-[#FF5C8A]' },
  { icon: 'fa-plane-departure', label: 'Ticketing & Departure', color: 'bg-[#B8004F]' },
];

export default function Process() {
  return (
    <section id="process" className="py-16 lg:py-24 bg-gradient-to-r from-[#E0115F] to-[#7B2D8E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <SectionBadge text="HOW IT WORKS" color="bg-[#FFD700]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Your Journey to the Gulf
          </h2>
          <p className="text-white/80 mt-3 max-w-2xl mx-auto">
            A streamlined 5-step process designed to get you from application to departure with confidence.
          </p>
        </FadeUp>

        <div className="flex flex-col md:flex-row items-center justify-center md:gap-0 gap-8 relative">
          {STEPS.map((step, i) => (
            <FadeUp
              key={i}
              delay={(i % 5) + 1}
              className="flex flex-col items-center md:w-1/5 relative"
            >
              {/* Diamond */}
              <div className="relative flex flex-col items-center">
                <div className={`diamond ${step.color} shadow-xl flex items-center justify-center`}>
                  <div className="diamond-inner text-white text-center">
                    <span className="text-xs font-bold block leading-none">{i + 1}</span>
                    <i className={`fa-solid ${step.icon} text-lg`}></i>
                  </div>
                </div>
                {/* Connector */}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-[40px] left-[60%] w-[70%] h-0.5 border-t-2 border-dashed border-white/40"></div>
                )}
              </div>
              <p className="text-white text-sm font-semibold mt-4 text-center max-w-28">
                {step.label}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}