import { useParams, Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { countries } from '../data/countries';

const countryMeta = {
  'saudi-arabia': { flag: '\u{1F1F8}\u{1F1E6}' },
  'uae': { flag: '\u{1F1E6}\u{1F1EA}' },
  'qatar': { flag: '\u{1F1F6}\u{1F1E6}' },
  'oman': { flag: '\u{1F1F4}\u{1F1F2}' },
  'germany': { flag: '\u{1F1E9}\u{1F1EA}' },
  'poland': { flag: '\u{1F1F5}\u{1F1F1}' },
  'romania': { flag: '\u{1F1F7}\u{1F1F4}' },
  'greece': { flag: '\u{1F1EC}\u{1F1F7}' },
  'malaysia': { flag: '\u{1F1F2}\u{1F1FE}' },
};

export default function CountryDetail() {
  const { slug } = useParams();
  const country = countries.find((c) => c.slug === slug);
  const meta = countryMeta[slug] || { flag: '\u{1F30D}' };

  if (!country) {
    return (
      <div className="page-transition max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#003844' }}>Country Not Found</h1>
        <p className="mb-8" style={{ color: '#006D77' }}>The destination you are looking for does not exist.</p>
        <Link to="/countries" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all text-white" style={{ backgroundColor: '#006D77' }}>
          <i className="fas fa-arrow-left" />
          View All Countries
        </Link>
      </div>
    );
  }

  const applyText = encodeURIComponent(
    `Hello Fowzan Traders! I'm interested in applying for employment in ${country.name}. Please provide me with more information about available opportunities.`
  );

  return (
    <div className="page-transition">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src={country.image} alt={country.name} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3">
                <span className="text-4xl">{meta.flag}</span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>{country.name}</h1>
              </div>
              <p className="text-lg text-white/70 mt-2">{country.headline}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Main */}
          <div className="md:col-span-2 space-y-10">
            <FadeIn>
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#003844' }}>Overview</h2>
                <p className="leading-relaxed" style={{ color: '#006D77' }}>{country.description}</p>
              </div>
            </FadeIn>

            <FadeIn delay={1}>
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#003844' }}>In-Demand Roles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {country.roles.map((role) => (
                    <div key={role} className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: '#EDF6F9', border: '1px solid #83C5BE' }}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#006D7710' }}>
                        <i className="fas fa-check text-xs" style={{ color: '#006D77' }} />
                      </div>
                      <span className="text-sm font-medium" style={{ color: '#003844' }}>{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={2}>
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#003844' }}>Requirements</h2>
                <ul className="space-y-3">
                  {country.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3">
                      <i className="fa-solid fa-circle-check mt-1" style={{ color: '#006D77' }} />
                      <span style={{ color: '#006D77' }}>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div>
            <FadeIn delay={1}>
              <div className="sticky top-24 bg-white rounded-2xl shadow-lg border p-6" style={{ borderColor: '#83C5BE' }}>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#003844' }}>
                  Apply for {country.name}
                </h3>
                <p className="text-sm mb-6" style={{ color: '#006D77' }}>
                  Ready to start your journey? Apply now and our team will guide you through the process.
                </p>
                <a
                  href={`https://wa.me/923006162506?text=${applyText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all mb-3"
                  style={{ backgroundColor: '#E29578' }}
                >
                  <i className="fab fa-whatsapp" />
                  Apply via WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold border-2 transition-all"
                  style={{ borderColor: '#006D77', color: '#006D77' }}
                >
                  <i className="fa-regular fa-paper-plane" />
                  Contact Form
                </Link>
                <div className="mt-6 pt-4 border-t" style={{ borderColor: '#83C5BE' }}>
                  <Link to="/countries" className="text-sm font-medium flex items-center gap-1" style={{ color: '#006D77' }}>
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
