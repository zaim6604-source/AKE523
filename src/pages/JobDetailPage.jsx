import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { jobs } from '../data/jobs';

const WA_NUMBER = '923008477507';

export default function JobDetailPage() {
  const { id } = useParams();
  const [imgError, setImgError] = useState(false);
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center text-primary text-5xl mb-6 mx-auto">
            <i className="fas fa-briefcase" />
          </div>
          <h1 className="text-4xl font-extrabold text-ink mb-2">Job Not Found</h1>
          <p className="text-ink/50 mb-6">This position may have been filled or removed.</p>
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 bg-cta text-white px-6 py-3 rounded-xl font-bold hover:brightness-110 transition-all"
          >
            <i className="fas fa-arrow-left" /> Browse All Jobs
          </Link>
        </div>
      </div>
    );
  }

  const applyText = `Hello Rolla Corporation! I am interested in applying for the ${encodeURIComponent(job.role)} position in ${encodeURIComponent(job.country)}. (%23${job.id})%0A%0APlease guide me on the next steps.`;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden bg-primary">
        <img
          src={imgError ? '/images/hero-team.jpg' : job.img}
          alt={`${job.country} - ${job.role}`}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 text-white/70 hover:text-accent text-sm mb-3 transition-colors"
            >
              <i className="fas fa-arrow-left" /> Back to Jobs
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{job.flag}</span>
              <span className="bg-accent text-ink text-xs font-bold px-3 py-1 rounded-full">
                {job.tag}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white font-heading">
              {job.role}
            </h1>
            <p className="text-white/80 text-lg mt-1">{job.country}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-ink mb-3">
                <i className="fas fa-info-circle text-primary mr-2" />
                Job Description
              </h2>
              <p className="text-ink/70 leading-relaxed">{job.description}</p>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-ink mb-3">
                <i className="fas fa-check-circle text-secondary mr-2" />
                Requirements
              </h2>
              <ul className="space-y-2">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-ink/70">
                    <span className="text-secondary mt-1 flex-shrink-0">
                      <i className="fas fa-check-circle" />
                    </span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents Required */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-ink mb-3">
                <i className="fas fa-file-alt text-accent mr-2" />
                Documents Required
              </h2>
              <ul className="space-y-2">
                {job.documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-3 text-ink/70">
                    <span className="text-accent mt-1 flex-shrink-0">
                      <i className="fas fa-check-circle" />
                    </span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-cta/20 sticky top-24">
              <h3 className="text-lg font-bold text-ink mb-2">Interested?</h3>
              <p className="text-ink/60 text-sm mb-5">
                Click below to apply for this position via WhatsApp. Our team will guide you through the process.
              </p>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${applyText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-cta text-white px-6 py-3.5 rounded-xl font-bold text-base hover:brightness-110 transition-all shadow-lg shadow-cta/30"
              >
                <i className="fab fa-whatsapp text-lg" /> Apply Now
              </a>
              <p className="text-center text-xs text-ink/40 mt-3">
                You'll be redirected to WhatsApp
              </p>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-ink mb-3">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <i className="fas fa-globe" />
                  </span>
                  <div>
                    <p className="text-ink/50 text-xs">Country</p>
                    <p className="font-medium text-ink">{job.country}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <i className="fas fa-tag" />
                  </span>
                  <div>
                    <p className="text-ink/50 text-xs">Category</p>
                    <p className="font-medium text-ink">{job.tag}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <i className="fas fa-id-badge" />
                  </span>
                  <div>
                    <p className="text-ink/50 text-xs">Job ID</p>
                    <p className="font-medium text-ink">#{job.id}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-8 h-8 rounded-full bg-cta/10 flex items-center justify-center text-cta flex-shrink-0">
                    <i className="fas fa-certificate" />
                  </span>
                  <div>
                    <p className="text-ink/50 text-xs">License</p>
                    <p className="font-medium text-ink">2266/LHR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}