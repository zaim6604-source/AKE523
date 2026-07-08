import FadeIn from '../components/FadeIn';
import useInView from '../hooks/useInView';

const whyUs = [
  { icon: 'fa-shield-halved', title: 'Licensed & Registered', desc: 'Fully authorized overseas employment promoter with verified credentials. License 2234/KAR.' },
  { icon: 'fa-handshake', title: 'Personalized Guidance', desc: 'End-to-end support tailored to your skills and destination preferences.' },
  { icon: 'fa-globe', title: 'Global Network', desc: 'Strong partnerships with employers across the Gulf, Europe, and beyond.' },
  { icon: 'fa-clock', title: 'Timely Processing', desc: 'Efficient visa, documentation, and travel coordination.' },
  { icon: 'fa-star', title: 'Proven Track Record', desc: 'Hundreds of successful placements with satisfied workers.' },
  { icon: 'fa-route', title: 'Travel & Tours', desc: 'Comprehensive travel services including Hajj, Umrah, and leisure packages.' },
];

export default function About() {
  const [cardsRef, cardsVisible] = useInView(0.1);

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="pt-24 pb-16 md:pb-20" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'var(--color-cta)' }}>
              <i className="fa-solid fa-info-circle" />
              About Rais Brothers
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">About Us</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Your trusted partner in travel and overseas employment since 2010. Licensed, transparent, and driven by results.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-accent)' }}>Our Story</h2>
              <div className="w-16 h-1 mt-4 mb-6" style={{ backgroundColor: 'var(--color-cta)' }} />
              <p className="leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
                Rais Brothers was founded with a singular mission: to create legitimate, safe, and rewarding overseas employment opportunities for the skilled workforce of Pakistan.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
                Based at Mehran Estate, Karachi Cantt, we understand the aspirations of our community. Our team brings decades of combined experience in international recruitment, visa processing, manpower placement, and travel services.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                From the Gulf countries to Europe, we have helped hundreds of workers find meaningful employment, ensuring fair treatment, proper documentation, and safe travel every step of the way.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={1}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/src/assets/images/office.jpg"
                alt="Rais Brothers office"
                className="w-full h-80 object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 shadow-sm border text-center" style={{ borderColor: 'rgba(225, 6, 0, 0.1)' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(225, 6, 0, 0.08)' }}>
                  <i className="fas fa-bullseye text-2xl" style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: 'var(--color-accent)' }}>Our Mission</h3>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  To connect the skilled workforce of Pakistan with legitimate overseas employment opportunities, ensuring dignity, fairness, and success.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border text-center" style={{ borderColor: 'rgba(225, 6, 0, 0.1)' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(225, 6, 0, 0.08)' }}>
                  <i className="fas fa-eye text-2xl" style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: 'var(--color-accent)' }}>Our Vision</h3>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  To be the most trusted overseas employment and travel bridge between Pakistan and the world, transforming lives through legitimate international careers.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border text-center" style={{ borderColor: 'rgba(225, 6, 0, 0.1)' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(225, 6, 0, 0.08)' }}>
                  <i className="fas fa-heart text-2xl" style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: 'var(--color-accent)' }}>Our Values</h3>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Integrity, transparency, community commitment, and a relentless focus on worker welfare and successful outcomes.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: 'var(--color-accent)' }}>
            Why Choose Rais Brothers?
          </h2>
          <p className="mt-3 text-center max-w-xl mx-auto" style={{ color: 'var(--color-ink-light)' }}>
            What sets us apart in the overseas employment and travel industry.
          </p>
        </FadeIn>
        <div ref={cardsRef} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item, i) => (
            <FadeIn key={item.title} delay={Math.min(i + 1, 6)}>
              <div className="flex gap-4 p-5 rounded-xl bg-white border shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: 'rgba(225, 6, 0, 0.08)' }}>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(225, 6, 0, 0.08)' }}>
                  <i className={`fas ${item.icon}`} style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: 'var(--color-accent)' }}>{item.title}</h3>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-ink-light)' }}>{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Trust Chips */}
      <section className="py-12" style={{ backgroundColor: 'var(--color-highlight)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h3 className="text-xl font-bold text-center mb-6 text-white">Trust & Credentials</h3>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Government Licensed',
              '100% Transparent',
              'No Hidden Fees',
              'Verified Employers',
              'Safe & Legal',
              'Community Trusted',
            ].map((chip, i) => (
              <FadeIn key={chip} delay={Math.min(i + 1, 4)}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'white' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-cta)' }} />
                  {chip}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}