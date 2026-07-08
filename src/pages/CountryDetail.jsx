import { useParams, Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const countries = {
  'saudi-arabia': {
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    image: 'https://images.unsplash.com/photo-1586724237569-f1e64b5e5d5b?w=800',
    roles: ['Construction Workers', 'Healthcare Professionals', 'Oil & Gas Technicians', 'Hospitality Staff', 'Drivers', 'Electricians', 'Plumbers', 'IT Specialists'],
    requirements: ['Valid passport (min 6 months validity)', 'Educational certificates attested', 'Medical fitness certificate', 'Clean police clearance', 'Age 22–50 years', 'Relevant work experience (2+ years)'],
    desc: 'Saudi Arabia offers vast employment opportunities under the Vision 2030 initiative. With mega-projects, expanding healthcare, and a growing tourism sector, the demand for skilled and unskilled workers remains high.',
  },
  'uae': {
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    roles: ['Construction Workers', 'Hospitality Staff', 'Logistics Personnel', 'Retail Staff', 'Drivers', 'Cleaners', 'Technicians', 'Security Guards'],
    requirements: ['Valid passport (min 6 months validity)', 'Educational certificates attested', 'Medical fitness certificate', 'Clean police clearance', 'Age 20–45 years', 'Basic English proficiency'],
    desc: 'The UAE is a global hub for business, tourism, and logistics. With world-class infrastructure and a tax-free income environment, it remains one of the top destinations for overseas workers.',
  },
  'qatar': {
    name: 'Qatar',
    flag: '🇶🇦',
    image: 'https://images.unsplash.com/photo-1572204292164-eafb3b90b8b4?w=800',
    roles: ['Construction Workers', 'Hospitality Staff', 'Healthcare Workers', 'Energy Sector Technicians', 'Drivers', 'Security Personnel', 'Maintenance Staff'],
    requirements: ['Valid passport (min 6 months validity)', 'Educational certificates attested', 'Medical fitness certificate', 'Clean police clearance', 'Age 22–50 years', 'Relevant experience'],
    desc: 'Qatar has undergone rapid development with world-class infrastructure. The growing economy continues to demand skilled workers across construction, hospitality, healthcare, and energy sectors.',
  },
  'oman': {
    name: 'Oman',
    flag: '🇴🇲',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800',
    roles: ['Construction Workers', 'Tourism Staff', 'Logistics Personnel', 'Healthcare Workers', 'Drivers', 'Technicians'],
    requirements: ['Valid passport (min 6 months validity)', 'Educational certificates attested', 'Medical fitness certificate', 'Clean police clearance', 'Age 22–50 years'],
    desc: 'Oman offers a stable and welcoming environment for overseas workers. With growing investments in tourism, logistics, and healthcare, opportunities continue to expand.',
  },
  'germany': {
    name: 'Germany',
    flag: '🇩🇪',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80',
    roles: ['Engineers', 'IT Professionals', 'Healthcare Workers', 'Manufacturing Specialists', 'Electricians', 'Welders', 'Nurses', 'Software Developers'],
    requirements: ['Valid passport', 'Recognized qualifications', 'German language (A1–B1 recommended)', 'Health insurance', 'Employment contract', 'Age 22–45 years'],
    desc: 'Germany is Europe\'s largest economy with a strong demand for skilled professionals. The country offers excellent working conditions, competitive salaries, and pathways to permanent residency.',
  },
  'poland': {
    name: 'Poland',
    flag: '🇵🇱',
    image: 'https://images.unsplash.com/photo-1607427293702-8f7f0e5a5c5d?w=800',
    roles: ['Manufacturing Workers', 'Logistics Staff', 'Construction Workers', 'IT Professionals', 'Warehouse Workers', 'Drivers'],
    requirements: ['Valid passport', 'Work permit (arranged by employer)', 'Medical insurance', 'Age 22–50 years', 'Basic English or Polish'],
    desc: 'Poland has a rapidly growing economy with strong demand for foreign workers in manufacturing, logistics, construction, and IT sectors.',
  },
  'romania': {
    name: 'Romania',
    flag: '🇷🇴',
    image: 'https://images.unsplash.com/photo-1534445867742-7f4b5e4b5e5d?w=600&q=80',
    roles: ['Construction Workers', 'Agricultural Workers', 'IT Professionals', 'Manufacturing Staff', 'Drivers', 'Chefs'],
    requirements: ['Valid passport', 'Work permit (arranged by employer)', 'Medical insurance', 'Age 22–50 years', 'Relevant experience'],
    desc: 'Romania is an emerging European destination for overseas workers. With growing construction, agriculture, and IT sectors, opportunities are expanding for skilled professionals.',
  },
  'greece': {
    name: 'Greece',
    flag: '🇬🇷',
    image: 'https://images.unsplash.com/photo-1503152394-c5710fd3e5d5?w=800',
    roles: ['Tourism & Hospitality Staff', 'Construction Workers', 'Maritime Workers', 'Agricultural Workers', 'Chefs', 'Cleaners'],
    requirements: ['Valid passport', 'Work permit (arranged by employer)', 'Medical insurance', 'Age 22–50 years', 'Relevant experience'],
    desc: 'Greece offers opportunities primarily in tourism, hospitality, construction, and maritime industries. The country\'s scenic beauty and Mediterranean lifestyle attract workers from around the world.',
  },
  'malaysia': {
    name: 'Malaysia',
    flag: '🇲🇾',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800',
    roles: ['Manufacturing Workers', 'Construction Workers', 'Palm Oil Plantation Workers', 'Hospitality Staff', 'Technicians', 'Drivers'],
    requirements: ['Valid passport (min 18 months validity)', 'Medical fitness certificate', 'Employment contract', 'Age 22–45 years', 'Relevant experience'],
    desc: 'Malaysia offers a dynamic work environment with opportunities in manufacturing, construction, palm oil, and hospitality sectors. The cost of living is affordable and the culture is diverse.',
  },
};

export default function CountryDetail() {
  const { slug } = useParams();
  const country = countries[slug];

  if (!country) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold text-[var(--color-ink)] mb-4">Country Not Found</h1>
        <p className="text-[var(--color-ink)]/70 mb-8">The destination you are looking for does not exist.</p>
        <Link
          to="/countries"
          className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition-all"
        >
          <i className="fas fa-arrow-left" />
          View All Countries
        </Link>
      </div>
    );
  }

  const applyText = encodeURIComponent(
    `Hello! I'm interested in applying for employment in ${country.name}. Please provide me with more information about available opportunities.`
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={country.image}
          alt={country.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/hero.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3">
                <span className="text-4xl">{country.flag}</span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">
                  {country.name}
                </h1>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Main */}
          <div className="md:col-span-2 space-y-10">
            {/* Description */}
            <FadeIn>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-4">Overview</h2>
                <p className="text-[var(--color-ink)]/80 leading-relaxed">{country.desc}</p>
              </div>
            </FadeIn>

            {/* In-Demand Roles */}
            <FadeIn delay={1}>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-4">In-Demand Roles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {country.roles.map((role) => (
                    <div
                      key={role}
                      className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-background)] border border-[var(--color-secondary)]/20"
                    >
                      <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                        <i className="fas fa-check text-[var(--color-primary)] text-xs" />
                      </div>
                      <span className="text-sm font-medium text-[var(--color-ink)]">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Requirements */}
            <FadeIn delay={2}>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {country.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3">
                      <i className="fas fa-circle-check text-[var(--color-primary)] mt-1" />
                      <span className="text-[var(--color-ink)]/80">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div>
            <FadeIn delay={1}>
              <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-[var(--color-secondary)]/20 p-6">
                <h3 className="font-bold text-lg text-[var(--color-ink)] mb-2">
                  Apply for {country.name}
                </h3>
                <p className="text-sm text-[var(--color-ink)]/70 mb-6">
                  Ready to start your journey? Apply now and our team will guide you through the process.
                </p>
                <a
                  href={`https://wa.me/923469358431?text=${applyText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[var(--color-cta)] text-white font-semibold px-5 py-3 rounded-lg hover:brightness-110 transition-all mb-3"
                >
                  <i className="fab fa-whatsapp" />
                  Apply via WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold px-5 py-3 rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all"
                >
                  <i className="fas fa-paper-plane" />
                  Contact Form
                </Link>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    to="/countries"
                    className="text-sm text-[var(--color-primary)] hover:underline flex items-center gap-1"
                  >
                    <i className="fas fa-arrow-left" />
                    Back to all countries
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}