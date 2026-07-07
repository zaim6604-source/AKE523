import useInView from '../hooks/useInView';

const steps = [
  { number: '01', title: 'Consultation & Needs Analysis', desc: 'We start by understanding your business needs or career goals through a detailed consultation.' },
  { number: '02', title: 'Sourcing & Screening', desc: 'Our team sources and screens candidates or opportunities to find the perfect match.' },
  { number: '03', title: 'Interviews & Shortlisting', desc: 'We coordinate interviews and help shortlist the best-fit candidates or positions.' },
  { number: '04', title: 'Offer & Onboarding', desc: 'From offer negotiation to onboarding, we ensure a smooth transition for all parties.' },
  { number: '05', title: 'Ongoing HR Support', desc: 'We provide continued HR support, check-ins, and follow-up to ensure lasting success.' },
];

export default function Process() {
  const [ref, inView] = useInView();

  return (
    <section id="process" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" style={{ transform: 'skewY(-3deg)', transformOrigin: 'top left' }} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" style={{ transform: 'skewY(3deg)', transformOrigin: 'bottom right' }} />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 container-pad">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 bg-white/15 text-white font-semibold text-xs px-4 py-1.5 rounded-full mb-4">
            <i className="fas fa-list-ol text-xs" />
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white font-heading">
            Our Simple 5-Step Process
          </h2>
          <p className="text-white/70 text-lg mt-3 max-w-2xl mx-auto">
            A streamlined approach to finding the right talent or the right role.
          </p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative flex items-start mb-10 last:mb-0 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-heading font-extrabold text-xl shadow-lg border-4 border-white/30 ${i % 2 === 0 ? 'bg-cta text-ink' : 'bg-white text-primary'}`}>
                {step.number}
              </div>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute left-7 top-14 w-0.5 h-16 bg-gradient-to-b from-white/40 to-transparent" />
              )}

              <div className="ml-6 flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                <h3 className="font-bold text-white text-lg font-heading mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}