import SectionWrapper from './SectionWrapper';

const steps = [
  { icon: 'fa-clipboard-list', label: 'Register & Consult', desc: 'Walk in or WhatsApp us for a free career consultation.' },
  { icon: 'fa-file-alt', label: 'Documents & Visa', desc: 'We prepare your documents and handle visa applications.' },
  { icon: 'fa-stethoscope', label: 'Medical & Trade Test', desc: 'Coordinated medical exams and skill assessments.' },
  { icon: 'fa-handshake', label: 'Employer Confirmation', desc: 'Receive your formal offer and employment contract.' },
  { icon: 'fa-plane-departure', label: 'Ticketing & Departure', desc: 'We book your flight and brief you before departure.' },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 px-4 bg-primary overflow-hidden">
      <div className="diagonal-band absolute inset-0 bg-primary opacity-100" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-accent text-ink mb-6">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 font-display">
            Your Journey, Simplified
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Five simple steps from registration to departure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
          {steps.map((step, i) => (
            <div key={step.label} className="text-center">
              <div className="relative flex items-center justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white text-3xl border-2 border-accent/50 group-hover:bg-accent transition-all">
                  <i className={`fas ${step.icon}`} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-ink text-xs font-bold flex items-center justify-center shadow-lg">
                  {i + 1}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[calc(100%-80px)] h-0.5 border-t-2 border-dashed border-accent/40" />
              )}
              <h3 className="text-lg font-bold text-white mb-1">{step.label}</h3>
              <p className="text-white/70 text-sm max-w-[160px] mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="md:hidden mt-8 space-y-6">
          {steps.map((step, i) => (
            <div key={step.label} className="flex gap-5 items-start">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white shadow-lg flex-shrink-0 border border-accent/50">
                  <i className={`fas ${step.icon}`} />
                </div>
                {i < steps.length - 1 && <div className="w-0.5 h-10 bg-accent/30" />}
              </div>
              <div className="pt-1">
                <span className="text-xs font-bold text-accent">Step {i + 1}</span>
                <h3 className="text-lg font-bold text-white">{step.label}</h3>
                <p className="text-white/70 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
