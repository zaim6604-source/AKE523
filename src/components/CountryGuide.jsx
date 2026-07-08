import useScrollReveal from '../hooks/useScrollReveal';
import OptimizedImage from './OptimizedImage';

const countries = [
  { name: 'Saudi Arabia', jobs: 'Construction, Healthcare, Hospitality', src: 'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=400&h=250&fit=crop&q=80', icon: 'fas fa-mosque' },
  { name: 'UAE', jobs: 'Hospitality, Logistics, Construction', src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop&q=80', icon: 'fas fa-city' },
  { name: 'Qatar', jobs: 'Oil & Gas, Hospitality, Security', src: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=400&h=250&fit=crop&q=80', icon: 'fas fa-city' },
  { name: 'Kuwait', jobs: 'Oil & Gas, Construction, Healthcare', src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=250&fit=crop&q=80', icon: 'fas fa-oil-well' },
  { name: 'Oman (Muscat)', jobs: 'Oil & Gas, Healthcare, Retail', src: 'https://images.unsplash.com/photo-1548266652-99cf27701ced?w=400&h=250&fit=crop&q=80', icon: 'fas fa-water' },
  { name: 'Bahrain (Manama)', jobs: 'Finance, Hospitality, Construction', src: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400&h=250&fit=crop&q=80', icon: 'fas fa-landmark' },
  { name: 'Germany', jobs: 'Healthcare, IT, Engineering', src: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=250&fit=crop&q=80', icon: 'fas fa-landmark' },
  { name: 'Malaysia (KL)', jobs: 'Manufacturing, Hospitality, IT', src: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=250&fit=crop&q=80', icon: 'fas fa-city' },
  { name: 'Turkey (Istanbul)', jobs: 'Hospitality, Construction, Retail', src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=250&fit=crop&q=80', icon: 'fas fa-mosque' },
];

export default function CountryGuide() {
  const revealRef = useScrollReveal();

  return (
    <section id="countries" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0496FF]/10 text-[#0496FF] rounded-full text-xs font-semibold mb-4">
            <i className="fas fa-globe" />
            Country Guide
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#062A45] mb-3">
            Destinations We Serve
          </h2>
          <p className="text-sm sm:text-base text-[#062A45]/60 max-w-xl mx-auto">
            Gulf countries, Europe &amp; Asia — we cover your top destination choices.
          </p>
        </div>

        <div ref={revealRef} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {countries.map((c, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden border border-blue-100 bg-white hover:shadow-xl hover:shadow-[#0496FF]/10 hover:border-[#0496FF]/30 transition-all duration-300"
            >
              <div className="h-36 sm:h-40 overflow-hidden">
                <OptimizedImage
                  src={c.src}
                  alt={`${c.name} — travel and visa destination`}
                  className="w-full h-full"
                  icon={c.icon}
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold font-[Plus_Jakarta_Sans] text-[#062A45] mb-3">{c.name}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {c.jobs.split(', ').map((job, j) => (
                    <span
                      key={j}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#E8F5FF] text-[#062A45]/70 font-medium"
                    >
                      {job}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chip grid */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {countries.map((c, i) => (
            <span key={i} className="chip bg-[#E8F5FF] border border-[#0496FF]/10">
              <i className="fas fa-plane text-[#0496FF] text-[10px]" />
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
