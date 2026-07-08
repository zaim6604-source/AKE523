const STEPS = [
  {
    step: 1,
    title: 'Submit Inquiry',
    desc: 'Contact us via WhatsApp, phone, or visit our office on Rajana Road to discuss your work visa needs.',
    icon: 'fa-pen-to-square',
  },
  {
    step: 2,
    title: 'Document Review',
    desc: 'Our team reviews your documents and guides you through any requirements or corrections needed.',
    icon: 'fa-file-circle-check',
  },
  {
    step: 3,
    title: 'Visa Processing',
    desc: 'We handle the entire visa application process with the respective embassy or employer.',
    icon: 'fa-passport',
  },
  {
    step: 4,
    title: 'Medical &amp; Tests',
    desc: 'We coordinate medical exams and trade tests required for your destination country.',
    icon: 'fa-stethoscope',
  },
  {
    step: 5,
    title: 'Travel &amp; Departure',
    desc: 'Final travel coordination, flight booking, and pre-departure briefing before you leave.',
    icon: 'fa-plane-departure',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative py-16 md:py-24 overflow-hidden">
      {/* Diagonal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-highlight -skew-y-2 origin-left scale-105" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 skew-y-2 origin-left">
        {/* Section pill */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full">
            <i className="fas fa-arrow-right" />
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
            From Application to Departure
          </h2>
          <p className="text-white/80 max-w-xl mx-auto">
            A simple, streamlined process to get you working abroad — fast.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-5 gap-5">
          {STEPS.map((s) => (
            <div key={s.step} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {s.step < 5 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 border-t-2 border-dashed border-white/30" />
              )}

              {/* Circle */}
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white text-2xl mb-5 z-10">
                <i className={`fas ${s.icon}`} />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-7 h-7 rounded-full bg-accent text-ink text-xs font-extrabold">
                  {s.step}
                </span>
              </div>

              <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-[220px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}