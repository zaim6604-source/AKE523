import FadeUp from '../components/FadeUp';
import SafeImage from '../components/SafeImage';

const services = [
  { icon: 'fa-user-plus', title: 'Manpower Supply', desc: 'We recruit skilled, semi-skilled, and general workers across all sectors — construction, hospitality, manufacturing, healthcare, logistics, and more. Our extensive network of employers across the Gulf, Europe, and Asia ensures we find the right match for every worker.', color: 'bg-primary' },
  { icon: 'fa-passport', title: 'Visa Processing', desc: 'Complete work visa management including application, document verification, embassy submissions, and follow-up. We ensure your paperwork is accurate and compliant with destination country requirements.', color: 'bg-secondary' },
  { icon: 'fa-file-contract', title: 'Documentation & Attestation', desc: 'Comprehensive document services: passport copies, educational certificate attestation, experience letters, police clearance, and all other paperwork required for overseas employment.', color: 'bg-accent' },
  { icon: 'fa-plane-departure', title: 'Travel & Logistics', desc: 'Flight booking, airport transfers, accommodation coordination, and travel insurance. We handle the logistics so you can focus on preparing for your new job.', color: 'bg-primary' },
  { icon: 'fa-hospital', title: 'Medical Screening', desc: 'Coordination with authorized medical centers for fitness certificates, vaccinations, and health screenings required by destination countries.', color: 'bg-secondary' },
  { icon: 'fa-language', title: 'Training & Orientation', desc: 'Pre-departure orientation covering cultural awareness, basic language skills, workplace safety, and what to expect in your host country.', color: 'bg-accent' },
  { icon: 'fa-handshake', title: 'Employer Liaison', desc: 'Direct coordination with international employers to ensure clear job descriptions, fair contracts, and timely salary payments. We maintain relationships with employers to protect worker interests.', color: 'bg-primary' },
  { icon: 'fa-headset', title: 'Post-Placement Support', desc: 'Ongoing assistance after deployment — helpline for workers and families, grievance handling, and support for contract renewals or family visits.', color: 'bg-secondary' },
];

export default function Services() {
  return (
    <div className="page-enter-active">
      {/* ── Header ── */}
      <section className="bg-background pt-12 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="pill-badge bg-primary text-white mb-6 mx-auto" style={{ width: 'fit-content' }}>
              <i className="fas fa-briefcase" />
              Our Services
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-ink text-center leading-tight max-w-4xl mx-auto">
              Everything You Need for{' '}
              <span className="text-primary">Overseas Employment</span>
            </h1>
            <p className="text-ink/60 text-center mt-4 max-w-2xl mx-auto editorial-body">
              From registration to post-placement support — we provide end-to-end recruitment services
              tailored to workers from Rawalpindi and across Punjab
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Service articles ── */}
      <section className="pb-16 md:pb-24 -mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 60}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row article-card">
                {/* Image block */}
                <div className="md:w-72 shrink-0 h-48 md:h-auto overflow-hidden">
                  <SafeImage
                    src={`/images/service-${i}.jpg`}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    fallbackType="service"
                    fallbackSeed={i}
                  />
                </div>
                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 ${s.color} text-white rounded-xl flex items-center justify-center text-lg shrink-0`}>
                      <i className={`fas ${s.icon}`} />
                    </div>
                    <h3 className="text-lg font-extrabold text-ink">{s.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-ink/70">{s.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeUp>
            <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-8 sm:p-12 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to Get Started?</h2>
              <p className="text-white/85 mt-3">Contact us on WhatsApp and we'll guide you through our services</p>
              <a
                href="https://wa.me/923015445751"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cta text-white font-extrabold px-7 py-3.5 rounded-full text-base hover:brightness-110 transition-all shadow-lg mt-6"
              >
                <i className="fab fa-whatsapp" />
                Apply Now
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}