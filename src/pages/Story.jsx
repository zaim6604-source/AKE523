import FadeIn from '../components/FadeIn';
import LazyImage from '../components/LazyImage';

export default function Story() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="story-hero">
        <div className="container">
          <FadeIn>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--color-accent)' }}>
              <i className="fas fa-book-open" style={{ marginRight: 8 }} />
              Our Story
            </span>
            <h1>A Brotherhood Built on Trust</h1>
            <p>
              How two brothers turned a small office in Qasmi Market, Thall into a trusted bridge
              between KPK&rsquo;s workforce and international employers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="section">
        <div className="container story-layout">
          <FadeIn>
            <div className="story-image-wrap">
              <LazyImage src="/src/assets/images/office.jpg" alt="Al-Imran Brothers office" />
            </div>
          </FadeIn>

          <div className="story-text">
            <FadeIn>
              <p>
                <strong>Al-Imran Brothers</strong> was founded on a simple belief: that the
                workers of Hangu, Kohat, and the wider KPK region deserve access to legitimate,
                dignified overseas employment — without exploitation, without hidden fees, and
                without broken promises.
              </p>
            </FadeIn>

            <FadeIn delay={1}>
              <p>
                Operating from Qasmi Market No. 2, Thall City, District Hangu, the agency was
                established by two brothers who saw firsthand the struggles of local workers
                seeking opportunities abroad. Misinformation, unverified agents, and fraudulent
                promises had eroded trust in the recruitment industry. The brothers made it their
                mission to restore that trust.
              </p>
            </FadeIn>

            <div className="pull-quote">
              &ldquo;We don&rsquo;t just send workers abroad — we build futures. Every departure
              from our office is a family&rsquo;s hope fulfilled.&rdquo;
            </div>

            <FadeIn delay={2}>
              <p>
                Licensed by the Government of Pakistan as an Overseas Employment Promoter (OEP)
                under License No. 2229/PWR, Al-Imran Brothers operates with full regulatory
                compliance. Every worker placed through our agency is documented, insured, and
                tracked from registration to arrival at their destination.
              </p>
            </FadeIn>

            <FadeIn delay={3}>
              <p>
                Today, Al-Imran Brothers serves workers from across Hangu, Kohat, and the
                surrounding districts — placing them in verified positions across Saudi Arabia,
                the UAE, Qatar, Oman, Kuwait, Germany, Poland, Romania, and Greece. Our team
                handles everything: job matching, visa processing, document attestation, medical
                coordination, travel arrangements, and pre-departure orientation.
              </p>
            </FadeIn>

            <FadeIn delay={4}>
              <p>
                What sets us apart is our hands-on, family-style approach. Every applicant is
                treated with respect. Every process is explained clearly. And every employer is
                thoroughly vetted before any worker is recommended. This is the Al-Imran way —
                a brotherhood that turns applications into departures.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <FadeIn>
            <span className="tag">Our Mission</span>
            <h2 className="section-title">What Drives Us</h2>
            <p className="section-subtitle">
              Our values shape every placement and every relationship we build.
            </p>
          </FadeIn>

          <div className="mission-grid">
            <FadeIn delay={1}>
              <div className="mission-card">
                <h4>Integrity First</h4>
                <p>
                  Complete transparency in fees, processes, and employer details. No hidden
                  charges, no false promises.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="mission-card" style={{ borderLeftColor: 'var(--color-accent)' }}>
                <h4>Family Values</h4>
                <p>
                  Every worker is part of the Al-Imran family. We treat each applicant as we
                  would our own brother.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={3}>
              <div className="mission-card" style={{ borderLeftColor: 'var(--color-cta)' }}>
                <h4>Regulatory Compliance</h4>
                <p>
                  Fully licensed and government-regulated. Every placement meets the legal
                  standards of Pakistan and the destination country.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={4}>
              <div className="mission-card" style={{ borderLeftColor: 'var(--color-secondary)' }}>
                <h4>Community Impact</h4>
                <p>
                  Focused on uplifting Hangu and Kohat by creating legitimate, life-changing
                  employment pathways for local workers.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Trust Chips */}
          <FadeIn delay={3}>
            <div className="trust-chips">
              <span className="trust-chip"><i className="fas fa-check-circle" /> Govt. Licensed OEP — 2229/PWR</span>
              <span className="trust-chip"><i className="fas fa-check-circle" /> 100% Transparent & Ethical</span>
              <span className="trust-chip"><i className="fas fa-check-circle" /> Verified Employers Only</span>
              <span className="trust-chip"><i className="fas fa-check-circle" /> End-to-End Support</span>
              <span className="trust-chip"><i className="fas fa-check-circle" /> Serving KPK Since 2016</span>
              <span className="trust-chip"><i className="fas fa-check-circle" /> Family-Run & Community Trusted</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}