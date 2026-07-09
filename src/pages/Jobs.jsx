import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { jobs, categories, trades } from '../data/jobs';

export default function Jobs() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTrade, setActiveTrade] = useState('All');

  const filtered = jobs.filter((job) => {
    if (activeCategory !== 'All' && job.category !== activeCategory) return false;
    if (activeTrade !== 'All' && job.trade !== activeTrade) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        job.role.toLowerCase().includes(q) ||
        job.country.toLowerCase().includes(q) ||
        job.trade.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div>
      {/* Hero */}
      <section className="pt-24 pb-16 md:pb-20" style={{ backgroundColor: '#006D77' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFDD00' }}>
              <i className="fa-solid fa-briefcase" />
              Job Portal
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>Job Openings</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Browse current opportunities across the Gulf, Europe, and Asia.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6">
          <div className="relative mb-4">
            <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-sm" style={{ color: '#006D77' }} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by role, country, or trade..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
              style={{ borderColor: '#83C5BE', color: '#003844' }}
              onFocus={(e) => e.target.style.borderColor = '#006D77'}
              onBlur={(e) => e.target.style.borderColor = '#83C5BE'}
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer border transition-all duration-200"
                style={{
                  backgroundColor: activeCategory === cat ? '#006D77' : 'transparent',
                  color: activeCategory === cat ? 'white' : '#006D77',
                  borderColor: activeCategory === cat ? '#006D77' : '#83C5BE',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {trades.map((trade) => (
              <button
                key={trade}
                onClick={() => setActiveTrade(trade)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer border transition-all duration-200"
                style={{
                  backgroundColor: activeTrade === trade ? '#E29578' : 'transparent',
                  color: activeTrade === trade ? 'white' : '#006D77',
                  borderColor: activeTrade === trade ? '#E29578' : '#83C5BE',
                }}
              >
                {trade}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-medium" style={{ color: '#006D77' }}>
            Showing <span className="font-bold" style={{ color: '#E29578' }}>{filtered.length}</span> opening{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#006D7710' }}>
              <i className="fa-solid fa-search text-2xl" style={{ color: '#006D77' }} />
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: '#003844' }}>No openings found</h3>
            <p className="text-sm" style={{ color: '#006D77' }}>Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filtered.map((job, i) => (
              <FadeIn key={job.id} delay={Math.min(i + 1, 4)}>
                <Link to={`/jobs/${job.id}`} className="block bg-white rounded-2xl overflow-hidden shadow-sm border border-[#83C5BE30] hover:shadow-lg group">
                  <div className="h-40 overflow-hidden">
                    <img src={job.image} alt={job.country} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-lg">{job.flag}</span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#83C5BE]/30 text-[#003844]">{job.country}</span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#006D77]/10 text-[#006D77]">{job.trade}</span>
                    </div>
                    <h3 className="text-base font-bold mt-2 mb-1" style={{ color: '#003844' }}>{job.role}</h3>
                    <p className="text-xs" style={{ color: '#006D77' }}>{job.openings} openings &bull; {job.salary}</p>
                    <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 hover:gap-3 bg-[#E29578] text-white">
                      View &amp; Apply <i className="fa-solid fa-arrow-right text-[10px]" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
