import FadeUp from '../components/FadeUp'

const WA_NUMBER = '923338608944'

const steps = [
  {
    num: 1,
    title: 'Registration & Inquiry',
    desc: 'Reach out to us via WhatsApp, phone, or visit our office. Share your qualifications, experience, and preferred destination. Our team will guide you through the initial consultation.',
    icon: 'fa-clipboard-list',
  },
  {
    num: 2,
    title: 'Documentation',
    desc: 'Submit your CNIC, passport, educational certificates, experience letters, and photographs. We verify all documents and advise on any additional requirements for your chosen destination.',
    icon: 'fa-file-alt',
  },
  {
    num: 3,
    title: 'Visa Processing',
    desc: 'We handle the complete visa application process — from employer liaison and job offer to embassy submission and follow-up. We keep you updated at every stage.',
    icon: 'fa-passport',
  },
  {
    num: 4,
    title: 'Medical & Training',
    desc: 'Coordinate with authorized medical centers for fitness screening and vaccinations. Attend pre-departure orientation covering cultural awareness, language basics, and workplace safety.',
    icon: 'fa-hospital',
  },
  {
    num: 5,
    title: 'Departure & Support',
    desc: 'We coordinate your travel, airport transfer, and accommodation. Our support continues after you land — with helpline access for you and your family throughout your employment.',
    icon: 'fa-plane-departure',
  },
]

export default function Process() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <FadeUp>
        <div className="dashboard-card">
          <div className="pill-badge bg-primary text-white mb-4">
            <i className="fas fa-road" />
            How It Works
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-ink leading-tight">
            Your Journey in{' '}
            <span className="text-primary">5 Simple Steps</span>
          </h1>
          <p className="text-ink/60 mt-2 max-w-2xl">
            From your first inquiry to your departure abroad — we guide you through every step
          </p>
        </div>
      </FadeUp>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, i) => (
          <FadeUp key={step.num} delay={i * 80}>
            <div className="dashboard-card flex gap-5 relative">
              {/* Connector line (not for last) */}
              {i < steps.length - 1 && (
                <div className="step-line" />
              )}

              {/* Step number */}
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-extrabold shrink-0">
                  {step.num}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-background text-primary flex items-center justify-center text-sm shrink-0">
                    <i className={`fas ${step.icon}`} />
                  </div>
                  <h3 className="text-base font-extrabold text-ink">{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-ink/60 ml-0">{step.desc}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* CTA */}
      <FadeUp delay={500}>
        <div className="dashboard-card bg-gradient-to-r from-primary to-highlight text-white text-center p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-extrabold">Ready to Start Your Journey?</h2>
          <p className="text-white/85 mt-2 text-sm">Contact us on WhatsApp and begin your overseas employment process today</p>
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cta text-ink font-extrabold px-7 py-3 rounded-full text-sm hover:brightness-110 transition-all shadow-lg mt-4"
          >
            <i className="fab fa-whatsapp" />
            Get Started
          </a>
        </div>
      </FadeUp>
    </div>
  )
}