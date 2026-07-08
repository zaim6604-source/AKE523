import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const stats = [
  { value: '500+', label: 'Placed' },
  { value: '9', label: 'Countries' },
  { value: '8+', label: 'Years' },
  { value: '1', label: 'Licensed' },
];

const services = [
  { title: 'Overseas Job Placement', icon: 'fa-briefcase', color: 'bg-[var(--color-primary)]' },
  { title: 'Visa Processing', icon: 'fa-passport', color: 'bg-[var(--color-secondary)]' },
  { title: 'Document Attestation', icon: 'fa-file-contract', color: 'bg-[var(--color-cta)]' },
  { title: 'Medical & Trade Test', icon: 'fa-stethoscope', color: 'bg-[var(--color-highlight)]' },
  { title: 'Pre-Departure Orientation', icon: 'fa-graduation-cap', color: 'bg-[var(--color-primary)]' },
  { title: 'Air Ticketing & Travel', icon: 'fa-plane', color: 'bg-[var(--color-secondary)]' },
  { title: 'Employer Verification', icon: 'fa-shield-halved', color: 'bg-[var(--color-cta)]' },
  { title: 'Manpower Supply', icon: 'fa-users', color: 'bg-[var(--color-highlight)]' },
];

const destinations = [
  { name: 'Saudi Arabia', flag: '🇸🇦' },
  { name: 'UAE', flag: '🇦🇪' },
  { name: 'Qatar', flag: '🇶🇦' },
  { name: 'Oman', flag: '🇴🇲' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'Poland', flag: '🇵🇱' },
  { name: 'Romania', flag: '🇷🇴' },
  { name: 'Greece', flag: '🇬🇷' },
  { name: 'Malaysia', flag: '🇲🇾' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-highlight)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[var(--color-accent)] blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[var(--color-secondary)] blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl">
              Your Trusted Route from <span className="text-[var(--color-accent)]">Shergarh</span> to the World
            </h1>
          </FadeIn>
          <FadeIn delay={1}>
            <p className="mt-6 text-lg md:text-xl text-[var(--color-secondary)] max-w-2xl leading-relaxed">
              Connecting skilled workers from Khyber Pakhtunkhwa to employment opportunities
              across the Gulf and Europe. Licensed, trusted, and committed to your success.
            </p>
          </FadeIn>
          <FadeIn delay={2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[var(--color-cta)] text-white font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition-all"
              >
                <i className="fas fa-paper-plane" />
                Apply Now
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

      {/* Stats Band */}
      <section className="bg-white border-y border-[var(--color-secondary)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i + 1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)]">
                    {s.value}
                  </div>
                  <div className="text-sm text-[var(--color-ink)]/70 mt-1 font-medium uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-ink)] text-center">
            Our Services
          </h2>
          <p className="mt-3 text-[var(--color-ink)]/70 text-center max-w-xl mx-auto">
            Comprehensive recruitment and manpower solutions from application to departure.
          </p>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.slice(0, 8).map((s, i) => (
            <FadeIn key={s.title} delay={Math.min(i + 1, 6)}>
              <div
                className={`${s.color} rounded-xl p-6 text-white hover:scale-[1.02] transition-transform cursor-default`}
              >
                <i className={`fas ${s.icon} text-2xl mb-3`} />
                <h3 className="font-bold text-sm leading-snug">{s.title}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={3}>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
            >
              View All Services <i className="fas fa-arrow-right text-sm" />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Featured Destinations */}
      <section className="bg-[var(--color-background)] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-ink)] text-center">
              Featured Destinations
            </h2>
            <p className="mt-3 text-[var(--color-ink)]/70 text-center max-w-xl mx-auto">
              Explore opportunities in our partner countries across the Gulf and Europe.
            </p>
          </FadeIn>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {destinations.map((d, i) => (
              <FadeIn key={d.name} delay={Math.min(i + 1, 6)}>
                <Link
                  to={`/countries/${d.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm border border-[var(--color-secondary)]/20 hover:border-[var(--color-primary)] hover:shadow-md transition-all text-[var(--color-ink)] font-medium"
                >
                  <span className="text-lg">{d.flag}</span>
                  {d.name}
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-highlight)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-4 text-[var(--color-secondary)] text-lg max-w-2xl mx-auto">
              Take the first step toward your international career. Contact us today for a
              free consultation.
            </p>
          </FadeIn>
          <FadeIn delay={2}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[var(--color-cta)] text-white font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition-all"
              >
                <i className="fas fa-paper-plane" />
                Get Started
              </Link>
              <Link
                to="/process"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-all"
              >
                <i className="fas fa-list" />
                Our Process
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}