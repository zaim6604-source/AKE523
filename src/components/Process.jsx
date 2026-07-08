import useScrollReveal from '../hooks/useScrollReveal';

const steps = [
  { num: 1, title: 'Inquiry & Consultation', desc: 'Contact us via WhatsApp, phone, or visit either of our offices in Karachi or Rawalpindi.', icon: 'fas fa-clipboard-list' },
  { num: 2, title: 'Documentation & Submission', desc: 'Submit your documents. We verify, attest, and prepare your complete visa application package.', icon: 'fas fa-file-alt' },
  { num: 3, title: 'Visa Processing & Ticketing', desc: 'We process your visa with Gulf authorities and book your confirmed airline tickets.', icon: 'fas fa-passport' },
  { num: 4, title: 'Medical & Trade Tests', desc: 'We coordinate medical examinations and any required trade tests at authorized centers.', icon: 'fas fa-heartbeat' },
  { num: 5, title: 'Departure & Follow-Up', desc: 'Fly to your destination with full travel briefing. We follow up to ensure a smooth arrival.', icon: 'fas fa-plane' },
];

export default function Process() {
  const revealRef = useScrollReveal();

  return (
    <section id="process" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0496FF] to-[#0077CC]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-semibold mb-4 backdrop-blur-sm">
            <i className="fas fa-arrow-right" />
            How It Works
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Your Journey in 5 Steps
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
            Simple and transparent process from inquiry to departure.
          </p>
        </div>

        <div ref={revealRef} className="reveal max-w-4xl mx-auto space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-4 sm:gap-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0496FF] flex items-center justify-center text-white font-bold text-lg sm:text-xl font-[Plus_Jakarta_Sans] shadow-md">
                {step.num}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <i className={`${step.icon} text-[#0496FF] text-sm`} />
                  <h3 className="text-base sm:text-lg font-bold font-[Plus_Jakarta_Sans] text-[#062A45]">{step.title}</h3>
                </div>
                <p className="text-sm text-[#062A45]/60 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
