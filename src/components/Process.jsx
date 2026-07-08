import FadeUp from './FadeUp';

const steps = [
  { num: '01', title: 'Inquiry & Registration', desc: 'Reach out via phone, WhatsApp, or visit our office. We register your profile.', icon: 'fa-clipboard-list' },
  { num: '02', title: 'Documentation', desc: 'We help you compile passports, certificates, and all required paperwork.', icon: 'fa-file-alt' },
  { num: '03', title: 'Visa & Medical', desc: 'Visa application, medical screening, and attestation handled end-to-end.', icon: 'fa-passport' },
  { num: '04', title: 'Final Selection', desc: 'Employer interview coordination and final job offer confirmation.', icon: 'fa-handshake' },
  { num: '05', title: 'Departure', desc: 'Pre-departure briefing, travel booking, and airport support for a smooth journey.', icon: 'fa-plane-up' },
];

export default function Process() {
  return (
    <section id="process" className="relative py-16 md:py-24 overflow-hidden">
      {/* Diagonal red background */}
      <div className="absolute inset-0 bg-primary" style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)' }} />
      <div className="absolute inset-0 bg-highlight opacity-20" style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="pill-badge bg-cta text-ink mb-4 mx-auto" style={{ width: 'fit-content' }}>
            <i className="fas fa-arrow-right" />
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center leading-tight">
            Your Journey to a Job Abroad
          </h2>
          <p className="text-white/80 text-center mt-3 max-w-2xl mx-auto">
            Five simple steps from registration to departure
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-10 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-white/20" />

          {steps.map((s, i) => (
            <FadeUp key={s.num} delay={i * 100}>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white border border-white/10 hover:bg-white/20 transition-colors">
                {/* Number */}
                <div className="w-12 h-12 rounded-full bg-cta text-ink font-extrabold text-lg flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10">
                  {s.num}
                </div>
                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center text-xl mx-auto mb-3">
                  <i className={`fas ${s.icon}`} />
                </div>
                <h3 className="text-base font-extrabold mb-1">{s.title}</h3>
                <p className="text-xs leading-relaxed text-white/80">{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}