import FadeUp from '../components/FadeUp'

const services = [
  { icon: 'fa-user-plus', title: 'Manpower Supply', desc: 'Skilled & semi-skilled workers for Gulf & European employers across construction, hospitality, manufacturing, healthcare, and logistics sectors.', color: 'bg-primary' },
  { icon: 'fa-passport', title: 'Visa Processing', desc: 'Complete work visa management including application, document verification, embassy submissions, and follow-up for all destination countries.', color: 'bg-secondary' },
  { icon: 'fa-file-contract', title: 'Documentation & Attestation', desc: 'Comprehensive document services: passport copies, educational certificate attestation, experience letters, police clearance, and all required paperwork.', color: 'bg-accent' },
  { icon: 'fa-plane-departure', title: 'Travel & Logistics', desc: 'Flight booking, airport transfers, accommodation coordination, and travel insurance. We handle all logistics so you can focus on your new job.', color: 'bg-primary' },
  { icon: 'fa-hospital', title: 'Medical Screening', desc: 'Coordination with authorized medical centers for fitness certificates, vaccinations, and health screenings required by destination countries.', color: 'bg-highlight' },
  { icon: 'fa-language', title: 'Training & Orientation', desc: 'Pre-departure orientation covering cultural awareness, basic language skills, workplace safety, and what to expect in your host country.', color: 'bg-secondary' },
  { icon: 'fa-handshake', title: 'Employer Liaison', desc: 'Direct coordination with international employers to ensure clear job descriptions, fair contracts, and timely salary payments for all workers.', color: 'bg-accent' },
  { icon: 'fa-headset', title: 'Post-Placement Support', desc: 'Ongoing assistance after deployment — helpline for workers and families, grievance handling, and support for contract renewals or family visits.', color: 'bg-highlight' },
]

export default function Services() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <FadeUp>
        <div className="dashboard-card">
          <div className="pill-badge bg-primary text-white mb-4">
            <i className="fas fa-briefcase" />
            Our Services
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-ink leading-tight">
            Everything You Need for{' '}
            <span className="text-primary">Overseas Employment</span>
          </h1>
          <p className="text-ink/60 mt-2 max-w-2xl">
            From registration to post-placement support — we provide end-to-end recruitment services
            tailored to workers from Sialkot and across Punjab
          </p>
        </div>
      </FadeUp>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <FadeUp key={s.title} delay={i * 60}>
            <div className="dashboard-card p-0 overflow-hidden hover:shadow-lg transition-all group">
              {/* Colored top bar */}
              <div className={`${s.color} service-top-bar`} />
              <div className="p-5">
                <div className={`w-11 h-11 ${s.color} text-white rounded-xl flex items-center justify-center text-lg mb-3`}>
                  <i className={`fas ${s.icon}`} />
                </div>
                <h3 className="text-base font-extrabold text-ink mb-2">{s.title}</h3>
                <p className="text-xs leading-relaxed text-ink/60">{s.desc}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* CTA */}
      <FadeUp delay={500}>
        <div className="dashboard-card bg-gradient-to-r from-primary via-secondary to-highlight text-white text-center p-8">
          <h2 className="text-xl sm:text-2xl font-extrabold">Ready to Get Started?</h2>
          <p className="text-white/85 mt-2 text-sm">Contact us on WhatsApp and we'll guide you through our services</p>
          <a
            href="https://wa.me/923338608944"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cta text-ink font-extrabold px-7 py-3 rounded-full text-sm hover:brightness-110 transition-all shadow-lg mt-4"
          >
            <i className="fab fa-whatsapp" />
            Apply Now
          </a>
        </div>
      </FadeUp>
    </div>
  )
}