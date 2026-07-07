import useReveal from '../hooks/useReveal';
import { FaUserPlus, FaTools, FaClipboardCheck, FaChartBar, FaCertificate } from 'react-icons/fa';

const STEPS = [
  { icon: FaUserPlus, title: 'Register & Pick a Trade', desc: 'Sign up and choose the trade you want to be trained or tested in.' },
  { icon: FaTools, title: 'Training / Skill Prep', desc: 'Hands-on training with experienced instructors using real workshop equipment.' },
  { icon: FaClipboardCheck, title: 'Practical Trade Test', desc: 'Undergo a thorough practical assessment based on industry standards.' },
  { icon: FaChartBar, title: 'Assessment & Grading', desc: 'Your performance is evaluated and graded by certified assessors.' },
  { icon: FaCertificate, title: 'Certificate Issued', desc: 'Receive a recognised trade test certificate upon successful completion.' },
];

const STEP_COLORS = ['#FF206E', '#FF6B35', '#41EAD4', '#7B2D8E', '#FBFF12'];

export default function Process() {
  useReveal('.prc-reveal');

  return (
    <section
      id="process"
      className="py-[clamp(60px,10vw,100px)] px-5 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FF206E 0%, #D4005A 30%, #7B2D8E 60%, #41EAD4 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 prc-reveal reveal">
          <span className="pill-badge" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>HOW IT WORKS</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#fff' }}>
            Your Journey to Certification
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            From registration to certification — a clear path to proving your trade skills.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {STEPS.map((s, i) => (
            <div key={i} className="prc-reveal reveal text-center" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                style={{ background: STEP_COLORS[i] }}
              >
                <s.icon size={24} color={i === 4 ? '#1A1423' : '#fff'} />
              </div>
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold"
                style={{ background: 'rgba(255,255,255,0.15)', color: '#FBFF12' }}
              >
                {i + 1}
              </div>
              <h3 className="font-display font-bold text-sm mb-1.5" style={{ color: '#fff' }}>{s.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
