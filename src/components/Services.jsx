import useScrollReveal from '../hooks/useScrollReveal';

const services = [
  { title: 'Visa Processing (Gulf)', desc: 'Fast-track visa processing for Saudi Arabia, UAE, Qatar, Kuwait, Oman, and Bahrain with high approval rates.', icon: 'fas fa-passport', color: '#0496FF' },
  { title: 'Air Ticketing & Travel', desc: 'Confirmed airline tickets at competitive rates for Gulf and international destinations.', icon: 'fas fa-ticket-alt', color: '#FB5607' },
  { title: 'Overseas Job Placement', desc: 'End-to-end placement in Gulf countries with verified employers and transparent processes.', icon: 'fas fa-briefcase', color: '#0077CC' },
  { title: 'Document Attestation', desc: 'Full document attestation and legalization services by authorized bodies for overseas requirements.', icon: 'fas fa-file-signature', color: '#5FB8FF' },
  { title: 'Medical & Trade Test Coordination', desc: 'Scheduled medical tests and trade test coordination at authorized centers.', icon: 'fas fa-heartbeat', color: '#0496FF' },
  { title: 'Pre-Departure Orientation', desc: 'Complete orientation covering travel guidelines, cultural norms, and destination country tips.', icon: 'fas fa-chalkboard-teacher', color: '#FB5607' },
  { title: 'Employer Verification', desc: 'Thorough verification of overseas employers to ensure job authenticity and fair terms.', icon: 'fas fa-shield-alt', color: '#0077CC' },
  { title: 'Skilled & Unskilled Manpower Supply', desc: 'Reliable supply of skilled and unskilled manpower for Gulf employers across all sectors.', icon: 'fas fa-users', color: '#5FB8FF' },
];

const colorMap = {
  '#0496FF': 'bg-[#0496FF]',
  '#5FB8FF': 'bg-[#5FB8FF]',
  '#FB5607': 'bg-[#FB5607]',
  '#0077CC': 'bg-[#0077CC]',
};

export default function Services() {
  const revealRef = useScrollReveal();

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#E8F5FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0496FF]/10 text-[#0496FF] rounded-full text-xs font-semibold mb-4">
            <i className="fas fa-cogs" />
            Our Services
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#062A45] mb-3">
            Everything You Need for Gulf Travel
          </h2>
          <p className="text-sm sm:text-base text-[#062A45]/60 max-w-xl mx-auto">
            From visa applications to flight tickets — we handle it all with speed and reliability.
          </p>
        </div>

        <div ref={revealRef} className="reveal masonry-grid">
          {services.map((s, i) => {
            const bgClass = colorMap[s.color] || 'bg-[#0496FF]';
            return (
              <div key={i} className="masonry-item">
                <div className={`${bgClass} rounded-2xl p-6 sm:p-8 text-white min-h-[180px] flex flex-col`}>
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-xl mb-4">
                    <i className={s.icon} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-[Plus_Jakarta_Sans] mb-2">{s.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed flex-1">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
