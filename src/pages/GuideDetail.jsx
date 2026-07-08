import { useParams, Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { countries } from '../data/countries';

export default function GuideDetail() {
  const { slug } = useParams();
  const country = countries.find((c) => c.slug === slug);

  if (!country) {
    return (
      <div className="not-found">
        <h1>404</h1>
        <h2>Country Guide Not Found</h2>
        <p>The destination guide you are looking for does not exist or has been moved.</p>
        <Link to="/guides" className="btn btn-primary">
          <i className="fas fa-arrow-left" /> View All Guides
        </Link>
      </div>
    );
  }

  const applyUrl = `https://wa.me/923005967332?text=${encodeURIComponent(`Hello Al-Imran Brothers! I am interested in working in ${country.name}. I would like to know more about available opportunities and the application process.`)}`;

  return (
    <div className="page-transition">
      {/* Hero Image */}
      <section className="guide-detail-hero">
        <img
          src={country.image}
          alt={country.name}
          onError={(e) => { e.target.onerror = null; e.target.src = '/fallback.svg'; }}
        />
        <div className="guide-detail-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="guide-detail-content">
            <FadeIn>
              <span className="tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--color-accent)' }}>
                <i className="fas fa-map-marked-alt" style={{ marginRight: 8 }} />
                Country Guide
              </span>
              <h1>{country.name}</h1>
              <p>{country.headline}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="guide-detail-body">
        {/* Description */}
        <FadeIn>
          <div className="guide-section">
            <h2>About Working in {country.name}</h2>
            <p>{country.description}</p>
          </div>
        </FadeIn>

        {/* In-Demand Roles */}
        <FadeIn delay={1}>
          <div className="guide-section">
            <h2>In-Demand Roles</h2>
            <ul className="role-list">
              {country.roles.map((role) => (
                <li key={role}>
                  <i className="fas fa-check-circle" />
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Requirements */}
        <FadeIn delay={2}>
          <div className="guide-section">
            <h2>Requirements</h2>
            <ul className="requirement-list">
              {country.requirements.map((req) => (
                <li key={req}>
                  <i className="fas fa-circle-check" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Apply CTA */}
        <FadeIn delay={3}>
          <div style={{ textAlign: 'center', marginTop: 48, padding: 40, background: 'white', borderRadius: 'var(--radius-md)', boxShadow: '0 4px 30px rgba(0,0,0,0.05)' }}>
            <h2 style={{ marginBottom: 12 }}>Ready to Work in {country.name}?</h2>
            <p style={{ color: 'var(--color-text-light)', marginBottom: 24, maxWidth: 500, margin: '0 auto 24px' }}>
              Click below to apply via WhatsApp and our team will contact you with the latest
              opportunities.
            </p>
            <a
              href={applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="fab fa-whatsapp" /> Apply for {country.name}
            </a>
            <div style={{ marginTop: 16 }}>
              <Link to="/guides" style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                <i className="fas fa-arrow-left" /> Back to all guides
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}