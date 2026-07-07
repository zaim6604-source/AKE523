import useReveal from '../hooks/useReveal';
import { FaChalkboardTeacher, FaIndustry, FaCertificate, FaGlobeAsia } from 'react-icons/fa';

const FEATURES = [
  { icon: FaChalkboardTeacher, title: 'Experienced Instructors', desc: 'Learn from certified professionals with years of practical trade experience.', color: '#FF206E' },
  { icon: FaIndustry, title: 'Real Workshop Practice', desc: 'Train on real equipment in our fully equipped workshop facility.', color: '#41EAD4' },
  { icon: FaCertificate, title: 'Recognised Certificates', desc: 'Receive certificates that are valued and trusted by employers.', color: '#7B2D8E' },
  { icon: FaGlobeAsia, title: 'Overseas-Ready Skills', desc: 'Skills and certification aligned with international workplace standards.', color: '#FBFF12' },
];

export default function WhyChooseUs() {
  useReveal('.why-reveal');

  return (
    <section className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#FFF8E0' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 why-reveal reveal">
          <span className="pill-badge">WHY NEW TRADEMAN</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#1A1423' }}>
            Why Choose Us
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#4B4453' }}>
            What makes New Trademan the right choice for your trade training and certification.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            const isYellow = f.color === '#FBFF12';
            return (
              <div
                key={i}
                className="why-reveal reveal rounded-2xl p-6 md:p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: '#fff', border: `1px solid ${f.color}20` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md"
                  style={{ background: f.color }}
                >
                  <Icon size={24} color={isYellow ? '#1A1423' : '#fff'} />
                </div>
                <h3 className="font-display font-bold text-base mb-2" style={{ color: '#1A1423' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4B4453' }}>{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}