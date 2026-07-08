import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const services = [
  {
    title: 'Overseas Job Placement',
    icon: 'fa-briefcase',
    color: 'from-[var(--color-primary)] to-[#005a61]',
    desc: 'End-to-end job placement services connecting skilled workers with reputable employers across the Gulf and Europe. We match your qualifications with the right opportunities.',
    items: ['CV review & optimization', 'Job matching', 'Interview coordination', 'Offer negotiation'],
  },
  {
    title: 'Visa Processing',
    icon: 'fa-passport',
    color: 'from-[var(--color-secondary)] to-[#6bb0a8]',
    desc: 'Complete visa application assistance for all destination countries. We handle the paperwork so you can focus on preparing for your journey.',
    items: ['Document preparation', 'Application submission', 'Follow-up & tracking', 'Visa stamping'],
  },
  {
    title: 'Document Attestation',
    icon: 'fa-file-contract',
    color: 'from-[var(--color-cta)] to-[#d47d5e]',
    desc: 'Professional attestation and authentication of your educational and professional documents for international recognition.',
    items: ['Educational certificates', 'Professional licenses', 'Police clearance', 'Ministry attestation'],
  },
  {
    title: 'Medical & Trade Test Coordination',
    icon: 'fa-stethoscope',
    color: 'from-[var(--color-highlight)] to-[#002a33]',
    desc: 'Coordination of mandatory medical examinations and trade tests required by destination countries and employers.',
    items: ['Medical appointments', 'Trade test scheduling', 'Result follow-up', 'Documentation'],
  },
  {
    title: 'Pre-Departure Orientation',
    icon: 'fa-graduation-cap',
    color: 'from-[var(--color-primary)] to-[#005a61]',
    desc: 'Comprehensive orientation sessions preparing workers for their new environment, culture, and job responsibilities abroad.',
    items: ['Cultural awareness', 'Labor rights education', 'Language basics', 'Travel guidance'],
  },
  {
    title: 'Air Ticketing & Travel Support',
    icon: 'fa-plane',
    color: 'from-[var(--color-secondary)] to-[#6bb0a8]',
    desc: 'Hassle-free flight booking and travel coordination ensuring smooth departure to your destination country.',
    items: ['Flight booking', 'Airport transfers', 'Travel insurance', '24/7 support'],
  },
  {
    title: 'Employer Verification',
    icon: 'fa-shield-halved',
    color: 'from-[var(--color-cta)] to-[#d47d5e]',
    desc: 'Thorough verification of potential employers to ensure legitimacy, fair wages, and safe working conditions.',
    items: ['Company background check', 'Contract review', 'Salary verification', 'Accommodation check'],
  },
  {
    title: 'Skilled & Unskilled Manpower Supply',
    icon: 'fa-users',
    color: 'from-[var(--color-highlight)] to-[#002a33]',
    desc: 'Reliable supply of both skilled and unskilled manpower across various sectors including construction, healthcare, hospitality, and more.',
    items: ['Skilled professionals', 'General laborers', 'Sector-specific staff', 'Bulk recruitment'],
  },
];

const colorMap = {
  'from-[var(--color-primary)] to-[#005a61]': 'var(--color-primary)',
  'from-[var(--color-secondary)] to-[#6bb0a8]': 'var(--color-secondary)',
  'from-[var(--color-cta)] to-[#d47d5e]': 'var(--color-cta)',
  'from-[var(--color-highlight)] to-[#002a33]': 'var(--color-highlight)',
};

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-highlight)] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-extrabold">Our Services</h1>
            <p className="mt-4 text-[var(--color-secondary)] text-lg max-w-2xl mx-auto">
              Comprehensive recruitment and manpower solutions tailored to your needs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={Math.min(i + 1, 6)}>
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white border border-[var(--color-secondary)]/20">
                <div className={`bg-gradient-to-r ${s.color} p-6 text-white`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <i className={`fas ${s.icon} text-xl`} />
                    </div>
                    <h2 className="text-xl font-bold">{s.title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[var(--color-ink)]/80 text-sm leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-ink)]/70">
                        <i className="fas fa-check text-[var(--color-primary)] text-xs" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-background)] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[var(--color-ink)]">Need a Custom Solution?</h2>
            <p className="mt-3 text-[var(--color-ink)]/70">
              Contact us to discuss your specific requirements. We are here to help.
            </p>
          </FadeIn>
          <FadeIn delay={1}>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[var(--color-cta)] text-white font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition-all"
              >
                <i className="fas fa-paper-plane" />
                Contact Us
              </Link>
              <a
                href="https://wa.me/923469358431"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold px-6 py-3 rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all"
              >
                <i className="fab fa-whatsapp" />
                WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}