import useScrollReveal from '../hooks/useScrollReveal';

const services = [
  { title: 'Overseas Job Placement', desc: 'End-to-end placement in top companies across 9+ countries with verified employers.', icon: 'fas fa-briefcase', color: '#FF3CAC' },
  { title: 'Visa Processing', desc: 'Complete visa assistance — from documentation to submission and follow-up.', icon: 'fas fa-passport', color: '#784BA0' },
  { title: 'Document Attestation', desc: 'Educational, professional & personal document attestation by authorized bodies.', icon: 'fas fa-file-signature', color: '#00F5D4' },
  { title: 'Medical & Travel Coordination', desc: 'Scheduled medical tests, travel bookings, and airport pickup arrangements.', icon: 'fas fa-plane-departure', color: '#2B86C5' },
  { title: 'Pre-Departure Orientation', desc: 'Cultural & workplace orientation to prepare candidates for international roles.', icon: 'fas fa-chalkboard-teacher', color: '#FF3CAC' },
  { title: 'Employer Liaison', desc: 'Direct coordination with overseas employers to ensure job authenticity.', icon: 'fas fa-handshake', color: '#784BA0' },
  { title: 'Contract Review', desc: 'Transparent contract review so you understand every term before signing.', icon: 'fas fa-gavel', color: '#00F5D4' },
  { title: 'Post-Arrival Support', desc: 'Ongoing support after arrival — we stay with you until you settle in.', icon: 'fas fa-headset', color: '#2B86C5' },
];

const colorMap = {
  '#FF3CAC': 'bg-[#FF3CAC]',
  '#784BA0': 'bg-[#784BA0]',
  '#00F5D4': 'bg-[#00F5D4]',
  '#2B86C5': 'bg-[#2B86C5]',
};

export default function Services() {
  const revealRef = useScrollReveal();

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FFD6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF3CAC]/10 text-[#FF3CAC] rounded-full text-xs font-semibold mb-4">
            <i className="fas fa-cogs" />
            Our Services
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A0A1E] mb-3">
            Everything You Need
          </h2>
          <p className="text-sm sm:text-base text-[#1A0A1E]/60 max-w-xl mx-auto">
            From application to arrival — we handle every step of your overseas employment journey.
          </p>
        </div>

        <div ref={revealRef} className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((s, i) => {
            const bgClass = colorMap[s.color] || 'bg-[#FF3CAC]';
            const isLight = s.color === '#00F5D4';
            return (
              <div key={i} className="group">
                <div className={`${bgClass} rounded-2xl p-6 sm:p-8 ${isLight ? 'text-[#1A0A1E]' : 'text-white'} min-h-[200px] flex flex-col hover:-translate-y-1 transition-transform duration-300`}>
                  <div className={`w-12 h-12 rounded-xl ${isLight ? 'bg-[#1A0A1E]/10' : 'bg-white/20'} flex items-center justify-center text-xl mb-4`}>
                    <i className={s.icon} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-[Plus Jakarta Sans] mb-2">{s.title}</h3>
                  <p className={`text-sm ${isLight ? 'text-[#1A0A1E]/70' : 'text-white/80'} leading-relaxed flex-1`}>{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}