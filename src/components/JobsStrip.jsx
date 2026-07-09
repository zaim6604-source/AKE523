import { useState } from 'react';
import FadeUp from './FadeUp';
import SectionBadge from './SectionBadge';

const JOBS = [
  { title: 'Heavy Equipment Operator', country: 'Saudi Arabia', salary: 'SAR 3,000–5,000', type: 'Construction' },
  { title: 'Electrician', country: 'UAE', salary: 'AED 1,800–3,500', type: 'Construction' },
  { title: 'Hotel Receptionist', country: 'Qatar', salary: 'QAR 2,000–3,500', type: 'Hospitality' },
  { title: 'HVAC Technician', country: 'Kuwait', salary: 'KWD 200–350', type: 'Technicians' },
  { title: 'Welder', country: 'Oman', salary: 'OMR 250–450', type: 'Construction' },
  { title: 'Security Guard', country: 'Saudi Arabia', salary: 'SAR 1,500–2,500', type: 'Security' },
  { title: 'Bus Driver', country: 'UAE', salary: 'AED 2,000–3,000', type: 'Drivers' },
  { title: 'Warehouse Worker', country: 'Poland', salary: '€1,300–2,000', type: 'Logistics' },
  { title: 'Nurse', country: 'Germany', salary: '€2,500–3,500', type: 'Healthcare' },
  { title: 'Plumber', country: 'Qatar', salary: 'QAR 1,800–3,000', type: 'Construction' },
  { title: 'Ship Welder', country: 'South Korea', salary: 'KRW 2.5M–3.5M', type: 'Manufacturing' },
  { title: 'Construction Worker', country: 'Turkey', salary: 'TRY 18,000–30,000', type: 'Construction' },
  { title: 'Dishwasher', country: 'Poland', salary: '€1,200–1,500', type: 'Hospitality' },
  { title: 'Painter', country: 'Saudi Arabia', salary: 'SAR 1,800–3,000', type: 'Construction' },
  { title: 'AC Technician', country: 'UAE', salary: 'AED 2,000–3,500', type: 'Technicians' },
  { title: 'Steel Fixer', country: 'Qatar', salary: 'QAR 2,000–3,000', type: 'Construction' },
  { title: 'Mason', country: 'Kuwait', salary: 'KWD 150–280', type: 'Construction' },
  { title: 'Car Mechanic', country: 'Oman', salary: 'OMR 250–400', type: 'Technicians' },
  { title: 'Textile Worker', country: 'Turkey', salary: 'TRY 15,000–25,000', type: 'Manufacturing' },
  { title: 'Fisherman', country: 'South Korea', salary: 'KRW 2.0M–3.0M', type: 'Agriculture' },
];

const JOB_TYPES = ['All', ...new Set(JOBS.map((j) => j.type))];

export default function JobsStrip() {
  const [activeType, setActiveType] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = JOBS.filter((j) => {
    const matchType = activeType === 'All' || j.type === activeType;
    const matchSearch = !search ||
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.country.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <section className="py-16 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-10">
          <SectionBadge text="OPEN POSITIONS" color="bg-[#E10600]" />
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C]">
            Current Job Openings
          </h2>
          <p className="text-[#1C1C1C]/60 mt-3">
            Filter by trade or search for your ideal role.
          </p>
        </FadeUp>

        {/* Search + Filter */}
        <FadeUp className="mb-8">
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-[#1C1C1C]/40"></i>
              <input
                type="text"
                placeholder="Search jobs or countries..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-[#E10600]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E10600]/30 text-sm"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {JOB_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${
                  activeType === type
                    ? 'bg-[#E10600] text-white'
                    : 'bg-white text-[#1C1C1C]/60 border border-[#E10600]/10 hover:border-[#E10600]/30'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Jobs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((job, i) => (
            <FadeUp key={i} delay={(i % 6) + 1}>
              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all border-l-4 border-[#E10600]">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-[#1C1C1C] text-sm">{job.title}</h3>
                  <span className="text-[10px] font-bold bg-[#E10600]/10 text-[#E10600] px-2 py-0.5 rounded-full">
                    {job.type}
                  </span>
                </div>
                <p className="text-xs text-[#1C1C1C]/50 mb-1">
                  <i className="fa-solid fa-location-dot mr-1 text-[#E10600]"></i>{job.country}
                </p>
                <p className="text-xs font-semibold text-[#1C1C1C]/70 mb-3">
                  <i className="fa-solid fa-money-bill-wave mr-1 text-[#FFD500]"></i>{job.salary}
                </p>
                <a
                  href="https://wa.me/923009050416"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#FFD500] text-[#141414] px-4 py-2 rounded-full hover:bg-[#E10600] hover:text-white transition-all"
                >
                  <i className="fa-brands fa-whatsapp"></i>Apply
                </a>
              </div>
            </FadeUp>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-12 text-[#1C1C1C]/50">
              <i className="fa-solid fa-search text-3xl mb-3"></i>
              <p className="font-semibold">No matching positions found</p>
              <p className="text-sm">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}