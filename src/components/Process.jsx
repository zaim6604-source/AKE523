import useInView from '../hooks/useInView';
import PillBadge from './PillBadge';

const STEPS = [
  { step: 1, icon: 'fa-clipboard-list', title: 'Register & Consult', subtitle: 'Walk in or call us', color: 'bg-[#FFD23F] text-[#2B1200]', border: 'border-[#FFD23F]' },
  { step: 2, icon: 'fa-file-lines', title: 'Documents & Visa', subtitle: 'We handle the paperwork', color: 'bg-[#00B4D8] text-white', border: 'border-[#00B4D8]' },
  { step: 3, icon: 'fa-stethoscope', title: 'Medical & Trade Test', subtitle: 'Clearance & certification', color: 'bg-[#FF7F11] text-white', border: 'border-[#FF7F11]' },
  { step: 4, icon: 'fa-check-double', title: 'Employer Confirmation', subtitle: 'Contract & final approval', color: 'bg-[#FF4500] text-white', border: 'border-[#FF4500]' },
  { step: 5, icon: 'fa-plane-departure', title: 'Ticketing & Departure', subtitle: 'Fly to your new job', color: 'bg-[#E63600] text-white', border: 'border-[#E63600]' },
];

export default function Process() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="process" className="relative overflow-hidden" ref={ref}>
      {/* Bright golden→orange gradient band */}
      <div className="bg-gradient-to-r from-[#FFD23F] via-[#FF7F11] to-[#FF4500] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <PillBadge text="HOW IT WORKS" index={4} />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 leading-tight">
              Your Journey in{' '}
              <span className="text-[#FFD23F]">Five Steps</span>
            </h2>
            <p className="text-white/80 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
              From registration to departure — we're with you every step of the way.
            </p>
          </div>

          {/* Boarding Pass Ticket Stubs */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 lg:-space-x-4 justify-center items-stretch">
            {STEPS.map((step, i) => (
              <div
                key={step.step}
                className={`ticket-stub relative flex-1 min-w-0 transition-all duration-700 ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 ${step.border} h-full`}>
                  {/* Boarding pass header strip */}
                  <div className={`${step.color} px-4 py-2 flex items-center justify-between text-xs font-bold`}>
                    <span className="flex items-center gap-1.5">
                      <i className="fas fa-ticket"></i> BOARDING PASS
                    </span>
                    <span className="opacity-80">STEP {step.step}/5</span>
                  </div>

                  {/* Perforated edge */}
                  <div className="h-2 relative overflow-hidden">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle, #FFD23F 2px, transparent 2px)',
                      backgroundSize: '10px 10px',
                      backgroundRepeat: 'repeat-x',
                    }} />
                  </div>

                  {/* Content */}
                  <div className="p-5 text-center">
                    <div className={`w-14 h-14 mx-auto mb-3 rounded-2xl ${step.color} flex items-center justify-center shadow-md`}>
                      <i className={`fas ${step.icon} text-xl`} />
                    </div>
                    <h3 className="text-sm font-black text-[#2B1200]">{step.title}</h3>
                    <p className="text-[10px] sm:text-xs text-[#2B1200]/50 mt-1 font-medium">{step.subtitle}</p>
                  </div>
                </div>

                {/* Connector arrow (desktop) */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-white/60 text-lg">
                    <i className="fas fa-chevron-right" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}