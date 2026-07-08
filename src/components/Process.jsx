import useInView from '../hooks/useInView';
import PillBadge from './PillBadge';

const STEPS = [
  { step: 1, icon: 'fa-clipboard-list', title: 'Register & Consult', subtitle: 'Walk in or call us', color: 'bg-[#FF6B35] text-white' },
  { step: 2, icon: 'fa-file-lines', title: 'Documents & Visa', subtitle: 'We handle the paperwork', color: 'bg-[#5FA8D3] text-white' },
  { step: 3, icon: 'fa-stethoscope', title: 'Medical & Trade Test', subtitle: 'Clearance & certification', color: 'bg-[#1B4965] text-white' },
  { step: 4, icon: 'fa-check-double', title: 'Employer Confirmation', subtitle: 'Contract & final approval', color: 'bg-[#FF6B35] text-white' },
  { step: 5, icon: 'fa-plane-departure', title: 'Ticketing & Departure', subtitle: 'Fly to your new job', color: 'bg-[#5FA8D3] text-white' },
];

export default function Process() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="process" className="relative overflow-hidden py-16 sm:py-20 lg:py-24 angled-band" ref={ref}>
      {/* Content sits on top of angled band */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PillBadge text="HOW IT WORKS" index={4} />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 leading-tight">
            Your Journey in{' '}
            <span className="text-[#FF6B35]">Five Steps</span>
          </h2>
          <p className="text-white/80 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
            From registration to departure — we're with you every step of the way.
          </p>
        </div>

        {/* Numbered step cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.step}
              className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 transition-all duration-700 hover:bg-white/20 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#FF6B35] text-white font-bold text-sm flex items-center justify-center shadow-lg">
                {step.step}
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl ${step.color} flex items-center justify-center shadow-md`}>
                <i className={`fas ${step.icon} text-xl`} />
              </div>

              <h3 className="text-white font-bold text-sm">{step.title}</h3>
              <p className="text-white/60 text-xs mt-1 font-medium">{step.subtitle}</p>

              {/* Connector arrow (desktop) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-white/30 text-lg">
                  <i className="fas fa-chevron-right" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
