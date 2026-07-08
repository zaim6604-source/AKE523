import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import useInView from '../hooks/useInView';
import JOBS, { COUNTRIES } from '../data/jobs';

const FALLBACK_IMG = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22800%22 height%3D%22600%22%3E%3Crect width%3D%22800%22 height%3D%22600%22 fill%3D%22%23F2F6F9%22%2F%3E%3Ccircle cx%3D%22400%22 cy%3D%22300%22 r%3D%2280%22 fill%3D%22%23C9CCD5%22%2F%3E%3C%2Fsvg%3E';

export default function JobDetail() {
  const { id } = useParams();
  const job = JOBS.find((j) => j.id === id);
  const [ref, inView] = useInView({ threshold: 0.1 });

  if (!job) {
    return (
      <div className="page-enter min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-[#C9CCD5]/30 flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-exclamation-triangle text-2xl text-[#C9CCD5]" />
          </div>
          <h2 className="text-2xl font-bold text-[#0B2436] mb-2">Job Not Found</h2>
          <p className="text-[#0B2436]/60 mb-6">The job you're looking for doesn't exist or has been filled.</p>
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 bg-[#1B4965] hover:bg-[#0B3954] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all"
          >
            <i className="fas fa-arrow-left" />
            Back to Jobs
          </Link>
        </div>
      </div>
    );
  }

  const country = COUNTRIES[job.countryKey];
  const waText = `Hello Gulalai Overseas! I'm interested in the ${job.role} position in ${country.name}. Please guide me about the requirements and process.`;
  const waUrl = `https://wa.me/923341999588?text=${encodeURIComponent(waText)}`;

  const relatedJobs = JOBS.filter(
    (j) => j.countryKey === job.countryKey && j.id !== job.id
  ).slice(0, 3);

  return (
    <div className="page-enter">
      {/* ─── Hero Image ─── */}
      <section className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
        <img
          src={country.image}
          alt={country.landmark}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = FALLBACK_IMG; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 lg:left-8">
          <Link
            to="/jobs"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-xs sm:text-sm font-medium mb-2 transition-colors"
          >
            <i className="fas fa-arrow-left" />
            Back to Jobs
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{country.flag}</span>
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">{job.role}</h1>
              <p className="text-sm text-white/80">{country.name} &middot; {country.landmark}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Content ─── */}
      <section className="py-8 sm:py-12" ref={ref}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className={`bg-white rounded-2xl shadow-md p-6 sm:p-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-lg font-bold text-[#0B2436] mb-4 flex items-center gap-2">
                  <i className="fas fa-info-circle text-[#1B4965]" />
                  Job Description
                </h2>
                <p className="text-[#0B2436]/70 leading-relaxed">{job.description}</p>
              </div>

              {/* Requirements */}
              <div className={`bg-white rounded-2xl shadow-md p-6 sm:p-8 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-lg font-bold text-[#0B2436] mb-4 flex items-center gap-2">
                  <i className="fas fa-clipboard-list text-[#1B4965]" />
                  Requirements
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-[#5FA8D3] text-sm mt-0.5 shrink-0" />
                      <span className="text-sm text-[#0B2436]/70">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documents Needed */}
              <div className={`bg-white rounded-2xl shadow-md p-6 sm:p-8 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-lg font-bold text-[#0B2436] mb-4 flex items-center gap-2">
                  <i className="fas fa-file-alt text-[#1B4965]" />
                  Documents Required
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {job.documents.map((doc, i) => (
                    <li key={i} className="flex items-center gap-3 bg-[#F2F6F9] rounded-xl px-4 py-3">
                      <div className="w-8 h-8 rounded-lg bg-[#5FA8D3]/10 flex items-center justify-center shrink-0">
                        <i className="fas fa-file text-[#5FA8D3] text-xs" />
                      </div>
                      <span className="text-sm text-[#0B2436]/70">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Summary Card */}
              <div className={`bg-white rounded-2xl shadow-md p-6 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="font-bold text-[#0B2436] text-sm mb-4 uppercase tracking-wider">Job Summary</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#0B2436]/50">Country</span>
                    <span className="font-semibold text-[#0B2436]">{country.flag} {country.name}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#0B2436]/50">Region</span>
                    <span className="font-semibold text-[#0B2436]">{country.region}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#0B2436]/50">Category</span>
                    <span className="font-semibold text-[#0B2436]">{job.category}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#0B2436]/50">Salary</span>
                    <span className="font-semibold text-[#1B4965]">{job.salary}{job.salaryInterval}</span>
                  </div>
                </div>
              </div>

              {/* Apply Card */}
              <div className={`bg-gradient-to-br from-[#FF6B35] to-[#e85d2a] rounded-2xl shadow-md p-6 text-white transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="font-bold text-lg mb-2">Interested?</h3>
                <p className="text-sm text-white/80 mb-5">
                  Click below to apply for this position instantly via WhatsApp.
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-[#FF6B35] hover:bg-gray-100 font-bold py-3 rounded-xl text-sm transition-all text-center shadow-lg"
                >
                  <i className="fab fa-whatsapp mr-2" />
                  Apply via WhatsApp
                </a>
                <p className="text-[10px] text-white/60 text-center mt-3">
                  Your message will be prefilled with this job details.
                </p>
              </div>

              {/* Quick Contact */}
              <div className={`bg-white rounded-2xl shadow-md p-6 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="font-bold text-[#0B2436] text-sm mb-4">Need Help?</h3>
                <p className="text-xs text-[#0B2436]/60 mb-4">
                  Call or message us and we'll help you find the right opportunity.
                </p>
                <a
                  href="https://wa.me/923341999588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#0B2436]/70 hover:text-[#FF6B35] transition-colors mb-3"
                >
                  <div className="w-9 h-9 rounded-full bg-[#FF6B35]/10 flex items-center justify-center shrink-0">
                    <i className="fab fa-whatsapp text-[#FF6B35] text-xs" />
                  </div>
                  <span>+92-334-1999588</span>
                </a>
                <a
                  href="mailto:info@gulalaioverseas.pk"
                  className="flex items-center gap-3 text-sm text-[#0B2436]/70 hover:text-[#FF6B35] transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-[#1B4965]/10 flex items-center justify-center shrink-0">
                    <i className="fas fa-envelope text-[#1B4965] text-xs" />
                  </div>
                  <span>info@gulalaioverseas.pk</span>
                </a>
              </div>
            </div>
          </div>

          {/* ─── Related Jobs ─── */}
          {relatedJobs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#C9CCD5]/30">
              <h2 className="text-xl font-bold text-[#0B2436] mb-6">
                More Jobs in {country.name}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedJobs.map((rj) => (
                  <Link
                    key={rj.id}
                    to={`/jobs/${rj.id}`}
                    className="card-lift bg-white rounded-xl shadow-sm p-5 border border-[#C9CCD5]/20"
                  >
                    <span className="text-xs font-semibold text-[#FF6B35] mb-1 block">{rj.category}</span>
                    <h3 className="font-bold text-[#0B2436] text-sm mb-1">{rj.role}</h3>
                    <p className="text-xs text-[#1B4965] font-semibold">{rj.salary}{rj.salaryInterval}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}