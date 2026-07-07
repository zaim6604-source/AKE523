import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '1',
    title: 'Register & Consult',
    desc: 'Visit our Kutchery Road office or contact us to register. We assess your skills and discuss preferred destinations.',
  },
  {
    number: '2',
    title: 'Documents & Visa',
    desc: 'We guide you through document preparation, attestation, and visa application — ensuring everything is in order.',
  },
  {
    number: '3',
    title: 'Medical & Trade Test',
    desc: 'We coordinate your medical examination and any required trade skill tests for overseas employment.',
  },
  {
    number: '4',
    title: 'Employer Confirmation',
    desc: 'Once matched with a verified employer, we finalize your job offer, contract, and work permit processing.',
  },
  {
    number: '5',
    title: 'Ticketing & Departure',
    desc: 'We arrange your flight, provide pre-departure orientation, and ensure you travel with confidence.',
  },
];

export default function Process() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="process" className="relative overflow-hidden py-20 md:py-28">
      {/* Diagonal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-diver-primary via-diver-primary to-diver-cta" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 container-pad">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 bg-white/15 text-white font-semibold text-xs px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            <i className="fas fa-list-ol" />
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Your Journey in 5 Simple Steps
          </h2>
          <p className="text-white/70 text-lg mt-3 max-w-2xl mx-auto">
            From registration to departure — we make overseas recruitment simple and transparent.
          </p>
        </div>

        {/* Anchor Timeline */}
        <div ref={ref} className="max-w-3xl mx-auto relative">
          {/* Vertical rope line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-diver-accent via-white to-diver-cta transform -translate-x-1/2" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Anchor node */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-diver-accent text-diver-highlight flex items-center justify-center font-heading font-extrabold text-lg shadow-lg border-4 border-white">
                {step.number}
              </div>

              {/* Content card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 flex-1 border border-white/10 hover:bg-white/15 transition-all duration-300">
                <h3 className="font-bold text-white text-lg font-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
