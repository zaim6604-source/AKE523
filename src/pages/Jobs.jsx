import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';
import PillBadge from '../components/PillBadge';
import JOBS, { COUNTRIES } from '../data/jobs';

const FALLBACK_IMG = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22800%22 height%3D%22600%22%3E%3Crect width%3D%22800%22 height%3D%22600%22 fill%3D%22%23F2F6F9%22%2F%3E%3Ccircle cx%3D%22400%22 cy%3D%22300%22 r%3D%2280%22 fill%3D%22%23C9CCD5%22%2F%3E%3C%2Fsvg%3E';

const categories = ['All', 'Gulf', 'Europe', 'Asia'];
const jobCategories = ['All', ...new Set(JOBS.map(j => j.category))];

export default function Jobs() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [regionFilter, setRegionFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredJobs = useMemo(() => {
    return JOBS.filter((job) => {
      const country = COUNTRIES[job.countryKey];
      if (regionFilter !== 'All' && country.region !== regionFilter) return false;
      if (categoryFilter !== 'All' && job.category !== categoryFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        const matchesSearch =
          job.role.toLowerCase().includes(q) ||
          country.name.toLowerCase().includes(q) ||
          job.category.toLowerCase().includes(q);
        if (!matchesSearch) return false;
      }
      return true;
    });
  }, [regionFilter, categoryFilter, search]);

  return (
    <div className="page-enter">
      {/* ─── Header ─── */}
      <section className="bg-gradient-to-br from-[#1B4965] to-[#0B3954] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PillBadge text="JOBS PORTAL" index={2} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 leading-tight">
            Find Your{' '}
            <span className="text-[#FF6B35]">Next Opportunity</span>
          </h1>
          <p className="text-[#C9CCD5] mt-3 max-w-2xl mx-auto text-base sm:text-lg">
            Browse openings across 9 countries. Filter by region, category, or search by keyword.
          </p>
        </div>
      </section>

      {/* ─── Filters ─── */}
      <section className="bg-white shadow-sm border-b border-[#C9CCD5]/30 sticky top-16 lg:top-20 z-30" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Search */}
          <div className="relative mb-4">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-[#C9CCD5] text-sm" />
            <input
              type="text"
              placeholder="Search by role, country, or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-[#C9CCD5] rounded-xl focus:border-[#1B4965] focus:ring-2 focus:ring-[#1B4965]/20 outline-none bg-[#F2F6F9] text-[#0B2436]"
            />
          </div>

          {/* Region Chips */}
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setRegionFilter(cat)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  regionFilter === cat
                    ? 'bg-[#1B4965] text-white shadow-md'
                    : 'bg-[#F2F6F9] text-[#0B2436]/70 hover:bg-[#C9CCD5]/50'
                }`}
              >
                {cat === 'All' ? 'All Regions' : cat}
              </button>
            ))}
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2">
            {jobCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  categoryFilter === cat
                    ? 'bg-[#FF6B35] text-white shadow-md'
                    : 'bg-[#F2F6F9] text-[#0B2436]/70 hover:bg-[#C9CCD5]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-xs text-[#0B2436]/50 mt-3">
            {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
          </p>
        </div>
      </section>

      {/* ─── Job Listings ─── */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-[#C9CCD5]/30 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-search text-2xl text-[#C9CCD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B2436] mb-2">No Jobs Found</h3>
              <p className="text-sm text-[#0B2436]/60 mb-4">Try adjusting your filters or search term.</p>
              <button
                onClick={() => { setRegionFilter('All'); setCategoryFilter('All'); setSearch(''); }}
                className="text-sm text-[#1B4965] font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => {
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
                      <p className="text-xs text-[#0B2436]/60 mb-3 line-clamp-2">
                        {job.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#0B2436]/50">
                          {job.requirements.length} requirements
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF6B35] group-hover:underline">
                          View & Apply <i className="fas fa-arrow-right text-[10px]" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}