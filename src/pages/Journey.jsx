import { Link } from 'react-router-dom'
import RevealOnScroll from '../components/RevealOnScroll'

const STEPS = [
  {
    step: 1,
    title: 'Submit Inquiry',
    desc: 'Contact us via WhatsApp, phone, or visit our office at Swat Market, Mingora to discuss your overseas employment needs.',
    icon: 'fa-pen-to-square',
    details: [
      'Share your desired destination and job profile',
      'Our team provides initial consultation',
      'No obligation, free assessment',
    ],
  },
  {
    step: 2,
    title: 'Document Review',
    desc: 'Our team reviews your documents and guides you through any requirements or corrections needed for your application.',
    icon: 'fa-file-circle-check',
    details: [
      'Submit your passport, certificates, and photos',
      'We verify and attest all documents',
      'Guidance on missing or additional requirements',
    ],
  },
  {
    step: 3,
    title: 'Visa Processing',
    desc: 'We handle the entire visa application process with the respective embassy or employer, keeping you updated at every stage.',
    icon: 'fa-passport',
    details: [
      'Complete visa application submission',
      'Regular updates on application status',
      'Coordination with employer and embassy',
    ],
  },
  {
    step: 4,
    title: 'Medical & Tests',
    desc: 'We coordinate medical examinations and trade tests required for your destination country, ensuring full compliance.',
    icon: 'fa-stethoscope',
    details: [
      'Scheduled medical examinations',
      'Trade test coordination if required',
      'All reports sent to employer',
    ],
  },
  {
    step: 5,
    title: 'Travel & Departure',
    desc: 'Final travel coordination, flight booking, and pre-departure briefing before you leave for your new job abroad.',
    icon: 'fa-plane-departure',
    details: [
      'Flight booking and travel coordination',
      'Pre-departure orientation session',
      '24/7 support during your journey',
    ],
  },
]

export default function Journey() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-primary via-primary to-cta overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full mb-4">
            <i className="fas fa-arrow-right" />
            Your Journey
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            From Application to Departure
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            A simple, streamlined 5-step process to get you working abroad — fast.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-12 md:space-y-16">
            {STEPS.map((s, idx) => (
              <RevealOnScroll key={s.step}>
                <div className={`flex flex-col md:flex-row gap-6 md:gap-10 items-start ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Step icon */}
                  <div className="shrink-0">
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-3xl shadow-lg shadow-primary/30">
                      <i className={`fas ${s.icon}`} />
                      <span className="absolute -top-1 -right-1 flex items-center justify-center w-8 h-8 rounded-full bg-cta text-white text-sm font-extrabold shadow-md">
                        {s.step}
                      </span>
                    </div>
                    {/* Connector */}
                    {s.step < 5 && (
                      <div className="hidden md:block mx-auto mt-2 w-0.5 h-12 bg-gradient-to-b from-primary/30 to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${idx % 2 === 1 ? 'md:text-right' : ''}`}>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-ink mb-2">
                      {s.title}
                    </h3>
                    <p className="text-ink/60 leading-relaxed mb-4 max-w-lg">
                      {s.desc}
                    </p>
                    <ul className={`space-y-2 ${idx % 2 === 1 ? 'md:ml-auto' : ''}`}>
                      {s.details.map((d) => (
                        <li key={d} className={`flex items-start gap-2.5 text-sm text-ink/70 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                          <i className="fas fa-check-circle text-cta mt-0.5 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-primary via-primary to-cta overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8">
            Take the first step toward a better career overseas. Contact us now.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/923467223031"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent hover:text-ink transition-all shadow-xl"
            >
              <i className="fa-brands fa-whatsapp text-xl" />
              Start Your Application
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 border-2 border-white/40 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
            >
              <i className="fas fa-envelope text-xl" />
              Visit Our Office
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}