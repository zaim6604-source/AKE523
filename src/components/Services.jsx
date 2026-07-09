import { useState } from 'react';
import SectionWrapper from './SectionWrapper';

const services = [
  { icon: 'fa-briefcase', title: 'Overseas Job Placement', desc: 'Connecting skilled workers with top international employers across the Gulf and Europe.', details: 'We match your skills and experience with trusted overseas employers. From application to offer letter, our team handles the entire placement process, ensuring you secure the best possible position.', color: 'bg-primary' },
  { icon: 'fa-passport', title: 'Visa Processing', desc: 'End-to-end visa application and documentation support.', details: 'Our experts manage the complete visa application process — from form filling to embassy submission. We track your application status and keep you informed at every stage.', color: 'bg-highlight' },
  { icon: 'fa-file-signature', title: 'Document Attestation', desc: 'Professional attestation and verification of credentials.', details: 'We handle the attestation of your educational degrees, professional certificates, and personal documents from all relevant Pakistani authorities and foreign embassies.', color: 'bg-primary' },
  { icon: 'fa-stethoscope', title: 'Medical & Trade Tests', desc: 'Coordination of medical exams and skill assessments.', details: 'We coordinate with authorized medical centers for your fitness examination and arrange trade tests to verify your skills for overseas employment requirements.', color: 'bg-highlight' },
  { icon: 'fa-plane-departure', title: 'Pre-Departure Orientation', desc: 'Comprehensive briefings before you travel.', details: 'Get thorough orientation covering language basics, cultural norms, workplace expectations, safety guidelines, and travel tips for your destination country.', color: 'bg-primary' },
  { icon: 'fa-ticket-alt', title: 'Air Ticketing & Travel', desc: 'Affordable flight bookings and travel coordination.', details: 'We book your flight at the best available rates and coordinate your travel itinerary, including airport transfers and arrival assistance at your destination.', color: 'bg-highlight' },
  { icon: 'fa-shield-check', title: 'Employer Verification', desc: 'Thorough vetting of overseas employers and contracts.', details: 'We verify the legitimacy of overseas employers, review employment contracts for fair terms, and ensure your rights and benefits are fully protected before you sign.', color: 'bg-primary' },
  { icon: 'fa-hard-hat', title: 'Manpower Supply', desc: 'Skilled and unskilled manpower for global industries.', details: 'We supply qualified, vetted manpower to international employers across construction, hospitality, manufacturing, healthcare, and logistics sectors.', color: 'bg-highlight' },
];

export default function Services() {
  const [modal, setModal] = useState(null);

  return (
    <SectionWrapper id="services" badge="OUR SERVICES" badgeColor="primary">
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-2 font-display">
        What We Offer
      </h2>
      <p className="text-ink/60 mb-10 max-w-2xl">
        Comprehensive recruitment services tailored to your international career goals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((svc) => (
          <button
            key={svc.title}
            onClick={() => setModal(svc)}
            className={`${svc.color} text-white rounded-2xl p-6 text-left hover:brightness-110 transition-all duration-300 shadow-xl cursor-pointer group`}
          >
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
              <i className={`fas ${svc.icon}`} />
            </div>
            <h3 className="text-xl font-bold mb-2">{svc.title}</h3>
            <p className="text-white/80 text-sm leading-relaxed">{svc.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-white/60 group-hover:text-white transition-colors">
              Learn More <i className="fas fa-arrow-right text-xs" />
            </span>
          </button>
        ))}
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay" onClick={() => setModal(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white text-xl">
                  <i className={`fas ${modal.icon}`} />
                </div>
                <h3 className="text-2xl font-bold text-ink">{modal.title}</h3>
              </div>
              <button onClick={() => setModal(null)} className="text-ink/40 hover:text-primary text-2xl">
                <i className="fas fa-times" />
              </button>
            </div>
            <p className="text-ink/70 leading-relaxed mb-6">{modal.details}</p>
            <a
              href="https://wa.me/923335020040"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:brightness-110 transition-all"
            >
              <i className="fab fa-whatsapp" /> Inquire About This Service
            </a>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
