import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { jobs, categories, categoryLabels } from '../data/jobs';

export default function JobsStrip() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  const filtered = jobs.filter((job) => {
    const matchCategory = activeCategory === 'all' || job.category === activeCategory;
    const matchSearch = job.role.toLowerCase().includes(search.toLowerCase()) ||
      job.country.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <SectionWrapper id="jobs" badge="OPEN POSITIONS" badgeColor="primary">
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-2 font-display">
        Available Jobs
      </h2>
      <p className="text-ink/60 mb-6 max-w-2xl">
        Browse current openings and apply directly via WhatsApp.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            activeCategory === 'all' ? 'bg-primary text-white' : 'bg-ink/5 text-ink/60 hover:bg-ink/10'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === cat ? 'bg-primary text-white' : 'bg-ink/5 text-ink/60 hover:bg-ink/10'
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      <div className="relative mb-8">
        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-ink/30" />
        <input
          type="text"
          placeholder="Search by role or country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-ink/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((job) => (
          <button
            key={job.id}
            onClick={() => setSelectedJob(job)}
            className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all text-left border border-ink/5 hover:border-primary/20 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{job.flag}</span>
              <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-1 rounded-full">
                {job.tag}
              </span>
            </div>
            <h3 className="font-bold text-ink group-hover:text-primary transition-colors">{job.role}</h3>
            <p className="text-sm text-ink/50 mt-1">{job.country}</p>
            <p className="text-xs text-ink/40 mt-2 line-clamp-2">{job.tagline}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
              Apply Now <i className="fas fa-arrow-right text-xs" />
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-ink/40">
          <i className="fas fa-search text-4xl mb-4" />
          <p>No jobs found matching your criteria.</p>
        </div>
      )}

      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-48 bg-primary">
              <img
                src={selectedJob.img}
                alt={selectedJob.country}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="text-2xl">{selectedJob.flag}</span>
                <h3 className="text-xl font-bold text-white">{selectedJob.role}</h3>
                <p className="text-white/80 text-sm">{selectedJob.country}</p>
              </div>
              <button onClick={() => setSelectedJob(null)} className="absolute top-4 right-4 text-white/80 hover:text-white text-xl">
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="p-6 space-y-5">
              <p className="text-ink/70 leading-relaxed">{selectedJob.description}</p>
              {selectedJob.salary && (
                <div className="flex items-center gap-2 bg-accent/10 rounded-xl px-4 py-3">
                  <i className="fas fa-money-bill-wave text-accent" />
                  <span className="font-bold text-ink">{selectedJob.salary}</span>
                </div>
              )}
              <div>
                <h4 className="font-bold text-ink mb-2">Requirements</h4>
                <ul className="space-y-1.5">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink/70">
                      <i className="fas fa-check-circle text-primary mt-0.5 text-xs" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              {selectedJob.processing && (
                <div className="flex items-center gap-2 bg-ink/5 rounded-xl px-4 py-3">
                  <i className="fas fa-clock text-ink/40" />
                  <span className="text-sm text-ink/60">Processing: <strong className="text-ink">{selectedJob.processing}</strong></span>
                </div>
              )}
              <a
                href={`https://wa.me/923335020040?text=${encodeURIComponent(`Hello Zanib Recruiting Agency! I am interested in the ${selectedJob.role} position in ${selectedJob.country}. Please share more details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-white text-center py-3.5 rounded-full font-bold hover:brightness-110 transition-all"
              >
                <i className="fab fa-whatsapp mr-2" />Apply for {selectedJob.role}
              </a>
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
