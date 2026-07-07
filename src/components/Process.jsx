import useInView from '../hooks/useInView';

const steps = [
  { icon: 'fa-solid fa-clipboard-list', label: 'Consultation & Assessment', desc: 'We start with a thorough discussion to understand your HR needs and goals.', color: '#FF6B35' },
  { icon: 'fa-solid fa-magnifying-glass-chart', label: 'HR Audit & Planning', desc: 'We assess your current practices and develop a strategic HR plan.', color: '#5FA8D3' },
  { icon: 'fa-solid fa-pen-ruler', label: 'Solution Design', desc: 'Custom HR solutions are designed to address your specific challenges.', color: '#1B4965' },
  { icon: 'fa-solid fa-gears', label: 'Implementation', desc: 'We work alongside your team to put the solutions into action.', color: '#FF6B35' },
  { icon: 'fa-solid fa-arrows-rotate', label: 'Ongoing Support & Review', desc: 'Continuous guidance and periodic reviews to ensure lasting results.', color: '#5FA8D3' },
];

export default function Process() {
  const [ref, visible] = useInView(0.05);

  return (
    <section id="process" className="relative">
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,60 720,40 C960,20 1200,60 1440,40 L1440,60 L0,60 Z" fill="#F2F6F9" />
        </svg>
      </div>

      <div className="relative" style={{ backgroundColor: '#1B4965' }}>
        {/* Angled band effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -bottom-24 left-0 right-0" style={{ backgroundColor: '#1B4965', transform: 'skewY(-2deg)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Pill Badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.25)' }}>
              HOW WE WORK
            </span>
          </div>

          <p className="text-center text-base sm:text-lg mb-10 sm:mb-12 max-w-2xl mx-auto" style={{ color: '#5FA8D3' }}>
            A structured approach to delivering lasting HR results.
          </p>

          <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
            {steps.map((s, i) => (
              <div
                key={s.label}
                className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-${i + 1} text-center`}
              >
                <div className="rounded-2xl p-6 sm:p-7 h-full shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {/* Step Number */}
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-extrabold text-lg sm:text-xl mb-4 mx-auto shadow-lg"
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
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#C9CCD5' }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}