import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';
import PillBadge from '../components/PillBadge';
import JOBS, { COUNTRIES } from '../data/jobs';

const FALLBACK_IMG = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22800%22 height%3D%22600%22%3E%3Crect width%3D%22800%22 height%3D%22600%22 fill%3D%22%23F2F6F9%22%2F%3E%3Ccircle cx%3D%22400%22 cy%3D%22300%22 r%3D%2280%22 fill%3D%22%23C9CCD5%22%2F%3E%3C%2Fsvg%3E';

const featuredJobs = JOBS.slice(0, 6);

const stats = [
  { icon: 'fa-briefcase', end: '200+', label: 'Open Positions' },
  { icon: 'fa-globe', end: '9', label: 'Countries' },
  { icon: 'fa-certificate', end: '100%', label: 'Govt. Licensed' },
  { icon: 'fa-users', end: '5000+', label: 'Workers Placed' },
];

export default function Home() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });
  const [jobsRef, jobsInView] = useInView({ threshold: 0.1 });

  return (
    <div className="page-enter">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-[#1B4965] to-[#0B3954] overflow-hidden flex items-center">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#5FA8D3]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#FF6B35]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#5FA8D3]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-12 w-full" ref={heroRef}>
          <div className="max-w-3xl">
            <div className={`mb-6 transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <PillBadge text="Govt. Licensed OEP — FF-227" index={2} />
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-6 transition-all duration-700 delay-100 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="block">Find the Job.</span>
              <span className="block text-[#5FA8D3]">Pick the Country.</span>
              <span className="block text-[#FF6B35]">We Handle the Rest.</span>
            </h1>

            <p className={`text-base sm:text-lg lg:text-xl text-[#C9CCD5] leading-relaxed mb-8 max-w-xl transition-all duration-700 delay-200 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Based at <strong className="text-white">Deans Trade Center, Peshawar</strong> — we connect skilled workers from KPK and across Pakistan with trusted employers worldwide.
            </p>

            <div className={`flex flex-wrap gap-3 sm:gap-4 transition-all duration-700 delay-300 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Link
                to="/jobs"
                className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e85d2a] text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base transition-all shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-search" />
                Browse Openings
              </Link>
              <a
                href="https://wa.me/923341999588"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-[#5FA8D3] text-white hover:text-[#5FA8D3] font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base transition-all"
              >
                <i className="fab fa-whatsapp" />
                WhatsApp Us
              </a>
            </div>

            {/* Trust Row */}
            <div className={`flex items-center gap-6 mt-10 pt-8 border-t border-white/10 transition-all duration-700 delay-400 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-2">
                <i className="fas fa-building text-[#5FA8D3] text-sm" />
                <span className="text-xs text-[#C9CCD5]">Deans Trade Center, Peshawar</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-globe text-[#FF6B35] text-sm" />
                <span className="text-xs text-[#C9CCD5]">9+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-[#5FA8D3] text-sm" />
                <span className="text-xs text-[#C9CCD5]">Govt. Licensed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAND ─── */}
      <section className="bg-[#1B4965] py-10 sm:py-14" ref={statsRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#5FA8D3]/20 backdrop-blur-sm mb-3">
                  <i className={`fas ${stat.icon} text-xl sm:text-2xl text-[#FF6B35]`} />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  {stat.end}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#C9CCD5] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED JOBS ─── */}
      <section className="py-16 sm:py-20 lg:py-24" ref={jobsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <PillBadge text="OPEN POSITIONS" index={1} />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2436] mt-4 leading-tight">
              Featured{' '}
              <span className="text-[#1B4965]">Opportunities</span>
            </h2>
            <p className="text-[#0B2436]/60 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
              Explore roles across the Gulf, Europe, and Asia. Apply directly via WhatsApp.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => {
              const country = COUNTRIES[job.countryKey];
              return (
                <Link
                  key={job.id}
                  to={`/jobs/${job.id}`}
                  className="card-lift bg-white rounded-2xl shadow-md overflow-hidden group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = FALLBACK_IMG; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-white text-xs font-semibold bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {country.flag} {country.name}
                      </span>
                      <span className="text-white text-xs font-semibold bg-[#FF6B35]/90 px-2.5 py-1 rounded-full">
                        {job.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#0B2436] text-base mb-1 line-clamp-1">
                      {job.role}
                    </h3>
                    <p className="text-sm text-[#1B4965] font-semibold mb-3">
                      {job.salary}{job.salaryInterval}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#0B2436]/50">
                        {job.requirements.length} requirements
                      </span>
                      <span className="text-xs font-semibold text-[#FF6B35] group-hover:underline">
                        View & Apply &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 bg-[#1B4965] hover:bg-[#0B3954] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-md hover:shadow-lg"
            >
              <i className="fas fa-search" />
              View All Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="bg-gradient-to-r from-[#0B3954] to-[#1B4965] py-14 sm:py-18">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Ready to Work Abroad?
          </h2>
          <p className="text-[#C9CCD5] text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Send us your details and we'll match you with the best opportunities in your field.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e85d2a] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg"
            >
              <i className="fas fa-paper-plane" />
              Apply Now
            </Link>
            <a
              href="https://wa.me/923341999588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all"
            >
              <i className="fab fa-whatsapp" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}