import ScrollReveal from '../components/ScrollReveal'
import { SERVICES, COMPANY } from '../data/siteData'

const GRADIENT_COLORS = [
  'from-primary to-secondary',
  'from-secondary to-accent',
  'from-cta to-blue-400',
  'from-primary to-highlight',
  'from-accent to-primary',
  'from-secondary to-primary',
  'from-cta to-cyan-500',
  'from-secondary to-cta',
]

export default function Services() {
  return (
    <section className="relative animate-page-enter">
      <div className="wavy-divider -mb-1">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-background fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
                <i className="fas fa-briefcase" />
                Our Services
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
                Everything You Need for Overseas Employment
              </h2>
              <p className="text-ink/60 max-w-2xl mx-auto">
                End-to-end recruitment services designed to make your journey abroad seamless and stress-free.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 50}>
                <div className={`bg-gradient-to-br ${GRADIENT_COLORS[i]} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-2xl mb-4">
                    <i className={`fas ${svc.icon}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{svc.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{svc.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-background py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
                Why Choose Us
              </h2>
              <p className="text-ink/60 max-w-2xl mx-auto">
                What sets {COMPANY.shortName} Associates apart from other recruitment agencies.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'fa-certificate', title: 'Government Licensed', desc: `Fully licensed under ${COMPANY.license} by the Government of Pakistan.` },
              { icon: 'fa-handshake', title: 'Verified Employers', desc: 'We only work with thoroughly vetted and reputable overseas employers.' },
              { icon: 'fa-shield-halved', title: 'Transparent Process', desc: 'No hidden fees, clear communication, and honest guidance at every step.' },
              { icon: 'fa-headset', title: 'Dedicated Support', desc: 'Personal support from application through departure and beyond.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="gradient-border-card p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary text-2xl mx-auto mb-4">
                    <i className={`fas ${item.icon}`} />
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="wavy-divider -mt-1 rotate-180">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-background fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}