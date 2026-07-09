import useScrollReveal from '../hooks/useScrollReveal';
import OptimizedImage from './OptimizedImage';

const countries = [
  { name: 'Saudi Arabia', jobs: 'Construction, Healthcare, Hospitality', src: 'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=400&h=250&fit=crop&q=80', icon: 'fas fa-mosque' },
  { name: 'UAE', jobs: 'Hospitality, Logistics, Construction', src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop&q=80', icon: 'fas fa-city' },
  { name: 'Qatar', jobs: 'Oil & Gas, Hospitality, Security', src: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=400&h=250&fit=crop&q=80', icon: 'fas fa-city' },
  { name: 'Oman', jobs: 'Oil & Gas, Healthcare, Retail', src: 'https://images.unsplash.com/photo-1548266652-99cf27701ced?w=400&h=250&fit=crop&q=80', icon: 'fas fa-water' },
  { name: 'Germany', jobs: 'Healthcare, IT, Engineering', src: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=250&fit=crop&q=80', icon: 'fas fa-landmark' },
  { name: 'Poland', jobs: 'Manufacturing, Construction, IT', src: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400&h=250&fit=crop&q=80', icon: 'fas fa-university' },
  { name: 'Greece', jobs: 'Hospitality, Agriculture, Maritime', src: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=400&h=250&fit=crop&q=80', icon: 'fas fa-archway' },
  { name: 'Romania', jobs: 'Manufacturing, IT, Construction', src: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400&h=250&fit=crop&q=80', icon: 'fas fa-university' },
  { name: 'Malaysia', jobs: 'Manufacturing, Electronics', src: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=250&fit=crop&q=80', icon: 'fas fa-city' },
];

export default function CountryGuide() {
  const revealRef = useScrollReveal();

  return (
    <section id="countries" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF3CAC]/10 text-[#FF3CAC] rounded-full text-xs font-semibold mb-4">
            <i className="fas fa-globe" />
            Destinations
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A0A1E] mb-3">
            Destinations We Serve
          </h2>
          <p className="text-sm sm:text-base text-[#1A0A1E]/60 max-w-xl mx-auto">
            Opportunities across the Middle East, Europe &amp; Asia — matched to your skills.
          </p>
        </div>

        <div ref={revealRef} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {countries.map((c, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden border border-pink-100 bg-white hover:shadow-xl hover:shadow-[#FF3CAC]/10 hover:border-[#FF3CAC]/30 transition-all duration-300">
              <div className="h-36 sm:h-40 overflow-hidden">
                <OptimizedImage src={c.src} alt={`${c.name} — destination for overseas employment`} className="w-full h-full" icon={c.icon} />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold font-[Plus Jakarta Sans] text-[#1A0A1E] mb-3">{c.name}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {c.jobs.split(', ').map((job, j) => (
                    <span key={j} className="text-xs px-2.5 py-1 rounded-full bg-[#FFD6F0] text-[#1A0A1E]/70 font-medium">{job}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}