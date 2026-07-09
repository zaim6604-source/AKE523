import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { destinationCountries, destinationDetails } from '../data/jobs';

const chipColors = ['bg-primary', 'bg-highlight', 'bg-ink', 'bg-primary', 'bg-highlight', 'bg-ink', 'bg-primary', 'bg-highlight', 'bg-ink'];

export default function Countries() {
  const [modal, setModal] = useState(null);
  const [imgErrors, setImgErrors] = useState({});

  return (
    <SectionWrapper id="countries" badge="DESTINATIONS" badgeColor="highlight">
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-2 font-display">
        Where We Can Take You
      </h2>
      <p className="text-ink/60 mb-10 max-w-2xl">
        Opportunities across the globe — from the Middle East to Europe and Asia.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {destinationCountries.map((country, idx) => {
          const details = destinationDetails[country.name];
          return (
            <button
              key={country.name}
              onClick={() => setModal(country.name)}
              className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 group text-left cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden bg-primary">
                <img
                  src={imgErrors[country.name] ? 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop' : details?.landmark}
                  alt={`Landmark in ${country.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={() => setImgErrors((p) => ({ ...p, [country.name]: true }))}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-2xl">{country.flag}</span>
                  <h3 className="text-white font-bold text-lg">{country.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-ink/60 text-sm">
                  <span className="font-semibold text-ink">Roles:</span> {details?.roles || 'Various'}
                </p>
                <p className="text-ink/60 text-sm mt-1">
                  <span className="font-semibold text-ink">Salary:</span> {details?.salaryRange || 'Competitive'}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  View Details <i className="fas fa-arrow-right text-xs" />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {destinationCountries.map((country, i) => (
          <button
            key={country.name}
            onClick={() => setModal(country.name)}
            className={`${chipColors[i % chipColors.length]} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:brightness-110 transition-all cursor-pointer`}
          >
            {country.flag} {country.name}
          </button>
        ))}
      </div>

      {modal && destinationDetails[modal] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay" onClick={() => setModal(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-48 bg-primary">
              <img
                src={destinationDetails[modal].landmark}
                alt={modal}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <h3 className="text-2xl font-bold text-white">{modal}</h3>
              </div>
              <button onClick={() => setModal(null)} className="absolute top-4 right-4 text-white/80 hover:text-white text-xl">
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-xl p-4">
                  <div className="text-xs font-semibold text-ink/50 uppercase tracking-wider">Roles</div>
                  <div className="font-bold text-ink text-sm mt-1">{destinationDetails[modal].roles}</div>
                </div>
                <div className="bg-accent/5 rounded-xl p-4">
                  <div className="text-xs font-semibold text-ink/50 uppercase tracking-wider">Salary Range</div>
                  <div className="font-bold text-ink text-sm mt-1">{destinationDetails[modal].salaryRange}</div>
                </div>
                <div className="bg-highlight/5 rounded-xl p-4">
                  <div className="text-xs font-semibold text-ink/50 uppercase tracking-wider">Requirements</div>
                  <div className="font-bold text-ink text-sm mt-1">{destinationDetails[modal].requirements}</div>
                </div>
                <div className="bg-ink/5 rounded-xl p-4">
                  <div className="text-xs font-semibold text-ink/50 uppercase tracking-wider">Processing Time</div>
                  <div className="font-bold text-ink text-sm mt-1">{destinationDetails[modal].processingTime}</div>
                </div>
              </div>
              <a
                href={`https://wa.me/923335020040?text=${encodeURIComponent(`Hello Zanib Recruiting Agency! I am interested in working in ${modal}. Please share details about available opportunities.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-white text-center py-3 rounded-full font-bold hover:brightness-110 transition-all"
              >
                <i className="fab fa-whatsapp mr-2" />Apply for {modal}
              </a>
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
