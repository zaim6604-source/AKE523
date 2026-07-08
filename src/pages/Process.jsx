import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const steps = [
  {
    step: 1,
    title: 'Register',
    icon: 'fa-user-plus',
    desc: 'Submit your application through our website, WhatsApp, or visit our office in Shergarh. Provide your basic details and desired destination.',
    details: [
      'Fill out the application form',
      'Share your CV and basic info',
      'Discuss your preferences',
      'Initial consultation',
    ],
  },
  {
    step: 2,
    title: 'Documents & Visa',
    icon: 'fa-file-lines',
    desc: 'Our team assists you in preparing all required documents and submitting visa applications to your chosen destination country.',
    details: [
      'Document collection & attestation',
      'Passport verification',
      'Visa application submission',
      'Application tracking',
    ],
  },
  {
    step: 3,
    title: 'Medical & Trade Test',
    icon: 'fa-stethoscope',
    desc: 'Coordinate and complete mandatory medical examinations and any trade tests required by your employer or destination country.',
    details: [
      'Medical appointment scheduling',
      'Trade test coordination',
      'Results follow-up',
      'Documentation updates',
    ],
  },
  {
    step: 4,
    title: 'Employer Confirmation',
    icon: 'fa-handshake',
    desc: 'Receive and review your employment offer. Our team verifies the employer and ensures all terms are fair and transparent.',
    details: [
      'Employer verification',
      'Contract review & signing',
      'Salary & benefits confirmation',
      'Final offer acceptance',
    ],
  },
  {
    step: 5,
    title: 'Ticketing & Departure',
    icon: 'fa-plane-departure',
    desc: 'We arrange your travel, provide pre-departure orientation, and ensure you have everything needed for a smooth journey.',
    details: [
      'Flight booking & confirmation',
      'Pre-departure orientation',
      'Travel insurance',
      'Airport transfer arrangements',
    ],
  },
];

export default function Process() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-highlight)] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-extrabold">Our Process</h1>
            <p className="mt-4 text-[var(--color-secondary)] text-lg max-w-2xl mx-auto">
              A simple 5-step journey from application to departure. We guide you every step of the way.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section className="relative py-16 md:py-24">
        {/* Angled background */}
        <div className="absolute inset-0 bg-[var(--color-background)] -skew-y-2 origin-left" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {steps.map((s, i) => (
            <FadeIn key={s.step} delay={Math.min(i + 1, 5)}>
              <div className="flex gap-6 mb-12 last:mb-0">
                {/* Step number */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xl font-bold shrink-0 shadow-lg">
                    {s.step}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[var(--color-secondary)]/30 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[var(--color-secondary)]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center sm:hidden">
                      <i className={`fas ${s.icon} text-[var(--color-primary)]`} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[var(--color-primary)]">
                        Step {s.step}
                      </span>
                      <h3 className="text-xl font-bold text-[var(--color-ink)]">{s.title}</h3>
                    </div>
                  </div>
                  <p className="text-[var(--color-ink)]/80 mb-4">{s.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.details.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-sm text-[var(--color-ink)]/70">
                        <i className="fas fa-check-circle text-[var(--color-primary)] text-xs" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-highlight)] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold">Ready to Begin?</h2>
            <p className="mt-3 text-[var(--color-secondary)]">
              Start your journey today. Contact us to begin the registration process.
            </p>
          </FadeIn>
          <FadeIn delay={1}>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[var(--color-cta)] text-white font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition-all"
              >
                <i className="fas fa-paper-plane" />
                Get Started
              </Link>
              <a
                href="https://wa.me/923469358431"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-all"
              >
                <i className="fab fa-whatsapp" />
                WhatsApp Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}