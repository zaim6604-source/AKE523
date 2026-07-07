import { FaComments, FaSearch, FaFileAlt, FaCogs, FaHeadset } from 'react-icons/fa';
import useInView from '../hooks/useInView';

const steps = [
  { number: 1, title: 'Consultation', desc: 'We start with a free consultation to understand your needs, goals, and requirements.', icon: FaComments },
  { number: 2, title: 'Understand Your Needs', desc: 'Our team thoroughly analyzes your profile or business needs to craft the right approach.', icon: FaSearch },
  { number: 3, title: 'Sourcing & Solution', desc: 'We source the best candidates or design the perfect solution tailored to you.', icon: FaFileAlt },
  { number: 4, title: 'Selection & Setup', desc: 'Final selection, documentation, and setup handled seamlessly by our experts.', icon: FaCogs },
  { number: 5, title: 'Ongoing Support', desc: 'Continued support to ensure success and satisfaction long after the process.', icon: FaHeadset },
];

export default function Process() {
  const [ref, inView] = useInView();

  return (
    <section id="process" className="relative py-20 md:py-28 overflow-hidden">
      {/* Diagonal background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #D7263D 0%, #7768AE 100%)',
            transform: 'skewY(-3deg)',
            transformOrigin: 'top left',
            top: '-10%',
            bottom: '-10%',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white mb-4 backdrop-blur-sm uppercase tracking-wider">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white">
            Our Simple{' '}
            <span className="text-[#02C39A]">Process</span>
          </h2>
          <p className="text-white/80 text-base md:text-lg mt-3 max-w-2xl mx-auto">
            A streamlined approach from consultation to success.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto space-y-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="flex items-start gap-5 md:gap-8 bg-white/10 backdrop-blur-md rounded-2xl p-5 md:p-7 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div
                  className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-extrabold font-heading shadow-lg"
                  style={{
                    background: i % 2 === 0 ? '#02C39A' : '#D7263D',
                    color: i % 2 === 0 ? '#340710' : 'white',
                  }}
                >
                  {step.number}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="text-[#02C39A] text-lg" />
                    <h3 className="font-heading font-bold text-lg md:text-xl text-white">{step.title}</h3>
                  </div>
                  <p className="text-white/75 text-sm md:text-base leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
