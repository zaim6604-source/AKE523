const SERVICES = [
  {
    title: 'Work Visa Processing',
    subtitle: 'Gulf &amp; Europe',
    desc: 'Full-service work visa processing for Saudi Arabia, UAE, Qatar, Oman, and European destinations — fast, accurate, and hassle-free.',
    icon: 'fa-passport',
    color: 'bg-primary',
  },
  {
    title: 'Overseas Job Placement',
    subtitle: 'Global Opportunities',
    desc: 'Connect with verified employers in the Gulf, Europe, and Asia. We match your skills to the right opportunity abroad.',
    icon: 'fa-briefcase',
    color: 'bg-cyan-600',
  },
  {
    title: 'Document Attestation',
    subtitle: 'Authentication',
    desc: 'Complete document legalization and attestation services including MOFA, embassy attestation, and board verifications.',
    icon: 'fa-file-shield',
    color: 'bg-secondary',
  },
  {
    title: 'Medical &amp; Trade Test',
    subtitle: 'Coordination',
    desc: 'We coordinate medical examinations and trade tests required for overseas employment with approved centers.',
    icon: 'fa-stethoscope',
    color: 'bg-amber-600',
  },
  {
    title: 'Pre-Departure Orientation',
    subtitle: 'Guidance',
    desc: 'Comprehensive orientation covering culture, laws, workplace expectations, and travel tips for your destination country.',
    icon: 'fa-graduation-cap',
    color: 'bg-purple-600',
  },
  {
    title: 'Air Ticketing &amp; Travel',
    subtitle: 'Support',
    desc: 'Hassle-free flight bookings and travel coordination for your journey abroad at competitive fares.',
    icon: 'fa-ticket',
    color: 'bg-rose-600',
  },
  {
    title: 'Employer Verification',
    subtitle: 'Due Diligence',
    desc: 'We thoroughly vet employers to ensure legitimate, safe, and fair working conditions for every candidate.',
    icon: 'fa-shield-halved',
    color: 'bg-indigo-600',
  },
  {
    title: 'Manpower Supply',
    subtitle: 'Skilled &amp; Unskilled',
    desc: 'Reliable supply of skilled and unskilled manpower for international employers across all industries.',
    icon: 'fa-people-group',
    color: 'bg-teal-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section pill */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-5 py-2 rounded-full">
            <i className="fas fa-briefcase" />
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-4 mb-3">
            What We Offer
          </h2>
          <p className="text-ink/60 max-w-xl mx-auto">
            End-to-end recruitment and visa services tailored to get you working abroad — from Pir Mahal to the world.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {SERVICES.map((svc, idx) => (
            <div key={idx} className="break-inside-avoid">
              <div className={`${svc.color} text-white rounded-2xl p-6 sm:p-7 h-full transition-transform hover:-translate-y-1 hover:shadow-xl`}>
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-5 text-xl">
                  <i className={`fas ${svc.icon}`} />
                </div>
                <h3 className="text-lg font-bold mb-1">{svc.title}</h3>
                <p className="text-white/70 text-sm font-medium mb-3">{svc.subtitle}</p>
                <p className="text-white/80 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight banner */}
        <div className="mt-10 bg-gradient-to-r from-primary to-cta rounded-2xl p-6 sm:p-8 text-white text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <i className="fas fa-star text-accent" />
            Premium Service
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
            Gulf &amp; Europe Work Visas
          </h3>
          <p className="text-white/85 max-w-2xl mx-auto mb-4">
            From Saudi Arabia to Croatia, we process work visas for top destinations. Fast, reliable, and government licensed.
          </p>
          <a
            href="https://wa.me/923256561112"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-full hover:bg-accent hover:text-ink transition-colors"
          >
            <i className="fa-brands fa-whatsapp" />
            Start Your Application
          </a>
        </div>
      </div>
    </section>
  )
}