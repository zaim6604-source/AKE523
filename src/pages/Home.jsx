import { Link } from 'react-router-dom'

const WHATSAPP = 'https://wa.me/923215344448'

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '10,000+', label: 'Professionals Placed' },
  { value: '9', label: 'Countries' },
  { value: '2251/RWP', label: 'Govt. License' },
]

const services = [
  { title: 'Job Placement', icon: 'fa-briefcase', desc: 'Connect with verified employers worldwide.' },
  { title: 'Visa Processing', icon: 'fa-passport', desc: 'Hassle-free visa applications for all destinations.' },
  { title: 'Manpower Supply', icon: 'fa-people-group', desc: 'Skilled & unskilled manpower for international employers.' },
]

const destinations = [
  { name: 'Saudi Arabia', flag: '🇸🇦', slug: 'saudi-arabia' },
  { name: 'UAE', flag: '🇦🇪', slug: 'uae' },
  { name: 'Qatar', flag: '🇶🇦', slug: 'qatar' },
  { name: 'Germany', flag: '🇩🇪', slug: 'germany' },
  { name: 'Malaysia', flag: '🇲🇾', slug: 'malaysia' },
]

export default function Home() {
  return (
    <div className="space-y-16 animate-fade-up">
      {/* Hero */}
      <section className="text-center pt-6 lg:pt-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 text-primary text-xs font-semibold rounded-full mb-5 border border-primary/10">
          <i className="fas fa-certificate text-[10px]" />
          License 2251/RWP — Govt. Recognized
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-ink mb-4">
          World-Class <br />
          <span className="text-primary">Professionals</span>, Global{' '}
          <span className="text-primary">Opportunities</span>
        </h1>
        <p className="text-base sm:text-lg text-ink/60 max-w-2xl mx-auto mb-8 leading-relaxed">
          Al-Bassami Recruiting Agency connects Pakistan's top talent with leading
          employers worldwide. Licensed, trusted, and results-driven.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cta hover:bg-cta/90 text-white text-sm font-semibold transition-all shadow-lg shadow-cta/20"
          >
            <i className="fab fa-whatsapp text-lg" />
            Apply Now
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary/20 text-primary hover:bg-primary/5 text-sm font-semibold transition-all"
          >
            <i className="fab fa-whatsapp text-lg" />
            Chat with Us
          </a>
        </div>
      </section>

      {/* Stats Band */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map(({ value, label }) => (
          <div key={label} className="bg-white rounded-2xl p-5 text-center border border-ink/5 shadow-sm">
            <div className="text-2xl font-extrabold text-primary">{value}</div>
            <div className="text-xs text-ink/50 mt-1 font-medium">{label}</div>
          </div>
        ))}
      </section>

      {/* Services Teaser */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-ink">Our Services</h2>
          <Link to="/services" className="text-sm text-primary font-semibold hover:underline">
            View All &rarr;
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {services.map(({ title, icon, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-5 border border-ink/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <i className={`fas ${icon} text-primary`} />
              </div>
              <h3 className="font-semibold text-ink mb-1">{title}</h3>
              <p className="text-xs text-ink/50 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Destinations */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-ink">Top Destinations</h2>
          <Link to="/countries" className="text-sm text-primary font-semibold hover:underline">
            All Countries &rarr;
          </Link>
        </div>
        <div className="flex flex-wrap gap-3">
          {destinations.map(({ name, flag, slug }) => (
            <Link
              key={slug}
              to={`/countries/${slug}`}
              className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-ink/5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all text-sm font-medium"
            >
              <span className="text-lg">{flag}</span>
              {name}
            </Link>
          ))}
        </div>
      </section>

      {/* Mission Line */}
      <section className="bg-gradient-to-br from-primary/5 to-cta/5 rounded-3xl p-8 sm:p-10 text-center border border-primary/10">
        <i className="fas fa-quote-left text-2xl text-primary/20 mb-3" />
        <blockquote className="text-lg sm:text-xl text-ink/80 font-medium italic leading-relaxed max-w-3xl mx-auto">
          To provide Pakistan-based companies with world-class professionals and
          open career opportunities that upgrade the competitiveness of the
          Pakistani workforce.
        </blockquote>
        <div className="mt-4 text-sm font-semibold text-primary">— Our Mission</div>
      </section>
    </div>
  )
}