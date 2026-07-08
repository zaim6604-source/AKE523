import ScrollReveal from '../components/ScrollReveal'
import { PROCESS_STEPS, COMPANY } from '../data/siteData'

export default function Journey() {
  return (
    <section className="relative">
      <div className="wavy-divider -mb-1">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-background fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* Cinematic hero */}
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&h=600&fit=crop&auto=format"
            alt="Your journey starts here"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-highlight/80 via-primary/50 to-secondary/40 z-[2]" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 bg-cta/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 backdrop-blur">
                <i className="fas fa-route" />
                Your Journey
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Your Journey in <span className="text-cta">5 Cinematic Steps</span>
              </h1>
              <p className="text-white/80 text-lg mt-3 max-w-xl">
                From registration to departure — we guide you through every stage of your overseas employment journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process steps */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 100}>
                <div className="group relative">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center text-3xl font-extrabold mx-auto shadow-xl mb-4 relative z-10 ring-4 ring-primary/20 group-hover:ring-accent/40 transition-all">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary text-xl mx-auto mb-3">
                      <i className={`fas ${step.icon}`} />
                    </div>
                    <h3 className="text-lg font-bold text-ink mb-2">{step.title}</h3>
                    <p className="text-sm text-ink/60 leading-relaxed">{step.desc}</p>
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-10 text-primary/30 text-2xl">
                      <i className="fas fa-chevron-right" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-primary via-secondary to-accent py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">Ready to Begin?</h2>
            <p className="text-white/80 mb-6">
              Start your journey today. Visit either of our offices for a free consultation.
            </p>
            <a href={COMPANY.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
              <i className="fab fa-whatsapp" />
              Start Your Application
            </a>
          </ScrollReveal>
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