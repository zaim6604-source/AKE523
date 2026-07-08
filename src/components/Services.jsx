import FadeUp from './FadeUp';
import SafeImage from './SafeImage';

const services = [
  { icon: 'fa-user-plus', title: 'Manpower Supply', desc: 'Skilled & semi-skilled workers for Gulf & European employers across all sectors.', color: 'bg-primary' },
  { icon: 'fa-passport', title: 'Visa Processing', desc: 'End-to-end visa documentation and submission for work permits.', color: 'bg-secondary' },
  { icon: 'fa-file-contract', title: 'Contract Facilitation', desc: 'Employment contract verification and authentication services.', color: 'bg-highlight' },
  { icon: 'fa-plane-departure', title: 'Pre-Departure', desc: 'Briefing, travel coordination, and airport assistance for departing workers.', color: 'bg-primary' },
  { icon: 'fa-hospital', title: 'Medical Screening', desc: 'Coordination with authorized medical centers for fitness certificates.', color: 'bg-secondary' },
  { icon: 'fa-gavel', title: 'Legal Attestation', desc: 'Document attestation from overseas missions and government bodies.', color: 'bg-highlight' },
  { icon: 'fa-language', title: 'Language Training', desc: 'Basic language and soft skills orientation for host countries.', color: 'bg-primary' },
  { icon: 'fa-hand-holding-heart', title: 'Post-Placement Support', desc: 'Ongoing support for workers and families after deployment.', color: 'bg-secondary' },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="pill-badge bg-primary text-white mb-4 mx-auto" style={{ width: 'fit-content' }}>
            <i className="fas fa-briefcase" />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center leading-tight">
            What We Offer
          </h2>
          <p className="text-ink/60 text-center mt-3 max-w-2xl mx-auto">
            Comprehensive recruitment services from documentation to deployment
          </p>
        </FadeUp>

        <div className="services-grid mt-10">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 60}>
              <div className={`${s.color} text-white rounded-2xl shadow-lg hover:scale-[1.02] transition-transform overflow-hidden`}>
                {/* Image header */}
                <div className="h-36 overflow-hidden">
                  <SafeImage
                    src={`/images/service-${i}.jpg`}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    fallbackType="service"
                    fallbackSeed={i}
                  />
                </div>
                {/* Content */}
                <div className="p-6 sm:p-8 pt-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-lg shrink-0">
                      <i className={`fas ${s.icon}`} />
                    </div>
                    <h3 className="text-lg font-extrabold">{s.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed opacity-90">{s.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}