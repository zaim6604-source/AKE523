import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import LazyImage from '../components/LazyImage';
import { countries } from '../data/countries';

export default function Guides() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="guides-hero">
        <div className="container">
          <FadeIn>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--color-accent)' }}>
              <i className="fas fa-globe-asia" style={{ marginRight: 8 }} />
              Country Guides
            </span>
            <h1>Explore Destination Countries</h1>
            <p>
              In-depth guides to working in the Gulf and Europe — including in-demand roles,
              requirements, and what life is like on the ground.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Country Grid */}
      <section className="section">
        <div className="container">
          <div className="guides-grid">
            {countries.map((country, i) => (
              <FadeIn key={country.slug} delay={Math.min(i + 1, 6)}>
                <Link to={`/guides/${country.slug}`} className="guide-card" style={{ textDecoration: 'none' }}>
                  <div className="guide-card-image">
                    <LazyImage src={country.image} alt={country.name} />
                  </div>
                  <div className="guide-card-body">
                    <h3>{country.name}</h3>
                    <p>{country.headline}</p>
                    <div className="guide-card-roles">
                      {country.roles.slice(0, 3).map((role) => (
                        <span key={role} className="role-tag">{role}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}