import useInView from '../hooks/useInView';

const features = [
  { icon: 'fa-solid fa-user-tie', title: 'Experienced Consultants', desc: 'Seasoned HR professionals with deep industry knowledge.', color: '#1B4965' },
  { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Tailored Solutions', desc: 'Customized HR strategies designed for your unique needs.', color: '#5FA8D3' },
  { icon: 'fa-solid fa-lock', title: 'Confidential & Compliant', desc: 'Discreet, ethical service with full regulatory compliance.', color: '#FF6B35' },
  { icon: 'fa-solid fa-bullseye', title: 'Practical & Results-Driven', desc: 'Actionable recommendations that deliver measurable outcomes.', color: '#0B3954' },
  { icon: 'fa-solid fa-headset', title: 'Dedicated Support', desc: 'Ongoing guidance and support whenever you need it.', color: '#1B4965' },
  { icon: 'fa-solid fa-location-dot', title: 'Local Expertise', desc: 'Deep understanding of Islamabad&apos;s business and HR landscape.', color: '#5FA8D3' },
];

export default function WhyChooseUs() {
  const [ref, visible] = useInView(0.1);

  return (
    <section id="why-us" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Pill Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider"
            style={{ backgroundColor: '#1B4965', color: 'white' }}>
            WHY M &amp; L
          </span>
        </div>

        <p className="text-center text-base sm:text-lg mb-10 sm:mb-12 max-w-2xl mx-auto" style={{ color: '#4A5C6B' }}>
          What sets us apart in Islamabad&apos;s HR consulting landscape.
        </p>

        <div ref={ref} className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-${(i % 3) + 1} rounded-2xl p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              style={{ backgroundColor: 'white', flex: '1 1 280px', maxWidth: '360px', borderTop: `3px solid ${f.color}` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                  style={{ backgroundColor: f.color + '15', color: f.color }}
                >
                  <i className={`${f.icon} text-sm`} />
                </div>
                <div>
                  <h3 className="text-sm font-bold m-0 mb-1" style={{ color: '#0B2436' }}>
                    {f.title}
                  </h3>
                  <p className="text-xs leading-relaxed m-0" style={{ color: '#4A5C6B' }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}