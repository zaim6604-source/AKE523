import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { jobs, categories, categoryLabels } from '../data/jobs';

export default function JobsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const matchCategory = activeCategory === 'all' || job.category === activeCategory;
      const matchSearch = !search ||
        job.role.toLowerCase().includes(search.toLowerCase()) ||
        job.country.toLowerCase().includes(search.toLowerCase()) ||
        job.tagline.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary via-highlight to-primary py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-accent text-white mb-4">
            OEP 2266/LHR
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading mb-4">
            Job <span className="text-accent">Openings</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Find the job. Pick the country. We handle the rest.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
            <input
              type="text"
              placeholder="Search by role, country, or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-ink/10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-ink/70 border border-ink/10 hover:border-primary hover:text-primary'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-ink/70 border border-ink/10 hover:border-primary hover:text-primary'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-ink/50 mb-6">
          {filtered.length} job{filtered.length !== 1 ? 's' : ''} found
        </p>

        {/* Job Cards Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-44 overflow-hidden bg-primary">
                  <img
                    src={job.img}
                    alt={`${job.country} - ${job.role}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => { e.target.src = '/images/hero-team.jpg'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-accent text-ink text-xs font-bold px-3 py-1 rounded-full">
                      {job.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-2xl">{job.flag}</span>
                    <h3 className="text-white font-bold text-lg leading-tight">{job.country}</h3>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-lg font-bold text-ink mb-1">{job.role}</h4>
                  <p className="text-ink/60 text-sm mb-4 flex-1">{job.tagline}</p>
                  <Link
                    to={`/jobs/${job.id}`}
                    className="inline-flex items-center justify-center gap-2 bg-cta text-white px-5 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-cta/30"
                  >
                    <i className="fas fa-eye" /> View & Apply
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-4xl mx-auto mb-4">
              <i className="fas fa-search" />
            </div>
            <h3 className="text-xl font-bold text-ink mb-2">No jobs found</h3>
            <p className="text-ink/50">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}