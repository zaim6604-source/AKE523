import ScrollReveal from './ScrollReveal'

const SERVICES = [
  { icon: 'fa-passport', title: 'Visa Processing', desc: 'End-to-end visa application handling for Gulf and European destinations.', color: 'from-primary to-secondary' },
  { icon: 'fa-file-contract', title: 'Job Placement', desc: 'Connecting skilled workers with verified employers abroad.', color: 'from-secondary to-accent' },
  { icon: 'fa-plane-departure', title: 'Travel Arrangements', desc: 'Flight bookings and travel coordination for deployed workers.', color: 'from-cta to-blue-400' },
  { icon: 'fa-gavel', title: 'Legal Assistance', desc: 'Guidance on employment contracts, labor laws, and overseas regulations.', color: 'from-primary to-highlight' },
  { icon: 'fa-chalkboard-user', title: 'Pre-Departure Training', desc: 'Orientation programs covering language, culture, and job readiness.', color: 'from-secondary to-primary' },
  { icon: 'fa-handshake', title: 'Employer Liaison', desc: 'Direct coordination with reputable employers across multiple industries.', color: 'from-accent to-primary' },
  { icon: 'fa-language', title: 'Language Support', desc: 'Basic language training for destination countries.', color: 'from-cta to-cyan-500' },
  { icon: 'fa-headset', title: 'Post-Placement Support', desc: 'Ongoing assistance after deployment to ensure smooth transition.', color: 'from-secondary to-cta' },
]

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
              <i className="fas fa-briefcase" />
              Our Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
              Comprehensive Recruitment Services
            </h2>
            <p className="text-ink/60 max-w-2xl mx-auto">
              From visa processing to post-placement care — we handle everything.
            </p>
          </div>
        </ScrollReveal>

        <div className="masonry-grid">
          {SERVICES.map((svc, i) => (
            <ScrollReveal key={svc.title} delay={i * 50}>
              <div className={`bg-gradient-to-br ${svc.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
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
    </section>
  )
}