import { SERVICES } from './constants';
import useInView from './useInView';

const BG_COLORS = [
  'bg-[#9C27B0]',
  'bg-[#E91E63]',
  'bg-[#7B1FA2]',
  'bg-[#FF4081]',
  'bg-[#CE93D8]',
  'bg-[#FFD740]',
  'bg-[#9C27B0]',
  'bg-[#E91E63]',
];

const TEXT_COLORS = [
  'text-white',
  'text-white',
  'text-white',
  'text-white',
  'text-[#2A1033]',
  'text-[#2A1033]',
  'text-white',
  'text-white',
];

function ServiceCard({ service, index, inView }) {
  const bg = BG_COLORS[index % BG_COLORS.length];
  const tc = TEXT_COLORS[index % TEXT_COLORS.length];

  return (
    <div
      className={`${bg} ${tc} rounded-2xl p-6 md:p-8 transition-all duration-700 hover-lift ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`text-3xl md:text-4xl mb-4 ${tc}`}>
        <i className={`fas ${service.icon}`}></i>
      </div>
      <h3 className={`font-heading font-bold text-lg md:text-xl mb-2 ${tc}`}>
        {service.title}
      </h3>
      <p className={`text-sm md:text-base leading-relaxed ${tc.replace('text-', 'text-')}/80`}>
        {service.desc}
      </p>
    </div>
  );
}

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F8EEFF]">
      <div className="container-main" ref={ref}>
        <div className="text-center mb-4">
          <span className="pill-badge">
            <i className="fas fa-briefcase text-[10px] mr-1.5"></i>
            OUR SERVICES
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#2A1033] mb-4">
          Comprehensive Recruitment Solutions
        </h2>
        <p className="text-center text-[#2A1033]/60 max-w-2xl mx-auto mb-10 md:mb-14">
          From manpower supply to travel support — we handle every aspect of overseas employment
          with professionalism and care.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* First card: full width on lg */}
          <div className="lg:col-span-2 lg:row-span-1">
            <ServiceCard service={SERVICES[0]} index={0} inView={inView} />
          </div>
          <ServiceCard service={SERVICES[1]} index={1} inView={inView} />
          <ServiceCard service={SERVICES[2]} index={2} inView={inView} />
          <ServiceCard service={SERVICES[3]} index={3} inView={inView} />
          <ServiceCard service={SERVICES[4]} index={4} inView={inView} />
          <ServiceCard service={SERVICES[5]} index={5} inView={inView} />
          <ServiceCard service={SERVICES[6]} index={6} inView={inView} />
          <ServiceCard service={SERVICES[7]} index={7} inView={inView} />
        </div>
      </div>
    </section>
  );
}