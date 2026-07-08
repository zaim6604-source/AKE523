import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const countries = [
  {
    name: 'Saudi Arabia',
    slug: 'saudi-arabia',
    flag: '🇸🇦',
    desc: 'The largest Gulf economy with vast opportunities in construction, healthcare, and technology under Vision 2030.',
    image: 'https://images.unsplash.com/photo-1586724237569-f1e64b5e5d5b?w=800',
    tags: ['Construction', 'Healthcare', 'Oil & Gas', 'Hospitality'],
  },
  {
    name: 'United Arab Emirates',
    slug: 'uae',
    flag: '🇦🇪',
    desc: 'A global hub for business, tourism, and logistics with diverse job opportunities across all sectors.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    tags: ['Construction', 'Hospitality', 'Logistics', 'Retail'],
  },
  {
    name: 'Qatar',
    slug: 'qatar',
    flag: '🇶🇦',
    desc: 'A rapidly growing economy with major infrastructure projects and world-class facilities.',
    image: 'https://images.unsplash.com/photo-1572204292164-eafb3b90b8b4?w=800',
    tags: ['Construction', 'Hospitality', 'Healthcare', 'Energy'],
  },
  {
    name: 'Oman',
    slug: 'oman',
    flag: '🇴🇲',
    desc: 'A stable and welcoming country with growing demand for skilled workers across multiple sectors.',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800',
    tags: ['Construction', 'Tourism', 'Logistics', 'Healthcare'],
  },
  {
    name: 'Germany',
    slug: 'germany',
    flag: '🇩🇪',
    desc: 'Europe\'s largest economy with excellent opportunities for skilled professionals in engineering, IT, and healthcare.',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80',
    tags: ['Engineering', 'IT', 'Healthcare', 'Manufacturing'],
  },
  {
    name: 'Poland',
    slug: 'poland',
    flag: '🇵🇱',
    desc: 'A growing European economy with strong demand for skilled workers in manufacturing, logistics, and services.',
    image: 'https://images.unsplash.com/photo-1607427293702-8f7f0e5a5c5d?w=800',
    tags: ['Manufacturing', 'Logistics', 'Construction', 'IT'],
  },
  {
    name: 'Romania',
    slug: 'romania',
    flag: '🇷🇴',
    desc: 'An emerging European destination with opportunities in construction, agriculture, and IT sectors.',
    image: 'https://images.unsplash.com/photo-1534445867742-7f4b5e4b5e5d?w=600&q=80',
    tags: ['Construction', 'Agriculture', 'IT', 'Manufacturing'],
  },
  {
    name: 'Greece',
    slug: 'greece',
    flag: '🇬🇷',
    desc: 'A scenic European country with opportunities in tourism, hospitality, construction, and maritime industries.',
    image: 'https://images.unsplash.com/photo-1503152394-c5710fd3e5d5?w=800',
    tags: ['Tourism', 'Hospitality', 'Maritime', 'Construction'],
  },
  {
    name: 'Malaysia',
    slug: 'malaysia',
    flag: '🇲🇾',
    desc: 'A dynamic Southeast Asian economy with opportunities in manufacturing, construction, and services.',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800',
    tags: ['Manufacturing', 'Construction', 'Palm Oil', 'Hospitality'],
  },
];

export default function Countries() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-highlight)] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-extrabold">Destinations</h1>
            <p className="mt-4 text-[var(--color-secondary)] text-lg max-w-2xl mx-auto">
              Explore employment opportunities in our partner countries across the Gulf and Europe.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Country Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((c, i) => (
            <FadeIn key={c.slug} delay={Math.min(i + 1, 6)}>
              <Link
                to={`/countries/${c.slug}`}
                className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white border border-[var(--color-secondary)]/20"
              >
                <div className="img-hover-zoom h-48">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/hero.jpg';
                    }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{c.flag}</span>
                    <h3 className="text-xl font-bold text-[var(--color-ink)]">{c.name}</h3>
                  </div>
                  <p className="text-sm text-[var(--color-ink)]/70 line-clamp-2 mb-3">
                    {c.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full bg-[var(--color-background)] text-[var(--color-ink)]/70"
                      >
                        {t}
                      </span>
                    ))}
                    {c.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-background)] text-[var(--color-primary)]">
                        +{c.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Country Chips */}
      <section className="bg-[var(--color-background)] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h3 className="text-lg font-bold text-[var(--color-ink)] mb-6">Quick Browse</h3>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-3">
            {countries.map((c, i) => (
              <FadeIn key={c.slug} delay={Math.min(i + 1, 5)}>
                <Link
                  to={`/countries/${c.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[var(--color-secondary)]/20 hover:border-[var(--color-primary)] hover:shadow transition-all text-sm font-medium text-[var(--color-ink)]"
                >
                  <span>{c.flag}</span>
                  {c.name}
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}