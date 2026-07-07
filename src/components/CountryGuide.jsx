import SectionHeader from './SectionHeader';
import { useEffect, useRef } from 'react';

const countries = [
  { name: 'Saudi Arabia', capital: 'Riyadh', img: '/images/saudi.jpg', sectors: 'Construction, Drivers' },
  { name: 'UAE', capital: 'Abu Dhabi', img: '/images/uae.jpg', sectors: 'Hospitality, Retail' },
  { name: 'Qatar', capital: 'Doha', img: '/images/qatar.jpg', sectors: 'Construction, Oil & Gas' },
  { name: 'Oman', capital: 'Muscat', img: '/images/oman.jpg', sectors: 'Transport, Hospitality' },
  { name: 'Germany', capital: 'Berlin', img: '/images/germany.jpg', sectors: 'Nurses, Trades, IT' },
  { name: 'Romania', capital: 'Bucharest', img: '/images/romania.jpg', sectors: 'Construction, Manufacturing' },
  { name: 'Greece', capital: 'Athens', img: '/images/greece.jpg', sectors: 'Tourism, Hospitality' },
  { name: 'Croatia', capital: 'Dubrovnik', img: '/images/croatia.svg', sectors: 'Tourism, Hospitality' },
  { name: 'Malaysia', capital: 'Kuala Lumpur', img: '/images/malaysia.svg', sectors: 'Electronics, Manufacturing' },
];

const allTags = countries.map(c => c.name);

export default function CountryGuide() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="destinations" className="py-24 relative overflow-hidden" style={{ background: 'var(--color-background)' }} ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal">
          <SectionHeader tag="Destinations" title="Countries We Serve"
            sub="We connect workers from Swat to trusted employers across the Gulf and Europe." />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {countries.slice(0, 6).map((c, i) => (
            <div key={c.name}
              className="reveal group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              style={{ transitionDelay: `${i * 0.08}s` }}>
              {c.img && (
                <div className="h-44 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover card-img"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              )}
              {!c.img && (
                <div className="h-44 flex items-center justify-center"
                  style={{ background: 'var(--color-background)' }}>
                  <i className="fas fa-map-marked-alt text-4xl" style={{ color: 'var(--color-primary)' }} />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-[#340710]">{c.name}</h3>
                  <span className="text-xs text-gray-400">{c.capital}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {c.sectors.split(', ').map(s => (
                    <span key={s} className="text-[0.65rem] font-medium px-2.5 py-1 rounded-full"
                      style={{ background: 'var(--color-background)', color: 'var(--color-primary)' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Country chip grid */}
        <div className="reveal">
          <p className="text-center text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">All Destinations</p>
          <div className="flex flex-wrap justify-center gap-3">
            {allTags.map((name, i) => (
              <span key={name}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                style={{
                  background: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-cta)',
                  color: '#fff',
                }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}