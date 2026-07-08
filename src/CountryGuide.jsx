import { COUNTRIES } from './constants';
import useInView from './useInView';

const CHIP_COLORS = [
  'bg-[#9C27B0] text-white',
  'bg-[#E91E63] text-white',
  'bg-[#7B1FA2] text-white',
  'bg-[#FF4081] text-white',
  'bg-[#CE93D8] text-[#2A1033]',
  'bg-[#FFD740] text-[#2A1033]',
  'bg-[#9C27B0] text-white',
  'bg-[#E91E63] text-white',
  'bg-[#7B1FA2] text-white',
];

function CountryCard({ country, index, inView }) {
  return (
    <div
      className={`group rounded-2xl overflow-hidden shadow-lg bg-white transition-all duration-700 hover-lift ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={country.image}
          alt={country.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
          }}
        />
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#9C27B0] to-[#7B1FA2] flex items-center justify-center -z-10">
          <span className="text-6xl">{country.flag}</span>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-3 left-3 right-3">
          <span className="text-2xl mr-2">{country.flag}</span>
          <span className="text-white font-heading font-bold text-lg">{country.name}</span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs font-semibold text-[#9C27B0] uppercase tracking-wider mb-1">Hiring for</p>
        <p className="text-sm text-[#2A1033]/70">{country.roles}</p>
      </div>
    </div>
  );
}

export default function CountryGuide() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="countries" className="py-16 md:py-24 bg-white">
      <div className="container-main" ref={ref}>
        <div className="text-center mb-4">
          <span className="pill-badge">
            <i className="fas fa-globe text-[10px] mr-1.5"></i>
            DESTINATIONS
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#2A1033] mb-4">
          Countries We Serve
        </h2>
        <p className="text-center text-[#2A1033]/60 max-w-2xl mx-auto mb-10 md:mb-14">
          We connect Pakistani workers with trusted employers across the Middle East, Europe, and Asia.
        </p>

        {/* Country cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {COUNTRIES.slice(0, 6).map((country, i) => (
            <CountryCard key={country.slug} country={country} index={i} inView={inView} />
          ))}
        </div>

        {/* Compact country chip grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {COUNTRIES.map((country, i) => (
            <span
              key={country.slug}
              className={`inline-flex items-center gap-2 ${CHIP_COLORS[i % CHIP_COLORS.length]} font-semibold text-sm px-4 py-2 rounded-full transition-all hover:scale-105 cursor-default`}
            >
              <span>{country.flag}</span>
              {country.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}