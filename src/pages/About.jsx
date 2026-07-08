import FadeIn from '../components/FadeIn';

const whyUs = [
  { icon: 'fa-shield-halved', title: 'Licensed & Registered', desc: 'Fully authorized overseas employment promoter with verified credentials.' },
  { icon: 'fa-handshake', title: 'Personalized Guidance', desc: 'End-to-end support tailored to your skills and destination preferences.' },
  { icon: 'fa-globe', title: 'Global Network', desc: 'Strong partnerships with employers across the Gulf and Europe.' },
  { icon: 'fa-clock', title: 'Timely Processing', desc: 'Efficient visa, documentation, and travel coordination.' },
  { icon: 'fa-star', title: 'Proven Track Record', desc: 'Hundreds of successful placements with satisfied workers.' },
  { icon: 'fa-heart', title: 'Community Focused', desc: 'Rooted in Shergarh, serving the KPK community with integrity.' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-highlight)] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-extrabold">About Us</h1>
            <p className="mt-4 text-[var(--color-secondary)] text-lg max-w-2xl mx-auto">
              Learn about our mission, our story, and why we are the trusted choice for overseas employment.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-ink)]">Our Story</h2>
              <div className="w-16 h-1 bg-[var(--color-accent)] mt-4 mb-6" />
              <p className="text-[var(--color-ink)]/80 leading-relaxed mb-4">
                Talab Overseas Employment Promoter was founded with a singular mission: to create
                legitimate, safe, and rewarding overseas employment opportunities for the skilled
                workforce of Khyber Pakhtunkhwa.
              </p>
              <p className="text-[var(--color-ink)]/80 leading-relaxed mb-4">
                Based in Shergarh, Mardan district, we understand the aspirations of our community.
                Our team brings decades of combined experience in international recruitment, visa
                processing, and manpower placement.
              </p>
              <p className="text-[var(--color-ink)]/80 leading-relaxed">
                From the Gulf countries to Europe, we have helped hundreds of workers find
                meaningful employment, ensuring fair treatment, proper documentation, and safe
                travel every step of the way.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={1}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/community.jpg"
                alt="Talab Overseas office"
                className="w-full h-80 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/hero.jpg';
                }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[var(--color-background)] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-secondary)]/20 text-center">
                <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-bullseye text-2xl text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-lg text-[var(--color-ink)]">Our Mission</h3>
                <p className="text-[var(--color-ink)]/70 text-sm mt-2 leading-relaxed">
                  To connect the skilled workforce of KPK with legitimate overseas employment
                  opportunities, ensuring dignity, fairness, and success.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-secondary)]/20 text-center">
                <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-eye text-2xl text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-lg text-[var(--color-ink)]">Our Vision</h3>
                <p className="text-[var(--color-ink)]/70 text-sm mt-2 leading-relaxed">
                  To be the most trusted overseas employment bridge between KPK and the world,
                  transforming lives through legitimate international careers.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-secondary)]/20 text-center">
                <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-heart text-2xl text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-lg text-[var(--color-ink)]">Our Values</h3>
                <p className="text-[var(--color-ink)]/70 text-sm mt-2 leading-relaxed">
                  Integrity, transparency, community commitment, and a relentless focus on worker
                  welfare and successful outcomes.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-ink)] text-center">
            Why Choose Talab Overseas?
          </h2>
          <p className="mt-3 text-[var(--color-ink)]/70 text-center max-w-xl mx-auto">
            What sets us apart in the overseas employment industry.
          </p>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item, i) => (
            <FadeIn key={item.title} delay={Math.min(i + 1, 6)}>
              <div className="flex gap-4 p-5 rounded-xl bg-white border border-[var(--color-secondary)]/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                  <i className={`fas ${item.icon} text-[var(--color-primary)]`} />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-ink)]">{item.title}</h3>
                  <p className="text-sm text-[var(--color-ink)]/70 mt-1">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Trust Chips */}
      <section className="bg-[var(--color-highlight)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h3 className="text-xl font-bold text-center mb-6">Trust & Credentials</h3>
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
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-sm font-medium">
                  <i className="fas fa-check-circle text-[var(--color-accent)]" />
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