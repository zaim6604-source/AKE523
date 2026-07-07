import useInView from '../hooks/useInView';

const services = [
  { title: 'HR Consulting', desc: 'Strategic HR guidance to align your people practices with business goals.', color: '#1B4965', icon: 'fa-solid fa-handshake' },
  { title: 'Recruitment & Staffing', desc: 'End-to-end hiring solutions to find the right talent for your organization.', color: '#5FA8D3', icon: 'fa-solid fa-user-plus' },
  { title: 'Payroll & Benefits Management', desc: 'Accurate payroll processing and benefits administration for your team.', color: '#FF6B35', icon: 'fa-solid fa-coins' },
  { title: 'HR Policy & Compliance', desc: 'Develop compliant policies and navigate labor law requirements with confidence.', color: '#C9CCD5', icon: 'fa-solid fa-file-shield' },
  { title: 'Training & Development', desc: 'Custom training programs to upskill your workforce and drive performance.', color: '#0B3954', icon: 'fa-solid fa-chalkboard-user' },
  { title: 'Performance Management', desc: 'Design effective performance review systems that drive results.', color: '#1B4965', icon: 'fa-solid fa-chart-line' },
  { title: 'Organization Development', desc: 'Change management and organizational design for growing businesses.', color: '#5FA8D3', icon: 'fa-solid fa-diagram-project' },
  { title: 'Outsourced HR (HR-as-a-Service)', desc: 'Affordable, on-demand HR support without the overhead of a full-time team.', color: '#FF6B35', icon: 'fa-solid fa-cloud' },
];

export default function Services() {
  const [ref, visible] = useInView(0.05);

  return (
    <section id="services" className="relative">
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,60 720,40 C960,20 1200,60 1440,40 L1440,60 L0,60 Z" fill="#C9CCD5" />
        </svg>
      </div>

      <div style={{ backgroundColor: '#C9CCD5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Pill Badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider"
              style={{ backgroundColor: '#1B4965', color: 'white' }}>
              OUR SERVICES
            </span>
          </div>

          <p className="text-center text-base sm:text-lg mb-10 sm:mb-12 max-w-2xl mx-auto" style={{ color: '#4A5C6B' }}>
            Comprehensive HR solutions to support your organization at every stage.
          </p>

          <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-${(i % 4) + 1} rounded-2xl p-6 sm:p-7 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg`}
                style={{ backgroundColor: 'white' }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                  style={{ backgroundColor: s.color + '15', color: s.color }}
                >
                  <i className={`${s.icon} text-lg`} />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold m-0 mb-2" style={{ color: '#0B2436' }}>
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: '#4A5C6B' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}