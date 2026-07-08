import useInView from '../hooks/useInView';

const steps = [
  { icon: 'fa-solid fa-clipboard-list', label: 'Register & Consult', desc: 'Reach out to us — we\'ll discuss your goals and match you with the right opportunity.', color: '#E0218A' },
  { icon: 'fa-solid fa-file-lines', label: 'Documents & Visa', desc: 'Submit your documents and we\'ll handle the visa application process for you.', color: '#FF6FB5' },
  { icon: 'fa-solid fa-stethoscope', label: 'Medical & Trade Test', desc: 'We coordinate your medical exams and any required trade skill assessments.', color: '#00BFA6' },
  { icon: 'fa-solid fa-building-columns', label: 'Employer Confirmation', desc: 'Receive your official job offer and employment confirmation from your employer.', color: '#C2055E' },
  { icon: 'fa-solid fa-plane-departure', label: 'Ticketing & Departure', desc: 'We book your flight and ensure you\'re fully prepared for departure.', color: '#FFB6C1' },
];

export default function Process() {
  const [ref, visible] = useInView(0.05);

  return (
    <section id="process" className="relative">
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,60 720,40 C960,20 1200,60 1440,40 L1440,60 L0,60 Z" fill="#FFB6C1" />
        </svg>
      </div>

      <div style={{ backgroundColor: '#FFB6C1' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Pill Badge */}
          <div className="flex justify-center mb-4">
            <span className="pill-3 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider">
              HOW IT WORKS
            </span>
          </div>

          <p className="text-center text-base sm:text-lg mb-10 sm:mb-12 max-w-2xl mx-auto" style={{ color: '#5A1E3A' }}>
            Five simple steps to your next opportunity abroad.
          </p>

          {/* Filmstrip */}
          <div ref={ref} className="filmstrip relative bg-[#2A0515] rounded-2xl overflow-hidden shadow-xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
            <div className="filmstrip-scroll flex gap-4 sm:gap-6 overflow-x-auto pb-2 snap-x snap-mandatory">
              {steps.map((s, i) => (
                <div
                  key={s.label}
                  className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-${i + 1} flex-shrink-0 w-[220px] sm:w-[250px] lg:w-[260px] snap-start`}
                >
                  <div
                    className="rounded-xl p-5 sm:p-6 h-full shadow-lg border-2 transition-transform duration-300 hover:-translate-y-1"
                    style={{ backgroundColor: s.color + '15', borderColor: s.color + '50' }}
                  >
                    {/* Step Number */}
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mb-3 shadow-md"
                      style={{ backgroundColor: s.color }}
                    >
                      {i + 1}
                    </div>

                    {/* Icon */}
                    <i className={`${s.icon} text-xl sm:text-2xl mb-3`} style={{ color: s.color }} />

                    {/* Label */}
                    <h3 className="text-sm sm:text-base font-bold m-0 mb-2" style={{ color: '#fff' }}>
                      {s.label}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#FFB6C1' }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <p className="text-center text-xs sm:text-sm mt-4 font-medium" style={{ color: '#5A1E3A' }}>
            <i className="fa-solid fa-arrow-left mr-2" />
            Scroll to explore
            <i className="fa-solid fa-arrow-right ml-2" />
          </p>
        </div>
      </div>
    </section>
  );
}